"use client";

import { Ship, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Foots() {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Ship className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tighter">IMEVO.</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Revolutionizing global supply chains through integrated rail, road, and maritime networks. Precision-driven logistics for the modern era.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              Quick Links
            </h4>
            <ul className="space-y-4 text-slate-400 text-sm font-medium">
              {["Our Services", "Global Tracking", "Recent Projects", "Terms of Service", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              Contact Us
            </h4>
            <ul className="space-y-6 text-slate-400 text-sm">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Lusingeti Road, Number 31, Industrial Area</span>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span>0700 700 063 | 0700 700 049</span>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <span>info@imevolimited.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              Newsletter
            </h4>
            <p className="text-slate-400 text-sm mb-6">Subscribe for the latest industry insights and logistics trends.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full h-14 bg-slate-800 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-orange-500 transition-all" 
              />
              <button className="absolute right-2 top-2 h-10 px-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
            © 2026 IMEVO Solutions Inc. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}