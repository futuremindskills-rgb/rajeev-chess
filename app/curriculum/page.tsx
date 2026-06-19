import DemoBookingCTA from "@/components/demo-booking-cta";
import CoursesSection from "@/components/events-preview";
import TestimonialsSection from "@/components/testimonials-section";
import CurriculumBanner from "@/components/ui/CarriclulamBanner";
import SkillOutcomesSection from "@/components/ui/skills";
import TeachingMethodologySection from "@/components/ui/teaching";
import Curriculum from "@/components/curriculum"
export default function CarriculamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-14">
      <CurriculumBanner />
      <Curriculum/>
      <TeachingMethodologySection />
      <SkillOutcomesSection />
      <TestimonialsSection />
      <DemoBookingCTA />
    </div>
  );
}
