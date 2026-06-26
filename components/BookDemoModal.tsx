"use client";
import React, { useState } from "react";
import { 
  X, 
  CheckCircle, 
  Loader2, 
  Phone, 
  MapPin, 
  Trophy, 
  ShieldCheck, 
  Star, 
  Send
} from "lucide-react";
import { useDemoModal } from "@/context/DemoContext";

export default function BookDemoModal() {
  const { isOpen, closeDemoModal } = useDemoModal();
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    experience: "beginner",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const whatsappMessage = `*New Demo Booking - Rajeev International Chess Club*%0A` +
      `-------------------------------------------%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Parent Name:* ${formData.parentName}%0A` +
      `*Age:* ${formData.age}%0A` +
      `*Level:* ${formData.experience}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email}%0A` +
      `-------------------------------------------`;

    const whatsappUrl = `https://wa.me/919030308811?text=${whatsappMessage}`;

    try {
      setSubmitStatus("success");
      window.open(whatsappUrl, "_blank");

      setTimeout(() => {
        closeDemoModal();
        setSubmitStatus(null);
        setFormData({ studentName: "", parentName: "", email: "", phone: "", age: "", experience: "beginner" });
      }, 2000);
    } catch (err) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#050a18]/90 backdrop-blur-md flex items-center justify-center z-[100] p-4 sm:p-6 overflow-y-auto">
      {/* Container */}
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300 my-auto">
        
        {/* Close Button - Responsive Position */}
        <button 
          onClick={closeDemoModal} 
          className="absolute top-4 right-4 md:top-6 md:right-6 z-30 p-2 bg-slate-100/80 md:bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-slate-400 backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ==========================================
            LEFT SIDE: PRESTIGE INFO (Top on Mobile)
           ========================================== */}
        <div className="w-full md:w-[40%] bg-[#4c1d95] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shrink-0">
          {/* Subtle Dotted Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#fcf6ba] text-[10px] font-black uppercase tracking-widest">
                <Star className="w-3 h-3 fill-current" />
                Elite Academy
              </div>
              
              {/* Heading: 3xl Mobile, 4xl+ Desktop */}
              <h3 className="text-3xl lg:text-4xl xl:text-4xl font-black uppercase italic leading-[1.1] tracking-tighter">
                Start Your <br className="hidden md:block" />
                <span className="text-[#bf953f]">Grandmaster</span> <br className="hidden md:block" />
                Journey
              </h3>
            </div>

            {/* Quick Contact Icons */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#bf953f] shrink-0">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase text-purple-300 tracking-wider">Direct Call</p>
                  <p className="text-sm font-black">+91 90303 08811</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#bf953f] shrink-0">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] md:text-[10px] font-bold uppercase text-purple-300 tracking-wider">Vijayawada Center</p>
                  <p className="text-sm font-black">Loyola College Road, AP</p>
                </div>
              </div>
            </div>

            {/* Prestige Badges */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                <Trophy className="text-[#bf953f] mb-2 w-5 h-5 md:w-6 md:h-6" />
                <p className="text-[8px] md:text-[9px] font-bold uppercase text-purple-200">Peak Rating</p>
                <p className="text-xs md:text-sm font-black">1829 ELO</p>
              </div>
              <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="text-emerald-400 mb-2 w-5 h-5 md:w-6 md:h-6" />
                <p className="text-[8px] md:text-[9px] font-bold uppercase text-purple-200">Certified</p>
                <p className="text-xs md:text-sm font-black">NI Title</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10 hidden md:block">
             <p className="text-xs text-purple-200/60 italic font-medium leading-relaxed">
               "Strategize your success with India's premier FIDE-certified mentorship."
             </p>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE: FORM
           ========================================== */}
        <div className="w-full md:w-[60%] p-6 md:p-12 bg-white h-full overflow-y-auto">
          <div className="mb-6 md:mb-8">
            <h4 className="text-2xl md:text-3xl font-black text-slate-900 uppercase italic tracking-tight">Free Assessment Slot</h4>
            <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">Please provide the student details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Name</label>
                <input 
                  required 
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900"
                  placeholder="Aryan Sharma"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Parent Name</label>
                <input 
                  required 
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900"
                  placeholder="Rahul Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email"
                  required 
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp Number</label>
                <input 
                  type="tel"
                  required 
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Age</label>
                <input 
                  type="number" 
                  required
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900"
                  placeholder="7"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Skill Level</label>
                <select 
                  className="w-full px-4 md:px-5 py-3 md:py-3.5 bg-slate-50 border border-slate-100 rounded-xl md:rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-sm text-slate-900 appearance-none cursor-pointer"
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced (Rated)</option>
                </select>
              </div>
            </div>

            {submitStatus === "success" && (
              <div className="p-3 md:p-4 bg-emerald-50 text-emerald-700 rounded-xl md:rounded-2xl flex items-center gap-3 border border-emerald-100 font-bold text-xs md:text-sm">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" /> Opening WhatsApp confirmation...
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4c1d95] hover:bg-[#3b1675] text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] py-4 md:py-5 rounded-xl md:rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-purple-900/20 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Confirm Registration
                    <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </>
                )}
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-4 md:gap-6 opacity-30">
                 <div className="h-[1px] flex-grow bg-slate-300"></div>
                 <span className="text-[8px] font-black uppercase tracking-widest whitespace-nowrap">FIDE Certified Coaching</span>
                 <div className="h-[1px] flex-grow bg-slate-300"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}