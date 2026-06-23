"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Trophy, Star } from "lucide-react";

const AboutBanner: React.FC = () => {
  return (
    <section className="py-8 md:py-16 bg-[#fafafa] font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- BANNER CONTAINER --- */}
        {/* Changed h-auto on mobile to prevent text overflow, kept fixed height on md+ */}
        <div className="relative w-full min-h-[550px] md:h-[500px] lg:h-[550px] bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.05)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: IMAGE --- */}
          <div className="relative w-full md:w-[60%] h-[250px] md:h-full overflow-hidden">
            {/* The diagonal white cut-out (Hidden on mobile for better visibility) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-white" 
              style={{ clipPath: 'polygon(85% 0, 100% 0, 100% 100%, 70% 100%)' }}
            ></div>
            <img 
              src="/24.jpeg" 
              alt="Rajeev International Chess Club"
              className="w-full h-full object-cover"
            />
            {/* Soft Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>
          </div>

          {/* --- RIGHT SIDE: CONTENT --- */}
          <div className="relative w-full md:w-[50%] md:-ml-[10%] lg:-ml-[5%] h-auto md:h-full bg-white z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            
            <div className="space-y-6">
              {/* Top Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Est. 2006 • Vijayawada
              </div>

              {/* Heading: 3xl Mobile, 5xl/6xl Desktop */}
              <div className="space-y-1">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] uppercase tracking-tighter">
                  ACADEMY <br />
                  <span className="text-[#4c1d95]">LEGACY</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium max-w-sm italic">
                "Led by FIDE National Instructor Mandula Rajeev, we have spent 18+ years 
                transforming students into international rated players."
              </p>

              {/* Bottom Row: Socials & Rating */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100">
                {/* Social Icons */}
                <div className="flex gap-3 md:gap-4">
                  {[Facebook, Instagram, Twitter].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] transition-all shadow-lg active:scale-95"
                    >
                      <Icon className="w-4 h-4 md:w-4.5 md:h-4.5" />
                    </a>
                  ))}
                </div>

                {/* Rating Badge */}
                <div className="flex items-center gap-2">
                   <div className="flex text-[#bf953f]">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3" fill="currentColor" />)}
                   </div>
                   <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">
                     Top Rated in AP
                   </span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element (Mobile friendly visibility) */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#bf953f]/5 rounded-bl-full -z-10"></div>
          </div>
        </div>

        {/* --- SUB-BAR INFO CARDS --- */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
           <div className="bg-[#4c1d95] p-5 md:p-6 rounded-2xl text-white flex items-center justify-between group transition-all hover:bg-[#3b1675]">
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs">FIDE ID: 46600507</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#bf953f] transition-colors shrink-0">
                <Star className="w-3.5 h-3.5 text-white" />
              </div>
           </div>
           
           <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-2xl text-slate-900 flex items-center justify-between shadow-sm">
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs text-[#bf953f]">Rating: 1829</span>
              <Trophy className="w-5 h-5 text-[#4c1d95] shrink-0" />
           </div>
           
           <div className="bg-slate-900 p-5 md:p-6 rounded-2xl text-white flex items-center justify-between sm:col-span-2 md:col-span-1">
              <span className="font-black uppercase tracking-widest text-[10px] md:text-xs">National Instructor</span>
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse shrink-0"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AboutBanner;