import { site } from '../../config/site';
import type { PrivacyCopy } from './types';
export default {
  title: 'Política de privacidad',
  intro:
    'Cómo trata Vetra tu información, qué queda en el dispositivo y qué ocurre al usar funciones online. Esta política cubre la app Vetra y este sitio web.',
  updated: 'Actualizada el 9 de octubre de 2026',
  contents: 'En esta página',
  contact: 'Contacto de privacidad',
  contactText:
    'Henrique Correia es el responsable del tratamiento en Vetra. Usa este correo para soporte, solicitudes de privacidad o eliminación de cuenta. No envíes contraseñas, códigos de verificación ni datos completos de tarjetas bancarias.',
  email: 'Enviar email',
  copy: 'Copiar correo',
  copied: 'Correo copiado.',
  copyFailed: 'Selecciona y copia la dirección anterior y pégala en tu servicio de correo.',
  deletion: 'Eliminar tu cuenta Vetra y tus datos',
  deletionSteps: [
    'En la app: abre Ajustes y selecciona Eliminar cuenta y datos. Confirma con conexión a Internet.',
    `Sin la app: escribe a ${site.supportEmail} con el asunto «Eliminar cuenta Vetra» e indica el correo de tu cuenta. No necesitas reinstalar la app.`,
    'Verificamos que controlas la cuenta antes de eliminarla. Podemos pedir confirmación desde su correo registrado, nunca tu contraseña. Respondemos a las solicitudes de privacidad en un mes; las posibles ampliaciones legales se explican.',
  ],
  deletionNote:
    'Se elimina la cuenta de autenticación, los datos financieros personales y los archivos adjuntos en la nube. Tras completarse, la app borra sus datos locales de esa cuenta. Los registros compartidos necesarios para otros miembros pueden permanecer, transfiriendo la propiedad a otro miembro. No se borran remotamente copias en otros dispositivos, exportaciones o backups que hayas guardado o compartido. Desactivar la sincronización, cerrar sesión o desinstalar no elimina tu cuenta en la nube.',
  providers: 'Información de los proveedores',
  sections: [
    {
      id: 'data',
      title: '1. Información y finalidades',
      paragraphs: [
        'La cuenta incluye correo, nombre de perfil, identificadores, sesión y preferencias de idioma, tema y sincronización. La autenticación y gestión de cuenta usan Supabase incluso sin sincronización financiera. Con Google recibimos identidad básica, correo y perfil, no tu contraseña de Google. Tú introduces cuentas, saldos, movimientos, categorías, planes, ahorros, deudas, personas, notas, etiquetas y adjuntos para organizar tus finanzas. Vetra no conecta con bancos, ejecuta pagos, recoge contraseñas bancarias ni exige números de tarjeta/CVV. Evita información sensible de terceros en notas o adjuntos.',
      ],
    },
    {
      id: 'sync',
      title: '2. Uso local, sincronización y cuentas compartidas',
      paragraphs: [
        'Los datos financieros se guardan localmente. Al activar la sincronización, los registros compatibles y adjuntos se envían a Supabase para restaurarlos o usarlos en varios dispositivos. Desactivarla detiene la sincronización financiera personal habitual, pero no borra lo ya enviado. Autenticación, perfil y funciones online de cuentas compartidas son independientes. Los miembros ven el saldo y movimientos de esa cuenta, no todas tus finanzas. Los invitados se identifican por correo y participación. Los nombres y deudas de otras personas proceden de lo que introduces, no de una subida automática de contactos.',
      ],
    },
    {
      id: 'security',
      title: '3. Seguridad y acceso',
      paragraphs: [
        'La base de datos financiera local está cifrada y su clave y credenciales se guardan en almacenamiento protegido de la plataforma. La comunicación online usa HTTPS y los controles de acceso limitan a los usuarios ordinarios a registros autorizados. No es cifrado de extremo a extremo: administradores autorizados y proveedores pueden acceder técnicamente a datos en la nube para operar, proteger y dar soporte. No existe seguridad absoluta. El sistema operativo autentica el dispositivo; no recibimos huellas ni plantillas faciales. Los permisos de archivos seleccionados y notificaciones se solicitan para esas funciones. Los recordatorios son locales y pueden mostrarse en la pantalla bloqueada según tus ajustes.',
      ],
    },
    {
      id: 'backups',
      title: '4. Copias de seguridad y exportaciones',
      paragraphs: [
        'Las copias de restauración Vetra están cifradas con tu frase de contraseña, necesaria para restaurarlas. Google Drive es opcional y requiere autorización separada, limitada a archivos creados o abiertos con la app, no acceso general a todo el Drive. Google trata la cuenta y archivos bajo sus términos. Los PDF son documentos legibles, no copias de restauración cifradas. Las copias que descargas, compartes o guardas en Drive quedan bajo tu control; eliminar la cuenta no las borra ni revoca las copias de otras personas. Elimínalas por separado.',
      ],
    },
    {
      id: 'basis',
      title: '5. Bases jurídicas y opciones',
      paragraphs: [
        'Conforme al RGPD, la cuenta y las funciones financieras, de nube y compartidas solicitadas se tratan para prestar el servicio (artículo 6.1.b). Seguridad proporcional, prevención de abusos y soporte se basan en intereses legítimos (6.1.f); las obligaciones legales y solicitudes de derechos, en 6.1.c. Cuando se requiera consentimiento puedes retirarlo sin afectar al tratamiento lícito anterior. Puedes desactivar funciones opcionales y permisos. La autenticación es necesaria para una cuenta online. No vendemos datos ni usamos rastreadores publicitarios, decisiones automatizadas de crédito o perfiles publicitarios financieros.',
      ],
    },
    {
      id: 'recipients',
      title: '6. Proveedores y tratamiento internacional',
      paragraphs: [
        'Supabase proporciona autenticación, base de datos y adjuntos en la nube. Google proporciona acceso opcional, Drive, envío de emails de servicio mediante Gmail y alojamiento del correo de soporte. GitHub Pages aloja el sitio. Tratan identidad, contenido y datos técnicos necesarios para su servicio; también puede haber divulgación por obligación legal o defensa de derechos. Sus operaciones pueden implicar países fuera del EEE. Los términos de Supabase describen garantías, subencargados y cláusulas contractuales tipo aplicables. Google, Cloudflare y GitHub explican transferencias en sus políticas. Puedes pedir información sobre las garantías aplicables.',
        `Cloudflare protege y distribuye este sitio y reenvía los mensajes enviados a ${site.supportEmail} a nuestro buzón de soporte en Gmail. El reenvío trata las direcciones del remitente y destinatario, el contenido, los adjuntos y los datos técnicos de entrega. Cloudflare no proporciona la sincronización financiera de Vetra.`,
      ],
    },
    {
      id: 'retention',
      title: '7. Conservación y límites del borrado',
      paragraphs: [
        'Los registros locales permanecen hasta borrarlos o restablecerlos. La cuenta y datos financieros personales en la nube permanecen mientras exista la cuenta o hasta eliminarlos mediante el servicio. Pueden conservarse marcadores para propagar borrados entre dispositivos. Los registros de seguridad y backups residuales siguen los plazos y rotación del proveedor, no un borrado instantáneo. Conservamos correspondencia y verificaciones solo mientras sea necesario para resolver, acreditar la gestión del pedido o cumplir obligaciones. Los registros compartidos pueden servir a otros miembros. Si una obligación o seguridad legítima exige conservación, explicamos el motivo y criterios.',
      ],
    },
    {
      id: 'website',
      title: '8. Sitio web y diagnóstico',
      paragraphs: [
        'El sitio no tiene rastreadores publicitarios ni analíticos de Vetra. Solo guarda idioma y tema elegidos manualmente en el almacenamiento local del navegador; lee localmente el idioma del navegador para seleccionar una traducción compatible. Funciona con almacenamiento bloqueado. GitHub y Cloudflare pueden tratar IP y registros técnicos para alojar, distribuir y proteger el sitio; los enlaces externos tienen políticas propias. La app mantiene un diagnóstico local limitado diseñado para excluir importes, nombres y emails. No se envía automáticamente: puedes borrarlo o compartirlo para soporte. Revisa los adjuntos. Los proveedores mantienen sus registros operativos y de seguridad.',
      ],
    },
    {
      id: 'rights',
      title: '9. Tus derechos',
      paragraphs: [
        'Según la ley aplicable puedes solicitar acceso, rectificación, supresión, limitación, portabilidad y oposición a intereses legítimos, y retirar consentimiento cuando sea la base. Escribe al contacto indicado; la identificación es proporcional y normalmente no se cobra. No podemos recuperar remotamente datos solo locales. Puedes reclamar ante tu autoridad de protección de datos, incluida la CNPD portuguesa. Otras jurisdicciones pueden conceder más derechos. Vetra no está dirigida a niños ni solicita deliberadamente sus datos sin las garantías legales necesarias. Avísanos si crees que se han proporcionado.',
      ],
    },
    {
      id: 'changes',
      title: '10. Cambios en la política',
      paragraphs: [
        'La fecha identifica esta versión. Los cambios relevantes se comunican por canales adecuados cuando corresponda. Un nuevo fin que requiera información o consentimiento adicional no se legitima solo cambiando este texto. Las traducciones facilitan el acceso y no limitan derechos legales.',
      ],
    },
  ],
} satisfies PrivacyCopy;
