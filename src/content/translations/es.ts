import type { SiteCopy } from '../types';
export default {
  meta: {
    description:
      'Organiza tus gastos, planifica el mes y haz espacio para ahorrar. Descubre Vetra, tu app de finanzas personales sin anuncios y con sincronización opcional.',
  },
  nav: {
    features: 'Descubrir',
    faq: 'Preguntas',
    download: 'Ver en Google Play',
    language: 'Idioma',
    theme: 'Cambiar tema',
    skip: 'Ir al contenido',
  },
  hero: {
    eyebrow: 'MÁS CLARIDAD. MÁS TRANQUILIDAD.',
    title: 'Haz espacio para lo que importa.',
    text: 'Tus gastos, tus planes y lo que viene después. Reúne tus finanzas en un lugar que se siente sencillo.',
    note: 'Disponible actualmente mediante pruebas cerradas en Google Play.',
    chips: ['Sin anuncios', 'A tu ritmo', 'Tú decides'],
  },
  planning: {
    eyebrow: 'UN PLAN QUE SE ADAPTA A TI',
    title: 'Tu mes. No solo un calendario.',
    text: 'De un sueldo al siguiente, dale su sitio a los gastos cotidianos, las facturas y el ahorro. Sabrás cuánto has reservado y cuánto queda disponible.',
    items: ['Pagos pendientes', 'Día a día', 'Ahorro'],
  },
  clarity: {
    eyebrow: 'LA VISIÓN GENERAL, SIN RUIDO',
    title: 'Todo suma claridad.',
    text: 'Consulta tus cuentas juntas, encuentra un movimiento en segundos y entiende adónde va tu dinero. El detalle útil, solo cuando lo necesitas.',
    items: ['Cuentas juntas', 'Movimientos claros', 'Análisis útil'],
  },
  details: {
    eyebrow: 'PEQUEÑOS DETALLES. GRAN DIFERENCIA.',
    title: 'Para tu vida de verdad.',
    text: 'El dinero es más que un total mensual. Vetra también da espacio a los detalles.',
    items: [
      {
        title: 'Un lugar para cada meta',
        text: 'Separa dinero en cofres y sigue tus objetivos de ahorro.',
      },
      {
        title: 'Todas tus cuentas en un solo lugar',
        text: 'Gestiona cuentas bancarias, efectivo y ahorros sin mezclar importes. Cada cuenta mantiene su saldo e historial organizados.',
      },
      {
        title: 'Nada queda olvidado',
        text: 'Controla lo que te deben y registra los pagos cuando lleguen.',
      },
    ],
  },
  trust: {
    eyebrow: 'TU DINERO. TUS DECISIONES.',
    title: 'Un lugar más tranquilo para tus finanzas.',
    text: 'Sin anuncios de por medio. Sin conexión bancaria obligatoria. Tú decides si utilizas la sincronización en la nube.',
    items: [
      {
        title: 'Funciona sin conexión',
        text: 'Gestiona tus finanzas sin conexión tras la configuración inicial. Iniciar sesión y los servicios en la nube requieren Internet.',
      },
      {
        title: 'Sincroniza cuando quieras',
        text: 'Activa la sincronización para mantener los datos de tu cuenta disponibles en varios dispositivos.',
      },
      {
        title: 'Conserva una copia',
        text: 'Guarda una copia Vetra para restaurar tus datos o exporta un PDF para consultarlos.',
      },
    ],
  },
  faq: {
    title: 'Quizá te estés preguntando…',
    items: [
      {
        title: '¿Tengo que conectar mi banco?',
        text: 'No. Registras tus movimientos tú mismo. Vetra no es un banco ni realiza pagos por ti.',
      },
      {
        title: '¿Qué monedas puedo elegir?',
        text: 'EUR, USD, GBP, CNY, CHF, AUD, CAD y BRL. La moneda elegida al configurar la app se aplica a tus finanzas. Cambiarla después aún no está disponible.',
      },
      {
        title: '¿Es obligatorio sincronizar?',
        text: 'No. Puedes mantener tus datos en el dispositivo. En ese caso, guarda copias de seguridad periódicas.',
      },
      {
        title: '¿Puedo usarla sin Internet?',
        text: 'Sí, tras la configuración inicial. La autenticación y los servicios en la nube necesitan conexión.',
      },
      {
        title: '¿Puedo probarla ya?',
        text: 'Vetra está en pruebas cerradas en Google Play. Abre la ficha para comprobar si tienes acceso.',
      },
    ],
  },
  footer: {
    title: 'Un poco más de claridad, cada día.',
    text: 'Haz que tu próximo mes sea un poco más ligero.',
    privacy: 'Privacidad',
    contact: 'Contactar',
    deletion: 'Solicitar eliminación de cuenta',
    rights: 'Hecha con cuidado. Sin anuncios.',
    images: 'Explorar la interfaz real',
  },
} satisfies SiteCopy;
