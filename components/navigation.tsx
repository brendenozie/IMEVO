"use client";

import React, { useState } from "react";
import { 
  Phone, Mail, Globe, Facebook, Twitter, Linkedin, 
  Instagram, Search, LayoutGrid, Truck, Menu, X, ChevronRight 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", hasSub: true },
    { name: "About", hasSub: true },
    { name: "Services", hasSub: true },
    { name: "Solutions", hasSub: true },
    { name: "Network", hasSub: true },
    { name: "News", hasSub: true },
    { name: "Contact Us", hasSub: true },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 shadow-md">
      {/* Top Bar - Desktop Only */}
      <div className="bg-[#111111] text-white text-[13px] py-3 px-6 hidden lg:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-orange-500" />
              <span className="font-semibold text-gray-300">Phone : <span className="text-white">0700 700 063 | 0700 700 049</span></span>
            </div>
            <div className="h-4 w-[1px] bg-gray-700" />
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-orange-500" />
              <span className="font-semibold text-gray-300">Email : <span className="text-white">info@imevolimited.com</span></span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer group">
              <Globe size={14} className="text-white" />
              <span className="font-semibold group-hover:text-orange-500 transition-colors">English</span>
              <span className="text-[10px] opacity-70">▼</span>
            </div>
            <div className="h-4 w-[1px] bg-gray-700" />
            <div className="flex items-center gap-4">
              <Facebook size={14} className="cursor-pointer hover:text-orange-500" />
              <Twitter size={14} className="cursor-pointer hover:text-orange-500" />
              <Linkedin size={14} className="cursor-pointer hover:text-orange-500" />
              <Instagram size={14} className="cursor-pointer hover:text-orange-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white relative">
        <div className="container mx-auto flex items-center justify-between lg:justify-start h-20 lg:h-24">
          
          {/* Slanted Logo Section */}
          <div className="relative h-full flex items-center bg-[#f7941d] px-6 lg:px-12 lg:pr-16 text-white overflow-hidden" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            <div className="flex items-center gap-2 lg:gap-3">
              <div className="bg-blue-700 rounded-full p-1.5 lg:p-2 flex items-center justify-center">
                <Truck className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl lg:text-4xl font-black italic">Imevo</span>
                <span className="text-xs font-black uppercase tracking-wide">LIMITED</span>
                {/* <span className="block text-xs lg:text-sm font-bold tracking-wide uppercase">Logistics & Supply Chain</span> */}
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex flex-grow justify-center">
            <ul className="flex items-center gap-8 text-[15px] font-bold text-gray-800 uppercase tracking-tight">
              {navLinks.map((link) => (
                <a href={`#${link.name.toLowerCase()}`} key={link.name} className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                  <li>{link.name}</li> 
                  {link.hasSub && <span className="text-xs">+</span>}
                </a>
              ))}
            </ul>
          </div>

          {/* Desktop Search & Grid */}
          <div className="hidden lg:flex items-center gap-6 px-6 border-l border-gray-100">
            <Search className="w-5 h-5 cursor-pointer hover:text-orange-500 text-gray-700" />
            <LayoutGrid className="w-6 h-6 cursor-pointer hover:text-orange-500 text-gray-800" />
          </div>

          {/* Mobile Right Icons */}
          <div className="flex lg:hidden items-center gap-4 pr-4">
            <Search className="w-5 h-5 text-gray-700" />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-gray-100 rounded-lg text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <span className="text-2xl font-black italic text-[#f7941d]">Imevo</span>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 text-gray-500"><X size={24} /></button>
              </div>

              <div className="flex-grow overflow-y-auto py-4">
                <ul className="flex flex-col">
                  {navLinks.map((link, idx) => (
                    <a href={`#${link.name.toLowerCase()}`} key={link.name} className="flex items-center justify-between px-8 py-4 text-lg font-bold text-gray-800 border-b border-gray-50 active:bg-orange-50">
                      <motion.li 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.name}
                        className="flex items-center justify-between px-8 py-4 text-lg font-bold text-gray-800 border-b border-gray-50 active:bg-orange-50"
                      >
                        {link.name}
                        {link.hasSub && <ChevronRight size={18} className="text-orange-500" />}
                      </motion.li>
                    </a>
                  ))}
                </ul>
              </div>

              {/* Mobile Footer Info */}
              <div className="p-8 bg-gray-50 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Us</p>
                    <p className="font-bold text-sm">+111 564 568 25</p>
                  </div>
                </div>
                <div className="flex justify-center gap-6 pt-4 border-t">
                  <Facebook size={20} className="text-gray-400" />
                  <Twitter size={20} className="text-gray-400" />
                  <Instagram size={20} className="text-gray-400" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}