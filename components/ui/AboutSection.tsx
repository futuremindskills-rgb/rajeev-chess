"use client";

import React from 'react';
import { 
  Trophy, 
  Sparkles, 
  Star,
  Globe
} from 'lucide-react';

const AboutSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          
          {/* --- LEFT COLUMN: PRESTIGE IMAGE COMPOSITION --- */}
          <div className="w-full lg:w-1/2 relative">
            {/* Reduced height on mobile to prevent massive gaps */}
            <div className="relative w-full max-w-[550px] mx-auto lg:mx-0 h-[380px] sm:h-[500px] md:h-[600px]">
              
              {/* Architectural Decorative Element */}
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-purple-50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
              
              {/* Image 1: Main Focus (Large Portrait) */}
              <div className="absolute top-0 right-0 w-[85%] h-[85%] md:h-[80%] z-10 group">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#bf953f] to-transparent rounded-[2rem] md:rounded-[3rem] opacity-20 blur group-hover:opacity-40 transition duration-1000"></div>
                <img 
                  src="/raj2.jpeg" 
                  alt="Chess Focus"
                  className="w-full h-full object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white relative z-10"
                />
              </div>

              {/* Image 2: Support Shot (Small Overlay) */}
              <div className="absolute bottom-0 left-0 w-[50%] md:w-[55%] h-[45%] md:h-[50%] z-20 group">
                <div className="w-full h-full p-1.5 md:p-2 bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative">
                  <img 
                    src="/9.jpeg" 
                    alt="Strategic Play"
                    className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[2rem]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: ACADEMY LEGACY CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 mt-4 lg:mt-0">
            
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                Legacy of Excellence
              </div>

              {/* HEADING: 3xl Mobile, 5xl Desktop */}
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 leading-[1.1] md:leading-[0.95] tracking-tight uppercase italic text-center lg:text-left">
                Strategic Mastery <br />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>Since 2006</span>
              </h2>

              <p className="text-slate-600 text-base md:text-xl font-medium leading-relaxed italic text-center lg:text-left">
                "We don't just teach the game; we cultivate the discipline of a Grandmaster. At 
                <span className="text-[#4c1d95] font-bold"> Rajeev International</span>, 21+ years of legacy 
                meets international FIDE standards."
              </p>
            </div>

            {/* Resume-Based Stat Grid */}
            <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-100">
               <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-50 flex items-center justify-center text-[#4c1d95] shrink-0">
                    <Globe className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-wider">FIDE Rating</p>
                    <p className="text-base md:text-lg font-black text-slate-900 leading-none">1829 ELO</p>
                  </div>
               </div>
               <div className="flex items-center gap-3 md:gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-amber-50 flex items-center justify-center text-[#bf953f] shrink-0">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-wider">Experience</p>
                    <p className="text-base md:text-lg font-black text-slate-900 leading-none">21+ Years</p>
                  </div>
               </div>
            </div>

            <div className="space-y-4 text-slate-500 text-sm md:text-lg font-medium text-center lg:text-left">
              <p>
                Led by National Instructor <strong>Mandula Rajeev</strong>, our academy is the official coaching partner for premier institutions like <strong>Andhra Loyola College</strong> and <strong>Delhi Public School</strong>.
              </p>
              <p>
                Having directed over 1,000 tournaments as a FIDE Arbiter, Coach Rajeev provides students with unique tactical insights and tournament psychology.
              </p>
            </div>

            {/* Founder Profile - Responsive sizing */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 md:gap-5 p-5 md:p-6 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#bf953f] rounded-full scale-110 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                <img 
                  src="/gallery21.jpeg" 
                  alt="Mandula Rajeev"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-white shadow-md relative z-10 grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 md:gap-2 mb-1">
                  <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase italic tracking-tighter">
                    Mandula Rajeev
                  </h4>
                  <div className="flex justify-center sm:justify-start text-[#bf953f]">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                  </div>
                </div>
                <p className="text-[9px] md:text-[10px] font-black text-[#4c1d95] uppercase tracking-widest mb-1.5 leading-tight">
                  National Instructor & Joint Sec. Andhra Chess Assoc.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 md:gap-3">
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase">FIDE ID: 46600507</span>
                   <div className="hidden sm:block w-1 h-1 rounded-full bg-slate-300"></div>
                   <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase">Vijayawada, India</span>
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