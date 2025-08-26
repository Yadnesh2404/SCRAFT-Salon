import { Sparkles, Award, Heart } from "lucide-react";
import stylistImage from "@/assets/stylist-portrait.jpg";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Where <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Elegance</span> Meets Expertise
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <Sparkles className="mx-4 h-6 w-6 text-primary" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img 
                src={stylistImage} 
                alt="Professional stylist in luxury salon environment"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-r from-primary to-yellow-500 opacity-20 blur-xl animate-float"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                At Luxe Salon, we believe that beauty is an art form, and every client deserves to be treated like a masterpiece. Our journey began with a simple vision: to create a sanctuary where luxury meets innovation, and where every service is delivered with uncompromising excellence.
              </p>
              
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                Our team of master stylists and beauty experts are passionate about their craft, combining years of experience with the latest techniques and premium products to deliver results that exceed expectations.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <Award className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Award-Winning Team</h4>
                  <p className="font-body text-muted-foreground text-sm">Certified professionals with international recognition</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:shadow-elegant transition-all duration-300">
                <Heart className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-display text-xl font-semibold text-foreground mb-2">Personalized Care</h4>
                  <p className="font-body text-muted-foreground text-sm">Tailored services designed just for you</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};