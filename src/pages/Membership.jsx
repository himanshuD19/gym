import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { membershipPlans, faqs } from '../utils/data';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Membership = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=1920&h=600&fit=crop)',
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
            <span className="gradient-text">Membership</span> Plans
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Choose the plan that fits your lifestyle
          </motion.p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Plans</h2>
            <p className="section-subtitle">
              All plans include access to our world-class facilities and supportive community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {membershipPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gray-400 mb-4">
              Not sure which plan is right for you? Contact us for a free consultation!
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What's Included</h2>
            <p className="section-subtitle">
              Every membership comes with access to premium facilities and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏋️', title: 'Modern Equipment', desc: 'Latest machines and free weights' },
              { icon: '🧘', title: 'Group Classes', desc: 'HIIT, Yoga, Spin, and more' },
              { icon: '🚿', title: 'Locker Rooms', desc: 'Clean facilities with showers' },
              { icon: '📱', title: 'Member App', desc: 'Track progress and book classes' },
              { icon: '🥗', title: 'Nutrition Guidance', desc: 'Meal plans and consultations' },
              { icon: '🎯', title: 'Goal Setting', desc: 'Personalized fitness assessments' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Monitor your improvements' },
              { icon: '🤝', title: 'Community Events', desc: 'Challenges and social activities' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card cursor-pointer"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  {openFaq === faq.id ? (
                    <FaChevronUp className="text-accent" />
                  ) : (
                    <FaChevronDown className="text-accent" />
                  )}
                </div>
                {openFaq === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-gray-400 mt-4"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
