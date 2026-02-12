"use client";

import { motion } from "framer-motion";
import { Star, Quote, Facebook, Twitter, Linkedin } from "lucide-react";

const TEAM = [
  { name: "Robert Fox", role: "CEO & Founder", img: "/team1.jpg" },
  { name: "Jane Cooper", role: "Logistics Manager", img: "/team2.jpg" },
  { name: "Cody Fisher", role: "Senior Engineer", img: "/team3.jpg" }
];

export function SocialSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* TEAM GRID */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Experts of Logistik</h2>
            <p className="text-slate-500 font-medium">Leading the rail freight revolution with decades of experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg group">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={member.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={member.name} />
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  {/* Social links appearing on hover */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                    {[Facebook, Twitter, Linkedin].map((Icon, idx) => (
                      <button key={idx} className="p-3 bg-white rounded-xl text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="p-8 text-center">
                  <h4 className="text-xl font-black text-slate-900">{member.name}</h4>
                  <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* TESTIMONIAL SLIDER (Static Layout for Example) */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <Quote className="absolute top-10 left-10 w-24 h-24 text-white/5" />
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />)}
          </div>
          <p className="text-2xl md:text-3xl text-white font-medium italic leading-relaxed mb-10">
            &quot;Logistik has completely transformed how we handle international freight. 
            Their rail-link technology reduced our shipping times by 40%.&quot;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-slate-700" />
            <div className="text-left">
              <h5 className="text-white font-bold text-lg">Guy Hawkins</h5>
              <p className="text-orange-500 text-sm font-bold uppercase tracking-widest">Global Ops, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}