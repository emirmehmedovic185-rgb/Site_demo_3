
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-3xl font-serif mb-6 italic tracking-tight">MARTIN ÉLECTRICITÉ</h2>
          <p className="text-neutral-400 max-w-md leading-relaxed mb-8">
            Spécialistes en architecture lumineuse et en installations électriques haut de gamme, nous transformons vos espaces en expériences sensorielles uniques, grâce à une maîtrise experte de la lumière.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal" className="hover:text-neutral-300 transition-colors"><Instagram className="w-5 h-5" /></Link>
            <Link to="/legal" className="hover:text-neutral-300 transition-colors"><Linkedin className="w-5 h-5" /></Link>
            <Link to="/legal" className="hover:text-neutral-300 transition-colors"><Facebook className="w-5 h-5" /></Link>
            <Link to="/legal" className="hover:text-neutral-300 transition-colors"><Twitter className="w-5 h-5" /></Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Exploration</h3>
          <ul className="space-y-4 text-neutral-400">
            <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
            <li><Link to="/apropos" className="hover:text-white transition-colors">À Propos</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Nos Services</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6">Contact</h3>
          <ul className="space-y-4 text-neutral-400">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
              <span>12 Avenue des Lumières, 75008 Paris</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-neutral-500 shrink-0" />
              <span>01 45 67 89 10</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-neutral-500 shrink-0" />
              <span>contact@martin-elec.fr</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
        <p>© 2024 Martin Électricité. Tous droits réservés.</p>
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link to="/legal" className="hover:text-white">Mentions Légales</Link>
          <Link to="/legal" className="hover:text-white">Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
