import { Sparkles, Award, Heart, Star, Crown, Users, CheckCircle } from "lucide-react";
import stylistImage from "@/assets/stylist-portrait.jpg";

export const About = () => {
  return (
    <>
      {/* Enhanced Golden divider with more breathing space */}
      <div className="py-16 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-center">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-8 w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg"></div>
            <div className="h-px w-48 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
      
      <section id="about" className="py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        {/* Enhanced background texture */}
        <div className="absolute inset-0 opacity-8 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.3)_0%,transparent_50%)]"></div>
        
        {/* Luxury pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(217,155,55,0.05)_40px,rgba(217,155,55,0.05)_80px)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Story</span>
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
              <Crown className="mx-6 h-8 w-8 text-primary animate-pulse" />
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              The story behind SCRAFT Salon's commitment to luxury and excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Content Side - Left */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-6">
                <p className="font-display text-xl text-muted-foreground leading-relaxed italic">
                  At <span className="text-primary font-semibold">SCRAFT Salon</span>, we believe that beauty is an art form, and every client deserves to be treated like a masterpiece.
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  Our journey began with a vision to create a sanctuary where luxury meets innovation, and where every service is delivered with uncompromising excellence. Founded by master stylists with decades of experience, SCRAFT Salon has become synonymous with premium beauty experiences.
                </p>
                
                <p className="font-body text-lg text-muted-foreground leading-relaxed">
                  We believe that true luxury isn't just about the services we offer, but about the entire experience we create. From the moment you step through our doors, you're enveloped in an atmosphere of sophistication and tranquility.
                </p>
              </div>

              {/* Enhanced Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Luxury Experience</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Premium atmosphere and exceptional service quality</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Personalized Care</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Tailored services for your unique beauty needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional premium features */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Expert Consultation</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Personalized beauty consultations</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-foreground mb-2">Quality Assurance</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Premium products and guaranteed satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional premium touch */}
              <div className="pt-4">
                <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm font-medium text-primary">Premium Beauty Experience</span>
                </div>
              </div>
            </div>

            {/* Enhanced Image Side - Right (reduced size) */}
            <div className="relative animate-fade-in group">
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <img 
                  src={stylistImage} 
                  alt="Professional stylist in luxury salon environment"
                  className="w-full h-[500px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                
                {/* Enhanced floating accent */}
                <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-yellow-500 opacity-30 blur-xl animate-float group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/30 rounded-br-3xl"></div>
              </div>
              
              {/* Floating star accent */}
              <div className="absolute -bottom-3 -left-3 w-12 h-12 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Star className="h-6 w-6 text-primary" />
              </div>

              {/* Additional floating elements */}
              <div className="absolute -top-3 left-1/4 w-10 h-10 bg-gradient-to-r from-primary/15 to-yellow-500/15 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};