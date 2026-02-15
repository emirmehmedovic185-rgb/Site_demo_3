
import React from 'react';
import { motion } from 'framer-motion';
import { History, Target, Users, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block text-neutral-400">Notre Histoire</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-10 leading-tight">
              Martin Électricité : <br/><span className="italic">L'héritage d'une passion.</span>
            </h1>
            <p className="text-neutral-600 text-lg leading-relaxed mb-8 font-light">
              Fondée en 1995 par Jean-Marc Martin, notre entreprise familiale s'est imposée comme la référence de l'électricité haut de gamme en Île-de-France.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10 font-light">
              Ce qui a commencé comme un petit atelier de quartier est devenu aujourd'hui un bureau d'études complet, accompagnant les architectes les plus renommés dans leurs créations les plus audacieuses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Certification Qualifelec</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Expert Domotique KNX</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">RGE Éco-Artisan</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-black" />
                <span className="text-sm font-medium">Garantie Décennale Premium</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop" 
              alt="Electrician working" 
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -top-10 -right-10 bg-neutral-900 text-white p-12 rounded-3xl hidden md:block">
              <div className="text-5xl font-serif mb-2">29</div>
              <div className="text-xs uppercase tracking-widest text-neutral-400">Ans de confiance</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif mb-6 italic">Nos Piliers</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">La quête de l'excellence guide chacune de nos interventions, du premier contact à la maintenance annuelle.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <History />, title: "Excellence Artisanale", text: "Nous préservons les techniques de pose traditionnelles tout en les adaptant aux standards de luxe modernes." },
              { icon: <Target />, title: "Précision Esthétique", text: "La technique doit s'effacer devant le design. Nous travaillons en symbiose avec votre décoration intérieure." },
              { icon: <Users />, title: "Accompagnement VIP", text: "Un interlocuteur unique pour votre projet et une disponibilité 24/7 pour nos clients sous contrat de maintenance." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-3xl shadow-sm border border-neutral-100 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-neutral-900 text-white flex items-center justify-center rounded-2xl mb-8">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 italic">{value.title}</h3>
                <p className="text-neutral-500 leading-relaxed">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
