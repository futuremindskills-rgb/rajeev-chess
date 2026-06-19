"use client";

import React from 'react';
import { 
  Puzzle, 
  Target, 
  Brain, 
  TrendingUp,
  Sparkles,
  Gamepad2,
  CheckCircle2,
  Medal,
  Award,
  Crown
} from 'lucide-react';

export default function TeachingMethodologySection() {
  
  const methodologies = [
    {
      title: 'Tactical Pattern Recognition',
      description: 'Beyond simple puzzles, we train the brain to see "winning shapes" on the board using FIDE-standard tactical drills.',
      image: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&q=80&w=800',
      icon: <Puzzle className="w-6 h-6" />,
      features: ['2,500+ Curated Puzzles', 'Mating Net Visualization', 'Sacrificial Themes']
    },
    {
      title: 'Arbiter-Level Game Analysis',
      description: 'Leveraging Coach Rajeev’s experience as an Arbiter to analyze every move for precision and psychological depth.',
      image: '/1.avif',
      icon: <Award className="w-6 h-6" />,
      features: ['Stockfish Cloud Analysis', 'Error Pattern Tracking', 'Opening Repertoire Review']
    },
    {
      title: 'Competitive Match Simulation',
      description: 'Regular tournament-style matches with strict clock management to prepare students for State & National games.',
      image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=800',
      icon: <Gamepad2 className="w-6 h-6" />,
      features: ['Rapid & Blitz Practice', 'Tournament Etiquette', 'Score-sheet Maintenance']
    }
  ];

  const phases = [
    {
      step: 'Phase 01',
      title: 'Skill Diagnostics',
      desc: 'Evaluating current ELO and strategic blindspots.',
      icon: <Brain className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: 'Phase 02',
      title: 'Opening Repertoire',
      desc: 'Building a robust, FIDE-rated opening system.',
      icon: <Target className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: 'Phase 03',
      title: 'Endgame Mastery',
      desc: 'Precision training in theoretical endgames.',
      icon: <Medal className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: 'Phase 04',
      title: 'Tournament Entry',
      desc: 'Official ACA & FIDE rated tournament pathways.',
      icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- 1. CENTERED HEADER (Mobile Optimized) --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <Sparkles size={14} className="md:w-4 md:h-4" />
            The Grandmaster Pathway
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Our Elite Teaching <br />
            <span className="text-[#4c1d95]">Methodology</span>
          </h2>
          <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed px-2">
            A scientifically structured 4-phase approach developed by 
            <span className="text-slate-900 font-bold italic underline decoration-[#bf953f] ml-1">
              National Instructor Mandula Rajeev.
            </span>
          </p>
        </div>

        {/* --- 2. PHASE STEPPER (1 Col Mobile -> 2 Col Tablet -> 4 Col Desktop) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-20 md:mb-24">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-slate-100 transition-all duration-500 hover:bg-[#4c1d95] group hover:-translate-y-2 h-full">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#bf953f]">
                    {phase.step}
                  </span>
                  <div className="text-[#4c1d95] group-hover:text-white transition-colors">
                    {phase.icon}
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-black text-slate-900 mb-2 group-hover:text-white uppercase italic tracking-tighter">
                  {phase.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium group-hover:text-purple-200 transition-colors">
                  {phase.desc}
                </p>
              </div>
              {/* Connector Line - Hidden on Mobile/Tablet, visible only on LG */}
              {index < phases.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-slate-100 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* --- 3. VISUAL METHODOLOGY CARDS (Alternating Desktop, Stacked Mobile) --- */}
        <div className="space-y-12 md:space-y-16">
          {methodologies.map((method, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 p-2 md:p-4 rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(76,29,149,0.08)] transition-all duration-700 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 h-[300px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group">
                <img 
                  src={method.image} 
                  alt={method.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4c1d95]/40 to-transparent"></div>
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur-md p-3 md:p-4 rounded-xl md:rounded-2xl shadow-xl">
                   <div className="text-[#4c1d95] scale-75 md:scale-100">{method.icon}</div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-4 md:p-12 space-y-4 md:space-y-6">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">
                  {method.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-xl font-medium leading-relaxed">
                  {method.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 pt-2">
                  {method.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-[#bf953f] w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="text-slate-800 font-bold text-[10px] md:text-sm uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 md:pt-6">
                  <button className="flex items-center gap-2 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#4c1d95] hover:text-[#bf953f] transition-colors">
                    Explore Syllabus <Sparkles size={12} className="md:w-3.5 md:h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- 4. BOTTOM COACH'S INSIGHT (Mobile Responsive Stack) --- */}
        <div className="mt-20 md:mt-24 relative rounded-[2.5rem] md:rounded-[3rem] bg-[#050a18] p-8 md:p-16 overflow-hidden">
          {/* Decorative Gold Accents */}
          <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#bf953f]/10 rounded-bl-full"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-center lg:text-left">
            <div className="shrink-0 relative">
               <div className="w-20 h-20 md:w-32 md:h-32 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br from-[#bf953f] to-[#b38728] flex items-center justify-center shadow-2xl">
                  <Crown size={32} className="text-[#050a18] md:w-12 md:h-12" />
               </div>
               <div className="absolute -bottom-2 -right-2 bg-white text-[#050a18] text-[8px] md:text-[10px] font-black px-2 md:px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                  FIDE 1829
               </div>
            </div>
            
            <div className="space-y-3 md:space-y-4 flex-1">
              <h4 className="text-xl md:text-3xl font-black text-white uppercase italic tracking-tight">
                The Coach's Promise
              </h4>
              <p className="text-blue-100/70 text-sm md:text-xl font-medium leading-relaxed italic max-w-4xl">
                "Chess is 99% tactics, but winning is 100% psychology. My methodology doesn't just teach moves; 
                it builds the mental stamina required for the FIDE arena."
              </p>
              <p className="text-[#bf953f] font-black text-[10px] md:text-sm uppercase tracking-widest">— Mandula Rajeev, National Instructor</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}