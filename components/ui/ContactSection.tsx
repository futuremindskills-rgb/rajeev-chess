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
  MessageSquare,
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
    <section className="py-24 bg-[#fafafa] relative overflow-hidden font-sans">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-[90rem] relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-2 text-[#bf953f] font-black uppercase tracking-[0.3em] text-xs">
            <Sparkles size={16} />
            Connect With Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight tracking-tight uppercase italic">
            Make Your <span className="text-[#4c1d95]">Winning Move</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Talk directly to FIDE National Instructor Mandula Rajeev. 
            Whether online or in Vijayawada, we are ready to guide you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row rounded-[3rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.06)] bg-white border border-slate-100">
          
          {/* LEFT COLUMN: ACADEMY PRESTIGE INFO */}
          <div className="w-full lg:w-[40%] bg-[#4c1d95] p-10 md:p-16 text-white flex flex-col justify-between relative">
            {/* Subtle Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '30px 30px' }}></div>

            <div className="relative z-10 space-y-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black uppercase italic tracking-tighter">Contact the Academy</h3>
                <div className="w-20 h-1.5 bg-[#bf953f]"></div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Direct Call</span>
                    <p className="text-xl font-bold">+91 90303 08811</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Email</span>
                    <p className="text-base font-bold break-all">rajeevinternationalchessclub@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#bf953f] border border-white/10 group-hover:bg-[#bf953f] group-hover:text-[#4c1d95] transition-all duration-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black text-purple-300 uppercase tracking-widest mb-1">Vijayawada Center</span>
                    <p className="text-sm font-bold leading-relaxed opacity-90">
                      Yes-J Centre, Loyola College,<br />
                      Beside Kaladarshini, JP Nagar,<br />
                      Vijayawada, AP 520008
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative z-10 mt-16 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <Trophy size={20} className="text-[#bf953f] mb-2" />
                <p className="text-[9px] font-black uppercase text-purple-200">FIDE Rating</p>
                <p className="text-lg font-black italic">1829 ELO</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <Globe size={20} className="text-[#bf953f] mb-2" />
                <p className="text-[9px] font-black uppercase text-purple-200">Certified</p>
                <p className="text-lg font-black italic">NI '22</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: WHATSAPP INTEGRATED FORM */}
          <div className="w-full lg:w-[60%] p-8 md:p-16 bg-white">
            <div className="mb-10">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight">Send a Message</h3>
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mt-2 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-500" /> Instant WhatsApp Response
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parent Name *</label>
                  <input name="parentName" value={formData.parentName} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900" placeholder="e.g. Rahul Verma" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Kid Name *</label>
                  <input name="kidName" value={formData.kidName} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900" placeholder="e.g. Aryan Verma" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Kid Age *</label>
                  <input name="kidAge" type="number" value={formData.kidAge} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900" placeholder="e.g. 8" required />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone Number *</label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900" placeholder="+91 XXXXX XXXXX" required />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900" placeholder="example@mail.com" />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Preferred Learning Mode</label>
                  <select name="mode" value={formData.mode} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900 appearance-none">
                    <option>Online Coaching</option>
                    <option>Offline (Vijayawada Center)</option>
                  </select>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Message / Goals (Optional)</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:border-[#4c1d95] outline-none transition-all font-bold text-slate-900 resize-none" rows={4} placeholder="Tell us about your child's chess journey..." />
                </div>
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto bg-[#4c1d95] text-white hover:bg-[#3b1675] font-black text-sm uppercase tracking-widest py-5 px-12 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-900/20 hover:-translate-y-1"
              >
                Submit via WhatsApp
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* MAP SECTION (Updated for Vijayawada) */}
        <div className="mt-20">
          <div className="flex flex-col items-center mb-8 space-y-2">
            <h4 className="text-2xl font-black text-slate-900 uppercase italic">Locate our Academy</h4>
            <div className="w-16 h-1 bg-[#bf953f]"></div>
          </div>
          <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
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