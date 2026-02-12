"use client";

import { motion } from "framer-motion";
import { Bike, Truck, Plane, ArrowRight, Box, Plus } from "lucide-react";
import Image from "next/image";

const SERVICES = [
  {
    title: "Bike Freight",
    desc: "Speedy urban bicycle logistics designed for high-density delivery and document transport.",
    image: "/portrait-young-african-guy-accepts-order-by-phone-motorbike-holding-boxes-with-pizza-sit-his-bike-urban-place.png",
    icon: Bike,
    accent: "bg-orange-500",
  },
  {
    title: "Van Freight",
    desc: "Flexible van solutions for medium-weight cargo with door-to-door precision and safety.",
    image: "/pexels-kindelmedia-6868164.png",
    icon: Truck, // Swapped to Truck for better visual context
    accent: "bg-blue-600",
  },
  {
    title: "Air Freight",
    desc: "Global reach with rapid air transport for time-sensitive, international logistics needs.",
    image: "/pexels-rdne-7464409.png",
    icon: Plane,
    accent: "bg-slate-900",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#fcfcfc] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
      <div className="absolute -right-20 top-40 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-[#f7941d]"
            >
              <Box size={18} className="fill-current" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Services excellence</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-none uppercase italic">
              Specialist <br />
              <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1px #0f172a' }}>Logistics</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm font-medium border-l-2 border-orange-500 pl-4">
            Customized shipping solutions tailored to your industry, ensuring your cargo arrives safely and on time.
          </p>
        </div>

        {/* --- SERVICE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="group relative"
            >
              {/* Image Container with Perspective */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
                  width={500}
                  height={600}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                {/* Plus Icon Decoration */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-90">
                  <Plus size={20} />
                </div>
              </div>

              {/* Content Box (Floating Glassmorphism) */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white p-8 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] transform transition-all duration-500 group-hover:-translate-y-4">
                
                {/* Icon Container */}
                <div className={`absolute -top-10 left-8 w-16 h-16 ${service.accent} rounded-xl flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <div className="pt-2">
                  <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tighter uppercase italic">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                    <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-950 group-hover:text-orange-500 transition-colors">
                      Explore Service
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                    <span className="text-4xl font-black text-gray-50 opacity-10 group-hover:opacity-20 transition-opacity">
                      0{idx + 1}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}