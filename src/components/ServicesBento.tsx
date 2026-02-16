import { ShieldCheck, Ship, Scale, Gavel, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const ServicesBento = () => {
  const { language } = useLanguage();
  const currentLang = (language?.toUpperCase() || 'ES') as 'ES' | 'EN' | 'ZH' | 'JP';

  const data = {
    ES: {
      aduanasTitle: "Comercio Exterior",
      aduanasSubtitle: "Asesoría en Comercio Exterior y Exportaciones Retenidas en la Aduana de Chile",
      aduanasDesc: "Servicio especializado en comercio exterior para la gestión estratégica de exportaciones retenidas por la Aduana de Chile. Asesoría técnica y legal en liberación de carga, gestión de containers, demoras aduaneras y mitigación de riesgos logísticos y financieros.",
      tributarioTitle: "Defensa Fiscal",
      tributarioDesc: "Servicio especializado en defensa fiscal frente a fiscalizaciones, sanciones y procedimientos de la autoridad tributaria en Chile. Asesoría técnica y legal para la protección de derechos del contribuyente, reducción de contingencias y resolución estratégica de conflictos fiscales.",
      tributarioHighlight: "Defensa estratégica ante multas e infracciones del Servicio de Impuestos Internos (SII).",
      litigacionTitle: "Litigación Integral",
      litigacionDesc: "Representación experta en tribunales civiles, penales y de familia, respaldada por la trayectoria de nuestros fundadores.",
      litigacionItems: [
        { name: "Civil", icon: <Scale size={32} /> },
        { name: "Laboral", icon: <Briefcase size={32} /> },
        { name: "Penal", icon: <Gavel size={32} /> },
        { name: "Familia", icon: <Users size={32} /> }
      ]
    },
    EN: {
      aduanasTitle: "Foreign Trade",
      aduanasSubtitle: "Foreign Trade Advisory and Detained Exports in Chilean Customs",
      aduanasDesc: "Specialized service in foreign trade for the strategic management of exports retained by Chilean Customs. Technical and legal advice on cargo release, container management, customs delays, and mitigation of logistical and financial risks.",
      tributarioTitle: "Tax Defense",
      tributarioDesc: "Specialized service in tax defense against audits, sanctions, and procedures by the tax authority in Chile. Technical and legal advice for the protection of taxpayer rights, reduction of contingencies, and strategic resolution of tax conflicts.",
      tributarioHighlight: "Strategic defense against fines and infractions from the Internal Revenue Service (SII).",
      litigacionTitle: "Comprehensive Litigation",
      litigacionDesc: "Expert representation in civil, criminal, and family courts, backed by our founders' trajectory.",
      litigacionItems: [
        { name: "Civil", icon: <Scale size={32} /> },
        { name: "Labor", icon: <Briefcase size={32} /> },
        { name: "Criminal", icon: <Gavel size={32} /> },
        { name: "Family", icon: <Users size={32} /> }
      ]
    },
    ZH: {
      aduanasTitle: "对外贸易",
      aduanasSubtitle: "智利海关对外贸易咨询及被扣留出口货物处理",
      aduanasDesc: "专门针对智利海关扣留出口货物的战略管理提供对外贸易服务。在货物放行、集装箱管理、海关延误以及物流和财务风险缓解方面提供技术和法律咨询。",
      tributarioTitle: "税务抗辩",
      tributarioDesc: "专门针对智利税务机关的稽查、制裁和程序提供税务抗辩服务。为保护纳税人权利、减少意外开支和战略性解决税务纠纷提供技术和法律咨询。",
      tributarioHighlight: "针对国税局 (SII) 罚款和违规行为的战略抗辩。",
      litigacionTitle: "综合诉讼",
      litigacionDesc: "在民事、刑事和家庭法庭提供专家代理，由我们创始人的资历提供支持。",
      litigacionItems: [
        { name: "民事", icon: <Scale size={32} /> },
        { name: "劳动", icon: <Briefcase size={32} /> },
        { name: "刑事", icon: <Gavel size={32} /> },
        { name: "家庭", icon: <Users size={32} /> }
      ]
    },
    JP: {
      aduanasTitle: "外国貿易",
      aduanasSubtitle: "チリ税関における外国貿易および留保輸出に関するアドバイザリー",
      aduanasDesc: "チリ税関によって留保された輸出の戦略的管理のための外国貿易に特化したサービス。貨物の解放、コンテナ管理、税関の遅延、および物流?財務リスクの軽減に関する技術的および法的アドバイス。",
      tributarioTitle: "税務弁護",
      tributarioDesc: "チリの税務当局による監査、制裁、および手続きに対する税務弁護に特化したサービス。納税者の権利保護、偶発債務の削減、および税務紛争の戦略的解決のための技術的および法的アドバイス。",
      tributarioHighlight: "内国歳入庁 (SII) の罰金および違反に対する戦略的弁護。",
      litigacionTitle: "総合訴訟",
      litigacionDesc: "創設者の実績に裏打ちされた、民事、刑事、および家庭裁判所における専門的な代理。",
      litigacionItems: [
        { name: "民事", icon: <Scale size={32} /> },
        { name: "労働", icon: <Briefcase size={32} /> },
        { name: "刑事", icon: <Gavel size={32} /> },
        { name: "家族", icon: <Users size={32} /> }
      ]
    }
  };

  const content = (data as any)[currentLang] || data.ES;

  return (
    <section id="services" className="bg-white font-sans overflow-hidden">

      {/* 1. SECCIÓN: COMERCIO EXTERIOR (IMAGEN IZQUIERDA | TEXTO DERECHA) */}
      <div id="comercio-exterior" className="w-full flex flex-col md:flex-row min-h-[85vh] bg-white border-b border-slate-100">
        <div className="md:w-1/2 relative overflow-hidden bg-slate-100">
          <div className="absolute inset-0 bg-slate-200 animate-pulse" />
          <img
            src="https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=2070"
            alt="Logística"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-12 md:p-32 text-slate-900">
          <Ship size={40} className="text-amber-500 mb-10 stroke-[1px]" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 uppercase leading-none italic">
            {content.aduanasTitle}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 border-b-2 border-amber-500 pb-4">
            {content.aduanasSubtitle}
          </h3>
          <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
            {content.aduanasDesc}
          </p>
        </div>
      </div>

      {/* 2. SECCIÓN: DEFENSA FISCAL (TEXTO IZQUIERDA | IMAGEN DERECHA) */}
      <div id="defensa-fiscal" className="w-full flex flex-col md:flex-row min-h-[85vh] bg-[#001529]">
        {/* TEXTO A LA IZQUIERDA */}
        <div className="md:w-1/2 flex flex-col justify-center p-12 md:p-32 text-white order-2 md:order-1">
          <ShieldCheck size={48} className="text-amber-500 mb-10 stroke-[1px]" />
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 uppercase leading-none italic">
            {content.tributarioTitle}
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-8">
            {content.tributarioDesc}
          </p>
          <div className="w-24 h-[1px] bg-amber-500/50 mb-8" />
          <p className="text-lg md:text-xl text-amber-500 font-medium italic">
            {content.tributarioHighlight}
          </p>
        </div>

        {/* IMAGEN A LA DERECHA - Libros y Mazo (Legal Still Life) */}
        <div className="md:w-1/2 relative overflow-hidden bg-slate-900 order-1 md:order-2">
          <div className="absolute inset-0 bg-slate-800 animate-pulse" />
          <img
            src="/image_26.png"
            alt="Profesional trabajando en documentos fiscales con calculadora y mazo legal en escritorio"
            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
          {/* Gradiente para fusionar */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#001529] md:block hidden" />
        </div>
      </div>

      {/* 3. SECCIÓN: LITIGACIÓN (Founders Edition - Sello de Oro) */}
      <div id="litigacion-integral" className="w-full bg-white min-h-screen flex flex-col md:flex-row items-stretch border-t border-slate-100 relative overflow-hidden">

        <div className="md:w-5/12 p-12 md:p-32 flex flex-col justify-center relative z-20 bg-white/90 md:bg-white">
          {/* Título principal elegante en oscuro */}
          <h2 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-12 uppercase leading-none italic">
            {content.litigacionTitle}
          </h2>
          {/* Párrafo descriptivo con mención a los fundadores */}
          <p className="text-xl md:text-2xl text-slate-500 font-light border-t border-slate-200 pt-8 italic relative">
            {content.litigacionDesc}
          </p>
        </div>

        <div className="md:w-7/12 relative flex flex-col justify-center p-12 md:p-32 z-10 overflow-hidden">
          {/* DUAL FOUNDERS BACKGROUND (Sello de Oro - Imágenes Reales) */}
          <div className="absolute inset-0 flex">
            {/* Fundador 1: Juan Carlos Pérez Suzuki */}
            <div className="w-1/2 h-full relative border-r border-slate-100/50">
              <img
                src="/images/founders/juan_carlos.jpg"
                alt="Juan Carlos Pérez Suzuki"
                className="w-full h-full object-cover grayscale opacity-15 hover:opacity-30 transition-opacity duration-700"
              />
            </div>
            {/* Fundador 2: Rodrigo Medina Carrasco */}
            <div className="w-1/2 h-full relative">
              <img
                src="/images/founders/rodrigo.jpg"
                alt="Rodrigo Medina Carrasco"
                className="w-full h-full object-cover grayscale opacity-15 hover:opacity-30 transition-opacity duration-700"
              />
            </div>
            {/* Máscara de gradiente para unificar */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
          </div>

          <div className="relative z-30 grid grid-cols-1 gap-12">
            {content.litigacionItems.map((item: any, idx: number) => (
              <div key={idx} className="flex items-center justify-between group border-b border-slate-200 pb-8 hover:border-amber-500 transition-all duration-500">
                <div className="flex items-center gap-8">
                  <div className="text-amber-500 scale-110 opacity-60 group-hover:opacity-100 transition-all duration-500">
                    {item.icon}
                  </div>
                  {/* Ítems de lista con tamaño REDUCIDO (text-2xl md:text-4xl) y color oscuro de alto contraste */}
                  <span className="text-2xl md:text-4xl font-light text-slate-800 tracking-tight uppercase group-hover:translate-x-4 transition-transform duration-500 italic drop-shadow-sm">
                    {item.name}
                  </span>
                </div>
                <span className="text-slate-300 text-xs font-mono tracking-widest group-hover:text-amber-500">
                  0{idx + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
