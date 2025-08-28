import { Star, Award, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.4);

  return (
    <section id="about" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced luxury section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-700 delay-200 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Story of
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              {" "}Excellence
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        {/* Enhanced luxury content */}
        <div ref={contentRef} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 transition-opacity duration-700 delay-400 ${contentVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground">
              Where Luxury Meets Artistry
              </h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded with a vision to create an unparalleled luxury experience, SCRAFT Salon has been at the forefront of beauty and wellness innovation. Our commitment to excellence spans over a decade, serving discerning clients who demand nothing but the best.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every service we offer is crafted with precision, using only the finest products and techniques. Our team of master stylists and beauty professionals brings years of expertise and a passion for creating stunning transformations.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-primary fill-current" />
                <span className="text-sm font-medium text-muted-foreground">Premium Quality</span>
            </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary fill-current" />
                <span className="text-sm font-medium text-muted-foreground">Award Winning</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 border border-primary/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">5000+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground">10+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced luxury stats */}
        <div ref={statsRef} className={`grid md:grid-cols-4 gap-8 transition-opacity duration-700 delay-600 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Expert Stylists</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Services Offered</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};