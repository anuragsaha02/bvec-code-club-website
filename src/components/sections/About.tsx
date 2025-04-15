
import AnimateOnScroll from '../AnimateOnScroll';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">About Us</h2>
        </AnimateOnScroll>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimateOnScroll animation="slide-in">
            <div className="space-y-12">
              <div className="code-card p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Vision</h3>
                <p className="text-muted-foreground">
                  To create a community of passionate coders who push the boundaries of technology
                  and innovation, while fostering a collaborative learning environment for all.
                </p>
              </div>
              
              <div className="code-card p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Mission</h3>
                <p className="text-muted-foreground">
                  We strive to empower students with coding skills, problem-solving abilities,
                  and technical knowledge that prepare them for the future of technology.
                </p>
              </div>
              
              <div className="code-card p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">What We Do</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Organize coding workshops and bootcamps</li>
                  <li>Host hackathons and coding competitions</li>
                  <li>Develop innovative projects and solutions</li>
                  <li>Collaborate with industry professionals</li>
                  <li>Create networking opportunities for members</li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="slide-in-right">
            <div className="relative">
              <div className="code-block p-6 rounded-lg mb-6 text-primary/90">
                <pre>
{`function CodeClub() {
  const members = [];
  
  const addMember = (member) => {
    members.push({
      ...member,
      joinedAt: new Date()
    });
    console.log(\`Welcome, \${member.name}!\`);
  }
  
  const createProject = (name, tech) => {
    return {
      name,
      tech,
      team: members,
      status: 'In Progress',
      startDate: new Date()
    }
  }
  
  const organizeEvent = (type) => {
    console.log(\`New \${type} event created!\`);
    // Event details...
  }
  
  return {
    addMember,
    createProject,
    organizeEvent,
    getMembers: () => members
  }
}

const bvecCodeClub = CodeClub();
// Join us today!`}
                </pre>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl z-[-1]"></div>
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl z-[-1]"></div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default About;
