import { motion } from 'framer-motion';
import { FaCheckCircle, FaBullseye, FaEye, FaHeart, FaUsers, FaClock, FaTrophy, FaDumbbell } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const About = () => {
  const [stats, setStats] = useState({
    members: 0,
    years: 0,
    trainers: 0,
    equipment: 0,
  });

  useEffect(() => {
    const targetStats = {
      members: 5000,
      years: 10,
      trainers: 25,
      equipment: 150,
    };

    const duration = 2000;
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920&h=600&fit=crop)',
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
            About <span className="gradient-text">NLF</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Your Journey to the Next Level
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Founded in 2014, Next Level Fitness started with a simple mission: to create a fitness community where everyone feels welcome, supported, and empowered to achieve their goals.
              </p>
              <p className="text-gray-400 mb-4">
                What began as a small gym with a handful of members has grown into one of the most respected fitness centers in the region, serving over 5,000 members and counting.
              </p>
              <p className="text-gray-400">
                We believe fitness is not just about physical transformation—it's about building confidence, discipline, and a lifestyle that lasts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
                alt="NLF Gym"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-full">
                  <FaBullseye className="text-accent text-4xl" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-400">
                To empower individuals to push beyond their limits through expert coaching, state-of-the-art facilities, and a supportive community. We're committed to making fitness accessible, enjoyable, and transformative for everyone.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-accent/10 p-4 rounded-full">
                  <FaEye className="text-accent text-4xl" />
                </div>
                <h3 className="text-3xl font-heading font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-400">
                To be the leading fitness destination that inspires lasting lifestyle changes. We envision a community where fitness is a celebration of what our bodies can achieve, not a punishment for what we ate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose NLF */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Choose Next Level Fitness?</h2>
            <p className="section-subtitle">
              We're more than just a gym. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaUsers />,
                title: 'Expert Trainers',
                description: 'Certified professionals with years of experience and a passion for your success.',
              },
              {
                icon: <FaDumbbell />,
                title: 'Modern Equipment',
                description: 'State-of-the-art machines and free weights from leading fitness brands.',
              },
              {
                icon: <FaHeart />,
                title: 'Supportive Community',
                description: 'Join a family of like-minded individuals who motivate and inspire each other.',
              },
              {
                icon: <FaTrophy />,
                title: 'Proven Results',
                description: 'Thousands of success stories from members who achieved their fitness goals.',
              },
              {
                icon: <FaClock />,
                title: 'Flexible Hours',
                description: 'Open early to late with 24/7 access for premium members.',
              },
              {
                icon: <FaCheckCircle />,
                title: 'Holistic Approach',
                description: 'We focus on fitness, nutrition, and mental wellness for complete transformation.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card text-center group hover:border-accent hover:border transition-all"
              >
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-accent text-3xl group-hover:bg-accent group-hover:text-black transition-all">
                  {item.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gym Philosophy */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Our Philosophy</h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="card"
            >
              <h3 className="text-2xl font-heading font-bold text-accent mb-6 text-center">
                "Train Hard. Level Up."
              </h3>
              <div className="space-y-4 text-gray-400">
                <p>
                  <strong className="text-white">Progress Over Perfection:</strong> We believe in celebrating every small win on your fitness journey. Whether you're lifting 5kg or 50kg, what matters is that you're better than yesterday.
                </p>
                <p>
                  <strong className="text-white">Community First:</strong> Fitness is better together. We've built a culture where members support each other, trainers genuinely care, and everyone is working toward their personal best.
                </p>
                <p>
                  <strong className="text-white">Science-Backed Training:</strong> No gimmicks, no shortcuts. Our programs are based on proven exercise science and nutrition principles that deliver real, sustainable results.
                </p>
                <p>
                  <strong className="text-white">Inclusive Environment:</strong> Whether you're a beginner or an advanced athlete, young or old, everyone belongs at NLF. We create programs that meet you where you are.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-20 bg-gradient-to-r from-accent to-green-400">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">{stats.members.toLocaleString()}+</h3>
              <p className="text-black font-semibold">Members Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">{stats.years}+</h3>
              <p className="text-black font-semibold">Years of Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">{stats.trainers}+</h3>
              <p className="text-black font-semibold">Certified Trainers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-6xl font-bold text-black mb-2">{stats.equipment}+</h3>
              <p className="text-black font-semibold">Equipment Count</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
