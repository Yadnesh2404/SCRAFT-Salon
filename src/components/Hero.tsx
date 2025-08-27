import { Crown, Sparkles } from "lucide-react";
import interior1Image from "@/assets/images/interior1.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Enhanced luxury background image */}
      <img 
        src={interior1Image} 
        alt="Luxury salon interior with elegant styling chairs"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Enhanced luxury gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-20"></div>
      
      {/* Enhanced luxury pattern overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-10"></div>
      
      {/* Enhanced decorative elements with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top decorative element */}
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-float">
          <Crown className="h-8 w-8 text-primary" />
        </div>
        
        {/* Bottom decorative element */}
        <div className="absolute bottom-20 right-1/4 w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
      
        {/* Additional floating elements */}
        <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
          <Crown className="h-6 w-6 text-primary" />
        </div>

        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '3s' }}>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      {/* Enhanced luxury content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced brand name */}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
          <span className="text-yellow-400 animate-pulse drop-shadow-2xl font-extrabold">
            SCRAFT
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Salon</span>
        </h1>
        
        {/* Enhanced luxury divider */}
        <div className="flex items-center justify-center mb-6 md:mb-8">
          <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="mx-6 md:mx-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
          <div className="h-px w-32 md:w-48 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
        </div>
          
        {/* Enhanced tagline */}
        <p className="font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 leading-relaxed">
          Redefining Luxury in Hair, Beauty & Spa
        </p>
        
        {/* Enhanced subline */}
        <p className="font-body text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed">
          Experience world-class grooming and care in a luxury setting where every detail is crafted to perfection
        </p>
        
        {/* Enhanced elegant divider */}
        <div className="flex items-center justify-center mb-8 md:mb-10">
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-primary/60"></div>
          <div className="mx-4 md:mx-6 w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-primary/60"></div>
        </div>
          
        {/* Enhanced description */}
        <p className="font-body text-sm md:text-base text-white/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Step into a world of elegance where premium services meet exceptional artistry. Our expert stylists and beauty professionals are dedicated to creating your perfect look in an atmosphere of refined luxury.
        </p>
        
        {/* Enhanced luxury CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          {/* Primary CTA - Enhanced luxury button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-luxury group"
          >
            <span className="relative z-10">Book an Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
          
          {/* Secondary CTA - Enhanced luxury outline button */}
          <button 
            onClick={() => scrollToSection('services')}
            className="btn-outline-luxury group"
          >
            <span className="relative z-10">View Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        {/* Enhanced bottom decorative element */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};