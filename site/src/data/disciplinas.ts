// Disciplinas semestrais. Frases de Filosofia a Aquarela vêm da estratégia de campanha;
// Literatura e Vida Digital foram redigidas para o site.
// PENDENTE: resumos, textos e perguntas de cada disciplina foram redigidos para o site (revisar com a CICLOS+).
import type { ImageMetadata } from 'astro';
import gFilosofia from '../assets/img/geradas/filosofia.jpg';
import gArte from '../assets/img/geradas/historia-da-arte.jpg';
import gLiteratura from '../assets/img/geradas/literatura.jpg';
import gAquarela from '../assets/img/geradas/aquarela.jpg';
import gMusica from '../assets/img/geradas/arte-musical.jpg';
import gNacionais from '../assets/img/geradas/historias-nacionais.jpg';
import gGeral from '../assets/img/geradas/historia-geral.jpg';
import gDigital from '../assets/img/geradas/vida-digital.jpg';
import rAquarela from '../assets/img/Disciplinas Semestrais - Aula-de-aquarela-CICLOS.jpeg';
import rGeral from '../assets/img/Disciplinas Semestrais - Historia-Geral_05.jpg';

export type Foto = { src: ImageMetadata; alt: string; ilustrativa?: boolean; legenda?: string; pos?: string };
export type Horario = { dia: string; hora: string; turma?: string };

export type Disciplina = {
  slug: string;
  nome: string;
  subtitulo?: string;
  frase: string;
  resumo: string;
  texto: string[];
  perguntas: string[];
  horarios: Horario[];
  foto: Foto;
  fotoAula?: Foto;
};

