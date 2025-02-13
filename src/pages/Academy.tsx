import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Music, Headphones, Video, Waves, Laptop, BookOpen } from 'lucide-react';
import EnrollmentForm from '../components/EnrollmentForm';

const Academy = () => {
  const [selectedPackage, setSelectedPackage] = useState<{
    title: string;
    price: string;
    duration: string;
  } | null>(null);

  const courses = [
    {
      title: 'Beat Mapping',
      icon: Music,
      description: 'Learn to analyze and structure music tracks, understand rhythm patterns, and master BPM matching.'
    },
    {
      title: 'Music Production',
      icon: Laptop,
      description: 'Create your own beats, remixes, and original tracks using industry-standard DAW software.'
    },
    {
      title: 'Audio Mixing',
      icon: Headphones,
      description: 'Master the art of seamless transitions, EQ adjustment, and professional mixing techniques.'
    },
    {
      title: 'Sound Tech',
      icon: Waves,
      description: 'Understand sound systems, acoustics, and technical setup for various venues.'
    },
    {
      title: 'Video Mixing',
      icon: Video,
      description: 'Learn to incorporate visual elements and create engaging multimedia performances.'
    },
    {
      title: 'Scratching',
      icon: BookOpen,
      description: 'Master vinyl manipulation techniques and develop your unique scratching style.'
    }
  ];

  const packages = [
    {
      title: 'Basic Package',
      price: '30,000',
      duration: '1 Month',
      features: [
        'Access to 2 core courses',
        'Basic equipment training',
        'Online learning resources',
        'Weekend practice sessions',
        'Certificate of completion'
      ],
      recommended: false,
      color: 'border-white/20'
    },
    {
      title: 'Professional Package',
      price: '75,000',
      duration: '3 Months',
      features: [
        'Access to all courses',
        'Advanced equipment training',
        '1-on-1 mentoring sessions',
        'Unlimited practice time',
        'Industry networking events',
        'Professional certification',
        'Portfolio development'
      ],
      recommended: true,
      color: 'border-yellow-400'
    },
    {
      title: 'Master Package',
      price: '150,000',
      duration: '6 Months',
      features: [
        'All Professional features',
        'Advanced production tools',
        'Live event experience',
        'Business coaching',
        'Marketing strategy sessions',
        'Industry placement support',
        'Lifetime alumni benefits'
      ],
      recommended: false,
      color: 'border-white/20'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">DJ Academy</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join ZIGO Entertainment's DJ Academy and master the art of DJing with our comprehensive courses and hands-on training.
            </p>
          </motion.div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <course.icon className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-300">{course.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Enrollment Packages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Enrollment Packages</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/5 rounded-lg p-6 backdrop-blur-sm border-2 ${pkg.color} ${
                  pkg.recommended ? 'transform scale-105' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Recommended
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-yellow-400 text-3xl font-bold mb-2">
                  KSH {pkg.price}
                </div>
                <p className="text-gray-400 mb-6">{pkg.duration}</p>
                <ul className="space-y-3 text-left mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="text-yellow-400 flex-shrink-0" size={20} />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => setSelectedPackage({
                    title: pkg.title,
                    price: pkg.price,
                    duration: pkg.duration
                  })}
                  className="w-full bg-yellow-400 text-black py-2 px-4 rounded-full hover:bg-yellow-300 transition-colors font-bold"
                >
                  Enroll Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Modal */}
      {selectedPackage && (
        <EnrollmentForm
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          packageTitle={selectedPackage.title}
          packagePrice={selectedPackage.price}
          packageDuration={selectedPackage.duration}
        />
      )}
    </div>
  );
};

export default Academy;
