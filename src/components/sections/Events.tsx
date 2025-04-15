
import { useState } from 'react';
import { Calendar, Clock, MapPin, X, Filter } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

type EventType = 'Hackathon' | 'Workshop' | 'Seminar' | 'Competition' | 'All';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  type: Exclude<EventType, 'All'>;
  description: string;
  image: string;
  isPast: boolean;
}

const EVENTS: Event[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    date: "May 20, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "BVEC Main Auditorium",
    type: "Workshop",
    description: "A full-day workshop covering HTML, CSS, and JavaScript fundamentals. Perfect for beginners who want to jump into web development. Bring your laptops!",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
    isPast: false
  },
  {
    id: 2,
    title: "Algorithmic Thinking Challenge",
    date: "June 5, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "CS Lab 203",
    type: "Competition",
    description: "Test your problem-solving skills in this competitive programming event. Participants will solve algorithmic problems with increasing difficulty levels.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
    isPast: false
  },
  {
    id: 3,
    title: "BVEC Hackathon 2025",
    date: "July 15-16, 2025",
    time: "9:00 AM - 9:00 PM",
    location: "BVEC Innovation Center",
    type: "Hackathon",
    description: "Our annual 48-hour hackathon where teams compete to build innovative solutions for real-world problems. Great prizes for winners!",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
    isPast: false
  },
  {
    id: 4,
    title: "AI & Machine Learning Basics",
    date: "August 10, 2025",
    time: "1:00 PM - 3:00 PM",
    location: "Online (Zoom)",
    type: "Seminar",
    description: "An introductory session on artificial intelligence and machine learning concepts. Learn about neural networks, data preparation, and basic ML algorithms.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&h=400",
    isPast: false
  },
  {
    id: 5,
    title: "Introduction to Git & GitHub",
    date: "March 15, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "CS Lab 101",
    type: "Workshop",
    description: "A hands-on workshop about version control using Git and collaboration through GitHub. Essential skills for any developer!",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400",
    isPast: true
  },
  {
    id: 6,
    title: "Mobile App Development with Flutter",
    date: "February 20, 2025",
    time: "10:00 AM - 2:00 PM",
    location: "BVEC Innovation Hub",
    type: "Workshop",
    description: "Learn to build cross-platform mobile applications with Flutter and Dart. By the end of this workshop, you'll have created your first mobile app!",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
    isPast: true
  }
];

const Events = () => {
  const [selectedFilter, setSelectedFilter] = useState<EventType>('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const filteredEvents = selectedFilter === 'All' 
    ? EVENTS 
    : EVENTS.filter(event => event.type === selectedFilter);
  
  const upcomingEvents = filteredEvents.filter(event => !event.isPast);
  const pastEvents = filteredEvents.filter(event => event.isPast);
  
  return (
    <section id="event" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">Events</h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={200}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedFilter === 'All' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setSelectedFilter('All')}
            >
              <Filter size={16} />
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedFilter === 'Hackathon' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setSelectedFilter('Hackathon')}
            >
              Hackathons
            </button>
            <button 
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedFilter === 'Workshop' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setSelectedFilter('Workshop')}
            >
              Workshops
            </button>
            <button 
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedFilter === 'Seminar' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setSelectedFilter('Seminar')}
            >
              Seminars
            </button>
            <button 
              className={`px-4 py-2 rounded-full flex items-center gap-2 ${selectedFilter === 'Competition' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setSelectedFilter('Competition')}
            >
              Competitions
            </button>
          </div>
        </AnimateOnScroll>
        
        {/* Upcoming Events */}
        <h3 className="text-2xl font-bold mb-8">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <AnimateOnScroll animation="fade-in" delay={index * 100} key={event.id}>
                <div 
                  className="code-card cursor-pointer group"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-card px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground p-10">
              No upcoming events in this category.
            </div>
          )}
        </div>
        
        {/* Past Events */}
        <h3 className="text-2xl font-bold mb-8">Past Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <AnimateOnScroll animation="fade-in" delay={index * 100} key={event.id}>
                <div 
                  className="code-card cursor-pointer group opacity-80 hover:opacity-100"
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="h-48 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2 bg-card px-3 py-1 rounded-full text-xs font-semibold text-primary">
                      {event.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3">{event.title}</h4>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))
          ) : (
            <div className="col-span-full text-center text-muted-foreground p-10">
              No past events in this category.
            </div>
          )}
        </div>
        
        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
            <div className="bg-card rounded-lg shadow-xl w-full max-w-2xl max-h-[80vh] overflow-auto animate-fade-in">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black/80 transition-colors"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X size={24} />
                </button>
                <div className="absolute bottom-4 right-4 bg-card px-3 py-1 rounded-full text-sm font-semibold text-primary">
                  {selectedEvent.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{selectedEvent.title}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar size={18} className="mr-3 text-primary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock size={18} className="mr-3 text-primary" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground md:col-span-2">
                    <MapPin size={18} className="mr-3 text-primary" />
                    <span>{selectedEvent.location}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground">{selectedEvent.description}</p>
                </div>
                
                <div className="flex justify-end">
                  {!selectedEvent.isPast && (
                    <button className="btn-secondary">Register Now</button>
                  )}
                  <button 
                    className="btn-outline ml-4"
                    onClick={() => setSelectedEvent(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;
