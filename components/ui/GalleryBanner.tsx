"use client";

import React from "react";
import { Camera, Trophy, Star, Instagram, Facebook, Globe } from "lucide-react";

const GalleryBanner: React.FC = () => {
  return (
    <section className="py-8 md:py-12 bg-white font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- BANNER CONTAINER --- */}
        {/* Changed h-auto on mobile to allow content to breathe, fixed on desktop */}
        <div className="relative w-full min-h-[550px] md:h-[520px] bg-[#fafafa] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.04)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: THE VISUAL JOURNEY --- */}
          <div className="relative w-full md:w-[62%] h-[250px] md:h-full overflow-hidden">
            {/* The Diagonal Clip Path Overlay (Desktop Only) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-[#fafafa]" 
              style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 72% 100%)' }}
            ></div>
            
            <img 
              src="https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=1200" 
              alt="Tournament Moments"
              className="w-full h-full object-cover"
            />
            
            {/* Artistic Subtle Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>
            
            {/* Floating Achievement Badge on Image */}
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-8 z-20 bg-white/90 backdrop-blur-md px-3 py-2 md:px-4 md:py-2 rounded-xl border border-white/20 shadow-xl flex items-center gap-2">
               <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#bf953f]" />
               <span className="text-[9px] md:text-[10px] font-black text-[#4c1d95] uppercase tracking-widest italic">1000+ Events Directed</span>
            </div>
          </div>

          {/* --- RIGHT SIDE: BANNER CONTENT --- */}
          <div className="relative w-full md:w-[48%] md:-ml-[10%] h-auto md:h-full bg-[#fafafa] z-20 flex flex-col justify-center p-8 md:p-12 lg:p-16">
            
            <div className="space-y-6 md:space-y-8">
              {/* Top Status Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <Camera className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Visual Chronicles
              </div>

              {/* Main Heading: 3xl Mobile, 6xl Desktop */}
              <div className="space-y-0">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] md:leading-[0.85] uppercase tracking-tighter">
                  OUR <br />
                  <span className="text-[#4c1d95]">GALLERY</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base lg:text-lg leading-relaxed font-medium max-w-sm italic">
                From the halls of <span className="text-slate-900 font-bold">Andhra Loyola</span> to international arenas. Capturing the focus, the fire, and the victories of our FIDE-rated champions.
              </p>

              {/* Bottom Footer Section: Socials & Rating */}
              <div className="pt-6 md:pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-200">
                
                {/* Minimalist Social Icons */}
                <div className="flex gap-3">
                  {[Facebook, Instagram, Globe].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] hover:text-[#fcf6ba] transition-all shadow-lg active:scale-90"
                    >
                      <Icon className="w-4.5 h-4.5 md:w-5 md:h-5" />
                    </a>
                  ))}
                </div>

                {/* Rating / Accreditation */}
                <div className="flex flex-col items-start sm:items-end">
                   <div className="flex text-[#bf953f] mb-1">
                     {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 md:w-3.5 md:h-3.5" fill="currentColor" />)}
                   </div>
                   <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none">
                     National Instructor Led
                   </span>
                </div>
              </div>
            </div>

            {/* Subtle Dotted Decoration (hidden on small mobile for clarity) */}
            <div 
              className="hidden sm:block absolute top-10 right-10 w-24 h-24 opacity-10 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#4c1d95 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}
            ></div>
          </div>
        </div>

        {/* --- LOWER BAR: Academy Quick Stats --- */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
           <div className="bg-[#4c1d95] text-white p-5 rounded-2xl flex items-center justify-between group cursor-default shadow-xl shadow-purple-900/10">
              <span className="font-black uppercase tracking-widest text-[9px] md:text-[10px]">FIDE ID: 46600507</span>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#bf953f] transition-colors shrink-0">
                <Star className="w-3.5 h-3.5 text-white" />
              </div>
           </div>
           
           <div className="bg-white border border-slate-200 p-5 rounded-2xl flex items-center justify-between shadow-sm">
              <span className="font-black uppercase tracking-widest text-[9px] md:text-[10px] text-[#bf953f]">Rating: 1829 ELO</span>
              <Trophy className="w-4 h-4 md:w-4.5 md:h-4.5 text-[#4c1d95] shrink-0" />
           </div>
           
           <div className="bg-slate-900 text-white p-5 rounded-2xl flex items-center justify-between sm:col-span-2 lg:col-span-1">
              <span className="font-black uppercase tracking-widest text-[9px] md:text-[10px]">Certified Arbiter</span>
              <div className="w-2 h-2 rounded-full bg-[#bf953f] animate-pulse shrink-0"></div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default GalleryBanner;