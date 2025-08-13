import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  GraduationCap, 
  Video, 
  Clock, 
  HeadphonesIcon,
  Trophy,
  Users,
  Code2,
  Lightbulb
} from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of real-world experience",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Live Classes",
      description: "Interactive live sessions with real-time Q&A and hands-on coding",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Self-paced courses that fit your schedule with lifetime access",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Get help anytime with our dedicated support team and community",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      icon: Trophy,
      title: "Certificates",
      description: "Earn industry-recognized certificates to boost your career",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a vibrant community of learners and share your journey",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Hands-on Projects",
      description: "Build real-world projects that you can add to your portfolio",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Stay ahead with the latest technologies and best practices",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-light-grey to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Why Choose <span className="gradient-text">Binary Bees?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just another coding platform. We're your partner in building a successful tech career 
            with comprehensive support and cutting-edge curriculum.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group bee-hover border-0 bg-white/80 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center space-y-4">
                  <div className="mx-auto">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 pulse-bee`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 bee-shadow">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">15,000+</div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">50+</div>
              <div className="text-muted-foreground">Expert Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">95%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold gradient-text">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;