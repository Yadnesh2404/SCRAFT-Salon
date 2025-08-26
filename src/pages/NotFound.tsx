import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted to-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          {/* Large 404 */}
          <h1 className="font-display text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary to-yellow-500 bg-clip-text text-transparent mb-8">
            404
          </h1>
          
          {/* Error message */}
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Page Not Found
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="mx-4 w-2 h-2 rounded-full bg-primary"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <p className="font-body text-xl text-muted-foreground mb-12 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            Let's get you back to our beautiful salon experience.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl group"
              onClick={() => window.location.href = '/'}
            >
              <Home className="mr-3 h-5 w-5 group-hover:animate-pulse" />
              Return Home
            </Button>
            
            <Button 
              variant="luxury" 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-3 h-5 w-5" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
