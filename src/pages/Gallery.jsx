import { motion } from 'framer-motion';
import GalleryGrid from '../components/GalleryGrid';
import { galleryImages } from '../utils/data';
import { useState } from 'react';

const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'equipment', 'training', 'members', 'events'];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-4"
          >
            Our <span className="gradient-text">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Take a tour of our world-class facilities
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Explore NLF</h2>
            <p className="section-subtitle">
              From state-of-the-art equipment to our vibrant community in action.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                  filter === category
                    ? 'bg-accent text-black'
                    : 'bg-secondary border-2 border-accent text-accent hover:bg-accent hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid images={filteredImages} />
        </div>
      </section>

      {/* Facilities Highlights */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Facilities</h2>
            <p className="section-subtitle">
              Everything you need for an exceptional fitness experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏋️‍♂️', title: 'Weight Training Zone', desc: 'Premium free weights and machines' },
              { icon: '🏃‍♀️', title: 'Cardio Area', desc: 'Treadmills, bikes, and rowing machines' },
              { icon: '🧘‍♀️', title: 'Group Class Studio', desc: 'Spacious studio for group workouts' },
              { icon: '🥊', title: 'Functional Training', desc: 'TRX, battle ropes, and more' },
              { icon: '🚿', title: 'Locker Rooms', desc: 'Clean facilities with showers' },
              { icon: '💆‍♂️', title: 'Steam & Sauna', desc: 'Relax and recover in style' },
              { icon: '📱', title: 'WiFi Lounge', desc: 'Work or relax between sessions' },
              { icon: '🅿️', title: 'Free Parking', desc: 'Ample parking space for members' },
            ].map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{facility.title}</h3>
                <p className="text-gray-400 text-sm">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
