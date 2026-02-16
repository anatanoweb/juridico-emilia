import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Scale, Globe2, Activity } from 'lucide-react';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="hero" className="relative min-h-[90vh] flex flex-col justify-start pt-72 md:pt-96 overflow-hidden bg-surface">

            {/* Antigravity Field - Technical Grid Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                {/* Horizon Glow */}
                <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-amber-500/5 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-tech-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content Module */}
                    <div className="text-left space-y-8">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3 text-amber-500 font-mono text-xs tracking-widest uppercase"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                            </span>
                            System Operational
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]"
                        >
                            <span className="block opacity-50 text-4xl md:text-5xl font-light mb-2">{t('hero_title').split(',')[0]}</span>
                            <span className="flex flex-col">
                                {t('hero_title').split(',')[1] || t('hero_title').split(' ')[1]}
                                <span className="text-amber-500 h-2 w-24 mt-4 bg-amber-500 rounded-full"></span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-slate-800 pl-6"
                        >
                            {t('hero_subtitle')}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <button className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-surface font-bold text-sm tracking-widest uppercase rounded-lg shadow-[0_0_30px_rgba(255,208,40,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                                {t('cta_consult')}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 aerogel hover:bg-white/5 text-white font-mono text-sm tracking-widest uppercase rounded-lg transition-all flex items-center justify-center">
                                {t('cta_explore')}
                            </button>
                        </motion.div>
                    </div>

                    {/* Data Visualization Module */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="relative hidden lg:block"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent blur-2xl -z-10"></div>
                        <div className="aerogel rounded-2xl p-1 border border-white/10">
                            <div className="grid grid-cols-2 gap-px bg-slate-900/50 rounded-xl overflow-hidden">
                                {[
                                    { label: 'stat_clients', value: '524', icon: Globe2, suffix: '+' },
                                    { label: 'stat_cases', value: '98.5', icon: Scale, suffix: '%' },
                                    { label: 'stat_years', value: '25', icon: Shield, suffix: 'YR' },
                                    { label: 'nav_global', value: '14', icon: Activity, suffix: 'INTL' },
                                ].map((stat, i) => (
                                    <div key={i} className="bg-surface/60 p-8 flex flex-col gap-4 hover:bg-surface/80 transition-colors group">
                                        <div className="flex justify-between items-start">
                                            <stat.icon className="w-6 h-6 text-slate-600 group-hover:text-amber-500 transition-colors" />
                                            <span className="text-[10px] uppercase tracking-widest text-slate-600 font-mono">Module 0{i + 1}</span>
                                        </div>
                                        <div>
                                            <div className="text-4xl font-bold text-white tracking-tighter tabular-nums">
                                                {stat.value}<span className="text-amber-500 text-lg">{stat.suffix}</span>
                                            </div>
                                            <div className="text-xs text-slate-400 uppercase tracking-widest mt-2 font-mono">
                                                {t(stat.label)}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
