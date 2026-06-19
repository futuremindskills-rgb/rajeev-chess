"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Trophy, Star } from "lucide-react";

const AboutBanner: React.FC = () => {
  return (
    <section className="pt-12 pb-12 bg-[#fafafa]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- BANNER CONTAINER --- */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-white rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: IMAGE WITH DIAGONAL CLIP --- */}
          <div className="relative w-full md:w-[60%] h-[50%] md:h-full overflow-hidden">
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-white" 
              style={{ clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 70% 100%)' }}
            ></div>
            <img 
              src="/24.jpeg" 
              alt="Rajeev International Chess Club"
              className="w-full h-full object-cover"
            />
            {/* Soft Purple Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="relative w-full md:w-[45%] md:-ml-[5%] h-[50%] md:h-full bg-white z-20 flex flex-col justify-center p-8 md:p-16">
            
            <div className="space-y-6">
              {/* Top Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px]">
                <Trophy size={14} />
                Est. 2006 • Vijayawada
              </div>

              {/* Heading */}
              <div className="space-y-1">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-none uppercase tracking-tighter">
                  ACADEMY <br />
                  <span className="text-[#4c1d95]">LEGACY</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-sm italic">
                "Led by FIDE National Instructor Mandula Rajeev, we have spent 18+ years 
                transforming students into international rated players through strategic excellence."
              </p>

              {/* Bottom Row: Socials & Rating */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100">
                {/* Social Icons */}
                <div className="flex gap-4">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] transition-colors shadow-lg"
                    >
                      <Icon size={18} />
                    </a>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-2">
                   <div className="flex text-[#bf953f]">
                     {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                     Top Rated in AP
                   </span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf953f]/5 rounded-bl-full -z-10"></div>
          </div>

        </div>

        {/* --- OPTIONAL SUB-BAR (Like the second banner in your image) --- */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
           <div className="bg-[#4c1d95] p-6 rounded-2xl text-white flex items-center justify-between group cursor-default">
              <span className="font-black uppercase tracking-widest text-xs">FIDE ID: 46600507</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#bf953f] transition-colors">
                <Star size={14} className="text-white" />
              </div>
           </div>
           <div className="bg-white border border-slate-200 p-6 rounded-2xl text-slate-900 flex items-center justify-between">
              <span className="font-black uppercase tracking-widest text-xs text-[#bf953f]">Rating: 1829</span>
              <Trophy size={20} className="text-[#4c1d95]" />
           </div>
           <div className="bg-slate-900 p-6 rounded-2xl text-white flex items-center justify-between">
              <span className="font-black uppercase tracking-widest text-xs">National Instructor</span>
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBanner;