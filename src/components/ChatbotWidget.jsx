import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Sparkles, Code2, FolderGit2, Briefcase, Mail, Cpu, ChevronRight } from 'lucide-react';

const AiMachineLogo = ({ className }) => (
  <img
    src="/chatbot_image.jpg"
    alt="Bhabasindhu AI"
    className={`rounded-full object-cover border border-sky-400/50 shadow-[0_0_10px_rgba(56,189,248,0.4)] ${className}`}
  />
);

// Formatter to remove raw asterisks, bold key terms, and render clean bullet points
const FormattedMessage = ({ content }) => {
  if (!content) return null;

  return (
    <div className="space-y-1.5 leading-relaxed">
      {content.split('\n').map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        const parts = trimmed.split(/(\*\*.*?\*\*)/g);

        return (
          <div key={lineIdx} className={trimmed.startsWith('•') || trimmed.startsWith('-') ? 'pl-2' : ''}>
            {parts.map((part, partIdx) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                const keyword = part.slice(2, -2);
                return (
                  <strong key={partIdx} className="font-semibold text-sky-300">
                    {keyword}
                  </strong>
                );
              }
              return <span key={partIdx}>{part}</span>;
            })}
          </div>
        );
      })}
    </div>
  );
};

// Helper to assign matching icons & emojis based on prompt intent
const getChipVisuals = (text) => {
  const lower = text.toLowerCase();
  if (lower.includes('project') || lower.includes('staynova') || lower.includes('meetify') || lower.includes('rankresume') || lower.includes('novacommerce')) {
    return { icon: <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />, emoji: '🚀' };
  }
  if (lower.includes('stack') || lower.includes('skill') || lower.includes('tech') || lower.includes('react') || lower.includes('node')) {
    return { icon: <Code2 className="w-3.5 h-3.5 text-sky-400" />, emoji: '⚡' };
  }
  if (lower.includes('experience') || lower.includes('intern') || lower.includes('work') || lower.includes('zaalima')) {
    return { icon: <Briefcase className="w-3.5 h-3.5 text-indigo-400" />, emoji: '💼' };
  }
  if (lower.includes('contact') || lower.includes('hire') || lower.includes('email') || lower.includes('touch')) {
    return { icon: <Mail className="w-3.5 h-3.5 text-emerald-400" />, emoji: '📫' };
  }
  return { icon: <Cpu className="w-3.5 h-3.5 text-violet-400" />, emoji: '✨' };
};

const INITIAL_SUGGESTIONS = [
  '⚡ Core Tech Stack',
  '🚀 Featured Projects',
  '💼 Work Experience',
  '📫 How to Contact?'
];

