import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const ContactForm = () => {
    const { language } = useLanguage();
    const [result, setResult] = useState("");

    const translations = {
        es: { title: "Consulta Privada", name: "Nombre", phone: "Número de Teléfono", email: "Correo Electrónico (Obligatorio)", msg: "Consulta", btn: "Enviar Mensaje", success: "¡Enviado con éxito!" },
        en: { title: "Private Inquiry", name: "Name", phone: "Phone Number", email: "Email (Required)", msg: "Inquiry", btn: "Send Message", success: "Sent successfully!" },
        jp: { title: "個別相談", name: "お名前", phone: "電話番号", email: "メールアドレス（必須）", msg: "お問い合わせ内容", btn: "メッセージを送信", success: "送信が完了しました！" },
        zh: { title: "私人咨询", name: "姓名", phone: "电话号码", email: "电子邮件（必填）", msg: "咨询内容", btn: "提交内容", success: "发送成功！" }
    };

    // Safe access to translation object with default fallback
    const t = (translations as any)[language] || translations.es;

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("...");
        const formData = new FormData(event.currentTarget);
        // access_key and subject are now hidden inputs in the form

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult(t.success);
            (event.target as HTMLFormElement).reset();
        } else {
            setResult("Error");
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 flex justify-center">
            <div className="w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                {/* COLUMNA 1: FORMULARIO (Blanco / Texto Oscuro) */}
                <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-center">
                    <h2 className="text-3xl font-light text-[#001529] mb-8 tracking-widest uppercase italic border-b border-amber-500/30 pb-4">{t.title}</h2>

                    <form onSubmit={onSubmit} className="flex flex-col gap-6">
                        <input type="hidden" name="access_key" value="a08ac535-2a39-46a0-b5c5-9dfa8384f9c5" />
                        <input type="hidden" name="subject" value="Consulta desde Sitio Web - Emilia Legal Firm" />

                        <input type="text" name="name" placeholder={t.name} className="bg-transparent border-b border-slate-300 py-3 text-[#001529] focus:border-amber-500 outline-none transition-colors placeholder:text-slate-500" />
                        <input type="tel" name="phone" placeholder={t.phone} className="bg-transparent border-b border-slate-300 py-3 text-[#001529] focus:border-amber-500 outline-none transition-colors placeholder:text-slate-500" />
                        <input type="email" name="email" required placeholder={t.email} className="bg-transparent border-b border-slate-300 py-3 text-[#001529] focus:border-amber-500 outline-none transition-colors placeholder:text-slate-500" />
                        <textarea name="message" rows={4} placeholder={t.msg} className="bg-transparent border-b border-slate-300 py-3 text-[#001529] focus:border-amber-500 outline-none transition-colors resize-none placeholder:text-slate-500"></textarea>

                        <button type="submit" className="mt-4 bg-amber-500 hover:bg-amber-400 text-[#001529] font-bold py-4 px-8 uppercase tracking-widest transition-all duration-300">
                            {t.btn}
                        </button>
                        {result && <p className="text-center text-amber-500 font-mono text-sm mt-4 animate-pulse uppercase">{result}</p>}
                    </form>
                </div>

                {/* COLUMNA 2: IMAGEN ELEGANTE (Arquitectura/Oficina) */}
                <div className="w-full min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                        alt="Professional Environment"
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>
            </div>
        </section>
    );
};
