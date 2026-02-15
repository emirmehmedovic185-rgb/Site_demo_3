
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Logo = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white w-7 h-7">
    <path d="M10 30V10L20 20L30 10V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5 35H35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/apropos' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-4 glass-nav border-b border-gray-100 shadow-sm' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-4 group">
          <div className="w-12 h-12 bg-neutral-950 flex items-center justify-center rounded-sm transition-all duration-700 group-hover:bg-black">
            <Logo />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-bold tracking-tight leading-none text-neutral-900">MARTIN</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-neutral-400 mt-1">ÉLECTRICITÉ</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-12">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 relative group ${location.pathname === link.path ? 'text-black' : 'text-neutral-400 hover:text-black'}`}
            >
              {link.name}
              <span className={`absolute -bottom-2 left-0 w-full h-[1.5px] bg-black transition-transform duration-500 origin-left ${location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
            </Link>
          ))}
          <Link to="/contact" className="bg-neutral-900 text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-black transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-neutral-200">
            Étude de projet
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-serif italic ${location.pathname === link.path ? 'text-black' : 'text-gray-500'}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-black text-white text-center py-5 rounded-full text-xs font-bold uppercase tracking-widest">
                Contacter le bureau d'études
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
