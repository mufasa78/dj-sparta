import { motion } from 'framer-motion';

interface YouTubeVideoProps {
  videoId: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  views?: string;
}

const YouTubeVideo = ({ videoId, title, thumbnail, publishedAt }: YouTubeVideoProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <a
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
        <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-400">
          {formatDate(publishedAt)}
        </p>
      </a>
    </motion.div>
  );
};

export default YouTubeVideo;
