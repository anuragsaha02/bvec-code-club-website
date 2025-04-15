
import { useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  animation: 'fade-in' | 'slide-in' | 'slide-in-right';
  threshold?: number;
  delay?: number;
}

const AnimateOnScroll = ({ 
  children, 
  animation = 'fade-in', 
  threshold = 0.1,
  delay = 0
}: AnimateOnScrollProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (elementRef.current) {
                elementRef.current.classList.add(`animate-${animation}`);
              }
            }, delay);
            
            // Unobserve after animation is applied
            if (elementRef.current) {
              observer.unobserve(elementRef.current);
            }
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation, threshold, delay]);

  // Set initial styles to ensure proper animation
  const getInitialStyles = () => {
    switch (animation) {
      case 'fade-in':
        return { opacity: 0, transform: 'translateY(10px)' };
      case 'slide-in':
        return { opacity: 0, transform: 'translateX(-100px)' };
      case 'slide-in-right':
        return { opacity: 0, transform: 'translateX(100px)' };
      default:
        return { opacity: 0 };
    }
  };

  return (
    <div 
      ref={elementRef} 
      className="animate-on-scroll"
      style={getInitialStyles()}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
