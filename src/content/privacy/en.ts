import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Privacy policy',
  intro:
    'How Vetra handles your information, what stays on your device and what happens when you use online features. This policy covers the Vetra app and this website.',
  updated: 'Updated 9 October 2026',
  contents: 'On this page',
  contact: 'Your privacy contact',
  contactText:
    'Henrique Correia is the controller responsible for Vetra. Use this address for support, privacy requests or account deletion. Do not send passwords, verification codes or full bank-card details.',
  email: 'Send email',
  copy: 'Copy email address',
  copied: 'Email address copied.',
  copyFailed: 'Select and copy the address above, then paste it into your email service.',
  deletion: 'Delete your Vetra account and data',
  deletionSteps: [
    'In the app: open Settings and choose Delete account and data. Confirm the operation while connected to the Internet.',
    `Without the app: email ${site.supportEmail} with the subject “Vetra account deletion”, identifying the email address of your Vetra account. You do not need to reinstall the app.`,
    'We verify that you control the account before deleting it. We may ask you to confirm the request from its registered email address, never to disclose your password. We respond to privacy requests within one month; lawful extensions are explained when applicable.',
  ],
  deletionNote:
    'Deleting removes your authentication account, personal cloud finance data and associated cloud attachments. The app also clears its local account data after successful deletion. Shared-account records needed by other members may remain, with ownership transferred to another member. Copies on other devices, exports and backups you saved or shared are not remotely erased. Disabling sync, signing out or uninstalling does not delete your cloud account.',
  providers: 'Provider information',
  sections: [
    {
      id: 'data',
      title: '1. Information and purposes',
      paragraphs: [
        'Account information includes email, profile name, identifiers, session information and preferences such as language, theme and sync choice. Authentication and account management use Supabase even when financial sync is off. If you choose Google sign-in, Google supplies basic account identity, email and profile information; Vetra does not receive your Google password.',
        'You enter accounts, balances, transactions, categories, plans, savings, receivables, people, notes, tags and selected attachments yourself. They are used to organise your finances. Vetra does not connect to your bank, execute payments, collect banking passwords or require card numbers/CVV. Avoid putting sensitive third-party information into notes or attachments.',
      ],
    },
    {
      id: 'sync',
      title: '2. Local use, sync and sharing',
      paragraphs: [
        'Financial data is stored locally. Enabling cloud sync sends supported financial records and attachments to Supabase so they can be restored or used across devices. Disabling sync stops ordinary personal financial synchronisation; it does not erase data already uploaded. Account authentication, profile settings and shared-account online functions are separate from this choice.',
        'Shared-account members can see that account’s balance and transactions, not your entire personal finances. Invitations use email and membership identifiers. Only share information that others should see. Names and debts concerning other people come from the information you enter, not from an automatic contacts upload.',
      ],
    },
    {
      id: 'security',
      title: '3. Security and access',
      paragraphs: [
        'The app encrypts its local financial database and keeps its database key and authentication credentials in platform-protected storage. Online communication uses HTTPS. Cloud access controls restrict ordinary users to authorised records. This is not end-to-end encryption: authorised administration and infrastructure providers can technically access cloud data for service operation, security and support. No system guarantees absolute security.',
        'Device authentication is performed by the operating system; Vetra receives the result, not your fingerprint or facial template. Selected file access and notification permissions are requested for their relevant functions. Reminders are scheduled locally; their content may be visible on your lock screen according to your device settings.',
      ],
    },
    {
      id: 'backups',
      title: '4. Backups and exports',
      paragraphs: [
        'Vetra restoration files are encrypted with your chosen passphrase. Keep it safe: it is needed to restore them. Optional Google Drive backup requires separate Google permission limited to files created or opened with the app; it does not grant general access to your entire Drive. Google processes the account and files under its own terms.',
        'PDF exports are readable documents, not encrypted restoration files. Files you download, email, share or store in Drive remain under your control. Deleting your Vetra account does not delete those copies or revoke another person’s copy. Remove them separately when no longer needed.',
      ],
    },
    {
      id: 'basis',
      title: '5. Legal bases and choices',
      paragraphs: [
        'Under the GDPR, account management and requested finance, cloud and sharing functions are processed to provide the service (Article 6(1)(b)). Proportionate security, abuse prevention and support rely on legitimate interests (Article 6(1)(f)); legal obligations, including handling data-rights requests, use Article 6(1)(c). Where processing requires consent, you can withdraw it without affecting earlier lawful processing.',
        'Optional functions and device permissions can be disabled. Authentication information is necessary to provide an online account; without it those services cannot be provided. Vetra does not sell your data, run advertising trackers or use your finances for automated credit decisions or advertising profiling.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Providers and international processing',
      paragraphs: [
        'Supabase provides authentication, database and cloud attachment storage. Google provides optional sign-in, Drive backups, Gmail delivery of service emails and support-email hosting. GitHub Pages hosts this website. These providers process relevant identity, content and technical connection data for their respective services. Disclosure may also be necessary to comply with law or protect legal rights.',
        `Cloudflare protects and distributes this website and forwards messages sent to ${site.supportEmail} to our Gmail support mailbox. Email forwarding processes sender and recipient addresses, message content, attachments and technical delivery data. Cloudflare does not provide Vetra’s financial synchronisation.`,
        'Provider operations may involve countries outside your own, including outside the EEA. Supabase’s data-processing terms describe safeguards, subprocessors and applicable standard contractual clauses for restricted transfers. Google, Cloudflare and GitHub describe their international processing in their privacy policies. Contact us for information about safeguards applicable to your data.',
      ],
    },
    {
      id: 'retention',
      title: '7. Retention and deletion limits',
      paragraphs: [
        'Local records remain until you remove or reset them. Cloud account and personal financial records remain while your account exists or until deleted through the service. Deletion markers may remain while needed to propagate removals across devices. Infrastructure security logs and residual provider backups follow the provider’s retention and rotation rules rather than an instant wipe.',
        'Support correspondence and request-verification records are retained only as needed to resolve the request, demonstrate its handling or meet a legal obligation. Shared records may continue to serve other members. If retention is required by law or a legitimate security purpose, we explain the relevant reason and criteria instead of promising immediate destruction of every copy.',
      ],
    },
    {
      id: 'website',
      title: '8. Website and diagnostics',
      paragraphs: [
        'This website has no Vetra advertising or analytics trackers. It stores only your manually chosen language and colour theme in browser local storage. Browser language is read locally to select a supported translation. Blocking storage does not prevent access. GitHub and Cloudflare may process IP addresses and technical request logs to host, distribute and protect the site. External Google Play and provider links have their own policies.',
        'The app keeps a limited local technical diagnostic log, designed to omit monetary values, names and emails. It is not automatically sent to us. You can clear it or choose to share it for support; review any attachments before sending. Hosting and authentication providers also maintain their own operational and security logs.',
      ],
    },
    {
      id: 'rights',
      title: '9. Your rights',
      paragraphs: [
        'Depending on applicable law, you may request access, correction, erasure, restriction, portability and objection to processing based on legitimate interests. You may withdraw consent where it is the legal basis. Email the contact above; identity checks are proportionate and requests are normally free. Local-only records cannot be retrieved remotely by us.',
        'You may complain to your local supervisory authority, including Portugal’s CNPD. Other jurisdictions may provide additional rights. Vetra is not directed at children and does not knowingly seek their personal information without the safeguards required by applicable law. Contact us if you believe such information has been provided.',
      ],
    },
    {
      id: 'changes',
      title: '10. Changes to this policy',
      paragraphs: [
        'The date above identifies this version. Material changes are communicated through appropriate service channels where required. A new purpose requiring additional notice or consent will not be justified merely by changing this text. Translations are provided for accessibility; statutory rights are not limited by the language you choose.',
      ],
    },
  ],
} satisfies PrivacyCopy;
