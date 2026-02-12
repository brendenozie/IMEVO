"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const REVIEWS = [
  {
    name: "Alexander Graham",
    role: "Supply Chain Manager, TechCorp",
    content: "Logistik has completely transformed our European distribution. Their rail-to-road integration saved us 15% on fuel costs in the first quarter alone.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Sarah Jenkins",
    role: "CEO, Global Retailers",
    content: "The real-time tracking is a game changer. We can give our customers down-to-the-minute updates on their cargo status. Truly world-class service.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    content: "Excellent handling of fragile cargo. Their specialized packing team ensured our high-value electronics arrived without a single scratch.",
    rating: 5,
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-30" />
      <Quote className="absolute -top-10 -left-10 w-64 h-64 text-white/5 rotate-12" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-center md:text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-widest mb-4"
            >
              <Star className="w-3 h-3 fill-orange-500" />
              <span>Customer Satisfaction</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Reliable Solutions, <br />
              <span className="text-orange-500">Trusted by Thousands</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button className="w-14 h-14 rounded-2xl border border-slate-800 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 md:p-10 rounded-[2.5rem] flex flex-col justify-between group hover:border-orange-500/50 transition-colors"
            >
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                
                <p className="text-slate-300 text-lg font-medium leading-relaxed italic">
                  &quot;{review.content}&quot;
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-800 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-slate-700">
                  <img 
                    src={review.img} 
                    alt={review.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <p className="text-orange-500 text-xs font-black uppercase tracking-widest">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Trust Bar */}
        <div className="mt-24 pt-16 border-t border-slate-900 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-2xl font-black text-white tracking-tighter">TECHCORP</span>
          <span className="text-2xl font-black text-white tracking-tighter">MODERNRAIL</span>
          <span className="text-2xl font-black text-white tracking-tighter">GLOBAL_LOG</span>
          <span className="text-2xl font-black text-white tracking-tighter">FASTSHIP</span>
        </div>
      </div>
    </section>
  );
}