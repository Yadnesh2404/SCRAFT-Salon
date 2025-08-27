import { useState } from "react";
import { Instagram, X, ChevronLeft, ChevronRight, Heart, MessageCircle } from "lucide-react";
import interior2Image from "@/assets/images/interior2.jpg";
import interior3Image from "@/assets/images/interior3.jpg";
import interior1Image from "@/assets/images/interior1.jpg";

const galleryImages = [
  {
    id: 1,
    src: interior1Image,
    alt: "Luxury salon interior with elegant styling chairs",
    category: "Interior"
  },
  {
    id: 2,
    src: interior2Image,
    alt: "Premium salon environment with modern design",
    category: "Interior"
  },
  {
    id: 3,
    src: interior3Image,
    alt: "Sophisticated salon space with luxury amenities",
    category: "Interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    alt: "Professional stylist at work",
    category: "Styling"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=600&fit=crop",
    alt: "Luxury hair styling service",
    category: "Services"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    alt: "Premium beauty treatment",
    category: "Spa"
  }
];

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop",
    likes: 234,
    comments: 18,
    caption: "Transformation Tuesday! ✨ #SCRAFTSalon #LuxuryBeauty"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    likes: 189,
    comments: 12,
    caption: "Bridal beauty perfection 💍 #BridalStyle #SCRAFT"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop",
    likes: 312,
    comments: 24,
    caption: "Spa day essentials 🌸 #Wellness #LuxurySpa"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
    likes: 156,
    comments: 9,
    caption: "Client satisfaction is our priority 💫 #SCRAFTSalon"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    likes: 278,
    comments: 31,
    caption: "Color transformation magic 🎨 #HairColor #Beauty"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
    likes: 203,
    comments: 15,
    caption: "Luxury meets expertise ✨ #SCRAFT #PremiumBeauty"
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
    <section id="gallery" className="py-32 bg-gradient-to-b from-background via-secondary/30 to-background relative overflow-hidden">
      {/* Enhanced background texture */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_70%,rgba(217,_155,_55,_0.2)_0%,transparent_50%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-24">
          <h2 className="font-display text-6xl md:text-7xl font-bold text-foreground mb-8">
            Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Gallery</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-10">
            Explore our luxurious salon environment and witness the artistry of our beauty transformations
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-primary"></div>
            <Instagram className="mx-6 h-8 w-8 text-primary animate-pulse" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {galleryImages.map((image, index) => (
            <div 
              key={image.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer transform hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium text-white bg-primary/80 backdrop-blur-sm rounded-full">
                  {image.category}
                </span>
              </div>
              
              {/* Hover Effect */}
              <div className="absolute inset-0 border-2 border-primary/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <div className="mb-16">
          <div className="text-center mb-16">
            <h3 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-6">
              Follow Our <span className="bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent">Instagram</span>
            </h3>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay connected with our latest transformations, behind-the-scenes moments, and beauty inspiration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post, index) => (
              <div 
                key={post.id}
                className="group relative overflow-hidden rounded-2xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-gold animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt="Instagram post"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Instagram overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Instagram icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Instagram className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Stats */}
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="flex items-center space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Caption */}
                <div className="p-4">
                  <p className="font-body text-sm text-muted-foreground line-clamp-2">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instagram Follow CTA */}
        <div className="text-center">
          <a 
            href="https://instagram.com/scraftsalon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-yellow-500/10 border border-primary/20 hover:border-primary hover:shadow-gold transition-all duration-300 group"
          >
            <Instagram className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
            <span className="font-body text-lg font-medium text-primary">Follow @scraftsalon</span>
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            
            {/* Image */}
            <img 
              src={galleryImages[currentImageIndex].src} 
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-white font-body text-lg">
                {galleryImages[currentImageIndex].alt}
              </p>
              <p className="text-white/70 font-body text-sm mt-2">
                {currentImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
