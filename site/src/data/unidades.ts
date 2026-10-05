// Cada unidade é um registro. Uma nova franquia entra aqui e ganha sua página em /unidades/<slug>, sem redesenhar o site.

export type Unidade = {
  slug: string;
  cidade: string;
  uf: string;
  local?: string;
  endereco: string;
  mapa: string;
  mapaBusca: string;
  whatsapp?: { display: string; e164: string };
  desde?: string;
  voz: string;
  texto: string[];
  responsavel?: string;
  // true quando a grade publicada em data/disciplinas.ts vale para esta unidade.
  mostraGrade: boolean;
};

export const unidades: Unidade[] = [
  {
    slug: 'porto-alegre',
    cidade: 'Porto Alegre',
    uf: 'RS',
    endereco: 'Rua Dona Laura, 1020 · Rio Branco',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Rua+Dona+Laura+1020+Rio+Branco+Porto+Alegre+RS',
    mapaBusca: 'Rua Dona Laura, 1020, Rio Branco, Porto Alegre, RS',
    desde: 'Primeira turma em 2020',
    voz: 'Onde a CICLOS+ começou, e onde a conversa não para.',
    texto: [
      'Foi em Porto Alegre que a primeira turma da CICLOS+ se formou, em 2020: 13 pessoas, ainda pelo Zoom. Em 2022, as aulas passaram a ser presenciais, com História da Arte, Filosofia, Cinema e Música.',
      'Hoje são mais de 100 alunos, disciplinas de segunda a quinta à tarde e uma sexta-feira reservada para cursos livres, clube do livro, roteiros culturais e confraternizações.',
    ],
    mostraGrade: true,
  },
  {
    slug: 'pelotas',
    cidade: 'Pelotas',
    uf: 'RS',
    local: 'Rampa Innovation Hub',
    endereco: 'Rua Boulevard Quartier, 500',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Rampa+Innovation+Hub+Rua+Boulevard+Quartier+500+Pelotas+RS',
    mapaBusca: 'Rampa Innovation Hub, Rua Boulevard Quartier, 500, Pelotas, RS',
    voz: 'A CICLOS+ já faz parte de Pelotas.',
    texto: [
      'A CICLOS+ Pelotas funciona no Rampa Innovation Hub e é conduzida pela franqueada Bibiana Urdaniz, com a mesma proposta de Porto Alegre: aprender sem provas e sem pressão, em boa companhia.',
      'Uma cidade de casarões, de doces e do Theatro Sete de Abril tem assunto de sobra. Aqui, a programação conversa com Pelotas, com o seu patrimônio e com quem vive nela.',
    ],
    responsavel: 'Bibiana Urdaniz, franqueada',
    mostraGrade: false,
  },
];

export const unidadePorSlug = (slug: string) => unidades.find((u) => u.slug === slug);
