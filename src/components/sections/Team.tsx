
import { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Club President",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Full-stack developer with a passion for React and Node.js. Leading the club with a vision to build a strong tech community on campus.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "alex@example.com"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "AI/ML enthusiast who loves solving complex problems. Currently exploring deep learning and computer vision applications.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "priya@example.com"
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Workshop Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Front-end specialist with experience in UI/UX design. Organizes engaging workshops to help members develop practical skills.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "marcus@example.com"
  },
  {
    id: 4,
    name: "Taylor Williams",
    role: "Event Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "A skilled project manager who ensures our hackathons and coding competitions run smoothly. Has a background in software engineering.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "taylor@example.com"
  },
  {
    id: 5,
    name: "Jamal Rodriguez",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Creative developer who manages our social media presence and creates technical content. Expert in Python and data visualization.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "jamal@example.com"
  },
  {
    id: 6,
    name: "Sophie Kim",
    role: "Outreach Coordinator",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80",
    bio: "Handles partnerships with other clubs and organizations. Passionate about open-source contribution and community building.",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "sophie@example.com"
  }
];

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  
  return (
    <section id="team" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">Our Team</h2>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <AnimateOnScroll animation="fade-in" delay={index * 100} key={member.id}>
              <div 
                className="h-[400px] perspective-1000 relative"
                onMouseEnter={() => setHoveredMember(member.id)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div 
                  className={`w-full h-full transition-all duration-500 transform-style-3d relative ${
                    hoveredMember === member.id ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-card rounded-lg overflow-hidden shadow-md">
                    <div className="h-[250px] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <div className="flex space-x-3">
                        <a 
                          href={member.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-card rounded-lg overflow-hidden shadow-md rotate-y-180 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground mb-6">{member.bio}</p>
                    <div className="flex space-x-3 mt-auto">
                      <a 
                        href={member.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
