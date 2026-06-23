"use client";

import React from 'react';
import { Trophy, Star, ShieldCheck, Crown, ArrowUpRight } from 'lucide-react';

interface Achiever {
  id: number;
  name: string;
  rating: string;
  image: string;
  achievement: string;
  rank: string;
}

const achievers: Achiever[] = [
  {
    id: 1,
    name: "Paritosh Dhanaraju",
    rating: "1775",
    image: "/paritosh.jpeg",
    achievement: "International Tournament Brilliance",
    rank: "Elite"
  },
  {
    id: 2,
    name: "Manomay Sharma",
    rating: "1617",
    image: "/manmoy.jpeg",
    achievement: "Competitive Rated Performance",
    rank: "Pro"
  },
  {
    id: 3,
    name: "Ivaan Bansal",
    rating: "1600",
    image: "/ivaan.jpeg",
    achievement: "Consistent Rated Progress",
    rank: "Master"
  },
  {
    id: 4,
    name: "Atharv Singh",
    rating: "1554",
    image: "/athar.jpeg",
    achievement: "Steady Competitive Rise",
    rank: "Rising"
  }
];

const AchievementsSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  return (
    <section className="py-16 md:py-24 bg-slate-50 overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between mb-12 md:mb-20 gap-8">
          <div className="text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4c1d95]/5 border border-[#4c1d95]/10">
              {/* FIXED: Removed md:size, used className */}
              <Trophy className="text-[#bf953f] w-4 h-4" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4c1d95]">
                Tournament Hall of Fame
              </span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-tight md:leading-none">
              Elite <span className="text-[#4c1d95]">Performance</span>
            </h2>
            
            <p className="text-slate-500 text-base md:text-lg font-medium max-w-xl mx-auto lg:mx-0">
              Showcasing the FIDE-rated milestones achieved by our students under the mentorship of National Instructor Mandula Rajeev.
            </p>
          </div>

          <div className="flex items-center gap-4 md:gap-6 bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100 w-full sm:w-auto justify-center">
             <div className="text-right">
                <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Ranking</p>
                <p className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Top 1% Academy</p>
             </div>
             <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#4c1d95] to-purple-800 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0">
                {/* FIXED: Responsive icon using Tailwind classes */}
                <Crown className="w-6 h-6 md:w-7 md:h-7" />
             </div>
          </div>
        </div>

        {/* --- ACHIEVERS GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {achievers.map((player) => (
            <div 
              key={player.id} 
              className="group relative bg-white rounded-[2.5rem] md:rounded-[3rem] p-3 md:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_40px_80px_rgba(76,29,149,0.12)] transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-4 md:mb-6 shadow-inner">
                <img 
                  src={player.image} 
                  alt={player.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <div className="bg-white/90 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-full flex items-center gap-1.5 md:gap-2 shadow-xl border border-white/50">
                    {/* FIXED: Responsive icon using Tailwind classes */}
                    <Star className="text-[#bf953f] fill-[#bf953f] w-2.5 h-2.5 md:w-3 md:h-3" />
                    <span className="text-[9px] md:text-[10px] font-black text-[#4c1d95] uppercase tracking-tighter">
                      {player.rank}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-3 md:px-4 pb-3 md:pb-4 space-y-3 md:space-y-4 flex-grow flex flex-col">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-black text-slate-900 group-hover:text-[#4c1d95] transition-colors uppercase tracking-tight leading-tight">
                      {player.name}
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-bold text-slate-400 italic">
                      {player.achievement}
                    </p>
                  </div>
                  <div className="p-1.5 md:p-2 rounded-lg bg-slate-50 text-slate-300 group-hover:text-[#bf953f] transition-colors shrink-0">
                    {/* FIXED: Responsive icon using Tailwind classes */}
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>

                <div className="mt-auto relative bg-slate-50 p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-100 overflow-hidden">
                   <div className="absolute top-0 left-0 w-1 md:w-1.5 h-full bg-[#bf953f]" />
                   <p className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Official FIDE Rating</p>
                   <div className="flex items-baseline gap-1">
                     <span className={`text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>
                        {player.rating}
                     </span>
                     <span className="text-[9px] md:text-[10px] font-black text-[#4c1d95]">ELO</span>
                   </div>
                </div>
              </div>

              <div className="hidden md:block absolute -bottom-2 -right-2 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity rotate-12 pointer-events-none">
                 <ShieldCheck size={80} className="text-[#4c1d95]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;