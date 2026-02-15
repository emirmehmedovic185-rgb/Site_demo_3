
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Navigation, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', project: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDemoMessage, setShowDemoMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Modale de démonstration */}
      <AnimatePresence>
        {showDemoMessage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/40 backdrop-blur-md"
            onClick={() => setShowDemoMessage(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-12 rounded-[3rem] shadow-2xl max-w-lg w-full relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowDemoMessage(false)}
                className="absolute top-8 right-8 text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Navigation className="w-8 h-8 text-black" />
              </div>
              
              <h3 className="text-3xl font-serif italic mb-6">Site de Démonstration</h3>
              <p className="text-neutral-500 leading-relaxed mb-8">
                Ceci est un projet de présentation. <br/> 
                <strong>L'adresse réelle de l'entreprise</strong> sera configurée lors du déploiement final pour un client spécifique.
              </p>
              
              <button 
                onClick={() => setShowDemoMessage(false)}
                className="w-full bg-black text-white py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all"
              >
                Compris
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.4em] uppercase text-neutral-400 mb-6 block"
          >
            Parlons de votre vision
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-serif italic mb-8"
          >
            Contactez-nous.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="bg-neutral-50 p-12 rounded-[2rem] border border-neutral-100">
              <h3 className="text-2xl font-serif mb-8 italic">Nos Coordonnées</h3>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Téléphone</p>
                    <p className="text-lg font-medium">01 45 67 89 10</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Email</p>
                    <p className="text-lg font-medium">contact@martin-elec.fr</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Siège Social</p>
                    <p className="text-lg font-medium">5 Avenue Anatole France, 75007 Paris</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-12">
              <div className="flex items-center space-x-4 mb-4">
                <Clock className="w-5 h-5 text-neutral-400" />
                <h4 className="text-sm font-bold uppercase tracking-widest">Horaires d'accueil</h4>
              </div>
              <ul className="space-y-2 text-neutral-500 font-light">
                <li className="flex justify-between"><span>Lundi - Vendredi</span> <span>08:00 — 19:00</span></li>
                <li className="flex justify-between"><span>Samedi</span> <span>Sur rendez-vous</span></li>
                <li className="flex justify-between text-neutral-900 font-medium"><span>Service Urgence 24/7</span> <span>Disponible</span></li>
              </ul>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white p-2 lg:p-0">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-20 bg-neutral-900 rounded-[3rem] text-white"
                >
                  <CheckCircle className="w-20 h-20 mb-8 text-white" />
                  <h2 className="text-3xl font-serif mb-4 italic">Message Envoyé</h2>
                  <p className="text-neutral-400 max-w-sm">Merci de votre confiance. Notre bureau d'études reviendra vers vous sous 24h.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <input 
                        type="text" 
                        required
                        className="w-full bg-transparent border-b-2 border-neutral-100 py-4 focus:outline-none focus:border-black transition-colors font-light text-lg peer"
                        placeholder=" "
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                      <label className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Nom complet</label>
                    </div>
                    <div className="relative group">
                      <input 
                        type="email" 
                        required
                        className="w-full bg-transparent border-b-2 border-neutral-100 py-4 focus:outline-none focus:border-black transition-colors font-light text-lg peer"
                        placeholder=" "
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                      />
                      <label className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Adresse Email</label>
                    </div>
                  </div>
                  
                  <div className="relative group">
                    <select 
                      className="w-full bg-transparent border-b-2 border-neutral-100 py-4 focus:outline-none focus:border-black transition-colors font-light text-lg appearance-none"
                      onChange={(e) => setFormState({...formState, project: e.target.value})}
                    >
                      <option value="">Type de projet</option>
                      <option value="residence">Résidence Privée</option>
                      <option value="commercial">Espace Commercial</option>
                      <option value="lighting">Architecture Lumineuse</option>
                      <option value="domotique">Domotique / Smart Home</option>
                    </select>
                  </div>

                  <div className="relative group">
                    <textarea 
                      required
                      rows={4}
                      className="w-full bg-transparent border-b-2 border-neutral-100 py-4 focus:outline-none focus:border-black transition-colors font-light text-lg peer resize-none"
                      placeholder=" "
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                    ></textarea>
                    <label className="absolute left-0 top-4 text-neutral-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-black peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Détails de votre projet</label>
                  </div>

                  <button 
                    type="submit"
                    className="group bg-neutral-900 text-white px-12 py-5 rounded-full flex items-center space-x-4 hover:bg-black transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">Envoyer la demande</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Integration Aesthetic */}
      <section className="mt-32 h-[600px] relative overflow-hidden group">
        <div className="absolute inset-0 z-0 bg-neutral-100">
           <iframe
            title="Localisation Martin Électricité"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615663363!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca97ef5810022!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1709115156026!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.9) invert(0.05)' }}
            allowFullScreen={false}
            loading="lazy"
            className="pointer-events-none sm:pointer-events-auto"
          ></iframe>
        </div>

        {/* Overlay for Aesthetic Consistency */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80 pointer-events-none"></div>
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>

        {/* Floating Interactive Card - Now triggers Demo Message */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            onClick={() => setShowDemoMessage(true)}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-[0_32px_64px_rgba(0,0,0,0.15)] border border-white/20 flex flex-col items-center text-center max-w-sm mx-6 group/btn transition-all cursor-pointer"
          >
            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg group-hover/btn:rotate-[15deg] transition-transform">
              <Navigation className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl font-serif italic mb-2">Nous trouver</h4>
            <p className="text-neutral-500 text-sm font-light leading-relaxed mb-6">
              5 Avenue Anatole France<br/>75007 Paris, France
            </p>
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-neutral-900 border-b-2 border-black pb-1">
              <span>Ouvrir l'itinéraire</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
