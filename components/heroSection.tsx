"use client";

import { motion } from "framer-motion";
import { Send, Play, ArrowRight, ArrowLeft, Box } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background with Darkened Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image 
          src="/close-up-delivery-person-with-parcel.jpg" 
          className="w-full h-full object-cover" 
          alt="Rail Freight and Logistics"
          width={1920}
          height={1080}
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl space-y-6">
          {/* Subheader */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-white"
          >
            <Box size={18} className="text-[#f7941d] fill-[#f7941d]" />
            <span className="text-sm font-bold uppercase tracking-wider">
              We&apos;re Provide Best Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white leading-[0.9] tracking-tight uppercase"
          >
            Rail Freight <br />
            <span className="text-white">And Logistics</span>
          </motion.h1>

          {/* Description */}
          <p className="text-gray-100 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Nulla quis lorem ut libero malesuada feugiat. Donec sollicitudin malesuada. 
            Curabitur arcu erat, accumsan id imperdiet, porttitor at sem. Mauris aliquet.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-8 pt-4">
            <button className="h-16 px-8 bg-[#f7941d] text-white font-black text-sm uppercase flex items-center gap-3 hover:bg-[#e08316] transition-all transform skew-x-[-10deg]">
              <span className="skew-x-[10deg] flex items-center gap-2">
                Free Quote! <Send size={16} />
              </span>
            </button>
            
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="h-14 w-14 rounded-full bg-blue-700/80 flex items-center justify-center text-white ring-8 ring-blue-900/30 group-hover:scale-110 transition-transform">
                <Play size={20} className="fill-current ml-1" />
              </div>
              <span className="text-white font-bold text-sm uppercase border-b-2 border-white tracking-widest pb-1">
                Watch Video
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right-side Navigation Arrows */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 z-30">
        <button className="h-14 w-14 rounded-full bg-[#f7941d] text-white flex items-center justify-center hover:bg-white hover:text-[#f7941d] transition-all">
          <ArrowRight size={20} />
        </button>
        <button className="h-14 w-14 rounded-full bg-[#f7941d] text-white flex items-center justify-center hover:bg-white hover:text-[#f7941d] transition-all">
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Bottom Slider Pagination Indicator */}
      <div className="absolute bottom-0 right-0 bg-white px-16 py-10 hidden md:block">
        <div className="flex items-center gap-4 text-gray-800 font-bold">
          <span>03</span>
          <div className="w-48 h-[2px] bg-gray-200 relative">
            <div className="absolute top-0 left-0 h-full w-2/3 bg-[#f7941d]" />
          </div>
          <span>03</span>
        </div>
      </div>
    </section>
  );
}