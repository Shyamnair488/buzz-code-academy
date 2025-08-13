import ProfessionalNavbar from "@/components/ProfessionalNavbar";
import PremiumHero from "@/components/PremiumHero";
import CourseGrid from "@/components/CourseGrid";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PricingPlans from "@/components/PricingPlans";
import ProfessionalFooter from "@/components/ProfessionalFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProfessionalNavbar />
      <PremiumHero />
      <CourseGrid />
      <TestimonialsCarousel />
      <PricingPlans />
      <ProfessionalFooter />
    </div>
  );
};

export default Index;