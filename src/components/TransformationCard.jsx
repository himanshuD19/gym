import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const TransformationCard = ({ transformation, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card group"
    >
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={transformation.beforeImage}
            alt={`${transformation.name} before`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            BEFORE
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={transformation.afterImage}
            alt={`${transformation.name} after`}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 left-2 bg-accent text-black text-xs font-bold px-2 py-1 rounded">
            AFTER
          </div>
        </div>
      </div>

      <h3 className="text-xl font-heading font-bold text-white mb-2">{transformation.name}</h3>
      
      <div className="flex items-center justify-between mb-3 text-sm">
        <div className="flex items-center space-x-2">
          <span className="text-accent font-bold text-2xl">{transformation.weightLost}</span>
          <span className="text-gray-400">lost</span>
        </div>
        <div className="text-gray-400">
          <span className="text-white font-semibold">{transformation.timeTaken}</span>
        </div>
      </div>

      <p className="text-gray-400 text-sm italic">"{transformation.story}"</p>
    </motion.div>
  );
};

export default TransformationCard;
