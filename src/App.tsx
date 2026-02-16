// ============================================================================
// PROTOCOLO DE RESTAURACIÓN DE EMERGENCIA — Estándar Superbridge × Midnight Future
// Jurídico Emilia — Motor Visual Autónomo
// ============================================================================

// 1. Los Datos Estratégicos Extraídos
const HERO_SECTION = {
  headline: "Asesoría Legal Estratégica y Corporativa",
  subheadline: "Soluciones claras y adaptadas a tus necesidades reales. Enfócate en hacer crecer tu negocio mientras nosotros blindamos tus operaciones y activos clave.",
  ctaPrimary: "Solicitar Consulta Estratégica"
};

const PRACTICE_AREAS = [
  {
    id: "derecho-comercial",
    title: "Derecho Comercial y Corporativo",
    description: "Nuestra misión es que puedas enfocarte en tu negocio. Asumimos el control de la estructuración legal, contratos y aspectos societarios para garantizar operaciones seguras."
  },
  {
    id: "startups",
    title: "Ecosistema Startups",
    description: "Asesoría integral desde el origen. Abordamos la constitución, pactos, cumplimiento y estructuras legales para preparar tu empresa para la inversión y el crecimiento."
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad Intelectual y Marcas",
    description: "Una marca no es solo un nombre o un logo: es la identidad de tu negocio. Registrarla no es un trámite, es una decisión estratégica fundamental."
  },
  {
    id: "compliance",
    title: "Gobierno Corporativo y Compliance",
    description: "Implementamos reglas claras y estándares normativos para que tomes decisiones seguras, proyectando confianza y credibilidad ante tus clientes e inversores."
  }
];

// 2. El Motor Visual (React 18 + Tailwind CSS)
export default function JuridicoEmiliaHome() {
  return (
    <div className="min-h-screen bg-neutral-950 text-gray-100 font-sans p-4 md:p-8">
      {/* Contenedor Principal con Estándar Midnight Future: Bordes de 2.5rem (40px) */}
      <main className="max-w-7xl mx-auto bg-black rounded-[2.5rem] p-10 md:p-16 shadow-2xl border border-gray-800">
        
        <header className="text-center mb-20 mt-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            {HERO_SECTION.headline}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {HERO_SECTION.subheadline}
          </p>
          <button className="mt-10 bg-white text-black hover:bg-gray-200 font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105">
            {HERO_SECTION.ctaPrimary}
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div 
              key={area.id} 
              className="bg-neutral-900 rounded-[2.5rem] p-10 border border-neutral-800 hover:border-gray-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{area.title}</h3>
              <p className="text-gray-400 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
