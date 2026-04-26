import HeroSection from "@/components/sections/HeroSection";
import TelehealthSection from "@/components/sections/TelehealthSection";
import EmpathySection from "@/components/sections/EmpathySection";
import IntroSection from "@/components/sections/IntroSection";
import CompareSection from "@/components/sections/CompareSection";
import ProcessSection from "@/components/sections/ProcessSection";
import GoalSection from "@/components/sections/GoalSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SafetySection from "@/components/sections/SafetySection";
import FAQSection from "@/components/sections/FAQSection";
import PricingSection from "@/components/sections/PricingSection";
import WhyAffordableSection from "@/components/sections/WhyAffordableSection";
import DoctorSection from "@/components/sections/DoctorSection";
import LocationSection from "@/components/sections/LocationSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <TelehealthSection />
      <EmpathySection />
      <IntroSection />
      <CompareSection />
      <ProcessSection />
      <GoalSection />
      <ReviewSection />
      <SafetySection />
      <FAQSection />
      <PricingSection />
      <WhyAffordableSection />
      <DoctorSection />
      <LocationSection />
      <FinalCTASection />
    </main>
  );
}
