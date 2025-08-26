import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Send, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Enhanced background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_80%_20%,rgba(217,_155,_55,_0.2)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-8">
            Get In <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
            Ready to experience luxury? Contact us to book your appointment or learn more about our premium services
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Send className="mx-6 h-8 w-8 text-primary animate-pulse" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Enhanced Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-background/90 to-muted/50 p-10 rounded-3xl shadow-premium border border-border/50 backdrop-blur-sm relative overflow-hidden">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"></div>
              
              <h3 className="font-display text-3xl font-semibold text-foreground mb-10">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-background/80 border-border/50 focus:border-primary transition-all duration-300 h-14 text-base rounded-xl"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone"
                      className="bg-background/80 border-border/50 focus:border-primary transition-all duration-300 h-14 text-base rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-background/80 border-border/50 focus:border-primary transition-all duration-300 h-14 text-base rounded-xl"
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <label htmlFor="message" className="block font-body text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your needs or questions..."
                    className="bg-background/80 border-border/50 focus:border-primary transition-all duration-300 min-h-40 text-base rounded-xl resize-none"
                    rows={5}
                  />
                </div>
                
                <div className="space-y-6">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full text-lg py-8 rounded-2xl shadow-gold hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                  >
                    <Send className="mr-3 h-6 w-6" />
                    Send Message
                  </Button>
                  
                  <Button 
                    variant="luxury" 
                    className="w-full text-lg py-8 rounded-2xl shadow-elegant hover:shadow-xl transition-all duration-500 transform hover:scale-105"
                  >
                    <Star className="mr-3 h-6 w-6" />
                    Book Appointment
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-10">
              {/* Enhanced Contact Details */}
              <div className="bg-gradient-to-br from-background/90 to-muted/50 p-10 rounded-3xl shadow-premium border border-border/50 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"></div>
                
                <h3 className="font-display text-3xl font-semibold text-foreground mb-10">Visit our salon</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start space-x-5 group">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-lg mb-2">Address</h4>
                      <p className="font-body text-muted-foreground leading-relaxed">
                        123 Luxury Avenue<br />
                        Beverly Hills, CA 90210
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Phone className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-lg mb-2">Phone</h4>
                      <p className="font-body text-muted-foreground">+1 (234) 567-8900</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Mail className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-lg mb-2">Email</h4>
                      <p className="font-body text-muted-foreground">info@scraftsalon.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-5 group">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Clock className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-foreground text-lg mb-2">Hours</h4>
                      <div className="font-body text-muted-foreground space-y-2">
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Map Placeholder */}
              <div className="bg-gradient-to-br from-muted/50 to-secondary/30 p-10 rounded-3xl shadow-elegant border border-primary/20 h-80 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.15)_0%,transparent_50%)] group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="text-center relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                    <MapPin className="h-10 w-10 text-primary" />
                  </div>
                  <h4 className="font-display text-2xl font-semibold text-foreground mb-3">Find Us Here</h4>
                  <p className="font-body text-muted-foreground text-lg">123 Luxury Avenue, Beverly Hills</p>
                </div>
              </div>

              {/* Enhanced Social Media & Quick Actions */}
              <div className="grid sm:grid-cols-3 gap-6">
                <Button variant="luxury" className="h-20 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  <Instagram className="h-6 w-6 mr-3" />
                  Instagram
                </Button>
                <Button variant="luxury" className="h-20 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  <Facebook className="h-6 w-6 mr-3" />
                  Facebook
                </Button>
                <Button variant="luxury" className="h-20 rounded-2xl shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  <MessageCircle className="h-6 w-6 mr-3" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};