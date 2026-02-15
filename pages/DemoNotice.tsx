
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, Info } from 'lucide-react';

const DemoNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 pt-32">
      <div className="max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-50 rounded-[3rem] p-12 md:p-20 border border-neutral-100 text-center"
        >
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm">
            <Info className="w-8 h-8 text-neutral-900" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif italic mb-8 leading-tight">
            Site de Démonstration
          </h1>
          
          <div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed mb-12">
            <p>
              Vous tentez d'accéder à une page secondaire (Mentions Légales, Politique de Confidentialité ou Conditions Générales).
            </p>
            <p>
              Ceci est un <strong>modèle premium</strong> conçu pour présenter le savoir-faire de Martin Électricité. Ces pages seront entièrement rédigées et personnalisées lors du déploiement final pour un client spécifique, afin de garantir une conformité juridique totale.
            </p>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center space-x-3 bg-black text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-neutral-800 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Retour à l'accueil</span>
          </Link>
        </motion.div>
        
        <div className="mt-12 text-center">
          <p className="text-[10px] text-neutral-400 uppercase tracking-[0.3em] font-bold">
            Martin Électricité — Excellence & Innovation
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoNotice;
