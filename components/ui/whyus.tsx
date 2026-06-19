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
      title: "Proven 18+ Year Legacy",
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
    <section className="py-24 bg-white font-sans overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* --- LEFT SIDE: THE PROFESSIONAL PORTRAIT --- */}
          <div className="lg:col-span-5 relative group">
            {/* Artistic Border Decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#bf953f]/10 rounded-full blur-3xl group-hover:bg-[#4c1d95]/10 transition-colors duration-700"></div>
            
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-b-8 border-r-8 border-[#4c1d95]">
              <img
                src="/gallery21.jpeg" // Use your high-res portrait here
                alt="Mandula Rajeev - National Instructor"
                className="w-full h-[550px] md:h-[650px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a18]/60 via-transparent to-transparent"></div>
              
              {/* Vertical Name Tag */}
              <div className="absolute bottom-10 left-10 text-white">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#bf953f] mb-1">FOUNDER & CHIEF COACH</p>
                 <h4 className="text-3xl font-black uppercase italic tracking-tighter">M. RAJEEV</h4>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT & FEATURES --- */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Heading Block */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-xs">
                <Sparkles size={14} />
                Why Choose Us
              </div>

              <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight uppercase italic tracking-tighter">
                The Strategic <span className="text-[#4c1d95]">Advantage</span>
              </h2>

              <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                We bridge the gap between "playing chess" and "mastering strategy." 
                Our academy is built on the credentials of professional 
                international standards and a legacy of tournament excellence.
              </p>
            </div>

            {/* Feature Grid with Offset-Box Aesthetic (Matching reference Structurally) */}
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
              {reasons.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  {/* Icon with Reference-Style Background Offset */}
                  <div className="shrink-0 relative">
                    {/* The "Box" behind the icon */}
                    <div className="absolute top-1 left-1 w-14 h-14 bg-[#bf953f]/20 rounded-xl group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                    <div className="relative w-14 h-14 bg-white border-2 border-[#4c1d95] rounded-xl flex items-center justify-center text-[#4c1d95] group-hover:bg-[#4c1d95] group-hover:text-white transition-all duration-300">
                       <item.icon size={24} strokeWidth={2.5} />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-black text-slate-900 text-lg uppercase italic tracking-tighter group-hover:text-[#4c1d95] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Badge */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-4 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Accredited by:</span>
               <div className="flex gap-6">
                  <span className="text-sm font-black text-slate-900 italic">Andhra Chess Association</span>
                  <span className="text-sm font-black text-slate-900 italic">FIDE World Chess</span>
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;