import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organiza gastos, planifica tu mes y haz espacio para ahorrar. Descubre Vetra: finanzas personales sin anuncios y con sincronización opcional.',
  },
  nav: {
    features: 'Descubrir',
    faq: 'Preguntas',
    download: 'Ver en Google Play',
    language: 'Idioma',
    theme: 'Cambiar tema de color',
    skip: 'Saltar al contenido',
  },
  hero: {
    eyebrow: 'MÁS CLARIDAD. MUCHA MÁS CALMA.',
    title: 'Haz espacio para lo importante.',
    text: 'Tus gastos, tus planes, tu próxima etapa. Reúne tu dinero en un lugar que hace todo más sencillo.',
    note: 'Disponible para Android en Google Play.',
    chips: ['Sin anuncios', 'A tu ritmo', 'A tu manera'],
    views: ['Vista General', 'Bóvedas y Metas', 'Movimientos'],
  },
  planning: {
    eyebrow: 'UN PLAN A LA MEDIDA DE TU VIDA',
    title: 'Tu mes. No solo un calendario.',
    text: 'De un salario al siguiente, da un lugar a las facturas, al día a día y al ahorro. Ten claro lo reservado y lo que sigue disponible.',
    items: ['Facturas por pagar', 'Día a día', 'Ahorros'],
  },
  clarity: {
    eyebrow: 'LA VISIÓN GLOBAL, SIN RUIDO',
    title: 'Todo suma. Todo cobra sentido.',
    text: 'Observa tus cuentas juntas, localiza un movimiento en segundos y comprende adónde va tu dinero. Detalle útil cuando lo necesitas.',
    items: ['Cuentas reunidas', 'Movimientos claros', 'Análisis útil'],
  },
  details: {
    eyebrow: 'PEQUEÑOS DETALLES. GRANDES DIFERENCIAS.',
    title: 'Para la vida tal como es.',
    text: 'El dinero no es solo una cifra a fin de mes. Vetra da espacio a los detalles cotidianos.',
    items: [
      {
        title: 'Un lugar para cada meta',
        text: 'Separa dinero en bóvedas y sigue tus metas de ahorro paso a paso.',
      },
      {
        title: 'Todas tus cuentas en un mismo sitio',
        text: 'Lleva el control de cuentas bancarias, efectivo y ahorros sin mezclar saldos. Cada cuenta con su propio balance e historial.',
      },
      {
        title: 'Nada queda en el olvido',
        text: 'Registra lo que te deben y anota cobros conforme se reciben.',
      },
    ],
    currencies: {
      badge: 'MONEDAS NATIVAS',
      title: 'Tu moneda principal, con consistencia nativa',
      text: 'Gestiona tus finanzas en EUR, USD, GBP, BRL, CNY, CHF, AUD o CAD. La moneda base elegida al inicio se mantiene fija para este libro contable, asegurando la exactitud de tus saldos e informes.',
    },
  },
  comparison: {
    eyebrow: 'EL ENFOQUE VETRA',
    title: 'Diseñada para tu tranquilidad.',
    text: 'En lugar de automatizaciones complejas y notificaciones insistentes, Vetra apuesta por una gestión consciente, privada y clara de tu dinero.',
    othersTitle: 'Enfoque Habitual',
    others: [
      'Sincronizaciones bancarias complejas con fallos frecuentes',
      'Notificaciones continuas y exceso de ruido visual',
      'Dependencia permanente de conexión a Internet',
      'Interfaces saturadas con funciones dispersas',
    ],
    vetraTitle: 'Con Vetra',
    vetra: [
      'Registro consciente a tu propio ritmo',
      'Espacio limpio, sin anuncios ni distracciones',
      'Uso offline con tus datos en tu dispositivo',
      'Sincronización opcional y copias de seguridad cifradas',
    ],
  },
  trust: {
    eyebrow: 'TU DINERO. TUS DECISIONES.',
    title: 'Un entorno más sereno para tus finanzas.',
    text: 'Sin anuncios que interrumpan. Sin conexión bancaria obligatoria. Tú decides si sincronizas con la nube.',
    items: [
      {
        title: 'Funciona sin conexión',
        text: 'Gestiona tus finanzas sin Internet tras la configuración inicial. Iniciar sesión y los servicios en la nube requieren conexión.',
      },
      {
        title: 'Sincroniza cuando elijas',
        text: 'Activa la sincronización en la nube para mantener tus datos disponibles entre dispositivos.',
      },
      {
        title: 'Guarda una copia',
        text: 'Crea una copia Vetra para restaurar tus datos o exporta un PDF para consultarlos de forma clara.',
      },
    ],
  },
  faq: {
    eyebrow: 'RESPUESTAS CLARAS',
    title: 'Quizás te estés preguntando…',
    text: 'Todo lo que necesitas saber sobre cómo Vetra protege y simplifica tus finanzas, sin letra pequeña.',
    items: [
      {
        title: '¿Vetra se conecta a mi cuenta bancaria?',
        text: 'No. Registras tus cuentas y movimientos a tu propio ritmo. Vetra nunca solicita claves bancarias ni accede a tus entidades; es un espacio privado para gestionar tu dinero con claridad.',
      },
      {
        title: '¿Se venden mis datos o se usan para publicidad?',
        text: 'No. Vetra está construida con un firme compromiso con la privacidad. No vendemos datos a terceros, no mostramos publicidad ni intermediamos ofertas de crédito o tarjetas.',
      },
      {
        title: '¿Puedo usar Vetra sin conexión a Internet?',
        text: 'Sí. Vetra funciona sin conexión tras la configuración inicial. Puedes registrar gastos, consultar saldos y gestionar apartados en cualquier lugar. La conexión solo es necesaria para iniciar sesión y para la sincronización opcional en la nube.',
      },
      {
        title: '¿Es obligatoria la sincronización en la nube?',
        text: 'No, es totalmente opcional. Puedes guardar tus datos exclusivamente en la memoria de tu dispositivo o activar la sincronización segura para tener tus finanzas al día en varios dispositivos.',
      },
      {
        title: '¿Qué monedas puedo elegir?',
        text: 'Puedes seleccionar EUR, USD, GBP, BRL, CNY, CHF, AUD o CAD como moneda principal durante la configuración inicial. Ten en cuenta que esta elección es definitiva para tu libro financiero actual, protegiendo la coherencia de tus datos.',
      },
      {
        title: '¿Qué ocurre si cambio de teléfono o quiero hacer una copia de seguridad?',
        text: 'Eres el único dueño de tus datos. En cualquier momento puedes exportar un archivo de copia de seguridad .vetra cifrado para restaurar en otro dispositivo o generar informes completos en PDF.',
      },
      {
        title: '¿En qué plataformas está disponible Vetra?',
        text: 'Vetra está disponible para teléfonos y tablets Android a través de Google Play. El equipo está concentrado en brindar la mejor experiencia posible dentro del ecosistema Android.',
      },
      {
        title: '¿Cómo empiezo a usar Vetra y recibo ayuda?',
        text: 'Puedes descargar Vetra desde Google Play a través de los enlaces de esta página. Inicia sesión con tu cuenta para configurar tu libro y empezar en pocos minutos. Si tienes preguntas o sugerencias, contáctanos en cualquier momento.',
      },
    ],
  },
  footer: {
    title: 'Más claridad, cada día.',
    text: 'Haz que tu próximo mes se sienta más ligero.',
    privacy: 'Privacidad',
    contact: 'Contactar',
    deletion: 'Solicitar eliminación de cuenta',
    rights: 'Hecha con esmero. Sin anuncios.',
    images: 'Explora la interfaz real',
  },
} satisfies SiteCopy;
