import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Smartphone, 
  Database, 
  Brain, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  ArrowRight,
  Zap,
  Award,
  Play
} from "lucide-react";

const CourseGrid = () => {
  const featuredCourses = [
    {
      id: 1,
      title: "Full-Stack Web Development Mastery",
      description: "Complete modern web development with React, Next.js, Node.js, and advanced deployment strategies",
      icon: Code,
      duration: "16 weeks",
      students: "12.5k",
      rating: 4.9,
      level: "Beginner to Advanced",
      price: "Free",
      originalPrice: "$499",
      features: ["React 18", "Next.js 14", "TypeScript", "Node.js", "MongoDB", "Docker", "AWS", "Real Projects"],
      gradient: "from-blue-600 via-purple-600 to-blue-800",
      badge: "Most Popular",
      badgeColor: "bg-green-500"
    },
    {
      id: 2,
      title: "AI & Machine Learning Engineering",
      description: "Master artificial intelligence, machine learning, and deep learning with Python and TensorFlow",
      icon: Brain,
      duration: "20 weeks",
      students: "8.2k",
      rating: 4.9,
      level: "Intermediate",
      price: "$299",
      originalPrice: "$799",
      features: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "MLOps", "Kaggle Projects"],
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      badge: "High Demand",
      badgeColor: "bg-orange-500"
    },
    {
      id: 3,
      title: "Mobile App Development Pro",
      description: "Build native and cross-platform mobile apps with React Native, Flutter, and native iOS/Android",
      icon: Smartphone,
      duration: "14 weeks",
      students: "6.8k",
      rating: 4.8,
      level: "Intermediate",
      price: "$199",
      originalPrice: "$599",
      features: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "App Store Deploy"],
      gradient: "from-violet-600 via-purple-600 to-indigo-600",
      badge: "Industry Ready",
      badgeColor: "bg-purple-500"
    },
    {
      id: 4,
      title: "Cloud & DevOps Architecture",
      description: "Master cloud infrastructure, DevOps practices, and scalable system design patterns",
      icon: Database,
      duration: "12 weeks",
      students: "5.1k",
      rating: 4.8,
      level: "Advanced",
      price: "$249",
      originalPrice: "$699",
      features: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring", "Security"],
      gradient: "from-orange-600 via-red-600 to-pink-600",
      badge: "Expert Level",
      badgeColor: "bg-red-500"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20 animate-slide-up">
          <Badge variant="outline" className="border-primary/30 text-primary px-4 py-2">
            Premium Courses
          </Badge>
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold text-balance">
            <span className="text-secondary">Industry-Leading</span>{" "}
            <span className="gradient-text">Learning Paths</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Master cutting-edge technologies with our comprehensive courses designed by industry experts. 
            Each program includes real-world projects, mentorship, and career placement support.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredCourses.map((course, index) => {
            const Icon = course.icon;
            return (
              <Card 
                key={course.id} 
                className="group premium-card border-0 bg-white overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="space-y-6 pb-6">
                  {/* Header with icon and badge */}
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={`${course.badgeColor} text-white font-medium px-3 py-1`}>
                        {course.badge}
                      </Badge>
                      <div className="text-right">
                        <div className="text-2xl font-space-grotesk font-bold gradient-text">
                          {course.price}
                        </div>
                        {course.originalPrice && (
                          <div className="text-sm text-muted-foreground line-through">
                            {course.originalPrice}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Title and Description */}
                  <div className="space-y-3">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors text-balance">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Course Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm">{course.duration}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Duration</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="font-semibold text-sm">{course.students}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold text-sm">{course.rating}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="flex justify-center">
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {course.level}
                    </Badge>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-secondary">What you'll master:</div>
                    <div className="grid grid-cols-2 gap-2">
                      {course.features.slice(0, 6).map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                      {course.features.length > 6 && (
                        <div className="col-span-2 text-sm text-primary font-medium">
                          +{course.features.length - 6} more technologies
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-2">
                    <Button 
                      variant="premium" 
                      className="flex-1 group"
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Enroll Now
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button variant="outline_premium" size="default" className="px-6">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-6 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-primary/10 backdrop-blur-sm border border-primary/20 text-primary px-6 py-3 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            <span>Certificate upon completion • Lifetime access • Career support</span>
          </div>
          <Button variant="outline_premium" size="lg" className="group">
            View All 100+ Courses
            <Zap className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;