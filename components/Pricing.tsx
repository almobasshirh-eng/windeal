
import React, { useState } from 'react';
import { Check, Flame, Zap, Database } from 'lucide-react';
import { ViewType } from '../App';

interface PricingPlan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
  icon?: React.ReactNode;
}

interface PricingProps {
  onNavigate: (view: ViewType) => void;
}

const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'bpo' | 'mca'>('bpo');

  const bpoPlans: PricingPlan[] = [
    {
      name: "Starter Outreach",
      price: "Flexible Plans",
      desc: "Perfect for testing new campaigns and small businesses.",
      features: [
        "1 Dedicated Agent (8/5)",
        "Basic CRM Integration",
        "Weekly Progress Reports",
        "Campaign Script Design",
        "Standard Email Support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Growth Engine",
      price: "Most Popular",
      desc: "Optimized for scaling businesses ready for high volume.",
      features: [
        "2+ Dedicated Agents (24/7)",
        "Advanced Lead Qualification",
        "Daily Performance Dashboard",
        "Active Campaign Management",
        "Priority Slack/Phone Channel",
        "Custom Workflow Automation"
      ],
      cta: "Consult for Pricing",
      popular: true
    },
    {
      name: "Enterprise BPO",
      price: "Custom Quote",
      desc: "Full-scale managed operations for large organizations.",
      features: [
        "Dedicated Team (5-20+)",
        "On-site Project Director",
        "Omni-channel Infrastructure",
        "White-label Integration",
        "Predictive Dialing Tech",
        "Strategic Growth Consulting"
      ],
      cta: "Request Proposal",
      popular: false
    }
  ];

  const mcaPlans: PricingPlan[] = [
    {
      name: "Aged Data Leads",
      price: "Starts $0.50/Lead",
      icon: <Database className="w-6 h-6" />,
      desc: "High-volume lists for aggressive outbound dialers.",
      features: [
        "Verified Business Phone Numbers",
        "Industry & Debt Filtered",
        "Opt-in Marketing Lists",
        "15-30-60-90 Day Aged Options",
        "Bulk CSV Export"
      ],
      cta: "Inquire Volume",
      popular: false
    },
    {
      name: "Live Transfers",
      price: "$45 - $85 / Transfer",
      icon: <Flame className="w-6 h-6" />,
      desc: "Hot leads connected directly to your closers in real-time.",
      features: [
        "Verified Merchant Interest",
        "Minimum $15k+ Monthly Revenue",
        "100% Connect Rate Guarantee",
        "Direct Call Patching",
        "Live Call Recording Access",
        "Replacement Policy Included"
      ],
      cta: "Order Transfers",
      popular: true
    },
    {
      name: "Verified Apps",
      price: "Custom Contract",
      icon: <Zap className="w-6 h-6" />,
      desc: "Full application packages with bank statements.",
      features: [
        "Completed 1-Page Application",
        "Last 3-4 Months Bank Statements",
        "Credit Score Qualified",
        "Exclusive Leads (Never Resold)",
        "Direct CRM Injection",
        "Dedicated Account Manager"
      ],
      cta: "Get Started",
      popular: false
    }
  ];

  const currentPlans = activeTab === 'bpo' ? bpoPlans : mcaPlans;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-teal-600 font-bold tracking-widest text-sm mb-4 uppercase">PRICING & PACKAGES</div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Engagement Models</h2>
          <p className="text-slate-600 text-lg">
            Choose a solution that aligns with your business goals. We offer transparent and scalable models for general BPO and specialized MCA campaigns.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-slate-100 p-1.5 rounded-2xl border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('bpo')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'bpo' 
                ? 'bg-white text-teal-600 shadow-md' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              General BPO Services
            </button>
            <button
              onClick={() => setActiveTab('mca')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'mca' 
                ? 'bg-white text-teal-600 shadow-md' 
                : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              MCA Lead Packages
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {currentPlans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-10 rounded-[32px] shadow-2xl transition-all hover:-translate-y-2 border-2 flex flex-col ${
                plan.popular ? 'border-teal-600 ring-8 ring-teal-600/5' : 'border-slate-50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-amber-200">
                  {activeTab === 'mca' ? 'High Conversion' : 'Best Value'}
                </div>
              )}
              
              {plan.icon && (
                <div className="mb-6 bg-teal-50 w-12 h-12 rounded-xl flex items-center justify-center text-teal-600">
                  {plan.icon}
                </div>
              )}

              <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed h-12">{plan.desc}</p>
              <div className="text-3xl font-black text-teal-600 mb-10">{plan.price}</div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-slate-700 text-sm font-medium">
                    <div className="bg-teal-100 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-teal-600" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onNavigate('contact')}
                className={`block w-full text-center py-4 rounded-2xl font-bold transition-all ${
                  plan.popular 
                    ? 'bg-teal-600 text-white hover:bg-teal-700 shadow-xl shadow-teal-200 hover:shadow-teal-300' 
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {activeTab === 'mca' && (
          <div className="mt-16 bg-teal-50 rounded-3xl p-8 lg:p-12 text-center border border-teal-100">
             <h4 className="text-2xl font-bold text-slate-900 mb-4">Need Custom Data Parameters?</h4>
             <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
               We offer customized MCA data filters including state-specific leads, loan-amount ranges, and UCC-filed merchant lists. Contact our specialists for a sample file.
             </p>
             <button 
               onClick={() => onNavigate('contact')}
               className="text-teal-600 font-bold hover:underline flex items-center justify-center gap-2 mx-auto"
             >
               Talk to an MCA Specialist <Zap className="w-4 h-4" />
             </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Pricing;