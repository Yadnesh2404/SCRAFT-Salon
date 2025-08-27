import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Send, Star, MessageSquare, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.3);
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation(0.4);
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation(0.5);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Touch</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to experience luxury? Contact us today and let our expert team create your perfect look
          </p>
        </div>

        {/* Enhanced contact grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Enhanced contact form */}
          <div ref={formRef} className={`transition-all duration-1000 delay-200 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <div className="bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 border border-border/50 shadow-elegant">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block font-body font-medium text-foreground mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300">
                    <option>Select a service</option>
                    <option>Hair Styling</option>
                    <option>Beauty & Makeup</option>
                    <option>Spa & Wellness</option>
                    <option>Consultation</option>
                  </select>
                </div>
                
                <div>
                  <label className="block font-body font-medium text-foreground mb-2">Preferred Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300"
                  />
                </div>
                
                <div>
                  <label className="block font-body font-medium text-foreground mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-muted/50 border border-border/30 rounded-xl focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your beauty goals..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn-luxury group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Enhanced contact info and map */}
          <div className="space-y-8">
            {/* Enhanced contact details */}
            <div className="space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Phone</p>
                    <a href="tel:+12345678900" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Email</p>
                    <a href="mailto:info@scraftsalon.com" className="font-body text-muted-foreground hover:text-primary transition-colors duration-300">
                      info@scraftsalon.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-foreground">Hours</p>
                    <p className="font-body text-muted-foreground">Mon-Sat: 9AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Map with Google Maps Embed */}
            <div ref={mapRef} className={`transition-all duration-1000 delay-400 ${
              mapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <div className="bg-gradient-to-br from-muted/50 to-secondary/30 p-4 rounded-3xl shadow-elegant border border-primary/20 h-80 relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.15)_0%,transparent_50%)] group-hover:opacity-75 transition-opacity duration-500"></div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-center mb-3 flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-500">
                      <MapPin className="h-7 w-7 text-primary" />
                    </div>
                    <h4 className="font-display text-lg font-semibold text-foreground mb-1">Find Us Here</h4>
                    <p className="font-body text-muted-foreground text-sm">Chembur, Mumbai</p>
                  </div>
                  
                  {/* Embedded Google Maps Widget */}
                  <div className="flex-1 relative w-full rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890123!2d72.88888888888889!3d19.055555555555556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzIwLjAiTiA3MsKwNTMnMjAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SCRAFT Salon Location - Chembur, Mumbai"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Social Media & Quick Actions */}
        <div ref={socialRef} className={`text-center transition-all duration-1000 delay-600 ${
          socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Connect With Us
            </h3>
            <p className="font-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Follow us on social media for the latest beauty tips, special offers, and behind-the-scenes content
            </p>
            
            <div className="flex justify-center space-x-6">
              <a href="#" className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110">
                <MessageSquare className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110">
                <Star className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group hover:scale-110">
                <ArrowRight className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};