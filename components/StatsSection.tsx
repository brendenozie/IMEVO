"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ArrowRight, Globe, MapPin, Users, Clock } from "lucide-react";

const STATS = [
  {
    label: "Worldwide Clients",
    value: "15k",
    icon: Globe,
  },
  {
    label: "Worldwide Branches",
    value: "189+",
    icon: MapPin,
  },
  {
    label: "Expert Company Staffs",
    value: "950+",
    icon: Users,
  },
  {
    label: "Successful Delivery",
    value: "15k",
    icon: Clock,
  },
];

export function StatsSection() {
  return (
    <section className="relative w-full">
      {/* --- TOP CTA AREA --- */}
      <div className="relative h-[450px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/pexels-pavel-danilyuk-6407583.png" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            style={{ objectFit: "cover" }}
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white max-w-3xl leading-tight">
            24/7 customer support any time of the day or night
          </h2>
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="h-14 px-8 bg-[#f7941d] text-white font-bold text-sm uppercase flex items-center gap-3 hover:bg-orange-600 transition-all">
              Free Quote! <Send size={16} />
            </button>
            <button className="h-14 px-8 bg-blue-700 text-white font-bold text-sm uppercase flex items-center gap-3 hover:bg-blue-800 transition-all">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* --- BOTTOM STATS BANNER --- */}
      <div className="bg-blue-700 py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col items-center text-center space-y-4 relative ${
                  i !== STATS.length - 1 ? "lg:border-r lg:border-white/20" : ""
                }`}
              >
                {/* Icon with thin-line style */}
                <div className="text-white/90">
                  <stat.icon size={48} strokeWidth={1} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-4xl md:text-5xl font-black text-white">
                    {stat.value}
                  </h3>
                  <p className="text-sm font-bold text-white/90 uppercase tracking-tighter">
                    {stat.label}
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