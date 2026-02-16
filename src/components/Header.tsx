import { useState, useEffect } from 'react';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();

    const languages = [
        { code: 'es', label: 'Español' },
        { code: 'en', label: 'English' },
        { code: 'jp', label: '日本語' },
        { code: 'zh', label: '中文' }
    ];

    // Detección de idioma corregida (sin errores rojos)
    useEffect(() => {
        const browserLang = navigator.language.split('-')[0].toLowerCase();
        if (browserLang === 'en') setLanguage('en' as any);
        else if (browserLang === 'ja') setLanguage('jp' as any);
        else if (browserLang === 'zh') setLanguage('zh' as any);
        else setLanguage('es' as any);
    }, []);

    // Etiquetas de navegación
    const getNavLabel = (key: string) => {
        const currentLang = typeof language === 'string' ? language.toUpperCase() : 'ES';
        const labels: Record<string, Record<string, string>> = {
            comercio: {
                ES: 'Comercio Exterior', EN: 'Foreign Trade', JP: '貿易実務', ZH: '对外贸易'
            },
            fiscal: {
                ES: 'Defensa Fiscal', EN: 'Tax Defense', JP: '税務弁護', ZH: '税务辩护'
            },
            litigacion: {
                ES: 'Litigación Integral', EN: 'Integral Litigation', JP: '総合訴訟', ZH: '综合诉讼'
            },
            contact: {
                ES: 'Contacto', EN: 'Contact', JP: 'お問い合わせ', ZH: '联系方式'
            }
        };
        return labels[key]?.[currentLang] || labels[key]?.ES || key;
    };

    const navItems = [
        { label: getNavLabel('comercio'), href: '#comercio-exterior' },
        { label: getNavLabel('fiscal'), href: '#defensa-fiscal' },
        { label: getNavLabel('litigacion'), href: '#litigacion-integral' },
        { label: getNavLabel('contact'), href: '#contact' },
    ];

    return (
        // CAMBIO PRINCIPAL: Fondo bg-slate-950 SIEMPRE (Un solo color oscuro, sin gris), REDUCIDO A py-2
        <header className="fixed top-0 w-full z-50 py-2 bg-slate-950 border-b border-white/5 shadow-xl">
            <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">

                {/* LOGO CON GRAN ÁRBOL DE ENERGÍA DORADA (Expansivo y Mágico) */}
                <div className="relative flex items-center justify-center group cursor-pointer p-1 overflow-visible" onClick={() => window.scrollTo(0, 0)}>

                    {/* Capa 1: Núcleo de Energía Profunda (Más grande y lento) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-600/30 rounded-full blur-3xl animate-[pulse_4s_cubic-bezier(0.4, 0, 0.6, 1)_infinite]" />

                    {/* Capa 2: El Gran 'Árbol' de Luz (Enorme, rotativo y difuso) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-amber-300 via-yellow-400 to-orange-500 rounded-full opacity-20 blur-2xl animate-[spin_12s_linear_infinite]" />

                    {/* Capa 3: Expansión Etérea (Efecto de respiración amplia) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-amber-400/30 rounded-full blur-xl animate-[ping_5s_cubic-bezier(0, 0, 0.2, 1)_infinite]" />

                    {/* Capa 4: La Imagen del Logo (Al frente, con sombra intensa) */}
                    <img
                        src="/logo.png"
                        alt="Emilia Legal Firm"
                        className="relative z-10 h-16 w-auto object-contain drop-shadow-[0_0_25px_rgba(251,191,36,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* DESKTOP NAV (Visible en LG) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-[10px] font-medium text-white hover:text-amber-400 transition-all duration-300 uppercase tracking-widest relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* ACCIONES Y IDIOMA */}
                <div className="hidden md:flex items-center gap-6 relative">
                    <div className="relative group">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-2 text-white hover:text-amber-500 transition-colors text-xs font-mono tracking-wider border border-white/20 px-4 py-2 rounded-full hover:border-amber-500 hover:bg-white/10"
                        >
                            <Globe size={14} />
                            {(language || 'es').toUpperCase()}
                            <ChevronDown size={12} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* MENÚ DESPLEGABLE: Blanco con letras Doradas al hover */}
                        {isLangMenuOpen && (
                            <div className="absolute top-full right-0 mt-4 w-40 overflow-hidden rounded-xl shadow-2xl animate-in fade-in slide-in-from-top-2 z-50">
                                <div className="absolute inset-0 bg-white border border-slate-200" />
                                <div className="relative py-2">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code as any);
                                                setIsLangMenuOpen(false);
                                            }}
                                            className="w-full text-left px-5 py-3 text-slate-800 hover:bg-slate-50 hover:text-amber-500 text-xs font-bold tracking-wider flex justify-between transition-colors items-center"
                                        >
                                            {lang.label}
                                            {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-sm" />}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <button className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-none text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)]">
                        {language === 'es' ? 'Consulta Privada' : language === 'en' ? 'Private Consultation' : language === 'jp' ? '個別相談' : '私人咨询'}
                    </button>
                </div>

                {/* Botón Menú Móvil */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Menú Móvil */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full h-screen bg-slate-950 border-t border-white/10 p-8 flex flex-col gap-8 md:hidden animate-in slide-in-from-right">
                    {navItems.map((item) => (
                        <a key={item.href} href={item.href} className="text-2xl font-light text-white border-b border-white/5 pb-4" onClick={() => setIsMobileMenuOpen(false)}>
                            {item.label}
                        </a>
                    ))}
                    <div className="grid grid-cols-2 gap-4 mt-4">
                        {languages.map(lang => (
                            <button
                                key={lang.code}
                                onClick={() => { setLanguage(lang.code as any); setIsMobileMenuOpen(false); }}
                                className={`text-sm py-2 border border-white/10 rounded ${language === lang.code ? 'bg-amber-500 text-slate-900 border-amber-500' : 'text-slate-400'}`}
                            >
                                {lang.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
