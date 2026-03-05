import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto px-4 md:px-12">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="card text-center"
        >
          <FaQuoteLeft className="text-accent text-4xl mx-auto mb-6 opacity-50" />
          
          <p className="text-gray-300 text-base md:text-lg mb-6 italic px-2">"{currentTestimonial.content}"</p>

          <div className="flex justify-center mb-4">
            {[...Array(currentTestimonial.rating)].map((_, i) => (
              <FaStar key={i} className="text-accent text-xl" />
            ))}
          </div>

          <div className="flex items-center justify-center space-x-4">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-accent"
            />
            <div className="text-left">
              <h4 className="text-white font-bold">{currentTestimonial.name}</h4>
              <p className="text-gray-400 text-sm">{currentTestimonial.role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Hidden on mobile, shown on desktop */}
      <button
        onClick={prevTestimonial}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-accent text-black p-3 rounded-full hover:bg-green-400 transition-colors"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextTestimonial}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-accent text-black p-3 rounded-full hover:bg-green-400 transition-colors"
      >
        <FaChevronRight />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-accent w-8' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
