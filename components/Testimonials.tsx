"use client";

import { motion } from "framer-motion";
import { Star, Box, Quote, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";

const REVIEWS = [
  {
    name: "Ronald Richards",
    role: "Web Developer",
    content: "The precision in their logistics is unmatched. They don't just deliver packages; they deliver peace of mind with real-time tracking.",
    rating: 5,
    img: "/avatar1.jpeg"
  },
  {
    name: "Dianne Russell",
    role: "Supply Manager",
    content: "Outstanding service! Their team went above and beyond to ensure our international freight arrived ahead of schedule.",
    rating: 5,
    img: "/avatar2.jpeg"
  },
  {
    name: "Darlene Robertson",
    role: "CEO, TechFlow",
    content: "Switching to their logistics platform was the best move for our business. Efficient, transparent, and incredibly reliable.",
    rating: 5,
    img: "/avatar3.jpeg"
  }
];

export function Testimonials() {
  return (
    <section className="relative bg-slate-50 overflow-hidden py-24 lg:py-32">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white skew-x-12 translate-x-1/2 z-0" />
      <div className="absolute -left-10 top-20 w-64 h-64 bg-orange-100/50 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Impact Visual with Floating Stats */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]"
            >
              <Image 
                src="/pexels-pavel-danilyuk-6407523.jpg" 
                alt="Our Happy Client" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating Experience Card */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 md:right-10 bg-[#f7941d] p-8 rounded-2xl text-white shadow-2xl border-4 border-white max-w-[200px]"
            >
              <h3 className="text-4xl font-black mb-1">98%</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Customer Satisfaction Rate Globally</p>
            </motion.div>
          </div>

          {/* Right Side: Header & Testimonials */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-[#f7941d]"
              >
                <Box size={14} className="fill-current" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Voice of Clients</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1] uppercase italic">
                Trust is Our <br />
                <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1px #0f172a' }}>Global Currency</span>
              </h2>
            </div>

            {/* Testimonial Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Decorative Large Quote Mark */}
              <Quote className="absolute -top-10 -right-4 w-24 h-24 text-slate-200 -z-10" />

              {REVIEWS.slice(0, 2).map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="space-y-6">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={i < review.rating ? "fill-[#f7941d] text-[#f7941d]" : "text-slate-200"} 
                        />
                      ))}
                    </div>

                    <p className="text-slate-600 text-base leading-relaxed font-medium italic">
                      &quot;{review.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden ring-4 ring-orange-50 group-hover:ring-[#f7941d] transition-all">
                        <Image src={review.img} alt={review.name} fill className="object-cover" />
                      </div>
                      <div>
                        <h5 className="font-black text-slate-950 text-sm tracking-tight">{review.name}</h5>
                        <p className="text-[10px] font-bold text-[#f7941d] uppercase tracking-widest">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Navigation & CTA */}
            <div className="flex items-center justify-between border-t border-slate-200 pt-8">
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-950 hover:text-white transition-all group">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-[#f7941d] transition-all">
                  <ChevronRight size={20} />
                </button>
              </div>
              <button className="text-xs font-black uppercase tracking-[0.2em] text-slate-950 border-b-2 border-[#f7941d] pb-1 hover:text-[#f7941d] transition-colors">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}