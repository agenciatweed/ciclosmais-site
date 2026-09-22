---
name: CICLOS+
description: Escola Cultural 60+. Papel claro, faixas de feltro petróleo, símbolo menta e curvas amarelas.
colors:
  petrol: "#005277"
  petrol-deep: "#003d59"
  petrol-ink: "#0b3a52"
  mint: "#1ad293"
  teal: "#1a9e93"
  teal-ink: "#0f7d74"
  cyan: "#3cafc1"
  yellow: "#f4c33a"
  yellow-hover: "#f7cf55"
  lemon: "#f2df3a"
  paper: "#f8f6f0"
  paper-2: "#efece3"
  ink: "#16323f"
  ink-soft: "#3d5663"
  on-petrol: "#ffffff"
  on-petrol-soft: "#c7e3ea"
  line-paper: "#e4e0d6"
  rule-paper: "#d9d4c7"
  field-border: "#b9c7cc"
  error: "#b3261e"
  error-text: "#9b1c14"
typography:
  display:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 1.2rem + 5vw, 7.25rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0"
  headline:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 4.2vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "0.005em"
  title:
    fontFamily: "League Gothic, Oswald, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 1.6rem + 2vw, 4.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "0.005em"
  voice:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.35rem, 1rem + 0.9vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "clamp(1.125rem, 1.02rem + 0.35vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    fontFeature: "lnum"
  label:
    fontFamily: "Playfair Display, Georgia, Times New Roman, serif"
    fontSize: "0.95rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.14em"
rounded:
  field: "0.9rem"
  card: "1.25rem"
  card-lg: "1.5rem"
  panel: "1.75rem"
  pill: "999px"
  circle: "50%"
  arch: "999px 999px 1.5rem 1.5rem"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  maxw: "88rem"
  section: "clamp(4.5rem, 9vw, 8rem)"
  column-gap: "clamp(2.5rem, 6vw, 6rem)"
  mosaic-gap: "clamp(0.75rem, 1.4vw, 1.25rem)"
  stack-sm: "1rem"
  stack-md: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.petrol-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 2rem"
    height: "3.5rem"
  button-primary-hover:
    backgroundColor: "{colors.yellow-hover}"
    textColor: "{colors.petrol-ink}"
  button-petrol:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-petrol}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "3.75rem"
    width: "100%"
  button-petrol-hover:
    backgroundColor: "{colors.petrol-deep}"
  link-arrow:
    textColor: "{colors.teal-ink}"
    typography: "{typography.label}"
  link-arrow-on-petrol:
    textColor: "{colors.lemon}"
  input:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "0.75rem 1rem"
    height: "3.5rem"
  option-pill:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.55rem 1.2rem"
    height: "3rem"
  option-pill-selected:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.on-petrol}"
  card-unidade:
    backgroundColor: "rgba(255, 255, 255, 0.07)"
    textColor: "{colors.on-petrol}"
    rounded: "{rounded.card-lg}"
    padding: "clamp(1.75rem, 3vw, 2.5rem)"
  form-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(1.5rem, 3.5vw, 3rem)"
---

# Design System: CICLOS+

## Overview

**Creative North Star: "O ciclo em papel e feltro"**

O site da CICLOS+ é o próprio símbolo da marca em escala: três espirais (Aprender, Conectar, Viver) que desembocam em momentos reais da escola. O material é tátil e caseiro sem ser rústico: um chão de papel claro amassado, faixas de feltro azul-petróleo que atravessam a página de ponta a ponta, o símbolo em verde-menta e uma linha curva amarela que costura as partes. A tipografia fala em duas vozes: League Gothic em caixa-alta, condensada e monumental, para afirmar; Playfair Display, sobretudo em itálico, para acolher e conversar.

A densidade é baixa e o tamanho é generoso, porque o público é 60+: corpo a partir de 18px, alvos de toque de 48px ou mais, contraste AA como piso. O ritmo da página alterna campos de cor inteiros (papel → petróleo → papel → menta → papel → petróleo → amarelo → petróleo) em vez de cartões empilhados; cada campo é uma seção. As fotos são sempre reais, recortadas em formas da marca (círculo, arco, pílula) e frequentemente emolduradas por anéis grossos de menta ou amarelo.

O manual da marca pede que tudo transmita **leveza, acolhimento e vitalidade**. A direção recusa o herói genérico de "foto sorridente de idosos + slogan": a abertura é o símbolo, e as pessoas aparecem dentro dele.

