import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, Image as ImageIcon } from 'lucide-react';
import ImageModal from '../components/ImageModal';

const Events = () => {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; date: string } | null>(null);

  const upcomingEvents = [
    {
      date: "MAR 25",
      title: "Nairobi Night Festival",
      location: "Carnivore Grounds, Nairobi",
      time: "8:00 PM",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      date: "APR 15",
      title: "Mombasa Beach Party",
      location: "Bamburi Beach, Mombasa",
      time: "4:00 PM",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      date: "MAY 01",
      title: "African Unity Concert",
      location: "KICC, Nairobi",
      time: "7:00 PM",
      image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const pastEvents = [
    {
      title: "WHITECAP: Crisp Friday",
      date: "DEC 17, 2022",
      image: "https://i.postimg.cc/QNzNVwhV/event-14.jpg"
    },
    {
      title: "Grown & Sexy",
      date: "SEP 15, 2024",
      image: "https://i.postimg.cc/5yDfGYn8/event-16.jpg"
    },
    {
      title: "Spiced Sunday",
      date: "SEP 20, 2022",
      image: "https://i.postimg.cc/cHsCMnbH/event-7.jpg"
    },
    {
      title: "Beats & Drinks",
      date: "MAR 30, 2021",
      image: "https://i.postimg.cc/qMgt52M6/event-1.jpg"
    },
    {
      title: "Comrades Get Together",
      date: "FEB 20, 2021",
      image: "https://i.postimg.cc/g2ZxYdhY/event-3.jpg"
    },
    // Add more past events here...
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Events Navigation */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Events</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            
            {/* Tab Navigation */}
            <div className="flex justify-center space-x-4 mb-12">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeTab === 'past'
                    ? 'bg-yellow-400 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Past Events
              </button>
            </div>
          </motion.div>

          {/* Upcoming Events */}
          {activeTab === 'upcoming' && (
            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-white/5 rounded-lg overflow-hidden backdrop-blur-sm"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div
                      className="h-64 md:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${event.image})` }}
                    ></div>
                    <div className="p-6 md:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                            {event.date}
                          </div>
                          <h3 className="text-2xl font-bold">{event.title}</h3>
                        </div>
                        <div className="space-y-2 text-gray-300">
                          <div className="flex items-center gap-2">
                            <MapPin size={20} />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock size={20} />
                            <span>{event.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6">
                        <button className="bg-yellow-400 text-black px-6 py-2 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                          <Ticket size={20} />
                          Get Tickets
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Past Events */}
          {activeTab === 'past' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url(${event.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-90 transition-opacity">
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{event.title}</h3>
                        <p className="text-yellow-400 text-sm sm:text-base">{event.date}</p>
                        <button 
                          onClick={() => setSelectedImage({ 
                            url: event.image, 
                            title: event.title, 
                            date: event.date 
                          })}
                          className="mt-2 sm:mt-4 bg-white/20 hover:bg-yellow-400 hover:text-black transition-all duration-300 
                            px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base
                            transform hover:scale-105 active:scale-95"
                        >
                          <ImageIcon size={16} className="hidden sm:block" />
                          <span>View Gallery</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Calendar View */}
      {activeTab === 'upcoming' && (
        <section className="py-20 bg-black/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Calendar size={24} className="text-yellow-400" />
              <h2 className="text-2xl font-bold">Monthly Calendar</h2>
            </div>
            <div className="bg-white/5 p-8 rounded-lg backdrop-blur-sm">
              <p className="text-center text-gray-300">
                Full calendar view coming soon. Stay tuned for more event dates!
              </p>
            </div>
          </div>
        </section>
      )}
      {/* Image Modal */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageUrl={selectedImage?.url || ''}
        title={selectedImage?.title || ''}
        date={selectedImage?.date || ''}
      />
    </div>
  );
};

export default Events;