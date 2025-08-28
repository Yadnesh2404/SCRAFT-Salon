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
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation(0.05);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.05);
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollAnimation(0.05);
  const { ref: descriptionRef, isVisible: descriptionVisible } = useScrollAnimation(0.05);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.05);

  return (
    <section 
      id="hero"
      ref={heroRef} 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20 md:pt-0"
      style={{ backgroundImage: `url(${interior1Image})` }}
    >
      {/* Enhanced dark gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      
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
        {/* Enhanced brand name - reduced animation delay */}
        <h1 ref={titleRef} className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-500 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <span className="text-yellow-400 animate-pulse drop-shadow-2xl font-extrabold">
            SCRAFT
          </span>
          <br />
          <span className="text-white drop-shadow-lg">Salon</span>
        </h1>
        
        {/* Enhanced luxury divider - reduced delay */}
        <div className={`flex items-center justify-center mb-6 md:mb-8 transition-all duration-500 delay-100 ${
          titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <div className="mx-6 md:mx-8 w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
          <div className="h-px w-32 md:w-48 bg-gradient-to-l from-transparent via-primary to-transparent"></div>
        </div>
          
        {/* Enhanced tagline - reduced delay */}
        <p ref={taglineRef} className={`font-display text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 md:mb-6 leading-relaxed transition-all duration-500 delay-150 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Redefining Luxury in Hair, Beauty & Spa
        </p>
        
        {/* Enhanced subline - reduced delay */}
        <p className={`font-body text-base md:text-lg lg:text-xl text-white/80 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-500 delay-200 ${
          taglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Experience world-class grooming and care in a luxury setting where every detail is crafted to perfection
        </p>
        
        {/* Enhanced elegant divider - reduced delay */}
        <div className={`flex items-center justify-center mb-8 md:mb-10 transition-all duration-500 delay-250 ${
          taglineVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}>
          <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-primary/60"></div>
          <div className="mx-4 md:mx-6 w-3 h-3 rounded-full bg-primary/60"></div>
          <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-primary/60"></div>
        </div>
          
        {/* Enhanced description - reduced delay */}
        <p ref={descriptionRef} className={`font-body text-sm md:text-base text-white/70 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-500 delay-300 ${
          descriptionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Step into a world of elegance where premium services meet exceptional artistry. Our expert stylists and beauty professionals are dedicated to creating your perfect look in an atmosphere of refined luxury.
        </p>
        
        {/* Enhanced luxury CTAs - visible immediately with minimal delay */}
        <div ref={ctaRef} className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-500 delay-100 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Primary CTA - Enhanced luxury button with gold styling */}
          <button 
            onClick={() => scrollToSection('contact')}
            className="bg-[#C9A86A] text-white font-display font-bold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(201,168,106,0.6)] border-2 border-[#C9A86A] transition-all duration-300 ease-out"
          >
            Book an Appointment
          </button>
          
          {/* Secondary CTA - Enhanced luxury outline button with gold border */}
          <button 
            onClick={() => scrollToSection('services')}
            className="bg-transparent border-2 border-[#C9A86A] text-[#C9A86A] font-display font-semibold px-8 py-4 rounded-2xl hover:bg-[#C9A86A] hover:text-white hover:scale-105 hover:shadow-[0_0_15px_rgba(201,168,106,0.4)] transition-all duration-300 ease-out"
          >
            View Services
          </button>
        </div>

        {/* Enhanced bottom decorative element - reduced delay */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-500 delay-400 ${
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