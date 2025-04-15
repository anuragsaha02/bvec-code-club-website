
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

interface HistoryEntry {
  year: string;
  title: string;
  description: string;
  achievements: string[];
}

const HISTORY_DATA: HistoryEntry[] = [
  {
    year: "2025",
    title: "Expanding Horizons",
    description: "The club expanded its focus to include emerging technologies like AI and blockchain, reaching over 200 active members.",
    achievements: [
      "Launched our first hackathon with participants from 5 different colleges",
      "Initiated industry partnership program with 3 tech companies",
      "Created a mentorship program connecting students with alumni",
      "Developed 15+ projects including a campus navigation app"
    ]
  },
  {
    year: "2024",
    title: "Building Momentum",
    description: "CODE CLUB gained significant recognition within the college and began collaborating with other technical clubs.",
    achievements: [
      "Conducted 20+ workshops covering web development, data science, and mobile app development",
      "Published our first technical journal with student research papers",
      "Organized coding competitions with over 150 participants",
      "Established a dedicated lab space for club activities"
    ]
  },
  {
    year: "2023",
    title: "The Beginning",
    description: "A small group of passionate students founded the BVEC CODE CLUB with a mission to foster coding skills and innovation on campus.",
    achievements: [
      "Officially recognized as a college club with 25 founding members",
      "Conducted 5 introductory programming workshops",
      "Created the club website and social media presence",
      "Held the first annual coding competition"
    ]
  }
];

const History = () => {
  const [expandedYear, setExpandedYear] = useState<string | null>("2025");
  
  const toggleExpand = (year: string) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };
  
  return (
    <section id="history" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">Our History</h2>
        </AnimateOnScroll>
        
        <div className="timeline-container">
          {HISTORY_DATA.map((entry, index) => (
            <AnimateOnScroll animation="fade-in" delay={index * 200} key={entry.year}>
              <div className="relative mb-12">
                <div className="timeline-dot"></div>
                
                <div className="timeline-card">
                  <div 
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleExpand(entry.year)}
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-primary mb-1">{entry.year}</h3>
                      <h4 className="text-xl font-semibold">{entry.title}</h4>
                    </div>
                    <div className="text-muted-foreground">
                      {expandedYear === entry.year ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </div>
                  </div>
                  
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${expandedYear === entry.year ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-muted-foreground mb-4">{entry.description}</p>
                    
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 pl-2">
                      {entry.achievements.map((achievement, i) => (
                        <li key={i} className="pl-2">{achievement}</li>
                      ))}
                    </ul>
                    
                    {entry.year === "2025" && (
                      <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <p className="text-sm italic">
                          "The club has grown beyond our expectations. What started as a small group of coding enthusiasts has evolved into a community of innovators making real impact."
                          <span className="block mt-2 font-medium">— Alex Johnson, Club President</span>
                        </p>
                      </div>
                    )}
                    
                    {entry.year === "2023" && (
                      <div className="flex justify-center mt-6">
                        <div className="bg-card border border-border p-2 rounded-lg inline-block transform rotate-3">
                          <div className="border-2 border-dashed border-primary p-3 rounded">
                            <p className="text-sm font-mono">First meeting: September 15, 2023</p>
                            <p className="text-sm font-mono">Members present: 12</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        <AnimateOnScroll animation="fade-in" delay={600}>
          <div className="text-center mt-12">
            <p className="text-xl font-poppins">
              Join us as we continue to write our story
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default History;
