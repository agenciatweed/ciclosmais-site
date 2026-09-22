---
version: 1
slug: "site-src-pages-index-astro"
primary_target: "site/src/pages/index.astro"
related_targets: []
---

## Home institucional (site/src/pages/index.astro)

**Modo:** Persuade. **Visitante:** pessoa 60+ (ou filho/filha-ponte) que chega sem conhecer a escola. **Ação:** "Quero conhecer" (formulário curto) com WhatsApp sempre ao lado.

**Direção escolhida:** "O ciclo" (estrutura 4 de 7, seed 77569fe4). O símbolo de três espirais é a estrutura do primeiro viewport: cada braço termina numa foto real (Aprender = aula, Conectar = confraternização, Viver = viagem). Momento memorável: o símbolo completa um terço de volta ao carregar, e as fotos assentam.

**Comp aprovada:** `.impeccable/mocks/decision/o-ciclo.png` (sidecar com `approved: true`). Não literalizar: a espiral desenhada à mão da comp; o build usa o vetor real do MIV.

**Inventário da comp → meio**
| Elemento | Meio |
|---|---|
| Wordmark CICLOS+ | SVG vetorizado do MIV (`ciclos-wordmark.svg`) |
| Símbolo menta gigante | SVG real (`ciclos-simbolo.svg`), currentColor |
| Três fotos circulares com anel menta | fotos reais via astro:assets, CSS border |
| Linha curva amarela | SVG path com stroke-dash |
| Fundo papel amassado | raster gerado (`papel-tile.webp`), tile espelhado |
| Faixa petróleo | cor + raster de feltro (`feltro-azul.webp`) |
| Títulos | League Gothic (fontsource), caixa-alta |
| Voz / corpo | Playfair Display (fontsource), itálico para a voz |
| CTA primário | botão pílula amarelo #F4C33A, texto petróleo |

**Cores amostradas da comp:** chão #F8F6F0, faixa #034E6E (≈ #005277), menta #20C897 (≈ #1AD293), amarelo #F5C234 (≈ #F4C33A).

**Seções depois da dobra (no mesmo mundo):** Sobre + nossa história · Disciplinas + a semana (petróleo) · Cursos livres · Confraternizações (campo menta) · Viagens culturais · Equipe · Unidades (petróleo, cartão "Sua cidade?") · Na mídia · Quero conhecer (campo amarelo) · Rodapé.

**Em aberto:** WhatsApp oficial; destino do formulário; fotos por unidade (hoje as fotos são de Porto Alegre); frases de Literatura e Vida Digital redigidas para o site.
