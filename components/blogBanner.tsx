"use client";

import React from "react";
import { BookOpen, Newspaper, Star, Facebook, Instagram, Globe, PenTool, Trophy } from "lucide-react";

const BlogBanner: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- MAIN BANNER CONTAINER --- */}
        <div className="relative w-full min-h-[550px] md:h-[540px] bg-[#fafafa] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.05)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: THE INTELLECTUAL VISUAL --- */}
          <div className="relative w-full md:w-[65%] h-[250px] md:h-full overflow-hidden">
            {/* The Signature Diagonal Clip Path (Desktop Only) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-[#fafafa]" 
              style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 72% 100%)' }}
            ></div>
            
            <img 
              src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=1200" 
              alt="Chess Strategy and Knowledge Sharing"
              className="w-full h-full object-cover"
            />
            
            {/* Soft Royal Purple Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>

            {/* Floating Insight Badge on Image */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-10 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3 md:gap-4">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-[#4c1d95] rounded-lg md:rounded-xl flex items-center justify-center text-[#bf953f] shrink-0">
                  <PenTool className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Expert analysis</p>
                  <p className="text-xs md:text-sm font-black text-slate-900 uppercase tracking-tight">Strategy & Insights</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT SECTION --- */}
          <div className="relative w-full md:w-[45%] md:-ml-[10%] h-auto md:h-full bg-[#fafafa] z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            
            <div className="space-y-6 md:space-y-8">
              {/* Prestige Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <Newspaper className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Grandmaster Chronicles
              </div>

              {/* Main Heading: 3xl Mobile, 5xl/6xl Desktop */}
              <div className="space-y-0">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[0.85] uppercase tracking-tighter">
                  CHESS <br />
                  <span className="text-[#4c1d95]">INSIGHTS</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-sm italic">
                Master the game through weekly strategic breakdowns, tournament analysis, and <span className="text-slate-900 font-bold">Arbiter's Corner</span> by National Instructor Mandula Rajeev.
              </p>

              {/* Bottom Footer Section: Socials & Rating */}
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-200">
                
                {/* Minimalist Round Social Icons */}
                <div className="flex gap-3">
                  {[Facebook, Instagram, Globe].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] hover:text-[#fcf6ba] transition-all shadow-lg active:scale-90"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>

                {/* Rating / Accreditation */}
                <div className="flex flex-col items-start sm:items-end">
                   <div className="flex text-[#bf953f] mb-1">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" />)}
                   </div>
                   <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">
                     FIDE Certified Knowledge
                   </span>
                </div>
              </div>
            </div>

            {/* Subtle Dotted Decoration (Hidden on small mobile) */}
            <div 
              className="hidden sm:block absolute top-10 right-10 w-24 h-24 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#4c1d95 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
            ></div>
          </div>

        </div>

        {/* --- LOWER ACTION BAR: BLOG TOPICS --- */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
           {/* Arbiter Insights */}
           <div className="bg-[#4c1d95] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white flex items-center justify-between group cursor-default shadow-xl shadow-purple-900/10">
              <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-purple-200">Tournament Rules</span>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#bf953f] transition-colors shrink-0">
                <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
              </div>
           </div>

           {/* Opening Theory */}
           <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-slate-900 flex items-center justify-between">
              <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] text-[#bf953f]">Opening Masterclass</span>
              <div className="flex gap-1">
                <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-[#4c1d95]" />
              </div>
           </div>

           {/* NI Certified Updates */}
           <div className="bg-slate-900 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white flex items-center justify-between">
              <span className="font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">National Instructor Updates</span>
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse shrink-0"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default BlogBanner;