import { Sparkles, Award, Heart, Star } from "lucide-react";
import stylistImage from "@/assets/stylist-portrait.jpg";

export const About = () => {
  return (
    <>
      {/* Enhanced Golden divider with more breathing space */}
      <div className="py-16 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <div className="mx-8 w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg"></div>
            <div className="h-px w-48 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
          </div>
        </div>
      </div>
      
      <section id="about" className="py-32 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.2)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Enhanced Section Header */}
          <div className="text-center mb-24">
            <h2 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-8">
              Where <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Elegance</span> Meets Expertise
            </h2>
            <div className="flex items-center justify-center mb-10">
              <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
              <Sparkles className="mx-6 h-8 w-8 text-primary animate-pulse" />
              <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover the artistry behind every transformation at SCRAFT Salon
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Image Side */}
            <div className="relative animate-fade-in group">
              <div className="relative overflow-hidden rounded-3xl shadow-premium">
                <img 
                  src={stylistImage} 
                  alt="Professional stylist in luxury salon environment"
                  className="w-full h-[700px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent"></div>
                
                {/* Enhanced floating accent */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-r from-primary to-yellow-500 opacity-30 blur-xl animate-float group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/30 rounded-tl-3xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/30 rounded-br-3xl"></div>
              </div>
              
              {/* Floating star accent */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <Star className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Enhanced Content Side */}
            <div className="space-y-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  At <span className="text-primary font-semibold">SCRAFT Salon</span>, we believe that beauty is an art form, and every client deserves to be treated like a masterpiece. Our journey began with a simple vision: to create a sanctuary where luxury meets innovation, and where every service is delivered with uncompromising excellence.
                </p>
                
                <p className="font-body text-xl text-muted-foreground leading-relaxed">
                  Our team of master stylists and beauty experts are passionate about their craft, combining years of experience with the latest techniques and premium products to deliver results that exceed expectations.
                </p>
              </div>

              {/* Enhanced Features Grid */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold text-foreground mb-3">Award-Winning Team</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Certified professionals with international recognition and years of expertise</p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-8 rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-gold transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-yellow-500/10 group-hover:from-primary/20 group-hover:to-yellow-500/20 transition-all duration-300">
                      <Heart className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-semibold text-foreground mb-3">Personalized Care</h4>
                      <p className="font-body text-muted-foreground text-sm leading-relaxed">Tailored services designed specifically for your unique beauty needs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional premium touch */}
              <div className="pt-8">
                <div className="inline-flex items-center space-x-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
                  <Star className="h-5 w-5 text-primary" />
                  <span className="font-body text-sm font-medium text-primary">Premium Beauty Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};