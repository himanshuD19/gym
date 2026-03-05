// Programs Data
export const programs = [
  {
    id: 1,
    title: 'Weight Loss',
    description: 'Burn fat and achieve your ideal body weight with our scientifically designed weight loss program.',
    benefits: ['Customized meal plans', 'Cardio training', 'Fat burning workouts', 'Progress tracking'],
    difficulty: 'Beginner to Intermediate',
    icon: '🔥',
  },
  {
    id: 2,
    title: 'Muscle Building',
    description: 'Build lean muscle mass and increase strength with our comprehensive muscle building program.',
    benefits: ['Progressive overload training', 'Nutrition guidance', 'Supplement advice', 'Recovery protocols'],
    difficulty: 'Intermediate to Advanced',
    icon: '💪',
  },
  {
    id: 3,
    title: 'Strength Training',
    description: 'Develop raw power and functional strength through compound movements and proven techniques.',
    benefits: ['Powerlifting techniques', 'Core strength', 'Injury prevention', 'Performance tracking'],
    difficulty: 'All Levels',
    icon: '⚡',
  },
  {
    id: 4,
    title: 'Functional Training',
    description: 'Improve everyday movement patterns and athletic performance with functional fitness.',
    benefits: ['Mobility work', 'Balance training', 'Agility drills', 'Sport-specific training'],
    difficulty: 'All Levels',
    icon: '🎯',
  },
  {
    id: 5,
    title: 'Personal Training',
    description: 'One-on-one coaching tailored to your specific goals with our certified personal trainers.',
    benefits: ['Customized programs', 'Form correction', 'Motivation & accountability', 'Flexible scheduling'],
    difficulty: 'All Levels',
    icon: '👤',
  },
  {
    id: 6,
    title: 'Group Classes',
    description: 'High-energy group workouts that combine motivation, community, and expert instruction.',
    benefits: ['HIIT classes', 'Spin classes', 'Boot camps', 'Community support'],
    difficulty: 'All Levels',
    icon: '👥',
  },
  {
    id: 7,
    title: 'Cardio Training',
    description: 'Boost cardiovascular health and endurance with varied cardio training methods.',
    benefits: ['Heart health', 'Stamina building', 'Calorie burning', 'Multiple equipment options'],
    difficulty: 'All Levels',
    icon: '❤️',
  },
];

// Trainers Data
export const trainers = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    specialization: 'Strength & Conditioning',
    experience: '8 Years',
    certifications: ['NASM-CPT', 'CrossFit Level 2', 'Nutrition Specialist'],
    bio: 'Specialized in building functional strength and athletic performance. Former national-level powerlifter.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    specialization: 'Weight Loss & Nutrition',
    experience: '6 Years',
    certifications: ['ACE-CPT', 'Precision Nutrition L1', 'Yoga Instructor'],
    bio: 'Expert in sustainable weight loss and holistic wellness. Helped 500+ clients transform their lives.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    specialization: 'Bodybuilding & Hypertrophy',
    experience: '10 Years',
    certifications: ['ISSA-CPT', 'Sports Nutritionist', 'Former Mr. India Finalist'],
    bio: 'Competitive bodybuilder with a passion for helping clients build their dream physique.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Anita Desai',
    specialization: 'Functional Fitness & Mobility',
    experience: '7 Years',
    certifications: ['FMS Level 2', 'TRX Certified', 'Pilates Instructor'],
    bio: 'Focuses on movement quality and injury prevention through functional training methods.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Arjun Patel',
    specialization: 'HIIT & Athletic Performance',
    experience: '5 Years',
    certifications: ['NSCA-CSCS', 'Olympic Lifting Coach', 'Sports Performance'],
    bio: 'Former track athlete specializing in explosive power and high-intensity training.',
    image: 'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Sneha Reddy',
    specialization: 'Group Fitness & Dance',
    experience: '4 Years',
    certifications: ['Zumba Instructor', 'Les Mills Certified', 'Aerobics Specialist'],
    bio: 'Brings energy and fun to every class. Makes fitness enjoyable for everyone.',
    image: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=400&fit=crop',
  },
];

// Membership Plans
export const membershipPlans = [
  {
    id: 1,
    name: 'Basic',
    price: '₹2,999',
    duration: 'per month',
    features: [
      'Access to gym equipment',
      'Locker facility',
      'Basic fitness assessment',
      'Open gym hours',
      'Free WiFi',
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'Standard',
    price: '₹4,999',
    duration: 'per month',
    features: [
      'All Basic features',
      'Group fitness classes',
      'Nutrition consultation',
      'Personal training (2 sessions/month)',
      'Steam & sauna access',
      'Guest passes (2/month)',
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'Premium',
    price: '₹7,999',
    duration: 'per month',
    features: [
      'All Standard features',
      'Unlimited personal training',
      'Customized meal plans',
      'Priority class booking',
      'Spa & massage (1/month)',
      'Supplement guidance',
      'Guest passes (5/month)',
      '24/7 gym access',
    ],
    popular: false,
  },
];

// Transformations
export const transformations = [
  {
    id: 1,
    name: 'Rahul Verma',
    weightLost: '25 kg',
    timeTaken: '6 months',
    story: 'From 95kg to 70kg. Completely changed my lifestyle and gained confidence.',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1583454155184-870a1f63ecca?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Neha Kapoor',
    weightLost: '18 kg',
    timeTaken: '5 months',
    story: 'Lost weight after pregnancy. NLF trainers were incredibly supportive.',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Amit Joshi',
    weightLost: '30 kg',
    timeTaken: '8 months',
    story: 'Transformed from obese to fit. Best decision of my life.',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Pooja Singh',
    weightLost: '15 kg',
    timeTaken: '4 months',
    story: 'Gained muscle and lost fat. Feel stronger than ever!',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Karan Malhotra',
    weightLost: '22 kg',
    timeTaken: '7 months',
    story: 'Overcame health issues through fitness. Forever grateful to NLF.',
    beforeImage: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Divya Nair',
    weightLost: '12 kg',
    timeTaken: '3 months',
    story: 'Quick transformation for my wedding. Looked and felt amazing!',
    beforeImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop',
  },
];

// Gallery Images
export const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
    category: 'equipment',
    alt: 'Modern gym equipment',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
    category: 'training',
    alt: 'Personal training session',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
    category: 'members',
    alt: 'Group fitness class',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop',
    category: 'equipment',
    alt: 'Weight training area',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
    category: 'training',
    alt: 'Strength training',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1558017487-06bf9f82613a?w=800&h=600&fit=crop',
    category: 'events',
    alt: 'Gym event',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop',
    category: 'equipment',
    alt: 'Cardio equipment',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
    category: 'training',
    alt: 'Functional training',
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&h=600&fit=crop',
    category: 'members',
    alt: 'Gym members',
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sanjay Gupta',
    role: 'Business Owner',
    content: 'NLF has the best trainers and equipment. Lost 20kg in 6 months. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    name: 'Ritu Sharma',
    role: 'Software Engineer',
    content: 'The group classes are amazing! Great community and supportive environment.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    name: 'Aditya Rao',
    role: 'Student',
    content: 'Best gym in the city. Clean, modern, and the trainers really know their stuff.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
  },
  {
    id: 4,
    name: 'Kavita Menon',
    role: 'Doctor',
    content: 'Professional environment with top-notch facilities. Worth every rupee!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
  },
];

// FAQ Data
export const faqs = [
  {
    id: 1,
    question: 'What are your gym timings?',
    answer: 'We are open Monday to Saturday from 6:00 AM to 10:00 PM, and Sunday from 7:00 AM to 8:00 PM. Premium members get 24/7 access.',
  },
  {
    id: 2,
    question: 'Do you offer trial sessions?',
    answer: 'Yes! We offer a free 3-day trial pass for first-time visitors. Contact us to schedule your trial.',
  },
  {
    id: 3,
    question: 'What should I bring for my first visit?',
    answer: 'Bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide lockers for your belongings.',
  },
  {
    id: 4,
    question: 'Can I freeze my membership?',
    answer: 'Yes, you can freeze your membership for up to 2 months per year for medical or travel reasons.',
  },
  {
    id: 5,
    question: 'Do you provide diet plans?',
    answer: 'Yes, our Standard and Premium members receive personalized nutrition consultation and meal plans.',
  },
  {
    id: 6,
    question: 'Is personal training included?',
    answer: 'Personal training is included in Standard (2 sessions/month) and Premium (unlimited) memberships. Basic members can purchase sessions separately.',
  },
];

// Class Schedule
export const classSchedule = [
  { id: 1, day: 'Monday', time: '6:00 AM', class: 'HIIT Bootcamp', trainer: 'Arjun Patel' },
  { id: 2, day: 'Monday', time: '7:00 PM', class: 'Zumba Dance', trainer: 'Sneha Reddy' },
  { id: 3, day: 'Tuesday', time: '6:30 AM', class: 'Yoga Flow', trainer: 'Priya Sharma' },
  { id: 4, day: 'Tuesday', time: '6:00 PM', class: 'Strength Training', trainer: 'Rajesh Kumar' },
  { id: 5, day: 'Wednesday', time: '6:00 AM', class: 'Spin Class', trainer: 'Sneha Reddy' },
  { id: 6, day: 'Wednesday', time: '7:00 PM', class: 'Functional Fitness', trainer: 'Anita Desai' },
  { id: 7, day: 'Thursday', time: '6:30 AM', class: 'CrossFit', trainer: 'Rajesh Kumar' },
  { id: 8, day: 'Thursday', time: '6:00 PM', class: 'Boxing', trainer: 'Arjun Patel' },
  { id: 9, day: 'Friday', time: '6:00 AM', class: 'HIIT Cardio', trainer: 'Arjun Patel' },
  { id: 10, day: 'Friday', time: '7:00 PM', class: 'Dance Fitness', trainer: 'Sneha Reddy' },
  { id: 11, day: 'Saturday', time: '8:00 AM', class: 'Power Yoga', trainer: 'Priya Sharma' },
  { id: 12, day: 'Saturday', time: '5:00 PM', class: 'Bodybuilding', trainer: 'Vikram Singh' },
];

// Workout of the Day
export const workoutOfTheDay = {
  title: 'Full Body Strength',
  description: 'Build total body strength with this compound movement workout',
  exercises: [
    { name: 'Barbell Squats', sets: 4, reps: '8-10', rest: '90s' },
    { name: 'Bench Press', sets: 4, reps: '8-10', rest: '90s' },
    { name: 'Deadlifts', sets: 3, reps: '6-8', rest: '120s' },
    { name: 'Pull-ups', sets: 3, reps: '10-12', rest: '60s' },
    { name: 'Overhead Press', sets: 3, reps: '8-10', rest: '90s' },
    { name: 'Plank', sets: 3, reps: '60s hold', rest: '45s' },
  ],
};

// Trainer Tips
export const trainerTips = [
  {
    id: 1,
    trainer: 'Rajesh Kumar',
    tip: 'Always warm up for at least 10 minutes before heavy lifting to prevent injuries.',
    category: 'Strength',
  },
  {
    id: 2,
    trainer: 'Priya Sharma',
    tip: 'Drink water throughout the day, not just during workouts. Aim for 3-4 liters daily.',
    category: 'Nutrition',
  },
  {
    id: 3,
    trainer: 'Vikram Singh',
    tip: 'Progressive overload is key. Increase weight or reps gradually every week.',
    category: 'Muscle Building',
  },
  {
    id: 4,
    trainer: 'Anita Desai',
    tip: 'Focus on form over weight. Perfect technique prevents injuries and builds better muscle.',
    category: 'Training',
  },
];
