"use client";

import { motion } from "framer-motion";
import { Bike, Bike as Bicycle, Plane, ArrowRight, Box } from "lucide-react";

const SERVICES = [
  {
    title: "Bike Freight",
    desc: "Bike freight, also known as bicycle logistics, refers to the transport of goods or cargo.",
    image: "/bike-delivery.jpg",
    icon: Bike,
  },
  {
    title: "Bicycle Freight",
    desc: "Bicycle freight services can be provided by specialized logistics companies.",
    image: "/bicycle-delivery.jpg",
    icon: Bicycle,
  },
  {
    title: "Air Freight",
    desc: "Air freight offers several advantages over other modes of transportation.",
    image: "/air-freight.jpg",
    icon: Plane,
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Subtle background pattern to match the "wavey" texture in the image */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/subtle-topo.png')] bg-repeat" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#f7941d]">
            <Box size={16} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 capitalize">
            Specialist logistics services
          </h2>
        </div>

        {/* --- SERVICE CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Image Container */}
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay to ensure readability if needed */}
                <div className="absolute inset-0 bg-black/5" />
              </div>

              {/* Content Box (Overlapping) */}
              <div className="relative -mt-32 mx-4 md:mx-6 bg-white p-8 pt-12 shadow-xl z-20">
                
                {/* Floating Icon Container */}
                <div className="absolute -top-10 right-8">
                  <div className="w-20 h-20 rounded-full bg-[#f7941d] border-[6px] border-white flex items-center justify-center shadow-lg group-hover:rotate-[360deg] transition-transform duration-1000">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-[#f7941d] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {service.desc}
                </p>

                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-800 hover:text-[#f7941d] transition-colors border-b-2 border-transparent hover:border-[#f7941d] pb-1 w-fit">
                  Read More 
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}