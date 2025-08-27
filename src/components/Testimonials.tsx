import { Star, Quote, Heart, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.4);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Regular Client",
      rating: 5,
      content: "SCRAFT Salon has completely transformed my beauty routine. The attention to detail and luxury experience is unmatched. Every visit feels like a special occasion.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "First-time Visitor",
      rating: 5,
      content: "I was blown away by the professionalism and quality of service. The stylists are true artists who understand exactly what you want. Highly recommended!",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Bridal Client",
      rating: 5,
      content: "My wedding day look was absolutely perfect! The team at SCRAFT went above and beyond to make me feel beautiful and confident. It was a dream experience.",
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Heart },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "15+", label: "Years Experience", icon: Crown },
    { number: "24/7", label: "Support Available", icon: Crown }
  ];

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 relative overflow-hidden">
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
            What Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover why our clients choose SCRAFT Salon for their beauty and wellness needs
          </p>
        </div>

        {/* Enhanced testimonials grid */}
        <div ref={testimonialsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${
          testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`group bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden transition-all duration-1000 delay-${300 + index * 100}`}
            >
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-texture-elegant opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                {/* Enhanced quote icon */}
                <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Quote className="h-6 w-6 text-primary" />
                </div>
                
                {/* Enhanced rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Enhanced content */}
                <p className="font-body text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Enhanced author info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center text-primary font-display font-bold text-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="font-body text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced statistics section */}
        <div ref={statsRef} className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="font-display text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="font-body text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};