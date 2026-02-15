import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X, Mail, Phone, Instagram, Facebook, Sprout, Leaf } from 'lucide-react';
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
          <img src="/logo.png" alt="Trueleaf" style={{ maxHeight: scrolled ? '220px' : '250px', transition: 'max-height 0.3s ease' }} />
        </a>

        {/* Desktop Menu */}
        <div className="nav-links desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'About', 'Products', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--color-primary)', textDecoration: 'none' }}>
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)' }}>
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
              {['Home', 'About', 'Products', 'Contact'].map((item) => (
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
            <motion.a href="#contact" className="btn" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              ORDER NOW
            </motion.a>
            <motion.a href="#products" className="btn" style={{ background: 'transparent', border: '2px solid var(--color-primary)', color: 'var(--color-primary)' }} whileHover={{ scale: 1.05, background: 'rgba(45, 80, 22, 0.05)' }} whileTap={{ scale: 0.95 }}>
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
          {/* Abstract blobs background */}
          <div style={{ position: 'absolute', width: '80%', height: '80%', background: '#d4edda', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%', zIndex: -1, animation: 'morph 8s ease-in-out infinite' }} />

          <div className="floating" style={{ position: 'relative', width: '90%', zIndex: 1 }}>
            <img src="/sunflower-shoots.png" alt="Sunflower Microgreens" style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.2))', transform: 'scale(1.15)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// About Component
const About = () => {
  return (
    <section id="about" style={{ padding: '6rem 0', background: 'var(--color-cream)' }}>
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
          <img src="/radish-mix.png" alt="Fresh Microgreens" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </motion.div>
      </div>
    </section>
  );
};

// Products Component
const products = [
  { name: 'Sunflower', img: '/sunflower-shoots.png', desc: 'Nutty, crunchy, and protein-rich.' },
  { name: 'Peas', img: '/pea-shoots.png', desc: 'Sweet and fresh like spring peas.' },
  { name: 'Red Radish', img: '/radish-mix.png', desc: 'Spicy, crunchy, and vibrant purple.' },
  { name: 'Wheat Grass', img: '/wheat-grass.png', desc: 'Powerhouse of chlorophyll and vitamins.' },
  { name: 'Mustard', img: '/mustard.png', desc: 'Bold, spicy flavor that adds a punch.' },
  { name: 'Blue Cabbage', img: '/blue-cabbage.png', desc: 'Stunning violet colors with mild flavor.' },
];

const Products = () => {
  return (
    <section id="products" style={{ padding: '6rem 0', background: 'white' }}>
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
              style={{ background: 'var(--color-cream)', borderRadius: '12px', overflow: 'hidden' }}
            >
              <div style={{ height: '250px', overflow: 'hidden' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

// Contact Component
const Contact = () => {
  return (
    <section id="contact" style={{ padding: '6rem 0', background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'white' }}>Get Fresh Greens Delivered</h2>
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>Founder: Saratha</p>
            <div className="contact-info" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', fontSize: '1.1rem', opacity: 0.8 }}>
              <a href="mailto:trueleaf1111@gmail.com" style={{ color: 'white', textDecoration: 'underline' }}>trueleaf1111@gmail.com</a>
              <span className="separator">|</span>
              <a href="tel:+918610674204" style={{ color: 'white', textDecoration: 'underline' }}>+91 86106 74204</a>
            </div>
          </div>

          <form style={{ maxWidth: '600px', margin: '0 auto', background: 'rgba(255,255,255,0.1)', padding: '3rem', borderRadius: '12px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <input type="text" placeholder="Name" style={{ padding: '1rem', borderRadius: '4px', border: 'none' }} />
              <input type="email" placeholder="Email" style={{ padding: '1rem', borderRadius: '4px', border: 'none' }} />
            </div>
            <textarea placeholder="Message" rows="4" style={{ width: '100%', padding: '1rem', borderRadius: '4px', border: 'none', marginBottom: '1rem' }}></textarea>
            <button className="btn" style={{ width: '100%', backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: 'bold' }}>SEND MESSAGE</button>
          </form>
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
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
