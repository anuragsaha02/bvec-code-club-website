import { useEffect, useState } from 'react';

// Simple Easter egg - typing "bvec" on any page will trigger a special animation
const EasterEgg = () => {
  const [keys, setKeys] = useState<string[]>([]);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Add the key to our array
      const newKeys = [...keys, e.key.toLowerCase()];
      
      // Only keep the last 4 keys
      if (newKeys.length > 4) {
        newKeys.shift();
      }
      
      setKeys(newKeys);
      
      // Check if the user typed "bvec"
      if (newKeys.join('') === 'bvec') {
        setIsActive(true);
        
        // Reset after animation
        setTimeout(() => {
          setIsActive(false);
        }, 3000);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [keys]);
  
  if (!isActive) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[1000] flex items-center justify-center">
      <div className="animate-bounce flex flex-col items-center">
        <div className="text-4xl md:text-6xl font-bold mb-4 text-center">
          <span className="text-primary">B</span>
          <span className="text-secondary">V</span>
          <span className="text-primary">E</span>
          <span className="text-secondary">C</span>
        </div>
        <div className="font-mono text-md md:text-xl animate-pulse">{'{ CODE CLUB }'}</div>
      </div>
      
      {/* Matrix-like raining code effect */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-primary font-mono text-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}px`,
              animation: `fall ${Math.random() * 5 + 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {(Math.random() > 0.5 ? '0' : '1')}
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px);
          }
          100% {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
};

export default EasterEgg;
