# CICLOS+ · Site institucional — contexto para continuar o trabalho

> Este arquivo é lido automaticamente pelo Claude Code ao abrir a pasta. Ele resume tudo o que foi feito até **05/10/2026** para que o trabalho continue em outra máquina sem perder contexto. Atualize a seção "Estado atual" e "Próximos passos" sempre que avançar. O [AGENTS.md](AGENTS.md) é a cópia deste arquivo para o Codex: mantenha os dois iguais.

## 1. O que é o projeto

Novo site institucional da **CICLOS+ · Escola Cultural 60+** ("Aprender, conectar, viver!"), escola cultural para pessoas 60+ em **Porto Alegre** e **Pelotas** (franquia). Cliente atendida pela **Agência Tweed**. Substituirá o site atual em <https://ciclosmais.com/>.

Já estão prontas a **Home** e **todas as páginas institucionais**: disciplinas (índice + uma página por disciplina), cursos livres, viagens culturais, confraternizações e unidades (índice + uma página por unidade). O site institucional está pronto para ir ao ar e receber as campanhas "Always On" de topo de funil, que apontam sempre para a Home. As **landing pages da campanha de Pelotas** (Masterclass, cursos livres de novembro, inscrição nas disciplinas de 2027) foram deixadas para depois, por decisão do cliente.

## 2. Documentos de referência (leia antes de mexer)

| Arquivo | Para que serve |
|---|---|
| [PRODUCT.md](PRODUCT.md) | Briefing de produto: público, posicionamento, funil de Pelotas, regras de marca, acessibilidade, decisões em aberto. **Fonte da verdade para tom e conteúdo.** |
| [DESIGN.md](DESIGN.md) | Sistema visual: tokens de cor, tipografia, componentes, do's & don'ts. **Fonte da verdade para visual.** |
| [conteudo_site_ciclosmais.md](conteudo_site_ciclosmais.md) | Textos extraídos do site atual (base de conteúdo). |
| [Estrategia e Analise ChatGPT.md](Estrategia%20e%20Analise%20ChatGPT.md) | Estratégia de marketing detalhada. |
| `Ciclos+_Pelotas_Estrategia_de_Marketing_Tweed.pdf` | Estratégia da campanha de Pelotas (Tweed). |
| `MIV - CICLOS+ (2).pdf` | Manual de identidade visual (logo, cores, fontes). |
| `Moodboard & Direção Criativa1 (2).pdf` | Moodboard e direção criativa (texturas, paleta p.6, conceito "Casa Ciclos"). |
| `.impeccable/` | Artefatos do processo de design feito com o skill **impeccable** (ver seção 5). |

Observações sobre o PRODUCT.md (partes desatualizadas):
- Diz que as fotos estão em `site/assets/img/` → o caminho real é **`site/src/assets/img/`**.
- Diz que o logo "não está na pasta" → já foi vetorizado a partir do MIV e está em `marca-fontes/` e `site/src/assets/brand/`.
- Deploy target já foi decidido: **Vercel** (ver seção 4).

## 3. Stack e como rodar

- **Astro 7** (saída estática), dentro da subpasta **`site/`**. Sem framework de UI; componentes `.astro` + CSS com escopo.
- Fontes via `@fontsource`: **League Gothic** (títulos, caixa-alta) e **Playfair Display** (texto e "voz" em itálico).
- Imagens otimizadas com `astro:assets` + `sharp`.
- Node usado aqui: **v24.19.0** (a Vercel usa o Node padrão do projeto; não há `engines` no package.json).

Primeira vez na máquina nova:

```bash
npm --prefix site ci
```

Rodar em desenvolvimento (porta 4321):

```bash
npm --prefix site run dev -- --port 4321
```

Build de produção (gera `site/dist/`):

```bash
npm --prefix site run build
```

No Claude Code Desktop, o arquivo [.claude/launch.json](.claude/launch.json) já define o servidor **`ciclos-site`** para o preview do navegador embutido.

`node_modules/`, `site/dist/` e `site/.astro/` estão no `.gitignore` — não copie essas pastas entre máquinas; reinstale.

