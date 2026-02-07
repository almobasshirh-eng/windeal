
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { ViewType } from '../App';

interface NavbarProps {
  activeSection: string;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; id: ViewType }[] = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    { name: 'SERVICES', id: 'services' },
    { name: 'WHY US', id: 'why-us' },
    { name: 'CAREER', id: 'career' },
    { name: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: ViewType) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="container mx-auto px-6">
        <div className={`glass rounded-3xl p-4 flex justify-between items-center transition-all ${
          isScrolled ? 'shadow-[0_10px_30px_rgba(13,148,136,0.08)] border-teal-500/10' : 'border-transparent'
        }`}>
          <div 
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => handleLinkClick('home')}
          >
            <div className="bg-gradient-to-br from-teal-600 to-emerald-500 p-2.5 rounded-xl shadow-lg group-hover:rotate-12 transition-transform">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">
              WINDEAL<span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent ml-1 uppercase">Solutions</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-[11px] font-black tracking-[0.15em] transition-all relative group uppercase ${
                  activeSection === link.id ? 'text-teal-600' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[2.5px] bg-gradient-to-r from-teal-600 to-emerald-500 transition-all duration-300 ${
                  activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-7 py-3 rounded-2xl text-[11px] font-black tracking-[0.15em] transition-all shadow-lg shadow-teal-600/20 hover:scale-105"
            >
              FREE CONSULTATION
            </button>
          </div>

          <button className="lg:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden glass border mx-6 mt-3 p-8 rounded-[32px] flex flex-col space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className="text-slate-900 text-lg font-black tracking-widest hover:text-teal-600 text-left uppercase"
              onClick={() => handleLinkClick(link.id)}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="bg-teal-600 text-white py-5 rounded-2xl text-center font-black tracking-widest shadow-xl shadow-teal-600/20"
          >
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;