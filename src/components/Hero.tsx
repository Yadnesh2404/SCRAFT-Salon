import { Crown, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import interior1Image from "@/assets/images/interior1.jpg";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollAnimation(0.3);
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation(0.4);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.5);

  return (
    <section 
      id="hero"
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${interior1Image})` }}
    >
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float transition-all duration-1000 delay-500 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '2s' }}>
          <Crown className="h-6 w-6 text-primary" />
        </div>

        <div className={`absolute bottom-1/3 left-1/3 w-10 h-10 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full flex items-center justify-center animate-float transition-all duration-1000 delay-700 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ animationDelay: '3s' }}>
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
      </div>
      
      {/* Enhanced luxury content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced brand name */}
        <h1 ref={titleRef} className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-700 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <span className="text-yellow-400 animate-pulse drop-shadow-2xl font-extrabold">
            SCRAFT
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Salon</span>
        </h1>
        
        {/* Enhanced luxury divider */}
        <div className={`flex items-center justify-center mb-6 md:mb-8 transition-all duration-700 delay-200 ${
          titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="mx-6 md:mx-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
          <div className="h-px w-32 md:w-48 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
        </div>
          
        {/* Enhanced tagline */}
        <p ref={taglineRef} className={`font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 leading-relaxed transition-all duration-700 delay-300 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          Redefining Luxury in Hair, Beauty & Spa
        </p>
        
        {/* Enhanced subline */}
        <p className={`font-body text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          Experience world-class grooming and care in a luxury setting where every detail is crafted to perfection
        </p>
        
        {/* Enhanced elegant divider */}
        <div className={`flex items-center justify-center mb-8 md:mb-10 transition-all duration-700 delay-500 ${
          taglineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-primary/60"></div>
          <div className="mx-4 md:mx-6 w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-primary/60"></div>
        </div>
          
        {/* Enhanced description */}
        <p ref={descriptionRef} className={`font-body text-sm md:text-base text-white/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-600 ${
          descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          Step into a world of elegance where premium services meet exceptional artistry. Our expert stylists and beauty professionals are dedicated to creating your perfect look in an atmosphere of refined luxury.
        </p>
        
        {/* Enhanced luxury CTAs */}
        <div ref={ctaRef} className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-700 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Primary CTA - Enhanced luxury button */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#d4af37] text-white font-display font-bold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 hover:opacity-95 hover:shadow-[0_0_15px_rgba(212,175,55,0.6)] transition-all duration-300 ease-out"
          >
            Book an Appointment
          </button>
          
          {/* Secondary CTA - Enhanced luxury outline button */}
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-transparent border border-yellow-500 text-yellow-500 font-display font-semibold px-6 py-3 rounded-2xl hover:bg-[#f8f0e3] hover:text-yellow-500 hover:scale-105 transition-all duration-300 ease-out"
          >
            View Services
          </button>
        </div>

        {/* Enhanced bottom decorative element */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-1000 ${
          heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};