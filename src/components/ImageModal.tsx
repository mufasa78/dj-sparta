import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  date: string;
}

const ImageModal = ({ isOpen, onClose, imageUrl, title, date }: ImageModalProps) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative max-w-2xl w-full max-h-[90vh] bg-gray-900 rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-yellow-400 text-black hover:bg-yellow-300 transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="relative">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-auto object-contain max-h-[70vh]"
            />
          </div>
          
          <div className="p-4 bg-black/50">
            <h3 className="text-lg font-bold text-white">{title}</h3>
            <p className="text-sm text-yellow-400">{date}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageModal;
