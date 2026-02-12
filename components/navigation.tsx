"use client";

import { Ship, Menu, Phone } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-2 rounded-lg">
            <Ship className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter">LOGISTIK.</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
          <a href="#" className="hover:text-orange-500">Home</a>
          <a href="#" className="hover:text-orange-500">Services</a>
          <a href="#" className="hover:text-orange-500">Tracking</a>
          <a href="#" className="hover:text-orange-500">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-slate-500 mr-4">
            <Phone className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-bold">+1 (800) LOGI-PRO</span>
          </div>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-500 transition-all">
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}