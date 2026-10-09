import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organize gastos, planeje seu mês e abra espaço para poupar. Conheça o Vetra: finanças pessoais sem anúncios e com sincronização opcional.',
  },
  nav: {
    features: 'Conhecer',
    faq: 'Dúvidas',
    download: 'Ver na Google Play',
    language: 'Idioma',
    theme: 'Alterar tema de cor',
    skip: 'Ir para o conteúdo',
  },
  hero: {
    eyebrow: 'MAIS CLAREZA. MAIS TRANQUILIDADE.',
    title: 'Abra espaço para o que importa.',
    text: 'Seus gastos, seus planos, seu próximo passo. Reúna seu dinheiro em um lugar que torna tudo simples.',
    note: 'Disponível para Android na Google Play.',
    chips: ['Sem anúncios', 'No seu ritmo', 'Do seu jeito'],
    views: ['Visão Geral', 'Cofres & Metas', 'Transações'],
  },
  planning: {
    eyebrow: 'UM PLANO SOB MEDIDA PARA VOCÊ',
    title: 'Seu mês. Não apenas um calendário.',
    text: 'De um pagamento ao próximo, dê um lugar às contas, aos gastos do dia a dia e às reservas. Saiba o que está guardado e o que segue disponível.',
    items: ['Contas a pagar', 'Dia a dia', 'Economias'],
  },
  clarity: {
    eyebrow: 'A VISÃO GERAL, SEM RUÍDO',
    title: 'Tudo reunido. Tudo com clareza.',
    text: 'Veja suas contas juntas, encontre um lançamento em segundos e entenda para onde o dinheiro vai. Detalhes úteis quando você precisa.',
    items: ['Contas juntas', 'Lançamentos claros', 'Análises úteis'],
  },
  details: {
    eyebrow: 'PEQUENOS DETALHES. GRANDES DIFERENÇAS.',
    title: 'Feito para a sua vida real.',
    text: 'O dinheiro não é apenas o total do mês. O Vetra dá espaço aos detalhes ao redor dele.',
    items: [
      {
        title: 'Um lugar para cada meta',
        text: 'Separe valores em cofres e acompanhe seus objetivos de economia.',
      },
      {
        title: 'Todas as suas contas em um só lugar',
        text: 'Acompanhe contas bancárias, dinheiro em espécie e poupança sem misturar nada. Cada conta com saldo e histórico próprios.',
      },
      {
        title: 'Nada fica esquecido',
        text: 'Acompanhe o que devem a você e registre pagamentos à medida que chegam.',
      },
    ],
    currencies: {
      badge: 'MOEDAS NATIVAS',
      title: 'Sua moeda principal, com consistência nativa',
      text: 'Defina a moeda base do seu livro entre EUR, USD, GBP, BRL, CNY, CHF, AUD ou CAD. Esta escolha inicial é definitiva para o livro financeiro, mantendo seus saldos e relatórios precisos.',
    },
  },
  comparison: {
    eyebrow: 'A ABORDAGEM VETRA',
    title: 'Feita para a sua tranquilidade.',
    text: 'Em vez de fluxos automáticos complexos e ruído constante, a Vetra aposta numa gestão consciente, privada e clara do seu dinheiro.',
    othersTitle: 'Abordagem Comum',
    others: [
      'Sincronizações bancárias complexas que requerem correções frequentes',
      'Notificações constantes e excesso de ruído visual',
      'Dependência contínua de conexão com a Internet',
      'Telas sobrecarregadas com informações dispersas',
    ],
    vetraTitle: 'Com a Vetra',
    vetra: [
      'Registro consciente no seu próprio ritmo',
      'Ambiente limpo, sem anúncios nem distrações',
      'Uso offline com dados no seu dispositivo',
      'Sincronização opcional e backups criptografados',
    ],
  },
  trust: {
    eyebrow: 'SEU DINHEIRO. SUAS DECISÕES.',
    title: 'Um lugar mais calmo para suas finanças.',
    text: 'Sem anúncios no caminho. Sem conexão bancária obrigatória. Você decide se quer sincronizar com a nuvem.',
    items: [
      {
        title: 'Funciona offline',
        text: 'Gerencie suas finanças sem Internet após a configuração inicial. O login e os serviços na nuvem exigem conexão.',
      },
      {
        title: 'Sincronize se quiser',
        text: 'Ative a sincronização para manter os dados da sua conta disponíveis entre aparelhos.',
      },
      {
        title: 'Mantenha um backup',
        text: 'Gere um arquivo Vetra para restauração ou exporte um PDF para consultar seus dados.',
      },
    ],
  },
  faq: {
    eyebrow: 'RESPOSTAS DIRETAS',
    title: 'Talvez você esteja pensando…',
    text: 'Tudo o que você precisa saber sobre como a Vetra cuida das suas finanças com privacidade e sem letras miúdas.',
    items: [
      {
        title: 'A Vetra se conecta à minha conta bancária?',
        text: 'Não. Você registra suas contas e movimentações no seu próprio ritmo. A Vetra não solicita senhas bancárias nem acessa seu banco; é um espaço privado para organizar seu dinheiro com clareza.',
      },
      {
        title: 'Meus dados financeiros são vendidos ou usados para anúncios?',
        text: 'Não. A Vetra foi construída com foco em privacidade. Não vendemos dados a terceiros, não exibimos anúncios nem intermediamos ofertas de crédito ou cartões.',
      },
      {
        title: 'Posso usar a Vetra sem conexão à Internet?',
        text: 'Sim. A Vetra funciona offline após a configuração inicial. Você pode registrar gastos, consultar saldos e organizar cofres em qualquer lugar. A internet só é necessária para login e sincronização opcional na nuvem.',
      },
      {
        title: 'A sincronização na nuvem é obrigatória?',
        text: 'Não, é totalmente opcional. Você pode manter seus dados salvos exclusivamente no armazenamento do seu celular ou ativar a sincronização segura para usá-lo em múltiplos dispositivos.',
      },
      {
        title: 'Quais moedas posso escolher?',
        text: 'Você pode escolher EUR, USD, GBP, BRL, CNY, CHF, AUD ou CAD como moeda principal na configuração inicial. Lembre-se de que a moeda escolhida no início é definitiva para o seu livro financeiro atual, garantindo a integridade dos saldos e do histórico.',
      },
      {
        title: 'O que acontece se eu trocar de celular ou quiser fazer backup?',
        text: 'Você é o único dono dos seus dados. A qualquer momento, você pode exportar um arquivo de backup .vetra criptografado para restaurar em outro aparelho ou gerar relatórios em PDF.',
      },
      {
        title: 'Em quais plataformas a Vetra está disponível?',
        text: 'A Vetra está disponível para celulares e tablets Android através da Google Play. O foco atual da equipe está em aperfeiçoar a experiência no ecossistema Android.',
      },
      {
        title: 'Como posso começar a usar a Vetra e tirar dúvidas?',
        text: 'Você pode instalar a Vetra diretamente pela Google Play pelos botões desta página. Basta fazer login com a sua conta para configurar o seu livro e começar a organizar suas finanças em poucos minutos. Se tiver dúvidas ou precisar de ajuda, fale conosco a qualquer momento.',
      },
    ],
  },
  footer: {
    title: 'Mais clareza todos os dias.',
    text: 'Faça seu próximo mês parecer mais leve.',
    privacy: 'Privacidade',
    contact: 'Fale conosco',
    deletion: 'Solicitar exclusão de conta',
    rights: 'Feito com cuidado. Sem anúncios.',
    images: 'Conheça a interface real',
  },
} satisfies SiteCopy;
