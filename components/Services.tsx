
import React from 'react';
import { 
  Zap, 
  Target, 
  Headset, 
  UserCheck, 
  Cpu, 
  CalendarCheck,
  ArrowRight,
  Database,
  Globe
} from 'lucide-react';
import { ViewType } from '../App';

interface ServicesProps {
  onNavigate: (view: ViewType) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Telemarketing (USA)",
      desc: "High-velocity outbound cold calling campaigns designed for the USA market. Professional agents trained in Western communication nuances.",
      stats: "USA Campaigns",
      color: "from-teal-500 to-emerald-500",
      shadow: "shadow-teal-500/20"
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Appointment Setting",
      desc: "Turning cold prospects into warm sales opportunities. We handle the outreach and scheduling so your closers can focus on winning.",
      stats: "High Conversion",
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/20"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "MCA Lead Generation",
      desc: "Specialized lead mining and live transfers for the Merchant Cash Advance vertical. Verified business data and hot transfers.",
      stats: "FinTech Focused",
      color: "from-amber-600 to-teal-700",
      shadow: "shadow-amber-600/20"
    },
    {
      icon: <Headset className="w-8 h-8" />,
      title: "Customer Support",
      desc: "24/7 Inbound and Outbound support solutions. We manage your customer relations with professionalism and technical expertise.",
      stats: "99% Satisfaction",
      color: "from-teal-600 to-emerald-700",
      shadow: "shadow-teal-600/20"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Virtual Assistant",
      desc: "Dedicated remote professionals to handle administrative, scheduling, and operational tasks, scaling your efficiency remotely.",
      stats: "Expert Support",
      color: "from-emerald-400 to-teal-500",
      shadow: "shadow-emerald-400/20"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "IT & CRM Integration",
      desc: "Full technical setup of CRM architectures and high-speed dialer infrastructures. Custom IT solutions for modern BPO operations.",
      stats: "Tech-Driven",
      color: "from-teal-700 to-slate-800",
      shadow: "shadow-teal-700/20"
    }
  ];

  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-100 rounded-full blur-[100px] -mr-48 -mt-48 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100 rounded-full blur-[100px] -ml-48 -mb-48 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
              OUR CORE <br />
              <span className="text-gradient">SERVICES</span>
            </h2>
            <p className="text-slate-500 font-medium text-xl leading-relaxed">
              Precision-engineered BPO and IT solutions tailored for international market dominance.
            </p>
          </div>
          <button 
            onClick={() => onNavigate('services')}
            className="text-[11px] font-black text-teal-600 uppercase tracking-[0.4em] bg-teal-50 px-6 py-3 rounded-2xl border border-teal-100 hidden lg:block hover:bg-teal-100 transition-colors"
          >
            Campaign_Status: Active
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate('services')}
              className="group relative p-10 rounded-[40px] bg-white border border-slate-100 transition-all hover:translate-y-[-10px] cursor-pointer colorful-shadow flex flex-col h-full overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${service.color}`}></div>
              
              <div className={`mb-8 p-5 rounded-2xl bg-gradient-to-br ${service.color} w-fit shadow-xl ${service.shadow} group-hover:scale-110 transition-transform`}>
                <div className="text-white">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-teal-600 transition-colors uppercase">
                {service.title}
              </h3>
              
              <p className="text-slate-500 mb-10 leading-relaxed font-medium text-sm flex-grow">
                {service.desc}
              </p>
              
              <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                  {service.stats}
                </span>
                <div className="text-teal-600 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;