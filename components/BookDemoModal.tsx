"use client";
import React, { useState } from "react";
import { 
  X, 
  CheckCircle, 
  Loader2, 
  Phone, 
  Mail, 
  MapPin, 
  Trophy, 
  ShieldCheck, 
  Star, 
  Send,
  Globe
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
      // Optional: Log to your sheets/backend
      setSubmitStatus("success");
      
      // Open WhatsApp
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
    <div className="fixed inset-0 bg-[#050a18]/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 md:p-6">
      <div className="bg-white rounded-[2.5rem] w-full max-w-5xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row relative animate-in fade-in zoom-in duration-300 max-h-[95vh]">
        
        {/* Close Button */}
        <button 
          onClick={closeDemoModal} 
          className="absolute top-6 right-6 z-20 p-2 bg-slate-100 hover:bg-red-50 hover:text-red-500 rounded-full transition-colors text-slate-400"
        >
          <X size={20} />
        </button>

        {/* ==========================================
            LEFT SIDE: PRESTIGE CONTACT DETAILS
           ========================================== */}
        <div className="w-full md:w-[40%] bg-[#4c1d95] p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between">
          {/* Subtle Dotted Background */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#fff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}></div>

          <div className="relative z-10 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#fcf6ba] text-[10px] font-black uppercase tracking-widest">
                <Star size={12} fill="currentColor" />
                Elite Academy
              </div>
              <h3 className="text-3xl font-black uppercase italic leading-none tracking-tighter">
                Start Your <br />
                <span className="text-[#bf953f]">Grandmaster</span> <br />
                Journey
              </h3>
            </div>

            {/* Quick Contact Icons */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#bf953f]">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-purple-300 tracking-wider">Direct Call</p>
                  <p className="text-sm font-black">+91 90303 08811</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#bf953f]">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-purple-300 tracking-wider">Vijayawada Center</p>
                  <p className="text-sm font-black">Loyola College Road, AP</p>
                </div>
              </div>
            </div>

            {/* Prestige Badges */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <Trophy className="text-[#bf953f] mb-2" size={20} />
                <p className="text-[9px] font-bold uppercase text-purple-200">Peak Rating</p>
                <p className="text-sm font-black">1829 ELO</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <ShieldCheck className="text-emerald-400 mb-2" size={20} />
                <p className="text-[9px] font-bold uppercase text-purple-200">Certified</p>
                <p className="text-sm font-black">NI Title</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
             <p className="text-xs text-purple-200/60 italic font-medium leading-relaxed">
               "Strategize your success with India's premier FIDE-certified mentorship."
             </p>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE: ENROLLMENT FORM
           ========================================== */}
        <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto">
          <div className="mb-8">
            <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tight">Free Assessment Slot</h4>
            <p className="text-slate-500 text-sm font-medium mt-1">Please provide the student details below.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Name</label>
                <input 
                  required 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
                  placeholder="Aryan Sharma"
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Parent Name</label>
                <input 
                  required 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
                  placeholder="Rahul Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                <input 
                  type="email"
                  required 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
                  placeholder="example@mail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">WhatsApp Number</label>
                <input 
                  type="tel"
                  required 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Student Age</label>
                <input 
                  type="number" 
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
                  placeholder="e.g. 7"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Skill Level</label>
                <select 
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#4c1d95] focus:bg-white transition-all font-bold text-slate-900"
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
              <div className="p-4 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center gap-3 border border-emerald-100 font-bold text-sm">
                <CheckCircle size={18} /> Opening WhatsApp for confirmation...
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#4c1d95] hover:bg-[#3b1675] text-white font-black text-sm uppercase tracking-[0.2em] py-5 rounded-2xl transition-all disabled:opacity-50 flex items-center justify-center gap-3 shadow-xl shadow-purple-900/20 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    Confirm Registration
                    <Send size={16} />
                  </>
                )}
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-6 opacity-30">
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