**Key Characteristics:**
- Chão de papel texturizado (`papel-tile.webp`) no `body`; faixas petróleo com textura de feltro (`feltro-azul.webp`).
- Campos de cor de largura total como divisores de seção; nada de cartões flutuando sobre cinza.
- Títulos League Gothic caixa-alta com entrelinha abaixo de 1; voz em Playfair itálico teal.
- Fotos reais em círculo, arco ou pílula, com anel sólido de menta ou amarelo.
- Símbolo de três espirais como estrutura (hero), marca d'água (campos menta e amarelo, cartões de unidade) e assinatura (rodapé).
- Linha curva amarela desenhada à mão como fio condutor (hero, linha do tempo).
- Movimento único e de marca: o símbolo gira um terço de volta ao carregar; tudo desligado em `prefers-reduced-motion`.

## Colors

Paleta do manual (MIV) aplicada literalmente, com alguns tons derivados só para garantir contraste de texto.

### Primary
- **Azul-petróleo de feltro** (`petrol`): cor institucional. Títulos sobre papel, campos de seção (Disciplinas, Unidades, rodapé, faixa do hero) com a textura de feltro por cima, botão de envio do formulário, estado selecionado das opções, anel de foco padrão.
- **Petróleo profundo** (`petrol-deep`): hover do botão petróleo; base das sombras (`rgba(0, 61, 89, …)`).
- **Tinta petróleo** (`petrol-ink`): texto sobre amarelo e sobre menta, links do menu. Derivado para contraste (7.3:1 sobre amarelo).
- **Verde-menta** (`mint`): o símbolo, os anéis das fotos, os pontos separadores da faixa, cabeçalhos da grade semanal e nomes das cidades sobre petróleo. Também é o campo inteiro da seção Confraternizações. Nunca é texto sobre papel (1.8:1).

### Secondary
- **Teal** (`teal`): segunda palavra dos títulos compostos ("Com assunto de sobra."), anos da linha do tempo e dos roteiros, borda do botão redondo de WhatsApp, cor da barra de rolagem. Só em tamanho display sobre papel (3.06:1 passa apenas como texto grande).
- **Teal tinta** (`teal-ink`): a voz itálica sobre papel e os links com seta. Derivado do teal para chegar a 4.6:1.
- **Ciano** (`cyan`): nomes ímpares da lista de disciplinas sobre petróleo, alternando com branco. Uso restrito a display grande (3.27:1).

### Tertiary (destaque)
- **Amarelo de chamada** (`yellow`): o botão "Quero conhecer", o campo final do formulário, a linha curva do hero e da linha do tempo, o sublinhado animado da navegação, o anel da foto de Viagens, a célula de sexta-feira da grade e o anel de foco dentro de campos petróleo.
- **Amarelo claro** (`yellow-hover`): hover do botão amarelo e marca d'água do símbolo no campo amarelo.
- **Limão** (`lemon`): hover da lista de disciplinas, links com seta sobre petróleo, cor de seleção de texto.

### Neutral
- **Papel** (`paper`): o chão de toda a página, sempre com a textura de papel amassado; fundo do cabeçalho (92% opaco com desfoque) e do formulário.
- **Papel 2** (`paper-2`): fundo de espera das fotos, trilho da barra de rolagem.
- **Tinta** (`ink`): texto corrido sobre papel (12.4:1).
- **Tinta suave** (`ink-soft`): datas, papéis, textos "(opcional)".
- **Branco sobre petróleo** (`on-petrol`) e **névoa sobre petróleo** (`on-petrol-soft`): títulos e texto secundário dentro dos campos petróleo (8.5:1 e 6.3:1).
- **Linhas de papel** (`line-paper`, `rule-paper`): divisória do cabeçalho rolado e do menu móvel; fios entre itens de lista (Viagens, Mídia).
- **Borda de campo** (`field-border`): contorno de inputs e opções em repouso.
- **Erro** (`error`, `error-text`): borda e mensagem de campo inválido.

### Named Rules
**A Regra da Paleta Fechada.** Só as cores do manual aparecem como cor de marca: petróleo, menta, teal, ciano, amarelo e limão. Tons novos só existem como derivações escuras para contraste de texto (`petrol-ink`, `teal-ink`) ou claras para hover, nunca como matizes novos.

