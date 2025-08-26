import { Scissors, Palette, Sparkles, Crown, Star, Users, Zap } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Hair Styling & Cuts",
    description: "Precision cuts and luxury styling with premium products for the perfect look.",
    features: ["Consultation", "Wash & Style", "Finishing"],
    category: "Hair"
  },
  {
    icon: Palette,
    title: "Color & Highlights", 
    description: "Expert color correction and highlights using top-tier professional products.",
    features: ["Color Analysis", "Custom Blending", "Aftercare"],
    category: "Hair"
  },
  {
    icon: Sparkles,
    title: "Makeup Artistry",
    description: "Professional makeup application for special events and everyday elegance.",
    features: ["Bridal Makeup", "Event Styling", "Lessons"],
    category: "Beauty"
  },
  {
    icon: Crown,
    title: "Spa & Treatments",
    description: "Rejuvenating spa services and luxury treatments for total relaxation.",
    features: ["Facials", "Massages", "Body Treatments"],
    category: "Spa"
  },
  {
    icon: Star,
    title: "Premium Packages",
    description: "Comprehensive beauty experiences combining multiple services for ultimate pampering.",
    features: ["Full Makeover", "Bridal Packages", "VIP Experience"],
    category: "Premium"
  },
  {
    icon: Users,
    title: "Group Events",
    description: "Private salon experiences perfect for bridal parties and special celebrations.",
    features: ["Private Parties", "Corporate Events", "Celebrations"],
    category: "Events"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Enhanced background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_30%,rgba(217,_155,_55,_0.2)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-8">
            Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
            Discover our comprehensive range of premium beauty services, each crafted to enhance your natural elegance and transform your beauty experience
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Zap className="mx-6 h-8 w-8 text-primary animate-pulse" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Enhanced Services Grid with alternating backgrounds */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className={`group relative p-10 rounded-3xl border transition-all duration-700 hover:shadow-gold animate-fade-in transform hover:-translate-y-3 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-background to-muted/50 border-border/50 hover:border-primary/40' 
                  : 'bg-gradient-to-br from-muted/30 to-background border-border/30 hover:border-primary/40'
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Enhanced Background Gradient on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Category Badge */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-medium text-primary bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full border border-primary/20">
                  {service.category}
                </span>
              </div>
              
              <div className="relative z-10">
                {/* Enhanced Icon */}
                <div className="mb-8 p-4 w-fit rounded-2xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-500 group-hover:scale-110">
                  <service.icon className="h-10 w-10 text-primary" />
                </div>
                
                {/* Enhanced Title */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-6 group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </h3>
                
                {/* Enhanced Description */}
                <p className="font-body text-muted-foreground mb-8 leading-relaxed text-base">
                  {service.description}
                </p>
                
                {/* Enhanced Features */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary mr-4 group-hover:animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Enhanced Decorative corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
            <Star className="h-6 w-6 text-primary animate-pulse" />
            <span className="font-body text-lg font-medium text-primary">Book Your Premium Experience Today</span>
          </div>
        </div>
      </div>
    </section>
  );
};