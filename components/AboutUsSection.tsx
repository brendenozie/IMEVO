"use client";

import { Send, Clock, DollarSign, Box } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-12 gap-4">
              {/* Small images column */}
              <div className="col-span-4 space-y-4">
                <div className="h-48 overflow-hidden rounded-sm">
                  <img src="/containers.jpg" alt="Containers" className="w-full h-full object-cover" />
                </div>
                <div className="h-64 overflow-hidden rounded-sm">
                  <img src="/truck-side.jpg" alt="Logistics Truck" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Main large image */}
              <div className="col-span-8">
                <div className="h-[500px] overflow-hidden rounded-sm">
                  <img src="/worker.jpg" alt="Logistics Worker" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 md:-translate-x-8">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-[#f7941d] border-[10px] border-white flex flex-col items-center justify-center text-white text-center shadow-xl ring-2 ring-blue-700">
                <span className="text-4xl md:text-5xl font-black">3+</span>
                <span className="text-[10px] md:text-xs font-bold uppercase leading-tight px-4">
                  Years Working Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#f7941d]">
                <Box size={16} className="fill-current" />
                <span className="text-sm font-bold uppercase tracking-widest">About Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                Provide Transportation Services Since 1996
              </h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat, 
                accumsan id imperdiet et, porttitor at sem. Quisque velit nisi, pretium ut lacinia in. 
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              </p>
            </div>

            {/* Action & Signature Area */}
            <div className="flex flex-wrap items-center gap-8">
              <button className="h-14 px-8 bg-[#f7941d] text-white font-bold text-sm uppercase flex items-center gap-3 hover:bg-orange-600 transition-all">
                About More <Send size={16} />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  <img src="/ceo-avatar.jpg" alt="CEO" className="w-full h-full object-cover" />
                </div>
                <img src="/signature.png" alt="Signature" className="h-10 opacity-80" />
              </div>
            </div>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-gray-100 pt-8 bg-gray-50/50 -mx-6 px-6">
              <div className="flex gap-4 p-4 border-r border-gray-200">
                <div className="text-[#f7941d] shrink-0">
                  <DollarSign size={32} className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Affordable Cost</h4>
                  <p className="text-sm text-gray-500">Mauris blandit aliquet, eget Tincidunt nibh pulvinar</p>
                </div>
              </div>
              <div className="flex gap-4 p-4">
                <div className="text-[#f7941d] shrink-0">
                  <Clock size={32} className="p-1.5 bg-white rounded-lg shadow-sm border border-gray-100" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Shot Time Delivery</h4>
                  <p className="text-sm text-gray-500">tincidunt nibh pulvinar. Sed Porttitor lectus nibh.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}