**A Regra do Amarelo que Chama.** Amarelo é a cor da ação e do convite: CTA de inscrição, campo do formulário, sexta-feira (o dia dos eventos). A linha curva amarela é o único uso decorativo sustentado; não acrescente novos ornamentos amarelos.

**A Regra do Menta que Não Fala.** Menta desenha, emoldura e marca; não carrega texto corrido. Texto sobre menta é `petrol-ink` ou `petrol`.

## Typography

**Display Font:** League Gothic 400 (fallback Oswald, Arial Narrow)
**Body Font:** Playfair Display 400/600/700, com itálicos 400 e 700 (fallback Georgia)

**Character:** Um contraste de cartaz e carta. League Gothic é condensada, alta e sempre em caixa-alta, empilhada em entrelinha apertada; Playfair é uma serifada de alto contraste que dá calor ao texto e, em itálico, vira a voz de quem convida.

### Hierarchy
- **Display** (League Gothic 400, `clamp(4rem, 1.2rem + 5vw, 7.25rem)`, entrelinha 0.86): só o título do hero, uma palavra por linha.
- **Headline** (League Gothic 400, de ~3rem a 7rem conforme a seção, entrelinha 0.92, `text-wrap: balance`): títulos de seção (h2). Os mais longos limitam a largura em 10–16ch.
- **Title** (League Gothic 400, 1.9rem a 4.25rem, entrelinha ~1): h3, nomes de disciplina, cidades, anos, veículos de mídia, nomes da equipe, palavras dos braços do símbolo.
- **Voice** (Playfair itálico 400, `clamp(1.35rem, 1rem + 0.9vw, 1.85rem)`, entrelinha 1.25–1.3, máx. 24–30ch, `teal-ink`): a frase logo abaixo de cada título. Em Confraternizações sobe para itálico 700.
- **Body** (Playfair 400, `clamp(1.125rem, 1.02rem + 0.35vw, 1.3rem)`, entrelinha 1.6, algarismos alinhados, 40–50ch): texto corrido.
- **Label** (Playfair 600/700, 0.95–1.35rem, caixa-alta, espaçamento 0.14em a 0.24em): botões, navegação, links com seta, faixa de atuações.

### Named Rules
**A Regra das Duas Famílias.** Só League Gothic e Playfair Display, como o manual exige. Rótulos e botões usam Playfair em caixa-alta espaçada, não uma terceira família sem serifa.

**A Regra da Voz Itálica.** Todo título de seção pode ter uma frase em Playfair itálico logo abaixo; é ela que acolhe. Não use itálico para ênfase aleatória no corpo.

## Layout

Container único `.wrap`: largura máxima 88rem, margem lateral `clamp(1.25rem, 4vw, 4rem)`. Cada seção é um campo de cor de largura total com padding vertical `clamp(4.5rem, 9vw, 8rem)`; o conteúdo vive dentro do `.wrap`.

As composições são grades assimétricas de duas colunas em frações (5/7, 5/6, 6/5, 7/4, 8/4) com gap `clamp(2.5rem, 6vw, 6rem)`, alternando o lado da foto de uma seção para a outra. Colagens de fotos usam grades explícitas (12 colunas × 10 linhas em Cursos livres; 5fr/3fr/3fr em Confraternizações). Listas editoriais (disciplinas, roteiros, mídia) são linhas com fio fino e colunas internas, não cartões.

Responsivo: as grades de duas colunas colapsam em uma entre 52rem e 60rem; a navegação vira menu "Menu" + WhatsApp abaixo de 76rem; a grade semanal vira lista abaixo de 40rem; a faixa de atuações vira 2×2 abaixo de 40rem. No hero, abaixo de 60rem o símbolo desce para baixo do texto, a curva amarela some e as palavras dos braços reposicionam sob as fotos. `scroll-padding-top: 6rem` compensa o cabeçalho fixo.

## Elevation & Depth

Profundidade vem de material e de campo, não de camadas. As texturas de papel e feltro dão a sensação física; a troca de campo de cor separa as seções. Sombras existem, mas são sempre difusas, longas, deslocadas para baixo e tingidas de petróleo, como papel levemente erguido de uma mesa. Nenhuma sombra dura, nenhuma sombra cinza neutra.

