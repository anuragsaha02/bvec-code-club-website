import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-10 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              <span className="text-primary">&lt;BVEC/&gt;</span> {' '}
              <span className="text-secondary">{'{'}</span> CODE CLUB <span className="text-secondary">{'}'}</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Where coding passion meets innovation.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:bveccodeclubofficial@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#event" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a 
                  href="#team" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#projects" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#history" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  History
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Open Source
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="form-input rounded-r-none" 
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-r-md font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {currentYear} BVEC CODE CLUB. All Rights Reserved.
          </p>
          <div className="mt-1 text-xs">
            <span className="inline-block">Built with ❤️ by CODE CLUB members</span>
            <span className="mx-2">|</span>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a 
              href="#" 
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
