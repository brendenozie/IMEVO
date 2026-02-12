"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ArrowRight, Globe, MapPin, Users, CheckCircle, Box } from "lucide-react";

const STATS = [
  {
    label: "Worldwide Clients",
    value: "15k",
    icon: Globe,
    suffix: "+",
  },
  {
    label: "Global Branches",
    value: "189",
    icon: MapPin,
    suffix: "+",
  },
  {
    label: "Expert Personnel",
    value: "950",
    icon: Users,
    suffix: "+",
  },
  {
    label: "Delivered Cargo",
    value: "15k",
    icon: CheckCircle,
    suffix: "M",
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full bg-slate-950">
      {/* --- UPPER CTA ZONE --- */}
      <div className="relative min-h-[500px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden py-20">
        {/* Cinematic Background with Zoom Effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/pexels-pavel-danilyuk-6407583.png" 
            alt="Logistics Background" 
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-blue-900/40" />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-10 space-y-10 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-orange-500 mb-4"
          >
            <Box size={18} className="fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">24/7 Global Operations</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase italic">
            Always On. <br />
            <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1.2px white' }}>Everywhere.</span>
          </h2>
          
          <p className="text-slate-300 text-lg font-medium max-w-2xl mx-auto">
            Experience the future of distribution with our round-the-clock support 
            and real-time global monitoring systems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-16 px-10 bg-[#f7941d] text-white font-black text-xs uppercase tracking-[0.2em] rounded-full flex items-center gap-4 hover:shadow-[0_0_30px_rgba(247,148,29,0.4)] transition-all"
            >
              Request Free Quote <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
            
            <button className="h-16 px-10 bg-white/5 backdrop-blur-md text-white border border-white/10 font-black text-xs uppercase tracking-[0.2em] rounded-full flex items-center gap-4 hover:bg-white hover:text-black transition-all">
              Live Chat <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* --- FLOATING STATS PODS --- */}
      <div className="relative z-20 pb-24 -mt-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-slate-900/80 backdrop-blur-xl border border-white/5 p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:bg-blue-700 transition-all duration-500"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:rotate-[360deg] transition-all duration-700">
                  <stat.icon size={28} className="text-orange-500 group-hover:text-blue-700" strokeWidth={2} />
                </div>

                <div className="space-y-2">
                  <div className="flex items-baseline justify-center gap-1">
                    <h3 className="text-5xl font-black text-white italic tracking-tighter">
                      {stat.value}
                    </h3>
                    <span className="text-2xl font-black text-orange-500 group-hover:text-white">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-[10px] font-black text-slate-400 group-hover:text-white/80 uppercase tracking-[0.2em]">
                    {stat.label}
                  </p>
                </div>

                {/* Decorative Bottom Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}