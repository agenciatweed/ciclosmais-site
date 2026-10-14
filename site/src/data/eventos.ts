// Eventos e masterclasses de campanha. Cada evento vira uma landing page em /<slug>.
// PENDENTE: data exata, investimento (gratuito ou valor) e nome da sommelier da masterclass de Pelotas.

export type Evento = {
  slug: string;
  tipo: string;
  titulo: string;
  voz: string;
  resumo: string;
  unidade: string; // slug de data/unidades.ts
  quando: string; // texto exibido; troque pela data exata quando confirmada
  hora: string;
  investimento?: string;
};

export const masterclassPelotas: Evento = {
  slug: 'masterclass',
  tipo: 'Masterclass CICLOS+ Pelotas',
  titulo: 'Arte, Sabores e Sentidos',
  voz: 'Uma aula sobre o Barroco e uma degustação de vinhos com sommelier.',
  resumo:
    'Um fim de tarde para olhar a arte com outros olhos e provar o que ela tem de sabor: cerca de 40 minutos de História da Arte sobre o Barroco e, depois, uma degustação de vinhos conduzida por uma sommelier.',
  unidade: 'pelotas',
  quando: 'Outubro de 2026',
  hora: '18h',
};

export const eventos: Evento[] = [masterclassPelotas];
export const eventosDaUnidade = (unidade: string) => eventos.filter((e) => e.unidade === unidade);
