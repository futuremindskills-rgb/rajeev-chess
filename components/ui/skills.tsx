"use client";

import React from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Trophy,
  CheckCircle2,
  Star,
  Zap,
  Crown,
  ChevronRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function SkillOutcomesSection() {
  const outcomes = [
    {
      title: 'Cognitive Superiority',
      description: 'Sharpening logic and pattern recognition skills that elevate academic performance in premier schools.',
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-purple-50',
      milestones: ['Visual Calculation', 'Impulse Control', 'Critical Logic', 'Memory Depth'],
      stat: '90% Cognitive Retention',
    },
    {
      title: 'Strategic Foresight',
      description: 'Training students to think 5-10 moves ahead, a skill mastered by Coach Rajeev over 21+ years.',
      icon: <Target className="w-8 h-8" />,
      color: 'bg-amber-50',
      milestones: ['Prophylactic Thinking', 'Resource Management', 'Positional Depth', 'Risk Evaluation'],
      stat: 'Master Level Planning',
    },
    {
      title: 'ELO Acceleration',
      description: 'A systematic approach to climbing FIDE rating levels, targeting the 1800+ ELO international bracket.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-purple-50',
      milestones: ['FIDE Rating Prep', 'Tournament Tactics', 'Endgame Precision', 'Opening Repertoire'],
      stat: '+200 Avg. Rating Gain',
    },
    {
      title: 'Championship Mindset',
      description: 'Handling high-pressure environments, inspired by our 1000+ directed tournament experiences.',
      icon: <Trophy className="w-8 h-8" />,
      color: 'bg-amber-50',
      milestones: ['Pressure Resilience', 'Clock Discipline', 'Sportsmanship', 'Mental Stamina'],
      stat: 'Tournament Readiness',
    },
  ];

  const roadmap = [
    {
      timeframe: 'The Opening',
      stage: 'Month 01',
      desc: 'Foundation & Principles',
      items: ['Piece Harmony', 'Basic Checkmates', 'Notation Skills'],
      icon: <Star className="text-blue-500" />,
    },
    {
      timeframe: 'The Middlegame',
      stage: 'Month 03',
      desc: 'Tactical Awareness',
      items: ['Combination Motifs', 'Pawn Structures', 'Rating Entry'],
      icon: <Zap className="text-amber-500" />,
    },
    {
      timeframe: 'The Endgame',
      stage: 'Month 06',
      desc: 'Positional Mastery',
      items: ['Technical Endings', 'State Level Prep', 'Rating Stability'],
      icon: <ShieldCheck className="text-emerald-500" />,
    },
    {
      timeframe: 'The Victory',
      stage: 'Year 1+',
      desc: 'International Rated',
      items: ['FIDE Rated Status', 'National Qualifiers', 'Elite Mentoring'],
      icon: <Crown className="text-[#bf953f]" />,
    },
  ];

  return (
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- 1. CENTERED HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            The Blueprint of Excellence
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-[0.95] tracking-tight">
            Grandmaster <span className="text-[#4c1d95]">Outcomes</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Measurable progress guided by <span className="text-slate-900 font-bold italic">National Instructor Mandula Rajeev</span>. We don't just teach chess; we build international champions.
          </p>
        </div>

        {/* --- 2. OUTCOMES GRID (8xl width) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {outcomes.map((outcome, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(76,29,149,0.1)] transition-all duration-500 hover:-translate-y-3"
            >
              {/* Icon with Hover Glow */}
              <div className={`w-16 h-16 rounded-2xl ${outcome.color} flex items-center justify-center text-[#4c1d95] mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {outcome.icon}
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase italic tracking-tighter">
                {outcome.title}
              </h3>
              <p className="text-slate-500 mb-8 text-sm font-medium leading-relaxed">
                {outcome.description}
              </p>

              {/* Milestones List */}
              <div className="space-y-3 mb-8">
                {outcome.milestones.map((milestone, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#bf953f]" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">{milestone}</span>
                  </div>
                ))}
              </div>

              {/* Pro-Stat Badge */}
              <div className="pt-5 border-t border-slate-50">
                <p className="text-[10px] font-black text-[#4c1d95] uppercase tracking-widest">
                  {outcome.stat}
                </p>
              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute top-6 right-6 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="text-[#bf953f]" />
              </div>
            </div>
          ))}
        </div>

        {/* --- 3. THE 12-MONTH ROADMAP (Centered) --- */}
        <div className="mb-24">
          <div className="text-center mb-16">
             <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase italic">The Journey to FIDE 1800+</h3>
             <div className="w-24 h-1 bg-[#bf953f] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {roadmap.map((step, idx) => (
               <div key={idx} className="relative p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <span className="text-[10px] font-black text-[#bf953f] uppercase tracking-widest">{step.stage}</span>
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-1 tracking-tight uppercase">{step.timeframe}</h4>
                  <p className="text-[#4c1d95] font-bold text-xs uppercase mb-6">{step.desc}</p>
                  
                  <ul className="space-y-2">
                    {step.items.map((item, i) => (
                      <li key={i} className="text-[11px] font-bold text-slate-500 uppercase flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>
        </div>

        {/* --- 4. PRESTIGE STATS BANNER --- */}
        <div className="relative bg-[#050a18] rounded-[3.5rem] p-10 md:p-16 overflow-hidden text-white shadow-2xl">
          {/* Subtle Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px]"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-12 items-center text-center">
            <div className="space-y-2 border-r border-white/5 last:border-0">
              <p className="text-5xl font-black text-[#bf953f] italic">1829</p>
              <p className="text-purple-200 font-black text-xs uppercase tracking-widest">Peak FIDE Rating</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Coach Mandula Rajeev</p>
            </div>
            <div className="space-y-2 border-r border-white/5 last:border-0">
              <p className="text-5xl font-black text-white italic">1000+</p>
              <p className="text-purple-200 font-black text-xs uppercase tracking-widest">Tournaments Directed</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">Official Arbiter Experience</p>
            </div>
            <div className="space-y-2 last:border-0">
              <p className="text-5xl font-black text-[#bf953f] italic">21+</p>
              <p className="text-purple-200 font-black text-xs uppercase tracking-widest">Years of Legacy</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase">From Loyola to National Pro</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}