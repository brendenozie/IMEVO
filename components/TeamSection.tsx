"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Share2 } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Robert Fox",
    role: "Chief Executive Officer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Jane Cooper",
    role: "Operations Manager",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Cody Fisher",
    role: "Fleet Supervisor",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500",
  },
  {
    name: "Bessie Cooper",
    role: "Supply Chain Analyst",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=500",
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs"
          >
            Our Experts
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Meet The Minds Behind <br />
            <span className="text-orange-500">Global Logistics</span>
          </h2>
          <div className="h-1.5 w-20 bg-slate-900 mx-auto rounded-full" />
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-100 aspect-[4/5] mb-6">
                {/* Image with Grayscale Filter */}
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-6 right-6 flex flex-col gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                   {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                     <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-900 hover:bg-orange-500 hover:text-white transition-colors shadow-xl"
                    >
                       <Icon className="w-4 h-4" />
                     </a>
                   ))}
                </div>

                {/* Corner Label */}
                <div className="absolute top-6 left-0 bg-orange-500 text-white px-4 py-1.5 text-[10px] font-black uppercase tracking-widest rounded-r-lg">
                  Logistik Expert
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center space-y-1">
                <h3 className="text-xl font-black text-slate-900 group-hover:text-orange-500 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- BOTTOM DECORATION --- */}
        <div className="mt-20 p-12 bg-slate-50 rounded-[3rem] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                    <Share2 className="w-8 h-8" />
                </div>
                <div>
                    <h4 className="text-xl font-black text-slate-900">Want to join our team?</h4>
                    <p className="text-slate-500 font-medium">We are always looking for logistics specialists.</p>
                </div>
            </div>
            <button className="px-10 h-16 bg-slate-900 text-white rounded-2xl font-black hover:bg-orange-500 transition-all shadow-xl shadow-slate-900/10 hover:shadow-orange-500/20">
                View Openings
            </button>
        </div>

      </div>
    </section>
  );
}