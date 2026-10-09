import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organize expenses, plan your month and make room for savings. Discover Vetra, your personal finance app without ads, with optional cloud sync.',
  },
  nav: {
    features: 'Discover',
    faq: 'Questions',
    download: 'View on Google Play',
    language: 'Language',
    theme: 'Change color theme',
    skip: 'Skip to content',
  },
  hero: {
    eyebrow: 'A LITTLE CLARITY. A LOT MORE CALM.',
    title: 'Make room for what matters.',
    text: 'Your expenses, your plans, your next chapter. Bring your money together in a place that feels simple.',
    note: 'Available for Android on Google Play.',
    chips: ['No ads', 'Your pace', 'Your choice'],
    views: ['Overview', 'Vaults & Goals', 'Transactions'],
  },
  planning: {
    eyebrow: 'A PLAN THAT FITS YOUR LIFE',
    title: 'Your month. Not just a calendar.',
    text: 'From payday to the next, give everyday spending, bills and savings their own place. Know what is set aside and what is still available.',
    items: ['Bills to pay', 'Everyday spending', 'Savings'],
  },
  clarity: {
    eyebrow: 'THE BIG PICTURE, WITHOUT THE NOISE',
    title: 'Everything adds up to clarity.',
    text: 'See your accounts together, find a transaction in seconds and understand where your money goes. Useful detail, only when you need it.',
    items: ['Accounts together', 'Clear transactions', 'Meaningful analysis'],
  },
  details: {
    eyebrow: 'SMALL DETAILS. REAL DIFFERENCE.',
    title: 'For the way you actually live.',
    text: 'Money is not only a monthly total. Vetra makes room for the details around it.',
    items: [
      {
        title: 'A place for each goal',
        text: 'Separate money in vaults and follow your savings goals.',
      },
      {
        title: 'All your accounts in one place',
        text: 'Keep track of bank accounts, cash, and savings without mixing them up. Every account has its own clear balance and history.',
      },
      {
        title: 'Nothing left forgotten',
        text: 'Track what people owe you and record payments as they arrive.',
      },
    ],
    currencies: {
      badge: 'NATIVE CURRENCIES',
      title: 'Your primary currency, with native consistency',
      text: 'Manage your finances in EUR, USD, GBP, BRL, CNY, CHF, AUD, or CAD. This initial base currency choice stays fixed for your financial book, keeping your balances and reports reliable.',
    },
  },
  comparison: {
    eyebrow: 'THE VETRA APPROACH',
    title: 'Built for calm and intentional finances.',
    text: 'Instead of complicated automated feeds and constant noise, Vetra brings an intentional, private, and clear way to manage your money.',
    othersTitle: 'Common Approach',
    others: [
      'Complex bank syncs that often need manual corrections',
      'Frequent notifications and unnecessary visual noise',
      'Continuous dependency on an active internet connection',
      'Crowded interfaces with scattered financial features',
    ],
    vetraTitle: 'With Vetra',
    vetra: [
      'Intentional tracking at your own natural pace',
      'Clean space free from advertisements and distractions',
      'Offline-first usage with your data on your device',
      'Optional cloud sync and secure encrypted backups',
    ],
  },
  trust: {
    eyebrow: 'YOUR MONEY. YOUR DECISIONS.',
    title: 'A calmer place for your finances.',
    text: 'No advertising in the way. No bank connection required. You decide whether to use cloud synchronization.',
    items: [
      {
        title: 'Works offline',
        text: 'Manage your finances offline after initial setup. Sign-in and cloud services need a connection.',
      },
      {
        title: 'Sync when you choose',
        text: 'Enable cloud sync to keep your account data available across devices.',
      },
      {
        title: 'Keep a backup',
        text: 'Save a Vetra backup for restoration, or export a PDF for a readable overview.',
      },
    ],
  },
  faq: {
    eyebrow: 'CLEAR ANSWERS',
    title: 'Questions you might have…',
    text: 'Everything you need to know about how Vetra protects and simplifies your finances, with zero fine print.',
    items: [
      {
        title: 'Does Vetra connect to my bank account?',
        text: 'No. You record accounts and transactions at your own pace. Vetra never asks for your online banking credentials or accesses your bank; it is a private sanctuary to manage your money with clarity.',
      },
      {
        title: 'Is my financial data sold or used for advertising?',
        text: 'Never. Vetra is built with a strong focus on privacy. We do not sell data to third parties, show advertisements, or partner with lenders to push loans and credit cards.',
      },
      {
        title: 'Can I use Vetra without an internet connection?',
        text: 'Yes. Vetra works offline once your workspace is set up. You can record transactions, check balances, and manage vaults anywhere. An internet connection is only needed for sign-in and optional cloud sync.',
      },
      {
        title: 'Is cloud synchronization mandatory?',
        text: 'No, it is completely optional. You can keep all your financial data stored strictly on your local device, or enable secure cloud sync to keep your finances updated across multiple devices.',
      },
      {
        title: 'Which currencies can I choose?',
        text: 'You can choose EUR, USD, GBP, BRL, CNY, CHF, AUD, or CAD as your base currency during setup. Please note that your initial currency selection is permanent for that financial book, preserving historical balance accuracy.',
      },
      {
        title: 'What happens if I change phones or want to back up my data?',
        text: 'You own your data entirely. At any time, you can export an encrypted .vetra backup file to restore on another device, or generate comprehensive financial summary reports in PDF.',
      },
      {
        title: 'Which platforms does Vetra support?',
        text: 'Vetra is available for Android smartphones and tablets on Google Play. Our team is currently dedicated to delivering the best possible experience on Android.',
      },
      {
        title: 'How do I get started with Vetra or reach support?',
        text: 'Download Vetra directly from Google Play using the buttons on this page. Simply sign in with your account to set up your book and start organizing your finances in minutes. If you have questions or feedback, reach out to us anytime.',
      },
    ],
  },
  footer: {
    title: 'A little more clarity, every day.',
    text: 'Make your next month feel a little lighter.',
    privacy: 'Privacy',
    contact: 'Get in touch',
    deletion: 'Request account deletion',
    rights: 'Made with care. Without ads.',
    images: 'Explore the real interface',
  },
} satisfies SiteCopy;
