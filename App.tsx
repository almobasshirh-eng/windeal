
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CareerSection from './components/CareerSection';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import GeminiAdvisor from './components/GeminiAdvisor';

// New Page Imports
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import ContactPage from './pages/ContactPage';
import CareerPage from './pages/CareerPage';

export type ViewType = 'home' | 'about' | 'services' | 'why-us' | 'contact' | 'career';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [activeSection, setActiveSection] = useState('home');
  const [showPrivacy, setShowPrivacy] = useState(false);

  useEffect(() => {
    // Scroll to top on view change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (currentView === 'home') {
      const handleScroll = () => {
        const sections = ['home', 'about', 'services', 'why-us', 'contact', 'career'];
        const scrollPosition = window.scrollY + 150;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'about':
        return <AboutPage onBack={() => setCurrentView('home')} />;
      case 'services':
        return <ServicesPage onBack={() => setCurrentView('home')} />;
      case 'why-us':
        return <WhyUsPage onBack={() => setCurrentView('home')} />;
      case 'contact':
        return <ContactPage onBack={() => setCurrentView('home')} />;
      case 'career':
        return <CareerPage onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <section id="home">
              <Hero onNavigate={setCurrentView} />
            </section>
            
            <Stats />

            <GeminiAdvisor />
            
            <section id="about">
              <About onNavigate={setCurrentView} />
            </section>
            
            <section id="services">
              <Services onNavigate={setCurrentView} />
            </section>
            
            <section id="why-us">
              <WhyUs onNavigate={setCurrentView} />
            </section>

            <CareerSection onNavigate={setCurrentView} />

            <Pricing onNavigate={setCurrentView} />
            
            <section id="contact">
              <Contact />
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen selection:bg-teal-500/20">
      <Navbar 
        activeSection={currentView === 'home' ? activeSection : currentView} 
        onNavigate={(view) => setCurrentView(view)} 
      />
      
      <main className="relative">
        {/* Colorful Mesh Background Elements - Professional Teal & Emerald Theme */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-400/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-400/10 rounded-full blur-[150px]"></div>
          <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] bg-amber-400/5 rounded-full blur-[100px]"></div>
        </div>

        {renderView()}
      </main>

      <Footer 
        onNavigate={(view) => setCurrentView(view)}
        onShowPrivacy={() => setShowPrivacy(true)} 
      />

      {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
    </div>
  );
};

export default App;
