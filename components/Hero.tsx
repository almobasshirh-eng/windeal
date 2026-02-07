
import React from 'react';
import { ArrowRight, Code2, Globe, Shield } from 'lucide-react';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-50/50 via-white to-white"></div>
        <div className="w-full h-full grid-bg opacity-40"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border-teal-500/20 text-teal-600 text-[10px] font-black tracking-widest mb-10 animate-in uppercase shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Global Operations Hub
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 animate-in" style={{ animationDelay: '0.1s' }}>
              CONNECT. <br />
              <span className="text-gradient">THRIVE.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium animate-in" style={{ animationDelay: '0.2s' }}>
              The next generation of <span className="text-teal-600 font-bold">Customer Support & IT Hubs</span>. WinDeal Solutions blends operational excellence with high-end tech to scale your business globally.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-in" style={{ animationDelay: '0.3s' }}>
              <button
                onClick={() => onNavigate('contact')}
                className="group relative px-10 py-5 bg-teal-600 rounded-3xl overflow-hidden shadow-2xl shadow-teal-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10 flex items-center justify-center gap-3 text-white font-black tracking-widest text-sm">
                  FREE CONSULTATION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="px-10 py-5 glass rounded-3xl text-slate-900 font-black tracking-widest text-sm flex items-center justify-center gap-3 border-teal-100 hover:border-teal-200 transition-all shadow-sm"
              >
                VIEW SERVICES
              </button>
            </div>

            <div className="flex gap-12 animate-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: <Globe className="w-5 h-5 text-teal-500" />, label: "GLOBAL REACH" },
                { icon: <Shield className="w-5 h-5 text-emerald-500" />, label: "SECURE HUB" },
                { icon: <Code2 className="w-5 h-5 text-amber-500" />, label: "EXPERT TECH" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-3">
                  <div className="p-3 bg-white rounded-2xl colorful-shadow w-fit">{item.icon}</div>
                  <div className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative z-10 group">
              <div className="absolute -inset-6 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-[50px] blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="glass p-3 rounded-[50px] border-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=1200"
                  alt="WinDeal Call Center Floor"
                  className="w-full rounded-[40px] object-cover h-[550px]"
                />
              </div>
              
              {/* Floating UI Elements */}
              <div 
                className="absolute -top-12 -right-12 glass p-8 rounded-[32px] border-teal-100 animate-float shadow-2xl text-center cursor-pointer hover:scale-110 transition-transform"
                onClick={() => onNavigate('why-us')}
              >
                <div className="bg-gradient-to-r from-teal-600 to-amber-500 bg-clip-text text-transparent text-4xl font-black mb-1">100%</div>
                <div className="text-[10px] text-slate-500 font-black tracking-widest uppercase">UPTIME</div>
              </div>
              
              <div 
                className="absolute -bottom-10 -left-10 glass p-8 rounded-[32px] border-emerald-100 animate-float shadow-2xl cursor-pointer hover:scale-110 transition-transform" 
                style={{ animationDelay: '1s' }}
                onClick={() => onNavigate('contact')}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-teal-500 animate-pulse"></div>
                  <div className="text-[10px] text-slate-500 font-black tracking-widest uppercase">ACTIVE SUPPORT</div>
                </div>
                <div className="flex gap-1.5 items-end h-8">
                  {[30, 60, 40, 90, 50, 20, 70, 45].map((h, i) => (
                    <div key={i} className="w-1.5 bg-gradient-to-t from-teal-600 to-emerald-500 rounded-full" style={{ height: h + '%' }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;