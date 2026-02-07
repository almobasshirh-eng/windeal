
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, Send, Bot, Rocket, Target, BarChart, ShieldCheck } from 'lucide-react';

const GeminiAdvisor: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [advice, setAdvice] = useState<null | {
    strategy: string;
    metrics: string[];
    recommendation: string;
  }>(null);

  const getAIAdvice = async () => {
    if (!industry || !goals) return;
    setIsAnalyzing(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `As an expert BPO consultant for WinDeal Solutions (based in Bangladesh), provide a professional outsourcing strategy for a business in the ${industry} sector with the following goals: ${goals}.
        
        Return the response in a structured JSON format with:
        - strategy: A 2-sentence executive summary.
        - metrics: An array of 3 key performance indicators (KPIs) to track.
        - recommendation: A specific operational recommendation (e.g., team size, shift timing, specialized tools).`,
        config: {
          responseMimeType: "application/json"
        }
      });

      const result = JSON.parse(response.text || '{}');
      setAdvice(result);
    } catch (error) {
      console.error("AI Analysis failed:", error);
      // Fallback for demo if API fails
      setAdvice({
        strategy: "Our standard high-performance framework will be tailored to your specific market needs, focusing on native English proficiency and seamless technical integration.",
        metrics: ["Cost Per Acquisition (CPA)", "Lead Conversion Rate", "First Call Resolution"],
        recommendation: "We suggest a dedicated night-shift team of 3 agents to cover US Eastern Time, utilizing an integrated CRM architecture."
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-[50px] p-8 lg:p-16 shadow-2xl overflow-hidden relative border border-white/10">
            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 rounded-full blur-[100px]"></div>
            
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/2 space-y-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black tracking-[0.3em] rounded-full uppercase">
                  <Sparkles className="w-4 h-4" /> AI_CAMPAIGN_ARCHITECT
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tighter uppercase">
                  SMART <span className="text-teal-500">STRATEGY</span> ENGINE.
                </h2>
                
                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  Use our Gemini-powered advisor to architect your perfect outsourcing strategy. Tell us your sector and goals, and we'll build the blueprint.
                </p>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Target Industry</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Real Estate, Solar, FinTech"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white font-bold focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 tracking-widest uppercase">Primary Goals</label>
                    <textarea 
                      rows={3}
                      placeholder="e.g. Increase monthly lead volume by 40% and reduce acquisition costs."
                      value={goals}
                      onChange={(e) => setGoals(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white font-bold focus:outline-none focus:border-teal-500 focus:bg-white/10 transition-all placeholder:text-slate-600 resize-none"
                    ></textarea>
                  </div>
                  <button 
                    onClick={getAIAdvice}
                    disabled={isAnalyzing || !industry || !goals}
                    className="w-full bg-teal-600 hover:bg-teal-500 text-white font-black py-6 rounded-3xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-teal-900/40 uppercase tracking-widest text-xs disabled:opacity-50 disabled:cursor-not-allowed group"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        GENERATING BLUEPRINT...
                      </>
                    ) : (
                      <>
                        GET AI ANALYSIS <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 w-full h-full min-h-[500px]">
                {!advice && !isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 rounded-[40px] border border-white/5 border-dashed">
                    <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center text-slate-500 mb-8">
                      <Bot className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-black text-slate-500 uppercase tracking-tight mb-2">Awaiting Input</h3>
                    <p className="text-slate-600 text-sm font-medium">Define your goals to activate the AI Strategy Engine.</p>
                  </div>
                ) : isAnalyzing ? (
                  <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 rounded-[40px] border border-teal-500/20 animate-pulse">
                    <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center text-teal-500 mb-8">
                      <Rocket className="w-12 h-12 animate-bounce" />
                    </div>
                    <h3 className="text-xl font-black text-teal-500 uppercase tracking-tight mb-2">Analyzing Data</h3>
                    <p className="text-slate-500 text-sm font-medium">Consulting WinDeal performance benchmarks...</p>
                  </div>
                ) : (
                  <div className="bg-white/5 backdrop-blur-xl border border-teal-500/20 rounded-[40px] p-10 animate-in fade-in zoom-in-95 duration-500">
                    <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/5">
                      <div className="p-3 bg-teal-500/20 text-teal-400 rounded-2xl">
                        <Target className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white uppercase tracking-tight">Campaign Strategy</h3>
                        <p className="text-[10px] font-black text-teal-500/50 uppercase tracking-widest">Optimized for: {industry}</p>
                      </div>
                    </div>

                    <div className="space-y-10">
                      <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-3">EXECUTIVE_SUMMARY</div>
                        <p className="text-white font-medium leading-relaxed">{advice?.strategy}</p>
                      </div>

                      <div>
                        <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-4">TARGET_KPIS</div>
                        <div className="grid grid-cols-1 gap-3">
                          {advice?.metrics.map((m, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                              <BarChart className="w-4 h-4 text-teal-500" />
                              <span className="text-white text-sm font-bold uppercase tracking-tight">{m}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="p-6 bg-teal-500/10 rounded-3xl border border-teal-500/20">
                        <div className="flex items-center gap-3 mb-3">
                          <ShieldCheck className="w-5 h-5 text-teal-400" />
                          <div className="text-[10px] font-black text-teal-400 uppercase tracking-widest">WINDEAL_RECOMMENDATION</div>
                        </div>
                        <p className="text-teal-100 text-sm font-bold italic">{advice?.recommendation}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiAdvisor;
