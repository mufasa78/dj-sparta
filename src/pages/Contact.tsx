import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Twitter } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/sparta_king_sparta/' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/ogutu_danielson' },
    { icon: FaYoutube, label: 'YouTube', url: 'https://www.youtube.com/@spartadaniels1527' },
    { icon: FaTiktok, label: 'TikTok', url: 'https://www.tiktok.com/@pigozigo' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 p-8 rounded-lg backdrop-blur-sm"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 transition-colors"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="text-yellow-400" />
                    <span>bookings@djsparta.com</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="text-yellow-400" />
                    <span>+254 799 367 731</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="text-yellow-400" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Follow Us</h2>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      className="bg-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-colors"
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Booking Inquiries</h3>
                <p className="text-gray-300">
                  For event bookings and collaborations, please contact our management team
                  directly or use the contact form. We typically respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;