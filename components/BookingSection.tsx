"use client";

import { motion } from "framer-motion";
import { User, Mail, Scale, MapPin, ChevronDown, Send, Play, Box } from "lucide-react";

export function BookingSection() {
  return (
    <section className="relative min-h-[700px] bg-[#111111] overflow-hidden">
      {/* Background Image Container (Right Side) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0">
        <div className="absolute inset-0 bg-black/20 z-10" />
        <img 
          src="/truck-and-plane.jpg" 
          alt="Logistics" 
          className="w-full h-full object-cover"
        />
        
        {/* Floating Play Button */}
        <div className="absolute top-1/2 left-0 lg:-translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
          <div className="group cursor-pointer flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-16 h-16 rounded-full bg-blue-700 flex items-center justify-center text-white shadow-xl">
                <Play size={24} className="fill-current ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-20">
        <div className="max-w-6xl">
          {/* Header Section */}
          <div className="mb-12 space-y-4">
            <div className="flex items-center gap-2 text-[#f7941d]">
              <Box size={16} className="fill-current" />
              <span className="text-sm font-bold uppercase tracking-widest">Request a Quote</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white max-w-xl leading-tight">
              We Create Opportunity to Reach Potential
            </h2>
          </div>

          {/* Form Container */}
          <div className="w-full lg:w-[65%] shadow-2xl">
            {/* Tabbed Navigation */}
            <div className="grid grid-cols-3">
              <button className="bg-[#f7941d] text-white py-5 px-4 font-bold text-sm uppercase transition-colors">
                Request a quote
              </button>
              <button className="bg-white text-slate-800 py-5 px-4 font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
                Real Time Tracking
              </button>
              <button className="bg-white text-slate-800 py-5 px-4 font-bold text-sm uppercase hover:bg-gray-100 transition-colors">
                24/7 Hours Support
              </button>
            </div>

            {/* Blue Form Area */}
            <div className="bg-blue-700 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="relative border-b border-white/30 pb-2">
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm font-medium py-2"
                    />
                    <User size={18} className="absolute right-0 top-2 text-white/70" />
                  </div>
                  
                  {/* Email */}
                  <div className="relative border-b border-white/30 pb-2">
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm font-medium py-2"
                    />
                    <Mail size={18} className="absolute right-0 top-2 text-white/70" />
                  </div>

                  {/* Weight */}
                  <div className="relative border-b border-white/30 pb-2">
                    <input 
                      type="text" 
                      placeholder="Weight, Kg" 
                      className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm font-medium py-2"
                    />
                    <Scale size={18} className="absolute right-0 top-2 text-white/70" />
                  </div>

                  {/* Distance */}
                  <div className="relative border-b border-white/30 pb-2">
                    <input 
                      type="text" 
                      placeholder="Distance, Km" 
                      className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm font-medium py-2"
                    />
                    <MapPin size={18} className="absolute right-0 top-2 text-white/70" />
                  </div>
                </div>

                {/* Freight Selection */}
                <div className="relative border-b border-white/30 pb-2">
                  <select className="bg-transparent w-full text-white placeholder-white/70 outline-none text-sm font-medium py-2 appearance-none cursor-pointer">
                    <option className="text-black">Select Freight</option>
                    <option className="text-black">Air Freight</option>
                    <option className="text-black">Sea Freight</option>
                    <option className="text-black">Road Freight</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-0 top-2 text-white/70 pointer-events-none" />
                </div>

                {/* Submit Button */}
                <button className="w-full mt-4 bg-[#f7941d] hover:bg-[#e08316] text-white font-black py-5 uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all">
                  Free Quote! <Send size={14} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}