"use client";

import { motion } from "framer-motion";
import { Send, Play, ArrowRight, ArrowLeft, Box } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full flex items-center overflow-hidden bg-[#111]">
      {/* Background with Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/5 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
        {/* on mobile lets make the image especially its right side more visible */}
        <Image 
          src="/close-up-delivery-person-with-parcel.png" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom" 
          alt="Rail Freight and Logistics"
          fill
          priority
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-20">
        <div className="max-w-5xl space-y-6 md:space-y-8">
          
          {/* Subheader */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 text-white"
          >
            <div className="p-2 bg-[#f7941d] rounded-sm">
               <Box size={16} className="text-white fill-current" />
            </div>
            <span className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-[#f7941d]">
              Logistics & Transportation
            </span>
          </motion.div>

          {/* Main Heading - Responsive Sizing */}
          <motion.h1 
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[12vw] md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase"
          >
            IMEVO <br />
            <span className="text-transparent stroke-white stroke-2" style={{ WebkitTextStroke: '1px white' }}>
              Limited.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-200 text-base md:text-xl max-w-xl leading-relaxed font-light border-l-2 border-[#f7941d] pl-6"
          >
            Your Transport Partner All Across Kenya. We provide reliable and efficient logistics solutions tailored to your needs.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-10 pt-4"
          >
            {/* Slanted Button - Mobile Optimized */}
            {/* on click move to contact section */}
            <button
                onClick={() => {
                  const contactSection = document.getElementById("contact us");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
             className="relative group overflow-hidden h-16 px-10 bg-[#f7941d] text-white font-black text-sm uppercase transition-all transform hover:scale-105 active:scale-95 skew-x-[-12deg]">
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <span className="skew-x-[12deg] flex items-center gap-3">
                Contact Us  <Send size={18} />
              </span>
            </button>
            
            {/* Video Play Button */}
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="h-16 w-16 rounded-full border border-white/30 flex items-center justify-center text-white relative">
                <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-300" />
                <Play size={24} className="fill-white ml-1" />
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-full border border-white/50 animate-ping opacity-20" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xs uppercase tracking-widest">
                  Watch
                </span>
                <span className="text-gray-400 font-bold text-xs uppercase tracking-widest">
                  Showcase
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Sidebar - Desktop Only */}
      <div className="absolute left-6 bottom-12 hidden lg:flex flex-col gap-6 text-white/50 z-30">
        <span className="vertical-text tracking-widest text-[10px] font-bold uppercase mb-4">Follow Us</span>
        <div className="w-[1px] h-12 bg-white/20 mx-auto" />
      </div>

      {/* Navigation Controls - Refined */}
      <div className="absolute bottom-10 right-10 md:right-20 flex flex-col md:flex-row items-end md:items-center gap-8 z-30">
        {/* Pagination Info */}
        <div className="flex flex-col items-end md:items-start gap-2">
           <div className="flex items-center gap-4 text-white font-black text-2xl tracking-tighter">
              <span className="text-[#f7941d]">01</span>
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-white/40 text-sm italic">03</span>
           </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button className="h-14 w-14 border border-white/20 text-white flex items-center justify-center hover:bg-[#f7941d] hover:border-[#f7941d] transition-all rounded-sm">
            <ArrowLeft size={20} />
          </button>
          <button className="h-14 w-14 bg-[#f7941d] text-white flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-sm">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Decorative Element */}
      <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-[#f7941d]/10 rounded-full blur-3xl lg:hidden" />
      
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite alternate linear;
        }
      `}</style>
    </section>
  );
}