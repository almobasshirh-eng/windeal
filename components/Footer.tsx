
import React from 'react';
import { PhoneCall, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
  onShowPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, onShowPrivacy }) => {
  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/windeal" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-teal-950 via-slate-900 to-teal-950 text-white/70 pt-32 pb-12 relative overflow-hidden">
      {/* Decorative Light Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-10">
            <div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              <div className="bg-white p-2.5 rounded-2xl shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                <Zap className="text-teal-600 w-6 h-6" />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                WINDEAL<span className="text-emerald-500">SOLUTIONS</span>
              </span>
            </div>
            <p className="text-lg font-medium leading-relaxed text-teal-100/60">
              Helping global businesses grow through world-class customer support and innovative software solutions.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target={social.href !== "#" ? "_blank" : undefined}
                  rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white hover:text-teal-900 transition-all transform hover:-translate-y-2 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-teal-400 font-black mb-10 text-[10px] uppercase tracking-[0.4em]">OUR SERVICES</h4>
            <ul className="space-y-6">
              {['App Development', 'Web Architecture', 'Solar Campaigns', 'Medical Insurance', 'MCA Outbound'].map((item) => (
                <li key={item}>
                  <button onClick={() => onNavigate('services')} className="group flex items-center gap-2 hover:text-white transition-colors text-sm font-bold tracking-tight text-left">
                    {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all text-emerald-400" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-emerald-400 font-black mb-10 text-[10px] uppercase tracking-[0.4em]">QUICK LINKS</h4>
            <ul className="space-y-6">
              <li><button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-sm font-bold tracking-tight text-left">About Us</button></li>
              <li><button onClick={() => onNavigate('career')} className="hover:text-white transition-colors text-sm font-bold tracking-tight text-left">Join Our Team</button></li>
              <li><button onClick={() => onNavigate('why-us')} className="hover:text-white transition-colors text-sm font-bold tracking-tight text-left">Why Choose Us</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-sm font-bold tracking-tight text-left">Contact Us</button></li>
              <li>
                <button 
                  onClick={onShowPrivacy}
                  className="hover:text-white transition-colors text-sm font-bold tracking-tight flex items-center gap-2 text-left"
                >
                  Privacy Policy <ShieldCheck className="w-4 h-4 text-teal-400" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.4em]">NEWSLETTER</h4>
            <p className="text-xs mb-8 leading-relaxed text-teal-100/40">Subscribe to get the latest updates on business trends and technology.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="your.email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white text-xs font-mono tracking-widest focus:outline-none focus:border-emerald-400 focus:bg-white/10 transition-all"
              />
              <button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-black py-4 rounded-2xl text-[10px] tracking-[0.3em] transition-all shadow-lg shadow-teal-500/20 uppercase">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-mono tracking-widest text-teal-200/40 text-center md:text-left">
            © 2024 WinDeal Solutions <span className="mx-4">|</span> Dhaka, Bangladesh
          </div>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(13,148,136,0.8)]"></div>
              <span className="text-[10px] font-black tracking-widest text-white uppercase">Status: Online</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div>
              <span className="text-[10px] font-black tracking-widest text-white uppercase">Support: 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;