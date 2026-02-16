import { CheckCircle2, Circle, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Timeline = () => {
    const { language } = useLanguage();

    const steps = [
        {
            title: language === 'es' ? "Fase de Auditoría" : language === 'en' ? "Audit Phase" : language === 'jp' ? "監査フェーズ" : "审计阶段",
            desc: language === 'es' ? "Análisis profundo de la situación fiscal actual." : language === 'en' ? "Deep analysis of the current fiscal situation." : language === 'jp' ? "現在の財政状況の詳細な分析。" : "深入分析当前的财政状况。",
            status: "complete"
        },
        {
            title: language === 'es' ? "Estrategia Legal" : language === 'en' ? "Legal Strategy" : language === 'jp' ? "法的戦略" : "法律策略",
            desc: language === 'es' ? "Diseño de la defensa y blindaje de activos." : language === 'en' ? "Defense design and asset shielding." : language === 'jp' ? "防御設計と資産保護。" : "防御设计和资产屏蔽。",
            status: "current"
        },
        {
            title: language === 'es' ? "Semifinal 1" : language === 'en' ? "Semifinal 1" : language === 'jp' ? "準決勝 1" : "半决赛 1",
            desc: language === 'es' ? "Primera instancia de resolución y litigación integral." : language === 'en' ? "First instance of resolution and comprehensive litigation." : language === 'jp' ? "解決と包括的訴訟の第一段階。" : "解决和全面诉讼的第一阶段。",
            status: "upcoming"
        },
    ];

    return (
        <section className="py-24 bg-slate-950 flex justify-center border-t border-white/5 relative overflow-hidden">
            {/* Fondo sutil para contexto */}
            <div className="absolute inset-0 bg-transparent opacity-50" />

            <div className="w-full max-w-2xl px-6 relative z-10">
                <div className="bg-white/5 backdrop-blur-md p-12 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Efecto de brillo superior */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-50" />

                    <h2 className="text-xl text-white font-light mb-12 tracking-[0.2em] uppercase text-center border-b border-white/5 pb-4">
                        Project Status
                    </h2>

                    <div className="relative">
                        {/* Línea conectora vertical mejorada */}
                        <div className="absolute left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-amber-500/20 via-amber-500/40 to-amber-500/10" />

                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={index} className="relative flex items-start gap-8 group">
                                    {/* Indicador de estado */}
                                    <div className="relative z-10 flex-shrink-0 mt-1">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${step.status === 'complete' ? 'bg-amber-500/10 border-amber-500 text-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.3)]' :
                                                step.status === 'current' ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.6)] animate-pulse' :
                                                    'bg-slate-900 border-slate-700 text-slate-600'
                                            }`}>
                                            {step.status === 'complete' ? <CheckCircle2 size={18} /> :
                                                step.status === 'current' ? <Clock size={18} className="animate-spin-slow" /> :
                                                    <Circle size={14} />}
                                        </div>
                                    </div>

                                    {/* Contenido */}
                                    <div className={`flex-1 transition-all duration-500 ${step.status === 'upcoming' ? 'opacity-50 blur-[0.5px]' : 'opacity-100'}`}>
                                        <h3 className={`text-xs uppercase tracking-widest font-bold mb-2 transition-colors ${step.status === 'current' ? 'text-amber-500' : 'text-white'
                                            }`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-[10px] tracking-[0.15em] text-slate-300 font-light leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
