import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Informativa sulla privacy',
  intro:
    'Come Vetra tratta le informazioni, cosa resta sul dispositivo e cosa succede con le funzioni online. Questa informativa riguarda l’app Vetra e questo sito.',
  updated: 'Aggiornata il 9 ottobre 2026',
  contents: 'In questa pagina',
  contact: 'Contatto per la privacy',
  contactText:
    'Henrique Correia è il titolare del trattamento per Vetra. Usa questo indirizzo per assistenza, richieste sulla privacy o cancellazione dell’account. Non inviare password, codici di verifica o dati completi di carte bancarie.',
  email: 'Invia email',
  copy: 'Copia indirizzo email',
  copied: 'Indirizzo copiato.',
  copyFailed: 'Seleziona e copia l’indirizzo qui sopra e incollalo nel tuo servizio email.',
  deletion: 'Elimina il tuo account Vetra e i dati',
  deletionSteps: [
    'Nell’app: apri Impostazioni e scegli Elimina account e dati. Conferma con una connessione Internet.',
    `Senza l’app: scrivi a ${site.supportEmail} con oggetto «Eliminazione account Vetra», indicando l’email dell’account. Non devi reinstallare l’app.`,
    'Verifichiamo che controlli l’account prima di eliminarlo, eventualmente tramite conferma dalla sua email registrata. Non chiediamo mai la password. Rispondiamo alle richieste di privacy entro un mese; eventuali proroghe previste dalla legge vengono spiegate.',
  ],
  deletionNote:
    'La cancellazione rimuove account di autenticazione, dati finanziari personali e relativi allegati nel cloud. Dopo il successo, l’app cancella anche i dati locali dell’account. I dati condivisi necessari ad altri membri possono restare, trasferendo la proprietà. Copie su altri dispositivi, esportazioni e backup salvati o condivisi da te non vengono cancellati a distanza. Disattivare la sincronizzazione, uscire o disinstallare non elimina l’account cloud.',
  providers: 'Informazioni dei fornitori',
  sections: [
    {
      id: 'data',
      title: '1. Informazioni e finalità',
      paragraphs: [
        'L’account include email, nome del profilo, identificatori, sessione e preferenze di lingua, tema e sincronizzazione. Supabase gestisce autenticazione e account anche con sincronizzazione finanziaria disattivata. Con Google riceviamo identità di base, email e profilo, non la password Google. Inserisci conti, saldi, movimenti, categorie, piani, risparmi, crediti, persone, note, etichette e allegati per organizzare le finanze. Vetra non si collega alle banche, esegue pagamenti, raccoglie password bancarie o richiede numeri di carta/CVV. Evita informazioni sensibili di terzi nelle note o negli allegati.',
      ],
    },
    {
      id: 'sync',
      title: '2. Uso locale, sincronizzazione e condivisione',
      paragraphs: [
        'I dati finanziari sono locali. Attivare la sincronizzazione invia dati supportati e allegati a Supabase per ripristino o utilizzo su più dispositivi. Disattivarla interrompe la normale sincronizzazione finanziaria personale, senza cancellare i dati già inviati. Autenticazione, profilo e funzioni online dei conti condivisi sono separate. I membri vedono saldo e movimenti di quel conto, non tutte le tue finanze. Gli inviti usano email e identificatori di partecipazione. Nomi e crediti di altre persone provengono dalle tue informazioni, non da un caricamento automatico dei contatti.',
      ],
    },
    {
      id: 'security',
      title: '3. Sicurezza e accesso',
      paragraphs: [
        'Il database finanziario locale è cifrato; chiave e credenziali sono nello spazio protetto della piattaforma. Le comunicazioni usano HTTPS e le regole cloud limitano gli utenti ordinari ai dati autorizzati. Non è cifratura end-to-end: amministratori autorizzati e fornitori possono tecnicamente accedere ai dati cloud per funzionamento, sicurezza e assistenza. Non è garantita sicurezza assoluta. Il sistema operativo autentica il dispositivo; non riceviamo impronte o modelli facciali. Permessi per file selezionati e notifiche servono alle rispettive funzioni. Promemoria locali possono apparire sulla schermata bloccata secondo le impostazioni.',
      ],
    },
    {
      id: 'backups',
      title: '4. Backup ed esportazioni',
      paragraphs: [
        'I file di ripristino Vetra sono cifrati con la tua passphrase, necessaria al ripristino. Google Drive è facoltativo e richiede un’autorizzazione separata, limitata ai file creati o aperti con l’app, non a tutto il Drive. Google tratta account e file secondo i suoi termini. I PDF sono documenti leggibili, non backup cifrati. Le copie scaricate, condivise o salvate nel Drive restano sotto il tuo controllo. Eliminare l’account non le cancella e non revoca copie di altre persone. Eliminale separatamente.',
      ],
    },
    {
      id: 'basis',
      title: '5. Basi giuridiche e scelte',
      paragraphs: [
        'Secondo il GDPR, account e funzioni finanziarie, cloud e condivise richieste servono a fornire il servizio (articolo 6.1.b). Sicurezza proporzionata, prevenzione abusi e assistenza si basano su interessi legittimi (6.1.f); obblighi legali e richieste sui diritti, su 6.1.c. Il consenso può essere revocato senza incidere sui trattamenti leciti precedenti. Funzioni facoltative e permessi sono disattivabili. L’autenticazione è necessaria all’account online. Non vendiamo dati né usiamo tracciatori pubblicitari, decisioni automatiche di credito o profilazione pubblicitaria finanziaria.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Fornitori e trattamento internazionale',
      paragraphs: [
        'Supabase fornisce autenticazione, database e allegati cloud. Google fornisce accesso facoltativo, Drive, invio email di servizio con Gmail e hosting del supporto email. GitHub Pages ospita il sito. Trattano identità, contenuti e dati tecnici necessari al servizio; possono essere necessarie comunicazioni per legge o tutela di diritti. Le operazioni possono coinvolgere paesi fuori dallo SEE. I termini di Supabase descrivono garanzie, sub-responsabili e clausole contrattuali standard applicabili. Google, Cloudflare e GitHub spiegano i trasferimenti nelle proprie informative. Puoi chiedere informazioni sulle garanzie applicabili.',
        `Cloudflare protegge e distribuisce questo sito e inoltra i messaggi inviati a ${site.supportEmail} alla nostra casella di assistenza Gmail. L’inoltro tratta gli indirizzi di mittente e destinatario, il contenuto, gli allegati e i dati tecnici di consegna. Cloudflare non fornisce la sincronizzazione finanziaria di Vetra.`,
      ],
    },
    {
      id: 'retention',
      title: '7. Conservazione e limiti della cancellazione',
      paragraphs: [
        'I dati locali restano fino alla rimozione o azzeramento. Account e dati personali cloud restano mentre l’account esiste o fino alla cancellazione tramite il servizio. Marcatori di cancellazione possono restare per propagarla tra dispositivi. Log di sicurezza e backup residui seguono conservazione e rotazione del fornitore, non una cancellazione istantanea. Corrispondenza e verifiche restano solo per risolvere la richiesta, documentarne la gestione o obblighi legali. Dati condivisi possono servire agli altri membri. Eventuale conservazione per legge o sicurezza legittima viene spiegata con motivi e criteri.',
      ],
    },
    {
      id: 'website',
      title: '8. Sito e diagnostica',
      paragraphs: [
        'Il sito non ha tracciatori pubblicitari o analitici Vetra. Conserva localmente solo lingua e tema scelti manualmente; legge localmente la lingua del browser per scegliere una traduzione supportata. Bloccare lo storage non impedisce l’accesso. GitHub e Cloudflare possono trattare indirizzi IP e log tecnici per ospitare, distribuire e proteggere il sito; i link esterni hanno proprie informative. L’app conserva una diagnostica locale limitata progettata per escludere importi, nomi ed email. Nessun invio automatico: puoi cancellarla o condividerla con l’assistenza. Controlla gli allegati. I fornitori mantengono log operativi e di sicurezza.',
      ],
    },
    {
      id: 'rights',
      title: '9. I tuoi diritti',
      paragraphs: [
        'Secondo la legge puoi richiedere accesso, rettifica, cancellazione, limitazione, portabilità e opposizione agli interessi legittimi, e revocare consenso dove applicabile. Scrivi al contatto indicato; verifica proporzionata e richieste normalmente gratuite. Non possiamo recuperare a distanza dati solo locali. Puoi reclamare all’autorità locale, inclusa la CNPD portoghese. Altri paesi possono prevedere diritti aggiuntivi. Vetra non è rivolta ai bambini e non cerca consapevolmente i loro dati senza le necessarie garanzie legali. Segnalaci eventuali casi.',
      ],
    },
    {
      id: 'changes',
      title: '10. Modifiche',
      paragraphs: [
        'La data identifica la versione. Le modifiche rilevanti vengono comunicate tramite canali adeguati quando richiesto. Una nuova finalità che richiede informazione o consenso non è legittimata dalla sola modifica del testo. Le traduzioni facilitano l’accesso senza limitare i diritti legali.',
      ],
    },
  ],
} satisfies PrivacyCopy;
