"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { MousePointer2, Box, Plane, Truck, Box as BoxIcon, ArrowRight } from "lucide-react";
import { useRef } from "react";

const STEPS = [
  { 
    icon: MousePointer2, 
    title: "Online Quote", 
    desc: "Instant estimates tailored to your specific logistical dimensions and cargo requirements." 
  },
  { 
    icon: Box, 
    title: "Picking Product", 
    desc: "Precision selection from our global inventory network using AI-driven sorting." 
  },
  { 
    icon: Plane, 
    title: "Product Packaging", 
    desc: "Industrial-grade protection designed to withstand transcontinental transit." 
  },
  { 
    icon: Truck, 
    title: "Global Transport", 
    desc: "Seamless delivery via our integrated air, sea, and land distribution channels." 
  }
];

export function ProcessTimeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 lg:py-40 bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#f7941d] rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center mb-32 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
          >
            <BoxIcon size={14} className="text-[#f7941d] fill-current" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/80">Our Methodology</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-none">
            The <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1.2px white' }}>Logistics</span> <br /> 
            Command Chain
          </h2>
        </div>

        {/* --- TIMELINE FLOW --- */}
        <div className="relative">
          
          {/* Progress Connector (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 w-full h-[2px] bg-white/10">
            <motion.div 
              style={{ scaleX }}
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-[#f7941d] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative group"
              >
                {/* Node & Icon */}
                <div className="relative mb-12 flex lg:justify-start justify-center">
                  <div className="relative z-10 w-24 h-24 rounded-3xl bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-[#f7941d]/50 transition-all duration-500 shadow-2xl group-hover:-translate-y-2">
                    <step.icon size={32} className="text-white group-hover:text-[#f7941d] transition-colors" />
                    
                    {/* Glowing Aura */}
                    <div className="absolute inset-0 bg-[#f7941d]/0 group-hover:bg-[#f7941d]/10 rounded-3xl transition-all duration-500" />
                  </div>

                  {/* Number Badge (Modern Style) */}
                  <div className="absolute -top-4 lg:-right-4 right-1/2 translate-x-12 lg:translate-x-0 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-xs font-black italic shadow-[0_10px_20px_rgba(255,255,255,0.2)]">
                    {idx + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="space-y-4 lg:text-left text-center">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tight group-hover:text-[#f7941d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-medium">
                    {step.desc}
                  </p>
                  
                  {/* Visual Connector (Desktop Arrow) */}
                  {idx !== STEPS.length - 1 && (
                    <div className="hidden lg:flex items-center gap-2 text-white/10 group-hover:text-[#f7941d]/40 transition-colors pt-4">
                      <div className="h-[1px] w-full bg-current" />
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>

                {/* Mobile Connector Line */}
                {idx !== STEPS.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -bottom-12 w-[1px] h-8 bg-gradient-to-b from-[#f7941d] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <button className="px-12 py-6 bg-[#f7941d] text-white font-black uppercase text-xs tracking-[0.4em] rounded-full hover:bg-white hover:text-black transition-all shadow-[0_20px_40px_rgba(247,148,29,0.2)]">
            Start Your Shipment
          </button>
        </motion.div>
      </div>
    </section>
  );
}