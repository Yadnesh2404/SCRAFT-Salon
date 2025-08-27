import { useEffect, useRef, useState, useCallback } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export const useScrollAnimation = (options: ScrollAnimationOptions | number = {}) => {
  // Handle both number and object parameters for backward compatibility
  const config = typeof options === 'number' 
    ? { threshold: options } 
    : options;
  
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    delay = 0,
    direction = 'up'
  } = config;

  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const getTransformValue = useCallback((isVisible: boolean, direction: string) => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translateY(20px)';
        case 'down':
          return 'translateY(-20px)';
        case 'left':
          return 'translateX(20px)';
        case 'right':
          return 'translateX(-20px)';
        case 'none':
          return 'scale(0.95)';
        default:
          return 'translateY(20px)';
      }
    }
    return 'translateY(0) scale(1)';
  }, []);

  const getOpacityValue = useCallback((isVisible: boolean) => {
    return isVisible ? 1 : 0;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!triggerOnce || !hasTriggered) {
            // Add delay if specified
            if (delay > 0) {
              setTimeout(() => {
                setIsVisible(true);
                if (triggerOnce) {
                  setHasTriggered(true);
                }
              }, delay);
            } else {
              setIsVisible(true);
              if (triggerOnce) {
                setHasTriggered(true);
              }
            }
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered, delay]);

  // Enhanced animation classes
  const getAnimationClasses = useCallback(() => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    const transformValue = getTransformValue(isVisible, direction);
    const opacityValue = getOpacityValue(isVisible);
    
    return {
      className: `${baseClasses}`,
      style: {
        transform: transformValue,
        opacity: opacityValue
      }
    };
  }, [isVisible, direction, getTransformValue, getOpacityValue]);

  // Reset animation state
  const reset = useCallback(() => {
    setIsVisible(false);
    setHasTriggered(false);
  }, []);

  return { 
    ref, 
    isVisible, 
    hasTriggered,
    getAnimationClasses,
    reset
  };
};

// Convenience hooks for common animation patterns
export const useFadeInUp = (options?: Omit<ScrollAnimationOptions, 'direction'>) => {
  return useScrollAnimation({ ...options, direction: 'up' });
};

export const useFadeInDown = (options?: Omit<ScrollAnimationOptions, 'direction'>) => {
  return useScrollAnimation({ ...options, direction: 'down' });
};

export const useFadeInLeft = (options?: Omit<ScrollAnimationOptions, 'direction'>) => {
  return useScrollAnimation({ ...options, direction: 'left' });
};

export const useFadeInRight = (options?: Omit<ScrollAnimationOptions, 'direction'>) => {
  return useScrollAnimation({ ...options, direction: 'right' });
};

export const useScaleIn = (options?: Omit<ScrollAnimationOptions, 'direction'>) => {
  return useScrollAnimation({ ...options, direction: 'none' });
};
