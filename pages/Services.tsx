
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Smartphone, Shield, Zap, Sparkles, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Architecture Lumineuse",
      description: "Conception et installation d'éclairages indirects, bandes LED intégrées et scénarios d'ambiance.",
      image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Domotique de Luxe",
      description: "Contrôlez votre habitat du bout des doigts. Solutions intelligentes KNX, Control4 et Lutron.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Éclairage d'Art",
      description: "Mise en valeur de vos oeuvres d'art et collections privées par des systèmes d'éclairage précis.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Rénovation Totale",
      description: "Remise aux normes complète de châteaux, hôtels particuliers et appartements de prestige.",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Sécurité & Vidéo",
      description: "Systèmes d'alarme invisibles, vidéosurveillance 4K et contrôle d'accès biométrique.",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Éclairage Extérieur",
      description: "Sublimation de vos jardins, façades et piscines pour des soirées inoubliables.",
      image: "https://images.unsplash.com/photo-1558191053-8edcb01e1da3?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const steps = [
    { n: "01", t: "Étude & Design", d: "Simulation 3D et calcul des flux lumineux selon vos plans architecturaux pour une précision absolue." },
    { n: "02", t: "Ingénierie", d: "Définition technique rigoureuse et sélection des composants parmi les marques les plus prestigieuses." },
    { n: "03", t: "Installation", d: "Exécution millimétrée par nos maîtres électriciens, dans le respect total de votre intérieur." },
    { n: "04", t: "Maintenance", d: "Service après-vente VIP et conciergerie technique pour assurer la pérennité de vos systèmes." }
  ];

  return (
    <div className="bg-white pb-24">
      {/* Header Section */}
      <section className="pt-24 px-6 max-w-7xl mx-auto mb-24 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-bold tracking-[0.4em] uppercase text-neutral-400 mb-6 block"
        >
          Nos Domaines d'Intervention
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif italic mb-8"
        >
          Le luxe dans chaque détail.
        </motion.h1>
        <p className="max-w-2xl mx-auto text-neutral-500 font-light text-lg">
          Nous marions technologie de pointe et artisanat d'art pour créer des environnements électriques d'exception.
        </p>
      </section>

      {/* Grid Services */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            whileHover={{ y: -10 }}
            className="group relative h-[500px] overflow-hidden rounded-3xl shadow-xl bg-neutral-900"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
            
            <div className="absolute bottom-0 left-0 p-10 w-full">
              <div className="mb-6 text-white bg-white/10 w-16 h-16 flex items-center justify-center rounded-2xl backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 italic">{service.title}</h3>
              <p className="text-neutral-300 font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Process Section - Dark/Apple Style */}
      <section className="mt-40 max-w-7xl mx-auto px-6">
        <div className="bg-neutral-900 rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-800">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-12 leading-tight">
                Processus de réalisation <br/><span className="italic">Clés en main</span>.
              </h2>
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start space-x-6 group"
                  >
                    <span className="text-neutral-700 text-xl font-serif font-bold group-hover:text-white transition-colors">{step.n}</span>
                    <div>
                      <h4 className="text-white text-xl font-medium mb-2">{step.t}</h4>
                      <p className="text-neutral-500 font-light leading-relaxed">{step.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury Home" 
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-neutral-900/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-serif mb-8 italic">Une exigence sans compromis.</h2>
        <p className="text-neutral-500 max-w-xl mx-auto mb-12">Chaque projet est une pièce unique. Contactez-nous pour une étude personnalisée de votre résidence.</p>
        <Link 
          to="/contact" 
          className="bg-black text-white px-12 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center space-x-3 mx-auto w-fit"
        >
          <span>Démarrer un projet</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
};

export default Services;
