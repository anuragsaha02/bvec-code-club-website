import { ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-primary rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          <Button 
            onClick={scrollToContact}
            className="relative flex items-center gap-2 px-8 py-6 text-lg bg-background hover:bg-background/90 text-primary border border-primary/20 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_var(--primary)] group-hover:border-primary/50"
          >
            <span className="relative inline-block">Join the Club</span>
            <Sparkles className="w-5 h-5 animate-pulse" />
            <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>
        
        {showArrow && (
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer mt-16"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown size={32} className="text-primary" />
          </div>
        )}
      </div>
      
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
