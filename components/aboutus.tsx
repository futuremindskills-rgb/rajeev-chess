"use client";

import React from "react";
import { 
  Zap, 
  Target, 
  ShieldCheck, 
  Crown, 
  Plus 
} from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* Main Card Container */}
        {/* Removed overflow-hidden to allow the decorative icon to "pop" out slightly if needed, or handled via padding */}
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 p-6 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            
            {/* --- LEFT SIDE: IMAGE WITH ARTISTIC CUT --- */}
            <div className="relative group px-4 md:px-0">
              {/* Artistic Image Shape */}
              <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-t-[3rem] md:rounded-t-[5rem] rounded-br-[3rem] md:rounded-br-[5rem] overflow-hidden shadow-2xl">
                <img
                  src="/raj10.jpeg" 
                  alt="Mandula Rajeev Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Decorative "Chess Plus" Icon */}
              <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 w-16 h-16 md:w-24 md:h-24 bg-[#4c1d95] rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-transform z-10">
                <Plus className="text-[#bf953f] w-8 h-8 md:w-12 md:h-12" strokeWidth={3} />
              </div>
            </div>

            {/* --- RIGHT SIDE: CONTENT --- */}
            <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#4c1d95] font-black uppercase tracking-widest text-xs md:text-sm">
                  <div className="w-6 h-[2px] bg-[#bf953f]"></div>
                  Why Choose Us?
                </div>

                {/* HEADING: 3xl on Mobile, 5xl on Desktop */}
                <h2 className="text-2xl lg:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                  When You <span className="inline-block px-3 py-0.5 md:px-4 md:py-1 bg-[#4c1d95] text-white rounded-lg md:rounded-xl">Need</span> Your <br className="hidden sm:block" />
                  <span className="inline-block px-3 py-0.5 md:px-4 md:py-1 bg-[#bf953f] text-[#4c1d95] rounded-lg md:rounded-xl mt-2 md:mt-3">Best</span> Strategic Move
                </h2>

                <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
                  Led by National Instructor <strong>Mandula Rajeev</strong> (FIDE 1829), we provide more than just lessons. With 21+ years of experience across premier institutions, we craft the discipline and mental fortitude required for success.
                </p>
              </div>

              {/* --- FEATURE GRID --- */}
              <div className="grid sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10 pt-4">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Zap className="text-[#4c1d95] w-6 h-6 md:w-8 md:h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg mb-1">Quick Mastery</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-snug">
                      Accelerated learning paths designed for rapid rating improvement.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Target className="text-[#4c1d95] w-6 h-6 md:w-8 md:h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg mb-1">Elite Accuracy</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-snug">
                      Precision training in endgames and tactical patterns.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <ShieldCheck className="text-[#4c1d95] w-6 h-6 md:w-8 md:h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg mb-1">Resilience</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-snug">
                      Building mental stamina to perform under high pressure.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Crown className="text-[#4c1d95] w-6 h-6 md:w-8 md:h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-base md:text-lg mb-1">Tournament Ready</h4>
                    <p className="text-slate-500 text-xs md:text-sm leading-snug">
                      Exposure to 1000+ scenarios and arbiter insights.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;