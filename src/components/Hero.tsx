import { Crown, Sparkles, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useEffect, useState } from "react";
import interior1Image from "@/assets/images/interior1.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.05);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.05);
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollAnimation(0.05);
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation(0.05);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.05);
  
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero"
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20 md:pt-0"
      style={{ 
        backgroundImage: `url(${interior1Image})`
      }}
    >
      {/* Darker gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/60"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float transition-all duration-500 delay-200 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '2s' }}>
          <Crown className="h-6 w-6 text-primary" />
        </div>

        <div className={`absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float transition-all duration-500 delay-300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '3s' }}>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      {/* Enhanced luxury content - positioned lower to avoid navbar overlap */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16 md:mt-0">
        {/* Main headline - Where Beauty Meets Luxury */}
        <h1 ref={titleRef} className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-center transition-all duration-1000 ease-out ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Where Beauty Meets Luxury
        </h1>
        
        {/* Soft gold divider line */}
        <div className={`flex items-center justify-center mb-6 transition-all duration-700 delay-300 ${
          titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="h-px w-20 md:w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          <div className="mx-3 md:mx-4 w-1.5 h-1.5 rounded-full bg-amber-400"></div>
          <div className="h-px w-20 md:w-24 bg-gradient-to-l from-transparent via-amber-400 to-transparent"></div>
        </div>
          
        {/* Subheadline - Hair • Beauty • Spa */}
        <p ref={taglineRef} className={`font-body text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed tracking-wider text-center transition-all duration-700 delay-500 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Hair • Beauty • Spa
        </p>
        
        {/* Supporting text */}
        <p className={`font-body text-base md:text-lg text-white/80 mb-12 leading-relaxed text-center max-w-2xl mx-auto transition-all duration-700 delay-700 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          Step into a world of elegance, comfort, and premium care at SCRAFT Salon.
        </p>
        
        
        {/* Staggered luxury CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA - Gold button with glow effect */}
          <button 
            onClick={() => scrollToSection('contact')}
            className={`relative overflow-hidden bg-gradient-to-r from-amber-500 to-yellow-600 text-white font-display font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transform hover:scale-105 transition-all duration-500 ease-out group ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: ctaVisible ? '900ms' : '0ms' }}
          >
            <span className="relative z-10">Book Appointment</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </button>
          
          {/* Secondary CTA - Outlined style with gold glow on hover */}
          <button 
            onClick={() => scrollToSection('services')}
            className={`relative overflow-hidden bg-transparent border-2 border-white text-white font-display font-semibold px-10 py-4 rounded-full hover:text-gray-900 hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transform hover:scale-105 transition-all duration-500 ease-out group ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: ctaVisible ? '1100ms' : '0ms' }}
          >
            <span className="relative z-10">View Services</span>
            <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></div>
          </button>
        </div>

        {/* Subtle scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-700 delay-1300 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Animated scroll indicator */}
          <div className="flex flex-col items-center animate-bounce">
            <ChevronDown className="h-6 w-6 text-amber-400 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};