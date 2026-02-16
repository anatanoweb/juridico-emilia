import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en' | 'zh' | 'jp';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
    es: {
        nav_home: 'Inicio',
        nav_services: 'Práctica',
        nav_global: 'Alcance Global',
        nav_contact: 'Contacto',
        hero_badge: 'Excelencia Legal Global',
        hero_title: 'Justicia sin Fronteras, Estrategia sin Límites.',
        hero_subtitle: 'Asesoría jurídica de élite para corporaciones multinacionales y patrimonios complejos. Defendemos sus intereses en cualquier jurisdicción.',
        cta_consult: 'Consulta Privada',
        cta_explore: 'Explorar Áreas',
        stat_clients: 'Clientes Globales',
        stat_cases: 'Casos Exitosos',
        stat_years: 'Años de Legado',
    },
    en: {
        nav_home: 'Home',
        nav_services: 'Practice',
        nav_global: 'Global Reach',
        nav_contact: 'Contact',
        hero_badge: 'Global Legal Excellence',
        hero_title: 'Justice Without Borders, Strategy Without Limits.',
        hero_subtitle: 'Elite legal advisory for multinational corporations and complex estates. We defend your interests in any jurisdiction.',
        cta_consult: 'Private Consultation',
        cta_explore: 'Explore Areas',
        stat_clients: 'Global Clients',
        stat_cases: 'Successful Cases',
        stat_years: 'Years of Legacy',
    },
    zh: {
        nav_home: '首页',
        nav_services: '业务领域',
        nav_global: '全球覆盖',
        nav_contact: '联系我们',
        hero_badge: '全球卓越法律服务',
        hero_title: '正义无国界，战略无止境。',
        hero_subtitle: '为跨国公司和复杂资产提供精英法律咨询。我们在任何司法管辖区捍卫您的利益。',
        cta_consult: '私人咨询',
        cta_explore: '探索领域',
        stat_clients: '全球客户',
        stat_cases: '成功案例',
        stat_years: '辉煌传承',
    },
    jp: {
        nav_home: 'ホーム',
        nav_services: '業務分野',
        nav_global: 'グローバル展開',
        nav_contact: 'お問い合わせ',
        hero_badge: 'グローバルな法的卓越性',
        hero_title: '国境なき正義、限界なき戦略。',
        hero_subtitle: '多国籍企業および複雑な資産のためのエリート法務アドバイザリー。あらゆる管轄区域でお客様の利益を守ります。',
        cta_consult: '個別相談',
        cta_explore: '分野を探る',
        stat_clients: 'グローバル顧客',
        stat_cases: '成功事例',
        stat_years: '伝統と歴史',
    }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('es');

    const t = (key: string) => {
        // @ts-ignore
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
