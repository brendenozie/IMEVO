"use client";

import { motion } from "framer-motion";
import { Ship, Users, Globe2, Award } from "lucide-react";

const STATS = [
  {
    label: "Successful Shipments",
    value: "15k+",
    icon: Ship,
    suffix: "Monthly deliveries",
    color: "from-orange-500 to-orange-600"
  },
  {
    label: "Satisfied Clients",
    value: "98%",
    icon: Users,
    suffix: "Retention rate",
    color: "from-blue-600 to-blue-700"
  },
  {
    label: "Global Hubs",
    value: "250+",
    icon: Globe2,
    suffix: "Strategic locations",
    color: "from-slate-800 to-slate-900"
  },
  {
    label: "Industry Awards",
    value: "42",
    icon: Award,
    suffix: "For excellence",
    color: "from-orange-600 to-red-600"
  }
];

export function StatsSection() {
  return (
    <section className="relative py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative group p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 mb-6 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500">
                <stat.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
              </div>

              {/* Data Display */}
              <div className="space-y-1">
                <motion.h3 
                  className="text-5xl font-black text-slate-900 tracking-tighter"
                >
                  {stat.value}
                </motion.h3>
                <p className="text-sm font-black uppercase tracking-widest text-slate-400">
                  {stat.label}
                </p>
              </div>

              {/* Decorative Progress Bar */}
              <div className="mt-6 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${stat.color} rounded-full`}
                />
              </div>

              <p className="mt-4 text-xs font-bold text-slate-400 italic">
                {stat.suffix}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-slate-900/5 group-hover:ring-orange-500/20 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* --- PARTNER STRIP --- */}
        <div className="mt-20 pt-16 border-t border-slate-100 flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale contrast-125">
          <h4 className="text-xl font-black tracking-tighter">RAIL_LINK</h4>
          <h4 className="text-xl font-black tracking-tighter">CARGO_FLOW</h4>
          <h4 className="text-xl font-black tracking-tighter">METRO_FREIGHT</h4>
          <h4 className="text-xl font-black tracking-tighter">OCEAN_BRIDGE</h4>
        </div>
      </div>
    </section>
  );
}