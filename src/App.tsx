import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { ServicesBento } from './components/ServicesBento';
import { Timeline } from './components/Timeline';
import { ContactForm } from './components/ContactForm';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-surface font-sans selection:bg-amber-500/30 selection:text-amber-400 text-slate-200">
        <Header />
        <main>
          <HeroSlider />
          <ServicesBento />
          <Timeline />
          <ContactForm />
          <ContactSection />
        </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
