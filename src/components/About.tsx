import { Star, Award, Users, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3);
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.4);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Story of
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Excellence</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the passion and dedication behind SCRAFT Salon's commitment to luxury beauty experiences
          </p>
        </div>

        {/* Enhanced content grid */}
        <div ref={contentRef} className={`grid lg:grid-cols-2 gap-16 items-center mb-20 transition-all duration-1000 delay-200 ${
          contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Enhanced left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-display text-3xl font-bold text-foreground leading-tight">
                Where Luxury Meets
                <span className="block text-primary">Artistry</span>
              </h3>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                At SCRAFT Salon, we believe that beauty is not just about appearance—it's about confidence, 
                self-expression, and the art of transformation. Our journey began with a simple vision: 
                to create a sanctuary where every client feels valued, beautiful, and empowered.
              </p>
              <p className="font-body text-lg text-muted-foreground leading-relaxed">
                Our expert team of stylists and beauty professionals brings years of experience and 
                a passion for innovation to every service. We combine traditional techniques with 
                cutting-edge technology to deliver results that exceed expectations.
              </p>
            </div>

            {/* Enhanced feature highlights */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Star className="h-5 w-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">Personalized Care</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <span className="font-body font-medium text-foreground">Timely Service</span>
              </div>
            </div>
          </div>

          {/* Enhanced right content - Image placeholder */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-texture-elegant opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div className="w-24 h-24 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <Star className="h-12 w-12 text-primary" />
                </div>
                <h4 className="font-display text-2xl font-semibold text-foreground mb-3">Luxury Experience</h4>
                <p className="font-body text-muted-foreground">Where every detail matters</p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced statistics section */}
        <div ref={statsRef} className={`grid md:grid-cols-4 gap-8 transition-all duration-1000 delay-400 ${
          statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">500+</div>
            <div className="font-body text-muted-foreground">Happy Clients</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">10+</div>
            <div className="font-body text-muted-foreground">Years Experience</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="font-body text-muted-foreground">Expert Stylists</div>
          </div>
          
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">24/7</div>
            <div className="font-body text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};