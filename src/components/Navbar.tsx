
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll to sections
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold font-poppins">
            <span className="text-primary">&lt;BVEC/&gt;</span> {' '}
            <span className="text-secondary">{'{'}</span> CODE CLUB <span className="text-secondary">{'}'}</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Home</a>
          <a onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary cursor-pointer transition-colors">About</a>
          <a onClick={() => scrollToSection('event')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Events</a>
          <a onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Team</a>
          <a onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Gallery</a>
          <a onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Projects</a>
          <a onClick={() => scrollToSection('history')} className="text-foreground hover:text-primary cursor-pointer transition-colors">History</a>
          <a onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-foreground hover:text-primary">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Home</a>
            <a onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary cursor-pointer transition-colors">About</a>
            <a onClick={() => scrollToSection('event')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Events</a>
            <a onClick={() => scrollToSection('team')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Team</a>
            <a onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Gallery</a>
            <a onClick={() => scrollToSection('projects')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Projects</a>
            <a onClick={() => scrollToSection('history')} className="text-foreground hover:text-primary cursor-pointer transition-colors">History</a>
            <a onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary cursor-pointer transition-colors">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
