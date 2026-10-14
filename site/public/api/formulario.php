<?php
// Recebe os formulários do site (JSON por POST) e envia por e-mail via SMTP autenticado.
// A configuração (SMTP, senha, destino) fica FORA do public_html: ../../ciclos-form-config.php
// Modelo em servidor/ciclos-form-config.example.php no repositório.

declare(strict_types=1);
date_default_timezone_set('America/Sao_Paulo');
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function responder(int $codigo, array $dados): void {
    http_response_code($codigo);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}

$cfgArquivo = dirname(__DIR__, 2) . '/ciclos-form-config.php';
if (!is_file($cfgArquivo)) responder(500, ['ok' => false, 'erro' => 'config']);
$cfg = require $cfgArquivo;

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') responder(405, ['ok' => false, 'erro' => 'metodo']);

// Só aceita envios vindos do próprio site.
$origem = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origem !== '' && !in_array($origem, $cfg['origens'], true)) responder(403, ['ok' => false, 'erro' => 'origem']);

$bruto = file_get_contents('php://input', false, null, 0, 20000);
$d = json_decode((string) $bruto, true);
if (!is_array($d)) responder(400, ['ok' => false, 'erro' => 'json']);

// Campo-isca: pessoas não veem; robôs preenchem.
if (!empty($d['site_web'])) responder(200, ['ok' => true]);

$limpa = fn($v, int $max = 300) => mb_substr(trim(preg_replace('/[\x00-\x1F\x7F]+/u', ' ', (string) $v)), 0, $max);
$nome = $limpa($d['nome'] ?? '', 120);
$telefone = $limpa($d['telefone'] ?? '', 40);
$digitos = preg_replace('/\D/', '', $telefone);
if (mb_strlen($nome) < 2 || strlen($digitos) < 10 || strlen($digitos) > 13) responder(422, ['ok' => false, 'erro' => 'campos']);

// Limite simples por IP: no máximo 6 envios a cada 10 minutos.
$dadosDir = $cfg['dados_dir'];
if (!is_dir($dadosDir)) @mkdir($dadosDir, 0750, true);
$ip = $_SERVER['REMOTE_ADDR'] ?? '0';
$marcaIp = $dadosDir . '/limite-' . hash('sha256', $ip) . '.json';
$agora = time();
$envios = is_file($marcaIp) ? array_filter((array) json_decode((string) file_get_contents($marcaIp), true), fn($t) => $t > $agora - 600) : [];
if (count($envios) >= 6) responder(429, ['ok' => false, 'erro' => 'limite']);
$envios[] = $agora;
@file_put_contents($marcaIp, json_encode(array_values($envios)));

$rotulos = [
    'formulario' => 'Formulário',
    'evento' => 'Evento',
    'tipo' => 'Tipo',
    'nome' => 'Nome',
    'telefone' => 'WhatsApp/telefone',
    'unidade' => 'Unidade',
    'para' => 'Interesse',
    'assuntos' => 'Assuntos de interesse',
    'origemDeclarada' => 'Como conheceu a CICLOS+',
    'aceiteWhatsapp' => 'Aceita contato pelo WhatsApp',
    'origem' => 'Origem (utm_source)',
    'campanha' => 'Campanha (utm_campaign)',
    'pagina' => 'Página',
];
$linhas = [];
$registro = ['data' => date('c'), 'ip' => $ip];
foreach ($rotulos as $chave => $rotulo) {
    if (!array_key_exists($chave, $d)) continue;
    $v = $d[$chave];
    if (is_bool($v)) $v = $v ? 'Sim' : 'Não';
    elseif (is_array($v)) $v = implode(', ', array_map(fn($x) => $limpa($x, 80), array_slice($v, 0, 20)));
    else $v = $limpa($v);
    if ($v === '') continue;
    $linhas[] = "$rotulo: $v";
    $registro[$chave] = $v;
}
$whats = 'https://wa.me/55' . ltrim(preg_replace('/^55(?=\d{10,11}$)/', '', $digitos), '0');
$linhas[] = '';
$linhas[] = "Responder pelo WhatsApp: $whats";
$linhas[] = 'Enviado em: ' . date('d/m/Y H:i');

// Cópia de segurança de cada contato, fora do public_html.
@file_put_contents($dadosDir . '/contatos.jsonl', json_encode($registro, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);

$assuntoForm = $registro['evento'] ?? ($registro['formulario'] ?? 'Quero conhecer');
$assunto = "Novo contato pelo site: $nome · $assuntoForm";
$corpo = "Novo contato recebido pelo site da CICLOS+.\n\n" . implode("\n", $linhas) . "\n";

$erro = '';
if (!enviarSmtp($cfg, $cfg['destino'], $assunto, $corpo, $erro)) {
    @file_put_contents($dadosDir . '/erros.log', date('c') . " $erro\n", FILE_APPEND | LOCK_EX);
    responder(502, ['ok' => false, 'erro' => 'envio']);
}
responder(200, ['ok' => true]);

function enviarSmtp(array $cfg, string $para, string $assunto, string $corpo, string &$erro): bool {
    $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true]]);
    $fp = @stream_socket_client('ssl://' . $cfg['smtp_host'] . ':' . $cfg['smtp_port'], $errno, $errstr, 20, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) { $erro = "conexao: $errstr"; return false; }
    stream_set_timeout($fp, 20);

    $ler = function () use ($fp): string {
        $resp = '';
        while (($linha = fgets($fp, 1024)) !== false) {
            $resp .= $linha;
            if (strlen($linha) < 4 || $linha[3] === ' ') break;
        }
        return $resp;
    };
    // $etapa é o que vai para o log em caso de falha (nunca o conteúdo do comando, que pode ter a senha).
    $cmd = function (?string $c, string $esperado, string $etapa) use ($fp, $ler, &$erro): bool {
        if ($c !== null) fwrite($fp, $c . "\r\n");
        $r = $ler();
        if (strncmp($r, $esperado, 3) !== 0) { $erro = "$etapa -> " . trim($r); return false; }
        return true;
    };

    $de = $cfg['smtp_user'];
    $assuntoCod = '=?UTF-8?B?' . base64_encode($assunto) . '?=';
    $nomeDe = '=?UTF-8?B?' . base64_encode('Site CICLOS+') . '?=';
    $cabecalhos = implode("\r\n", [
        'Date: ' . date('r'),
        "From: $nomeDe <$de>",
        "To: <$para>",
        "Subject: $assuntoCod",
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@ciclosmais.com>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
    ]);
    $mensagem = $cabecalhos . "\r\n\r\n" . rtrim(chunk_split(base64_encode($corpo), 76, "\r\n")) . "\r\n";

    $ok = $cmd(null, '220', 'saudacao')
        && $cmd('EHLO ciclosmais.com', '250', 'ehlo')
        && $cmd('AUTH LOGIN', '334', 'auth')
        && $cmd(base64_encode($de), '334', 'usuario')
        && $cmd(base64_encode($cfg['smtp_pass']), '235', 'senha')
        && $cmd("MAIL FROM:<$de>", '250', 'mail-from')
        && $cmd("RCPT TO:<$para>", '250', 'rcpt-to')
        && $cmd('DATA', '354', 'data')
        && $cmd($mensagem . '.', '250', 'mensagem');
    fwrite($fp, "QUIT\r\n");
    fclose($fp);
    return $ok;
}
