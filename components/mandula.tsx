"use client";

import React from "react";
import { 
  ShieldCheck, 
  Award, 
  Globe, 
  CheckCircle2, 
  Search
} from "lucide-react";

const CertificationSection: React.FC = () => {
  const goldGradient = "from-[#bf953f] via-[#d4af37] to-[#b38728]";

  return (
    // Reduced padding from py-24 to py-12/py-20
    <section className="py-12 md:py-20 bg-white overflow-hidden font-sans">
      <div className="max-w-[85rem] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="w-full lg:w-1/2 space-y-6 order-2 lg:order-1">
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-[#4c1d95] font-black uppercase tracking-[0.3em] text-[10px]">
                <Globe className="w-3.5 h-3.5" />
                Global Authority
              </div>

              {/* HEADING: 3xl Mobile, 6xl Desktop */}
              <h2 className="text-3xl lg:text-5xl xl:text-6xl font-black text-slate-900 leading-[1.1] uppercase italic tracking-tighter text-center lg:text-left">
                FIDE <span className={`text-transparent bg-clip-text bg-gradient-to-r ${goldGradient}`}>Arbiter</span> <br className="hidden lg:block" />
                Certification
              </h2>

              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed text-center lg:text-left max-w-xl mx-auto lg:mx-0">
                Mandula Rajeev is officially recognized by the <strong>International Chess Federation (FIDE)</strong> as a certified Arbiter since 2022.
              </p>
            </div>

            {/* Why This Matters Grid - Compact Version */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { title: "Rule Mastery", icon: ShieldCheck },
                { title: "Global Pathway", icon: Globe },
                { title: "Elite Ethics", icon: Award },
                { title: "Rated Matches", icon: Search }
              ].map((item, i) => (
                <div key={i} className="p-3 md:p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-300 group">
                  <item.icon className="w-5 h-5 text-[#bf953f] mb-2 group-hover:scale-110 transition-transform" />
                  <h4 className="text-[11px] md:text-xs font-black text-slate-900 uppercase tracking-tight">{item.title}</h4>
                </div>
              ))}
            </div>

            {/* Verification Info */}
            <div className="pt-5 border-t border-slate-100 flex flex-wrap justify-center lg:justify-start items-center gap-4 md:gap-6">
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">FIDE ID: 46600507</span>
               </div>
               <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span className="text-[9px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Awarded 2022</span>
               </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE CERTIFICATE VISUAL --- */}
          <div className="w-full lg:w-1/2 relative order-1 lg:order-2">
            {/* Capped the max-width to keep it balanced */}
            <div className="relative max-w-[420px] lg:max-w-[480px] mx-auto group">
              
              {/* Refined Aura Effect */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#bf953f] to-[#4c1d95] rounded-[1.5rem] md:rounded-[2rem] opacity-10 blur-xl"></div>
              
              <div className="relative bg-white p-2 rounded-[1.2rem] md:rounded-[1.8rem] border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative rounded-[0.8rem] md:rounded-[1.2rem] overflow-hidden">
                  <img 
                    src="/fide.jpeg" 
                    alt="Mandula Rajeev FIDE Arbiter Certificate"
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Floating Badge - Smaller and More Balanced */}
                <div className="absolute top-4 right-4 bg-[#050a18]/95 backdrop-blur-md px-3 py-2 rounded-lg md:rounded-xl border border-white/20 shadow-xl">
                   <div className="flex items-center gap-2">
                      <div className="w-7 h-7 md:w-8 md:h-8 bg-[#bf953f] rounded flex items-center justify-center text-white shrink-0">
                         <Award className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <div>
                        <p className="text-[#fcf6ba] text-[7px] font-black uppercase tracking-widest leading-none mb-0.5">Verified</p>
                        <p className="text-white text-[9px] font-black uppercase tracking-tighter">FIDE Official</p>
                      </div>
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

export default CertificationSection;