"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-24 bg-white overflow-hidden" id="contact">
      <div className="container mx-auto px-6">
        <div className="bg-slate-50 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row">
          
          {/* --- LEFT SIDE: INQUIRY FORM --- */}
          <div className="lg:w-7/12 p-8 md:p-16 bg-white">
            <div className="space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 text-xs font-black uppercase tracking-widest">
                <Send className="w-3 h-3" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Ready to Start Your <br />
                <span className="text-orange-500">Next Shipment?</span>
              </h2>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Email Address</label>
                <input type="email" placeholder="john@company.com" className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-900" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Subject</label>
                <select className="w-full h-14 px-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-900 appearance-none">
                  <option>Freight Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Career Opportunity</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-black uppercase text-slate-400 ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us about your logistics needs..." className="w-full p-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-orange-500 transition-all font-bold text-slate-900 resize-none"></textarea>
              </div>
              <button className="md:col-span-2 h-16 bg-orange-500 hover:bg-slate-900 text-white rounded-2xl font-black text-lg transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3">
                Send Inquiry <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* --- RIGHT SIDE: OFFICE INFO & MAP --- */}
          <div className="lg:w-5/12 bg-slate-900 p-8 md:p-16 text-white relative overflow-hidden">
            {/* Background Branding */}
            <div className="absolute -bottom-10 -right-10 opacity-5 select-none">
               <Globe className="w-80 h-80" />
            </div>

            <div className="relative z-10 space-y-12">
              <div>
                <h3 className="text-2xl font-black mb-6">Visit Our Office</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <MapPin className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-500 tracking-widest">Headquarters</p>
                      <p className="font-bold">123 Logistics Way, Suite 500<br />Chicago, IL 60601</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Clock className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-500 tracking-widest">Office Hours</p>
                      <p className="font-bold">Mon - Fri: 08:00 - 18:00<br />Sat: 09:00 - 14:00</p>
                    </div>
                  </div>

                  <div className="flex gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                      <Phone className="w-5 h-5 text-orange-500 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-slate-500 tracking-widest">Phone Support</p>
                      <p className="font-bold">+1 (800) LOGI-PRO</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini Map Placeholder */}
              <div className="rounded-3xl h-64 bg-slate-800 relative overflow-hidden group cursor-crosshair border border-white/5">
                <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-87.6298,41.8781,12,0/600x400?access_token=YOUR_TOKEN')] bg-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Live Status: Operations Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}