// Helper to extract suggestions tag from AI response
const parseAiResponse = (rawText) => {
  const match = rawText.match(/\[SUGGESTIONS:\s*(.*?)\]/i);
  if (match) {
    const suggestions = match[1]
      .split('|')
      .map((s) => s.trim())
      .filter(Boolean);
    const cleanText = rawText.replace(/\[SUGGESTIONS:\s*(.*?)\]/i, '').trim();
    return { cleanText, suggestions };
  }
  return { cleanText: rawText, suggestions: [] };
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [currentSuggestions, setCurrentSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        'System initialized. I am **Bhabasindhu AI**.\n• Pick a suggested inquiry below or ask anything about Bhabasindhu\'s projects and skills.'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleOpenChat = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  const handleSendMessage = async (queryText) => {
    const userMessage = (queryText || input).trim();
    if (!userMessage || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });

      const data = await response.json();
      const { cleanText, suggestions } = parseAiResponse(data.reply || '');

      setMessages((prev) => [...prev, { role: 'assistant', content: cleanText }]);

      if (suggestions && suggestions.length > 0) {
        setCurrentSuggestions(suggestions);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '• Connection timed out.\n• Direct queries can be submitted via the **Contact Form**.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(input);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans select-none pointer-events-none">
      <style>{`
        @keyframes pureBonfireGlow {
          0%, 100% {
            box-shadow: 0 0 20px 4px rgba(56, 189, 248, 0.45),
                        0 -8px 28px 6px rgba(14, 165, 233, 0.35);
          }
          50% {
            box-shadow: 0 0 28px 7px rgba(56, 189, 248, 0.65),
                        0 -14px 38px 9px rgba(14, 165, 233, 0.45);
          }
        }
        .bonfire-shadow-layer {
          will-change: box-shadow;
          animation: pureBonfireGlow 3s ease-in-out infinite alternate;
        }
        @keyframes matrixDrift {
          0% { transform: translateY(0) rotate(-18deg); }
          100% { transform: translateY(-40px) rotate(-18deg); }
        }
        .animate-watermark-matrix {
          will-change: transform;
          animation: matrixDrift 16s linear infinite;
        }
        /* Completely hide scrollbars across Chrome, Safari, Edge, and Firefox */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative w-0 h-0 flex items-end justify-end">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="trigger-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute bottom-0 right-0 flex flex-col items-end pointer-events-auto"
            >
              {/* Floating Welcome Bubble */}
              <AnimatePresence>
                {showPopup && (
                  <motion.div
                    key="popup-bubble"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.12 }}
                    style={{ width: '320px', minWidth: '320px', maxWidth: '320px' }}
                    className="mb-3 p-3.5 bg-slate-950/90 border border-sky-400/40 rounded-2xl backdrop-blur-md relative cursor-pointer group shadow-[0_0_20px_rgba(56,189,248,0.25)] flex-shrink-0"
                    onClick={handleOpenChat}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPopup(false);
                      }}
                      className="absolute top-2 right-2 text-sky-400/60 hover:text-sky-200 p-0.5 rounded-md hover:bg-sky-950/60 transition-colors"
                      aria-label="Dismiss message"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-sky-950/80 border border-sky-500/40 flex-shrink-0 mt-0.5">
                        <AiMachineLogo className="w-7 h-7" />
                      </div>
                      <div className="flex-1 pr-3">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="font-semibold text-xs text-sky-200 font-mono">Bhabasindhu AI</span>
                          <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
                        </div>
                        <p className="text-[12.5px] text-slate-200 leading-snug">
                          Looking for a quick technical summary or project breakdown?{' '}
                          <span className="text-sky-400 font-medium group-hover:underline">Ask me here →</span>
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-2 right-6 w-3.5 h-3.5 bg-slate-950/90 border-r border-b border-sky-400/40 transform rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Launcher Button */}
              <button
                onClick={handleOpenChat}
                style={{ width: '56px', height: '56px', minWidth: '56px', minHeight: '56px' }}
                className="relative bonfire-shadow-layer bg-slate-950/90 border border-sky-400/60 text-sky-400 rounded-full flex items-center justify-center backdrop-blur-sm group cursor-pointer transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
                aria-label="Open Bhabasindhu AI"
              >
                <span className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping pointer-events-none opacity-30" />
                <AiMachineLogo className="w-10 h-10 relative z-10" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="chat-window"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              style={{
                width: '385px',
                height: '540px',
                minWidth: '385px',
                minHeight: '540px',
                maxWidth: '385px',
                maxHeight: '540px'
              }}
              className="absolute bottom-0 right-0 pointer-events-auto rounded-3xl flex-shrink-0"
            >
              <div className="bonfire-shadow-layer w-full h-full bg-slate-950/95 border border-sky-400/40 text-sky-100 rounded-3xl flex flex-col overflow-hidden backdrop-blur-md relative">
                {/* Background Watermark Matrix */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
                  <div className="animate-watermark-matrix flex flex-col gap-5 whitespace-nowrap opacity-[0.05] text-sky-200">
                    {Array.from({ length: 9 }).map((_, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={`flex gap-6 font-black tracking-widest text-lg uppercase ${
                          rowIndex % 2 === 0 ? 'ml-8' : '-ml-8'
                        }`}
                      >
                        <span>BHABASINDHU AI</span>
                        <span>•</span>
                        <span>BHABASINDHU AI</span>
                        <span>•</span>
                        <span>BHABASINDHU AI</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Header */}
                <div className="relative z-10 bg-slate-900/80 px-5 py-3.5 flex items-center justify-between border-b border-sky-500/25 flex-shrink-0">
                  <div className="flex items-center space-x-3">
                    <div className="p-0.5 rounded-full bg-sky-950/80 border border-sky-500/40">
                      <AiMachineLogo className="w-7 h-7" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-sm tracking-wide text-sky-100 flex items-center gap-1.5">
                        Bhabasindhu AI
                        <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 font-mono">
                          CORE
                        </span>
                      </span>
                      <div className="flex items-center space-x-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                        </span>
                        <span className="text-[11px] text-sky-300/80 font-mono">NEURAL ACTIVE</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-sky-400/70 hover:text-sky-100 p-1.5 rounded-xl hover:bg-sky-900/40 transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Message Log */}
                <div className="relative z-10 flex-1 p-4 overflow-y-auto overflow-x-hidden space-y-3.5 text-sm hide-scrollbar">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-2.5 ${
                        msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}
                    >
                      {msg.role !== 'user' ? (
                        <div className="p-0.5 rounded-full bg-sky-950/70 border border-sky-500/30 mt-0.5 flex-shrink-0">
                          <AiMachineLogo className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="p-1.5 rounded-lg bg-sky-600/30 border border-sky-400/40 mt-0.5 flex-shrink-0">
                          <User className="w-3.5 h-3.5 text-sky-300" />
                        </div>
                      )}

                      <div
                        className={`max-w-[84%] px-4 py-2.5 rounded-2xl text-[13.5px] ${
                          msg.role === 'user'
                            ? 'bg-sky-600/85 text-white rounded-tr-none border border-sky-400/40 shadow-[0_0_12px_rgba(14,165,233,0.3)]'
                            : 'bg-slate-900/80 text-sky-50 rounded-tl-none border border-sky-500/30 shadow-[0_0_10px_rgba(0,0,0,0.2)]'
                        }`}
                      >
                        <FormattedMessage content={msg.content} />
                      </div>
                    </div>
                  ))}

                  {loading && (
                    <div className="flex items-center space-x-2.5 text-sky-300/80 text-xs italic ml-1 font-mono">
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                      <span>Computing neural weights...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Recommendations Strip: Positioned Above the Input Form */}
                <div className="relative z-10 bg-slate-950/80 backdrop-blur-md border-t border-sky-500/20 px-3 py-2 flex items-center gap-2 overflow-x-auto hide-scrollbar flex-shrink-0">
                  <div className="flex items-center gap-1 text-[11px] text-sky-400/70 font-mono pl-1 flex-shrink-0 select-none">
                    <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
                    <span>Suggestions:</span>
                  </div>
                  {currentSuggestions.map((suggestion, idx) => {
                    const { icon, emoji } = getChipVisuals(suggestion);
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(suggestion)}
                        disabled={loading}
                        className="group flex items-center gap-1.5 text-[11.5px] font-medium whitespace-nowrap px-3 py-1.5 rounded-xl bg-gradient-to-r from-sky-950/80 via-slate-900/90 to-indigo-950/80 hover:from-sky-900/90 hover:to-indigo-900/90 border border-sky-500/30 hover:border-sky-400 text-slate-200 hover:text-white transition-all active:scale-95 disabled:opacity-40 cursor-pointer shadow-[0_2px_10px_rgba(14,165,233,0.15)] flex-shrink-0"
                      >
                        <span className="text-xs group-hover:scale-110 transition-transform">{emoji}</span>
                        <span>{suggestion.replace(/^[^\w\s]+/, '').trim()}</span>
                        {icon}
                        <ChevronRight className="w-3 h-3 text-sky-400/50 group-hover:translate-x-0.5 group-hover:text-sky-300 transition-all" />
                      </button>
                    );
                  })}
                </div>

                {/* Chat Input Form */}
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 p-3 bg-slate-900/80 border-t border-sky-500/20 flex items-center space-x-2 flex-shrink-0"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Query projects, tech stack, or experience..."
                    className="flex-1 bg-slate-950/80 border border-sky-500/30 rounded-xl px-3.5 py-2.5 text-sm text-sky-100 placeholder-sky-400/40 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all font-mono"
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 disabled:opacity-40 text-slate-950 p-2.5 rounded-xl transition-all active:scale-95 flex-shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.5)] cursor-pointer"
                    aria-label="Transmit message"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}