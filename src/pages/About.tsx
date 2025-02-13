import { motion } from 'framer-motion';
import { Music2, Mic2, Users, Radio, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 10 DJ in Kenya",
      description: "Ranked among Kenya's top DJs by Capital FM (2023)"
    },
    {
      icon: Music2,
      title: "250K+ Streams",
      description: "Growing audience across Spotify, Mixcloud, and SoundCloud"
    },
    {
      icon: Mic2,
      title: "200+ Events",
      description: "Performed at major clubs and festivals in East Africa"
    }
  ];

  const socialStats = [
    {
      icon: Users,
      platform: "Instagram",
      count: "45.2K",
      engagement: "High engagement in Kenya and East Africa"
    },
    {
      icon: Radio,
      platform: "TikTok",
      count: "82.3K",
      engagement: "Viral DJ mix challenges and tutorials"
    },
    {
      icon: Music2,
      platform: "YouTube",
      count: "28.6K",
      engagement: "Weekly mix uploads and behind-the-scenes content"
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
                streets of Kenya's capital. Starting from local clubs in Westlands,
                his unique ability to blend Gengetone, Afrobeats, and House music
                has made him a standout performer in East Africa.
              </p>
              <p className="text-xl leading-relaxed">
                With 5+ years of experience, he has become a rising star in Kenya's
                music scene, known for high-energy sets at premier venues like
                Alchemist, K1, and major festivals including Blankets & Wine and
                Kilifi New Year.
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

      {/* Social Media Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">Social Media Presence</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialStats.map((stat, index) => (
              <motion.div
                key={stat.platform}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 p-8 rounded-xl backdrop-blur-sm text-center"
              >
                <stat.icon className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">{stat.platform}</h3>
                <div className="text-3xl font-bold text-yellow-400 mb-2">
                  {stat.count}
                </div>
                <p className="text-gray-300">{stat.engagement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;