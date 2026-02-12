"use client";

import { motion } from "framer-motion";
import { Search, Package, Truck, CheckCircle } from "lucide-react";

const STEPS = [
  { icon: Search, title: "Book Order", desc: "Select freight type and destination." },
  { icon: Package, title: "Pack Goods", desc: "Industry-standard safety packing." },
  { icon: Truck, title: "Transport", desc: "Real-time tracking for all cargo." },
  { icon: CheckCircle, title: "Delivery", desc: "Door-to-door final fulfillment." }
];

export function ProcessTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900">Working Process</h2>
        <div className="h-1.5 w-24 bg-orange-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* The connecting line (desktop) */}
        <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-slate-100 z-0">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-full bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="text-center group"
            >
              <div className="w-24 h-24 rounded-[2rem] bg-white border-2 border-slate-100 flex items-center justify-center mx-auto mb-8 relative group-hover:border-orange-500 transition-all duration-500 shadow-xl shadow-slate-200/50 group-hover:shadow-orange-500/20">
                <step.icon className="w-10 h-10 text-slate-400 group-hover:text-orange-500 transition-colors" />
                <div className="absolute -top-3 -right-3 w-10 h-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center text-sm font-black">
                  0{idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-[200px] mx-auto">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}