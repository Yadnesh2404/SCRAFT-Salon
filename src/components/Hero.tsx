import { Button } from "@/components/ui/button";
import { Calendar, Phone, Sparkles } from "lucide-react";
import luxuryHeroImage from "@/assets/luxury-salon-hero.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image with enhanced overlay */}
      <div className="absolute inset-0">
        <img 
          src={luxuryHeroImage} 
          alt="Luxury salon interior with elegant styling chairs and golden lighting"
          className="w-full h-full object-cover scale-105"
        />
        {/* Enhanced gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/50 to-primary/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Enhanced decorative elements with more premium feel */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-primary/40 to-yellow-500/40 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-500/40 to-primary/40 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(217,_155,_55,_0.3)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Enhanced Logo/Brand Name with better typography */}
          <div className="mb-8">
            <h1 className="font-display text-7xl md:text-9xl font-bold text-foreground mb-4 tracking-wider drop-shadow-2xl">
              <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-shimmer">
                SCRAFT
              </span>
              <span className="text-foreground"> Salon</span>
            </h1>
          </div>
          
          {/* Enhanced Subheading with premium styling */}
          <div className="mb-8">
            <p className="font-body text-xl md:text-2xl text-primary font-semibold tracking-widest uppercase letter-spacing-2">
              Premium Hair • Beauty • Spa
            </p>
          </div>
          
          {/* Enhanced Tagline with better visual hierarchy */}
          <div className="mb-12">
            <p className="font-display text-2xl md:text-4xl text-foreground/95 italic max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Redefining the <span className="text-primary font-bold">Luxury Salon Experience</span>
            </p>
          </div>
          
          {/* Enhanced elegant divider with animation */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary animate-pulse"></div>
            <div className="mx-6 w-3 h-3 rounded-full bg-primary animate-ping"></div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary animate-pulse"></div>
          </div>
          
          {/* Enhanced Description with better spacing */}
          <div className="mb-20">
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where <span className="text-primary font-semibold">elegance meets expertise</span>. Experience premium beauty services in our luxurious, minimalist sanctuary designed for discerning clients.
            </p>
          </div>
          
          {/* Enhanced CTAs with better visual hierarchy */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-16 py-8 rounded-2xl group shadow-gold hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Book an Appointment
            </Button>
            
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-16 py-8 rounded-2xl group shadow-elegant hover:shadow-xl transition-all duration-500 transform hover:scale-105"
            >
              <Phone className="mr-3 h-6 w-6" />
              Call Now
            </Button>
          </div>

          {/* Additional premium touch - floating sparkles */}
          <div className="absolute top-1/4 left-1/4 animate-float opacity-60">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-float opacity-60" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};