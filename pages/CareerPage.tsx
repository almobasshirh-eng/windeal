
import React, { useState, useRef } from 'react';
import { ArrowLeft, Clock, MapPin, Briefcase, GraduationCap, Zap, CheckCircle, Send, Phone, Award, Rocket, Upload, FileText, X } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

const CareerPage: React.FC<PageProps> = ({ onBack }) => {
  const [isApplying, setIsApplying] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const jobDetails = {
    title: "Tele-Sales / Telemarketing / Appointment Setter (USA Campaign)",
    type: "Full-Time (Night Shift Only)",
    location: "Nikunja-2, Dhaka",
    salary: "BDT 20,000 – 30,000 per month",
    commission: "Sales Commission & Performance-Based Incentives",
    education: "HSC / O Level / A Level / Bachelor’s (Honors)",
    requirements: [
      "Age: 18–35 years",
      "Fluent spoken English (mandatory)",
      "Strong communication and client-handling skills",
      "Workplace: Work at Office"
    ],
    responsibilities: [
      "Tele-sales, telemarketing, and appointment setting for the USA market",
      "Communicate with potential clients professionally",
      "Meet daily and monthly performance targets"
    ],
    benefits: [
      "Attendance Bonus",
      "Transportation Allowance",
      "Performance Bonus",
      "Sales Commission",
      "Salary Review (Half-Yearly)",
      "Weekly 2 Holidays (Saturday & Sunday)"
    ],
    skills: ["Call Center Operations", "Client Service & Customer Relations", "Telecommunication", "Telesales"]
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsApplying(true);
    // Simulate API call
    setTimeout(() => {
      setIsApplying(false);
      setSelectedFile(null);
      alert("Application submitted successfully with your CV!");
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white animate-in fade-in duration-500">
      <div className="container mx-auto px-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-indigo-600 font-black text-xs tracking-widest uppercase mb-12 hover:translate-x-[-4px] transition-transform"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Overview
        </button>

        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl lg:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-10">
            JOIN THE <br /><span className="text-gradient">WINNING TEAM.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium leading-relaxed">
            Elevate your career with a global leader. We provide the platform; you bring the talent. Let's dominate the international market together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            {/* Main Job Card */}
            <div className="p-10 lg:p-14 bg-slate-50 rounded-[50px] border border-indigo-100 shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 text-indigo-100 -rotate-12 opacity-50 group-hover:scale-110 transition-transform">
                <Rocket className="w-32 h-32" />
              </div>
              
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 text-white text-[10px] font-black tracking-widest rounded-full uppercase mb-8 shadow-lg shadow-sky-200">
                <Clock className="w-4 h-4" /> Night Shift Only
              </div>

              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 tracking-tight">
                {jobDetails.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="flex items-center gap-4 text-slate-600 font-bold">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><MapPin className="w-5 h-5" /></div>
                  {jobDetails.location}
                </div>
                <div className="flex items-center gap-4 text-slate-600 font-bold">
                  <div className="p-3 bg-indigo-50 text-indigo-600 rounded-2xl"><Award className="w-5 h-5" /></div>
                  {jobDetails.salary}
                </div>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xs font-black text-indigo-600 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-indigo-200"></span> Responsibilities
                  </h3>
                  <ul className="space-y-4">
                    {jobDetails.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-indigo-500 shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xs font-black text-sky-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
                    <span className="w-8 h-px bg-sky-200"></span> Educational & Core Requirements
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {jobDetails.skills.map((s, i) => (
                      <span key={i} className="px-5 py-2 bg-white rounded-full text-[10px] font-black tracking-widest text-slate-500 border border-slate-200 uppercase">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 mb-6 p-5 bg-white rounded-3xl border border-slate-100">
                     <div className="p-3 bg-sky-50 text-sky-600 rounded-xl"><GraduationCap className="w-6 h-6" /></div>
                     <span className="font-bold text-slate-700">{jobDetails.education}</span>
                  </div>
                  <ul className="space-y-4">
                    {jobDetails.requirements.map((r, i) => (
                      <li key={i} className="flex gap-4 items-start text-slate-700 font-medium">
                        <CheckCircle className="w-5 h-5 text-sky-500 shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="p-8 bg-indigo-900 rounded-[32px] text-white">
                  <h3 className="text-sm font-black tracking-widest uppercase mb-6">Compensation & Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {jobDetails.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-bold text-indigo-100">
                        <Zap className="w-4 h-4 text-sky-400" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-sky-50 border-2 border-sky-200 rounded-[40px] flex items-center gap-8">
              <div className="p-5 bg-white rounded-full text-sky-600 shadow-xl"><Clock className="w-10 h-10" /></div>
              <div>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Important Note</h4>
                <p className="text-sky-700 font-bold">This position is <span className="underline">NIGHT SHIFT ONLY</span>. Only apply if you are comfortable working USA business hours.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-8 sticky top-32">
            <div className="p-10 bg-white rounded-[40px] border border-slate-100 colorful-shadow shadow-xl">
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Apply Instantly</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">Submit your details and CV for a quick review by our recruitment team.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Full Name</label>
                  <input required type="text" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Contact Number</label>
                  <input required type="tel" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all text-sm font-bold" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">English Proficiency</label>
                  <select className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-indigo-500 transition-all text-sm font-bold">
                    <option>Expert / Native</option>
                    <option>Professional Working</option>
                    <option>Conversational</option>
                  </select>
                </div>

                {/* CV Upload Option */}
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 tracking-widest uppercase">Upload CV (PDF/DOC)</label>
                  {!selectedFile ? (
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full p-8 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-indigo-400 hover:bg-indigo-50/30 transition-all group"
                    >
                      <Upload className="w-8 h-8 text-slate-300 group-hover:text-indigo-500 transition-colors" />
                      <span className="text-[10px] font-black text-slate-400 group-hover:text-indigo-600 transition-colors">CLICK TO UPLOAD</span>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                  ) : (
                    <div className="w-full p-4 bg-indigo-50 border border-indigo-100 rounded-2xl flex items-center justify-between animate-in zoom-in-95">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-600 text-white rounded-lg">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="max-w-[150px] overflow-hidden">
                          <div className="text-[10px] font-black text-slate-900 truncate uppercase">{selectedFile.name}</div>
                          <div className="text-[8px] font-bold text-indigo-600">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</div>
                        </div>
                      </div>
                      <button 
                        type="button"
                        onClick={removeFile}
                        className="p-2 hover:bg-indigo-200 rounded-full text-indigo-700 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                <button 
                  disabled={isApplying}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-200 uppercase tracking-widest text-[10px]"
                >
                  {isApplying ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      SUBMITTING...
                    </div>
                  ) : (
                    <>SUBMIT APPLICATION <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>

            <div className="p-10 bg-indigo-600 rounded-[40px] text-white space-y-6 shadow-2xl shadow-indigo-200">
               <h4 className="text-lg font-black uppercase tracking-tight">Direct Inquiry</h4>
               <p className="text-indigo-50 text-xs leading-relaxed font-medium opacity-80">Got questions about the role or shift? Connect with our HR team on WhatsApp.</p>
               <a href="https://wa.me/8801867452954" className="flex items-center justify-center gap-3 bg-white text-indigo-600 py-4 rounded-2xl font-black text-[10px] tracking-widest uppercase transition-all hover:scale-105">
                 <Phone className="w-4 h-4" /> Call Recruitment
               </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;