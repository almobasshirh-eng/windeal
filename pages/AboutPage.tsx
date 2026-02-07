
import React from 'react';
import { ArrowLeft, Target, Eye, Award, Globe, Users, Quote } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

const AboutPage: React.FC<PageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-teal-600 font-black text-xs tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </button>

        <div className="max-w-4xl mb-24">
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
            WE ARE <span className="text-gradient">WINDEAL.</span>
          </h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed">
            A specialized BPO & IT ecosystem designed for high-stakes international markets. We architect growth pipelines for the world's most ambitious brands through operational excellence.
          </p>
        </div>

        {/* Corporate Philosophy Section */}
        <div className="mb-32">
          <div className="bg-slate-50 rounded-[60px] p-12 lg:p-20 border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 text-teal-100/30">
              <Quote className="w-48 h-48 rotate-180" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <div className="text-teal-600 font-black text-xs tracking-[0.4em] mb-4 uppercase">OUR PHILOSOPHY</div>
              <h4 className="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-8 uppercase tracking-tighter">
                "REDEFINING <span className="text-teal-600">OUTSOURCING</span> STANDARDS THROUGH INNOVATION."
              </h4>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
                <p>
                  Our vision is to create a hub where elite talent meets international expectations. We don't just provide a service; we provide a partnership built on trust and measurable results.
                </p>
                <p>
                  With a focus on native-level communication and high-end technical integration, we ensure every client interaction is seamless, professional, and impactful.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-teal-50 rounded-2xl text-teal-600">
                  <Target className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Our Mission</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                To empower businesses worldwide with high-impact lead generation and exceptional customer support, delivering measurable results and maximizing ROI through professional excellence.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                  <Eye className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase">Our Vision</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                To become the world’s most trusted outsourcing partner, recognized for innovation and unwavering commitment to quality and integrity in the global BPO landscape.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="glass rounded-[40px] p-2 overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800" 
                className="rounded-[32px] w-full object-cover h-[400px]" 
                alt="WinDeal Professional Team"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl border-teal-100 -rotate-3">
              <div className="text-4xl font-black text-teal-600">200+</div>
              <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">Specialists</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-50 rounded-[60px] p-12 lg:p-24 border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">Our Core Values</h2>
            <p className="text-slate-500 font-medium leading-relaxed">The principles that drive every call, every line of code, and every client success story at WinDeal.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { icon: <Award />, title: "Excellence", desc: "We set the benchmark for BPO performance globally with relentless quality control." },
              { icon: <Globe />, title: "Global Mindset", desc: "We understand Western business culture at a native level, ensuring seamless integration." },
              { icon: <Users />, title: "Integrity", desc: "Transparent operations and iron-clad data protocols are the bedrock of our service." }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-6 group">
                <div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-xl flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
