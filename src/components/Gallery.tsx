import { Star, Heart, Eye, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import interior1Image from "@/assets/images/interior1.jpg";
import interior2Image from "@/assets/images/interior2.jpg";
import interior3Image from "@/assets/images/interior3.jpg";

export const Gallery = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.3);

  return (
    <section id="gallery" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-700 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced luxury section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-700 delay-200 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Luxury
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              {" "}Gallery
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        {/* Enhanced luxury gallery grid */}
        <div ref={galleryRef} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-700 delay-400 ${galleryVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Gallery Item 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src={interior1Image} 
                alt="Luxury salon interior with elegant styling chairs"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-display font-semibold">Elegant Interior</h4>
                <p className="text-sm text-white/80">Luxury styling area</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 2 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src={interior2Image} 
                alt="Premium salon treatment room"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-display font-semibold">Treatment Room</h4>
                <p className="text-sm text-white/80">Premium spa services</p>
              </div>
            </div>
          </div>

          {/* Gallery Item 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src={interior3Image} 
                alt="Luxury salon reception area"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="font-display font-semibold">Reception Area</h4>
                <p className="text-sm text-white/80">Welcoming entrance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
