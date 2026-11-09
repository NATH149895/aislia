// ─────────────────────────────────────────────────────────────
//  CONFIGURATION CENTRALE DU SITE — à compléter avant la mise en ligne
// ─────────────────────────────────────────────────────────────
export const SITE = {
  name: 'Aislia',
  domain: 'aislia.es',
  url: 'https://aislia.es',
  tagline: 'Aislamiento y aerotermia desde 1 € con los CAE',
  description:
    'Aísla tu desván o cambia tu caldera por aerotermia desde 1 € gracias a los Certificados de Ahorro Energético (CAE). Sin requisitos de ingresos. Comprueba gratis si tu vivienda es elegible.',

  // Numéro WhatsApp au format international SANS + ni espaces, ex : '34600111222'.
  // Laisser vide = le bouton WhatsApp est masqué.
  whatsapp: '',
  // Téléphone affiché (optionnel), ex : '+34 600 111 222'
  phone: '',
  email: '', // ex : 'hola@aislia.es'

  // Google Analytics 4 (ex : 'G-XXXXXXXXXX'). Vide = aucun traceur, aucune bannière cookies.
  gaId: '',

  // ─── Données légales (OBLIGATOIRES en Espagne : LSSI art. 10 + RGPD) ───
  legal: {
    companyName: '', // Raison sociale
    taxId: '',       // NIF / CIF
    address: '',     // Adresse du siège
    registry: '',    // Données d'inscription au registre du commerce, si applicable
    contactEmail: '',
  },

  // Fin du dispositif aerotermia avec bonus (Real Decreto-ley 7/2026)
  heatPumpDeadline: '30 de noviembre de 2027',
  heatPumpDeadlineCommunities: '31 de diciembre de 2027',
};

export const pending = (v: string) => (v && v.trim() ? v : '[pendiente de completar]');
