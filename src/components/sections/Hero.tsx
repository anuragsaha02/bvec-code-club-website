
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  
  useEffect(() => {
    // Show arrow after the typing animation completes
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-16 px-4 overflow-hidden">
      <div className="container mx-auto text-center z-10">
        <div className="mb-6 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold font-poppins text-primary">
            &lt;BVEC/&gt; <span className="text-secondary">{'{'}</span> CODE CLUB <span className="text-secondary">{'}'}</span>
          </h1>
        </div>
        
        <div className="typing-container mb-8">
          <h2 className="typing-text text-xl md:text-2xl font-normal">
            Where coding passion meets innovation.
          </h2>
        </div>
        
        <div className="space-x-4">
          <button 
            className="btn-primary"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Projects
          </button>
          <button 
            className="btn-outline"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Club
          </button>
        </div>
        
        {showArrow && (
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer mt-16"
            onClick={scrollToAbout}
          >
            <ChevronDown size={32} className="text-primary" />
          </div>
        )}
      </div>
      
      {/* Code floating elements */}
      <div className="absolute top-1/4 left-10 md:left-20 text-primary/20 text-lg md:text-xl font-mono animate-float">
        &lt;div className="code"&gt;
      </div>
      <div className="absolute bottom-1/4 right-10 md:right-20 text-primary/20 text-lg md:text-xl font-mono animate-float" style={{ animationDelay: '1s' }}>
        &lt;/div&gt;
      </div>
      <div className="absolute top-1/3 right-10 md:right-40 text-secondary/20 text-lg md:text-xl font-mono animate-float" style={{ animationDelay: '1.5s' }}>
        function innovation() {'{}'}
      </div>
      <div className="absolute bottom-1/3 left-10 md:left-40 text-secondary/20 text-lg md:text-xl font-mono animate-float" style={{ animationDelay: '2s' }}>
        const passion = true;
      </div>
    </section>
  );
};

export default Hero;
