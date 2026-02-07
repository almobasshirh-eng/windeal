
import React from 'react';
import { Landmark, Sun, Home, Plane, ShieldCheck, Zap, TrendingUp, Users } from 'lucide-react';

const MarketMatrix: React.FC = () => {
  const regions = [
    {
      name: "USA MARKET",
      flag: "🇺🇸",
      color: "from-teal-600 to-teal-900",
      industries: [
        { icon: <Landmark className="w-4 h-4"/>, title: "Business Finance", items: ["Business Loan", "MCA", "Term Loan", "Line of Credit"] },
        { icon: <Home className="w-4 h-4"/>, title: "Real Estate", items: ["Skip Tracing", "Real Estate Financing", "Realtor Services"] },
        { icon: <Sun className="w-4 h-4"/>, title: "Solar Industry", items: ["Appointment Setting", "Lead Generation"] },
        { icon: <Plane className="w-4 h-4"/>, title: "Travel & Vacation", items: ["TimeShare", "Hotel & Resort", "Cruise Industry"] }
      ]
    },
    {
      name: "CANADA MARKET",
      flag: "🇨🇦",
      color: "from-emerald-500 to-emerald-700",
      industries: [
        { icon: <Landmark className="w-4 h-4"/>, title: "Business Finance", items: ["Business Loan", "MCA", "Term Loan", "Line of Credit"] },
        { icon: <Home className="w-4 h-4"/>, title: "Real Estate", items: ["Skip Tracing", "Real Estate Financing", "Realtor Services"] },
        { icon: <Plane className="w-4 h-4"/>, title: "Travel & Vacation", items: ["Business Loan", "Hotel & Resort", "Cruise Industry"] }
      ]
    },
    {
      name: "AUSTRALIA MARKET",
      flag: "🇦🇺",
      color: "from-amber-600 to-amber-900",
      industries: [
        { icon: <Sun className="w-4 h-4"/>, title: "Solar Industry", items: ["Appointment Setting", "Lead Generation"] },
        { icon: <Plane className="w-4 h-4"/>, title: "Travel & Vacation", items: ["TimeShare", "Hotel & Resort", "Cruise Industry"] }
      ]
    }
  ];

  return (
    <div className="py-24 bg-slate-900 rounded-[60px] my-16 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-emerald-500 to-amber-500"></div>
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-teal-400 font-black text-xs tracking-[0.4em] uppercase mb-4">WE SPECIALIZE IN</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase">MARKET DOMINANCE</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {regions.map((region, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 lg:p-12 hover:bg-white/10 transition-all group">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-4xl">{region.flag}</span>
                <h4 className="text-xl font-black text-white tracking-widest uppercase">{region.name}</h4>
              </div>

              <div className="space-y-10">
                {region.industries.map((ind, iidx) => (
                  <div key={iidx} className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-400">
                      <div className="p-2 bg-emerald-500/10 rounded-lg">{ind.icon}</div>
                      <span className="text-xs font-black tracking-widest uppercase">{ind.title}</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-2 pl-11">
                      {ind.items.map((item, iiidx) => (
                        <li key={iiidx} className="text-teal-100/40 text-xs font-bold flex items-center gap-2 group-hover:text-teal-100/80 transition-colors">
                          <div className="w-1 h-1 rounded-full bg-teal-500"></div> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketMatrix;