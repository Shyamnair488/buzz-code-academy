import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, Clock, TrendingUp } from "lucide-react";
import premiumHero from "@/assets/premium-hero.jpg";

const PremiumHero = () => {
  return (
    <section className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-background via-accent/30 to-background relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 hero-grid opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-slide-up">
            {/* Announcement */}
            <div className="inline-flex items-center space-x-3 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium animate-shimmer">
              <Star className="w-4 h-4 fill-current" />
              <span>Rated #1 Coding Education Platform 2024</span>
              <TrendingUp className="w-4 h-4" />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-space-grotesk font-bold leading-[1.1] text-balance">
                <span className="text-secondary">Master</span>{" "}
                <span className="gradient-text">Professional</span>{" "}
                <span className="text-secondary">Coding</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Join elite developers worldwide. Learn cutting-edge technologies from industry experts 
                with hands-on projects and personalized mentorship.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="xl" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline_premium" size="xl" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-gradient-primary rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">25,000+</span> Active Students
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">(2,450 reviews)</span>
              </div>
            </div>
          </div>

          {/* Hero Image & Stats */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={premiumHero} 
                alt="Professional Coding Education" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Stats Cards */}
            <div className="absolute -top-6 -left-6 premium-card rounded-2xl p-6 bg-white animate-float">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-space-grotesk font-bold text-2xl">95%</div>
                  <div className="text-sm text-muted-foreground">Job Placement Rate</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 premium-card rounded-2xl p-6 bg-white animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-space-grotesk font-bold text-2xl">12 Weeks</div>
                  <div className="text-sm text-muted-foreground">Average Completion</div>
                </div>
              </div>
            </div>

            {/* Additional floating element */}
            <div className="absolute top-1/2 -left-12 premium-card rounded-xl p-4 bg-white animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-center">
                <div className="font-space-grotesk font-bold text-lg gradient-text">$125K+</div>
                <div className="text-xs text-muted-foreground">Avg. Salary</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="space-y-2">
            <div className="font-space-grotesk font-bold text-3xl md:text-4xl gradient-text">500+</div>
            <div className="text-muted-foreground font-medium">Expert Instructors</div>
          </div>
          <div className="space-y-2">
            <div className="font-space-grotesk font-bold text-3xl md:text-4xl gradient-text">100+</div>
            <div className="text-muted-foreground font-medium">Premium Courses</div>
          </div>
          <div className="space-y-2">
            <div className="font-space-grotesk font-bold text-3xl md:text-4xl gradient-text">50+</div>
            <div className="text-muted-foreground font-medium">Partner Companies</div>
          </div>
          <div className="space-y-2">
            <div className="font-space-grotesk font-bold text-3xl md:text-4xl gradient-text">24/7</div>
            <div className="text-muted-foreground font-medium">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;