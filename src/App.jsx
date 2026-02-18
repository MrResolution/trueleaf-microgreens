import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, Instagram, Facebook, Sprout, Leaf, MapPin, MessageCircle } from 'lucide-react';
import './index.css';

// Navigation Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/90 backdrop-blur-md shadow-md' : 'py-6 bg-transparent'}`}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, padding: scrolled ? '0.5rem 0' : '1.5rem 0', backgroundColor: scrolled ? 'rgba(248, 246, 240, 0.9)' : 'transparent', backdropFilter: scrolled ? 'blur(10px)' : 'none', transition: 'all 0.3s ease' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo">
          <img src="/logo.png" alt="Trueleaf" style={{ maxHeight: scrolled ? '100px' : '120px', transition: 'max-height 0.3s ease' }} />
        </a>


        {/* Desktop Menu */}
        <div className="nav-links desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'About', 'Products', 'Recipes', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-primary)', textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
            style={{ background: 'var(--color-cream)', overflow: 'hidden', borderTop: '1px solid rgba(0,0,0,0.1)' }}
          >
            <div className="container" style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
              {['Home', 'About', 'Products', 'Recipes', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} style={{ fontSize: '1.5rem', fontWeight: 500, color: 'var(--color-primary)', textDecoration: 'none' }}>
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '150px', paddingBottom: '4rem', position: 'relative', overflow: 'hidden' }}>


      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', alignItems: 'center', gap: '3rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
            Small by design. <br />Mighty by nutrition.
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', color: '#555', maxWidth: '90%', lineHeight: '1.8' }}>
            Supercharge your meals with our vibrant, nutrient-dense microgreens.
            Harvested fresh on order and delivered straight to your doorstep.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <motion.a href="#contact" className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} aria-label="Order microgreens now">
              ORDER NOW
            </motion.a>
            <motion.a href="#products" className="btn" style={{ background: 'transparent', border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }} whileHover={{ scale: 1.05, background: 'rgba(45, 80, 22, 0.05)' }} whileTap={{ scale: 0.95 }} aria-label="View our menu">
              VIEW MENU
            </motion.a>
          </div>


        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="floating-icon-wrapper"
          style={{ position: 'relative', height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          {/* Abstract blobs background - Increased size for visibility */}
          <div style={{ position: 'absolute', width: '120%', height: '120%', background: '#d1e7dd', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', zIndex: -1, animation: 'morph 8s ease-in-out infinite' }} />

          <div className="floating" style={{ position: 'relative', width: '90%', zIndex: 1 }}>
            <img
              src="/sunflower-shoots.png"
              alt="Fresh Sunflower Microgreens ready to harvest"
              width="600"
              height="600"
              fetchPriority="high"
              style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))', transform: 'scale(1.15)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
          <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Grown with Love, <br />Free from Harm.</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555' }}>
            At Trueleaf, we believe in the purity of nature. Our microgreens are 100% home-grown in a controlled, hygienic environment.
          </p>
          <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
            {['Pesticide-Free', 'Chemical-Free', '100% Organic Soil', 'Harvested on Order'].map((item) => (
              <li key={item} style={{ fontSize: '1.1rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', color: 'var(--color-dark)' }}>
                <span style={{ color: 'var(--color-accent)', marginRight: '1rem', fontWeight: 'bold' }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <a href="#products" className="btn">VIEW OUR GREENS</a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="shadow-soft" style={{ borderRadius: '20px', overflow: 'hidden', background: 'white' }}>
          <img
            src="/radish-mix.png"
            alt="Mix of fresh radish microgreens"
            loading="lazy"
            width="600"
            height="400"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

// Products Component
const products = [
  { name: 'Mustard', img: '/mustard.png', desc: 'Bold, spicy flavor that adds a punch.' },
  { name: 'Fenugreek', img: '/fenugreek.png', desc: 'Bitter-sweet nutty flavor, perfect for Indian cuisine.' },
  { name: 'Radish (white)', img: '/white-radish.png', desc: 'Fresh, crisp with a spicy kick.' },
  { name: 'Wheat', img: '/wheat-grass.png', desc: 'Powerhouse of chlorophyll and vitamins.' },
  { name: 'Peas', img: '/peas.png', desc: 'Sweet and fresh like spring peas.' },
  { name: 'Green gram', img: '/green-gram.png', desc: 'Mild, sweet, and crunchy protein boost.' },
];

const Products = () => {
  return (
    <section id="products" style={{ padding: '6rem 0' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: 'var(--color-primary)' }}>Our Microgreens</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="shadow-soft"
              style={{ background: 'white', borderRadius: '12px', overflow: 'hidden' }}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img
                  src={product.img}
                  alt={`${product.name} microgreens`}
                  loading="lazy"
                  width="400"
                  height="250"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ color: '#666' }}>{product.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Recipes Component
const recipes = [
  {
    title: 'Spicy Avocado Toast',
    img: '/mustard.png', // Fallback to ingredient image
    desc: 'Ideally suited for a quick, nutritious breakfast.',
    ingredient: 'Mustard Greens',
    time: '5 mins',
    difficulty: 'Easy',
    servings: '1 serving',
    ingredients: [
      '2 slices sourdough bread',
      '1 ripe avocado',
      '1 tbsp lemon juice',
      '1 tsp chili flakes',
      '1 cup fresh Mustard Microgreens',
      'Salt and pepper to taste',
      'Olive oil for drizzling'
    ],
    instructions: [
      'Toast the sourdough slices until golden brown.',
      'Mash avocado with lemon juice, salt, and pepper.',
      'Spread mashed avocado generously on toast.',
      'Top with chili flakes and a large handful of fresh Mustard Microgreens.',
      'Drizzle with olive oil and serve immediately.'
    ]
  },
  {
    title: 'Classic Aloo Methi',
    img: '/fenugreek.png', // Fallback to ingredient image
    desc: 'Traditional potatoes tossed with fresh fenugreek leaves.',
    ingredient: 'Fenugreek',
    time: '20 mins',
    difficulty: 'Medium',
    servings: '2 servings',
    ingredients: [
      '3 medium potatoes, boiled and cubed',
      '2 tbsp oil',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric powder',
      '1 tsp red chili powder',
      '2 cups fresh Fenugreek Microgreens',
      'Salt to taste'
    ],
    instructions: [
      'Heat oil in a pan and add cumin seeds.',
      'Add cubed potatoes, turmeric, red chili powder, and salt.',
      'Toss well and cook on medium heat for 5-7 minutes until potatoes are crispy.',
      'Turn off the heat and immediately stir in the fresh Fenugreek Microgreens.',
      'The residual heat will perfectly wilt the greens without losing flavor. Serve hot with roti or rice.'
    ]
  },
  {
    title: 'Wheatgrass & Pineapple Smoothie',
    img: '/wheat-grass.png', // Fallback to ingredient image
    desc: 'A tropical detox drink to start your day.',
    ingredient: 'Wheat',
    time: '5 mins',
    difficulty: 'Easy',
    servings: '1 glass',
    ingredients: [
      '1/2 cup fresh Wheatgrass',
      '1 cup pineapple chunks (frozen)',
      '1 cup coconut water',
      '1 inch piece of ginger',
      '1 tbsp lemon juice'
    ],
    instructions: [
      'Combine wheatgrass, pineapple, ginger, and coconut water in a blender.',
      'Blend on high speed until completely smooth.',
      'Add lemon juice and blend for a few more seconds.',
      'Strain through a fine mesh sieve if you prefer a smoother texture.',
      'Pour into a glass and drink immediately for maximum nutrient absorption.'
    ]
  }
];

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div onClick={onClose} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }}></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        style={{ background: 'white', borderRadius: '20px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', zIndex: 10 }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'white', border: 'none', borderRadius: '50%', padding: '0.5rem', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', zIndex: 20 }}>
          <X size={24} color="#333" />
        </button>

        <div style={{ height: '300px', overflow: 'hidden' }}>
          <img src={recipe.img} alt={recipe.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div style={{ padding: '2.5rem' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
            <span style={{ background: '#f0fdf4', padding: '0.4rem 1rem', borderRadius: '20px', color: 'var(--color-primary)', fontWeight: 'bold' }}>{recipe.time}</span>
            <span style={{ background: '#f0fdf4', padding: '0.4rem 1rem', borderRadius: '20px', color: 'var(--color-primary)', fontWeight: 'bold' }}>{recipe.difficulty}</span>
            <span style={{ background: '#f0fdf4', padding: '0.4rem 1rem', borderRadius: '20px', color: 'var(--color-primary)', fontWeight: 'bold' }}>{recipe.servings}</span>
          </div>

          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>{recipe.title}</h2>
          <p style={{ fontSize: '1.1rem', color: '#555', marginBottom: '2.5rem' }}>{recipe.desc}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Ingredients</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {recipe.ingredients.map((item, index) => (
                  <li key={index} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'start', color: '#444' }}>
                    <span style={{ color: 'var(--color-accent)', marginRight: '0.8rem', marginTop: '4px' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)', marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Instructions</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {recipe.instructions.map((step, index) => (
                  <div key={index} style={{ display: 'flex', gap: '1rem' }}>
                    <div style={{ minWidth: '30px', height: '30px', background: 'var(--color-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '0.9rem' }}>
                      {index + 1}
                    </div>
                    <p style={{ color: '#444', lineHeight: '1.6' }}>{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Recipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <section id="recipes" style={{ padding: '6rem 0', background: '#fcfcfc' }}>
      <AnimatePresence>
        {selectedRecipe && (
          <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />
        )}
      </AnimatePresence>

      <div className="container">
        <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '1rem', color: 'var(--color-primary)' }}>Fresh Recipes</h2>
        <p style={{ textAlign: 'center', marginBottom: '4rem', color: '#666', fontSize: '1.2rem' }}>Delicious ways to add microgreens to your daily diet. Click on a recipe to view details.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
          {recipes.map((recipe, index) => (
            <motion.div
              key={recipe.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedRecipe(recipe)}
              className="shadow-soft"
              style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.05)', cursor: 'pointer' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  loading="lazy"
                  width="400"
                  height="220"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(255,255,255,0.9)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                  {recipe.time}
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#888' }}>{recipe.difficulty}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{recipe.title}</h3>
                <p style={{ color: '#666', marginBottom: '1.5rem', lineHeight: '1.6' }}>{recipe.desc}</p>

                <div style={{ borderTop: '1px solid #eee', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '0.9rem', color: '#555' }}>Made with:</span>
                  <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>{recipe.ingredient}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => alert(error))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Get Fresh Greens Delivered</h2>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Founder: Saratha</p>
            <div className="contact-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '1.1rem', opacity: 0.8, marginBottom: '0.5rem' }}>
              <a href="mailto:trueleaf1111@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>trueleaf1111@gmail.com</a>
              <span className="separator">|</span>
              <a href="tel:+918610674204" style={{ color: 'white', textDecoration: 'underline' }}>+91 86106 74204</a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', opacity: 0.8, color: 'white' }}>
              <MapPin size={18} />
              <span>AVT Nagar, Gokul Nagar, Hosur, 635109</span>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '12px', maxWidth: '600px', margin: '0 auto' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Thank You! 🌿</h3>
              <p>Your message has been received. We'll get back to you shortly.</p>
              <button className="btn" onClick={() => setIsSubmitted(false)} style={{ marginTop: '2rem', backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 'bold' }}>Send Another Message</button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '12px' }}>
              <input type="hidden" name="form-name" value="contact" />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{ padding: '1rem', borderRadius: '4px', border: 'none' }}
                  aria-label="Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ padding: '1rem', borderRadius: '4px', border: 'none' }}
                  aria-label="Email Address"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '1rem', borderRadius: '4px', border: 'none', marginBottom: '1rem' }}
                aria-label="Message"
              ></textarea>
              <button type="submit" disabled={isSubmitting} className="btn" style={{ width: '100%', backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 'bold', opacity: isSubmitting ? 0.7 : 1 }} aria-label="Send Message">
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          )}

          {/* WhatsApp Button */}
          <div style={{ marginTop: '3rem' }}>
            <p style={{ marginBottom: '1rem', opacity: 0.9 }}>Prefer to chat?</p>
            <a href="https://wa.me/918610674204" target="_blank" rel="noopener noreferrer" className="btn" aria-label="Chat on WhatsApp" style={{ backgroundColor: '#25D366', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer style={{ background: 'var(--color-dark)', color: '#888', padding: '3rem 0', textAlign: 'center' }}>
    <div className="container">
      <h3 style={{ color: 'white', marginBottom: '1rem' }}>Trueleaf</h3>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <a href="#"><Instagram size={20} /></a>
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Mail size={20} /></a>
        <a href="#"><Phone size={20} /></a>
      </div>
      <p>&copy; 2026 Trueleaf Microgreens. Grown with love.</p>
    </div>
  </footer>
);

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        className="animate-blob-1"
        aria-hidden="true"
        style={{ position: 'fixed', top: '-10%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(90, 140, 58, 0.1) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }}
      />

      <div
        className="animate-blob-2"
        aria-hidden="true"
        style={{ position: 'fixed', bottom: '-10%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(45, 80, 22, 0.1) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }}
      />

      {/* Floating Sprout Icons - Subtle & Behind Content */}
      {[
        { Icon: Sprout, top: '15%', left: '10%' },
        { Icon: Leaf, top: '25%', right: '15%' },
        { Icon: Sprout, bottom: '20%', left: '20%' },
        { Icon: Leaf, top: '60%', right: '5%' },
        { Icon: Leaf, bottom: '10%', left: '40%' },
      ].map((item, index) => (
        <div
          key={index}
          className={index % 2 === 0 ? "animate-icon" : "animate-icon-delayed"}
          aria-hidden="true"
          style={{
            position: 'fixed',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            zIndex: -1,
            pointerEvents: 'none',
            color: 'var(--color-primary)',
            opacity: 0.1
          }}
        >
          <item.Icon size={48} strokeWidth={1.5} />
        </div>
      ))}
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Recipes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
