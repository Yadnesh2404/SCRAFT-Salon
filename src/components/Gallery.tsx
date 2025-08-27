import { Star, Heart, Eye, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import interior1Image from "@/assets/images/interior1.jpg";
import interior2Image from "@/assets/images/interior2.jpg";
import interior3Image from "@/assets/images/interior3.jpg";

export const Gallery = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.3);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation(0.4);

  const galleryItems = [
    {
      id: 1,
      image: interior1Image,
      title: "Luxury Salon Interior",
      description: "Elegant styling chairs and premium atmosphere",
      category: "Interior"
    },
    {
      id: 2,
      image: interior2Image,
      title: "Premium Styling Area",
      description: "Professional styling stations with modern equipment",
      category: "Styling"
    },
    {
      id: 3,
      image: interior3Image,
      title: "Relaxation Zone",
      description: "Tranquil spa and wellness treatment area",
      category: "Wellness"
    }
  ];

  return (
    <section id="gallery" ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-luxury opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div ref={titleRef} className={`text-center mb-20 transition-all duration-1000 ${
          titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Luxury
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Gallery</span>
          </h2>
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our luxurious salon and discover the perfect setting for your beauty transformation
          </p>
        </div>

        {/* Enhanced gallery grid */}
        <div ref={galleryRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${
          galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`group bg-gradient-to-br from-background to-muted/30 rounded-3xl overflow-hidden border border-border/50 hover:border-primary/30 hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 relative transition-all duration-1000 delay-${300 + index * 100}`}
            >
              {/* Enhanced image container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Enhanced overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Enhanced category badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-white bg-primary/80 rounded-full border border-primary/20 backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
                
                {/* Enhanced action buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Heart className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Eye className="h-4 w-4 text-white" />
                  </button>
                </div>
                
                {/* Enhanced floating star */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                  <Star className="h-4 w-4 text-primary" />
                </div>
              </div>
              
              {/* Enhanced content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Enhanced view button */}
                <button className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300">
                  <span className="font-body font-medium">View Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA section */}
        <div ref={ctaRef} className={`text-center transition-all duration-1000 delay-500 ${
          ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="bg-gradient-to-r from-primary/10 to-yellow-500/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              Experience Our Luxury Firsthand
            </h3>
            <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Book your appointment today and see our beautiful salon in person. 
              Our team is ready to welcome you to the SCRAFT experience.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury group"
            >
              <span className="relative z-10">Book Your Visit</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
