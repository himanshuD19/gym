import { motion } from 'framer-motion';
import TrainerCard from '../components/TrainerCard';
import { trainers, trainerTips } from '../utils/data';

const Trainers = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=600&fit=crop)',
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
            Our <span className="gradient-text">Trainers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Expert coaches dedicated to your success
          </motion.p>
        </div>
      </section>

      {/* All Trainers */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet the Team</h2>
            <p className="section-subtitle">
              Our certified trainers bring years of experience and passion to help you achieve your goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Trainer Tips */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Trainer Tips</h2>
            <p className="section-subtitle">
              Expert advice from our certified trainers to help you on your fitness journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainerTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card border-l-4 border-accent"
              >
                <div className="mb-3">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">
                    {tip.category}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-lg italic">"{tip.tip}"</p>
                <p className="text-gray-500 text-sm">— {tip.trainer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Train With Us?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Certified Experts</h3>
              <p className="text-gray-400">
                All our trainers hold internationally recognized certifications and undergo continuous education.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Personalized Approach</h3>
              <p className="text-gray-400">
                Every member gets individualized attention and customized programs based on their goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-400">
                Our trainers have helped thousands of members achieve incredible transformations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trainers;
