import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organisez vos dépenses, préparez votre mois et faites une place à l’épargne. Découvrez Vetra, l’app de finances personnelles sans publicité, avec synchronisation facultative.',
  },
  nav: {
    features: 'Découvrir',
    faq: 'Questions',
    download: 'Voir sur Google Play',
    language: 'Langue',
    theme: 'Changer de thème',
    skip: 'Aller au contenu',
  },
  hero: {
    eyebrow: 'PLUS DE CLARTÉ. PLUS DE SÉRÉNITÉ.',
    title: 'Faites place à ce qui compte.',
    text: 'Vos dépenses, vos projets et la suite. Rassemblez vos finances dans un espace qui reste simple.',
    note: 'Actuellement disponible en test fermé sur Google Play.',
    chips: ['Sans publicité', 'À votre rythme', 'À vous de choisir'],
  },
  planning: {
    eyebrow: 'UN PLAN ADAPTÉ À VOTRE VIE',
    title: 'Votre mois. Pas seulement un calendrier.',
    text: 'D’un salaire à l’autre, donnez leur place aux dépenses quotidiennes, aux factures et à l’épargne. Voyez ce qui est réservé et ce qui reste disponible.',
    items: ['Factures à payer', 'Au quotidien', 'Épargne'],
  },
  clarity: {
    eyebrow: 'L’ESSENTIEL, SANS LE BRUIT',
    title: 'Tout devient plus clair.',
    text: 'Retrouvez vos comptes ensemble, trouvez une opération en quelques secondes et comprenez où va votre argent. Le détail utile, au bon moment.',
    items: ['Vos comptes réunis', 'Des opérations claires', 'Une analyse utile'],
  },
  details: {
    eyebrow: 'DE PETITS DÉTAILS. UNE VRAIE DIFFÉRENCE.',
    title: 'Pour votre vraie vie.',
    text: 'L’argent ne se résume pas à un total mensuel. Vetra fait aussi une place aux détails.',
    items: [
      {
        title: 'Une place pour chaque projet',
        text: 'Séparez votre argent dans des coffres et suivez vos objectifs d’épargne.',
      },
      {
        title: 'Tous vos comptes au même endroit',
        text: 'Gérez comptes bancaires, espèces et épargne en toute clarté. Chaque compte dispose de son propre solde et historique.',
      },
      {
        title: 'Rien n’est oublié',
        text: 'Suivez ce que l’on vous doit et enregistrez les remboursements à leur arrivée.',
      },
    ],
  },
  trust: {
    eyebrow: 'VOTRE ARGENT. VOS DÉCISIONS.',
    title: 'Un espace plus serein pour vos finances.',
    text: 'Aucune publicité à contourner. Aucune connexion bancaire obligatoire. Vous choisissez d’utiliser ou non la synchronisation cloud.',
    items: [
      {
        title: 'Fonctionne hors ligne',
        text: 'Gérez vos finances hors ligne après la configuration initiale. La connexion au compte et les services cloud nécessitent Internet.',
      },
      {
        title: 'Synchronisez à votre choix',
        text: 'Activez la synchronisation pour retrouver les données de votre compte sur plusieurs appareils.',
      },
      {
        title: 'Gardez une sauvegarde',
        text: 'Enregistrez une sauvegarde Vetra pour restaurer vos données, ou exportez un PDF pour les consulter.',
      },
    ],
  },
  faq: {
    title: 'Quelques questions, peut-être.',
    items: [
      {
        title: 'Dois-je connecter ma banque ?',
        text: 'Non. Vous enregistrez vous-même vos opérations. Vetra n’est pas une banque et ne réalise pas de paiements à votre place.',
      },
      {
        title: 'Quelles devises sont disponibles ?',
        text: 'EUR, USD, GBP, CNY, CHF, AUD, CAD et BRL. La devise choisie lors de la configuration s’applique à vos finances. La modifier plus tard n’est pas encore possible.',
      },
      {
        title: 'La synchronisation est-elle obligatoire ?',
        text: 'Non. Vous pouvez garder vos données sur votre appareil. Dans ce cas, effectuez régulièrement des sauvegardes.',
      },
      {
        title: 'Puis-je utiliser Vetra sans Internet ?',
        text: 'Oui, après la configuration initiale. L’authentification et les services cloud nécessitent une connexion.',
      },
      {
        title: 'Puis-je déjà l’essayer ?',
        text: 'Vetra est en test fermé sur Google Play. Ouvrez sa fiche pour vérifier si vous y avez accès.',
      },
    ],
  },
  footer: {
    title: 'Un peu plus de clarté, chaque jour.',
    text: 'Abordez le prochain mois un peu plus sereinement.',
    privacy: 'Confidentialité',
    contact: 'Nous contacter',
    deletion: 'Demander la suppression du compte',
    rights: 'Conçue avec soin. Sans publicité.',
    images: 'Explorer la véritable interface',
  },
} satisfies SiteCopy;
