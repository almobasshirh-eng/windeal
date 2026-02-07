
import React from 'react';
import { 
  ArrowLeft, 
  Zap, 
  Target, 
  Sun, 
  Home, 
  UserCheck, 
  Headset, 
  Globe, 
  CheckCircle, 
  TrendingUp, 
  Search, 
  Handshake,
  Heart,
  Calendar,
  MessageSquare,
  // Added missing ShieldCheck import
  ShieldCheck
} from 'lucide-react';
import MarketMatrix from '../components/MarketMatrix';

interface PageProps {
  onBack: () => void;
}

const ServicesPage: React.FC<PageProps> = ({ onBack }) => {
  const coreTelemarketing = [
    { 
      icon: <Globe />, 
      title: "B2B & B2C Cold Calling", 
      color: "text-emerald-600", 
      desc: "Whether expanding locally or achieving sustainable global growth, our cold calling protocols ensure your business achieves optimized outreach without complexities." 
    },
    { 
      icon: <Home />, 
      title: "Real Estate Cold Calling", 
      color: "text-amber-600", 
      desc: "Reach motivated sellers and property investors. Our skilled experts find the needle in the haystack for your real estate financing and realtor services." 
    },
    { 
      icon: <TrendingUp />, 
      title: "Satisfaction Surveys", 
      color: "text-teal-600", 
      desc: "Proactive intelligence gathering. We gently pay heed to client reviews and complaints to help you fill loop holes and refine your market presence." 
    },
    { 
      icon: <Calendar />, 
      title: "Appointment Setting", 
      color: "text-emerald-600", 
      desc: "We organize socializations and sales follow-ups in a routine, organized way so your internal team can stay focused on closing while we manage the pipeline." 
    },
    { 
      icon: <UserCheck />, 
      title: "Virtual Assistance", 
      color: "text-amber-500", 
      desc: "From prospecting and managing leads to CRM handling and live chat support, our VAs act as a seamless extension of your operational department." 
    },
    { 
      icon: <Heart />, 
      title: "Client Retention", 
      color: "text-rose-600", 
      desc: "Valuing existing customers is crucial. We reinvent satisfaction through reward-point outreach and loyalty audits to maximize lifetime client value." 
    }
  ];

  const reasons = [
    "Highly trained and experienced telemarketers",
    "Customized scripts for each client",
    "Detailed reporting and analytics",
    "Proven track record of success",
    "Exceptional customer service"
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-emerald-600 font-black text-xs tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </button>

        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10 uppercase">
            TELEMARKETING <br /><span className="text-gradient">EXCELLENCE.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Best Telemarketing Services in Asia. We bridge the gap between your brand and global prospects with a caring response that makes the difference.
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">What is Telemarketing?</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Telemarketing services offered by WinDeal Solutions can greatly benefit businesses looking to increase sales and generate leads. By outsourcing to our Dhaka hub, you save time and resources while reaching a larger audience through cold calling, appointment setting, and customer surveys.
            </p>
            <div className="p-8 bg-emerald-600 rounded-[40px] text-white shadow-2xl shadow-emerald-200">
              <h3 className="text-xl font-black mb-6 uppercase tracking-widest">5 Reasons We Stand Out</h3>
              <ul className="space-y-4">
                {reasons.map((reason, i) => (
                  <li key={i} className="flex items-center gap-4 text-emerald-50 text-sm font-bold">
                    <CheckCircle className="w-5 h-5 text-amber-400 shrink-0" /> {reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[50px] shadow-2xl border-8 border-slate-50"
              alt="Telemarketing Team"
            />
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[40px] shadow-xl border-emerald-100 hidden lg:block">
               <div className="text-center">
                  <div className="text-4xl font-black text-emerald-600 mb-1">360°</div>
                  <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">SUPPORT REACH</div>
               </div>
            </div>
          </div>
        </div>

        {/* Detailed Core Services */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <h2 className="text-emerald-600 font-black text-xs tracking-[0.4em] uppercase mb-4">SERVICE TEAM</h2>
            <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">SECTOR SPECIALIZATION</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreTelemarketing.map((s, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-slate-100 hover:shadow-[0_40px_80px_rgba(5,150,105,0.08)] transition-all group hover:translate-y-[-8px] bg-white">
                <div className={`${s.color} mb-8 transform group-hover:scale-110 transition-transform bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl`}>
                  {React.cloneElement(s.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">{s.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Can We Help Section */}
        <div className="bg-slate-50 rounded-[60px] p-12 lg:p-24 border border-slate-100 mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <TrendingUp className="w-64 h-64 text-emerald-600" />
          </div>
          <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">How Can We Help?</h2>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              We use contemporary and proven business methods to achieve expected profit margins. From primary ventures to social media outreach, we catch up all 360 supports.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {[
              { icon: <Zap />, title: "Product Promotion", desc: "Finding affordable choices relative to your targeted customers through trade-ins and social outreach." },
              { icon: <Search />, title: "Research Gathering", desc: "Backing your strategy with stats, facts, and figures while ensuring relevance and data security." },
              { icon: <Handshake />, title: "Building Relations", desc: "Strengthening your business bedrock through persistent networking and app-based lifestyle integration." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {v.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Specialization Matrix */}
        <MarketMatrix />

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-emerald-600 to-emerald-900 rounded-[50px] p-12 lg:p-20 text-center text-white shadow-2xl shadow-emerald-200">
           <h3 className="text-4xl font-black mb-6 uppercase tracking-tight">Only Results Matter</h3>
           <p className="text-emerald-100 font-medium text-lg mb-10 max-w-2xl mx-auto">
             Join the global brands that trust WinDeal as their primary Business Process Outsourcing partner.
           </p>
           <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black tracking-widest uppercase">Global Compliance</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black tracking-widest uppercase">Innovation Hub</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-6 py-4 rounded-2xl">
                <TrendingUp className="w-5 h-5 text-amber-400" />
                <span className="text-xs font-black tracking-widest uppercase">Simplify Workflows</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