## 4. Git e deploy

- Repositório: <https://github.com/agenciatweed/ciclosmais-site> (branch `main`).
- Commits até agora:
  1. `f7c2501` — Site institucional CICLOS+: Home em Astro (commit inicial com tudo).
  2. `96bbde5` — tentativa de `vercel.json` na raiz com `npm ci --prefix site` (falhou: o npm 10 da Vercel não achava o lockfile).
  3. `8234746` — solução final: o projeto na Vercel usa **Root Directory = `site/`** com detecção automática do Astro. O `vercel.json` da raiz foi removido; ficou só `site/vercel.json` com `"framework": "astro"`.
  4. Depois: ajuste da foto do mosaico de Confraternizações e as páginas internas (out/2026). Veja `git log`.
- `site/vercel.json` também guarda os **redirecionamentos 301** das URLs antigas do WordPress (`/disciplinas-semestrais` → `/disciplinas`, `/cursos-livres-2` → `/cursos-livres`). `/viagens-culturais`, `/confraternizacoes` e `/unidades` mantêm o mesmo endereço do site antigo.
- **Não** recrie um `vercel.json` na raiz com comandos customizados: isso quebra o caminho, já que a Vercel roda tudo a partir de `site/`.
- Deploy é automático a cada push em `main` (integração Git da Vercel).
- `.gitattributes` força `eol=lf` e marca imagens/PDFs como binários (o projeto é editado no Windows).

## 5. Processo de design (como chegamos na Home)

O design foi feito com o skill **impeccable** (`/impeccable`), que gerou os arquivos em `.impeccable/`:

1. Foram geradas 3 estruturas para a Home, com comps (mockups) em `.impeccable/mocks/decision/`:
   - **Casa Ciclos** (porta aberta, fundo azul texturizado),
   - **Seu próximo assunto favorito** (índice de disciplinas em tipografia de cartaz),
   - **O ciclo** (o símbolo de três espirais como estrutura da página).
2. A cliente escolheu **"O ciclo"** (seed `77569fe4`). A comp aprovada é `.impeccable/mocks/decision/o-ciclo.png` (sidecar `o-ciclo.png.json` com `approved: true` e o prompt usado).
3. O mapeamento comp → implementação está em [.impeccable/surfaces/site-src-pages-index-astro.md](.impeccable/surfaces/site-src-pages-index-astro.md). A tese/direção também está como comentário no `<body>` de [site/src/layouts/Base.astro](site/src/layouts/Base.astro).
4. `DESIGN.md` e `.impeccable/design.json` documentam o sistema visual resultante.

Conceito: o símbolo CICLOS+ (três espirais) vira a estrutura do primeiro viewport. Cada braço termina numa foto real — **Aprender** (aula), **Conectar** (confraternização), **Viver** (viagem). Ao carregar, o símbolo gira um terço de volta, as fotos "assentam" e uma linha amarela se desenha (tudo desligado com `prefers-reduced-motion`).

Mundo visual:
- Fundo **papel claro amassado** `#F8F6F0` (textura `site/public/textures/papel-tile.webp`).
- Faixas **azul-petróleo** `#005277` com textura de feltro (`feltro-azul.webp`).
- Símbolo em **verde-menta** `#1AD293`; destaques e botões em **amarelo** `#F4C33A` com texto petróleo.
- As duas texturas foram geradas com IA (Magnific); a origem de cada uma está no `.json` ao lado do arquivo.
- As fotos são reais, da escola (hoje só de Porto Alegre). **Exceção:** as imagens em `site/src/assets/img/geradas/` (uma por disciplina, mais clube do livro e roteiros culturais) foram geradas no Magnific (Seedream 5 Pro) para ilustrar as páginas internas. No site elas sempre levam a legenda **"Imagem ilustrativa."**, e a origem de cada uma está no `.json` ao lado. Quando houver fotos reais dessas aulas, troque em `data/disciplinas.ts`.

## 6. Estrutura do código

