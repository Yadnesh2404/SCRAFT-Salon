import { Star, Sparkles, Crown, Heart, Users, Award, Clock, Zap, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation(0.3);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.4);

  const services = [
    {
      icon: Crown,
      title: "Luxury Hair Styling",
      description: "Premium haircuts, styling, and treatments with expert consultation",
      features: ["Personalized consultation", "Premium products", "Expert stylists"],
      price: "From ₹2,500"
    },
    {
      icon: Sparkles,
      title: "Beauty & Makeup",
      description: "Professional makeup services for special occasions and everyday glamour",
      features: ["Bridal makeup", "Party makeup", "Natural looks"],
      price: "From ₹3,500"
    },
    {
      icon: Heart,
      title: "Spa & Wellness",
      description: "Relaxing spa treatments and wellness services for complete rejuvenation",
      features: ["Facial treatments", "Body massages", "Wellness packages"],
      price: "From ₹4,500"
    },
    {
      icon: Users,
      title: "Consultation Services",
      description: "Personalized beauty consultations and style recommendations",
      features: ["Style analysis", "Product recommendations", "Beauty planning"],
      price: "From ₹1,500"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-24 relative overflow-hidden">
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
            Our Premium
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Services</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience luxury beauty services crafted with precision and delivered with excellence
          </p>
        </div>

        {/* Enhanced services grid */}
        <div ref={servicesRef} className={`grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20 transition-all duration-1000 delay-200 ${
          servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-${300 + index * 100}`}
            >
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-texture-elegant opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced service icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Service content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Enhanced features list */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform duration-300">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-body text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Enhanced price display */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-xl font-bold text-primary">
                    {service.price}
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div ref={ctaRef} className={`text-center transition-all duration-1000 delay-500 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Ready to Experience Luxury?
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your appointment today and discover the SCRAFT Salon difference. 
              Our expert team is ready to create your perfect look.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury group"
            >
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};