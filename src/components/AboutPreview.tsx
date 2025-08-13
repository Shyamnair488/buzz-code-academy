import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Award,
  BookOpen,
  Users,
  Zap,
  Github,
  Linkedin,
  Twitter
} from "lucide-react";

const AboutPreview = () => {
  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Full Stack Expert",
      experience: "8+ years",
      expertise: ["React", "Node.js", "Python"],
      avatar: "👩‍💻",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mike Chen",
      role: "Mobile Dev Specialist",
      experience: "6+ years",
      expertise: ["React Native", "Flutter", "iOS"],
      avatar: "👨‍💻",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Data Science Lead",
      experience: "10+ years",
      expertise: ["Python", "ML", "AI"],
      avatar: "👩‍🔬",
      social: {
        github: "#",
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary text-primary">
                About Binary Bees
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold">
                Empowering the Next Generation of <span className="gradient-text">Developers</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Founded in 2020, Binary Bees has grown from a small coding bootcamp to 
                a comprehensive online learning platform serving thousands of students worldwide.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-deep-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Industry Recognition</h3>
                  <p className="text-muted-foreground">
                    Recognized as one of the top coding education platforms by TechCrunch and EdTech Magazine.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-deep-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Comprehensive Curriculum</h3>
                  <p className="text-muted-foreground">
                    From beginner-friendly courses to advanced specializations, we cover the entire spectrum of modern development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-glow rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-deep-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
                  <p className="text-muted-foreground">
                    Join a thriving community of learners, mentors, and industry professionals.
                  </p>
                </div>
              </div>
            </div>

            <Button variant="bee" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Instructors */}
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Meet Our Expert Instructors</h3>
              <p className="text-muted-foreground">
                Learn from industry veterans who bring real-world experience to every lesson.
              </p>
            </div>

            <div className="space-y-6">
              {instructors.map((instructor, index) => (
                <Card key={index} className="group bee-hover border-0 bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                        {instructor.avatar}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                          {instructor.name}
                        </h4>
                        <p className="text-muted-foreground text-sm">{instructor.role}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {instructor.experience}
                          </Badge>
                          <div className="flex space-x-1">
                            {instructor.expertise.slice(0, 2).map((skill, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <a href={instructor.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={instructor.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                        <a href={instructor.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;