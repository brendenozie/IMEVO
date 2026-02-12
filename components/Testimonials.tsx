"use client";

import { motion } from "framer-motion";
import { Star, Box } from "lucide-react";

const REVIEWS = [
  {
    name: "Ronald Richards",
    role: "Web Developer",
    content: "Remember that the key to collecting and utilizing customer feedback effectively is to listen carefully to your clients action",
    rating: 4,
    img: "/avatar1.jpg"
  },
  {
    name: "Dianne Russell",
    role: "Web Designer",
    content: "Good services typically meet or exceed customer expectations, provide value for money, and result in customers satisfaction.",
    rating: 4,
    img: "/avatar2.jpg"
  },
  {
    name: "Darlene Robertson",
    role: "Founder Of CEO",
    content: "Collecting feedback from clients is critical part of running successful service business. can help you understand your customers.",
    rating: 4,
    img: "/avatar3.jpg"
  }
];

export function Testimonials() {
  return (
    <section className="relative bg-white overflow-hidden py-24">
      {/* Background World Map Pattern (Top Right) */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <img src="/world-map-dots.png" alt="pattern" className="w-full h-full object-contain" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Large Visual */}
          <div className="lg:col-span-5 relative h-[600px] rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="/workers-with-laptop.jpg" 
              alt="Our Team" 
              className="w-full h-full object-cover"
            />
            {/* Blue Overlay Gradient */}
            <div className="absolute inset-0 bg-blue-900/10" />
          </div>

          {/* Right Side: Content & Cards */}
          <div className="lg:col-span-7 space-y-10">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#f7941d]">
                <Box size={16} className="fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">Testimonial</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                What Client&apos;s say about <br /> Our Services
              </h2>
            </div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REVIEWS.map((review, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-100 shadow-xl p-6 relative flex flex-col justify-between h-full group"
                >
                  <div className="space-y-4">
                    {/* Header: Title and Stars */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm">Good Services</h4>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={12} 
                            className={i < review.rating ? "fill-[#f7941d] text-[#f7941d]" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-500 text-[13px] leading-relaxed italic">
                      &quot;{review.content}&quot;
                    </p>
                  </div>

                  {/* Footer: User Info with Orange "Wave" Detail */}
                  <div className="mt-8 relative">
                    {/* The Orange Background Shape */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-[#f7941d] rounded-bl-[2rem] rounded-tr-[2rem] -mx-6 -mb-6 z-0" />
                    
                    <div className="relative z-10 flex items-center gap-3 px-2 pb-2">
                      <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
                        <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="text-white">
                        <h5 className="font-black text-[13px] leading-none mb-1">{review.name}</h5>
                        <p className="text-[10px] font-bold opacity-90">{review.role}</p>
                      </div>
                      
                      {/* Floating Quote Icon */}
                      <div className="ml-auto bg-white rounded-full p-1.5 shadow-sm">
                        <span className="text-[#f7941d] text-[10px] font-black italic">“”</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}