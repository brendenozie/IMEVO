"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import Image from "next/image";

const POSTS = [
  {
    id: 1,
    title: "Optimizing Rail Freight for Cold Chain Logistics",
    excerpt: "How new temperature-controlled rail systems are changing the game for pharmaceutical transport across Europe.",
    date: "Feb 12, 2026",
    author: "Admin",
    category: "Solutions",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800",
    featured: true
  },
  {
    id: 2,
    title: "The Rise of Autonomous Port Operations",
    date: "Feb 10, 2026",
    author: "Strategy Team",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=400",
    featured: false
  },
  {
    id: 3,
    title: "Navigating Global Trade Shifts in 2026",
    date: "Feb 08, 2026",
    author: "Market Analyst",
    category: "Market",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=400",
    featured: false
  }
];

export function BlogSection() {
  const featuredPost = POSTS.find(p => p.featured);
  const regularPosts = POSTS.filter(p => !p.featured);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-orange-500 font-black uppercase tracking-widest text-xs">
              <div className="h-px w-8 bg-orange-500" />
              <span>Industry Insights</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Latest News & <span className="text-orange-500">Articles</span>
            </h2>
          </div>
          <button className="group flex items-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white transition-all duration-300">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* --- FEATURED POST --- */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-[3rem] aspect-[16/10] mb-8 bg-slate-200">
              <Image 
                src={featuredPost?.image || "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"} 
                alt={featuredPost?.title || "Featured Post"}
                width={800}
                height={500}
                style={{ objectFit: "cover" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6 flex gap-2">
                <span className="px-4 py-2 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest rounded-xl shadow-lg">
                  {featuredPost?.category || "Category"}
                </span>
              </div>
            </div>
            <div className="space-y-4 px-2">
              <div className="flex items-center gap-6 text-slate-400 text-sm font-bold">
                <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-orange-500" /> {featuredPost?.date || "Date"}</div>
                <div className="flex items-center gap-2"><User className="w-4 h-4 text-orange-500" /> By {featuredPost?.author || "Author"}</div>
              </div>
              <h3 className="text-3xl font-black text-slate-900 group-hover:text-orange-500 transition-colors leading-tight">
                {featuredPost?.title || "Title"}
              </h3>
              <p className="text-slate-500 leading-relaxed max-w-2xl">
                {featuredPost?.excerpt || "Excerpt"}
              </p>
            </div>
          </motion.div>

          {/* --- SIDE LIST --- */}
          <div className="lg:col-span-5 space-y-8">
            {regularPosts.map((post, i) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex gap-6 p-4 rounded-[2rem] hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 bg-slate-200">
                  <Image 
                    src={post.image || "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800"} 
                    alt={post.title || "Post Image"} 
                    width={160}
                    height={160}
                    style={{ objectFit: "cover" }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-tighter text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md">
                      {post.category || "Category"}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {post.date || "Date"}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 leading-snug group-hover:text-orange-500 transition-colors">
                    {post.title || "Title"}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900 group-hover:gap-4 transition-all">
                    Read More <ArrowRight className="w-3 h-3 text-orange-500" />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Newsletter CTA Inside Blog Section */}
            <div className="mt-8 p-8 rounded-[2.5rem] bg-slate-900 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-black text-xl mb-2">Expert Logistics Weekly</h4>
                <p className="text-slate-400 text-sm mb-6">Get the latest freight trends delivered to your inbox.</p>
                <div className="flex gap-2">
                  <input type="text" placeholder="Your Email" className="bg-white/10 border-none rounded-xl px-4 py-3 text-sm text-white w-full outline-none focus:ring-1 focus:ring-orange-500 transition-all" />
                  <button className="bg-orange-500 text-white p-3 rounded-xl hover:bg-white hover:text-orange-500 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Tag className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5 -rotate-12" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}