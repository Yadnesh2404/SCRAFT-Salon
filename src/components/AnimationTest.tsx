import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export const AnimationTest = () => {
  const { ref: testRef, isVisible: testVisible, getAnimationClasses } = useScrollAnimation(0.1);

  return (
    <div className="py-8 bg-muted/20">
      <div className="container mx-auto px-6">
        <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
          Animation Test - Production Build
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Test 1: Basic fade in */}
          <div 
            ref={testRef} 
            {...getAnimationClasses()}
            className="p-6 bg-white rounded-lg shadow-md border"
          >
            <h4 className="font-semibold mb-2">Fade In Test</h4>
            <p className="text-sm text-muted-foreground">
              This should fade in when scrolled into view. 
              Visibility: {testVisible ? '✅ Visible' : '❌ Hidden'}
            </p>
          </div>

          {/* Test 2: Hover effects */}
          <div className="p-6 bg-white rounded-lg shadow-md border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h4 className="font-semibold mb-2">Hover Effects Test</h4>
            <p className="text-sm text-muted-foreground">
              Hover over this card to see hover animations.
            </p>
          </div>

          {/* Test 3: CSS transitions */}
          <div className="p-6 bg-white rounded-lg shadow-md border transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <h4 className="font-semibold mb-2">CSS Transitions Test</h4>
            <p className="text-sm text-muted-foreground">
              This should scale and shadow on hover.
            </p>
          </div>
        </div>

        {/* Test 4: Scroll-triggered animations */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div 
            ref={testRef} 
            {...getAnimationClasses()}
            className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
          >
            <h4 className="font-semibold mb-2">Scroll Animation Test</h4>
            <p className="text-sm text-muted-foreground">
              This should animate when scrolled into view.
            </p>
          </div>

          <div className="p-6 bg-gradient-to-r from-muted/20 to-background rounded-lg border">
            <h4 className="font-semibold mb-2">Static Element</h4>
            <p className="text-sm text-muted-foreground">
              This element has no animations for comparison.
            </p>
          </div>
        </div>

        {/* Debug info */}
        <div className="mt-8 p-4 bg-background/80 rounded-lg border text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Debug Info:</strong> Animation state is being tracked. 
            Check browser console for any errors.
          </p>
        </div>
      </div>
    </div>
  );
};
