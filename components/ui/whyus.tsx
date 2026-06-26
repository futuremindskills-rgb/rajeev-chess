"use client";

import React from "react";
import { 
  ShieldCheck, 
  Trophy, 
  Users, 
  Globe, 
  Award, 
  Clock,
  Sparkles
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: "FIDE Certified Mentor",
      desc: "Guided by National Instructor Mandula Rajeev (FIDE ID: 46600507).",
      icon: ShieldCheck,
    },
    {
      title: "Proven 21+ Year Legacy",
      desc: "Official coach for Andhra Loyola & DPS with a decades-long success record.",
      icon: Clock,
    },
    {
      title: "1829 International Rating",
      desc: "Learn from an active rated player who knows the nuances of professional play.",
      icon: Award,
    },
    {
      title: "1000+ Tournaments Led",
      desc: "Unique insights from a FIDE Arbiter who has directed 1000+ events.",
      icon: Trophy,
    },
    {
      title: "Personalized Focus",
      desc: "Small batches ensuring every student receives grandmaster-level attention.",
      icon: Users,
    },
    {
      title: "Global Connectivity",
      desc: "Integrated pathways for state, national, and international FIDE tournaments.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* --- LEFT SIDE: THE PROFESSIONAL PORTRAIT --- */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            {/* Artistic Border Decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#bf953f]/10 rounded-full blur-3xl group-hover:bg-[#4c1d95]/10 transition-colors duration-700"></div>
            
            <div className="relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-b-4 md:border-b-8 border-r-4 md:border-r-8 border-[#4c1d95]">
              <img
                src="/5.jpeg" 
                alt="Mandula Rajeev - National Instructor"
                // Responsive image height
                className="w-full h-[400px] sm:h-[500px] lg:h-[650px] object-cover group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/70 via-transparent to-transparent"></div>
              
              {/* Vertical Name Tag - Slightly smaller on mobile */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-white">
                 <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#bf953f] mb-1">FOUNDER & CHIEF COACH</p>
                 <h4 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">M. RAJEEV</h4>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & FEATURES --- */}
          <div className="lg:col-span-7 space-y-8 md:space-y-10 order-1 lg:order-2">
            
            {/* Heading Block */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                Why Choose Us
              </div>

              {/* HEADING: 3xl Mobile, 5xl Desktop */}
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight md:leading-none uppercase italic tracking-tighter">
                The Strategic <span className="text-[#4c1d95]">Advantage</span>
              </h2>

              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                We bridge the gap between "playing chess" and "mastering strategy." 
                Our academy is built on the credentials of professional 
                international standards and a legacy of tournament excellence.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-10 gap-y-8 md:gap-y-12">
              {reasons.map((item, index) => (
                <div key={index} className="flex gap-4 md:gap-6 group">
                  {/* Icon Box */}
                  <div className="shrink-0 relative">
                    <div className="absolute top-1 left-1 w-12 h-12 md:w-14 md:h-14 bg-[#bf953f]/20 rounded-xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                    <div className="relative w-12 h-12 md:w-14 md:h-14 bg-white border-2 border-[#4c1d95] rounded-xl flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all duration-300">
                       <item.icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-base md:text-lg uppercase italic tracking-tighter group-hover:text-[#4c1d95] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-4 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accredited by:</span>
               <div className="flex gap-6">
                  <span className="text-xs md:text-sm font-black text-slate-900 italic">Andhra Chess Association</span>
                  <span className="text-xs md:text-sm font-black text-slate-900 italic">FIDE World Chess</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;