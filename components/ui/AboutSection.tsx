"use client";

import React from 'react';
import { 
  Trophy, 
  Award, 
  Target, 
  Sparkles, 
  ShieldCheck, 
  Star,
  Globe
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  return (
    <section className="py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: PRESTIGE IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full max-w-[600px] mx-auto lg:mx-0 h-[500px] md:h-[600px]">
              
              {/* Architectural Decorative Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              
              {/* Image 1: Main Focus (Large Portrait) */}
              <div className="absolute top-0 right-0 w-[85%] h-[80%] z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#bf953f] to-transparent rounded-[3rem] opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/raj2.jpeg" 
                  alt="Chess Focus"
                  className="w-full h-full object-cover rounded-[3rem] shadow-2xl border border-white relative z-10"
                />
              </div>

              {/* Image 2: Support Shot (Small Overlay) */}
              <div className="absolute bottom-0 left-0 w-[55%] h-[50%] z-20 group">
                <div className="w-full h-full p-2 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
                  <img 
                    src="/9.jpeg" 
                    alt="Strategic Play"
                    className="w-full h-full object-cover rounded-[2rem]"
                  />
                
                </div>
              </div>

         

            </div>
          </div>

          {/* --- RIGHT COLUMN: ACADEMY LEGACY CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-8">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
                <Sparkles size={16} />
                Legacy of Excellence
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.95] tracking-tight uppercase italic">
                Strategic Mastery <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>Since 2006</span>
              </h2>

              <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed italic">
                "We don't just teach the game; we cultivate the discipline of a Grandmaster. At 
                <span className="text-[#4c1d95] font-bold"> Rajeev International</span>, 18+ years of legacy 
                meets international FIDE standards."
              </p>
            </div>

            {/* Resume-Based Stat Grid */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-[#4c1d95]">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase">FIDE Rating</p>
                    <p className="text-lg font-black text-slate-900 leading-none">1829 ELO</p>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-[#bf953f]">
                    <Trophy size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-400 uppercase">Experience</p>
                    <p className="text-lg font-black text-slate-900 leading-none">18+ Years</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4 text-slate-500 text-base md:text-lg font-medium">
              <p>
                Led by National Instructor <strong>Mandula Rajeev</strong>, our academy is the official coaching partner for premier institutions like <strong>Andhra Loyola College</strong> and <strong>Delhi Public School</strong>.
              </p>
              <p>
                Having directed over 1,000 tournaments as a FIDE Arbiter, Coach Rajeev provides students with unique tactical insights and tournament psychology that you won't find in standard coaching programs.
              </p>
            </div>

            {/* Founder Profile - Detailed and Prestigious */}
            <div className="flex items-center gap-5 p-6 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="relative">
                <div className="absolute inset-0 bg-[#bf953f] rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img 
                  src="/gallery21.jpeg" 
                  alt="Mandula Rajeev"
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md relative z-10 grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-xl font-black text-slate-900 uppercase italic tracking-tighter">
                    Mandula Rajeev
                  </h4>
                  <div className="flex text-[#bf953f]">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>
                </div>
                <p className="text-[10px] font-black text-[#4c1d95] uppercase tracking-widest mb-1">
                  National Instructor & Joint Sec. Andhra Chess Assoc.
                </p>
                <div className="flex items-center gap-3">
                   <span className="text-[10px] font-bold text-slate-400 uppercase">FIDE ID: 46600507</span>
                   <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                   <span className="text-[10px] font-bold text-slate-400 uppercase">Vijayawada, India</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 5s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default AboutSection;