```
site/
  astro.config.mjs        site: https://ciclosmais.com
  vercel.json             framework: astro + redirecionamentos das URLs antigas
  public/                 favicon.svg, robots.txt, textures/
  src/
    pages/
      index.astro         Home: monta as seções na ordem abaixo
      disciplinas/index.astro    índice das disciplinas + como funcionam + grade + galeria
      disciplinas/[slug].astro   uma página por disciplina (gerada de data/disciplinas.ts)
      cursos-livres.astro        cursos de curta duração, clube do livro, roteiros culturais
      viagens-culturais.astro    roteiros já realizados + jeito de viajar + galeria
      confraternizacoes.astro    abertura menta + No Palco 60+ + galeria
      unidades/index.astro       todas as unidades
      unidades/[slug].astro      uma página por unidade (gerada de data/unidades.ts), com mapa
      404.astro, sitemap.xml.ts
    layouts/Base.astro    <head>, SEO/OG (og:image por página), skip link, Header, Footer
    styles/global.css     tokens (:root), fontes, reset, utilitários (.wrap, .btn, .secao, .fatos), reduced-motion
    data/
      site.ts             nome, e-mail, Instagram, WhatsApp, formEndpoint + helper whatsappLink()
      unidades.ts         uma entrada por unidade (nova franquia = novo registro = nova página)
      disciplinas.ts      disciplinas (slug, frase, resumo, textos, perguntas, horários, fotos),
                          a grade de horários 2026/2 e "como funcionam"
    components/
      Header, Hero, Sobre, Disciplinas, CursosLivres, Encontros (confraternizações),
      Viagens, Equipe, Unidades, Midia, QueroConhecer (formulário), Footer,
      Marca (renderiza wordmark/símbolo/logo SVG em currentColor),
      Abertura (topo das páginas internas), Trilha (breadcrumb + JSON-LD),
      Semana (grade semanal), Galeria (fotos em colunas)
    assets/
      brand/              SVGs do logo vetorizados do MIV
      img/                fotos reais (nome do arquivo = categoria - original)
      img/equipe/         Juliana Enderle e Cristiano Cunha
      img/geradas/        imagens ilustrativas geradas no Magnific (+ .json de origem)
marca-fontes/             SVGs/PNGs de trabalho da vetorização do logo
```

Ordem das seções na Home: Hero → Sobre + história → Disciplinas + a semana (petróleo) → Cursos livres → Confraternizações (campo menta) → Viagens culturais → Equipe → Unidades (petróleo, com cartão "Sua cidade?") → Na mídia → Quero conhecer (campo amarelo) → Rodapé. Cada seção da Home tem um link para a página interna correspondente.

Páginas internas: todas começam com `Abertura` (trilha, título, voz itálica, texto, botões e foto em forma da marca), alternam campos de cor (papel → petróleo → papel…) e terminam no formulário "Quero conhecer". O menu principal aponta para as páginas (Disciplinas, Cursos livres, Viagens, Confraternizações, Unidades) e marca a página atual; vira botão "Menu" abaixo de 79rem.

### Formulário "Quero conhecer"

Em [site/src/components/QueroConhecer.astro](site/src/components/QueroConhecer.astro). Campos: nome, WhatsApp/telefone, unidade, assuntos (opcional), "para mim / para presentear" e aceite de WhatsApp. Validação acessível (mensagens por campo, `aria-invalid`). Captura `utm_source` como origem e a página de onde veio (`pagina`). Aparece no fim de todas as páginas; as props `assunto` e `unidade` deixam o assunto/unidade da página já marcados.
- Se `site.formEndpoint` estiver **vazio** (situação atual), o envio abre o WhatsApp com uma mensagem pronta.
- Quando houver backend, basta preencher `formEndpoint` em `site/src/data/site.ts`: o formulário passa a fazer POST de um JSON.

## 7. Regras que não podem ser quebradas

