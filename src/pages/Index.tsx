import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CourseHighlights from "@/components/CourseHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CourseHighlights />
      <WhyChooseUs />
      <AboutPreview />
      <Footer />
    </div>
  );
};

export default Index;
