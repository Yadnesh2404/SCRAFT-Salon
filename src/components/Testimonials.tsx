import { Star, Quote, Heart, Crown, Sparkles, Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.3);

  return (
    <section id="testimonials" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced luxury section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-700 delay-200 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            What Our Clients
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              {" "}Say
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Enhanced luxury testimonials grid */}
        <div ref={testimonialsRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 delay-400 ${testimonialsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Testimonial 1 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Star className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Regular Client</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "SCRAFT Salon has transformed my beauty routine. The attention to detail and luxury experience is unmatched. Every visit feels like a special occasion."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Heart className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">First-time Client</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "I was hesitant about trying a luxury salon, but SCRAFT exceeded all expectations. The service quality and professional atmosphere are outstanding."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Crown className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Emily Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">VIP Member</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "As a VIP member, I receive exceptional personalized care. The team remembers my preferences and always delivers beyond my expectations."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 4 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Sparkles className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">David Thompson</h4>
                  <p className="text-sm text-muted-foreground">Business Professional</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "Perfect for business professionals who need to look their best. The quality of service and attention to detail is exceptional."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 5 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Award className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Lisa Park</h4>
                  <p className="text-sm text-muted-foreground">Beauty Enthusiast</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "I've tried many salons, but SCRAFT stands out for their innovative techniques and premium products. Worth every penny!"
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial 6 */}
          <div className="group">
            <div className="bg-white border border-border/50 rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary fill-current" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground">Robert Kim</h4>
                  <p className="text-sm text-muted-foreground">Family Client</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                "My entire family comes here. The staff is professional, friendly, and always delivers exceptional results. Highly recommended!"
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};