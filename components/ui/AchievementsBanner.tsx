"use client";

import React from "react";
import { Trophy, Medal, Star, Facebook, Instagram, Globe, Award } from "lucide-react";

const AchievementBanner: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-[#fafafa] font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- MAIN BANNER CONTAINER --- */}
        <div className="relative w-full min-h-[600px] md:h-[540px] bg-white rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.06)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: THE VICTORY VISUAL --- */}
          <div className="relative w-full md:w-[65%] h-[280px] md:h-full overflow-hidden">
            {/* The Signature Diagonal Clip Path (Desktop Only) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-white" 
              style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 72% 100%)' }}
            ></div>
            
            <img 
              src="/25.jpeg" 
              alt="Chess Trophies and Victories"
              className="w-full h-full object-cover"
            />
            
            {/* Golden Hour Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4c1d95]/20 to-transparent"></div>

            {/* Floating Achievement Stat - Adjusted for mobile */}
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-10 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 rounded-xl md:rounded-2xl border border-white/20 shadow-2xl flex items-center gap-3 md:gap-4">
               <div className="w-8 h-8 md:w-10 md:h-10 bg-[#bf953f] rounded-lg md:rounded-xl flex items-center justify-center text-white shrink-0">
                  <Medal className="w-4 h-4 md:w-5 md:h-5" />
               </div>
               <div>
                  <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">State & National</p>
                  <p className="text-xs md:text-sm font-black text-[#4c1d95] uppercase">200+ Rated Players</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT SECTION --- */}
          <div className="relative w-full md:w-[45%] md:-ml-[10%] h-auto md:h-full bg-white z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            
            <div className="space-y-6 md:space-y-8">
              {/* Prestige Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Championship Records
              </div>

              {/* Main Heading: 3xl Mobile, 5xl/6xl Desktop */}
              <div className="space-y-0">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[0.85] uppercase tracking-tighter">
                  HALL OF <br />
                  <span className="text-[#4c1d95]">FAME</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium max-w-sm">
                From <span className="text-slate-900 font-bold italic">ANU University Golds</span> to <span className="text-slate-900 font-bold italic">FIDE Rated Success</span>. Celebrating 18 years of turning strategic thinkers into international winners.
              </p>

              {/* Bottom Footer Section: Socials & Verification */}
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100">
                
                {/* Minimalist Round Social Icons */}
                <div className="flex gap-3">
                  {[Facebook, Instagram, Globe].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] hover:text-[#fcf6ba] transition-all shadow-lg active:scale-90"
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
                     FIDE Certified Excellence
                   </span>
                </div>
              </div>
            </div>

            {/* Subtle Corner Decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#bf953f]/5 rounded-bl-full -z-10"></div>
          </div>
        </div>

        {/* --- LOWER ACTION BAR: ELITE STATS --- */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           <div className="bg-[#4c1d95] p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white flex items-center gap-4 group cursor-default shadow-xl shadow-purple-900/10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center group-hover:bg-[#bf953f] transition-colors shrink-0">
                 <Award className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                 <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-purple-300">FIDE Title</p>
                 <p className="font-black text-[10px] md:text-xs uppercase leading-tight">National Instructor</p>
              </div>
           </div>

           <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-50 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                 <Star className="w-5 h-5 md:w-6 md:h-6 text-[#bf953f]" fill="currentColor" />
              </div>
              <div>
                 <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400">Peak Rating</p>
                 <p className="font-black text-[10px] md:text-xs uppercase text-slate-900 leading-tight">1829 International ELO</p>
              </div>
           </div>

           <div className="bg-slate-900 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white flex items-center gap-4 shadow-xl">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl md:rounded-2xl flex items-center justify-center shrink-0">
                 <Trophy className="w-5 h-5 md:w-6 md:h-6 text-[#bf953f]" />
              </div>
              <div>
                 <p className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-slate-400">Experience</p>
                 <p className="font-black text-[10px] md:text-xs uppercase leading-tight">18+ Years Legacy</p>
              </div>
           </div>

           <div className="bg-white border-2 border-dashed border-purple-100 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center">
              <button className="flex items-center gap-2 text-[#4c1d95] font-black text-[9px] md:text-[10px] uppercase tracking-widest hover:text-[#bf953f] transition-colors">
                View Full Records <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AchievementBanner;