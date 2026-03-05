# Next Level Fitness (NLF) - Premium Gym Website

A modern, high-performance fitness brand website built with React, Tailwind CSS, and Framer Motion. This project showcases a professional gym website with smooth animations, responsive design, and a scalable architecture ready for backend integration.

![NLF Gym](https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=400&fit=crop)

## 🏋️ About Next Level Fitness

**Next Level Fitness (NLF)** is a premium fitness brand dedicated to helping members push beyond their limits. With expert trainers, state-of-the-art equipment, and a supportive community, NLF transforms lives through fitness.

**Tagline:** *"Push Beyond Limits"*

## ✨ Features

### Core Features
- ✅ **9 Complete Pages** - Home, About, Programs, Trainers, Membership, Transformations, Gallery, Contact, Join
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Smooth Animations** - Framer Motion animations throughout
- ✅ **Dark Theme** - Modern fitness-focused dark design
- ✅ **LocalStorage Integration** - Stores form submissions and user selections
- ✅ **Toast Notifications** - User feedback for actions
- ✅ **Lazy Loading** - Optimized image loading

### Page-Specific Features

#### Home Page
- Hero section with CTA buttons
- About NLF overview
- Programs preview
- Trainer showcase
- Membership plans
- Transformation stories
- Testimonials slider
- Instagram feed section
- Call-to-action banner

#### About Page
- Gym story and history
- Mission & Vision statements
- Why choose NLF
- Gym philosophy
- Animated statistics counter

#### Programs Page
- 7 Training programs with details
- Workout of the Day
- Class schedule
- Program benefits and difficulty levels

#### Trainers Page
- 6 Certified trainer profiles
- Trainer tips section
- Certifications and specializations

#### Membership Page
- 3 Pricing tiers (Basic, Standard, Premium)
- Plan comparison
- FAQ accordion
- What's included section

#### Transformations Page
- Before/after transformation cards
- Member success stories
- Transformation statistics

#### Gallery Page
- Filterable image gallery
- Lightbox view
- Facilities highlights

#### Contact Page
- Contact form with validation
- Location information
- Google Maps integration
- Social media links
- Business hours

#### Join Page
- Membership signup form
- BMI calculator
- Plan selection
- Form data saved to LocalStorage

### Extra Features
- 📊 **BMI Calculator** - Calculate Body Mass Index
- 💪 **Workout of the Day** - Daily featured workout
- 📅 **Class Schedule** - Weekly group class timetable
- 💡 **Trainer Tips** - Expert fitness advice
- 🎯 **Testimonials Slider** - Auto-rotating member reviews
- ❓ **FAQ Accordion** - Common questions answered
- 📸 **Instagram Integration** - Social media connection

## 🛠️ Tech Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Tailwind CSS 3.3.6
- **Animations:** Framer Motion 10.16.16
- **Routing:** React Router DOM 6.20.0
- **Icons:** React Icons 4.12.0
- **Storage:** LocalStorage API

## 📁 Project Structure

```
lf/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ProgramCard.jsx
│   │   ├── TrainerCard.jsx
│   │   ├── PricingCard.jsx
│   │   ├── TransformationCard.jsx
│   │   ├── GalleryGrid.jsx
│   │   └── TestimonialSlider.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Trainers.jsx
│   │   ├── Membership.jsx
│   │   ├── Transformations.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   │   └── Join.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── utils/
│   │   └── data.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone or navigate to the project directory:**
```bash
cd /home/himanshudwivedi/Pictures/lf
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser:**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Palette
- **Primary Black:** `#0f0f0f`
- **Secondary Dark:** `#1a1a1a`
- **Accent Green:** `#00ff41`
- **Accent Red:** `#ff0033`

### Typography
- **Headings:** Montserrat (Bold, 700-900)
- **Body:** Inter (300-900)

### Components
All components follow a consistent design pattern with:
- Card-based layouts
- Hover animations
- Smooth transitions
- Responsive breakpoints

## 💾 LocalStorage Features

The application uses LocalStorage to store:

1. **Membership Selections** - Selected plans from pricing cards
2. **Contact Form Submissions** - Contact form data
3. **Join Form Data** - Membership application data
4. **Newsletter Signups** - Email subscriptions

### Accessing Stored Data

Open browser console and run:
```javascript
// View contact submissions
console.log(JSON.parse(localStorage.getItem('contactSubmissions')));

// View join submissions
console.log(JSON.parse(localStorage.getItem('joinSubmissions')));

// View selected plan
console.log(JSON.parse(localStorage.getItem('selectedPlan')));
```

## 🔮 Future Backend Integration

The application is architected to easily integrate with a backend:

### Recommended Backend Stack
- **Node.js + Express** or **Python + FastAPI**
- **MongoDB** or **PostgreSQL** for database
- **JWT** for authentication
- **Stripe/Razorpay** for payment processing

### API Endpoints to Implement

```
POST /api/contact - Submit contact form
POST /api/join - Submit membership application
POST /api/newsletter - Subscribe to newsletter
GET /api/programs - Fetch programs
GET /api/trainers - Fetch trainers
GET /api/transformations - Fetch transformations
POST /api/payment - Process membership payment
```

### Integration Steps

1. Create API service layer in `src/services/api.js`
2. Replace LocalStorage calls with API calls
3. Add authentication context
4. Implement payment gateway
5. Add user dashboard
6. Create admin panel

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🎯 Performance Optimizations

- ✅ Lazy loading images
- ✅ Code splitting with React Router
- ✅ Optimized animations with Framer Motion
- ✅ Minimal bundle size
- ✅ Fast page transitions

## 🌟 Key Highlights

1. **Professional Design** - Matches premium gym brands like Equinox and Gold's Gym
2. **Smooth Animations** - Framer Motion creates engaging user experience
3. **Conversion Optimized** - Clear CTAs and user journey
4. **Scalable Architecture** - Easy to add features and backend
5. **Modern Stack** - Latest React and Tailwind CSS best practices

## 📄 License

This project is created for Next Level Fitness (NLF).

## 👨‍💻 Developer

Built with 💪 by a senior frontend developer specializing in fitness brand websites.

## 🤝 Contributing

To contribute to this project:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For questions or support:
- Email: info@nlfgym.com
- Phone: +91 98765 43210

---

**Next Level Fitness** - *Push Beyond Limits* 🏋️‍♂️
