import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const ProgramCard = ({ program, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="card group cursor-pointer"
    >
      <div className="text-5xl mb-4">{program.icon}</div>
      <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-accent transition-colors">
        {program.title}
      </h3>
      <p className="text-gray-400 mb-4">{program.description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-accent mb-2">Benefits:</h4>
        <ul className="space-y-2">
          {program.benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-300">
              <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          <span className="font-semibold text-white">Difficulty:</span> {program.difficulty}
        </p>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
