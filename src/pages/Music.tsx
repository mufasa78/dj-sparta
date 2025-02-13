import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import YouTubeVideo from '../components/YouTubeVideo';
import { Loader2 } from 'lucide-react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

const Music = () => {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const channelId = 'UCcLDc7wHFDeD-Hb_TFyyWFg';
  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY || process.env.REACT_APP_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      if (!apiKey) {
        setError('YouTube API key is not configured');
        setLoading(false);
        return;
      }

      try {
        const maxResults = 12;
        
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data = await response.json();
        
        const formattedVideos = data.items.map((item: any) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.high.url,
          publishedAt: item.snippet.publishedAt
        }));

        setVideos(formattedVideos);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching videos:', err);
        setError('Unable to load videos at this time. Please try again later.');
        setLoading(false);
      }
    };

    fetchVideos();
  }, [apiKey]);

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
            <h1 className="text-5xl font-bold mb-6">Latest Mixes</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out my latest mixes and performances on YouTube
            </p>
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center min-h-[400px]">
              <Loader2 className="w-8 h-8 text-yellow-400 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center text-gray-400 min-h-[400px] flex items-center justify-center">
              <p>{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <YouTubeVideo
                  key={video.id}
                  videoId={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail}
                  publishedAt={video.publishedAt}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Music;