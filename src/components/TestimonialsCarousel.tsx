import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior Software Engineer at Google",
      company: "Google",
      image: "👩‍💻",
      rating: 5,
      text: "Binary Bees transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google. The curriculum is perfectly aligned with industry needs.",
      course: "Full-Stack Development",
      salary: "$180k → $280k"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "AI/ML Engineer at Tesla",
      company: "Tesla",
      image: "👨‍🔬",
      rating: 5,
      text: "The AI & ML program at Binary Bees is exceptional. Real-world projects and cutting-edge curriculum gave me the skills to transition from finance to tech and join Tesla's AI team.",
      course: "AI & Machine Learning",
      salary: "$90k → $220k"
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "Mobile App Lead at Spotify",
      company: "Spotify",
      image: "👩‍🎨",
      rating: 5,
      text: "From zero coding experience to leading mobile development at Spotify. Binary Bees' supportive community and practical approach made this incredible journey possible.",
      course: "Mobile Development",
      salary: "$45k → $195k"
    },
    {
      id: 4,
      name: "David Kim",
      role: "DevOps Architect at Netflix",
      company: "Netflix",
      image: "👨‍💼",
      rating: 5,
      text: "The Cloud & DevOps program equipped me with skills to scale systems for millions of users. Now I'm architecting infrastructure at Netflix. Best investment I've ever made.",
      course: "Cloud & DevOps",
      salary: "$75k → $250k"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-6 mb-16 animate-slide-up">
          <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10 px-4 py-2">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold">
            <span className="gradient-text">Life-Changing</span>{" "}
            <span className="text-white">Results</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of successful graduates who've transformed their careers with Binary Bees
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <Card className="premium-card bg-white/5 backdrop-blur-sm border-white/10 animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Quote & Text */}
                <div className="md:col-span-2 space-y-6">
                  <Quote className="w-12 h-12 text-primary" />
                  
                  <blockquote className="text-xl md:text-2xl leading-relaxed font-medium text-white">
                    "{current.text}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                {/* Profile */}
                <div className="text-center md:text-left space-y-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center text-3xl mx-auto md:mx-0">
                    {current.image}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-space-grotesk font-bold text-white">
                      {current.name}
                    </h4>
                    <p className="text-primary font-medium">{current.role}</p>
                    <p className="text-white/60 text-sm">{current.company}</p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                      {current.course}
                    </Badge>
                    <div className="text-sm text-white/80">
                      Salary Growth: <span className="text-primary font-semibold">{current.salary}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text">95%</div>
            <div className="text-white/80">Job Placement Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text">$125k</div>
            <div className="text-white/80">Average Salary</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text">25k+</div>
            <div className="text-white/80">Graduates</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-space-grotesk font-bold gradient-text">4.9★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;