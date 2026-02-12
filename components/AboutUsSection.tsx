"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Clock, DollarSign, Box, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Side: Dynamic Image Composition */}
          <div className="relative order-2 lg:order-1">
            <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
              {/* Main Image with decorative border */}
              <div className="col-span-8 relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#f7941d] hidden md:block" />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white"
                >
                  <Image 
                    src="/pexels-rdne-7363203.png" 
                    alt="Logistics Worker" 
                    width={800} height={600} 
                    className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700" 
                  />
                </motion.div>
              </div>

              {/* Overlapping Secondary Image */}
              <div className="col-span-4 space-y-4">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="rounded-xl overflow-hidden shadow-xl border-4 border-white"
                >
                  <Image 
                    src="/pexels-kindelmedia-6868164.png" 
                    alt="Logistics Truck" 
                    width={400} height={300} 
                    className="w-full h-32 md:h-48 object-cover" 
                  />
                </motion.div>
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                   className="rounded-xl overflow-hidden shadow-xl border-4 border-white hidden md:block"
                >
                  <Image 
                    src="/pexels-ptrcwrnr-18395054.png" 
                    alt="Containers" 
                    width={400} height={300} 
                    className="w-full h-32 md:h-40 object-cover" 
                  />
                </motion.div>
              </div>
            </div>

            {/* Experience Badge - Floating Effect */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 md:right-10 z-20"
            >
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-[#f7941d] flex flex-col items-center justify-center text-white text-center shadow-[0_20px_50px_rgba(247,148,29,0.3)] border-8 border-white">
                <span className="text-3xl md:text-5xl font-black italic">25+</span>
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-tighter leading-none px-4">
                  Years of <br/> Excellence
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full text-[#f7941d]">
                <Box size={14} className="fill-current" />
                <span className="text-xs font-black uppercase tracking-widest">Global Logistics Leader</span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1] tracking-tight">
                Moving Your Business <br/> 
                <span className="text-[#f7941d]">Beyond Boundaries</span>
              </h2>

              <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                Since 1996, we’ve redefined transportation with a blend of heavy-duty rail power and agile logistics. We don’t just move cargo; we move your bottom line.
              </p>

              {/* Benefits Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
                {['Real-time Tracking', 'Global Network', 'Secure Packaging', '24/7 Support'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700 font-bold text-sm">
                    <CheckCircle2 size={18} className="text-[#f7941d]" /> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Action & Signature Area */}
            <div className="flex flex-wrap items-center gap-8 py-6 border-y border-gray-100">
              <button className="group relative h-14 px-8 bg-slate-950 text-white font-bold text-sm uppercase flex items-center gap-3 overflow-hidden transition-all hover:pr-12">
                <span className="relative z-10 flex items-center gap-2">Read More <Send size={16} /></span>
                <div className="absolute inset-y-0 right-0 w-0 bg-[#f7941d] transition-all group-hover:w-full" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-4 ring-orange-100">
                    <Image src="/ceo-avatar.png" alt="CEO" width={56} height={56} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle2 size={10} className="text-white" />
                  </div>
                </div>
                <div>
                  <Image src="/signature.png" alt="Signature" width={100} height={40} className="h-8 opacity-90 brightness-0" />
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Founding Director</p>
                </div>
              </div>
            </div>

            {/* Feature Cards - Floating Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#f7941d] mb-4 group-hover:bg-[#f7941d] group-hover:text-white transition-colors">
                  <DollarSign size={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-tight">Transparent Pricing</h4>
                <p className="text-xs text-gray-500 leading-normal">No hidden fees. We provide clear, affordable cost structures for every shipment.</p>
              </div>
              
              <div className="group p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Clock size={24} />
                </div>
                <h4 className="font-black text-slate-900 mb-1 uppercase text-sm tracking-tight">Express Delivery</h4>
                <p className="text-xs text-gray-500 leading-normal">Time is money. Our optimized rail routes ensure your cargo arrives on schedule.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}