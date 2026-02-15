
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ChevronDown, Lightbulb, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const LogoIcon = () => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-amber-400 w-6 h-6">
    <path d="M10 30V10L20 20L30 10V30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Rail de scroll de 500vh pour le "pinning"
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Lissage ultra-premium pour le scroll
  const progress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 35,
    restDelta: 0.001
  });

  // --- MAPPINGS DE L'ANIMATION ---
  const bulbOpacity = useTransform(progress, [0, 0.25], [0.1, 1]);
  const bulbScale = useTransform(progress, [0.1, 0.4], [0.9, 1.05]);
  
  const raysOpacity = useTransform(progress, [0.4, 0.65], [0, 1]);
  const rayPathLength = useTransform(progress, [0.4, 0.7], [0, 1]);

  const backgroundFlash = useTransform(progress, [0.45, 0.75], ["#ffffff", "#fffef5"]);
  const haloOpacity = useTransform(progress, [0.35, 0.65], [0, 0.3]);

  const textReveal = useTransform(progress, [0.7, 0.8], [0, 1]);
  const textY = useTransform(progress, [0.7, 0.8], [20, 0]);

  // Paramètres des rayons adaptés selon le support
  const rayAngles = Array.from({ length: 24 })
    .map((_, i) => (i * (360 / 24)))
    .filter(angle => angle >= 220 && angle <= 320);

  const bulbRadius = isDesktop ? 130 : 180; 
  const rayLength = isDesktop ? 80 : 95;

  return (
    <div className="bg-white">
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
            alt="Luxury Lighting Interior"
            className="w-full h-full object-cover scale-110 filter grayscale-[0.9] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-white"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-4 bg-neutral-900 text-white px-8 py-4 rounded-xl mb-12 shadow-2xl"
          >
            <LogoIcon />
            <span className="text-[10px] font-bold uppercase tracking-[0.5em]">Martin Électricité</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-7xl md:text-[9rem] font-serif mb-10 leading-[0.8] tracking-tighter text-neutral-900"
          >
            L'Essence de <br/><span className="italic">L'Éclat</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
          >
            L'ingénierie électrique au service des architectures les plus prestigieuses.
          </motion.p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-neutral-400"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-4">Initier l'allumage</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>
      </section>

      {/* --- SECTION ANIMATION --- */}
      <section ref={scrollRef} className="relative h-[500vh] bg-white z-20">
        
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          <motion.div 
            style={{ backgroundColor: backgroundFlash }}
            className="absolute inset-0 -z-10"
          />

          {/* Rayons Supérieurs */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 1000" fill="none" preserveAspectRatio="xMidYMid slice">
            <motion.g style={{ opacity: raysOpacity }} className="origin-center">
              {rayAngles.map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                const x1 = 500 + Math.cos(rad) * bulbRadius;
                const y1 = 500 + Math.sin(rad) * bulbRadius;
                const x2 = 500 + Math.cos(rad) * (bulbRadius + rayLength);
                const y2 = 500 + Math.sin(rad) * (bulbRadius + rayLength);
                
                return (
                  <motion.line
                    key={i}
                    x1={x1} y1={y1}
                    x2={x2} y2={y2}
                    stroke="#fbbf24"
                    strokeWidth={isDesktop ? "1.5" : "2"}
                    strokeLinecap="round"
                    style={{ 
                      pathLength: rayPathLength, 
                      filter: `blur(0.3px) drop-shadow(0 0 ${isDesktop ? '5px' : '8px'} #fbbf24)`,
                    }}
                  />
                );
              })}
            </motion.g>
          </svg>

          {/* L'AMPOULE ÉPURÉE */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            
            <motion.div 
              style={{ opacity: haloOpacity }}
              className="absolute w-[30rem] h-[30rem] md:w-[25rem] md:h-[25rem] rounded-full bg-amber-100/20 blur-[150px] md:blur-[120px]"
            />

            <motion.div 
              style={{ opacity: bulbOpacity, scale: bulbScale }}
              className="relative flex flex-col items-center"
            >
              <Lightbulb className="w-72 h-72 md:w-[22rem] md:h-[22rem] text-black stroke-[0.04] drop-shadow-[0_10px_30px_rgba(0,0,0,0.03)]" />
            </motion.div>
          </div>

          {/* Message Final */}
          <motion.div 
            style={{ opacity: textReveal, y: textY }}
            className="absolute bottom-20 md:bottom-24 text-center px-6 z-30"
          >
            <h3 className="text-6xl md:text-8xl font-serif italic mb-6 tracking-tighter">Art & Lumière.</h3>
            <div className="flex items-center justify-center space-x-12">
              <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.8em] md:tracking-[1em]">Ingénierie</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_12px_#fbbf24]"></span>
              <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.8em] md:tracking-[1em]">Prestige</span>
            </div>
          </motion.div>

          {/* Barre de Charge Latérale */}
          <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 h-32 w-[1px] bg-neutral-100 overflow-hidden">
             <motion.div 
               style={{ scaleY: progress }}
               className="w-full bg-amber-400 origin-top h-full"
             />
          </div>
        </div>
      </section>

      {/* --- SECTION ARGUMENTS --- */}
      <section className="py-60 bg-white px-6 relative z-30 shadow-[0_-80px_100px_white]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-[1.1] tracking-tight text-neutral-900">
                La précision du <br/><span className="italic text-neutral-300">geste.</span>
              </h2>
              <p className="text-neutral-500 text-2xl font-light leading-relaxed mb-12 max-w-xl">
                Parce que le luxe se niche dans l'invisible, nous concevons des réseaux électriques d'une fiabilité absolue, intégrés avec une discrétion totale.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-neutral-800" />
                  </div>
                  <h4 className="font-serif italic text-xl">Haute Sécurité</h4>
                  <p className="text-neutral-400 text-sm font-light">Composants certifiés pour une protection sans faille.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-neutral-800" />
                  </div>
                  <h4 className="font-serif italic text-xl">Savoir-faire</h4>
                  <p className="text-neutral-400 text-sm font-light">Maîtres électriciens formés aux projets d'exception.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" 
                alt="Architecture de luxe" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10 text-white">
                <p className="text-[10px] uppercase tracking-widest mb-2 opacity-70 font-bold">Excellence Résidentielle</p>
                <p className="text-xl font-serif italic">Sublimer l'architecture par la lumière.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-60 bg-neutral-950 text-white text-center px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-7xl md:text-[10rem] font-serif mb-20 leading-[0.85] tracking-tighter">
              Bâtissons votre <br/><span className="italic text-amber-200">scénario</span>.
            </h2>
            <Link to="/contact" className="group relative inline-flex items-center justify-center px-28 py-9 overflow-hidden rounded-full bg-white text-black transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_20px_60px_rgba(251,191,36,0.15)]">
              <span className="relative z-10 text-xs font-black uppercase tracking-[0.4em]">Demander une étude</span>
              <div className="absolute inset-0 bg-amber-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
