import { MapPin, Phone, Mail, Clock, Star, ArrowRight, Heart, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Footer = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: logoRef, isVisible: logoVisible } = useScrollAnimation(0.2);
  const { ref: linksRef, isVisible: linksVisible } = useScrollAnimation(0.3);
  const { ref: contactRef, isVisible: contactVisible } = useScrollAnimation(0.4);
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation(0.5);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={sectionRef} className="bg-gradient-to-br from-muted/50 to-background relative overflow-hidden">
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-texture-luxury opacity-5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Enhanced footer content grid */}
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced logo section */}
          <div ref={logoRef} className={`lg:col-span-1 transition-all duration-1000 ${
            logoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="mb-6">
              <img 
                src="/scraft-logo-large.svg" 
                alt="SCRAFT Salon Logo" 
                className="h-20 w-auto"
              />
            </div>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Redefining luxury in hair, beauty & spa. Experience world-class grooming and care in a setting where every detail is crafted to perfection.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center hover:from-primary/20 hover:to-yellow-500/20 transition-all duration-300 group hover:scale-110">
                <Heart className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center hover:from-primary/20 hover:to-yellow-500/20 transition-all duration-300 group hover:scale-110">
                <Star className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center hover:from-primary/20 hover:to-yellow-500/20 transition-all duration-300 group hover:scale-110">
                <Crown className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced quick links */}
          <div ref={linksRef} className={`transition-all duration-1000 delay-200 ${
            linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Quick Links</h3>
            <div className="space-y-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5 cursor-pointer group"
              >
                <span className="flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5 cursor-pointer group"
              >
                <span className="flex items-center">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5 cursor-pointer group"
              >
                <span className="flex items-center">
                  About Us
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </span>
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5 cursor-pointer group"
              >
                <span className="flex items-center">
                  Client Reviews
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>

          {/* Enhanced services */}
          <div ref={linksRef} className={`transition-all duration-1000 delay-300 ${
            linksVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Our Services</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">Hair Styling</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">Beauty & Makeup</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">Spa & Wellness</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                <span className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">Consultation</span>
              </div>
            </div>
          </div>

          {/* Enhanced contact info */}
          <div ref={contactRef} className={`transition-all duration-1000 delay-400 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h3 className="font-display text-xl font-bold text-foreground mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-sm">Location</p>
                  <a 
                    href="https://maps.app.goo.gl/EMgaHGKpyBytipEq6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-foreground hover:text-primary transition-colors duration-300 flex items-center space-x-1"
                  >
                    <span>Chembur, Mumbai</span>
                    <span className="text-xs text-muted-foreground">(Click to open in Google Maps)</span>
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-sm">Phone</p>
                  <a href="tel:+12345678900" className="font-body text-foreground hover:text-primary transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-sm">Email</p>
                  <a href="mailto:info@scraftsalon.com" className="font-body text-foreground hover:text-primary transition-colors duration-300">
                    info@scraftsalon.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-body text-muted-foreground text-sm">Hours</p>
                  <p className="font-body text-foreground">Mon-Sat: 9AM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced bottom section */}
        <div ref={bottomRef} className={`pt-8 border-t border-border/30 transition-all duration-1000 delay-500 ${
          bottomVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="font-body text-muted-foreground text-sm">
              © 2024 SCRAFT Salon. All rights reserved. Crafted with luxury and precision.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="#" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};