
import React from 'react';
import { X, Shield, Lock, Eye, FileText } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/40 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-white w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[40px] flex flex-col shadow-[0_40px_100px_rgba(79,70,229,0.2)] border border-indigo-100">
        <div className="p-8 border-b border-indigo-50 flex justify-between items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-2xl text-white">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white tracking-tighter uppercase">DATA PROTOCOLS</h2>
              <p className="text-[10px] font-mono text-white/70 tracking-widest uppercase">Privacy v.2.4.0 • SECURE_NODE_ACTIVE</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-indigo-50/50 border border-indigo-100/50">
              <Lock className="w-6 h-6 text-indigo-600 mb-4" />
              <h4 className="text-xs font-black text-slate-900 mb-2 uppercase tracking-widest">Encryption</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Advanced AES-256 protocols securing every byte of client interaction data.</p>
            </div>
            <div className="p-6 rounded-3xl bg-pink-50/50 border border-pink-100/50">
              <Eye className="w-6 h-6 text-pink-600 mb-4" />
              <h4 className="text-xs font-black text-slate-900 mb-2 uppercase tracking-widest">Transparency</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Zero third-party sharing. Your growth data remains your proprietary asset.</p>
            </div>
            <div className="p-6 rounded-3xl bg-cyan-50/50 border border-cyan-100/50">
              <FileText className="w-6 h-6 text-cyan-600 mb-4" />
              <h4 className="text-xs font-black text-slate-900 mb-2 uppercase tracking-widest">Ownership</h4>
              <p className="text-xs text-slate-500 leading-relaxed">Full IP retention for all lead lists and campaign assets developed on our stack.</p>
            </div>
          </div>

          <article className="prose prose-slate max-w-none text-slate-600 space-y-8">
            <section>
              <h3 className="text-slate-900 font-black text-xl mb-4 tracking-tight border-l-4 border-indigo-600 pl-4 uppercase">1. Information Collection</h3>
              <p className="text-sm leading-relaxed font-medium">
                WinDeal Solutions collects specific business identifiers required to scale your campaigns. This includes multi-channel contact data provided through our secure onboarding portals.
              </p>
            </section>
            
            <section>
              <h3 className="text-slate-900 font-black text-xl mb-4 tracking-tight border-l-4 border-pink-600 pl-4 uppercase">2. Usage Rights</h3>
              <p className="text-sm leading-relaxed font-medium">
                Data usage is strictly localized to:
                <ul className="list-disc pl-5 mt-4 space-y-2 text-indigo-600/80">
                  <li className="text-slate-600">Executing high-conversion outbound campaigns.</li>
                  <li className="text-slate-600">Refining AI-driven lead qualification models.</li>
                  <li className="text-slate-600">Performance auditing and ROI reporting.</li>
                </ul>
              </p>
            </section>

            <section>
              <h3 className="text-slate-900 font-black text-xl mb-4 tracking-tight border-l-4 border-cyan-600 pl-4 uppercase">3. Facility Security</h3>
              <p className="text-sm leading-relaxed font-medium">
                Our Dhaka operations center utilizes bio-metric access and 24/7 network monitoring. All staff operate under international NDA standards to protect sensitive market intelligence.
              </p>
            </section>
          </article>
        </div>

        <div className="p-8 border-t border-indigo-50 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-white font-black tracking-[0.2em] text-[10px] rounded-2xl hover:scale-105 transition-all shadow-xl shadow-indigo-200 uppercase"
          >
            ACKNOWLEDGE_SECURE_LINK
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
