import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaCheckCircle, FaCalculator } from 'react-icons/fa';
import { saveToLocalStorage, showToast, getFromLocalStorage } from '../hooks/useLocalStorage';
import { membershipPlans } from '../utils/data';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    fitnessGoal: '',
    preferredPlan: '',
    age: '',
    gender: '',
  });

  const [bmiData, setBmiData] = useState({
    weight: '',
    height: '',
    bmi: null,
    category: '',
  });

  useEffect(() => {
    // Check if user selected a plan from membership page
    const selectedPlan = getFromLocalStorage('selectedPlan');
    if (selectedPlan) {
      setFormData(prev => ({
        ...prev,
        preferredPlan: selectedPlan.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBmiChange = (e) => {
    setBmiData({
      ...bmiData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateBMI = () => {
    const weight = parseFloat(bmiData.weight);
    const height = parseFloat(bmiData.height) / 100; // Convert cm to m

    if (weight && height) {
      const bmi = (weight / (height * height)).toFixed(1);
      let category = '';

      if (bmi < 18.5) category = 'Underweight';
      else if (bmi < 25) category = 'Normal';
      else if (bmi < 30) category = 'Overweight';
      else category = 'Obese';

      setBmiData({
        ...bmiData,
        bmi,
        category,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    const timestamp = new Date().toISOString();
    const joinSubmission = {
      ...formData,
      bmi: bmiData.bmi,
      timestamp,
    };

    // Get existing submissions
    const existingSubmissions = JSON.parse(localStorage.getItem('joinSubmissions') || '[]');
    existingSubmissions.push(joinSubmission);
    saveToLocalStorage('joinSubmissions', existingSubmissions);

    showToast('Welcome to NLF! Our team will contact you shortly.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      fitnessGoal: '',
      preferredPlan: '',
      age: '',
      gender: '',
    });

    setBmiData({
      weight: '',
      height: '',
      bmi: null,
      category: '',
    });

    // Clear selected plan from localStorage
    localStorage.removeItem('selectedPlan');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=600&fit=crop)',
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
            <span className="gradient-text">Join</span> NLF Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Your transformation starts here
          </motion.p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Membership Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 card"
            >
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Membership Application</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="+91 98765 43210"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Age *</label>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      className="input-field"
                      placeholder="25"
                      min="16"
                      max="100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Fitness Goal *</label>
                  <select
                    name="fitnessGoal"
                    value={formData.fitnessGoal}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select Your Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-building">Muscle Building</option>
                    <option value="strength">Strength Training</option>
                    <option value="fitness">General Fitness</option>
                    <option value="athletic">Athletic Performance</option>
                    <option value="rehabilitation">Rehabilitation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Preferred Plan *</label>
                  <select
                    name="preferredPlan"
                    value={formData.preferredPlan}
                    onChange={handleChange}
                    required
                    className="input-field"
                  >
                    <option value="">Select a Plan</option>
                    {membershipPlans.map(plan => (
                      <option key={plan.id} value={plan.name}>
                        {plan.name} - {plan.price}/{plan.duration}
                      </option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Submit Application
                </button>

                <p className="text-gray-400 text-sm text-center">
                  By submitting this form, you agree to our terms and conditions.
                </p>
              </form>
            </motion.div>

            {/* BMI Calculator & Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* BMI Calculator */}
              <div className="card">
                <div className="flex items-center space-x-2 mb-4">
                  <FaCalculator className="text-accent text-2xl" />
                  <h3 className="text-xl font-heading font-bold text-white">BMI Calculator</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">Weight (kg)</label>
                    <input
                      type="number"
                      name="weight"
                      value={bmiData.weight}
                      onChange={handleBmiChange}
                      className="input-field"
                      placeholder="70"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">Height (cm)</label>
                    <input
                      type="number"
                      name="height"
                      value={bmiData.height}
                      onChange={handleBmiChange}
                      className="input-field"
                      placeholder="175"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={calculateBMI}
                    className="btn-secondary w-full"
                  >
                    Calculate BMI
                  </button>

                  {bmiData.bmi && (
                    <div className="bg-accent/10 border border-accent rounded-lg p-4 text-center">
                      <p className="text-gray-400 text-sm mb-1">Your BMI</p>
                      <p className="text-4xl font-bold text-accent mb-2">{bmiData.bmi}</p>
                      <p className="text-white font-semibold">{bmiData.category}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Membership Benefits */}
              <div className="card">
                <h3 className="text-xl font-heading font-bold text-white mb-4">What You Get</h3>
                <ul className="space-y-3">
                  {[
                    'Access to all equipment',
                    'Free fitness assessment',
                    'Personalized workout plan',
                    'Nutrition guidance',
                    'Group class access',
                    'Progress tracking',
                    'Community support',
                    'Expert trainers',
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      <FaCheckCircle className="text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Why Join NLF?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-400">
                Join 5,000+ members who have achieved their fitness goals with us.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Expert Guidance</h3>
              <p className="text-gray-400">
                25+ certified trainers ready to help you every step of the way.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card text-center"
            >
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">Modern Facilities</h3>
              <p className="text-gray-400">
                State-of-the-art equipment and amenities for the best workout experience.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Join;
