import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Coffee, Bot } from 'lucide-react';
import { ChatMessage, MenuItem } from '../types';
import { MENU_ITEMS } from '../data/coffeeData';

interface LiveChatWidgetProps {
  onSelectItem: (item: MenuItem) => void;
}

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({ onSelectItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'c1',
      sender: 'assistant',
      text: "Bonjour! I am Barista Jean, your virtual coffee sommelier. Looking for a bold roast, a smooth velvet latte, or a sweet pastry pairing today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    'Recommend a sweet latte',
    'Best single-origin pour over',
    'What pastries pair with espresso?',
    'Do you have oat milk?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    // Call server API or smart concierge matcher
    try {
      const res = await fetch('/api/barista', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text })
      });

      if (res.ok) {
        const data = await res.json();
        const recItem = data.item ? MENU_ITEMS.find((i) => i.id === data.item.id) : undefined;

        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            sender: 'assistant',
            text: data.reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            recommendationItem: recItem
          }
        ]);
      } else {
        throw new Error('Fallback logic');
      }
    } catch {
      // Local smart response fallback
      setTimeout(() => {
        let reply = "I recommend trying our signature Bourbon Barrel Smoked Latte! It features aged oak barrel syrup and micro-foamed oat milk.";
        let item: MenuItem | undefined = MENU_ITEMS[0];

        const lower = text.toLowerCase();
        if (lower.includes('pour over') || lower.includes('black') || lower.includes('single-origin')) {
          reply = "For pure coffee aroma and floral clarity, our Panama Geisha Pour Over is unmatched.";
          item = MENU_ITEMS[3];
        } else if (lower.includes('pastry') || lower.includes('sweet') || lower.includes('dessert')) {
          reply = "Our Pistachio Mille-Feuille is baked fresh daily by Chef Camille and pairs divine with espresso.";
          item = MENU_ITEMS[9];
        } else if (lower.includes('cappuccino') || lower.includes('gold')) {
          reply = "Our 24k Gold Leaf Velvet Cappuccino is our most luxurious espresso creation!";
          item = MENU_ITEMS[1];
        }

        setMessages((prev) => [
          ...prev,
          {
            id: `a-${Date.now()}`,
            sender: 'assistant',
            text: reply,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            recommendationItem: item
          }
        ]);
      }, 700);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-wider shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4 text-black animate-spin" />
          <span>Barista Jean</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      )}

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-80 sm:w-96 glass-card rounded-3xl overflow-hidden border border-[#C89B3C]/40 shadow-2xl flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-[#3B2416] to-[#0F0F0F] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#C89B3C]/20 border border-[#C89B3C] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm text-white font-semibold flex items-center gap-1.5">
                    Barista Jean
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </h4>
                  <p className="font-sans text-[10px] text-[#D9C3A5]">AI Coffee Sommelier</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-white hover:text-[#C89B3C]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 font-sans text-xs">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-2xl ${
                      m.sender === 'user'
                        ? 'bg-[#C89B3C] text-black font-medium rounded-tr-none'
                        : 'glass-panel text-white border border-white/10 rounded-tl-none'
                    }`}
                  >
                    <p className="leading-relaxed font-light">{m.text}</p>

                    {/* Recommendation Card */}
                    {m.recommendationItem && (
                      <div
                        onClick={() => {
                          onSelectItem(m.recommendationItem!);
                          setIsOpen(false);
                        }}
                        className="mt-3 p-2 bg-[#1A1A1A] rounded-xl border border-[#C89B3C]/40 flex items-center gap-2 cursor-pointer hover:border-[#C89B3C]"
                      >
                        <img
                          src={m.recommendationItem.image}
                          alt={m.recommendationItem.name}
                          referrerPolicy="no-referrer"
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-serif text-[11px] text-white font-semibold truncate">
                            {m.recommendationItem.name}
                          </p>
                          <p className="text-[10px] text-[#C89B3C]">
                            ${m.recommendationItem.price.toFixed(2)} • View
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <span className="text-[9px] text-[#B5B5B5]/60 mt-1 px-1">{m.timestamp}</span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1 text-[#C89B3C] text-xs font-serif italic">
                  <span>Barista Jean is brewing a response...</span>
                </div>
              )}
            </div>

            {/* Quick Prompts */}
            <div className="px-3 py-2 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => handleSendMessage(p)}
                  className="px-2.5 py-1 rounded-full bg-[#1A1A1A] text-[10px] text-[#D9C3A5] border border-white/10 hover:border-[#C89B3C] whitespace-nowrap"
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="p-3 bg-[#121212] border-t border-white/10 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Ask for coffee advice..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-3 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-xl bg-[#C89B3C] text-black flex items-center justify-center hover:scale-105"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
