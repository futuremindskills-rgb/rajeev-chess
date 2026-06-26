"use client";

import React from 'react';
import { Trophy, Crown, Star } from 'lucide-react';

const achievementImages = [
  { id: 1, src: "/rajeev1.jpeg", alt: "Academy Achiever 1" },
  { id: 2, src: "/raj3.jpeg", alt: "Academy Achiever 2" },
  { id: 3, src: "/raj4.jpeg", alt: "Academy Achiever 3" },
  { id: 5, src: "/raj6.jpeg", alt: "Academy Achiever 5" },
  { id: 6, src: "/raj8.jpeg", alt: "Academy Achiever 6" },
   { id: 7, src: "/4.jpeg", alt: "Academy Achiever 1" },
  { id: 8, src: "/5.jpeg", alt: "Academy Achiever 2" },
  { id: 9, src: "/6.jpeg", alt: "Academy Achiever 3" },
  { id: 10, src: "/8.jpeg", alt: "Academy Achiever 4" },
  { id: 11, src: "/9.jpeg", alt: "Academy Achiever 5" },
  { id: 12, src: "/11.jpeg", alt: "Academy Achiever 6" },
  { id: 13, src: "/12.jpeg", alt: "Academy Achiever 1" },
  { id: 14, src: "/18.jpeg", alt: "Academy Achiever 2" },
  { id: 15, src: "/19.jpeg", alt: "Academy Achiever 3" },
  { id: 16, src: "/20.jpeg", alt: "Academy Achiever 4" },
  { id: 17, src: "/25.jpeg", alt: "Academy Achiever 5" },
  { id: 18, src: "/26.jpeg", alt: "Academy Achiever 6" },
  { id: 19, src: "/36.jpeg", alt: "Academy Achiever 2" },
  { id: 20, src: "/41.jpeg", alt: "Academy Achiever 3" },
  { id: 21, src: "/42.jpeg", alt: "Academy Achiever 4" },
  { id: 22, src: "/43.jpeg", alt: "Academy Achiever 5" },
  { id: 23, src: "/44.jpeg", alt: "Academy Achiever 6" },
  { id: 23, src: "/47.jpeg", alt: "Academy Achiever 6" },
];

const AchievementsSection: React.FC = () => {
  // Duplicate images for a seamless infinite loop
  const displayImages = [...achievementImages, ...achievementImages];

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4c1d95]/5 border border-[#4c1d95]/10">
              <Trophy className="text-[#bf953f] w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4c1d95]">
                Tournament Hall of Fame
              </span>
            </div>
            
            {/* Heading: 3xl Mobile, 5xl Desktop */}
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight md:leading-none">
              Elite <span className="text-[#4c1d95]">Champions</span>
            </h2>
            
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              Capturing the focus and victories of our FIDE-rated students under the mentorship of National Instructor Mandula Rajeev.
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 w-full sm:w-auto justify-center">
             <div className="text-right">
                <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ranking</p>
                <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Top 1% Academy</p>
             </div>
             <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#4c1d95] to-purple-800 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                <Crown className="w-6 h-6 md:w-7 md:h-7" />
             </div>
          </div>
        </div>

        {/* --- IMAGE-ONLY AUTO-SCROLLING CAROUSEL --- */}
        <div className="relative group">
         
          {/* Marquee Track */}
          <div className="flex w-max animate-scroll-fast group-hover:[animation-play-state:paused]">
            {displayImages.map((img, index) => (
              <div 
                key={`${img.id}-${index}`} 
                className="w-[240px] sm:w-[300px] md:w-[380px] px-2 md:px-4 shrink-0"
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(76,29,149,0.15)] hover:border-purple-200 group/img">
                  
                  {/* The Image */}
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  />
                  
                  
                  {/* Decorative Corner Icon */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover/img:opacity-100 translate-y-4 group-hover/img:translate-y-0 transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#bf953f] shadow-lg">
                        <Star className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-fast {
          animation: scroll-fast 35s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-scroll-fast {
            animation-duration: 40s; /* Faster on mobile for better engagement */
          }
        }
      `}</style>
    </section>
  );
};

export default AchievementsSection;