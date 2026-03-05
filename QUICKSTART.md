# Quick Start Guide - Next Level Fitness Website

## 🚀 Getting Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:5173**

---

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 🎨 Project Overview

### Pages Created (9 Total)
1. **Home** (`/`) - Hero, programs, trainers, testimonials
2. **About** (`/about`) - Mission, vision, statistics
3. **Programs** (`/programs`) - All training programs, schedule
4. **Trainers** (`/trainers`) - Trainer profiles, tips
5. **Membership** (`/membership`) - Pricing plans, FAQ
6. **Transformations** (`/transformations`) - Success stories
7. **Gallery** (`/gallery`) - Gym photos, facilities
8. **Contact** (`/contact`) - Contact form, map
9. **Join** (`/join`) - Signup form, BMI calculator

### Key Features
- ✅ Fully responsive design
- ✅ Smooth Framer Motion animations
- ✅ Dark fitness theme
- ✅ LocalStorage integration
- ✅ Toast notifications
- ✅ BMI calculator
- ✅ Class schedule
- ✅ Testimonials slider
- ✅ FAQ accordion
- ✅ Image gallery with lightbox

---

## 🎯 Testing the Features

### 1. Navigation
- Click through all menu items
- Test mobile menu (resize browser)
- Check sticky navbar on scroll

### 2. Forms
- **Contact Form** (`/contact`) - Submit and check LocalStorage
- **Join Form** (`/join`) - Fill out membership application
- **BMI Calculator** (`/join`) - Calculate your BMI

### 3. Interactive Elements
- **Pricing Cards** - Click "Select Plan" on membership page
- **Gallery** - Click images to open lightbox
- **Testimonials** - Auto-rotating slider
- **FAQ** - Click to expand/collapse

### 4. LocalStorage
Open browser console (F12) and run:
```javascript
// View all stored data
console.log('Contact Submissions:', localStorage.getItem('contactSubmissions'));
console.log('Join Submissions:', localStorage.getItem('joinSubmissions'));
console.log('Selected Plan:', localStorage.getItem('selectedPlan'));
```

---

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f0f0f',    // Main background
  secondary: '#1a1a1a',  // Card background
  accent: '#00ff41',     // Green accent (change this!)
  accentRed: '#ff0033',  // Red accent
}
```

### Update Content
Edit `src/utils/data.js`:
- Programs
- Trainers
- Membership plans
- Transformations
- Testimonials
- FAQ
- Class schedule

### Add New Pages
1. Create file in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`
3. Add link in `src/components/Navbar.jsx`

---

## 📱 Responsive Testing

Test on these breakpoints:
- **Mobile:** 375px (iPhone)
- **Tablet:** 768px (iPad)
- **Desktop:** 1440px (Laptop)

---

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Then restart
npm run dev
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check for syntax errors
npm run build
```

---

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to netlify.com
```

### GitHub Pages
```bash
npm run build
# Deploy 'dist' folder
```

---

## 📞 Need Help?

- Check `README.md` for detailed documentation
- Review component files in `src/components/`
- Inspect page files in `src/pages/`

---

**Happy Coding! 💪**

*Next Level Fitness - Push Beyond Limits*
