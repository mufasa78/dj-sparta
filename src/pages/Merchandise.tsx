import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const Merchandise = () => {
  const products = [
    {
      name: "DJ Sparta Classic Tee",
      price: "2,500 KES",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Apparel"
    },
    {
      name: "Limited Edition Cap",
      price: "1,800 KES",
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Accessories"
    },
    {
      name: "Tour Hoodie 2024",
      price: "4,500 KES",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Apparel"
    },
    {
      name: "Vinyl Collection",
      price: "6,000 KES",
      image: "https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Music"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Featured Products */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Official Merchandise</h1>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold">{product.name}</h3>
                    <span className="text-yellow-400">{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-300">{product.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold">Limited Edition Collection</h2>
              <p className="text-gray-300">
                Exclusive merchandise designed in collaboration with local Kenyan artists.
                Each piece tells a story of our musical journey and cultural heritage.
              </p>
              <div className="flex items-center gap-4">
                <Star className="text-yellow-400" />
                <span>Premium quality materials</span>
              </div>
              <div className="flex items-center gap-4">
                <ShoppingBag className="text-yellow-400" />
                <span>Worldwide shipping available</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="aspect-square rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://i.postimg.cc/mZmzjmRG/educated-hustler-logo.jpg")'
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Merchandise;