import  HeroSection  from "@/components/hero-section"
import  CoursesSection  from "@/components/events-preview"
import  DemoBookingCTA  from "@/components/demo-booking-cta"
import  TestimonialsSection  from "@/components/testimonials-section"
import  FaqSection  from "@/components/stats-section"
import  FeaturesSection  from "@/components/features-section"
import AchievementsSection from "@/components/ui/AchievementsSection"
import WhyChooseUsSection from "@/components/why-choose"
import AboutUs from "@/components/aboutus"
import Curriculum from "@/components/curriculum"
import WhyChooseUs from "@/components/ui/whyus"


export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <AboutUs/>
        <Curriculum/>
        <AchievementsSection/>
        <WhyChooseUs/>
        <TestimonialsSection />
        <FaqSection />
        <DemoBookingCTA />
      </main>
    </div>
  )
}
