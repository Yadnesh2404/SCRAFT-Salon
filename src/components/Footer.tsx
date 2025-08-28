import { MapPin, Phone, Mail, Clock, Star, ArrowRight, Heart, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Footer = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);

  return (
    <footer ref={sectionRef} className={`bg-foreground text-background relative overflow-hidden transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-5"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div ref={contentRef} className={`transition-opacity duration-700 delay-200 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Enhanced luxury footer content */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <Crown className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-background">SCRAFT Salon</h3>
            </div>
              <p className="text-background/80 leading-relaxed mb-6 max-w-md">
              Redefining luxury in hair, beauty & spa. Experience world-class grooming and care in a setting where every detail is crafted to perfection.
            </p>
            <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5 text-primary" />
              </div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5 text-primary" />
              </div>
                <div className="w-10 h-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>

            {/* Quick Links */}
                <div>
              <h4 className="font-display text-lg font-semibold text-background mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#about" className="text-background/80 hover:text-primary transition-colors duration-300">About Us</a></li>
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Services</a></li>
                <li><a href="#gallery" className="text-background/80 hover:text-primary transition-colors duration-300">Gallery</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-primary transition-colors duration-300">Contact</a></li>
              </ul>
              </div>
              
            {/* Services */}
                <div>
              <h4 className="font-display text-lg font-semibold text-background mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Hair Styling</a></li>
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Beauty Treatments</a></li>
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Spa & Wellness</a></li>
                <li><a href="#services" className="text-background/80 hover:text-primary transition-colors duration-300">Nail Care</a></li>
              </ul>
                </div>
              </div>
              
          {/* Enhanced luxury divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-8"></div>

          {/* Enhanced luxury bottom section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-background/60 text-sm mb-4 md:mb-0">
              © 2024 SCRAFT Salon. All rights reserved. Crafted with luxury and precision.
        </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300 text-sm">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300 text-sm">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors duration-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};