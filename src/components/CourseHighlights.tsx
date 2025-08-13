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
  BookOpen 
} from "lucide-react";

const CourseHighlights = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      icon: Code,
      duration: "12 weeks",
      students: "2.5k",
      rating: 4.9,
      level: "Beginner",
      price: "Free",
      features: ["HTML/CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Build native mobile apps with React Native and Flutter",
      icon: Smartphone,
      duration: "10 weeks",
      students: "1.8k",
      rating: 4.8,
      level: "Intermediate",
      price: "$99",
      features: ["React Native", "Flutter", "Firebase", "App Store Deploy"],
      color: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "Data Science & AI",
      description: "Learn Python, machine learning, and data analysis",
      icon: Brain,
      duration: "16 weeks",
      students: "3.2k",
      rating: 4.9,
      level: "Advanced",
      price: "$149",
      features: ["Python", "Machine Learning", "TensorFlow", "Data Viz"],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Database Engineering",
      description: "Master SQL, NoSQL, and database optimization techniques",
      icon: Database,
      duration: "8 weeks",
      students: "1.5k",
      rating: 4.7,
      level: "Intermediate",
      price: "$79",
      features: ["SQL", "MongoDB", "Redis", "Performance Tuning"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="border-primary text-primary">
            Popular Courses
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Featured</span> Learning Paths
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose from our carefully crafted courses designed by industry experts. 
            Each course includes hands-on projects, live coding sessions, and personalized mentorship.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 bee-hover border-0 bg-white">
                <CardHeader className="space-y-4">
                  {/* Course Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <Badge 
                      variant={course.price === "Free" ? "default" : "secondary"}
                      className={course.price === "Free" ? "bg-green-100 text-green-800" : ""}
                    >
                      {course.price}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-relaxed">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Course Stats */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  {/* Level Badge */}
                  <div className="flex justify-center">
                    <Badge variant="outline" className="text-xs">
                      {course.level}
                    </Badge>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-charcoal">What you'll learn:</div>
                    <div className="flex flex-wrap gap-1">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {course.features.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant="bee" 
                    size="sm" 
                    className="w-full group-hover:shadow-lg"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Courses CTA */}
        <div className="text-center mt-12">
          <Button variant="outline_bee" size="lg">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseHighlights;