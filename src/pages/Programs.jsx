import { motion } from 'framer-motion';
import ProgramCard from '../components/ProgramCard';
import { programs, classSchedule, workoutOfTheDay } from '../utils/data';

const Programs = () => {
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
            Our <span className="gradient-text">Programs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Find the perfect program for your fitness goals
          </motion.p>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Training Programs</h2>
            <p className="section-subtitle">
              Whether you're a beginner or advanced athlete, we have a program designed for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <ProgramCard key={program.id} program={program} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Workout of the Day */}
      <section className="py-20 bg-primary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Workout of the Day</h2>
            <p className="section-subtitle">
              Try today's featured workout and challenge yourself!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto card"
          >
            <h3 className="text-3xl font-heading font-bold text-accent mb-4 text-center">
              {workoutOfTheDay.title}
            </h3>
            <p className="text-gray-400 text-center mb-8">{workoutOfTheDay.description}</p>

            <div className="space-y-4">
              {workoutOfTheDay.exercises.map((exercise, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary p-4 rounded-lg flex justify-between items-center"
                >
                  <div>
                    <h4 className="text-white font-bold text-lg">{exercise.name}</h4>
                  </div>
                  <div className="flex space-x-6 text-sm text-gray-400">
                    <span>
                      <strong className="text-accent">{exercise.sets}</strong> sets
                    </span>
                    <span>
                      <strong className="text-accent">{exercise.reps}</strong> reps
                    </span>
                    <span>
                      <strong className="text-accent">{exercise.rest}</strong> rest
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Class Schedule */}
      <section className="py-20 bg-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="section-title">Class Schedule</h2>
            <p className="section-subtitle">
              Join our group classes and train with the community!
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid gap-4">
              {classSchedule.map((classItem, index) => (
                <motion.div
                  key={classItem.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card hover:border-accent hover:border transition-all"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-accent font-bold">{classItem.day}</p>
                      <p className="text-gray-400 text-sm">{classItem.time}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="text-white font-bold text-lg">{classItem.class}</h4>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-400 text-sm">with</p>
                      <p className="text-white font-semibold">{classItem.trainer}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
