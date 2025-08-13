import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube,
  Send,
  Code,
  Award,
  Users,
  ArrowRight
} from "lucide-react";

const ProfessionalFooter = () => {
  const quickLinks = [
    { name: "Courses", href: "#courses" },
    { name: "Learning Paths", href: "#paths" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ];

  const programs = [
    { name: "Full-Stack Development", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "Mobile Development", href: "#" },
    { name: "Cloud & DevOps", href: "#" },
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ];

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="font-space-grotesk font-bold text-2xl gradient-text">Binary Bees</span>
                  <div className="text-xs text-white/60">Professional Coding Education</div>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed max-w-md">
                Empowering the next generation of developers with world-class education, 
                expert mentorship, and career-changing opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-space-grotesk font-semibold text-lg">Stay Updated</h4>
              <div className="flex space-x-3">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 flex-1"
                />
                <Button variant="premium" size="default">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/10">
                <Award className="w-3 h-3 mr-1" />
                Join 25,000+ developers
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-space-grotesk font-semibold text-lg">Platform</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-primary transition-colors flex items-center group"
                  >
                    {link.name}
                    <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h4 className="font-space-grotesk font-semibold text-lg">Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Contact */}
          <div className="space-y-6">
            <h4 className="font-space-grotesk font-semibold text-lg">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-white/70 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3 pt-4">
              <div className="flex items-center space-x-3 text-white/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@binarybees.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Binary Bees. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy</a>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ProfessionalFooter;