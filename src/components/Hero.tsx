import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import interior1Image from "@/assets/images/interior1.jpg";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-width background image with dark translucent gradient overlay */}
      <div className="absolute inset-0">
        <img 
          src={interior1Image} 
          alt="Luxury salon interior with elegant styling chairs and golden lighting"
          className="w-full h-full object-cover scale-105"
        />
        {/* Dark translucent gradient overlay for premium luxury feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Enhanced decorative elements with premium feel */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-gradient-to-r from-primary/40 to-yellow-500/40 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-yellow-500/40 to-primary/40 blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,rgba(217,_155,_55,_0.3)_0%,transparent_50%)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Brand Name "SCRAFT Salon" in large bold text */}
          <div className="mb-8">
            <h1 className="font-display text-7xl md:text-9xl font-bold text-white mb-4 tracking-wider drop-shadow-2xl">
              <span className="bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent animate-shimmer">
                SCRAFT
              </span>
              <span className="text-white"> Salon</span>
            </h1>
          </div>
          
          {/* Tagline */}
          <div className="mb-8">
            <p className="font-display text-2xl md:text-4xl text-primary font-semibold tracking-widest uppercase letter-spacing-2">
              Redefining Luxury in Hair, Beauty & Spa
            </p>
          </div>
          
          {/* Subline */}
          <div className="mb-12">
            <p className="font-display text-xl md:text-3xl text-white/95 italic max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              Experience world-class grooming and care in a luxury setting.
            </p>
          </div>
          
          {/* Enhanced elegant divider with animation */}
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary animate-pulse"></div>
            <div className="mx-6 w-3 h-3 rounded-full bg-primary animate-ping"></div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary animate-pulse"></div>
          </div>
          
          {/* CTAs: Gold/black "Book Appointment" and outlined "View Services" */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-primary to-yellow-500 text-white font-semibold text-lg px-16 py-8 rounded-2xl group shadow-gold hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:from-primary/90 hover:to-yellow-500/90"
            >
              <Calendar className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Book Appointment
            </Button>
            
            <Button 
              onClick={() => scrollToSection('services')}
              variant="outline"
              className="bg-transparent text-white border-2 border-white font-semibold text-lg px-16 py-8 rounded-2xl hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105 shadow-elegant hover:shadow-xl"
            >
              <Sparkles className="mr-3 h-6 w-6" />
              View Services
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