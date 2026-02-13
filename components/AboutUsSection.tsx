"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Clock, DollarSign, Box, CheckCircle2, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white overflow-hidden relative">
      {/* Background Architectural Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/80 -skew-x-12 translate-x-1/3 -z-10" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: THE IMAGE MASONRY --- */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-12 gap-4">
              
              {/* Main Hero Image */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="col-span-8 relative group"
              >
                <div className="absolute -inset-4 border-2 border-orange-500/20 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] relative border-8 border-white">
                  <Image 
                    src="/pexels-rdne-7363203.png" 
                    alt="Operations Excellence" 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                </div>
              </motion.div>

              {/* Stacked Side Images */}
              <div className="col-span-4 flex flex-col gap-4 self-center">
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   className="rounded-2xl overflow-hidden shadow-xl aspect-square relative border-4 border-white"
                >
                  <Image 
                    src="/pexels-kindelmedia-6868164.png" 
                    alt="Reliable Fleet" 
                    fill
                    className="object-cover" 
                  />
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="rounded-2xl overflow-hidden shadow-xl aspect-square relative border-4 border-white"
                >
                  <Image 
                    src="/pexels-ptrcwrnr-18395054.png" 
                    alt="Global Logistics" 
                    fill
                    className="object-cover" 
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              className="absolute -bottom-10 right-4 lg:right-12 z-30"
            >
              <div className="w-40 h-40 rounded-2xl bg-slate-950 flex flex-col items-center justify-center text-white text-center shadow-2xl border-[12px] border-white rotate-3">
                <Award className="text-orange-500 mb-1" size={32} />
                <span className="text-4xl font-black italic leading-none">20+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Years of <br/> Mastery</span>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE EDITORIAL CONTENT --- */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2 bg-orange-500/10 rounded-full text-orange-600"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Established 2019</span>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] tracking-tighter uppercase italic">
                Beyond <br />
                <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1.5px #0f172a' }}>Logistics</span>
              </h2>

              <p className="text-slate-600 leading-relaxed text-lg font-medium italic border-l-4 border-orange-500 pl-6">
                &quot;We leverage over two decades of director-level expertise to deliver a competitive advantage that moves your business beyond boundaries.&quot;
              </p>

              <p className="text-slate-500 leading-relaxed text-sm">
                Imevo Limited was founded on the principle of top-notch management and subordinate excellence. Our staff are more than employees; they are logistics architects dedicated to delivering on the client&apos;s every wish.
              </p>

              {/* Interactive Features Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle2, label: "Real-time Tracking" },
                  { icon: CheckCircle2, label: "Global Network" },
                  { icon: CheckCircle2, label: "Secure Packaging" },
                  { icon: CheckCircle2, label: "24/7 Support" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-md transition-all">
                    <item.icon size={16} className="text-orange-500 group-hover:scale-110 transition-transform" /> 
                    <span className="text-slate-900 font-bold text-xs uppercase tracking-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA & Trust Section */}
            <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-slate-100">
              <button className="h-16 px-10 bg-slate-950 text-white font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-orange-600 transition-colors flex items-center gap-4 shadow-xl">
                Read Our Story <Send size={14} />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-orange-100">
                  <Image src="/image77SMALL.png" alt="Director" width={56} height={56} className="object-cover" />
                </div>
                <div>
                  <Image src="/signature.png" alt="Signature" width={100} height={40} className="h-6 opacity-80 brightness-0" />
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Founding Director</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}