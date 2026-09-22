// Disciplinas semestrais. Frases de Filosofia a Aquarela vêm da estratégia de campanha;
// Literatura e Vida Digital foram redigidas para o site (revisar com a CICLOS+).

export type Disciplina = { nome: string; frase: string };

export const disciplinas: Disciplina[] = [
  { nome: 'Filosofia', frase: 'Grandes perguntas não se aposentam.' },
  { nome: 'História da Arte', frase: 'Depois que aprendemos a olhar, nenhuma obra é a mesma.' },
  { nome: 'Literatura', frase: 'Todo livro fica maior quando alguém conversa sobre ele.' },
  { nome: 'Aquarela', frase: 'Não é preciso saber pintar para começar a enxergar as cores de outro jeito.' },
  { nome: 'Arte Musical', frase: 'Música para estudar, cantar e viver em grupo.' },
  { nome: 'Histórias Nacionais', frase: 'Por que os países se tornaram aquilo que são?' },
  { nome: 'História Geral', frase: 'Entender o passado muda a maneira de enxergar o presente.' },
  { nome: 'Vida Digital', frase: 'O celular a seu favor, no seu ritmo.' },
];

// Grade de horários 2026/2, transcrita da imagem publicada no site atual.
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
