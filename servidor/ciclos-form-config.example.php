<?php
// Modelo da configuração do envio de formulários.
// Copie para servidor/ciclos-form-config.php (fora do Git), preencha a senha e publique com
//   python scripts/publicar_ftp.py --config
// O arquivo vai para /domains/ciclosmais.com/ciclos-form-config.php, FORA do public_html.
return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465, // SSL/TLS
    'smtp_user' => 'form@ciclosmais.com',
    'smtp_pass' => 'COLOQUE-A-SENHA-AQUI',
    'destino' => 'contato@ciclosmais.com',
    'origens' => ['https://ciclosmais.com', 'https://www.ciclosmais.com'],
    // Pasta (fora do public_html) para a cópia dos contatos, o limite por IP e o log de erros.
    'dados_dir' => __DIR__ . '/ciclos-form-dados',
];
