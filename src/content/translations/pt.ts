import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organiza despesas, planeia o teu mês e dá espaço às poupanças. Descobre a Vetra: finanças pessoais sem anúncios e com sincronização opcional.',
  },
  nav: {
    features: 'Descobrir',
    faq: 'Dúvidas',
    download: 'Ver na Google Play',
    language: 'Idioma',
    theme: 'Alterar tema de cor',
    skip: 'Saltar para o conteúdo',
  },
  hero: {
    eyebrow: 'MAIS CLAREZA. MAIS TRANQUILIDADE.',
    title: 'Dá espaço ao que importa.',
    text: 'As tuas despesas, os teus planos, o que vem a seguir. Junta o teu dinheiro num lugar que torna tudo mais simples.',
    note: 'Disponível atualmente em testes fechados na Google Play.',
    chips: ['Sem anúncios', 'Ao teu ritmo', 'À tua maneira'],
  },
  planning: {
    eyebrow: 'UM PLANO À MEDIDA DA TUA VIDA',
    title: 'O teu mês. Não apenas um calendário.',
    text: 'De um salário ao seguinte, dá um lugar às contas, ao dia a dia e às poupanças. Percebe o que está reservado e o que continua disponível.',
    items: ['Contas a pagar', 'Dia a dia', 'Poupanças'],
  },
  clarity: {
    eyebrow: 'A VISÃO GERAL, SEM CONFUSÃO',
    title: 'Tudo se junta. Tudo faz sentido.',
    text: 'Vê as tuas contas em conjunto, encontra um movimento em segundos e percebe para onde vai o dinheiro. O detalhe certo, quando precisas.',
    items: ['Contas juntas', 'Movimentos claros', 'Análises úteis'],
  },
  details: {
    eyebrow: 'PEQUENOS DETALHES. GRANDES DIFERENÇAS.',
    title: 'Para a vida como ela é.',
    text: 'O dinheiro não é apenas um total no fim do mês. Há outros detalhes que merecem o seu lugar.',
    items: [
      {
        title: 'Um lugar para cada objetivo',
        text: 'Separa dinheiro em cofres e acompanha os teus objetivos de poupança.',
      },
      {
        title: 'Todas as tuas contas num só lugar',
        text: 'Gere contas bancárias, dinheiro em mão e poupanças sem misturar valores. Cada conta com o seu saldo e histórico.',
      },
      {
        title: 'Nada fica esquecido',
        text: 'Acompanha o que te devem e regista os pagamentos à medida que chegam.',
      },
    ],
  },
  trust: {
    eyebrow: 'O TEU DINHEIRO. AS TUAS DECISÕES.',
    title: 'Um lugar mais tranquilo para as finanças.',
    text: 'Sem anúncios pelo caminho. Sem ligação ao banco. Tu decides se queres sincronizar com a nuvem.',
    items: [
      {
        title: 'Funciona offline',
        text: 'Gere as finanças sem Internet depois da configuração inicial. O login e os serviços na nuvem precisam de ligação.',
      },
      {
        title: 'Sincroniza se quiseres',
        text: 'Ativa a sincronização para ter os dados da tua conta disponíveis em vários dispositivos.',
      },
      {
        title: 'Guarda uma cópia',
        text: 'Cria uma cópia Vetra para restauro ou exporta um PDF para consultar os teus dados.',
      },
    ],
  },
  faq: {
    title: 'Talvez estejas a pensar…',
    items: [
      {
        title: 'A Vetra liga-se ao meu banco?',
        text: 'Não. Tu registas as contas e os movimentos. A Vetra ajuda-te a organizar as finanças; não é um serviço bancário.',
      },
      {
        title: 'Que moedas posso escolher?',
        text: 'EUR, USD, GBP, CNY, CHF, AUD, CAD ou BRL na configuração inicial. A moeda principal aplica-se às tuas finanças. Ainda não é possível alterá-la mais tarde.',
      },
      {
        title: 'Tenho de sincronizar?',
        text: 'Não. A sincronização é opcional. Se usares apenas o modo local, guarda uma cópia Vetra atualizada num lugar seguro.',
      },
      {
        title: 'Posso usar sem Internet?',
        text: 'Sim, depois da configuração inicial. A autenticação, sincronização e outros serviços online precisam de Internet.',
      },
      {
        title: 'Como posso experimentar a app?',
        text: 'A app está em testes fechados. Abre a ficha na Google Play para verificar a disponibilidade para a tua conta.',
      },
    ],
  },
  footer: {
    title: 'Mais clareza, todos os dias.',
    text: 'Torna o teu próximo mês um pouco mais leve.',
    privacy: 'Privacidade',
    contact: 'Fala connosco',
    deletion: 'Pedir eliminação da conta',
    rights: 'Feita com cuidado. Sem anúncios.',
    images: 'Descobre a interface real',
  },
} satisfies SiteCopy;
