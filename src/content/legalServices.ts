// ============================================================================
// ARCHIVO: src/content/legalServices.ts
// OBJETIVO: Actualización estratégica de copy comercial (Estándar Superbridge)
// ============================================================================

export const HERO_SECTION = {
  headline: "Asesoría Legal Estratégica y Corporativa",
  subheadline: "Soluciones claras y adaptadas a tus necesidades reales. Enfócate en hacer crecer tu negocio mientras nosotros blindamos tus operaciones y activos clave.",
  ctaPrimary: "Solicitar Consulta Estratégica"
};

export const PRACTICE_AREAS = [
  {
    id: "derecho-comercial",
    title: "Derecho Comercial y Corporativo",
    description: "Nuestra misión es que puedas enfocarte en tu negocio. Asumimos el control de la estructuración legal, contratos y aspectos societarios para garantizar operaciones seguras.",
    icon: "ShieldCheck"
  },
  {
    id: "startups",
    title: "Ecosistema Startups",
    description: "Asesoría integral desde el origen. Abordamos la constitución, pactos, cumplimiento y estructuras legales para preparar tu empresa para la inversión y el crecimiento.",
    icon: "RocketLaunch"
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad Intelectual y Marcas",
    description: "Una marca no es solo un nombre o un logo: es la identidad de tu negocio. Registrarla no es un trámite, es una decisión estratégica fundamental.",
    icon: "FingerPrint"
  },
  {
    id: "compliance",
    title: "Gobierno Corporativo y Compliance",
    description: "Implementamos reglas claras y estándares normativos para que tomes decisiones seguras, proyectando confianza y credibilidad ante tus clientes e inversores.",
    icon: "Scale"
  }
] as const;

export const TRUST_BANNER = {
  message: "Porque cada proyecto merece una estrategia legal que garantice su futuro y expansión."
};

// ============================================================================
// Tipo exportado para consumo en componentes
// ============================================================================
export type PracticeArea = (typeof PRACTICE_AREAS)[number];
export type HeroContent = typeof HERO_SECTION;
export type TrustContent = typeof TRUST_BANNER;
