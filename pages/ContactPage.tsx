
import React, { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Zap, Globe } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

const ContactPage: React.FC<PageProps> = ({ onBack }) => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-slate-50 animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 font-black text-xs tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </button>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-16">
            <div>
              <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
                LET'S <span className="text-gradient">CONNECT.</span>
              </h1>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Ready to transform your outreach? Our campaign architects are standing by to build your custom growth plan.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: <Phone />, label: "Call Us", value: "+880 1867-452954", color: "text-indigo-600" },
                { icon: <Mail />, label: "Email Us", value: "team.windeal@gmail.com", color: "text-pink-600" },
                { icon: <MapPin />, label: "Visit Us", value: "House 10, Road 10, Nikunja 2, Dhaka", color: "text-cyan-600" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm group hover:shadow-xl transition-all">
                  <div className={`${item.color} p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform`}>
                    {/* Fixed TypeScript error by adding <any> to React.ReactElement casting */}
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase mb-1">{item.label}</div>
                    <div className="text-lg font-bold text-slate-900">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-600 p-12 rounded-[40px] text-white flex items-center justify-between">
               <div>
                  <h3 className="text-2xl font-black mb-2 uppercase">WhatsApp Support</h3>
                  <p className="text-indigo-100 text-sm">Connect with us instantly for rapid inquiries.</p>
               </div>
               <a 
                 href="https://wa.me/8801867452954" 
                 className="p-5 bg-white text-indigo-600 rounded-full hover:scale-110 transition-transform shadow-xl"
               >
                 <MessageCircle className="w-8 h-8" />
               </a>
            </div>
          </div>

          <div className="bg-white p-12 lg:p-16 rounded-[60px] shadow-[0_40px_100px_rgba(79,70,229,0.08)] border border-indigo-50 relative overflow-hidden">
             {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-24 space-y-10 animate-in zoom-in-95">
                  <div className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">Inquiry Received</h3>
                  <p className="text-slate-500 text-lg font-medium leading-relaxed">
                    A campaign lead will reach out via your preferred channel within 4 business hours.
                  </p>
                  <button onClick={() => setFormState('idle')} className="text-indigo-600 font-black tracking-widest text-xs uppercase hover:underline">Send Another Inquiry</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                  <div className="mb-14">
                    <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase">Send a Message</h3>
                    <p className="text-slate-500 font-medium">Define your goals and we'll handle the logistics.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-500 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Work Email</label>
                      <input required type="email" placeholder="john@company.com" className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-500 outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Service Interest</label>
                    <select className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-500 outline-none transition-all">
                      <option>Solar Energy Lead Gen</option>
                      <option>Real Estate Acquisitions</option>
                      <option>Taxation Support</option>
                      <option>MCA Lead Mining</option>
                      <option>Software Development</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Requirements</label>
                    <textarea rows={5} placeholder="Tell us about your campaign volume..." className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-100 focus:border-indigo-500 outline-none transition-all resize-none"></textarea>
                  </div>

                  <button 
                    disabled={formState === 'submitting'}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-4 transition-all shadow-2xl shadow-indigo-100 uppercase tracking-widest text-sm"
                  >
                    {formState === 'submitting' ? "Sending..." : "Submit Inquiry"} <Zap className="w-5 h-5" />
                  </button>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
