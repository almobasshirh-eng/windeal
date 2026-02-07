
import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background colorful blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50 rounded-full blur-[120px] -z-10 opacity-60"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <div className="inline-block px-5 py-2 bg-teal-50 text-teal-600 font-black rounded-full text-[10px] tracking-[0.2em] mb-6 uppercase border border-teal-100">
              GET IN TOUCH
            </div>
            <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-10 tracking-tighter leading-[0.9]">
              READY TO <span className="text-gradient">WIN?</span>
            </h2>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed font-medium">
              Book a consultation with our campaign experts to discuss your business growth plans.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-6 h-6" />,
                  label: "PHONE",
                  value: "+880 1867-452954",
                  href: "tel:+8801867452954",
                  color: "text-teal-600",
                  bg: "bg-teal-50"
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: "EMAIL",
                  value: "team.windeal@gmail.com",
                  href: "mailto:team.windeal@gmail.com",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: "OFFICE",
                  value: "House 10, Road 10, Nikunja 2, Dhaka",
                  href: "https://maps.google.com/?q=Nikunja+2,+Khilkhet,+Dhaka",
                  color: "text-amber-600",
                  bg: "bg-amber-50"
                }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  target={item.label === "OFFICE" ? "_blank" : undefined}
                  rel={item.label === "OFFICE" ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-6 p-6 rounded-[32px] bg-white border border-slate-100 hover:shadow-[0_20px_40px_rgba(13,148,136,0.1)] transition-all group"
                >
                  <div className={`${item.bg} ${item.color} p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em] mb-1">{item.label}</div>
                    <div className="text-slate-900 font-bold text-base">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/8801867452954" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white py-6 px-10 rounded-3xl font-black tracking-widest shadow-2xl shadow-teal-200 transition-all hover:scale-[1.05] active:scale-100 uppercase text-xs"
              >
                <MessageCircle className="w-6 h-6" />
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-8 lg:p-16 rounded-[50px] shadow-[0_40px_100px_rgba(13,148,136,0.08)] relative overflow-hidden border border-teal-50">
              <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-[100px] -mr-48 -mt-48"></div>
              
              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-24 space-y-10 animate-in zoom-in-95 duration-500">
                  <div className="w-28 h-28 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white shadow-2xl shadow-teal-200">
                    <CheckCircle2 className="w-16 h-16" />
                  </div>
                  <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">MESSAGE SENT</h3>
                  <p className="text-slate-500 max-w-md text-lg leading-relaxed font-medium">
                    Thank you! We have received your inquiry. One of our experts will contact you shortly.
                  </p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="text-teal-600 font-black tracking-widest text-xs hover:underline uppercase"
                  >
                    SEND ANOTHER MESSAGE
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-14">
                    <h3 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter uppercase">SEND A MESSAGE</h3>
                    <p className="text-slate-500 font-medium text-lg">Fill out the form below to request a free consultation.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">FULL NAME</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 font-bold focus:outline-none focus:border-teal-400 focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">EMAIL ADDRESS</label>
                        <input 
                          required
                          type="email" 
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 font-bold focus:outline-none focus:border-teal-400 focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">SERVICE TYPE</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 font-bold focus:outline-none focus:border-teal-400 transition-all cursor-pointer">
                          <option>SOLAR OUTREACH</option>
                          <option>REAL ESTATE LEADS</option>
                          <option>TAXATION SUPPORT</option>
                          <option>MEDICAL INSURANCE</option>
                          <option>MCA OUTBOUND</option>
                          <option>SOFTWARE DEVELOPMENT</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">PHONE NUMBER</label>
                        <input 
                          type="tel" 
                          placeholder="+1 (000) 000-0000"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 font-bold focus:outline-none focus:border-teal-400 focus:bg-white transition-all placeholder:text-slate-300"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-slate-400 text-[10px] font-black tracking-[0.2em] uppercase">HOW CAN WE HELP?</label>
                      <textarea 
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-5 px-8 text-slate-900 font-bold focus:outline-none focus:border-teal-400 focus:bg-white transition-all placeholder:text-slate-300 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-gradient-to-r from-teal-600 to-emerald-500 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-4 transition-all transform hover:scale-[1.02] active:scale-95 shadow-2xl shadow-teal-200 uppercase tracking-[0.2em] text-xs"
                    >
                      {formState === 'submitting' ? (
                        <div className="flex items-center gap-3">
                           <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                           SENDING...
                        </div>
                      ) : (
                        <>
                          SEND INQUIRY <Zap className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;