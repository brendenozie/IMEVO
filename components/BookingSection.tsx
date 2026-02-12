"use client";

import { motion } from "framer-motion";
import { MapPin, Package, Scale, ArrowRight, Ship } from "lucide-react";

export function BookingSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="relative bg-blue-900 rounded-[2.5rem] p-8 md:p-16 shadow-2xl overflow-hidden">
          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-800/50 skew-x-12 translate-x-20 z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm">
                <Ship className="w-5 h-5" />
                <span>Real-Time Calculation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                We Create Opportunity to <br />
                <span className="text-orange-500">Reach Potential</span>
              </h2>
              <p className="text-blue-100 text-lg">
                Get an instant estimate for your next shipment. Our automated 
                routing system finds the most efficient rail and road paths.
              </p>
            </div>

            {/* THE FORM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/10 backdrop-blur-md p-2 rounded-3xl border border-white/10"
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Origin</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="City or Port" className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 transition-all outline-none text-sm font-bold" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="text" placeholder="City or Port" className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 transition-all outline-none text-sm font-bold" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Freight Type</label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <select className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 transition-all outline-none text-sm font-bold appearance-none">
                        <option>Rail Freight</option>
                        <option>Road Transport</option>
                        <option>Sea Cargo</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase text-slate-400 ml-1">Weight (KG)</label>
                    <div className="relative">
                      <Scale className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input type="number" placeholder="Total Weight" className="w-full h-14 pl-12 pr-4 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-orange-500 transition-all outline-none text-sm font-bold" />
                    </div>
                  </div>
                </div>

                <button className="w-full h-16 rounded-xl bg-orange-500 hover:bg-slate-900 text-white font-black text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2">
                  Check Availability <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}