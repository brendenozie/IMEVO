"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";

const STATS = [
  { val: "15k+", label: "Successful Deliveries" },
  { val: "250+", label: "Expert Workers" },
  { val: "98%", label: "Positive Feedback" },
  { val: "40+", label: "Country Coverage" }
];

const POSTS = [
  { title: "The Future of Rail Freight in 2026", date: "Feb 12, 2026", cat: "Trends" },
  { title: "Optimizing Last-Mile Delivery Efficiency", date: "Feb 10, 2026", cat: "Logistics" }
];

export function FooterSections() {
  return (
    <section className="py-24">
      {/* STATS COUNTER */}
      <div className="container mx-auto px-6 mb-32 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <div key={i} className="text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
            <motion.h2 
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-5xl font-black text-slate-900 mb-2"
            >
              {stat.val}
            </motion.h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* BLOG GRID */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-black">Latest News & Blog</h2>
          <button className="text-orange-500 font-black flex items-center gap-2 hover:gap-4 transition-all">
            View All News <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {POSTS.map((post, i) => (
            <motion.div key={i} whileHover={{ x: 10 }} className="flex gap-6 items-center p-6 bg-slate-50 rounded-[2rem] group cursor-pointer">
              <div className="w-32 h-32 rounded-2xl bg-slate-200 overflow-hidden flex-shrink-0">
                <img src={`/blog${i+1}.jpg`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                  <span className="text-orange-500 uppercase">{post.cat}</span>
                  <div className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}