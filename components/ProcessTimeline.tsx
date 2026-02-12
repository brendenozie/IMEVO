"use client";

import { motion } from "framer-motion";
import { MousePointer2, Box, Plane, Truck, Box as BoxIcon } from "lucide-react";

const STEPS = [
  { 
    icon: MousePointer2, 
    title: "Online Quote", 
    desc: "An online quote is an estimate of the cost of a product or service provided by a business." 
  },
  { 
    icon: Box, 
    title: "Picking Product", 
    desc: "Picking a product refers to the process of selecting a specific from a range of products." 
  },
  { 
    icon: Plane, 
    title: "Product Packaging", 
    desc: "Product packaging refers to the materials and design used to protect product to customers." 
  },
  { 
    icon: Truck, 
    title: "Product Transport", 
    desc: "Product transport refers to the process of moving products from one location to another." 
  }
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background World Map Pattern (Subtle) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/world-map-dots.png')] bg-center bg-no-repeat bg-contain" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-24 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#f7941d]">
            <BoxIcon size={16} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Working Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 capitalize">
            Working Process for services
          </h2>
        </div>

        {/* --- TIMELINE GRID --- */}
        <div className="relative">
          
          {/* Wave Dotted Path (Desktop Only) */}
          <svg 
            className="hidden lg:block absolute top-12 left-0 w-full h-32 z-0 pointer-events-none"
            viewBox="0 0 1200 120" 
            fill="none"
          >
            <motion.path
              d="M 150,60 C 300,10 450,110 600,60 C 750,10 900,110 1050,60"
              stroke="#1d4ed8" 
              strokeWidth="2"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {STEPS.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="relative w-32 h-32 mx-auto mb-10">
                  {/* Outer Dashed Circle */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 group-hover:border-[#1d4ed8] transition-colors duration-500" />
                  
                  {/* Inner White Circle */}
                  <div className="absolute inset-2 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-50">
                    <step.icon className="w-10 h-10 text-[#1d4ed8] group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center text-xs font-black shadow-lg">
                    0{idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-[#f7941d] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-[240px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}