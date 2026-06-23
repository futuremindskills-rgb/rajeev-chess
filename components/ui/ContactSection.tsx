"use client";

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  Trophy, 
  Globe,
  CheckCircle2
} from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    kidName: "",
    kidAge: "",
    email: "",
    phone: "",
    mode: "Online Coaching",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Inquiry: Rajeev International Chess Club*%0A` +
      `-------------------------------------------%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Kid Name:* ${formData.kidName}%0A` +
      `*Kid Age:* ${formData.kidAge}%0A` +
      `*Mode:* ${formData.mode}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/919030308811?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-[#fafafa] relative overflow-hidden font-sans">
      
      {/* Background Decorative Glows - Reduced sizes for mobile */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-[600px] md:h-[600px] bg-purple-100/50 rounded-full blur-[80px] md:blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-[400px] md:h-[400px] bg-amber-50/50 rounded-full blur-[60px] md:blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-8 max-w-[90rem] relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Connect With Excellence
          </div>
          
          {/* HEADING: 3xl Mobile, 6xl Desktop */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase italic">
            Make Your <span className="text-[#4c1d95]">Winning Move</span>
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-2">
            Talk directly to FIDE National Instructor Mandula Rajeev. 
            Whether online or in Vijayawada, we are ready to guide you.
          </p>
        </div>

        {/* --- MAIN INTERACTIVE CARD --- */}
        <div className="flex flex-col lg:flex-row rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.06)] bg-white border border-slate-100">
          
          {/* LEFT COLUMN: ACADEMY PRESTIGE INFO */}
          <div className="w-full lg:w-[40%] bg-[#4c1d95] p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10 space-y-8 md:space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Contact the Academy</h3>
                <div className="w-16 md:w-20 h-1 md:h-1.5 bg-[#bf953f]"></div>
              </div>

              <div className="space-y-6 md:space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500 shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] md:text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Direct Call</span>
                    <p className="text-lg md:text-xl font-bold">+91 90303 08811</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500 shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] md:text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Email</span>
                    <p className="text-sm md:text-base font-bold break-all">rajeevinternationalchessclub@gmail.com</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 md:gap-5 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500 shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[9px] md:text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Vijayawada Center</span>
                    <p className="text-xs md:text-sm font-bold leading-relaxed opacity-90">
                      Yes-J Centre, Loyola College,<br />
                      Beside Kaladarshini, JP Nagar,<br />
                      Vijayawada, AP 520008
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elite Stats Row */}
            <div className="relative z-10 mt-12 md:mt-16 grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                <Trophy className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f] mb-2" />
                <p className="text-[8px] md:text-[9px] font-black uppercase text-purple-200">FIDE Rating</p>
                <p className="text-base md:text-lg font-black italic leading-none">1829 ELO</p>
              </div>
              <div className="p-3 md:p-4 bg-white/5 rounded-xl md:rounded-2xl border border-white/10">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-[#bf953f] mb-2" />
                <p className="text-[8px] md:text-[9px] font-black uppercase text-purple-200">Certified</p>
                <p className="text-base md:text-lg font-black italic leading-none">NI '22</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WHATSAPP FORM */}
          <div className="w-full lg:w-[60%] p-6 md:p-12 lg:p-16 bg-white">
            <div className="mb-8 md:mb-10">
              <h3 className="text-xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight">Send a Message</h3>
              <p className="text-slate-400 text-[10px] md:text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Instant WhatsApp Response
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Parent Name */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Parent Name *</label>
                  <input name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900" placeholder="Rahul Verma" required />
                </div>
                
                {/* Kid Name */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Kid Name *</label>
                  <input name="kidName" value={formData.kidName} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900" placeholder="Aryan Verma" required />
                </div>

                {/* Age */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Kid Age *</label>
                  <input name="kidAge" type="number" value={formData.kidAge} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900" placeholder="8" required />
                </div>

                {/* Phone */}
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number *</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900" placeholder="+91 XXXXX XXXXX" required />
                </div>

                {/* Mode */}
                <div className="space-y-1.5 md:space-y-2 md:col-span-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Learning Mode</label>
                  <select name="mode" value={formData.mode} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900 appearance-none cursor-pointer">
                    <option>Online Coaching</option>
                    <option>Offline (Vijayawada Center)</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-1.5 md:space-y-2 md:col-span-2">
                  <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">Message / Goals (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-4 md:px-6 py-3 md:py-4 bg-slate-50 border border-slate-100 rounded-lg md:rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-sm md:text-base text-slate-900 resize-none" rows={4} placeholder="Tell us about your child's chess journey..." />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto bg-[#4c1d95] text-white hover:bg-[#3b1675] font-black text-xs md:text-sm uppercase tracking-widest py-4 md:py-5 px-8 md:px-12 rounded-xl md:rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-900/20 hover:-translate-y-1"
              >
                Submit via WhatsApp
                <Send className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mt-16 md:mt-20">
          <div className="flex flex-col items-center mb-6 md:mb-8 space-y-2">
            <h4 className="text-xl md:text-2xl font-black text-slate-900 uppercase italic">Locate our Academy</h4>
            <div className="w-12 md:w-16 h-1 bg-[#bf953f]"></div>
          </div>
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
            <iframe
              title="Vijayawada Loyola College Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2346747124194!2d80.64835631481373!3d16.514210988601334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fadd761c9e83%3A0xc03e6584284b12c7!2sAndhra%20Loyola%20College!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;