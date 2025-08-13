import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import heroImage from "@/assets/hero-coding-bees.jpg";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-background to-light-grey relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-6 h-6 text-primary opacity-30 bee-fly">🐝</div>
        <div className="absolute top-32 right-20 w-8 h-8 text-primary-light opacity-40 bee-fly" style={{ animationDelay: '5s' }}>🐝</div>
        <div className="absolute bottom-40 left-1/4 w-5 h-5 text-primary-glow opacity-35 bee-fly" style={{ animationDelay: '10s' }}>🐝</div>
        
        {/* Floating Honeycomb Patterns */}
        <div className="absolute top-40 right-10 w-16 h-16 opacity-10">
          <div className="w-full h-full bg-primary rounded-lg honeycomb-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
        </div>
        <div className="absolute bottom-20 left-20 w-12 h-12 opacity-15">
          <div className="w-full h-full bg-primary-light rounded-lg honeycomb-float" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4" />
                <span>New Course: Advanced React Patterns</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="gradient-text">Buzz into</span>{" "}
                <span className="text-charcoal">Coding Excellence</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of students learning to code with our interactive platform. 
                From beginner to expert, we'll guide you through your coding journey with 
                expert instructors and hands-on projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Learning Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline_bee" size="lg">
                View Courses
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bee-shadow">
              <img 
                src={heroImage} 
                alt="Binary Bees Coding Education" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -left-4 bg-background rounded-lg p-4 shadow-lg bee-hover">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-deep-black" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Live Coding</div>
                  <div className="text-xs text-muted-foreground">Interactive Sessions</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg bee-hover">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-deep-black" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Expert Mentors</div>
                  <div className="text-xs text-muted-foreground">24/7 Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;