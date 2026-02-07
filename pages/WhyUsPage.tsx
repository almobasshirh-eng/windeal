
import React from 'react';
import { ArrowLeft, CheckCircle, Globe, Zap, ShieldCheck, BarChart3, Clock, Rocket } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

const WhyUsPage: React.FC<PageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 font-black text-xs tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </button>

        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
            WHY WE <span className="text-gradient">DOMINATE.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            WinDeal Solutions isn't just a choice; it's a strategic upgrade. We combine the cost-efficiency of Bangladesh with the high-output standards of a Manhattan board room.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 mb-32">
          <div className="space-y-16">
            {[
              { icon: <Globe />, title: "CULTURAL ALIGNMENT", desc: "Our staff doesn't just speak English; they understand the cultural nuances of the US market, ensuring a native-level experience for your prospects." },
              { icon: <BarChart3 />, title: "DATA-DRIVEN PRECISION", desc: "Every campaign is backed by real-time analytics. We pivot based on data, not intuition, to ensure your CPA stays as low as possible." },
              { icon: <ShieldCheck />, title: "IRON-CLAD COMPLIANCE", desc: "We adhere to TCPA, HIPAA, and GDPR standards. Your data security and legal peace of mind are non-negotiable." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <div className="bg-indigo-50 text-indigo-600 p-5 rounded-3xl h-fit group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {/* Fixed TypeScript error by adding <any> to React.ReactElement casting */}
                  {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-widest">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-indigo-900 rounded-[50px] p-12 lg:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -mr-40 -mt-40"></div>
             <h3 className="text-3xl font-black mb-12 uppercase tracking-tight relative z-10">Our Success Framework</h3>
             <div className="space-y-10 relative z-10">
                <div className="flex items-center gap-6">
                   <div className="text-4xl font-black text-cyan-400">01</div>
                   <div>
                      <div className="font-black text-sm uppercase tracking-widest mb-1">Onboarding</div>
                      <div className="text-indigo-200 text-sm">Rapid campaign setup in <span className="text-white font-bold">48 hours</span>.</div>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="text-4xl font-black text-pink-400">02</div>
                   <div>
                      <div className="font-black text-sm uppercase tracking-widest mb-1">Execution</div>
                      <div className="text-indigo-200 text-sm">Multi-tier QA monitoring with <span className="text-white font-bold">98% hit rate</span>.</div>
                   </div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="text-4xl font-black text-cyan-400">03</div>
                   <div>
                      <div className="font-black text-sm uppercase tracking-widest mb-1">Scale</div>
                      <div className="text-indigo-200 text-sm">Modular team expansion with <span className="text-white font-bold">zero downtime</span>.</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsPage;
