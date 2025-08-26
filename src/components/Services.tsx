import { Scissors, Palette, Sparkles, Crown, Star, Users } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling & Cuts",
    description: "Precision cuts and luxury styling with premium products for the perfect look.",
    features: ["Consultation", "Wash & Style", "Finishing"]
  },
  {
    icon: Palette,
    title: "Color & Highlights", 
    description: "Expert color correction and highlights using top-tier professional products.",
    features: ["Color Analysis", "Custom Blending", "Aftercare"]
  },
  {
    icon: Sparkles,
    title: "Makeup Artistry",
    description: "Professional makeup application for special events and everyday elegance.",
    features: ["Bridal Makeup", "Event Styling", "Lessons"]
  },
  {
    icon: Crown,
    title: "Spa & Treatments",
    description: "Rejuvenating spa services and luxury treatments for total relaxation.",
    features: ["Facials", "Massages", "Body Treatments"]
  },
  {
    icon: Star,
    title: "Premium Packages",
    description: "Comprehensive beauty experiences combining multiple services for ultimate pampering.",
    features: ["Full Makeover", "Bridal Packages", "VIP Experience"]
  },
  {
    icon: Users,
    title: "Group Events",
    description: "Private salon experiences perfect for bridal parties and special celebrations.",
    features: ["Private Parties", "Corporate Events", "Celebrations"]
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of premium beauty services, each crafted to enhance your natural elegance
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-4 w-3 h-3 rounded-full bg-primary"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-background to-muted border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-gold animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 p-3 w-fit rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                {/* Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3 group-hover:animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};