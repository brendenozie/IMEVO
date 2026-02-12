"use client";

import { motion } from "framer-motion";
import { 
  Plane, 
  Ship, 
  Truck, 
  TrainFront, 
  Warehouse, 
  Globe, 
  ArrowRight 
} from "lucide-react";

const SERVICES = [
  {
    title: "Air Freight",
    desc: "Global reach with lightning speed. Ideal for high-priority shipments and perishable goods.",
    icon: Plane,
    id: "01"
  },
  {
    title: "Sea Freight",
    desc: "The most cost-effective solution for large-scale international shipping and heavy cargo.",
    icon: Ship,
    id: "02"
  },
  {
    title: "Road Transport",
    desc: "Flexible last-mile delivery and regional distribution with real-time fleet tracking.",
    icon: Truck,
    id: "03"
  },
  {
    title: "Rail Freight",
    desc: "Eco-friendly, reliable, and high-capacity transport across continental rail networks.",
    icon: TrainFront,
    id: "04"
  },
  {
    title: "Warehousing",
    desc: "Strategic storage solutions with advanced inventory management and fulfillment.",
    icon: Warehouse,
    id: "05"
  },
  {
    title: "Global Logistics",
    desc: "Integrated supply chain management connecting manufacturers to end-users.",
    icon: Globe,
    id: "06"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-500 font-black uppercase tracking-widest text-xs">
              <div className="h-px w-8 bg-orange-500" />
              <span>Core Specialities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Specialist Logistics <br /> 
              <span className="text-orange-500">Service Solutions</span>
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium leading-relaxed">
            We provide a comprehensive suite of transportation services designed to 
            optimize your supply chain and reduce operational overhead.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 overflow-hidden"
            >
              {/* Background Number Decoration */}
              <span className="absolute -top-4 -right-2 text-9xl font-black text-slate-200/40 select-none group-hover:text-orange-500/5 transition-colors duration-500">
                {service.id}
              </span>

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                  <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <button className="flex items-center gap-2 text-sm font-black uppercase tracking-wider text-slate-900 hover:text-orange-500 transition-colors">
                  Read More 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-bold text-sm">
            Need a custom solution for your enterprise? 
            <a href="#" className="text-orange-500 ml-2 hover:underline">Contact our strategy team.</a>
          </p>
        </div>

      </div>
    </section>
  );
}