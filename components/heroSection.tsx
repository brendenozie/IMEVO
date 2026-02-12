"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        <img 
          src="/truck-bg.jpg" 
          className="w-full h-full object-cover opacity-50" 
          alt="Freight Logistics" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-3xl space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 text-orange-500"
          >
            <div className="h-[2px] w-12 bg-orange-500" />
            <span className="text-xs font-black uppercase tracking-[0.3em]">Global Logistics Leader</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white leading-none"
          >
            RAIL FREIGHT <br />
            <span className="text-orange-500">& LOGISTICS</span>
          </motion.h1>

          <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed">
            Revolutionizing supply chains through precision rail networks and 
            integrated multimodal solutions across the continent.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="h-16 px-10 rounded-2xl bg-orange-500 text-white font-bold text-lg hover:bg-orange-600 transition-all flex items-center gap-2">
              Start Shipping <ArrowRight className="w-5 h-5" />
            </button>
            <button className="h-16 w-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all">
              <Play className="w-5 h-5 fill-current" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}