export const disciplinas: Disciplina[] = [
  {
    slug: 'filosofia',
    nome: 'Filosofia',
    frase: 'Grandes perguntas não se aposentam.',
    resumo: 'Pensadores de várias épocas, apresentados com clareza e discutidos em roda, a partir de perguntas que continuam valendo para a vida de hoje.',
    texto: [
      'A turma percorre ideias que atravessaram séculos e ainda ajudam a pensar escolhas, liberdade, felicidade e o tempo.',
      'Não é preciso ter lido nada antes. O professor apresenta o pensamento de cada autor, e a aula vira conversa: cada um traz a própria experiência para a roda.',
    ],
    perguntas: ['O que faz uma vida valer a pena?', 'Somos livres para escolher?', 'O que o tempo muda em nós, e o que não muda?'],
    horarios: [{ dia: 'Segunda', hora: '14h às 15h30' }],
    foto: { src: gFilosofia, alt: 'Turma de pessoas 60+ sentada em roda, em debate animado numa aula de filosofia', ilustrativa: true },
  },
  {
    slug: 'historia-da-arte',
    nome: 'História da Arte',
    frase: 'Depois que aprendemos a olhar, nenhuma obra é a mesma.',
    resumo: 'Aprender a ler uma pintura, uma escultura ou um prédio: o que o artista quis dizer, em que época e por quê.',
    texto: [
      'Cada aula parte de obras concretas, projetadas em tamanho grande e observadas com calma. Aos poucos, estilos, épocas e artistas deixam de ser nomes soltos e passam a fazer sentido juntos.',
      'O que se aprende em sala continua fora dela: nas exposições, nos museus e nas viagens culturais da CICLOS+.',
    ],
    perguntas: ['Por que esta obra causou escândalo na sua época?', 'O que muda quando olhamos a luz de um quadro?', 'Como um prédio conta a história da sua cidade?'],
    horarios: [{ dia: 'Quinta', hora: '14h às 15h30' }],
    foto: { src: gArte, alt: 'Aluno aponta um detalhe de uma pintura impressionista projetada na parede, diante da turma atenta', ilustrativa: true },
  },
  {
    slug: 'literatura',
    nome: 'Literatura',
    frase: 'Todo livro fica maior quando alguém conversa sobre ele.',
    resumo: 'Leituras compartilhadas, autores de várias épocas e uma conversa que faz cada livro render muito mais.',
    texto: [
      'A turma lê e discute contos, romances e poemas, com o professor apresentando o contexto de cada autor e os caminhos para entrar em cada texto.',
      'O melhor da aula costuma ser a conversa: cada leitor encontra no livro algo diferente, e a roda faz o texto crescer.',
    ],
    perguntas: ['Por que alguns livros nunca envelhecem?', 'O que um personagem revela sobre quem lê?', 'Como um autor escolhe cada palavra?'],
    horarios: [{ dia: 'Segunda', hora: '16h às 17h30' }],
    foto: { src: gLiteratura, alt: 'Aluna lê em voz alta um trecho de romance para a turma reunida em volta de uma mesa cheia de livros', ilustrativa: true },
  },
  {
    slug: 'aquarela',
    nome: 'Aquarela',
    subtitulo: 'Atelier de Criação',
    frase: 'Não é preciso saber pintar para começar a enxergar as cores de outro jeito.',
    resumo: 'Cor, água e papel, no ritmo de cada um. Para quem já pinta e para quem nunca pegou num pincel.',
    texto: [
      'No Atelier de Criação, a aquarela é aprendida na prática: misturar cores, dosar a água, experimentar transparências e encontrar o próprio traço.',
      'Cada aluno avança no seu ritmo, com orientação próxima do professor e a companhia de uma turma que troca técnicas, dúvidas e elogios. O grupo de Aquarela já apresentou seus trabalhos no palco do No Palco 60+, em 2025.',
    ],
    perguntas: ['Como a água muda uma cor?', 'O que acontece quando a gente deixa o pincel arriscar?', 'Que paisagem você gostaria de pintar?'],
    horarios: [{ dia: 'Terça', hora: '14h às 15h30' }],
    foto: { src: gAquarela, alt: 'Aluna e aluno pintam aquarelas botânicas lado a lado, sorrindo', ilustrativa: true },
    fotoAula: { src: rAquarela, alt: 'Alunas pintando numa aula de aquarela do Atelier de Criação', legenda: 'Atelier de Criação, aula de aquarela na CICLOS+.', pos: '50% 85%' },
  },
  {
    slug: 'arte-musical',
    nome: 'Arte Musical',
    frase: 'Música para estudar, cantar e viver em grupo.',
    resumo: 'Ouvir com atenção, entender a história por trás das canções e soltar a voz em grupo.',
    texto: [
      'As aulas combinam escuta guiada, história da música e prática coletiva: a turma conhece compositores, estilos e épocas, e também canta junto.',
      'O que vale é o prazer de fazer música em grupo, no tom de cada um.',
    ],
    perguntas: ['O que torna uma canção inesquecível?', 'Como a música conta a história de um país?', 'Por que cantar em grupo é tão bom?'],
    horarios: [{ dia: 'Terça', hora: '14h às 15h30' }],
    foto: { src: gMusica, alt: 'Turma canta junto em volta de um piano, com partituras nas mãos e um professor ao violão', ilustrativa: true },
  },
  {
    slug: 'historias-nacionais',
    nome: 'Histórias Nacionais',
    frase: 'Por que os países se tornaram aquilo que são?',
    resumo: 'A formação de países e povos contada a partir de personagens, conflitos e viradas que ajudam a entender o mundo de hoje.',
    texto: [
      'A disciplina percorre a trajetória de diferentes países e povos: como se formaram, o que viveram e por que são do jeito que são.',
      'São duas turmas às quartas-feiras, uma no início e outra no fim da tarde, para quem prefere um horário ou outro.',
    ],
    perguntas: ['O que uma guerra antiga explica sobre o noticiário de hoje?', 'Como uma nação escolhe seus heróis?', 'O que o Brasil tem em comum com outros países?'],
    horarios: [
      { dia: 'Quarta', hora: '14h às 15h30', turma: 'Turma 1' },
      { dia: 'Quarta', hora: '16h às 17h30', turma: 'Turma 2' },
    ],
    foto: { src: gNacionais, alt: 'Três alunos examinam mapas antigos e fotografias de uma cidade histórica, um deles com uma lupa', ilustrativa: true },
  },
  {
    slug: 'historia-geral',
    nome: 'História Geral',
    frase: 'Entender o passado muda a maneira de enxergar o presente.',
    resumo: 'Das primeiras civilizações aos grandes acontecimentos modernos, uma visão ampla para entender o presente.',
    texto: [
      'A disciplina percorre grandes períodos e transformações da humanidade, ligando fatos, ideias e pessoas numa narrativa que faz sentido.',
      'As aulas são expositivas e conversadas: há espaço para perguntas, comparações com o presente e a experiência de cada aluno.',
    ],
    perguntas: ['Como viviam as pessoas nas primeiras cidades?', 'O que o passado explica sobre as escolhas de hoje?', 'Quais ideias mudaram o rumo da história?'],
    horarios: [{ dia: 'Quinta', hora: '16h às 17h30' }],
    foto: { src: rGeral, alt: 'Turma da CICLOS+ numa aula de História Geral', legenda: 'Aula de História Geral na CICLOS+.' },
    fotoAula: { src: gGeral, alt: 'Aluna levanta a mão para perguntar durante uma aula sobre a Grécia antiga', ilustrativa: true },
  },
  {
    slug: 'vida-digital',
    nome: 'Vida Digital',
    frase: 'O celular a seu favor, no seu ritmo.',
    resumo: 'Celular, aplicativos e internet a serviço do seu dia a dia, com calma e muita prática.',
    texto: [
      'As aulas tratam do que faz diferença na rotina: conversar por vídeo, organizar fotos, usar aplicativos com segurança, reconhecer golpes e descobrir o que a tecnologia pode oferecer.',
      'Ninguém fica para trás: cada dúvida é bem-vinda, e a prática acontece no ritmo da turma.',
    ],
    perguntas: ['Como guardar as fotos da família sem perder nenhuma?', 'Como reconhecer uma mensagem falsa?', 'Que aplicativo pode facilitar a sua semana?'],
    horarios: [{ dia: 'Terça', hora: '16h às 17h30' }],
    foto: { src: gDigital, alt: 'Aluna mostra ao colega como fotografar um vaso de flores com o celular; os dois riem', ilustrativa: true },
  },
];

