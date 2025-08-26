import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fashion Executive",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "SCRAFT Salon transformed my look beyond my expectations. The attention to detail and luxurious experience made me feel like royalty. I've never felt more confident!",
    rating: 5
  },
  {
    name: "Amanda Rodriguez",
    role: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "The team's expertise and the salon's elegant atmosphere create an unmatched experience. Every visit feels like a rejuvenating escape from the everyday.",
    rating: 5
  },
  {
    name: "Isabella Thompson", 
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    text: "From the moment I walked in, I knew this was different. The personalized service and stunning results speak for themselves. Absolutely exceptional.",
    rating: 5
  },
  {
    name: "Maya Patel",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "The bridal package exceeded every dream I had for my wedding day. The team made me feel like a princess and captured my vision perfectly.",
    rating: 5
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-b from-background via-muted/40 to-secondary/30 relative overflow-hidden">
      {/* Enhanced textured background overlay */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_50%,rgba(217,_155,_55,_0.15)_0%,transparent_60%)]"></div>
      
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary to-yellow-500 blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-l from-yellow-500 to-primary blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-gradient-to-r from-primary/30 to-transparent blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Golden divider at top */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="mx-6 w-3 h-3 rounded-full bg-primary animate-ping shadow-lg"></div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
        
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-8">
            Client <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Quote className="mx-6 h-8 w-8 text-primary animate-pulse" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hear from our valued clients who have experienced the <span className="text-primary font-semibold">SCRAFT Salon difference</span>
          </p>
        </div>

        {/* Enhanced Testimonial Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-700 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="bg-gradient-to-br from-background/90 to-muted/50 backdrop-blur-md rounded-3xl p-16 shadow-premium border border-border/50 relative overflow-hidden">
              {/* Enhanced background texture */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.3)_0%,transparent_50%)]"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"></div>
              
              <div className="relative z-10">
                {/* Enhanced Quote Icon */}
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
                    <Quote className="h-10 w-10 text-primary opacity-60" />
                  </div>
                </div>

                {/* Enhanced Testimonial Text */}
                <blockquote className="font-display text-2xl md:text-3xl text-center text-foreground italic leading-relaxed mb-16 max-w-4xl mx-auto">
                  "{current.text}"
                </blockquote>

                {/* Enhanced Client Info */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center mb-8">
                    <div className="relative mr-8">
                      <img 
                        src={current.image} 
                        alt={current.name}
                        className="w-24 h-24 rounded-full object-cover shadow-elegant border-4 border-background"
                      />
                      <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-gradient-to-r from-primary to-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-display text-2xl font-semibold text-foreground mb-2">{current.name}</h4>
                      <p className="font-body text-muted-foreground text-lg">{current.role}</p>
                    </div>
                  </div>

                  {/* Enhanced Star Rating */}
                  <div className="flex items-center space-x-2">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-primary text-primary animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center mt-16 space-x-8">
            <Button
              onClick={prevTestimonial}
              variant="luxury"
              size="icon"
              className="rounded-full h-14 w-14 shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            {/* Enhanced Dots Indicator */}
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsAnimating(false), 500);
                    }
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-500 transform hover:scale-125 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg shadow-primary/50' 
                      : 'bg-border hover:bg-primary/50 hover:shadow-md'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="luxury"
              size="icon"
              className="rounded-full h-14 w-14 shadow-elegant hover:shadow-gold transition-all duration-300 transform hover:scale-110"
              disabled={isAnimating}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Enhanced Call-to-Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20">
            <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            <span className="font-body text-lg font-medium text-primary">Join Our Satisfied Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};