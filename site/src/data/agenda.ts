// Agenda das unidades: aulas livres, cafés de socialização, matrículas e início das aulas.
// Fonte: "Calendário CICLOS+ Pelotas 2026/2 e 2027/1" enviado pela cliente em 17/10/2026.
// Para Porto Alegre, basta incluir itens com unidade: 'porto-alegre'.
// PENDENTE: horários das aulas livres e dos cafés; descrição da aula de Fotografia (redigida para o site).

export type AulaLivre = {
  assunto: string;
  disciplina?: string; // slug em data/disciplinas.ts, quando o assunto também é disciplina semestral
  descricao: string;
  unidade: string; // slug em data/unidades.ts
  datas: string[]; // AAAA-MM-DD
};

export const aulasLivres: AulaLivre[] = [
  {
    assunto: 'História da Arte',
    disciplina: 'historia-da-arte',
    descricao: 'Obras, artistas e épocas observados de perto, para aprender a olhar a arte com outros olhos.',
    unidade: 'pelotas',
    datas: ['2026-11-10', '2026-11-17', '2026-12-01', '2026-12-08', '2027-01-12', '2027-01-19'],
  },
  {
    assunto: 'Filosofia',
    disciplina: 'filosofia',
    descricao: 'Grandes perguntas da filosofia trazidas para a vida de hoje, numa conversa aberta com a turma.',
    unidade: 'pelotas',
    datas: ['2026-11-12', '2026-11-19', '2026-12-03', '2026-12-10', '2027-01-14', '2027-01-21'],
  },
  {
    assunto: 'Histórias Nacionais',
    disciplina: 'historias-nacionais',
    descricao: 'Como países e povos se tornaram o que são, contado a partir de personagens, conflitos e viradas.',
    unidade: 'pelotas',
    datas: ['2026-11-12', '2026-11-19', '2026-12-03', '2026-12-10', '2027-01-14', '2027-01-21'],
  },
  {
    assunto: 'Fotografia',
    descricao: 'Para olhar o mundo pela lente: como enxergar, enquadrar e contar histórias com imagens.',
    unidade: 'pelotas',
    datas: ['2027-01-12', '2027-01-19'],
  },
];

export type Encontro = { titulo: string; descricao: string; unidade: string; datas: string[] };

export const cafesDeSocializacao: Encontro = {
  titulo: 'Café de Socialização',
  descricao: 'Um café para conversar, conhecer a turma e a equipe da CICLOS+ Pelotas e trocar ideias sobre os próximos assuntos.',
  unidade: 'pelotas',
  datas: ['2026-11-27', '2026-12-11', '2027-01-22', '2027-03-19'],
};

export const matriculasPelotas = {
  periodos: [
    ['2026-12-14', '2026-12-15'],
    ['2027-01-25', '2027-01-26'],
    ['2027-02-22', '2027-02-26'],
  ],
  inicioDasAulas: '2027-03-01',
};

export const noPalco2026 = { data: '2026-11-24', cidade: 'Porto Alegre' };

// ---- Formatação de datas (pt-BR, sem depender do fuso do servidor) ----
const MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
const DIAS = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];

const partes = (iso: string) => {
  const [a, m, d] = iso.split('-').map(Number);
  return { ano: a, mes: m - 1, dia: d, semana: new Date(Date.UTC(a, m - 1, d)).getUTCDay() };
};
const dia = (n: number) => (n === 1 ? '1º' : String(n));

export const hojeISO = () => new Date().toISOString().slice(0, 10);
export const futuras = (datas: string[]) => datas.filter((d) => d >= hojeISO());

/** "terça-feira, 10 de novembro" */
export const dataPorExtenso = (iso: string) => {
  const p = partes(iso);
  return `${DIAS[p.semana]}, ${dia(p.dia)} de ${MESES[p.mes]}`;
};

/** Agrupa datas por mês: [{ mes: 'Novembro de 2026', texto: '10 e 17', semana: 'terças' }] */
export const datasPorMes = (datas: string[]) => {
  const grupos = new Map<string, string[]>();
  for (const d of [...datas].sort()) {
    const chave = d.slice(0, 7);
    grupos.set(chave, [...(grupos.get(chave) ?? []), d]);
  }
  return [...grupos.values()].map((ds) => {
    const p0 = partes(ds[0]);
    const nums = ds.map((d) => dia(partes(d).dia));
    const texto = nums.length > 1 ? `${nums.slice(0, -1).join(', ')} e ${nums.at(-1)}` : nums[0];
    const dias = [...new Set(ds.map((d) => DIAS[partes(d).semana].replace('-feira', '')))];
    const semana = dias.map((x) => (ds.length > 1 ? `${x}s` : x)).join(' e ');
    const mes = MESES[p0.mes];
    return { mes: `${mes[0].toUpperCase()}${mes.slice(1)} de ${p0.ano}`, mesCurto: mes, texto, semana };
  });
};

/** "14 e 15 de dezembro", "22 a 26 de fevereiro" */
export const periodo = ([ini, fim]: string[]) => {
  const a = partes(ini), b = partes(fim);
  const juntos = b.dia - a.dia === 1 ? 'e' : 'a';
  return `${dia(a.dia)} ${juntos} ${dia(b.dia)} de ${MESES[b.mes]}`;
};
