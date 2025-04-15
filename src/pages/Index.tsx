
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ParticlesBackground from '@/components/ParticlesBackground';
import ScrollToTop from '@/components/ScrollToTop';
import ModeToggle from '@/components/sections/ModeToggle';
import EasterEgg from '@/components/EasterEgg';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Events from '@/components/sections/Events';
import Team from '@/components/sections/Team';
import Gallery from '@/components/sections/Gallery';
import Projects from '@/components/sections/Projects';
import History from '@/components/sections/History';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // This effect sets up the Intersection Observer for animations
  useEffect(() => {
    // Initialize the animation observer for elements with animate-on-scroll class
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation classes based on data attributes
            const animationType = entry.target.getAttribute('data-animation');
            if (animationType) {
              entry.target.classList.add(`animate-${animationType}`);
            } else {
              entry.target.classList.add('animate-fade-in');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Cleanup
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Gallery />
      <Projects />
      <History />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ModeToggle />
      <EasterEgg />
    </div>
  );
};

export default Index;
