
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

  return (
    <div ref={elementRef} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default AnimateOnScroll;
