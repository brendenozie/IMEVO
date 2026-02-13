"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe, ShieldCheck, ChevronRight } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact us" className="py-24 lg:py-40 bg-white overflow-hidden relative">
      {/* Structural Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-0 hidden lg:block" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch bg-white rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100">
          
          {/* --- LEFT SIDE: THE COMMAND INPUT --- */}
          <div className="lg:w-7/12 p-8 md:p-20 bg-white">
            <div className="space-y-6 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-orange-600 font-black uppercase tracking-[0.4em] text-[10px]"
              >
                <div className="w-8 h-px bg-orange-600" />
                Contact Terminal
              </motion.div>
              
              <h2 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.9] uppercase italic">
                Start Your <br />
                <span className="text-transparent stroke-slate-950" style={{ WebkitTextStroke: '1.5px #0f172a' }}>Journey</span>
              </h2>
              
              <p className="text-slate-500 font-medium max-w-md">
                Deploy our global network for your next shipment. Our logistics engineers are standing by.
              </p>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
              {/* Floating Input Group */}
              {[
                { label: "Full Name", placeholder: "e.g. Marcus Aurelius", type: "text" },
                { label: "Corporate Email", placeholder: "name@company.com", type: "email" }
              ].map((field, i) => (
                <div key={i} className="group relative">
                  <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest absolute -top-6 left-0 transition-colors group-focus-within:text-orange-600">
                    {field.label}
                  </label>
                  <input 
                    type={field.type} 
                    placeholder={field.placeholder}
                    className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-slate-950 outline-none focus:border-orange-500 transition-all placeholder:text-slate-300 placeholder:font-medium" 
                  />
                </div>
              ))}

              <div className="group relative md:col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest absolute -top-6 left-0 transition-colors group-focus-within:text-orange-600">
                  Select Service
                </label>
                <select className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-slate-950 outline-none focus:border-orange-500 transition-all appearance-none cursor-pointer">
                  <option>Air Freight Solutions</option>
                  <option>Ocean Cargo Management</option>
                  <option>Global Distribution</option>
                  <option>Customs & Compliance</option>
                </select>
                <ChevronRight className="absolute right-0 bottom-4 rotate-90 text-slate-300 pointer-events-none" size={20} />
              </div>

              <div className="group relative md:col-span-2">
                <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest absolute -top-6 left-0 transition-colors group-focus-within:text-orange-600">
                  Operational Details
                </label>
                <textarea 
                  rows={3} 
                  placeholder="Describe your freight requirements..." 
                  className="w-full bg-transparent border-b-2 border-slate-100 py-4 font-bold text-slate-950 outline-none focus:border-orange-500 transition-all resize-none placeholder:text-slate-300 placeholder:font-medium"
                ></textarea>
              </div>

              <div className="md:col-span-2 pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full h-20 bg-slate-950 text-white rounded-2xl font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 group/btn overflow-hidden relative shadow-2xl hover:bg-orange-600 transition-colors"
                >
                  <span className="relative z-10">Initialize Request</span>
                  <Send size={18} className="relative z-10 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform" />
                </motion.button>
                <div className="mt-6 flex items-center gap-2 text-slate-400">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Encrypted Data Transmission</span>
                </div>
              </div>
            </form>
          </div>

          {/* --- RIGHT SIDE: DATA HUB --- */}
          <div className="lg:w-5/12 bg-slate-950 p-8 md:p-20 text-white relative flex flex-col justify-between">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600/20 rounded-full blur-[100px]" />

            <div className="relative z-10 space-y-16">
              <h3 className="text-3xl font-black italic uppercase tracking-tighter">Global <span className="text-orange-500">HQ</span></h3>
              
              <div className="space-y-10">
                {[
                  { icon: MapPin, label: "Coordinates", val: "Lusingeti Road, Number 31, Industrial Area" },
                  { icon: Clock, label: "Uptime", val: "Mon - Fri: 08:00 - 18:00\nSat: 09:00 - 14:00" },
                  { icon: Phone, label: "Direct Line", val: "0700 700 063 | 0700 700 049" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-500">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.2em] mb-1">{item.label}</p>
                      <p className="font-bold text-lg leading-tight whitespace-pre-line">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Map UI */}
            <div className="relative mt-16 group">
              <div className="rounded-[2.5rem] h-56 bg-slate-900 border border-white/10 overflow-hidden relative shadow-inner">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800')] bg-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-[3s]" />
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay" />
                
                {/* Ping Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-orange-500/40 rounded-full animate-ping" />
                      <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-xl" />
                   </div>
                </div>

                <div className="absolute bottom-6 inset-x-6 flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/70">Central Hub Online</span>
                  </div>
                  <Globe size={40} className="text-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}