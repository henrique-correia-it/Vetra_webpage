import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Politique de confidentialité',
  intro:
    'Comment Vetra traite vos informations, ce qui reste sur votre appareil et ce qui se passe lorsque vous utilisez les fonctions en ligne. Cette politique couvre l’application Vetra et ce site.',
  updated: 'Mise à jour le 9 octobre 2026',
  contents: 'Sur cette page',
  contact: 'Votre contact confidentialité',
  contactText:
    'Henrique Correia est le responsable du traitement pour Vetra. Utilisez cette adresse pour l’assistance, vos droits ou la suppression du compte. N’envoyez jamais de mots de passe, codes de vérification ou données complètes de carte bancaire.',
  email: 'Envoyer un email',
  copy: 'Copier l’adresse',
  copied: 'Adresse copiée.',
  copyFailed: 'Sélectionnez et copiez l’adresse ci-dessus, puis collez-la dans votre messagerie.',
  deletion: 'Supprimer votre compte Vetra et vos données',
  deletionSteps: [
    'Dans l’application : ouvrez les paramètres et choisissez Supprimer le compte et les données. Confirmez avec une connexion Internet.',
    `Sans l’application : écrivez à ${site.supportEmail} avec l’objet « Suppression du compte Vetra », en indiquant l’email du compte. Aucune réinstallation n’est nécessaire.`,
    'Nous vérifions que vous contrôlez le compte avant suppression, éventuellement par confirmation depuis son email. Nous ne demandons jamais votre mot de passe. Les demandes de confidentialité reçoivent une réponse sous un mois ; toute prolongation légale est expliquée.',
  ],
  deletionNote:
    'La suppression retire le compte d’authentification, les données financières personnelles et leurs pièces jointes du cloud. L’application efface ensuite les données locales du compte après réussite. Les données partagées nécessaires aux autres membres peuvent rester, avec transfert de propriété. Les copies sur d’autres appareils, exports et sauvegardes que vous avez conservés ou partagés ne sont pas effacés à distance. Désactiver la synchronisation, se déconnecter ou désinstaller ne supprime pas le compte cloud.',
  providers: 'Informations des prestataires',
  sections: [
    {
      id: 'data',
      title: '1. Informations et finalités',
      paragraphs: [
        'Le compte comprend email, nom de profil, identifiants, session et préférences de langue, thème et synchronisation. Supabase assure l’authentification et la gestion du compte même sans synchronisation financière. Avec Google, nous recevons identité de base, email et profil, jamais votre mot de passe Google. Vous saisissez comptes, soldes, opérations, catégories, plans, épargne, créances, personnes, notes, étiquettes et pièces jointes pour organiser vos finances. Vetra ne se connecte pas à votre banque, n’exécute pas de paiements et ne demande ni identifiants bancaires ni numéro de carte/CVV. Évitez les informations sensibles concernant des tiers.',
      ],
    },
    {
      id: 'sync',
      title: '2. Utilisation locale, synchronisation et partage',
      paragraphs: [
        'Les finances sont conservées localement. Activer la synchronisation envoie les données compatibles et pièces jointes à Supabase pour restauration ou utilisation sur plusieurs appareils. La désactiver arrête la synchronisation financière personnelle habituelle, sans effacer les données déjà envoyées. Authentification, profil et fonctions en ligne des comptes partagés sont distincts. Les membres voient le solde et les opérations de ce compte, pas toutes vos finances. Les invitations utilisent email et identifiants d’adhésion. Les noms et créances de tiers proviennent de vos saisies, pas d’un transfert automatique des contacts.',
      ],
    },
    {
      id: 'security',
      title: '3. Sécurité et accès',
      paragraphs: [
        'La base financière locale est chiffrée ; clé et identifiants sont stockés dans l’espace protégé de la plateforme. Les échanges utilisent HTTPS et les règles cloud limitent les utilisateurs ordinaires aux données autorisées. Ce n’est pas du chiffrement de bout en bout : administration autorisée et prestataires peuvent techniquement accéder aux données cloud pour fonctionnement, sécurité et assistance. Aucune sécurité absolue n’est garantie. Le système authentifie l’appareil ; nous ne recevons ni empreinte ni modèle facial. Les permissions de fichiers sélectionnés et notifications servent aux fonctions correspondantes. Les rappels locaux peuvent apparaître sur l’écran verrouillé selon vos réglages.',
      ],
    },
    {
      id: 'backups',
      title: '4. Sauvegardes et exports',
      paragraphs: [
        'Les sauvegardes de restauration Vetra sont chiffrées avec votre phrase secrète, indispensable à la restauration. Google Drive est facultatif et demande une autorisation distincte, limitée aux fichiers créés ou ouverts avec l’application, pas à tout votre Drive. Google traite compte et fichiers selon ses conditions. Les PDF sont lisibles, pas des sauvegardes chiffrées. Vos téléchargements, partages et fichiers Drive restent sous votre contrôle ; supprimer le compte ne les efface pas et ne révoque pas les copies de tiers. Supprimez-les séparément.',
      ],
    },
    {
      id: 'basis',
      title: '5. Bases légales et choix',
      paragraphs: [
        'Au titre du RGPD, le compte et les fonctions financières, cloud et partagées demandées reposent sur la fourniture du service (article 6.1.b). Sécurité proportionnée, prévention des abus et assistance reposent sur les intérêts légitimes (6.1.f) ; obligations légales et demandes de droits, sur 6.1.c. Un consentement peut être retiré sans affecter les traitements licites antérieurs. Fonctions facultatives et permissions peuvent être désactivées. L’authentification est nécessaire au compte en ligne. Nous ne vendons pas les données et n’utilisons ni traceurs publicitaires ni décisions de crédit automatisées ni profils publicitaires financiers.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Prestataires et traitement international',
      paragraphs: [
        'Supabase fournit authentification, base de données et pièces jointes cloud. Google fournit connexion facultative, Drive, emails de service via Gmail et hébergement du support email. GitHub Pages héberge ce site. Ils traitent identité, contenu et données techniques nécessaires ; des divulgations légales ou pour protéger des droits sont possibles. Leurs opérations peuvent concerner des pays hors EEE. Les conditions de traitement de Supabase décrivent garanties, sous-traitants et clauses contractuelles types applicables. Google, Cloudflare et GitHub expliquent leurs transferts dans leurs politiques. Contactez-nous pour connaître les garanties applicables.',
        `Cloudflare protège et distribue ce site et transfère les messages envoyés à ${site.supportEmail} vers notre boîte de support Gmail. Ce transfert traite les adresses de l’expéditeur et du destinataire, le contenu, les pièces jointes et les données techniques de livraison. Cloudflare ne fournit pas la synchronisation financière de Vetra.`,
      ],
    },
    {
      id: 'retention',
      title: '7. Conservation et limites de suppression',
      paragraphs: [
        'Les données locales restent jusqu’à leur suppression ou réinitialisation. Compte et finances personnelles cloud restent pendant l’existence du compte ou jusqu’à suppression par le service. Des marqueurs peuvent subsister pour propager les suppressions. Journaux de sécurité et sauvegardes résiduelles suivent les règles et rotations des prestataires, sans effacement instantané. Correspondance et vérifications sont conservées seulement pour résoudre la demande, prouver son traitement ou respecter une obligation. Les données partagées peuvent servir aux autres membres. Nous expliquons les raisons et critères d’une conservation légale ou de sécurité légitime.',
      ],
    },
    {
      id: 'website',
      title: '8. Site et diagnostic',
      paragraphs: [
        'Le site n’utilise pas de traceurs publicitaires ou analytiques Vetra. Il conserve uniquement langue et thème choisis manuellement en stockage local ; la langue du navigateur est lue localement pour choisir une traduction compatible. Bloquer le stockage ne bloque pas le site. GitHub et Cloudflare peuvent traiter les adresses IP et journaux techniques pour héberger, distribuer et protéger le site ; les liens externes ont leurs politiques. L’application garde un diagnostic local limité conçu pour exclure montants, noms et emails. Aucun envoi automatique : vous pouvez le supprimer ou le partager au support. Vérifiez vos pièces jointes. Les prestataires gardent leurs propres journaux opérationnels et de sécurité.',
      ],
    },
    {
      id: 'rights',
      title: '9. Vos droits',
      paragraphs: [
        'Selon la loi, vous pouvez demander accès, rectification, effacement, limitation, portabilité et opposition aux intérêts légitimes, et retirer un consentement lorsqu’il fonde le traitement. Contactez-nous ; vérifications proportionnées et demandes normalement gratuites. Les données exclusivement locales ne sont pas récupérables à distance par nous. Vous pouvez saisir votre autorité locale, dont la CNPD portugaise. D’autres droits peuvent exister selon votre pays. Vetra ne cible pas les enfants et ne sollicite pas sciemment leurs données sans les garanties légales nécessaires. Signalez-nous toute situation concernée.',
      ],
    },
    {
      id: 'changes',
      title: '10. Modifications',
      paragraphs: [
        'La date identifie cette version. Les changements importants sont communiqués par les canaux appropriés lorsque nécessaire. Une nouvelle finalité nécessitant information ou consentement ne se justifie pas par une simple modification du texte. Les traductions facilitent l’accès sans limiter vos droits légaux.',
      ],
    },
  ],
} satisfies PrivacyCopy;
