import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Camera, Star, Sparkles, Crown, Heart } from "lucide-react";
import interior2Image from "@/assets/images/interior2.jpg";
import interior3Image from "@/assets/images/interior3.jpg";
import interior1Image from "@/assets/images/interior1.jpg";

const galleryImages = [
  {
    id: 1,
    src: interior1Image,
    alt: "Luxury salon interior with elegant styling chairs",
    category: "Interior",
    description: "Our elegant styling area with premium equipment"
  },
  {
    id: 2,
    src: interior2Image,
    alt: "Premium salon environment with modern design",
    category: "Interior",
    description: "Modern luxury design meets comfort"
  },
  {
    id: 3,
    src: interior3Image,
    alt: "Sophisticated salon space with luxury amenities",
    category: "Interior",
    description: "Sophisticated space for ultimate relaxation"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    alt: "Professional stylist at work",
    category: "Styling",
    description: "Expert stylists in action"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    alt: "Luxury hair styling service",
    category: "Services",
    description: "Premium hair styling services"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Premium beauty treatment",
    category: "Spa",
    description: "Luxury spa and beauty treatments"
  }
];

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop",
    title: "Hair Styling Portfolio",
    category: "Hair",
    description: "Transformations and styling excellence",
    rating: 5,
    featured: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    title: "Bridal Beauty Collection",
    category: "Bridal",
    description: "Wedding day perfection and elegance",
    rating: 5,
    featured: true
  },
  {
    id: 3,
    image: "https://hospitalityinsights.ehl.edu/hubfs/Imported_Blog_Media/spa%20management.jpeg",
    title: "Spa & Wellness Gallery",
    category: "Spa",
    description: "Relaxation and rejuvenation services",
    rating: 5,
    featured: false
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    title: "Makeup Artistry Showcase",
    category: "Beauty",
    description: "Professional makeup transformations",
    rating: 5,
    featured: true
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/163654601/photo/getting-some-bright-new-highlights.jpg?s=612x612&w=0&k=20&c=aVrpeU51eSHHzkmsH9s4r6FP5edIPNAmX_0IY_o68aE=",
    title: "Color & Highlights Portfolio",
    category: "Hair",
    description: "Expert color work and highlights",
    rating: 5,
    featured: false
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    title: "Luxury Package Experiences",
    category: "Premium",
    description: "Complete beauty transformations",
    rating: 5,
    featured: true
  }
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Enhanced background texture */}
      <div className="absolute inset-0 opacity-8 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.3)_0%,transparent_50%)]"></div>
      
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_40px,rgba(217,155,55,0.05)_40px,rgba(217,155,55,0.05)_80px)]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20 md:mb-24">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8">
            Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8 md:mb-10 px-4">
            Explore our luxurious salon environment and witness the artistry of our beauty transformations
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-24 md:w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Camera className="mx-4 md:mx-6 h-6 md:h-8 w-6 md:w-8 text-primary" />
            <div className="h-px w-24 md:w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-32">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4">
                <span className="px-2 md:px-3 py-1 text-xs font-medium text-white bg-primary/80 backdrop-blur-sm rounded-full">
                  {image.category}
                </span>
              </div>

              {/* Description overlay */}
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xs md:text-sm font-medium">{image.description}</p>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Click indicator */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Camera className="h-6 md:h-8 w-6 md:w-8 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Portfolio</span>
            </h3>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Discover our curated collection of beauty transformations and luxury experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={item.id}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Portfolio overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Featured badge */}
                  {item.featured && (
                    <div className="absolute top-3 md:top-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="px-2 md:px-3 py-1 text-xs font-medium text-white bg-gradient-to-r from-primary to-yellow-500 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  {/* Category badge */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="px-2 md:px-3 py-1 text-xs font-medium text-white bg-primary/80 backdrop-blur-sm rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Rating */}
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center space-x-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3 md:h-4 w-3 md:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-3 md:p-4">
                  <h4 className="font-display text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group"
          >
            <Crown className="h-5 md:h-6 w-5 md:w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-body text-base md:text-lg font-medium text-primary">View Full Portfolio</span>
          </button>
        </div>
      </div>

      {/* Enhanced Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl md:max-w-6xl max-h-full">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-2 md:top-4 right-2 md:right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <X className="h-5 md:h-6 w-5 md:w-6 text-white" />
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="h-5 md:h-6 w-5 md:w-6 text-white" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="h-5 md:h-6 w-5 md:w-6 text-white" />
            </button>
            
            {/* Image */}
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Enhanced Image info */}
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-center">
              <p className="text-white font-body text-sm md:text-lg font-semibold">
                {galleryImages[currentImageIndex].alt}
              </p>
              <p className="text-white/70 font-body text-xs md:text-sm mt-1 md:mt-2">
                {galleryImages[currentImageIndex].description}
              </p>
              <p className="text-white/70 font-body text-xs md:text-sm mt-1 md:mt-2">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