### Shadow Vocabulary
- **Botão em repouso** (`box-shadow: 0 6px 18px -8px rgba(0, 61, 89, 0.45)`): botões pílula.
- **Botão em hover** (`box-shadow: 0 12px 24px -10px rgba(0, 61, 89, 0.5)`): acompanha `translateY(-2px)`.
- **Foto erguida** (`box-shadow: 0 24px 48px -30px rgba(0, 61, 89, 0.55)`, variações de -26px a -40px): fotos do hero, Sobre, Cursos livres, mosaico.
- **Cabeçalho rolado** (`box-shadow: 0 8px 24px -20px rgba(0, 61, 89, 0.5)`): aparece só depois de 8px de rolagem.
- **Painel sobre amarelo** (`box-shadow: 0 30px 60px -40px rgba(80, 60, 0, 0.55)`): o formulário; a sombra é tingida de âmbar para pertencer ao campo amarelo.

### Named Rules
**A Regra da Sombra Tingida.** Toda sombra carrega a cor do campo onde está (petróleo sobre papel, âmbar sobre amarelo) e tem espalhamento negativo, para ficar sob o objeto e não em volta dele.

## Shapes

A forma vem do símbolo: círculos e curvas. Três famílias:
- **Círculo** (`50%`): fotos do hero e da equipe, botão de WhatsApp, pontos da faixa, o anel amarelo atrás da foto de Sobre.
- **Arco** (`999px 999px 1.5rem 1.5rem`): fotos-destaque verticais (Sobre, Viagens, primeira do mosaico). Disciplinas usa um arco elíptico (`50% 50% 1.25rem 1.25rem / 36% 36% 1.25rem 1.25rem`). O mosaico também usa a pílula deitada (`1.25rem 999px 999px 1.25rem`).
- **Pílula** (`999px`): todos os botões e opções.

Retângulos arredondados médios (`0.9rem` campos e células, `1.25rem` fotos e cartões, `1.5rem` cartões de unidade, `1.75rem` painel do formulário) são o apoio neutro. Anéis sólidos grossos (6–11px menta, 8px amarelo, 6px papel) emolduram fotos. Linhas curvas em SVG com traço arredondado (`stroke-linecap: round`, 2.5–3px, amarelo) são o único ornamento linear.

## Components

### Buttons
Pílulas amarelas, cheias e confiantes, com texto em caixa-alta espaçada.
- **Shape:** pílula (`999px`), altura mínima 3.5rem (3rem no cabeçalho).
- **Primary:** fundo `yellow`, texto `petrol-ink`, Playfair 700 1.05rem, espaçamento 0.14em, padding `0.85rem 2rem`. É "Quero conhecer", em todo lugar.
- **Hover / Focus:** sobe 2px, sombra cresce, fundo clareia para `yellow-hover`; transição 0.35s em `--ease-out`. Foco: contorno 3px `petrol` com offset 3px.
- **Petróleo:** envio do formulário, largura total, altura 3.75rem, hover `petrol-deep`; desabilitado a 70% de opacidade.
- **Link com seta:** Playfair 700 caixa-alta espaçada, `teal-ink` sublinhado; `lemon` sobre petróleo. É a ação secundária, sempre ao lado de um botão (ex.: "Falar no WhatsApp").
- **WhatsApp redondo:** círculo de 3rem com borda 2px `teal` e ícone de balão em traço; hover tinge com menta a 12%.

### Chips / Opções
- **Style:** pílulas com borda 2px `field-border` sobre branco, altura 3rem (2.75rem nos chips de assunto); o input nativo fica invisível por cima.
- **State:** hover troca a borda para `teal`; selecionado vira pílula `petrol` cheia com texto branco; foco 3px `petrol`.

### Cards / Containers
- **Cartão de unidade:** sobre petróleo, fundo branco a 7%, raio 1.5rem, padding `clamp(1.75rem, 3vw, 2.5rem)`, cidade em League Gothic menta, símbolo menta a 22% vazando no canto superior direito, ações empurradas para a base. A variante "Sua cidade?" é vazada, com borda tracejada.
- **Painel do formulário:** papel texturizado sobre o campo amarelo, raio 1.75rem, sombra âmbar.
- **Células da grade semanal:** branco a 8% sobre petróleo, raio 0.9rem; a sexta-feira é amarela, itálica.
- Sem borda de cartão sobre papel: listas usam fios, não caixas.

