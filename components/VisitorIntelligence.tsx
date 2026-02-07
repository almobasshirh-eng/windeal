
import React, { useState, useEffect } from 'react';
import { Shield, MapPin, Globe, Activity, Terminal, Monitor, User, Database, Cpu } from 'lucide-react';

const VisitorIntelligence: React.FC = () => {
  const [visitorData, setVisitorData] = useState<any>({
    ip: '192.168.***.***',
    browser: 'Detecting...',
    os: 'Detecting...',
    screen: '0x0',
    location: 'Searching...',
    timestamp: new Date().toLocaleTimeString()
  });

  const [activePings, setActivePings] = useState<any[]>([]);

  useEffect(() => {
    // Detect basic browser info
    const ua = navigator.userAgent;
    let browser = "Unknown";
    if (ua.indexOf("Firefox") > -1) browser = "Mozilla Firefox";
    else if (ua.indexOf("SamsungBrowser") > -1) browser = "Samsung Browser";
    else if (ua.indexOf("Opera") > -1 || ua.indexOf("OPR") > -1) browser = "Opera";
    else if (ua.indexOf("Trident") > -1) browser = "IE";
    else if (ua.indexOf("Edge") > -1) browser = "Edge";
    else if (ua.indexOf("Chrome") > -1) browser = "Google Chrome";
    else if (ua.indexOf("Safari") > -1) browser = "Safari";

    const platform = navigator.platform;
    
    setVisitorData(prev => ({
      ...prev,
      browser: browser,
      os: platform,
      screen: `${window.screen.width}x${window.screen.height}`,
      timestamp: new Date().toLocaleTimeString()
    }));

    // Mock geolocation if actual permission isn't granted or for demo
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setVisitorData(prev => ({
          ...prev,
          location: `Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`
        }));
      }, () => {
        setVisitorData(prev => ({...prev, location: "Dhaka, BD (Inferred)"}));
      });
    }

    // Simulate global traffic pings
    const countries = ["USA", "UK", "Canada", "Australia", "Germany", "Japan", "UAE"];
    const interval = setInterval(() => {
      const newPing = {
        id: Math.random().toString(36).substr(2, 9),
        country: countries[Math.floor(Math.random() * countries.length)],
        type: Math.random() > 0.5 ? "Inbound Call" : "Web Inquiry",
        time: new Date().toLocaleTimeString()
      };
      setActivePings(prev => [newPing, ...prev].slice(0, 5));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full font-mono text-[8px] text-teal-500 overflow-hidden leading-none break-all">
          {Array(100).fill(0).map((_, i) => (
            <div key={i} className="mb-1">
              {Math.random().toString(36).repeat(20)}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/20 text-teal-400 text-[10px] font-black tracking-[0.3em] rounded-full uppercase mb-8">
            <Cpu className="w-4 h-4 animate-spin-slow" /> DATA_INTELLIGENCE_CORE
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase mb-6">
            VISITOR <span className="text-teal-500">INSIGHTS</span> ANALYZER
          </h2>
          <p className="text-slate-400 text-lg font-medium">
            We don't just answer calls; we analyze every interaction. This real-time dashboard demonstrates our capability to monitor and optimize global traffic for your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Your Profile Card */}
          <div className="lg:col-span-1 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 text-teal-500/20">
              <User className="w-24 h-24" />
            </div>
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3 uppercase tracking-tight">
              <Activity className="text-teal-500 w-5 h-5" /> Current Session
            </h3>
            
            <div className="space-y-6 font-mono">
              {[
                { label: "IP_ADDRESS", value: visitorData.ip, icon: <Shield className="w-4 h-4" /> },
                { label: "USER_BROWSER", value: visitorData.browser, icon: <Monitor className="w-4 h-4" /> },
                { label: "PLATFORM_OS", value: visitorData.os, icon: <Cpu className="w-4 h-4" /> },
                { label: "RESOLUTION", value: visitorData.screen, icon: <Monitor className="w-4 h-4" /> },
                { label: "LOCATION", value: visitorData.location, icon: <MapPin className="w-4 h-4" /> },
                { label: "ACCESS_TIME", value: visitorData.timestamp, icon: <Terminal className="w-4 h-4" /> },
              ].map((item, i) => (
                <div key={i} className="group/item">
                  <div className="text-[9px] text-teal-500/50 mb-1 font-black uppercase tracking-widest">{item.label}</div>
                  <div className="text-white text-sm flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group-hover/item:border-teal-500/30 transition-all">
                    <span className="text-teal-500">{item.icon}</span>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-time Feed */}
          <div className="lg:col-span-2 bg-slate-900 border border-white/5 rounded-[40px] p-8 lg:p-12 shadow-2xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xl font-black text-white flex items-center gap-3 uppercase tracking-tight">
                <Globe className="text-emerald-500 w-6 h-6 animate-pulse" /> Live Global Signal
              </h3>
              <div className="text-[10px] font-black text-teal-400 tracking-[0.3em] uppercase bg-teal-500/5 px-4 py-2 rounded-lg border border-teal-500/20">
                ACTIVE_STREAMING
              </div>
            </div>

            <div className="flex-1 space-y-4 mb-8">
              {activePings.map((ping) => (
                <div key={ping.id} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border-l-4 border-emerald-500 animate-in slide-in-from-right-4 duration-500">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-widest">{ping.country} Connection</div>
                      <div className="text-[10px] text-slate-500 font-mono">ID: {ping.id}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{ping.type}</div>
                    <div className="text-[9px] text-slate-600 font-mono">{ping.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "AVG_PING", value: "42ms" },
                { label: "NODES_ALIVE", value: "24" },
                { label: "DATA_STREAMS", value: "108/s" },
                { label: "UPTIME", value: "99.99%" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                  <div className="text-[8px] text-slate-500 font-black uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-teal-500 font-black text-lg font-mono">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-8">
            [ SECURITY_ENCRYPTION_LEVEL: AES-256-GCM | NODE_LOCATION: DHAKA_CENTRAL_HUB ]
          </p>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-500 w-1/3 animate-progress"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-progress {
          animation: progress 3s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default VisitorIntelligence;
