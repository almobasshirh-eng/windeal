
import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { label: 'PROCESSED CALLS', value: '2M+', sub: 'Success Metrics', color: 'text-teal-600' },
    { label: 'GLOBAL NODES', value: '150+', sub: 'Active Partners', color: 'text-emerald-600' },
    { label: 'UNIT MEMBERS', value: '200+', sub: 'Trained Specialists', color: 'text-amber-600' },
    { label: 'SATISFACTION', value: '98%', sub: 'Target Achieved', color: 'text-teal-700' },
  ];

  return (
    <div className="py-24 relative overflow-hidden bg-white border-y border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="relative group text-center lg:text-left">
              <div className="absolute -inset-8 bg-slate-50 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className={`text-6xl lg:text-7xl font-black mb-4 transition-all group-hover:scale-105 tracking-tighter ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-[11px] font-black tracking-[0.3em] text-slate-900 mb-2 uppercase">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-slate-400 tracking-widest uppercase">
                [{stat.sub}]
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;