### Inputs / Fields
- **Style:** fundo branco, borda 2px `field-border`, raio 0.9rem, altura mínima 3.5rem, rótulo visível acima em Playfair 700 `petrol-ink`.
- **Focus:** contorno 3px `petrol` com offset 1px e borda petróleo. Hover: borda `teal`.
- **Error:** borda `error`, mensagem em `error-text` abaixo do campo, texto explicando o que escrever.

### Navigation
- **Cabeçalho fixo:** papel a 92% com desfoque de 10px, altura 5.5rem (4.5rem no móvel); wordmark CICLOS+ em petróleo à esquerda; links em Playfair 600 caixa-alta espaçada 0.16em, `petrol-ink`; hover desenha um sublinhado amarelo de 2px da esquerda para a direita. Ao rolar, ganha fio `line-paper` e sombra suave.
- **Móvel (< 76rem):** botão pílula "Menu" contornado em petróleo com ícone de três linhas que vira X; o painel abre com links em League Gothic 2.2rem e o botão amarelo em largura total. Esc fecha.
- **Faixa de atuações:** faixa de feltro petróleo sob o hero, quatro links em caixa-alta espaçada 0.24em separados por pontos menta, mesmo sublinhado amarelo no hover.

### O Ciclo (componente assinatura)
O símbolo de três espirais em menta (`ciclos-simbolo.svg`, colorido por `currentColor`) ocupa ~44% da largura de uma caixa 1.25:1; três fotos circulares com anel menta ficam nos braços, cada uma com sua palavra (Aprender, Conectar, Viver) em League Gothic petróleo, e cada uma é um link para sua seção. Atrás, uma curva amarela atravessa o hero. No hover, a foto cresce 3% e o anel vira amarelo. Ao carregar: o símbolo gira de -120° a 0 (1.8s), as fotos assentam de 82% a 100% em cascata de 0.15s, e a curva se desenha (2.8s), tudo em `cubic-bezier(0.16, 1, 0.3, 1)`. Com `prefers-reduced-motion: reduce`, nada se move.

### Listas editoriais
Disciplinas, roteiros e mídia são linhas separadas por fios, com um termo em League Gothic à esquerda e texto Playfair à direita. Sobre petróleo, os nomes alternam ciano e branco, e a linha inteira acende em limão no hover. Na mídia, a seta diagonal desliza 3px no hover e a linha ganha véu menta a 12%.

## Do's and Don'ts

### Do:
- **Do** apoiar toda página no chão de papel texturizado e separar seções com campos de cor inteiros (papel, petróleo com feltro, menta, amarelo).
- **Do** escrever títulos em League Gothic caixa-alta com entrelinha 0.86–0.95 e acompanhar cada título com uma frase em Playfair itálico `teal-ink`.
- **Do** recortar fotos reais em círculo, arco ou pílula e emoldurá-las com anel sólido menta ou amarelo.
- **Do** usar o botão pílula amarelo com texto `petrol-ink` para "Quero conhecer" e toda chamada de inscrição, e sempre oferecer o WhatsApp ao lado como link com seta.
- **Do** manter corpo a partir de 1.125rem, alvos de toque de 3rem ou mais, e foco visível de 3px (petróleo sobre claro, amarelo sobre petróleo).
- **Do** usar o wordmark espaçado CICLOS+ como assinatura principal (cabeçalho, rodapé) e o símbolo como estrutura ou marca d'água colorida por `currentColor`.
- **Do** colocar todo movimento dentro de `prefers-reduced-motion: no-preference` e usar `--ease-out` (`cubic-bezier(0.16, 1, 0.3, 1)`).

### Don't:
- **Don't** introduzir uma terceira família tipográfica, nem pesos ou larguras fora do padrão; o manual pede para evitar variações.
- **Don't** abrir uma página com o herói genérico de "foto sorridente de idosos + slogan"; a abertura parte do símbolo ou de um momento real da escola.
- **Don't** colocar texto corrido em `mint`, `teal` ou `cyan` sobre papel ou petróleo; esses tons só carregam texto em tamanho display.
- **Don't** usar sombras cinza, duras ou deslocadas em bloco; toda sombra é difusa e tingida de petróleo ou âmbar.
- **Don't** empilhar cartões com borda sobre o papel; conteúdo em lista usa fios finos.
- **Don't** criar matizes fora da paleta do manual; derive apenas tons mais escuros ou claros das cores existentes.
- **Don't** representar pessoas 60+ como frágeis ou sendo cuidadas; as fotos mostram adultos protagonistas em aula, festa e viagem.
