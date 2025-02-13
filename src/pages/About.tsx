import { motion } from 'framer-motion';
import { Award, Music2, Mic2 } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Kenya's Top DJ 2023",
      description: "Recognized as Kenya's leading DJ by the African Music Awards"
    },
    {
      icon: Music2,
      title: "1M+ Streams",
      description: "Over one million streams across digital platforms"
    },
    {
      icon: Mic2,
      title: "500+ Live Shows",
      description: "Performed at major venues and festivals across Africa"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">The Story Behind the Beat</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed">
                Born and raised in Nairobi, DJ Sparta's journey began in the vibrant
                streets of Kenya's capital. His unique ability to blend traditional
                African rhythms with contemporary beats has earned him recognition
                across the continent.
              </p>
              <p className="text-xl leading-relaxed">
                With over a decade of experience, he has become a cornerstone of
                Kenya's music scene, known for electrifying performances that
                celebrate Africa's rich musical heritage while embracing modern
                sounds.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div
                className="aspect-[3/4] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: 'url("https://i.postimg.cc/25nLxmjH/club-photo.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl backdrop-blur-sm"
              >
                <achievement.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;