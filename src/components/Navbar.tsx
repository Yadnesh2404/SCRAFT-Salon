import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-display text-2xl font-bold text-foreground">
          <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
            SCRAFT
          </span>
          <span className="text-foreground"> Salon</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('hero')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('services')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="font-body text-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
        </div>
        
        <Button variant="hero" size="sm" className="font-body">
          <Calendar className="mr-2 h-4 w-4" />
          Book Now
        </Button>
      </div>
    </nav>
  );
};