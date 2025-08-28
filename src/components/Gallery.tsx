import { Star, Heart, Eye, ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import interior1Image from "@/assets/images/interior1.jpg";
import interior2Image from "@/assets/images/interior2.jpg";
import interior3Image from "@/assets/images/interior3.jpg";

export const Gallery = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.05);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.05);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.05);
  
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const galleryImages = [
    {
      src: interior1Image,
      alt: "Luxury salon interior with elegant styling chairs",
      title: "Elegant Styling Area",
      description: "Premium styling stations with luxury amenities"
    },
    {
      src: interior2Image,
      alt: "Premium salon treatment room",
      title: "Treatment Room",
      description: "Private spaces for personalized beauty treatments"
    },
    {
      src: interior3Image,
      alt: "Luxury salon reception area",
      title: "Reception Area",
      description: "Welcoming entrance with modern luxury design"
    },
    {
      src: interior1Image,
      alt: "Luxury hair washing stations",
      title: "Hair Care Station",
      description: "State-of-the-art hair washing and treatment area"
    },
    {
      src: interior2Image,
      alt: "VIP private suite",
      title: "VIP Suite",
      description: "Exclusive private suite for premium clients"
    },
    {
      src: interior3Image,
      alt: "Spa relaxation lounge",
      title: "Relaxation Lounge",
      description: "Tranquil space for pre and post-treatment relaxation"
    }
  ];
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" ref={sectionRef} className={`py-24 relative overflow-hidden transition-opacity duration-500 ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced luxury background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background"></div>
      
      {/* Luxury texture overlay */}
      <div className="absolute inset-0 bg-texture-elegant opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced luxury section title */}
        <div ref={titleRef} className={`text-center mb-16 transition-opacity duration-500 delay-100 ${titleVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Luxury Gallery
          </h2>
          <div className="w-16 h-0.5 bg-[#C9A86A] mx-auto"></div>
        </div>
        
        {/* Responsive gallery grid */}
        <div ref={galleryRef} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 delay-200 ${galleryVisible ? 'opacity-100' : 'opacity-0'}`}>
          {galleryImages.map((image, index) => (
            <div key={index} className="group cursor-pointer" onClick={() => openLightbox(index)}>
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-display font-semibold">{image.title}</h4>
                  <p className="text-sm text-white/80">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation buttons */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Main image */}
              <img 
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image info */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-display text-xl font-semibold mb-2">
                    {galleryImages[currentImageIndex].title}
                  </h3>
                  <p className="text-white/80">
                    {galleryImages[currentImageIndex].description}
                  </p>
                  <div className="flex justify-center mt-4 space-x-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'bg-[#C9A86A] scale-125' 
                            : 'bg-white/40 hover:bg-white/60'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
