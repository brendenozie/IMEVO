"use client";

import { Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram, Search, LayoutGrid, Truck } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full font-sans">
      {/* Top Bar - Black Background */}
      <div className="bg-[#111111] text-white text-[13px] py-3 px-6 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-orange-500" />
              <span className="font-semibold text-gray-300">Phone : <span className="text-white">+111 (564) 568 25</span></span>
            </div>
            <div className="h-4 w-[1px] bg-gray-700" />
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-orange-500" />
              <span className="font-semibold text-gray-300">Email : <span className="text-white">quickhelp@gmail.com</span></span>
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
      <nav className="bg-white shadow-sm relative">
        <div className="container mx-auto flex items-center h-24">
          
          {/* Slanted Logo Section */}
          <div className="relative h-full flex items-center bg-[#f7941d] px-12 pr-16 text-white overflow-hidden" 
               style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}>
            <div className="flex items-center gap-3">
              <div className="bg-blue-700 rounded-full p-2 flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <span className="text-4xl font-black tracking-tight italic">Imevo</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-grow flex justify-center">
            <ul className="flex items-center gap-8 text-[15px] font-bold text-gray-800 uppercase tracking-tight">
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                Home <span className="text-xs">+</span>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition-colors">About</li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                Services <span className="text-xs">+</span>
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                Portfolio <span className="text-xs">+</span>
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                Pages <span className="text-xs">+</span>
              </li>
              <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors">
                News <span className="text-xs">+</span>
              </li>
              <li className="cursor-pointer hover:text-orange-500 transition-colors">Contact Us</li>
            </ul>
          </div>

          {/* Search & Grid Icons */}
          <div className="flex items-center gap-6 px-6">
            <Search className="w-5 h-5 cursor-pointer hover:text-orange-500 text-gray-700" />
            <div className="h-6 w-[1px] bg-gray-200" />
            <LayoutGrid className="w-6 h-6 cursor-pointer hover:text-orange-500 text-gray-800" />
          </div>
        </div>
      </nav>
    </header>
  );
}