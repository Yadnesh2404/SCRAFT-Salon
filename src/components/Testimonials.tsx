import { Star, Quote, Heart, Crown, Sparkles, Award, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState, useEffect } from "react";

export const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.05);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.05);
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation(0.05);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "SCRAFT Salon has transformed my beauty routine. The attention to detail and luxury experience is unmatched. Every visit feels like a special occasion.",
      name: "Sarah Johnson",
      role: "Regular Client",
      rating: 5
    },
    {
      quote: "I was hesitant about trying a luxury salon, but SCRAFT exceeded all expectations. The service quality and professional atmosphere are outstanding.",
      name: "Michael Chen",
      role: "First-time Client",
      rating: 5
    },
    {
      quote: "As a VIP member, I receive exceptional personalized care. The team remembers my preferences and always delivers beyond my expectations.",
      name: "Emily Rodriguez",
      role: "VIP Member",
      rating: 5
    },
    {
      quote: "Perfect for business professionals who need to look their best. The quality of service and attention to detail is exceptional.",
      name: "David Thompson",
      role: "Business Professional",
      rating: 5
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: '#F8F5F0' }}>
      {/* Gold divider above section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"></div>
      
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Minimal elegant section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-500 delay-100 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A86A] mx-auto"></div>
        </div>
        
        {/* Elegant testimonials carousel */}
        <div ref={testimonialsRef} className={`relative max-w-4xl mx-auto transition-opacity duration-500 delay-200 ${testimonialsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Carousel container */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl p-8 md:p-12 mx-4 shadow-lg">
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6">
                      <Quote className="h-8 w-8 text-[#C9A86A] opacity-60" />
                    </div>
                    
                    {/* Testimonial quote */}
                    <blockquote className="text-center mb-8">
                      <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed italic">
                        "{testimonial.quote}"
                      </p>
                    </blockquote>
                    
                    {/* Star rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#C9A86A] fill-current mx-0.5" />
                      ))}
                    </div>
                    
                    {/* Client info */}
                    <div className="text-center">
                      <h4 className="font-display text-xl font-semibold text-gray-800 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronLeft className="h-5 w-5 text-[#C9A86A]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          >
            <ChevronRight className="h-5 w-5 text-[#C9A86A]" />
          </button>
          
          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-[#C9A86A] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};