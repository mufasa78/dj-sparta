import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';

interface EnrollmentFormProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  packagePrice: string;
  packageDuration: string;
}

const EnrollmentForm = ({ isOpen, onClose, packageTitle, packagePrice, packageDuration }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    age: '',
    experience: 'beginner',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // For now, just show an alert
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-lg w-full max-w-2xl my-8"
        >
          <div className="relative p-6 sm:p-8">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Enroll in {packageTitle}</h2>
              <div className="flex flex-wrap gap-4">
                <p className="text-yellow-400">Price: KSH {packagePrice}</p>
                <p className="text-gray-400">Duration: {packageDuration}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white 
                      focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 
                      placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    required
                    min="16"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white 
                      focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 
                      placeholder-gray-500"
                    placeholder="Must be 16 or older"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white 
                      focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 
                      placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white 
                      focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 
                      placeholder-gray-500"
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  DJ Experience Level *
                </label>
                <select
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-900/10 border border-white/20 text-white 
                    focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                >
                  <option value="beginner">Beginner (No Experience)</option>
                  <option value="intermediate">Intermediate (Some Experience)</option>
                  <option value="advanced">Advanced (Experienced)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white 
                    focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20 
                    placeholder-gray-500"
                  placeholder="Tell us about your goals and expectations..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-3 px-4 rounded-full hover:bg-yellow-300 
                    transition-colors font-bold text-lg"
                >
                  Submit Application
                </button>
                <p className="text-gray-400 text-sm text-center mt-4">
                  * Required fields
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EnrollmentForm;
