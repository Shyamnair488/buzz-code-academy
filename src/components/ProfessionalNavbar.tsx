import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Code, BookOpen, Users, Phone, ChevronDown } from "lucide-react";

const ProfessionalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Courses", href: "#courses", hasDropdown: true },
    { name: "Learning Paths", href: "#paths" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-float">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-space-grotesk font-bold text-2xl gradient-text">Binary Bees</span>
              <div className="text-xs text-muted-foreground font-medium">Professional Coding Education</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-foreground/80 hover:text-primary transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="font-medium">
              Sign In
            </Button>
            <Button variant="premium" size="sm">
              Start Learning
            </Button>
            <Badge variant="outline" className="text-xs font-medium border-primary/20 text-primary/80">
              Free Trial
            </Badge>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/50 animate-slide-up">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
              <div className="flex flex-col space-y-3 px-4 pt-6 border-t border-border/50">
                <Button variant="outline" size="sm" className="justify-center">
                  Sign In
                </Button>
                <Button variant="premium" size="sm" className="justify-center">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default ProfessionalNavbar;