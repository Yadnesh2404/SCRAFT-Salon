import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import luxuryHeroImage from "@/assets/luxury-salon-hero.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img 
          src={luxuryHeroImage} 
          alt="Luxury salon interior with elegant styling chairs and golden lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-primary/20"></div>
      </div>
      
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-yellow-500/30 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-yellow-500/30 to-primary/30 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Logo/Brand Name */}
          <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground mb-4 tracking-wide drop-shadow-lg">
            <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">
              SCRAFT
            </span>
            <span className="text-foreground"> Salon</span>
          </h1>
          
          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-primary font-semibold mb-4 tracking-wider">
            Premium Hair • Beauty • Spa
          </p>
          
          {/* Tagline */}
          <p className="font-display text-xl md:text-3xl text-foreground/90 mb-12 italic max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Redefining the Luxury Salon Experience
          </p>
          
          {/* Elegant divider */}
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          {/* Description */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
            Where elegance meets expertise. Experience premium beauty services in our luxurious, minimalist sanctuary designed for discerning clients.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-6 rounded-xl group"
            >
              <Calendar className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              Book an Appointment
            </Button>
            
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-12 py-6 rounded-xl"
            >
              <Phone className="mr-3 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};