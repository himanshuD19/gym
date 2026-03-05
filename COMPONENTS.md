# Component Documentation

## 📦 Component Overview

### Layout Components

#### `Navbar.jsx`
**Purpose:** Main navigation bar with sticky behavior

**Features:**
- Sticky on scroll with background change
- Mobile responsive menu
- Active route highlighting
- Smooth transitions

**Props:** None (uses React Router location)

---

#### `Footer.jsx`
**Purpose:** Site footer with links and contact info

**Features:**
- Brand information
- Quick links
- Social media links
- Contact details

**Props:** None

---

#### `Hero.jsx`
**Purpose:** Homepage hero section

**Features:**
- Full-screen hero
- Animated text entrance
- CTA buttons
- Scroll indicator

**Props:** None

---

### Card Components

#### `ProgramCard.jsx`
**Purpose:** Display training program information

**Props:**
- `program` (object) - Program data
- `index` (number) - For staggered animation

**Example:**
```jsx
<ProgramCard 
  program={{
    id: 1,
    title: 'Weight Loss',
    description: '...',
    benefits: [...],
    difficulty: 'Beginner',
    icon: '🔥'
  }}
  index={0}
/>
```

---

#### `TrainerCard.jsx`
**Purpose:** Display trainer profile

**Props:**
- `trainer` (object) - Trainer data
- `index` (number) - For staggered animation

**Example:**
```jsx
<TrainerCard 
  trainer={{
    id: 1,
    name: 'John Doe',
    specialization: 'Strength Training',
    experience: '8 Years',
    certifications: [...],
    bio: '...',
    image: 'url'
  }}
  index={0}
/>
```

---

#### `PricingCard.jsx`
**Purpose:** Display membership plan

**Props:**
- `plan` (object) - Plan data
- `index` (number) - For staggered animation

**Features:**
- Plan selection
- LocalStorage integration
- Toast notification
- Auto-redirect to join page

**Example:**
```jsx
<PricingCard 
  plan={{
    id: 1,
    name: 'Basic',
    price: '₹2,999',
    duration: 'per month',
    features: [...],
    popular: false
  }}
  index={0}
/>
```

---

#### `TransformationCard.jsx`
**Purpose:** Display before/after transformation

**Props:**
- `transformation` (object) - Transformation data
- `index` (number) - For staggered animation

**Example:**
```jsx
<TransformationCard 
  transformation={{
    id: 1,
    name: 'John Doe',
    weightLost: '25 kg',
    timeTaken: '6 months',
    story: '...',
    beforeImage: 'url',
    afterImage: 'url'
  }}
  index={0}
/>
```

---

### Interactive Components

#### `GalleryGrid.jsx`
**Purpose:** Image gallery with lightbox

**Props:**
- `images` (array) - Array of image objects

**Features:**
- Grid layout
- Click to enlarge
- Lightbox modal
- Category filtering (handled by parent)

**Example:**
```jsx
<GalleryGrid 
  images={[
    {
      id: 1,
      url: 'image-url',
      category: 'equipment',
      alt: 'Description'
    }
  ]}
/>
```

---

#### `TestimonialSlider.jsx`
**Purpose:** Auto-rotating testimonial carousel

**Props:**
- `testimonials` (array) - Array of testimonial objects

**Features:**
- Auto-rotation (5s interval)
- Manual navigation
- Dot indicators
- Smooth transitions

**Example:**
```jsx
<TestimonialSlider 
  testimonials={[
    {
      id: 1,
      name: 'John Doe',
      role: 'Business Owner',
      content: 'Great gym!',
      rating: 5,
      image: 'url'
    }
  ]}
/>
```

---

## 🎣 Custom Hooks

### `useLocalStorage.js`

#### `useLocalStorage(key, initialValue)`
React hook for localStorage state management

**Returns:** `[storedValue, setStoredValue]`

**Example:**
```jsx
const [user, setUser] = useLocalStorage('user', null);
```

