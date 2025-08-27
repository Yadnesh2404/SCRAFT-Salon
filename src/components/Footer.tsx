import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Clock, Star, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background relative">
      {/* Enhanced Gold divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent shadow-lg"></div>
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-16 text-center md:text-left">
          {/* Enhanced Brand Section */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-4xl font-bold text-foreground mb-4">
                <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  SCRAFT
                </span>
                <span className="text-foreground"> Salon</span>
              </h3>
              <p className="font-display text-lg italic text-muted-foreground leading-relaxed">
                Redefining Luxury in Hair, Beauty & Spa
              </p>
            </div>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Where elegance meets expertise. Experience premium beauty services in our luxurious sanctuary designed for discerning clients.
            </p>

            {/* Premium badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
              <Star className="h-4 w-4 text-primary" />
              <span className="font-body text-sm font-medium text-primary">Premium Beauty Experience</span>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <h4 className="font-display text-2xl font-semibold text-foreground mb-6">Contact Info</h4>
            
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="https://maps.google.com/?q=123+Luxury+Avenue+Beverly+Hills+CA" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline"
                >
                  123 Luxury Avenue, Beverly Hills, CA
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="tel:+12345678900"
                  className="font-body text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline"
                >
                  +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="https://wa.me/12345678900"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline"
                >
                  WhatsApp: +1 (234) 567-8900
                </a>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-4 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="mailto:info@scraftsalon.com"
                  className="font-body text-muted-foreground group-hover:text-primary transition-colors duration-300 hover:underline"
                >
                  info@scraftsalon.com
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Hours & Social */}
          <div className="space-y-8">
            <h4 className="font-display text-2xl font-semibold text-foreground mb-6">Opening Hours</h4>
            
            <div className="space-y-4 font-body text-muted-foreground">
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/30 to-background/30 border border-border/30">
                <span className="font-medium">Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/30 to-background/30 border border-border/30">
                <span className="font-medium">Saturday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center p-3 rounded-lg bg-gradient-to-r from-muted/30 to-background/30 border border-border/30">
                <span className="font-medium">Sunday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Enhanced Social Media */}
            <div>
              <h5 className="font-display text-lg font-semibold text-foreground mb-6">Follow Us</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://instagram.com/scraftsalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110"
                >
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a 
                  href="https://facebook.com/scraftsalon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110"
                >
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
                <a 
                  href="https://wa.me/12345678900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110"
                >
                  <MessageSquare className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* New Quick Links Section */}
          <div className="space-y-8">
            <h4 className="font-display text-2xl font-semibold text-foreground mb-6">Quick Links</h4>
            
            <div className="space-y-4">
              <button className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5">
                Book Appointment
              </button>
              <button className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5">
                Our Services
              </button>
              <button className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5">
                About Us
              </button>
              <button className="block w-full text-left font-body text-muted-foreground hover:text-primary transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-yellow-500/5">
                Client Reviews
              </button>
            </div>

            {/* Newsletter signup placeholder */}
            <div className="pt-4">
              <p className="font-body text-sm text-muted-foreground mb-3">Stay updated with our latest offers</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-3 py-2 text-sm bg-muted/50 border border-border/30 rounded-lg focus:border-primary focus:outline-none transition-colors duration-300"
                />
                <button className="px-4 py-2 bg-primary text-white text-sm rounded-lg hover:bg-primary/90 transition-colors duration-300">
                  <Star className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Section with thin gold border */}
        <div className="border-t border-primary/20 mt-20 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="font-body text-muted-foreground text-sm">
              © 2024 SCRAFT Salon. All rights reserved. | <span className="text-primary font-medium">Luxury Beauty Experience</span>
            </p>
            
            <div className="flex space-x-8 text-sm">
              <button className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 transform">
                Privacy Policy
              </button>
              <button className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 transform">
                Terms of Service
              </button>
              <button className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105 transform">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};