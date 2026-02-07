
import React from 'react';
import { CheckCircle, Globe, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface WhyUsProps {
  onNavigate: (view: ViewType) => void;
}

const WhyUs: React.FC<WhyUsProps> = ({ onNavigate }) => {
  const benefits = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "USA-Standard Core",
      desc: "Native-level accent integration and Western cultural immersion training for zero-friction client engagement.",
      color: "from-teal-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Economic Velocity",
      desc: "Aggressive operational scaling at a fraction of local Western costs, maximizing your capital efficiency.",
      color: "from-emerald-400 to-amber-500"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Encrypted Security",
      desc: "Enterprise NDAs and bio-metric facility security ensuring your campaign data remains strictly proprietary.",
      color: "from-teal-700 to-emerald-900"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Metric-Driven QA",
      desc: "Real-time performance dashboards and rigorous management audits to hit hyper-aggressive KPIs.",
      color: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block px-5 py-2 bg-teal-50 text-teal-600 font-black rounded-full text-[10px] tracking-[0.2em] mb-8 uppercase border border-teal-100">
              OPERATIONAL_ADVANTAGE
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-12 leading-[0.9] tracking-tighter">
              WHY GLOBAL <br /> LEADERS <span className="text-gradient">TRUST US.</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col gap-6 group cursor-pointer" onClick={() => onNavigate('why-us')}>
                  <div className={`bg-gradient-to-br ${benefit.color} text-white w-16 h-16 rounded-[24px] flex items-center justify-center shadow-2xl transition-all group-hover:rotate-12`}>
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-3 tracking-tight uppercase">{benefit.title}</h4>
                    <p className="text-slate-500 leading-relaxed text-sm font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div 
              className="mt-16 p-10 bg-teal-50/50 border-l-[12px] border-teal-600 rounded-3xl relative overflow-hidden group cursor-pointer hover:bg-teal-50 transition-colors"
              onClick={() => onNavigate('contact')}
            >
              <div className="absolute top-0 right-0 p-4 text-teal-200/50 group-hover:scale-125 transition-transform">
                <Zap className="w-20 h-20" />
              </div>
              <p className="italic text-slate-700 text-xl font-bold leading-relaxed relative z-10">
                "WinDeal transformed our lead generation process. Their agents feel like a natural extension of our New York-based office."
              </p>
              <div className="mt-6 font-black text-teal-600 flex items-center gap-3 text-xs tracking-widest relative z-10 uppercase">
                <span className="w-12 h-0.5 bg-teal-200"></span>
                Book a consultation today
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center relative">
             <div className="relative">
                {/* Decorative background glow */}
                <div className="absolute -inset-10 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full blur-[100px] opacity-10 animate-pulse"></div>
                
                <div className="grid grid-cols-2 gap-6 max-w-[500px]">
                  <div className="space-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-[40px] shadow-2xl border-4 border-white transition-all hover:scale-105 cursor-pointer" 
                      alt="WinDeal Support Agent at Work"
                      onClick={() => onNavigate('about')}
                    />
                    <div 
                      className="bg-gradient-to-br from-teal-600 to-amber-600 p-8 rounded-[40px] shadow-2xl text-white cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => onNavigate('why-us')}
                    >
                      <div className="text-4xl font-black mb-1">98%</div>
                      <div className="text-[10px] font-black tracking-widest uppercase opacity-70">KPI_HIT_RATE</div>
                    </div>
                  </div>
                  <div className="pt-16 space-y-6">
                    <img 
                      src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=400" 
                      className="rounded-[40px] shadow-2xl border-4 border-white transition-all hover:scale-105 cursor-pointer" 
                      alt="Technical Team Integration"
                      onClick={() => onNavigate('services')}
                    />
                    <div 
                      className="bg-emerald-500 p-8 rounded-[40px] shadow-2xl text-white cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => onNavigate('contact')}
                    >
                      <div className="text-2xl font-black flex items-center gap-2">ACTIVE <ArrowRight className="w-5 h-5" /></div>
                      <div className="text-[10px] font-black tracking-widest uppercase opacity-70">USA_CAMPAIGNS</div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;