import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
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
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to experience luxury? Contact us to book your appointment or learn more about our services
          </p>
          
          <div className="flex items-center justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-4 w-3 h-3 rounded-full bg-primary"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-elegant border border-border/50">
              <h3 className="font-display text-3xl font-semibold text-foreground mb-8">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-body text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-background border-border/50 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Your phone"
                      className="bg-background border-border/50 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-background border-border/50 focus:border-primary transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-body text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your needs or questions..."
                    className="bg-background border-border/50 focus:border-primary transition-colors min-h-32"
                    rows={4}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="premium" 
                  className="w-full text-lg py-6 rounded-xl"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-br from-background to-muted p-8 rounded-2xl shadow-elegant border border-border/50">
                <h3 className="font-display text-3xl font-semibold text-foreground mb-8">Visit our salon</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-foreground">Address</h4>
                      <p className="font-body text-muted-foreground">
                        123 Luxury Avenue<br />
                        Fashion District, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-foreground">Phone</h4>
                      <p className="font-body text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-foreground">Email</h4>
                      <p className="font-body text-muted-foreground">hello@luxesalon.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-body font-semibold text-foreground">Hours</h4>
                      <div className="font-body text-muted-foreground space-y-1">
                        <p>Mon - Fri: 9:00 AM - 8:00 PM</p>
                        <p>Saturday: 8:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-muted to-secondary p-8 rounded-2xl shadow-elegant border border-border/50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Interactive Map</h4>
                  <p className="font-body text-muted-foreground">Map integration coming soon</p>
                </div>
              </div>

              {/* Social Media & Quick Actions */}
              <div className="grid sm:grid-cols-3 gap-4">
                <Button variant="luxury" className="h-16 rounded-xl">
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
                <Button variant="luxury" className="h-16 rounded-xl">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
                <Button variant="luxury" className="h-16 rounded-xl">
                  <MessageCircle className="h-5 w-5 mr-2" />
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