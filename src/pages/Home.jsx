import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProgramCard from '../components/ProgramCard';
import TrainerCard from '../components/TrainerCard';
import PricingCard from '../components/PricingCard';
import TransformationCard from '../components/TransformationCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { programs, trainers, membershipPlans, transformations, testimonials } from '../utils/data';
import { FaDumbbell, FaUsers, FaTrophy, FaClock, FaInstagram } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Home = () => {
  const [stats, setStats] = useState({
    members: 0,
    years: 0,
    trainers: 0,
    equipment: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targetStats = {
      members: 5000,
      years: 10,
      trainers: 25,
      equipment: 150,
    };

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        members: Math.floor(targetStats.members * progress),
        years: Math.floor(targetStats.years * progress),
        trainers: Math.floor(targetStats.trainers * progress),
        equipment: Math.floor(targetStats.equipment * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About NLF Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">About Next Level Fitness</h2>
            <p className="section-subtitle">
              We're not just a gym. We're a community dedicated to transforming lives through fitness, nutrition, and unwavering support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-accent text-4xl" />
              </div>
              <h3 className="text-4xl font-bold text-accent mb-2">{stats.members.toLocaleString()}+</h3>
              <p className="text-gray-400">Members Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-accent text-4xl" />
              </div>
              <h3 className="text-4xl font-bold text-accent mb-2">{stats.years}+</h3>
              <p className="text-gray-400">Years of Excellence</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-accent text-4xl" />
              </div>
              <h3 className="text-4xl font-bold text-accent mb-2">{stats.trainers}+</h3>
              <p className="text-gray-400">Certified Trainers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaDumbbell className="text-accent text-4xl" />
              </div>
              <h3 className="text-4xl font-bold text-accent mb-2">{stats.equipment}+</h3>
              <p className="text-gray-400">Modern Equipment</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Tailored training programs designed to help you achieve your fitness goals, no matter your level.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {programs.slice(0, 6).map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/programs" className="btn-primary">
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Trainers */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Meet Our Trainers</h2>
            <p className="section-subtitle">
              Expert coaches dedicated to your success. Each trainer brings years of experience and passion.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {trainers.slice(0, 3).map((trainer, index) => (
              <TrainerCard key={trainer.id} trainer={trainer} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/trainers" className="btn-secondary">
              Meet All Trainers
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Membership Plans</h2>
            <p className="section-subtitle">
              Choose the plan that fits your lifestyle and fitness goals. All plans include access to our world-class facilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Stories */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Transformation Stories</h2>
            <p className="section-subtitle">
              Real people. Real results. See how our members have transformed their lives at NLF.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {transformations.slice(0, 3).map((transformation, index) => (
              <TransformationCard key={transformation.id} transformation={transformation} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/transformations" className="btn-primary">
              View More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">What Our Members Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Hear from our amazing community.
            </p>
          </motion.div>

          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Follow Us on Instagram</h2>
            <p className="section-subtitle">
              Join our community and stay updated with daily motivation, tips, and success stories.
            </p>
          </motion.div>

          <div className="text-center">
            <a
              href="https://instagram.com/nlf_gym"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <FaInstagram className="text-2xl" />
              <span>@nlf_gym</span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-accent to-green-400">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
              Join Next Level Fitness today and start your journey to a stronger, healthier you.
            </p>
            <Link to="/join" className="bg-black text-accent font-bold px-12 py-4 rounded-md hover:bg-gray-900 transition-all duration-300 inline-block">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