---

#### `saveToLocalStorage(key, value)`
Save data to localStorage

**Returns:** `boolean` (success/failure)

**Example:**
```javascript
saveToLocalStorage('theme', 'dark');
```

---

#### `getFromLocalStorage(key)`
Retrieve data from localStorage

**Returns:** Parsed data or `null`

**Example:**
```javascript
const theme = getFromLocalStorage('theme');
```

---

#### `removeFromLocalStorage(key)`
Remove data from localStorage

**Returns:** `boolean` (success/failure)

**Example:**
```javascript
removeFromLocalStorage('theme');
```

---

#### `showToast(message, duration)`
Display toast notification

**Parameters:**
- `message` (string) - Message to display
- `duration` (number) - Duration in ms (default: 3000)

**Example:**
```javascript
showToast('Success!', 3000);
```

---

## 🎨 Styling Utilities

### Tailwind Custom Classes

Defined in `src/index.css`:

#### Button Classes
```css
.btn-primary - Green filled button
.btn-secondary - Green outlined button
```

#### Text Classes
```css
.section-title - Large heading
.section-subtitle - Subtitle text
.gradient-text - Gradient text effect
```

#### Layout Classes
```css
.card - Card container
.container-custom - Max-width container
.input-field - Form input styling
```

#### Animation Classes
```css
.animate-fadeInUp - Fade in from bottom
.skeleton - Loading skeleton
.toast - Toast notification
.hero-overlay - Hero gradient overlay
```

---

## 📊 Data Structure

### `src/utils/data.js`

All static data is centralized here:

- `programs` - Training programs array
- `trainers` - Trainer profiles array
- `membershipPlans` - Pricing plans array
- `transformations` - Success stories array
- `testimonials` - Member reviews array
- `galleryImages` - Gallery photos array
- `faqs` - FAQ items array
- `classSchedule` - Weekly class schedule
- `workoutOfTheDay` - Featured workout
- `trainerTips` - Expert tips array

---

## 🔄 Component Reusability

### Creating New Card Components

Template:
```jsx
import { motion } from 'framer-motion';

const NewCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="card"
    >
      {/* Your content */}
    </motion.div>
  );
};

export default NewCard;
```

---

## 🎭 Animation Patterns

### Framer Motion Common Patterns

#### Fade In Up
```jsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

#### Scale In
```jsx
initial={{ opacity: 0, scale: 0.9 }}
whileInView={{ opacity: 1, scale: 1 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

#### Hover Effect
```jsx
whileHover={{ y: -10, scale: 1.02 }}
```

#### Staggered Children
```jsx
transition={{ duration: 0.5, delay: index * 0.1 }}
```

---

## 🧩 Component Composition

### Page Structure Pattern

```jsx
<div className="pt-20"> {/* Account for fixed navbar */}
  
  {/* Hero Section */}
  <section className="relative h-96">
    {/* Hero content */}
  </section>

  {/* Content Sections */}
  <section className="py-20 bg-secondary">
    <div className="container-custom">
      {/* Section content */}
    </div>
  </section>

  <section className="py-20 bg-primary">
    {/* Alternate background */}
  </section>

</div>
```

---

## 📝 Best Practices

1. **Always use motion components** for animations
2. **Add viewport={{ once: true }}** to prevent re-animation on scroll
3. **Use staggered delays** for list items (index * 0.1)
4. **Lazy load images** with loading="lazy"
5. **Keep components small** and focused
6. **Use semantic HTML** for accessibility
7. **Test responsive** on all breakpoints

---

## 🔍 Debugging Tips

### Check Component Props
```jsx
console.log('Props:', { data, index });
```

### Inspect Animation
```jsx
onAnimationComplete={() => console.log('Animation done')}
```

### LocalStorage Debug
```javascript
console.log('All Storage:', localStorage);
```

---

**Component documentation complete! 🎉**
