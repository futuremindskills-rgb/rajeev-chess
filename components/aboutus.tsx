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
    <section className="py-20 bg-slate-50">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        {/* Main Card Container */}
        <div className="bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden p-6 md:p-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* --- LEFT SIDE: IMAGE WITH ARTISTIC CUT --- */}
            <div className="relative group">
              {/* The rounded image shape matching the dental layout */}
              <div className="relative h-[400px] md:h-[600px] w-full rounded-t-[5rem] rounded-br-[5rem] overflow-hidden shadow-2xl">
                <img
                  src="/raj10.jpeg" // Replace with your coaching/action photo
                  alt="Mandula Rajeev Coaching"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Decorative "Chess Plus" Icon (replacing the medical cross) */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#4c1d95] rounded-2xl flex items-center justify-center shadow-2xl transform -rotate-12 group-hover:rotate-0 transition-transform">
                <Plus className="text-[#bf953f] w-12 h-12" strokeWidth={3} />
              </div>
            </div>

            {/* --- RIGHT SIDE: CONTENT --- */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#4c1d95] font-black uppercase tracking-widest text-sm">
                  <div className="w-6 h-[2px] bg-[#bf953f]"></div>
                  Why Choose Us?
                </div>

                <h2 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight">
                  When You <span className="inline-block px-4 py-1 bg-[#4c1d95] text-white rounded-xl">Need</span> Your <br />
                  <span className="inline-block px-4 py-1 bg-[#bf953f] text-[#4c1d95] rounded-xl mt-2">Best</span> Strategic Move
                </h2>

                <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                  Led by National Instructor <strong>Mandula Rajeev</strong> (FIDE 1829), we provide more than just lessons. With 18+ years of experience across premier institutions like <strong>Andhra Loyola</strong> and <strong>DPS</strong>, we craft the discipline and mental fortitude required for Grandmaster-level success.
                </p>
              </div>

              {/* --- FEATURE GRID --- */}
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10 pt-4">
                
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Zap className="text-[#4c1d95] w-8 h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Quick Mastery</h4>
                    <p className="text-slate-500 text-sm leading-snug">
                      Accelerated learning paths designed for rapid rating improvement.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Target className="text-[#4c1d95] w-8 h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Elite Accuracy</h4>
                    <p className="text-slate-500 text-sm leading-snug">
                      Precision training in endgames and tactical middle-game patterns.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <ShieldCheck className="text-[#4c1d95] w-8 h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Resilience</h4>
                    <p className="text-slate-500 text-sm leading-snug">
                      Building mental stamina to perform under high tournament pressure.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Crown className="text-[#4c1d95] w-8 h-8" />
                    <div className="w-full h-1 bg-slate-100 mt-2"></div>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 text-lg mb-1">Tournament Ready</h4>
                    <p className="text-slate-500 text-sm leading-snug">
                      Direct exposure to 1000+ tournament scenarios and arbiter insights.
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