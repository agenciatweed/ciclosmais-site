// Eventos e masterclasses de campanha. Cada evento vira uma landing page em /<slug>.
// PENDENTE: investimento (gratuito ou valor) e nome da sommelier da masterclass de Pelotas.

export type Evento = {
  slug: string;
  tipo: string;
  titulo: string;
  subtitulo?: string;
  voz: string;
  resumo: string;
  unidade: string; // slug de data/unidades.ts
  quando: string; // data por extenso, como aparece na página
  hora: string; // horário de início
  horario: string; // faixa completa, ex.: "das 19h às 21h30"
  inicio: string; // ISO 8601 com fuso, para o JSON-LD do Google
  fim: string;
  investimento?: string;
};

export const masterclassPelotas: Evento = {
  slug: 'masterclass',
  tipo: 'Masterclass CICLOS+ Pelotas',
  titulo: 'Arte, Sabores e Sentidos',
  subtitulo: 'Caravaggio: entre luz, sombra e vinho',
  voz: 'Uma aula sobre Caravaggio e o Barroco e uma degustação de vinhos com sommelier.',
  resumo:
    'Uma noite para olhar a arte com outros olhos e provar o que ela tem de sabor: cerca de 40 minutos de História da Arte sobre Caravaggio e o Barroco e, depois, uma degustação de vinhos conduzida por uma sommelier.',
  unidade: 'pelotas',
  // Data mudou para 04/11 no calendário de Pelotas de 17/10/2026; horário mantido (confirmar).
  quando: 'Quarta-feira, 4 de novembro',
  hora: '19h',
  horario: 'das 19h às 21h30',
  inicio: '2026-11-04T19:00:00-03:00',
  fim: '2026-11-04T21:30:00-03:00',
};

export const eventos: Evento[] = [masterclassPelotas];
// Só eventos que ainda não terminaram (a página é gerada no build).
export const eventosDaUnidade = (unidade: string) => eventos.filter((e) => e.unidade === unidade && new Date(e.fim) >= new Date());
