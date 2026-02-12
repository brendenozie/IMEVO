"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Activity, Zap, Box, Radio } from "lucide-react";

const HUBS = [
  { name: "Chicago", coords: "top-[32%] left-[18%]", delay: 0.2, flow: "right" },
  { name: "London", coords: "top-[25%] left-[46%]", delay: 0.5, flow: "down" },
  { name: "Rotterdam", coords: "top-[22%] left-[50%]", delay: 1.4, flow: "up" },
  { name: "Dubai", coords: "top-[42%] left-[58%]", delay: 0.8, flow: "left" },
  { name: "Singapore", coords: "top-[62%] left-[80%]", delay: 1.1, flow: "up" },
];

export function NetworkMap() {
  return (
    <section className="py-24 lg:py-32 bg-[#020617] overflow-hidden relative">
      {/* Background: Digital Grid & Radial Glow */}
      <div className="absolute inset-0 opacity-20" 
           style={{ 
             backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: THE COMMAND SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
              >
                <Radio className="w-4 h-4 animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Live Network Feed</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase italic">
                Global <br />
                <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1.2px white' }}>Dominance</span>
              </h2>
              
              <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                Our neural logistics network bridges continents with zero-latency coordination. 
                Experience shipping without borders.
              </p>
            </div>

            {/* Micro-Stats Display */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {[
                { label: "Active Nodes", val: "1,240+", icon: Zap, color: "text-orange-500" },
                { label: "Transit Uptime", val: "99.9%", icon: Activity, color: "text-blue-500" },
                { label: "Covered Regions", val: "160+", icon: Globe, color: "text-emerald-500" },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-crosshair"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em]">{stat.label}</p>
                    <p className="text-xl font-black text-white italic">{stat.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- RIGHT SIDE: THE HOLOGRAPHIC MAP --- */}
          <div className="lg:col-span-8 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[16/10] bg-slate-900/40 rounded-[4rem] border border-white/10 overflow-hidden backdrop-blur-md shadow-2xl"
            >
              {/* Fake Map Texture (Abstract) */}
              <div className="absolute inset-0 opacity-30 grayscale invert mix-blend-overlay">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
              </div>

              {/* Orbital Paths (SVG) */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 500">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                
                {/* Animated Paths */}
                {[
                  "M 180,160 Q 300,100 460,125",
                  "M 460,125 Q 550,200 580,210",
                  "M 580,210 Q 700,250 800,310",
                  "M 180,160 Q 200,300 580,210"
                ].map((d, idx) => (
                  <motion.path
                    key={idx}
                    d={d}
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ duration: 3, delay: idx * 0.5, repeat: Infinity, repeatType: "loop" }}
                  />
                ))}
              </svg>

              {/* Live Pulsing Hubs */}
              {HUBS.map((hub, i) => (
                <div key={i} className={`absolute ${hub.coords} group z-20`}>
                  {/* Pinging Ring */}
                  <motion.div 
                    animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: hub.delay }}
                    className="absolute -inset-4 bg-blue-500/40 rounded-full"
                  />
                  
                  {/* Core Interactive Node */}
                  <div className="relative w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] border-4 border-blue-600 group-hover:scale-150 transition-transform duration-300 cursor-pointer" />
                  
                  {/* Floating Data Tag */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-white px-3 py-1.5 rounded-lg shadow-2xl flex items-center gap-2 group-hover:scale-110 transition-transform"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                      <span className="text-[9px] font-black text-slate-900 uppercase whitespace-nowrap">{hub.name} HUB</span>
                    </motion.div>
                  </div>
                </div>
              ))}

              {/* Map Footer Info */}
              <div className="absolute bottom-10 left-10 flex gap-10">
                <div>
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Lat_Long Control</p>
                  <p className="text-blue-500/60 font-mono text-xs">40.7128° N, 74.0060° W</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-white/20 text-[10px] font-black uppercase tracking-widest">Active Packets</p>
                  <p className="text-orange-500/60 font-mono text-xs">14,204 Units/hr</p>
                </div>
              </div>

              <div className="absolute top-10 right-10">
                <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-md">
                   <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                   <span className="text-[9px] font-black text-emerald-500 uppercase">System Optimal</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}