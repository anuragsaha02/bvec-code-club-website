
import { useState } from 'react';
import { X } from 'lucide-react';
import AnimateOnScroll from '../AnimateOnScroll';

type GalleryItem = {
  id: number;
  type: 'photo' | 'video';
  src: string;
  thumbnail: string;
  caption: string;
  year: '2023' | '2024' | '2025';
  category: 'workshops' | 'hackathons' | 'events' | 'projects';
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&h=300',
    caption: 'Web Development Workshop',
    year: '2025',
    category: 'workshops'
  },
  {
    id: 2,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&h=300',
    caption: 'Hackathon Finals',
    year: '2024',
    category: 'hackathons'
  },
  {
    id: 3,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&h=300',
    caption: 'Team Coding Session',
    year: '2024',
    category: 'projects'
  },
  {
    id: 4,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=500&h=300',
    caption: 'Guest Speaker Event',
    year: '2023',
    category: 'events'
  },
  {
    id: 5,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    thumbnail: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=500&h=300',
    caption: 'Python Workshop',
    year: '2025',
    category: 'workshops'
  },
  {
    id: 6,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
    thumbnail: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=500&h=300',
    caption: 'Annual Club Meetup',
    year: '2024',
    category: 'events'
  },
  {
    id: 7,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&h=300',
    caption: 'Summer Coding Camp',
    year: '2023',
    category: 'events'
  },
  {
    id: 8,
    type: 'video',
    src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?auto=format&fit=crop&w=500&h=300',
    caption: 'Project Demo Video',
    year: '2025',
    category: 'projects'
  },
  {
    id: 9,
    type: 'photo',
    src: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1',
    thumbnail: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?auto=format&fit=crop&w=500&h=300',
    caption: 'Virtual Reality Experiment',
    year: '2024',
    category: 'projects'
  }
];

type FilterType = 'all' | 'photos' | 'videos' | '2023' | '2024' | '2025' | 'workshops' | 'hackathons' | 'events' | 'projects';

const Gallery = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'photos') return item.type === 'photo';
    if (filter === 'videos') return item.type === 'video';
    if (filter === '2023' || filter === '2024' || filter === '2025') return item.year === filter;
    return item.category === filter;
  });
  
  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto">
        <AnimateOnScroll animation="fade-in">
          <h2 className="section-title text-center mb-16">Gallery</h2>
        </AnimateOnScroll>
        
        <AnimateOnScroll animation="fade-in" delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'photos' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('photos')}
            >
              Photos
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'videos' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('videos')}
            >
              Videos
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === '2023' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('2023')}
            >
              2023
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === '2024' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('2024')}
            >
              2024
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === '2025' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('2025')}
            >
              2025
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'workshops' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('workshops')}
            >
              Workshops
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'hackathons' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('hackathons')}
            >
              Hackathons
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'events' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('events')}
            >
              Events
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'projects' ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-primary/10'}`}
              onClick={() => setFilter('projects')}
            >
              Projects
            </button>
          </div>
        </AnimateOnScroll>
        
        <div className="masonry-grid">
          {filteredItems.map((item, index) => (
            <AnimateOnScroll animation="fade-in" delay={index * 100} key={item.id}>
              <div className="masonry-item code-card overflow-hidden cursor-pointer" onClick={() => setSelectedItem(item)}>
                <div className="relative group">
                  <img 
                    src={item.thumbnail} 
                    alt={item.caption} 
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary/80 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-primary-foreground ml-1"></div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="p-4 text-white font-medium">{item.caption}</p>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full max-h-[90vh] relative">
              <button 
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                onClick={() => setSelectedItem(null)}
              >
                <X size={24} />
              </button>
              
              {selectedItem.type === 'photo' ? (
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.caption} 
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe 
                    src={selectedItem.src} 
                    title={selectedItem.caption}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
              
              <div className="bg-card p-4 mt-4 rounded-lg">
                <p className="text-lg font-medium">{selectedItem.caption}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">{selectedItem.year}</span>
                  <span className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm capitalize">{selectedItem.category}</span>
                  <span className="px-3 py-1 bg-muted/20 text-muted-foreground rounded-full text-sm capitalize">{selectedItem.type}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
