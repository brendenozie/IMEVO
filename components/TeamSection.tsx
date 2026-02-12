"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Box, Plus, Users, ArrowUpRight } from "lucide-react";
import Image from "next/image";

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
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-orange-600"
            >
              <Box size={18} className="fill-current" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Leadership</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-none uppercase italic">
              Expert <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1px #0f172a' }}>Personnel</span>
            </h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-slate-500 text-sm font-medium border-l-2 border-orange-500 pl-6 hidden md:block"
          >
            Our leadership team brings over 40 years of combined experience in global freight and supply chain optimization.
          </motion.p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] aspect-[4/5] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] transition-all duration-700">
                
                {/* Image */}
                <Image 
                  src={member.img} 
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />

                {/* Social Floating Panel */}
                <div className="absolute top-6 right-6 flex flex-col gap-2 translate-x-12 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-spring">
                  {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                    <button key={i} className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 hover:bg-orange-600 hover:text-white transition-all shadow-lg">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>

                {/* Info Overlay (Permanent Mobile, Hover Desktop) */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white uppercase italic tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 text-[10px] font-black uppercase tracking-[0.2em]">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Background Element for each card */}
              <div className="absolute -inset-2 bg-orange-600/10 rounded-[2.5rem] scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* --- RECRUITMENT BANNER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 group relative overflow-hidden"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 bg-slate-950 rounded-[3rem]" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          
          <div className="relative p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 bg-[#f7941d] rounded-3xl flex items-center justify-center text-white rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-[0_20px_40px_rgba(247,148,29,0.3)]">
                <Users size={40} />
              </div>
              <div className="space-y-2">
                <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic">
                  Join The <span className="text-[#f7941d]">A-Team</span>
                </h4>
                <p className="text-slate-400 font-medium max-w-sm">
                  We are looking for passionate logistics experts and data analysts to join our global network.
                </p>
              </div>
            </div>

            <button className="relative flex items-center gap-4 bg-white text-slate-950 px-10 py-6 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-[#f7941d] hover:text-white transition-all overflow-hidden group/btn">
              <span className="relative z-10">Career Openings</span>
              <ArrowUpRight size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
        </div>
        </section>
  );
}