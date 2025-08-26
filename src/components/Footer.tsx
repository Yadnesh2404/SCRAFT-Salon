import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background relative">
      {/* Gold divider line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-display text-4xl font-bold text-foreground mb-3">
                <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
                  SCRAFT
                </span>
                <span className="text-foreground"> Salon</span>
              </h3>
              <p className="font-display text-lg italic text-muted-foreground">
                Redefining the Luxury Salon Experience
              </p>
            </div>
            
            <p className="font-body text-muted-foreground leading-relaxed">
              Where elegance meets expertise. Experience premium beauty services in our luxurious sanctuary designed for discerning clients.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-display text-2xl font-semibold text-foreground">Contact Info</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-muted-foreground">123 Luxury Avenue, Beverly Hills, CA</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-muted-foreground">+1 (234) 567-8900</span>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-body text-muted-foreground">info@scraftsalon.com</span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div className="space-y-6">
            <h4 className="font-display text-2xl font-semibold text-foreground">Opening Hours</h4>
            
            <div className="space-y-2 font-body text-muted-foreground">
              <div className="flex justify-between items-center">
                <span>Mon - Sat</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Sunday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="font-display text-lg font-semibold text-foreground mb-4">Follow Us</h5>
              <div className="flex justify-center md:justify-start space-x-4">
                <button className="p-3 rounded-full bg-background border border-border/50 hover:border-primary transition-colors group">
                  <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
                <button className="p-3 rounded-full bg-background border border-border/50 hover:border-primary transition-colors group">
                  <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
                <button className="p-3 rounded-full bg-background border border-border/50 hover:border-primary transition-colors group">
                  <MessageCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-muted-foreground text-sm">
              © 2024 SCRAFT Salon. All rights reserved. | Luxury Beauty Experience
            </p>
            
            <div className="flex space-x-6 text-sm">
              <button className="font-body text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <button className="font-body text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};