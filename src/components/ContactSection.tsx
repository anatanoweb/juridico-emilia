import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export const ContactSection = () => {
    return (
        <section id="contact" className="bg-slate-950 py-24 text-slate-300 font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

                {/* Columna Izquierda: Información de Contacto */}
                <div className="space-y-12">
                    <div className="flex items-center gap-6">
                        {/* LOGO CON ÁRBOL DE ENERGÍA (Réplica del Header) */}
                        <div className="relative flex items-center justify-center group cursor-pointer p-4 overflow-visible">
                            {/* Capa 1: Núcleo */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-amber-600/30 rounded-full blur-2xl animate-[pulse_4s_cubic-bezier(0.4, 0, 0.6, 1)_infinite]" />
                            {/* Capa 2: Árbol de Luz */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-tr from-amber-300 via-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl animate-[spin_12s_linear_infinite]" />
                            {/* Capa 3: Expansión */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 border-2 border-amber-400/30 rounded-full blur-lg animate-[ping_5s_cubic-bezier(0, 0, 0.2, 1)_infinite]" />
                            {/* Capa 4: Imagen */}
                            <img
                                src="/logo.png"
                                alt="Emilia Legal Firm"
                                className="relative z-10 h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>

                        <div>
                            <h2 className="text-4xl font-bold text-white mb-2 font-[Plus_Jakarta_Sans]">Estudio Emilia</h2>
                            <p className="text-amber-500 uppercase tracking-widest text-sm font-light">Legal Services</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <MapPin className="text-amber-500 stroke-1 mt-1 group-hover:text-white transition-colors" size={24} />
                            <div>
                                <p className="text-white text-lg font-light">Concha y Toro Nro. 17</p>
                                <p className="text-slate-500 font-light">Santiago Centro, Chile</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <Phone className="text-amber-500 stroke-1 mt-1 group-hover:text-white transition-colors" size={24} />
                            <div>
                                <a href="tel:+56942230194" className="block text-white text-[11px] tracking-widest font-light hover:text-amber-500 transition-all duration-300 hover:scale-105 origin-left">
                                    +56 9 4223 0194
                                </a>
                                <a href="tel:+56999781005" className="block text-white text-[11px] tracking-widest font-light hover:text-amber-500 transition-all duration-300 hover:scale-105 origin-left mt-2">
                                    +56 9 9978 1005
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <Mail className="text-amber-500 stroke-1 mt-1 group-hover:text-white transition-colors" size={24} />
                            <a href="mailto:suzuki.juridico@gmail.com" className="text-white text-lg font-light hover:text-amber-500 transition-colors">
                                suzuki.juridico@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Horarios y Staff */}
                <div className="space-y-12 md:pl-12 border-l border-white/5">
                    <div>
                        <div className="flex items-center gap-3 mb-6 text-amber-500">
                            <Clock className="stroke-1" size={24} />
                            <span className="uppercase tracking-widest text-sm">Horario de Atención</span>
                        </div>
                        <p className="text-5xl font-light text-white mb-2 font-[Plus_Jakarta_Sans]">09:00 — 18:00</p>
                        <p className="text-slate-500 font-light">Lunes a Viernes</p>
                    </div>

                    <div className="pt-12 border-t border-white/5">
                        <span className="uppercase tracking-widest text-xs text-slate-600 block mb-4">Abogados Titulares</span>
                        <h4 className="text-2xl text-white font-light mb-1">Juan Carlos Pérez Sudzuki</h4>
                        <h4 className="text-2xl text-white font-light">Rodrigo Medina Carrasco</h4>
                    </div>
                </div>

            </div>
        </section>
    );
};
