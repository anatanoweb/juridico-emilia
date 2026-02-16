
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { sliderTranslations } from '../constants/translations';

const images = [
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
];

export const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const { language } = useLanguage();

    // Robust language fallback
    // The system uses lowercase codes (es, en, jp, zh)
    const content = sliderTranslations[language as keyof typeof sliderTranslations] || sliderTranslations.es;

    // Auto-play
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(timer);
    }, [current]);

    const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    return (
        <section className="relative h-[80vh] w-full overflow-hidden bg-justice-950 mt-[73px] shadow-2xl">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current} // Stable key based on index only to prevent mounting issues
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    {/* Antigravity Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-justice-950 via-justice-950/60 to-transparent z-10" />

                    <img
                        src={images[current]}
                        alt="Juridico Emilia Global"
                        className="h-full w-full object-cover object-center"
                    />

                    <div className="absolute inset-0 z-20 flex flex-col justify-center px-12 md:px-24">
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-justice-gold font-bold tracking-[0.3em] uppercase text-sm mb-4"
                        >
                            LexGlobal Firm
                        </motion.span>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-5xl md:text-7xl font-bold text-white mb-6 max-w-2xl leading-tight"
                        >
                            {content[current] ? content[current].title : "..."}
                        </motion.h2>
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-slate-400 text-xl max-w-lg mb-8"
                        >
                            {content[current] ? content[current].subtitle : "Loading..."}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-4">
                <button onClick={prevSlide} aria-label="Previous Slide" className="p-4 rounded-full border border-white/10 hover:bg-justice-gold hover:text-justice-950 transition-all text-white backdrop-blur-sm bg-black/20">
                    <ChevronLeft size={24} />
                </button>
                <button onClick={nextSlide} aria-label="Next Slide" className="p-4 rounded-full border border-white/10 hover:bg-justice-gold hover:text-justice-950 transition-all text-white backdrop-blur-sm bg-black/20">
                    <ChevronRight size={24} />
                </button>
            </div>
        </section>
    );
};
