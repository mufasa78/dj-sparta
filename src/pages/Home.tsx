import { Play, Calendar, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://i.postimg.cc/2SsBv3Yb/banner.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center space-y-8 px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold"
            >
              DJ SPARTA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-yellow-400"
            >
              Kenya's Iconic DJ Experience
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="/music" className="bg-yellow-400 text-black px-8 py-3 rounded-full flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                <Play size={20} />
                Discover Music
              </a>
              <a href="/events" className="bg-transparent border-2 border-white px-8 py-3 rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors">
                <Calendar size={20} />
                Upcoming Events
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Experience the Beat of Africa</h2>
              <p className="text-gray-300">
                DJ Sparta brings you the perfect blend of traditional African rhythms and modern beats.
                With years of experience and a passion for music, every performance is a journey through
                sound that will move your soul and keep you dancing all night long.
              </p>
              <div className="flex gap-4">
                <a href="/about" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2">
                  Learn More <span className="text-xl">→</span>
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="aspect-square bg-cover bg-center rounded-lg" style={{ backgroundImage: 'url("https://i.postimg.cc/KzRzH2mS/portfolio-headshot.jpg")' }} />
              <div className="aspect-square bg-cover bg-center rounded-lg mt-8" style={{ backgroundImage: 'url("https://i.postimg.cc/3JpyhYm3/otile-brown-ft-dj-sparta-king-sparta.jpg")' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
            >
              <Play className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Latest Mixes</h3>
              <p className="text-gray-300 mb-4">Experience the newest beats and mixes from DJ Sparta's collection.</p>
              <a href="/music" className="text-yellow-400 hover:text-yellow-300">Listen Now →</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
            >
              <Calendar className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
              <p className="text-gray-300 mb-4">Find out where DJ Sparta will be performing next and secure your spot.</p>
              <a href="/events" className="text-yellow-400 hover:text-yellow-300">View Schedule →</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
            >
              <ShoppingBag className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Official Merch</h3>
              <p className="text-gray-300 mb-4">Show your support with official DJ Sparta merchandise and accessories.</p>
              <a href="/merchandise" className="text-yellow-400 hover:text-yellow-300">Shop Now →</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;