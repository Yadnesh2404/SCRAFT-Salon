import { ArrowRight, Heart, Gem, Camera, Sparkle, Crown, Star } from "lucide-react";

const services = [
  {
    id: 1,
    icon: <Heart className="h-8 w-8" />,
    title: "Hair Styling",
    description: "Professional cuts, styling, and treatments tailored to your unique style",
    category: "Hair",
    price: "From $85"
  },
  {
    id: 2,
    icon: <Gem className="h-8 w-8" />,
    title: "Luxury Spa",
    description: "Rejuvenating facials, massages, and wellness treatments for ultimate relaxation",
    category: "Spa",
    price: "From $120"
  },
  {
    id: 3,
    icon: <Camera className="h-8 w-8" />,
    title: "Bridal Packages",
    description: "Complete bridal beauty services for your special day",
    category: "Bridal",
    price: "From $350"
  },
  {
    id: 4,
    icon: <Sparkle className="h-8 w-8" />,
    title: "Grooming Services",
    description: "Professional grooming and styling for gentlemen",
    category: "Grooming",
    price: "From $65"
  },
  {
    id: 5,
    icon: <Star className="h-8 w-8" />,
    title: "Color & Highlights",
    description: "Expert color work and highlights to enhance your natural beauty",
    category: "Hair",
    price: "From $150"
  },
  {
    id: 6,
    icon: <Crown className="h-8 w-8" />,
    title: "Premium Treatments",
    description: "Advanced beauty treatments using luxury products and techniques",
    category: "Premium",
    price: "From $200"
  }
];

const signaturePackages = [
  {
    id: 1,
    icon: <Crown className="h-8 w-8" />,
    title: "Royal Experience",
    description: "Complete transformation package including hair, makeup, and spa treatment",
    price: "$450",
    duration: "4-5 hours",
    features: ["Hair styling & color", "Professional makeup", "Luxury facial", "Champagne service"]
  },
  {
    id: 2,
    icon: <Gem className="h-8 w-8" />,
    title: "Diamond Package",
    description: "Premium bridal beauty package with consultation and trial session",
    price: "$650",
    duration: "6-7 hours",
    features: ["Bridal consultation", "Hair & makeup trial", "Wedding day service", "Touch-up kit"]
  },
  {
    id: 3,
    icon: <Star className="h-8 w-8" />,
    title: "Celebrity Style",
    description: "Red carpet ready look with professional styling and photography",
    price: "$350",
    duration: "3-4 hours",
    features: ["Professional styling", "Makeup artistry", "Photo session", "Style consultation"]
  }
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Enhanced luxury background texture */}
      <div className="absolute inset-0 bg-texture-luxury opacity-8"></div>
      
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10 px-4">
            Discover our comprehensive range of premium beauty and wellness services, designed to enhance your natural beauty and provide an unparalleled luxury experience
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Crown className="mx-4 md:mx-6 h-6 md:h-8 w-6 md:w-8 text-primary animate-luxury-pulse" />
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="card-luxury group p-6 md:p-8 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-2xl"></div>
              
              {/* Category Badge */}
              <div className="mb-4 md:mb-6">
                <span className="inline-flex items-center px-3 md:px-4 py-1 md:py-2 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                  {service.category}
                </span>
              </div>
              
              {/* Icon */}
              <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                </div>
                
              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
              <p className="font-body text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {service.description}
                </p>
                
              {/* Price */}
              <div className="mb-4 md:mb-6">
                <span className="font-display text-lg md:text-xl font-semibold text-primary">
                  {service.price}
                </span>
              </div>

              {/* Enhanced bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Signature Packages Section */}
        <div className="mb-20 md:mb-24">
          <div className="text-center mb-12 md:mb-16">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Signature</span> Packages
            </h3>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Experience our most luxurious and comprehensive beauty packages, designed for special occasions and ultimate pampering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {signaturePackages.map((pkg, index) => (
              <div 
                key={pkg.id}
                className="card-premium p-6 md:p-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                  <div className="text-primary">
                    {pkg.icon}
                  </div>
              </div>

                {/* Content */}
                <h4 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 md:mb-4 group-hover:text-primary transition-colors duration-300">
                  {pkg.title}
                </h4>
                
                <p className="font-body text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Features */}
                <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                      <span className="font-body text-sm md:text-base text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

                {/* Price and Duration */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg md:text-xl font-semibold text-primary">
                    {pkg.price}
                  </span>
                  <span className="font-body text-sm md:text-base text-muted-foreground">
                    {pkg.duration}
                  </span>
                </div>

                {/* Enhanced bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-luxury group"
          >
            <span className="relative z-10">Explore Full Service Menu</span>
            <ArrowRight className="ml-2 md:ml-3 h-5 md:h-6 w-5 md:w-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};