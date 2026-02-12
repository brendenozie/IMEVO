"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Activity, Zap } from "lucide-react";

const HUBS = [
  { name: "Chicago", coords: "top-[35%] left-[20%]", delay: 0.2 },
  { name: "London", coords: "top-[28%] left-[47%]", delay: 0.5 },
  { name: "Dubai", coords: "top-[45%] left-[60%]", delay: 0.8 },
  { name: "Singapore", coords: "top-[65%] left-[82%]", delay: 1.1 },
  { name: "Rotterdam", coords: "top-[25%] left-[52%]", delay: 1.4 },
];

export function NetworkMap() {
  return (
    <section className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Stats & Text */}
          <div className="lg:col-span-4 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-widest">
              <Activity className="w-3 h-3" />
              <span>Global Operations</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Connected <br />
              <span className="text-orange-500">Everywhere.</span>
            </h2>
            
            <p className="text-slate-400 font-medium">
              Our proprietary rail-link network connects over 40 countries, 
              ensuring your cargo moves seamlessly across borders without 
              technical delays.
            </p>

            <div className="space-y-4 pt-4">
              {[
                { label: "Transit Hubs", val: "24/7", icon: Zap },
                { label: "Active Routes", val: "1,240+", icon: MapPin },
                { label: "Global Reach", val: "6 Continents", icon: Globe },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center text-white">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-wider">{stat.label}</p>
                    <p className="text-white font-bold">{stat.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: The Interactive Map */}
          <div className="lg:col-span-8 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
            {/* Simple World Map Illustration (Placeholder for SVG) */}
            <div className="relative w-full aspect-[16/9] bg-slate-800/30 rounded-[3rem] border border-white/5 overflow-hidden backdrop-blur-sm">
              
              {/* Pulsating Hub Dots */}
              {HUBS.map((hub, i) => (
                <div key={i} className={`absolute ${hub.coords} group cursor-pointer`}>
                  {/* Outer Ripple */}
                  <motion.div 
                    animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: hub.delay }}
                    className="absolute -inset-4 bg-orange-500/30 rounded-full"
                  />
                  {/* Core Dot */}
                  <div className="relative w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-lg text-slate-900 text-[10px] font-black uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {hub.name} Hub
                  </div>
                </div>
              ))}

              {/* Decorative Data Lines (Static SVG paths would go here) */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 400">
                <path d="M160 140 Q 300 100 380 110" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                <path d="M380 110 Q 450 150 480 180" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                <path d="M480 180 Q 550 220 650 260" stroke="orange" strokeWidth="2" fill="none" />
              </svg>

              <div className="absolute bottom-8 right-8 text-right">
                <p className="text-white/20 text-4xl font-black italic tracking-tighter">NETWORK_LIVE</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}