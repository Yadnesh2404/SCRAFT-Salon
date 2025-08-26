import { Button } from "@/components/ui/button";
import { Calendar, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-elegant">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo/Brand */}
          <div className="font-display text-2xl font-bold text-foreground cursor-pointer" onClick={() => scrollToSection('hero')}>
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              SCRAFT
            </span>
            <span className="text-foreground"> Salon</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-body text-foreground hover:text-primary transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </div>
          
          {/* Enhanced Book Now Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="lg" 
              className="font-body px-8 py-3 rounded-2xl shadow-gold hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border/50">
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-body text-foreground hover:text-primary transition-colors duration-300 text-left py-2 px-4 rounded-lg hover:bg-muted/50"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Book Now Button */}
              <div className="pt-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full font-body px-8 py-3 rounded-2xl shadow-gold hover:shadow-xl transition-all duration-500"
                  onClick={() => scrollToSection('contact')}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};