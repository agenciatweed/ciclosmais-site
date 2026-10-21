// Eventos e masterclasses de campanha. Cada evento vira uma landing page em /<slug>.
// PENDENTE: nome da sommelier e da professora; número de vagas; forma de pagamento.

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
  horario: string; // faixa completa, ex.: "das 19h às 21h"
  inicio: string; // ISO 8601 com fuso, para o JSON-LD do Google
  fim: string;
  local?: { nome: string; endereco: string; cidade: string; uf: string; mapa: string; mapaBusca: string };
  valor?: { texto: string; numero: number }; // numero em reais, para o JSON-LD
};

export const masterclassPelotas: Evento = {
  slug: 'masterclass',
  tipo: 'Masterclass CICLOS+ Pelotas',
  titulo: 'Arte, Sabores e Sentidos',
  subtitulo: 'Caravaggio: entre luz, sombra e vinho',
  voz: 'Uma aula sobre Caravaggio e o Barroco, com degustação e harmonização de vinhos.',
  resumo:
    'Uma noite para olhar a arte com outros olhos e provar o que ela tem de sabor: cerca de 40 minutos de História da Arte sobre Caravaggio e o Barroco e, depois, degustação e harmonização de vinhos conduzida por uma sommelier.',
  unidade: 'pelotas',
  // Informações finais enviadas pela cliente em 21/10/2026.
  quando: 'Quinta-feira, 5 de novembro',
  hora: '19h',
  horario: 'das 19h às 21h',
  inicio: '2026-11-05T19:00:00-03:00',
  fim: '2026-11-05T21:00:00-03:00',
  local: {
    nome: 'Hangar 516',
    endereco: 'R. Gonçalves Chaves, 516B',
    cidade: 'Pelotas',
    uf: 'RS',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Hangar+516+R.+Gon%C3%A7alves+Chaves+516B+Pelotas+RS',
    mapaBusca: 'Hangar 516, R. Gonçalves Chaves, 516B, Pelotas, RS',
  },
  valor: { texto: 'R$ 60,00', numero: 60 },
};

export const eventos: Evento[] = [masterclassPelotas];
// Só eventos que ainda não terminaram (a página é gerada no build).
export const eventosDaUnidade = (unidade: string) => eventos.filter((e) => e.unidade === unidade && new Date(e.fim) >= new Date());
