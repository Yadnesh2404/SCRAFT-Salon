import { Star, Sparkles, Crown, Heart, Users, Award, Clock, Zap, ArrowRight, Scissors, Palette, Calendar } from "lucide-react";
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
    <section id="services" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced luxury section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-700 delay-200 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Premium
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              {" "}Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Enhanced luxury services grid */}
        <div ref={servicesRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 delay-400 ${servicesVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Hair Styling */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scissors className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Hair Styling</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From classic cuts to modern trends, our expert stylists create personalized looks that enhance your natural beauty.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Precision Cutting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Color & Highlights</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Styling & Updos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Beauty Treatments */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Beauty Treatments</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Indulge in luxurious beauty treatments designed to rejuvenate your skin and enhance your natural radiance.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Facial Treatments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Skin Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Anti-Aging Solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spa & Wellness */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Spa & Wellness</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Escape to tranquility with our premium spa services that promote relaxation and overall well-being.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Massage Therapy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Body Treatments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Wellness Programs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nail Care */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Nail Care</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional nail care services that combine artistry with hygiene for beautiful, healthy nails.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Manicures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Pedicures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Nail Art</span>
                </div>
              </div>
            </div>
          </div>

          {/* Makeup & Styling */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Makeup & Styling</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Professional makeup application and styling for special occasions, photoshoots, and everyday glamour.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Bridal Makeup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Event Styling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Personal Styling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Consultation & Planning */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Consultation & Planning</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Personalized consultation services to help you plan your perfect look and achieve your beauty goals.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Style Consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Treatment Planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Follow-up Care</span>
                </div>
              </div>
            </div>
          </div>
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