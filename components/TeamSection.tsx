"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Box, Quote, ArrowRight } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section className="py-24 lg:py-40 bg-white relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* --- CEO IMAGE CARD --- */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl group"
            >
              <Image
                src="/image77.png" // Replace with your actual path
                alt="Peter Jabuya"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              {/* Floating Socials */}
              <div className="absolute bottom-10 left-10 flex gap-4">
                {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -5 }}
                    className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 hover:bg-orange-600 hover:border-orange-600 transition-all"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative "CEO" Label */}
            <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-1">Founding</p>
              <p className="text-2xl font-black italic uppercase tracking-tighter leading-none">Visionary</p>
            </div>
          </div>

          {/* --- CONTENT SECTION --- */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 text-orange-600">
                <Box size={20} className="fill-current" />
                <span className="text-xs font-black uppercase tracking-[0.4em]">Our Leadership</span>
              </div>
              
              <h2 className="text-6xl md:text-8xl font-black text-slate-950 leading-none uppercase italic">
                Peter <br />
                <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '2px #0f172a' }}>Jabuya</span>
              </h2>
              <p className="text-orange-600 font-bold uppercase tracking-widest text-sm">Chief Executive Officer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <Quote className="absolute -top-6 -left-8 text-slate-100 size-24 -z-10" />
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed font-medium italic">
                &quot;Our team leader believes in <span className="text-slate-950 font-black">Efficient, Safe, and Reliable Services</span>. 
                We understand the great value placed on time, delivering on a set budget within the scheduled time frame.&quot;
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-100"
            >
              <div>
                <h4 className="font-black text-slate-950 uppercase text-xs tracking-tighter mb-2">The Standard</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Guided by the highest standards of professionalism, treating every customer with the respect they deserve.
                </p>
              </div>
              <div>
                <h4 className="font-black text-slate-950 uppercase text-xs tracking-tighter mb-2">The Expertise</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Hiring only the best, with outstanding excellence and long practical experience in Transportation and Logistics.
                </p>
              </div>
            </motion.div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 text-slate-950 font-black uppercase text-xs tracking-[0.3em] group"
            >
              View Full Executive Profile 
              <span className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-orange-600 transition-colors">
                <ArrowRight size={16} />
              </span>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
}