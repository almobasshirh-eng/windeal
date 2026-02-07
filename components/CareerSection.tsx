
import React from 'react';
import { Rocket, Clock, Award, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface CareerSectionProps {
  onNavigate: (view: ViewType) => void;
}

const CareerSection: React.FC<CareerSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[50px] p-8 lg:p-20 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-black tracking-widest mb-10 uppercase shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                WE ARE HIRING
              </div>
              
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase">
                Join our <br />
                <span className="text-emerald-400">Night Shift</span> team.
              </h2>
              
              <p className="text-emerald-100/60 text-lg font-medium leading-relaxed mb-10 max-w-lg">
                WinDeal Solutions is looking for ambitious Tele-Sales & Appointment Setters for our USA campaigns. Start your international career today.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-amber-500">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-emerald-400 tracking-widest uppercase mb-1">Shift Type</div>
                    <div className="text-white font-bold">NIGHT SHIFT ONLY (Work at Office)</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-emerald-400 tracking-widest uppercase mb-1">Salary Range</div>
                    <div className="text-white font-bold">BDT 20,000 – 30,000 + Commissions</div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('career')}
                className="group inline-flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-3xl font-black tracking-widest transition-all hover:scale-105 shadow-2xl shadow-emerald-900 text-xs uppercase"
              >
                VIEW FULL DETAILS <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800"
                  alt="Join WinDeal"
                  className="w-full h-[500px] object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 bg-amber-500 p-8 rounded-3xl shadow-2xl rotate-3">
                 <div className="text-4xl font-black text-white">5+</div>
                 <div className="text-[10px] font-black tracking-widest text-white/80 uppercase">Open Positions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerSection;
