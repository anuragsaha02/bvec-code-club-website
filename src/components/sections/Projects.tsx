
import { useState } from 'react';
import { Github, ExternalLink, Code, PenTool, Cpu, Smartphone } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

type ProjectCategory = 'web' | 'app' | 'ml' | 'hardware' | 'all';

interface ProjectTech {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: Exclude<ProjectCategory, 'all'>;
  tech: ProjectTech[];
  githubLink: string;
  demoLink?: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Campus Connect",
    description: "A web platform that helps students connect with clubs and events happening on campus. Features a personalized dashboard and event recommendations.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
    category: "web",
    tech: [
      { name: "React", color: "bg-blue-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "MongoDB", color: "bg-green-700" }
    ],
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    featured: true
  },
  {
    id: 2,
    title: "BVEC Navigate",
    description: "A mobile app that helps students and visitors navigate the campus with an interactive map and real-time directions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
    category: "app",
    tech: [
      { name: "Flutter", color: "bg-blue-400" },
      { name: "Firebase", color: "bg-yellow-500" }
    ],
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    featured: true
  },
  {
    id: 3,
    title: "Student Performance Predictor",
    description: "An ML model that predicts student performance based on various factors like attendance, participation, and previous grades.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=400",
    category: "ml",
    tech: [
      { name: "Python", color: "bg-blue-600" },
      { name: "TensorFlow", color: "bg-orange-500" },
      { name: "Pandas", color: "bg-purple-500" }
    ],
    githubLink: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Smart Classroom System",
    description: "An IoT-based system that automates classroom lighting, projectors, and air conditioning based on occupancy and schedule.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
    category: "hardware",
    tech: [
      { name: "Arduino", color: "bg-teal-500" },
      { name: "Raspberry Pi", color: "bg-red-500" },
      { name: "Python", color: "bg-blue-600" }
    ],
    githubLink: "https://github.com",
    featured: true
  },
  {
    id: 5,
    title: "BVEC Chatbot",
    description: "A conversational AI that helps students find information about courses, faculty, and campus resources.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
    category: "ml",
    tech: [
      { name: "Python", color: "bg-blue-600" },
      { name: "NLTK", color: "bg-green-600" },
      { name: "React", color: "bg-blue-500" }
    ],
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    featured: false
  },
  {
    id: 6,
    title: "Study Buddy",
    description: "A mobile app that helps students find study partners based on courses and study habits.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    category: "app",
    tech: [
      { name: "React Native", color: "bg-blue-500" },
      { name: "Firebase", color: "bg-yellow-500" }
    ],
    githubLink: "https://github.com",
    featured: false
  },
  {
    id: 7,
    title: "Course Recommendation System",
    description: "An ML-based system that recommends courses to students based on their interests and career goals.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
    category: "ml",
    tech: [
      { name: "Python", color: "bg-blue-600" },
      { name: "Scikit-learn", color: "bg-orange-600" }
    ],
    githubLink: "https://github.com",
    featured: false
  },
  {
    id: 8,
    title: "BVEC Portfolio",
    description: "A web platform for students to showcase their projects and skills to potential employers.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
    category: "web",
    tech: [
      { name: "Vue.js", color: "bg-green-500" },
      { name: "Express", color: "bg-gray-600" },
      { name: "PostgreSQL", color: "bg-blue-800" }
    ],
    githubLink: "https://github.com",
    demoLink: "https://example.com",
    featured: true
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  
  const filteredProjects = activeCategory === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeCategory);
  
  const featuredProjects = PROJECTS.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">Our Projects</h2>
        </AnimateOnScroll>
        
        {/* Featured Projects Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="mr-2">Featured Projects</span>
            <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          </h3>
          
          <div className="overflow-x-auto pb-6">
            <div className="flex space-x-6 min-w-max">
              {featuredProjects.map((project, index) => (
                <AnimateOnScroll animation="fade-in" delay={index * 100} key={project.id}>
                  <div className="code-card w-80 flex-shrink-0">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span key={i} className={`text-xs px-2 py-1 rounded-full ${tech.color} bg-opacity-20`}>
                            {tech.name}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex justify-between">
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        {project.demoLink && (
                          <a 
                            href={project.demoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
        
        {/* Project Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeCategory === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setActiveCategory('all')}
            >
              <Code size={18} />
              All Projects
            </button>
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeCategory === 'web' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setActiveCategory('web')}
            >
              <PenTool size={18} />
              Web
            </button>
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeCategory === 'app' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setActiveCategory('app')}
            >
              <Smartphone size={18} />
              App
            </button>
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeCategory === 'ml' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setActiveCategory('ml')}
            >
              <Cpu size={18} />
              ML
            </button>
            <button 
              className={`flex items-center gap-2 px-4 py-2 rounded-lg ${activeCategory === 'hardware' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setActiveCategory('hardware')}
            >
              <Code size={18} />
              Hardware
            </button>
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <AnimateOnScroll animation="fade-in" delay={index * 100} key={project.id}>
              <div className="code-card h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-full ${tech.color} bg-opacity-20`}>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between mt-auto">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline py-2 flex-1 flex justify-center items-center"
                    >
                      <Github size={18} className="mr-2" />
                      Code
                    </a>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary py-2 flex-1 ml-4 flex justify-center items-center"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Demo
                      </a>
                    )}
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

export default Projects;
