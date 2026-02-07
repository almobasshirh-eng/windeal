
import React from 'react';
import { Target, Eye, Award, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface AboutProps {
  onNavigate: (view: ViewType) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl z-10 border-8 border-slate-50">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=800"
                alt="WinDeal Support Agent"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-600 rounded-2xl -z-10 hidden lg:block opacity-10"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border-[12px] border-teal-50 rounded-full -z-10 hidden lg:block"></div>
          </div>

          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-1 bg-teal-50 text-teal-600 font-bold rounded-full text-sm mb-6 tracking-tight uppercase tracking-[0.1em]">
              ABOUT WINDEAL SOLUTIONS
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight tracking-tighter">
              Driving Business Growth Through Professional Engagement
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Based in Dhaka, Bangladesh, WinDeal Solutions is a premier BPO and IT service provider. 
              Under our <span className="text-teal-600 font-bold">expert leadership team</span>, we bridge the gap between global brands and their customers with high-performance communication solutions.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: <Target className="w-6 h-6 text-teal-600" />,
                  title: "Our Mission",
                  desc: "To empower businesses worldwide with high-impact lead generation and exceptional customer support."
                },
                {
                  icon: <Eye className="w-6 h-6 text-teal-600" />,
                  title: "Our Vision",
                  desc: "To become the world’s most trusted outsourcing partner, recognized for excellence and innovation."
                },
                {
                  icon: <Award className="w-6 h-6 text-teal-600" />,
                  title: "Our Expertise",
                  desc: "Specialized campaigns across Solar, Real Estate, Taxation, and Medical Insurance sectors."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start group">
                  <div className="bg-teal-50 p-3 rounded-xl shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight uppercase">{item.title}</h4>
                    <p className="text-slate-600 font-medium leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => onNavigate('about')}
              className="flex items-center gap-3 text-teal-600 font-black tracking-widest uppercase text-xs group hover:gap-5 transition-all"
            >
              Learn More About Us <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
