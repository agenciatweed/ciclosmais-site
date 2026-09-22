// Cada unidade é um registro. Uma nova franquia entra aqui, sem redesenhar o site.

export type Unidade = {
  slug: string;
  cidade: string;
  uf: string;
  local?: string;
  endereco: string;
  mapa: string;
  whatsapp?: { display: string; e164: string };
  desde?: string;
};

export const unidades: Unidade[] = [
  {
    slug: 'porto-alegre',
    cidade: 'Porto Alegre',
    uf: 'RS',
    endereco: 'Rua Dona Laura, 1020 · Rio Branco',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Rua+Dona+Laura+1020+Rio+Branco+Porto+Alegre+RS',
    desde: 'Primeira turma em 2020',
  },
  {
    slug: 'pelotas',
    cidade: 'Pelotas',
    uf: 'RS',
    local: 'Rampa Innovation Hub',
    endereco: 'Rua Boulevard Quartier, 500',
    mapa: 'https://www.google.com/maps/search/?api=1&query=Rampa+Innovation+Hub+Rua+Boulevard+Quartier+500+Pelotas+RS',
  },
];
