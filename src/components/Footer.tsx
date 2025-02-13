import { Link } from 'react-router-dom';
import { Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { FaTiktok, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/90 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">DJ SPARTA KING SPARTA</h3>
            <p className="text-gray-400">
              Kenya's premier DJ, bringing you the best mix of African beats and global sounds.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/sparta_king_sparta/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com/ogutu_danielson" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@spartadaniels1527" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@pigozigo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/music" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Music
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/merchandise" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>bookings@djsparta.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+254 799 367 731</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-gray-400">Subscribe for updates and exclusive content.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-center text-gray-400">
            {currentYear} DJ Sparta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;