- Nome sempre **CICLOS+** (nunca "Ciclos", "Ciclomais", "Ciclos Mais").
- Português do Brasil. Preferir "pessoas 60+", "alunos", "maturidade". Evitar "idoso"/"terceira idade" como identidade principal.
- Nunca usar discurso de saúde ou de déficit ("combater a solidão/declínio cognitivo"). Falar de desejo, curiosidade e protagonismo.
- Pelotas **nunca** "está chegando": "A CICLOS+ já faz parte de Pelotas."
- Não inventar depoimentos, preços, números, notas ou perfis de professores.
- Acessibilidade WCAG 2.2 AA no mínimo: texto grande, contraste alto, alvos de toque generosos, nada que dependa só de hover/animação, respeito a `prefers-reduced-motion`, WhatsApp sempre visível como alternativa humana.
- Sempre usar os tokens de `global.css` / `DESIGN.md`; não introduzir cores ou fontes novas.

## 8. Estado atual (05/10/2026)

- ✅ Home completa, responsiva, publicada via Vercel a partir do `main`.
- ✅ Logo vetorizado do MIV, texturas geradas e documentadas, fotos reais otimizadas.
- ✅ Deploy corrigido (Root Directory `site/`).
- ✅ Páginas institucionais completas (17 páginas no build): disciplinas + 8 disciplinas, cursos livres, viagens culturais, confraternizações, unidades + 2 unidades, 404. Breadcrumb com JSON-LD, sitemap.xml, robots.txt, og:image por página, redirecionamentos das URLs antigas.
- ✅ Testado em 1480, 1280, 800, 375, 360 e 320 px sem rolagem horizontal.

## 9. Pendências e próximos passos

Pendências que dependem da cliente (marcadas `PENDENTE` no código):
- **WhatsApp oficial**: o site antigo usa dois números, (51) 99343-3639 (usado hoje) e (51) 98153-0001. Confirmar e decidir se cada unidade tem o seu (campo `whatsapp` opcional em `unidades.ts`).
- **Destino do formulário** (CRM, planilha ou e-mail) → preencher `formEndpoint`.
- **Fotos de Pelotas** (hoje todas são de Porto Alegre).
- Revisar com a CICLOS+ as frases de **Literatura** e **Vida Digital**, que foram redigidas para o site.
- Revisar com a CICLOS+ os **textos das páginas de disciplina** (resumo, "Sobre a disciplina" e "Perguntas que movem a turma"), todos redigidos para o site, e os textos curtos de cursos livres, viagens (descrição de cada roteiro) e confraternizações.
- **Programação de Pelotas**: a página da unidade não mostra grade (campo `mostraGrade: false`) e convida a pedir a programação no WhatsApp. Quando houver grade de Pelotas, criar os dados e exibir.
- **Fotos reais** das aulas para substituir as imagens ilustrativas geradas.
- As tags `og:image` usam o domínio `ciclosmais.com` (de `astro.config.mjs`), então as prévias de compartilhamento só funcionam depois que o domínio apontar para a Vercel.
- Conteúdo atualizado da seção **Na mídia** (links e números do site antigo estão datados).
- Masterclass de outubro (tema, data, preço, local), as 4 aulas de novembro / "Passaporte Novembro", grade 2027 de Pelotas, newsletter (manter ou não).

Próximas etapas prováveis:
1. Conectar o domínio `ciclosmais.com` na Vercel e colocar o site no ar (campanhas "Always On" apontando para a Home).
2. Integrar o backend do formulário.
3. Landing pages da campanha de Pelotas (Masterclass → cursos livres de novembro → lista prioritária / inscrição 2027), reaproveitando `Abertura`, `QueroConhecer` (com `unidade="Pelotas"`) e registrando a origem do lead (UTM/QR).

## 10. Dicas para o Claude na nova máquina

- A memória do Claude Code fica na máquina local e **não** vem junto com a pasta: este arquivo é o contexto. Mantenha-o atualizado.
- Para trabalho visual, o fluxo usado foi o skill `/impeccable` (ele lê `PRODUCT.md`, `DESIGN.md` e `.impeccable/`).
- Verifique mudanças no preview (`ciclos-site`) antes de commitar e rode `npm --prefix site run build` para garantir que o build da Vercel vai passar.
