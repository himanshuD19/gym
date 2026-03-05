import { motion } from 'framer-motion';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { saveToLocalStorage, showToast } from '../hooks/useLocalStorage';

const PricingCard = ({ plan, index }) => {
  const handleSelectPlan = () => {
    saveToLocalStorage('selectedPlan', plan);
    showToast(`${plan.name} plan selected! Redirecting to join page...`);
    setTimeout(() => {
      window.location.href = '/join';
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className={`card relative ${plan.popular ? 'border-2 border-accent' : ''}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
          <FaStar />
          <span>Most Popular</span>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h3>
        <div className="flex items-baseline justify-center mb-2">
          <span className="text-4xl font-bold text-accent">{plan.price}</span>
          <span className="text-gray-400 ml-2">/{plan.duration}</span>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3 text-sm text-gray-300">
            <FaCheckCircle className="text-accent mt-1 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSelectPlan}
        className={`w-full py-3 rounded-md font-bold transition-all duration-300 ${
          plan.popular
            ? 'bg-accent text-black hover:bg-green-400'
            : 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black'
        }`}
      >
        Select Plan
      </button>
    </motion.div>
  );
};

export default PricingCard;
