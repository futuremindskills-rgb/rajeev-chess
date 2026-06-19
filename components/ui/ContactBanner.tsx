"use client";

import React from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Globe, MessageSquare, Star } from "lucide-react";

const ContactBanner: React.FC = () => {
  return (
    <section className="pt-6 pb-12 bg-[#fafafa]">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8">
        
        {/* --- MAIN BANNER CONTAINER --- */}
        <div className="relative w-full h-[400px] md:h-[540px] bg-white rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.06)] flex flex-col md:flex-row border border-slate-100">
          
          {/* --- LEFT SIDE: THE COMMUNICATION VISUAL --- */}
          <div className="relative w-full md:w-[65%] h-[45%] md:h-full overflow-hidden">
            {/* The Signature Diagonal Clip Path (Desktop Only) */}
            <div 
              className="absolute inset-0 z-10 hidden md:block bg-white" 
              style={{ clipPath: 'polygon(88% 0, 100% 0, 100% 100%, 72% 100%)' }}
            ></div>
            
            <img 
              src="/raj10.jpeg" 
              alt="Chess Coaching and Communication"
              className="w-full h-full object-cover"
            />
            
            {/* Soft Royal Purple Overlay */}
            <div className="absolute inset-0 bg-[#4c1d95]/10 mix-blend-multiply"></div>

            {/* Floating Contact Badge on Image */}
            <div className="absolute bottom-8 left-10 z-20 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-2xl flex items-center gap-4">
               <div className="w-10 h-10 bg-[#4c1d95] rounded-xl flex items-center justify-center text-[#bf953f]">
                  <MessageSquare size={20} />
               </div>
               <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Direct Support</p>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-tight">Talk to Coach Rajeev</p>
               </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: CONTENT SECTION --- */}
          <div className="relative w-full md:w-[45%] md:-ml-[10%] h-[55%] md:h-full bg-white z-20 flex flex-col justify-center p-8 md:p-16">
            
            <div className="space-y-6 md:space-y-8">
              {/* Prestige Badge */}
              <div className="flex items-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.4em] text-[10px] md:text-xs">
                <Globe size={14} />
                Global & Local Connectivity
              </div>

              {/* Main Heading */}
              <div className="space-y-0">
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.85] uppercase tracking-tighter">
                  GET IN <br />
                  <span className="text-[#4c1d95]">TOUCH</span>
                </h1>
              </div>

              {/* Description based on your Resume */}
              <p className="text-slate-500 text-sm md:text-lg leading-relaxed font-medium max-w-sm italic">
                "Whether you're looking for <span className="text-slate-900 font-bold">FIDE Rating Prep</span> or institutional coaching in <span className="text-slate-900 font-bold">Vijayawada</span>, we're here to guide your next move."
              </p>

              {/* Bottom Footer Section: Socials & Rating */}
              <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100">
                
                {/* Minimalist Round Social Icons matching reference */}
                <div className="flex gap-3">
                  {[Facebook, Instagram].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#" 
                      className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-[#4c1d95] hover:text-[#fcf6ba] transition-all shadow-lg active:scale-90"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>

                {/* Rating / Accreditation */}
                <div className="flex flex-col items-start sm:items-end">
                   <div className="flex text-[#bf953f] mb-1">
                     {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                     Top Rated Coach in AP
                   </span>
                </div>
              </div>
            </div>

            {/* Subtle Corner Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#bf953f]/5 rounded-bl-full -z-10"></div>
          </div>

        </div>

        {/* --- LOWER ACTION BAR: DIRECT CONTACT DATA --- */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
           {/* Phone Card */}
           <a href="tel:+919030308811" className="bg-[#4c1d95] p-6 rounded-[2rem] text-white flex items-center gap-4 group transition-all hover:shadow-xl hover:shadow-purple-900/20">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-[#bf953f] transition-colors">
                <Phone size={20} className="text-white" />
              </div>
              <div>
                 <p className="text-[9px] font-black uppercase tracking-widest text-purple-300">Call Us Directly</p>
                 <p className="font-black text-xs uppercase">+91 90303 08811</p>
              </div>
           </a>

           {/* Email Card */}
           <a href="mailto:rajeevinternationalchessclub@gmail.com" className="bg-white border border-slate-200 p-6 rounded-[2rem] flex items-center gap-4 group transition-all hover:border-purple-200">
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center group-hover:bg-[#4c1d95] transition-colors">
                <Mail size={20} className="text-[#bf953f] group-hover:text-white" />
              </div>
              <div>
                 <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">Email Inquiry</p>
                 <p className="font-black text-[10px] uppercase text-slate-900">rajeevinternationalchessclub@gmail.com</p>
              </div>
           </a>

           {/* Location Card */}
           <div className="bg-slate-900 p-6 rounded-[2rem] text-white flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center">
                <MapPin size={20} className="text-[#bf953f]" />
              </div>
              <div>
                 <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Visit Center</p>
                 <p className="font-black text-[10px] uppercase leading-tight">Loyola College, Vijayawada</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ContactBanner;