import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fashion Executive",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    text: "Luxe Salon transformed my look beyond my expectations. The attention to detail and luxurious experience made me feel like royalty. I've never felt more confident!",
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-background via-muted to-secondary relative overflow-hidden">
      {/* Textured background overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(217,_155,_55,_0.1)_0%,transparent_50%)]"></div>
      
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-primary to-yellow-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-l from-yellow-500 to-primary blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Golden divider at top */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
          <div className="mx-4 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
        </div>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
            Client <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <Quote className="mx-4 h-6 w-6 text-primary" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from our valued clients who have experienced the SCRAFT Salon difference
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-12 shadow-premium border border-border/50">
              {/* Quote Icon */}
              <div className="text-center mb-8">
                <Quote className="h-16 w-16 text-primary mx-auto opacity-30" />
              </div>

              {/* Testimonial Text */}
              <blockquote className="font-display text-2xl md:text-3xl text-center text-foreground italic leading-relaxed mb-12">
                "{current.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-6">
                  <img 
                    src={current.image} 
                    alt={current.name}
                    className="w-20 h-20 rounded-full object-cover shadow-elegant mr-6"
                  />
                  <div>
                    <h4 className="font-display text-xl font-semibold text-foreground">{current.name}</h4>
                    <p className="font-body text-muted-foreground">{current.role}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <Button
              onClick={prevTestimonial}
              variant="luxury"
              size="icon"
              className="rounded-full h-12 w-12"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
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
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextTestimonial}
              variant="luxury"
              size="icon"
              className="rounded-full h-12 w-12"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};