export const disciplinaPorSlug = (slug: string) => disciplinas.find((d) => d.slug === slug);

// Grade de horários 2026/2 (Porto Alegre), transcrita da imagem publicada no site atual.
export const grade = {
  periodo: '2026/2',
  horarios: ['14h às 15h30', '16h às 17h30'],
  dias: [
    { dia: 'Segunda', aulas: ['Filosofia', 'Literatura'] },
    { dia: 'Terça', aulas: ['Aquarela · Arte Musical', 'Vida Digital'] },
    { dia: 'Quarta', aulas: ['Histórias Nacionais · turma 1', 'Histórias Nacionais · turma 2'] },
    { dia: 'Quinta', aulas: ['História da Arte', 'História Geral'] },
    { dia: 'Sexta', aulas: ['Cursos livres, clube do livro, roteiros culturais e confraternizações'] },
  ],
};

// Como funcionam as disciplinas, em qualquer unidade.
export const comoFunciona = [
  { termo: 'Toda semana', texto: 'Um encontro semanal por disciplina, ao longo do semestre.' },
  { termo: '1h30 de aula', texto: 'À tarde, em dois horários: 14h e 16h.' },
  { termo: 'Sem provas', texto: 'Sem notas e sem pressão. O ritmo é o da turma.' },
  { termo: 'Professor da área', texto: 'Aulas com professores qualificados em cada assunto.' },
];
