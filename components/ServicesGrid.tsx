"use client";

import { motion } from "framer-motion";
import { Bike, Truck, Plane, ArrowRight, Box, ShieldCheck } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Bike Freight",
    desc: "Speedy urban logistics designed for high-density delivery and document transport.",
    image: "/portrait-young-african-guy-accepts-order-by-phone-motorbike-holding-boxes-with-pizza-sit-his-bike-urban-place.png",
    icon: Bike,
    accent: "bg-orange-500",
    tag: "Urban Express"
  },
  {
    title: "Van Freight",
    desc: "Flexible van solutions for medium-weight cargo with door-to-door precision and safety.",
    image: "/pexels-kindelmedia-6868164.png",
    icon: Truck,
    accent: "bg-blue-600",
    tag: "Door-to-Door"
  },
  {
    title: "Air Freight",
    desc: "Global reach with rapid air transport for time-sensitive, international logistics needs.",
    image: "/pexels-rdne-7464409.png",
    icon: Plane,
    accent: "bg-slate-950",
    tag: "Global Priority"
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-10">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900 text-white rounded-full"
            >
              <Box size={14} className="text-orange-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Core Competencies</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.85] uppercase italic">
              Specialist <br />
              <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '2px #0f172a' }}>Solutions</span>
            </h2>
          </div>
          
          <div className="max-w-md space-y-4">
            <div className="flex items-center gap-2 text-orange-600 font-black text-xs uppercase tracking-widest">
              <ShieldCheck size={16} /> Secure • Fast • Reliable
            </div>
            <p className="text-slate-500 font-medium leading-relaxed">
              Tailored logistics infrastructure designed to bypass traditional bottlenecks and deliver your vision on a set budget.
            </p>
          </div>
        </div>

        {/* --- SERVICE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group relative"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Floating Service Tag */}
                <div className="absolute top-8 left-8">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content Card Overlay */}
              <div className="absolute -bottom-12 left-6 right-6 p-8 bg-white rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-50 transition-all duration-500 group-hover:-translate-y-4">
                {/* Dynamic Icon Badge */}
                <div className={`absolute -top-10 right-10 w-20 h-20 ${service.accent} rounded-3xl flex items-center justify-center text-white shadow-2xl transform rotate-6 group-hover:rotate-0 transition-all duration-500`}>
                  <service.icon size={36} strokeWidth={1.5} />
                </div>

                <div className="space-y-4">
                  <h3 className="text-3xl font-black text-slate-950 uppercase italic leading-none">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-2">
                    {service.desc}
                  </p>

                  <div className="pt-4 flex items-center justify-between group/btn cursor-pointer">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover/btn:text-orange-500 transition-colors">
                      Configure Route
                    </span>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-slate-950 group-hover/btn:text-white transition-all">
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Ghost Numbering */}
              <span className="absolute -top-10 -right-4 text-9xl font-black text-slate-950/[0.03] select-none pointer-events-none uppercase italic">
                0{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 text-center"
        >
          <p className="text-slate-400 font-black text-xs uppercase tracking-[0.5em] mb-6">Need a custom freight solution?</p>
          <button className="px-12 py-6 bg-orange-600 text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl hover:bg-slate-950 transition-all shadow-xl hover:shadow-orange-600/20">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}