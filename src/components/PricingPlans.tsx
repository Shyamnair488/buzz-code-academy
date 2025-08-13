import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  X, 
  Star, 
  Crown, 
  Zap, 
  Users,
  BookOpen,
  MessageSquare,
  Award,
  Infinity
} from "lucide-react";

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginners starting their coding journey",
      price: "Free",
      period: "forever",
      icon: BookOpen,
      popular: false,
      features: [
        "5 beginner courses",
        "Basic code editor",
        "Community forum access",
        "Email support",
        "Basic certificates",
        "Self-paced learning"
      ],
      notIncluded: [
        "Live sessions",
        "1-on-1 mentorship", 
        "Advanced projects",
        "Career services",
        "Premium courses"
      ],
      buttonText: "Start Free",
      buttonVariant: "outline_premium" as const
    },
    {
      name: "Professional",
      description: "Most popular plan for serious developers",
      price: "$49",
      period: "month",
      icon: Star,
      popular: true,
      originalPrice: "$99",
      features: [
        "All 100+ premium courses",
        "Live coding sessions",
        "1-on-1 mentor sessions (2/month)",
        "Real-world projects",
        "Career placement support",
        "Priority support",
        "Industry certificates",
        "Code review sessions",
        "Interview preparation"
      ],
      notIncluded: [
        "Unlimited mentorship",
        "Private Discord access"
      ],
      buttonText: "Start Professional",
      buttonVariant: "premium" as const
    },
    {
      name: "Elite",
      description: "For ambitious developers who want everything",
      price: "$99",
      period: "month", 
      icon: Crown,
      popular: false,
      originalPrice: "$199",
      features: [
        "Everything in Professional",
        "Unlimited 1-on-1 mentorship",
        "Private Discord community",
        "Weekly group coaching",
        "Personalized learning path",
        "Job guarantee program",
        "Salary negotiation support",
        "LinkedIn profile optimization",
        "Exclusive industry events",
        "Direct recruiter connections"
      ],
      notIncluded: [],
      buttonText: "Go Elite",
      buttonVariant: "gradient" as const
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-slide-up">
          <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2">
            Simple Pricing
          </Badge>
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-balance">
            <span className="text-secondary">Choose Your</span>{" "}
            <span className="gradient-text">Learning Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade as you grow. All plans include lifetime access and our success guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.name}
                className={`premium-card border-0 relative overflow-hidden ${
                  plan.popular 
                    ? 'scale-105 shadow-2xl ring-2 ring-primary/20' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-primary text-white text-center py-3 font-semibold text-sm">
                    <Star className="w-4 h-4 inline mr-2" />
                    Most Popular Choice
                  </div>
                )}

                <CardHeader className={`space-y-6 ${plan.popular ? 'pt-16' : 'pt-8'}`}>
                  {/* Plan Icon & Name */}
                  <div className="text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center ${
                      plan.popular 
                        ? 'bg-gradient-primary text-white' 
                        : 'bg-primary/10 text-primary'
                    }`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-space-grotesk">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="text-base mt-2">
                        {plan.description}
                      </CardDescription>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center space-y-2">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl md:text-5xl font-space-grotesk font-bold gradient-text">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-muted-foreground font-medium">
                          /{plan.period}
                        </span>
                      )}
                    </div>
                    {plan.originalPrice && (
                      <div className="text-muted-foreground">
                        <span className="line-through">{plan.originalPrice}</span>
                        <Badge variant="outline" className="ml-2 border-green-200 text-green-700 bg-green-50">
                          50% OFF
                        </Badge>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3 opacity-50">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    size="lg"
                    className="w-full"
                  >
                    {plan.buttonText}
                  </Button>

                  {/* Additional Info */}
                  <div className="text-center text-sm text-muted-foreground">
                    {plan.name === "Starter" && "No credit card required"}
                    {plan.name === "Professional" && "Cancel anytime • 30-day guarantee"}
                    {plan.name === "Elite" && "Job guarantee or money back"}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-space-grotesk font-semibold text-lg">Success Guarantee</h3>
            <p className="text-muted-foreground">
              Land a job within 6 months or get your money back
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Infinity className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-space-grotesk font-semibold text-lg">Lifetime Access</h3>
            <p className="text-muted-foreground">
              Keep access to all courses and updates forever
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-space-grotesk font-semibold text-lg">Expert Community</h3>
            <p className="text-muted-foreground">
              Join 25,000+ developers in our exclusive community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;