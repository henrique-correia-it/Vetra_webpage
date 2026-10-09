import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Datenschutzerklärung',
  intro:
    'Wie Vetra Informationen verarbeitet, was auf deinem Gerät bleibt und was bei Online-Funktionen geschieht. Diese Erklärung gilt für die Vetra-App und diese Website.',
  updated: 'Stand: 9. Oktober 2026',
  contents: 'Auf dieser Seite',
  contact: 'Datenschutzkontakt',
  contactText:
    'Henrique Correia ist der für Vetra Verantwortliche. Nutze diese Adresse für Support, Datenschutzanfragen oder Kontolöschung. Sende keine Passwörter, Bestätigungscodes oder vollständigen Bankkartendaten.',
  email: 'E-Mail senden',
  copy: 'E-Mail-Adresse kopieren',
  copied: 'Adresse kopiert.',
  copyFailed: 'Markiere und kopiere die Adresse oben und füge sie in deinen E-Mail-Dienst ein.',
  deletion: 'Vetra-Konto und Daten löschen',
  deletionSteps: [
    'In der App: Öffne die Einstellungen und wähle Konto und Daten löschen. Bestätige bei bestehender Internetverbindung.',
    `Ohne App: Schreibe an ${site.supportEmail} mit dem Betreff „Vetra-Konto löschen“ und nenne die E-Mail-Adresse deines Kontos. Eine Neuinstallation ist nicht nötig.`,
    'Vor der Löschung prüfen wir deine Kontrolle über das Konto, gegebenenfalls durch Bestätigung von dessen registrierter E-Mail-Adresse. Wir fragen nie nach deinem Passwort. Datenschutzanfragen beantworten wir innerhalb eines Monats; gesetzlich zulässige Verlängerungen werden erläutert.',
  ],
  deletionNote:
    'Gelöscht werden das Authentifizierungskonto, persönliche Finanzdaten und zugehörige Cloud-Anhänge. Nach erfolgreicher Löschung entfernt die App auch lokale Kontodaten. Gemeinsame Datensätze, die andere Mitglieder benötigen, können erhalten bleiben; das Eigentum wird gegebenenfalls übertragen. Kopien auf anderen Geräten, Exporte und selbst gespeicherte oder geteilte Sicherungen werden nicht aus der Ferne gelöscht. Synchronisierung ausschalten, Abmelden oder Deinstallieren löscht kein Cloud-Konto.',
  providers: 'Informationen der Anbieter',
  sections: [
    {
      id: 'data',
      title: '1. Informationen und Zwecke',
      paragraphs: [
        'Kontodaten umfassen E-Mail, Profilname, Kennungen, Sitzung und Einstellungen für Sprache, Design und Synchronisierung. Authentifizierung und Kontoverwaltung nutzen Supabase auch ohne Finanzsynchronisierung. Bei Google-Anmeldung erhalten wir grundlegende Identität, E-Mail und Profil, niemals dein Google-Passwort. Du erfasst Konten, Salden, Buchungen, Kategorien, Pläne, Sparziele, Forderungen, Personen, Notizen, Tags und ausgewählte Anhänge zur Finanzorganisation. Vetra verbindet sich nicht mit Banken, führt keine Zahlungen aus und verlangt weder Bankpasswörter noch Kartennummern/CVV. Vermeide sensible Informationen über andere Personen.',
      ],
    },
    {
      id: 'sync',
      title: '2. Lokale Nutzung, Synchronisierung und Teilen',
      paragraphs: [
        'Finanzdaten werden lokal gespeichert. Aktivierte Synchronisierung übermittelt unterstützte Datensätze und Anhänge an Supabase zur Wiederherstellung oder geräteübergreifenden Nutzung. Deaktivieren stoppt die normale persönliche Finanzsynchronisierung, löscht aber bereits übermittelte Daten nicht. Authentifizierung, Profil und Online-Funktionen gemeinsamer Konten sind davon getrennt. Mitglieder sehen Saldo und Buchungen dieses Kontos, nicht alle persönlichen Finanzen. Einladungen verwenden E-Mail und Mitgliedschaftskennungen. Namen und Forderungen anderer Personen stammen aus deinen Eingaben, nicht aus automatisch hochgeladenen Kontakten.',
      ],
    },
    {
      id: 'security',
      title: '3. Sicherheit und Zugriff',
      paragraphs: [
        'Die lokale Finanzdatenbank ist verschlüsselt; Schlüssel und Zugangsdaten liegen im geschützten Plattformspeicher. Online-Verbindungen verwenden HTTPS. Cloud-Zugriffsregeln beschränken gewöhnliche Nutzer auf berechtigte Datensätze. Es handelt sich nicht um Ende-zu-Ende-Verschlüsselung: Berechtigte Administration und Anbieter können für Betrieb, Sicherheit und Support technisch auf Cloud-Daten zugreifen. Absolute Sicherheit ist nicht garantiert. Die Geräteauthentifizierung übernimmt das Betriebssystem; wir erhalten keine Fingerabdrücke oder Gesichtsvorlagen. Datei- und Benachrichtigungsrechte dienen den jeweiligen Funktionen. Lokale Erinnerungen können je nach Geräteeinstellungen auf dem Sperrbildschirm erscheinen.',
      ],
    },
    {
      id: 'backups',
      title: '4. Sicherungen und Exporte',
      paragraphs: [
        'Vetra-Wiederherstellungsdateien werden mit deiner Passphrase verschlüsselt; diese ist zur Wiederherstellung erforderlich. Optionales Google Drive erfordert eine gesonderte Berechtigung für mit der App erstellte oder geöffnete Dateien, keinen allgemeinen Zugriff auf dein gesamtes Drive. Google verarbeitet Konto und Dateien nach seinen Bedingungen. PDFs sind lesbare Dokumente, keine verschlüsselten Sicherungen. Heruntergeladene, geteilte oder in Drive gespeicherte Kopien kontrollierst du selbst. Kontolöschung entfernt diese und Kopien anderer Personen nicht. Lösche sie separat.',
      ],
    },
    {
      id: 'basis',
      title: '5. Rechtsgrundlagen und Entscheidungen',
      paragraphs: [
        'Nach DSGVO beruhen Kontoverwaltung und angeforderte Finanz-, Cloud- und gemeinsame Funktionen auf der Leistungserbringung (Art. 6 Abs. 1 lit. b). Verhältnismäßige Sicherheit, Missbrauchsprävention und Support beruhen auf berechtigten Interessen (lit. f); gesetzliche Pflichten und Rechteanfragen auf lit. c. Erforderliche Einwilligungen kannst du ohne Auswirkung auf frühere rechtmäßige Verarbeitung widerrufen. Optionale Funktionen und Berechtigungen sind abschaltbar. Ohne notwendige Authentifizierung ist kein Online-Konto möglich. Wir verkaufen keine Daten und verwenden weder Werbetracker noch automatisierte Kreditentscheidungen oder Finanz-Werbeprofile.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Anbieter und internationale Verarbeitung',
      paragraphs: [
        'Supabase stellt Authentifizierung, Datenbank und Cloud-Anhänge bereit. Google stellt optionale Anmeldung, Drive, Service-E-Mails über Gmail und Support-E-Mail-Hosting bereit. GitHub Pages hostet die Website. Sie verarbeiten für ihren Dienst erforderliche Identitäts-, Inhalts- und Verbindungsdaten. Gesetzliche Offenlegung oder Schutz rechtlicher Ansprüche kann erforderlich sein. Verarbeitung kann außerhalb des EWR erfolgen. Supabases Auftragsverarbeitungsbedingungen beschreiben Garantien, Unterauftragsverarbeiter und geltende Standardvertragsklauseln. Google, Cloudflare und GitHub erläutern internationale Verarbeitung in ihren Richtlinien. Informationen zu einschlägigen Garantien erhältst du auf Anfrage.',
        `Cloudflare schützt und verteilt diese Website und leitet Nachrichten an ${site.supportEmail} an unser Gmail-Supportpostfach weiter. Dabei werden Absender- und Empfängeradressen, Nachrichteninhalte, Anhänge und technische Zustelldaten verarbeitet. Cloudflare stellt nicht die Finanzsynchronisierung von Vetra bereit.`,
      ],
    },
    {
      id: 'retention',
      title: '7. Aufbewahrung und Löschgrenzen',
      paragraphs: [
        'Lokale Daten bleiben bis zur Löschung oder Zurücksetzung. Cloud-Konto und persönliche Finanzdaten bleiben während des Kontobestands oder bis zur Löschung über den Dienst. Löschmarkierungen können für die Übertragung von Löschungen zwischen Geräten erforderlich bleiben. Sicherheitsprotokolle und verbleibende Anbieter-Sicherungen unterliegen deren Aufbewahrung und Rotation, keiner sofortigen Vernichtung. Supportkorrespondenz und Nachweise bleiben nur solange zur Bearbeitung, Dokumentation oder Erfüllung gesetzlicher Pflichten nötig. Gemeinsame Datensätze können anderen Mitgliedern dienen. Bei gesetzlich oder sicherheitsbedingt erforderlicher Aufbewahrung erläutern wir Gründe und Kriterien.',
      ],
    },
    {
      id: 'website',
      title: '8. Website und Diagnose',
      paragraphs: [
        'Die Website enthält keine Vetra-Werbe- oder Analysetracker. Nur manuell gewählte Sprache und Design werden lokal im Browser gespeichert; seine Sprache wird lokal zur Auswahl einer unterstützten Übersetzung gelesen. Gesperrter Speicher verhindert den Zugriff nicht. GitHub und Cloudflare können IP-Adressen und technische Protokolle zum Hosten, Verteilen und Schützen der Website verarbeiten; externe Links haben eigene Richtlinien. Die App führt ein begrenztes lokales Diagnoseprotokoll, das Beträge, Namen und E-Mails ausschließen soll. Keine automatische Übermittlung: Du kannst es löschen oder für Support teilen. Prüfe Anhänge vor Versand. Anbieter führen eigene Betriebs- und Sicherheitsprotokolle.',
      ],
    },
    {
      id: 'rights',
      title: '9. Deine Rechte',
      paragraphs: [
        'Je nach geltendem Recht kannst du Auskunft, Berichtigung, Löschung, Einschränkung, Übertragbarkeit und Widerspruch gegen berechtigte Interessen verlangen sowie Einwilligungen widerrufen. Schreibe an den Kontakt oben; Identitätsprüfung ist verhältnismäßig, Anfragen normalerweise kostenlos. Rein lokale Daten können wir nicht aus der Ferne abrufen. Beschwerden sind bei deiner Aufsichtsbehörde, einschließlich der portugiesischen CNPD, möglich. Weitere örtliche Rechte können gelten. Vetra richtet sich nicht an Kinder und sucht ihre Daten nicht wissentlich ohne gesetzliche Schutzvorkehrungen. Melde entsprechende Situationen.',
      ],
    },
    {
      id: 'changes',
      title: '10. Änderungen',
      paragraphs: [
        'Das Datum kennzeichnet diese Fassung. Wesentliche Änderungen werden bei Bedarf über geeignete Kanäle mitgeteilt. Neue Zwecke, die Information oder Einwilligung erfordern, sind nicht allein durch Textänderung gerechtfertigt. Übersetzungen erleichtern den Zugang und schränken gesetzliche Rechte nicht ein.',
      ],
    },
  ],
} satisfies PrivacyCopy;
