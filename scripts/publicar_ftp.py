"""Publica site/dist/ na Hostinger por FTPS.

Uso (na raiz do projeto, depois de `npm --prefix site run build`):
    python scripts/publicar_ftp.py            # mostra o que vai subir e envia
    python scripts/publicar_ftp.py --simular  # só mostra, não envia
    python scripts/publicar_ftp.py --limpar   # também apaga do servidor arquivos antigos de _astro/

Credenciais: variáveis FTP_HOST, FTP_USER, FTP_PASS (e opcional FTP_DIR) ou o arquivo
.ftp.env na raiz do projeto (fora do Git), uma por linha no formato CHAVE=valor.

Regras: arquivos de _astro/ têm hash no nome, então só sobem se ainda não existem no servidor.
Os demais (HTML, sitemap, .htaccess, texturas...) sobem sempre que faltam ou mudam de tamanho,
e HTML/XML/TXT/.htaccess sobem sempre. Nada fora de _astro/ é apagado.
"""
import ftplib, os, posixpath, sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
DIST = RAIZ / 'site' / 'dist'
SEMPRE = {'.html', '.xml', '.txt', '.htaccess', '.json'}


def credenciais():
    env = {}
    arq = RAIZ / '.ftp.env'
    if arq.exists():
        for linha in arq.read_text(encoding='utf-8').splitlines():
            if '=' in linha and not linha.lstrip().startswith('#'):
                k, v = linha.split('=', 1)
                env[k.strip()] = v.strip()
    env.update({k: v for k, v in os.environ.items() if k.startswith('FTP_')})
    faltam = [k for k in ('FTP_HOST', 'FTP_USER', 'FTP_PASS') if not env.get(k)]
    if faltam:
        sys.exit(f'Faltam credenciais: {", ".join(faltam)} (defina no .ftp.env ou em variáveis de ambiente)')
    return env['FTP_HOST'], env['FTP_USER'], env['FTP_PASS'], env.get('FTP_DIR', '/domains/ciclosmais.com/public_html')


HOST, USER, PASS, REMOTO = credenciais()


def conectar():
    f = ftplib.FTP_TLS(HOST, timeout=60)
    f.login(USER, PASS)
    f.prot_p()
    f.set_pasv(True)
    return f


ftp = conectar()


def comando(fn, *args):
    global ftp
    for _ in range(4):
        try:
            return fn(ftp, *args)
        except (ConnectionError, TimeoutError, OSError, EOFError, ftplib.error_temp) as e:
            print(f'  reconectando ({type(e).__name__})')
            try:
                ftp.close()
            except Exception:
                pass
            ftp = conectar()
    sys.exit('O servidor não respondeu depois de várias tentativas.')


def listar(dirpath, rel=''):
    arquivos, pastas = {}, set()
    try:
        itens = comando(lambda f, d: list(f.mlsd(d, facts=['type', 'size'])), dirpath)
    except ftplib.error_perm:
        return arquivos, pastas
    for nome, fatos in itens:
        if nome in ('.', '..'):
            continue
        r = f'{rel}/{nome}' if rel else nome
        if fatos.get('type') == 'dir':
            pastas.add(r)
            a, p = listar(posixpath.join(dirpath, nome), r)
            arquivos.update(a)
            pastas |= p
        elif fatos.get('type') == 'file':
            arquivos[r] = int(fatos.get('size', -1))
    return arquivos, pastas


def precisa_subir(rel, tamanho, remoto):
    if rel not in remoto:
        return True
    if rel.startswith('_astro/'):
        return False
    if Path(rel).suffix in SEMPRE or rel.endswith('.htaccess'):
        return True
    return remoto[rel] != tamanho


def main():
    simular = '--simular' in sys.argv
    limpar = '--limpar' in sys.argv
    if not (DIST / 'index.html').exists():
        sys.exit('site/dist/ não existe. Rode antes: npm --prefix site run build')

    local = {p.relative_to(DIST).as_posix(): p.stat().st_size for p in DIST.rglob('*') if p.is_file()}
    # Lista só as pastas que o build gera, para não varrer o que mais houver no servidor.
    remoto, pastas = {}, set()
    topo = {r.split('/')[0] for r in local if '/' in r}
    raiz_itens = comando(lambda f, d: list(f.mlsd(d, facts=['type', 'size'])), REMOTO)
    for nome, fatos in raiz_itens:
        if fatos.get('type') == 'file':
            remoto[nome] = int(fatos.get('size', -1))
        elif fatos.get('type') == 'dir' and nome in topo:
            pastas.add(nome)
            a, p = listar(posixpath.join(REMOTO, nome), nome)
            remoto.update(a)
            pastas |= p

    subir = sorted(r for r, t in local.items() if precisa_subir(r, t, remoto))
    antigos = sorted(r for r in remoto if r.startswith('_astro/') and r not in local)
    print(f'{len(local)} arquivos no dist | {len(subir)} para enviar | {len(antigos)} antigos em _astro/ no servidor')
    for r in subir:
        print('  +', r)
    if limpar:
        for r in antigos:
            print('  -', r)
    if simular:
        print('Simulação: nada foi enviado.')
        return

    for r in subir:
        pasta = posixpath.dirname(r)
        if pasta:
            partes = pasta.split('/')
            for i in range(1, len(partes) + 1):
                sub = '/'.join(partes[:i])
                if sub not in pastas:
                    try:
                        comando(lambda f, d: f.mkd(d), posixpath.join(REMOTO, sub))
                    except ftplib.error_perm:
                        pass
                    pastas.add(sub)
        with open(DIST / r, 'rb') as arq:
            comando(lambda f, caminho: (arq.seek(0), f.storbinary(f'STOR {caminho}', arq)), posixpath.join(REMOTO, r))
    if limpar:
        for r in antigos:
            comando(lambda f, caminho: f.delete(caminho), posixpath.join(REMOTO, r))
    print(f'Pronto: {len(subir)} enviados' + (f', {len(antigos)} apagados.' if limpar else '.'))
    try:
        ftp.quit()
    except Exception:
        pass


main()
