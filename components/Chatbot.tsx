
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Zap, User, Loader2, ArrowUpRight } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useNavigate } from 'react-router-dom';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Bienvenue chez Martin Électricité. Je suis votre assistant virtuel. Je peux vous renseigner sur nos secteurs d\'intervention ou vous donner nos coordonnées. Pour toute autre demande, cliquez sur ce message pour nous contacter.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('VITE_GEMINI_API_KEY environment variable is not set');
      }
      
      const ai = new GoogleGenerativeAI(apiKey);
      const model = ai.getGenerativeModel({ 
        model: 'gemini-1.5-flash',
        systemInstruction: `Tu es l'assistant virtuel de Martin Électricité (01 45 67 89 10).
          RÈGLES STRICTES ET IMPÉRATIVES :
          1. Tu ne réponds QUE sur ces deux sujets : 
             - Nos activités/secteurs d'intervention : Architecture lumineuse, Domotique de luxe (KNX/Lutron), Éclairage d'art, Rénovation prestige, Sécurité/Vidéosurveillance, Éclairage extérieur.
             - Notre contact : Numéro de téléphone 01 45 67 89 10.
          2. Pour TOUT LE RESTE (devis précis, conseils techniques, recrutement, questions générales, etc.), tu dois OBLIGATOIREMENT répondre : "Cette demande nécessite un échange avec notre bureau d'études. Veuillez cliquer sur ce message pour accéder à notre page de contact."
          3. Sois extrêmement concis (maximum 2 phrases). N'invente rien. Ne fais pas de listes.
          4. Ton ton est sobre et luxueux.`,
      });
      const response = await model.generateContent(userMessage);

      const responseText = response.text() || "Veuillez cliquer ici pour contacter directement notre équipe.";
      setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Une erreur est survenue. Cliquez ici pour nous contacter via notre formulaire dédié." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAssistantMessageClick = () => {
    setIsOpen(false);
    navigate('/contact');
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[400px] max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-10rem)] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-neutral-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-neutral-900 text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-black fill-black" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest">Assistant Virtuel</h3>
                  <p className="text-[10px] text-amber-200 uppercase tracking-tighter">Martin Électricité</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex space-x-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-neutral-100' : 'bg-neutral-900 text-amber-400'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-neutral-500" /> : <Zap className="w-4 h-4" />}
                    </div>
                    <motion.div 
                      onClick={msg.role === 'assistant' ? handleAssistantMessageClick : undefined}
                      whileHover={msg.role === 'assistant' ? { scale: 1.02, backgroundColor: '#fafafa' } : {}}
                      className={`p-4 rounded-2xl text-sm leading-relaxed relative group ${
                        msg.role === 'user' 
                          ? 'bg-neutral-100 text-neutral-800' 
                          : 'bg-white shadow-sm border border-neutral-100 text-neutral-700 cursor-pointer'
                      }`}
                    >
                      {msg.content}
                      {msg.role === 'assistant' && (
                        <div className="mt-2 flex items-center space-x-1 text-[10px] font-bold uppercase tracking-tighter text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Nous contacter</span>
                          <ArrowUpRight className="w-3 h-3" />
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex space-x-3 items-center text-neutral-400">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-[10px] uppercase tracking-widest font-bold">Réflexion...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input - Using text-base (16px) to avoid mobile zoom on focus */}
            <form onSubmit={handleSendMessage} className="p-6 border-t border-neutral-100 bg-neutral-50/50">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Votre question..."
                  className="w-full bg-white border border-neutral-200 rounded-full py-4 pl-6 pr-14 focus:outline-none focus:border-neutral-900 transition-colors text-base font-light"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center hover:scale-110 disabled:opacity-50 disabled:hover:scale-100 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-neutral-900 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex items-center justify-center text-white relative group"
      >
        <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700"></div>
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
