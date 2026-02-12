"use client";

import { motion } from "framer-motion";
import { Plus, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "Air Freight Division",
    category: "Global Logistics",
    image: "/air-cargo.jpg",
    size: "col-span-1 lg:col-span-2"
  },
  {
    title: "Container Storage",
    category: "Infrastructure",
    image: "/containers.jpg",
    size: "col-span-1"
  },
  {
    title: "Maritime Shipping",
    category: "Ocean Freight",
    image: "/ship.jpg",
    size: "col-span-1 lg:col-span-3"
  }
];

export function WorkShowcase() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="h-1.5 w-12 bg-orange-500 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Our Recent <br /> Work Showcase
            </h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium">
            Explore how we’ve helped global enterprises streamline their 
            distribution through integrated rail and maritime networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] aspect-square lg:aspect-video ${project.size}`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 md:p-12">
                <motion.div 
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  className="space-y-2"
                >
                  <span className="text-orange-500 font-black uppercase tracking-widest text-xs">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 pt-4">
                    <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-orange-500 hover:text-white transition-colors">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-slate-900 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}