import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const TrainerCard = ({ trainer, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card group overflow-hidden"
    >
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-heading font-bold text-white mb-1">{trainer.name}</h3>
      <p className="text-accent font-semibold mb-3">{trainer.specialization}</p>
      
      <p className="text-gray-400 text-sm mb-4">{trainer.bio}</p>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <FaMedal className="text-accent" />
          <span className="text-gray-300">{trainer.experience} Experience</span>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-white mb-2">Certifications:</h4>
        <div className="flex flex-wrap gap-2">
          {trainer.certifications.map((cert, idx) => (
            <span
              key={idx}
              className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30"
            >
              {cert}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TrainerCard;
