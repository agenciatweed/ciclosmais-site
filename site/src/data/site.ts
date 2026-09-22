// Dados globais da marca. Itens marcados PENDENTE aguardam confirmação da CICLOS+.

export const site = {
  name: 'CICLOS+',
  descriptor: 'Escola Cultural 60+',
  tagline: 'Aprender, conectar, viver!',
  email: 'contato@ciclosmais.com',
  instagram: 'https://www.instagram.com/ciclos.mais/',
  instagramHandle: '@ciclos.mais',
  // PENDENTE: número oficial. O site antigo usa (51) 99343-3639 na Home e (51) 98153-0001 nas páginas internas.
  whatsapp: { display: '(51) 99343-3639', e164: '5551993433639' },
  // PENDENTE: destino do formulário (CRM, planilha, e-mail). Enquanto vazio, o formulário conclui a conversa pelo WhatsApp.
  formEndpoint: '',
};

export const whatsappLink = (text?: string, e164 = site.whatsapp.e164) =>
  `https://wa.me/${e164}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
