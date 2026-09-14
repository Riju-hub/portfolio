// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, Send, User, Sparkles, Code2, FolderGit2, Briefcase, Mail, Cpu, ChevronRight } from 'lucide-react';

// const AiMachineLogo = ({ className }) => (
//   <img
//     src="/chatbot_image.jpg"
//     alt="Bhabasindhu AI"
//     className={`rounded-full object-cover border border-sky-400/50 shadow-[0_0_10px_rgba(56,189,248,0.4)] ${className}`}
//   />
// );

// // Formatter to remove raw dots and replace with glowing modern icons & gradient bold text
// const FormattedMessage = ({ content }) => {
//   if (!content) return null;

//   return (
//     <div className="space-y-2 leading-relaxed">
//       {content.split('\n').map((line, lineIdx) => {
//         const trimmed = line.trim();
//         if (!trimmed) return null;

//         // Check if line starts with a bullet dot or dash
//         const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
//         // Strip out the raw bullet character so we can render our custom icon instead
//         const rawContent = isBullet ? trimmed.replace(/^[•\-]\s*/, '') : trimmed;

//         const parts = rawContent.split(/(\*\*.*?\*\*)/g);

//         return (
//           <div
//             key={lineIdx}
//             className={`flex items-start ${isBullet ? 'gap-2 pl-0.5' : ''}`}
//           >
//             {/* Modern Glowing Chevron Badge instead of old dot */}
//             {isBullet && (
//               <span className="mt-1 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-md bg-sky-500/20 border border-sky-400/40 text-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
//                 <ChevronRight className="w-2.5 h-2.5 stroke-[2.5]" />
//               </span>
//             )}

//             <div className="flex-1">
//               {parts.map((part, partIdx) => {
//                 if (part.startsWith('**') && part.endsWith('**')) {
//                   const keyword = part.slice(2, -2);
//                   return (
//                     <strong
//                       key={partIdx}
//                       className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200"
//                     >
//                       {keyword}
//                     </strong>
//                   );
//                 }
//                 return <span key={partIdx}>{part}</span>;
//               })}
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const getChipVisuals = (text) => {
//   const lower = text.toLowerCase();
//   if (
//     lower.includes('project') ||
//     lower.includes('staynova') ||
//     lower.includes('meetify') ||
//     lower.includes('rankresume') ||
//     lower.includes('novacommerce')
//   ) {
//     return { icon: <FolderGit2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 flex-shrink-0" />, emoji: '🚀' };
//   }
//   if (
//     lower.includes('stack') ||
//     lower.includes('skill') ||
//     lower.includes('tech') ||
//     lower.includes('react') ||
//     lower.includes('node')
//   ) {
//     return { icon: <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-400 flex-shrink-0" />, emoji: '⚡' };
//   }
//   if (
//     lower.includes('experience') ||
//     lower.includes('intern') ||
//     lower.includes('work') ||
//     lower.includes('zaalima')
//   ) {
//     return { icon: <Briefcase className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 flex-shrink-0" />, emoji: '💼' };
//   }
//   if (
//     lower.includes('contact') ||
//     lower.includes('hire') ||
//     lower.includes('email') ||
//     lower.includes('touch')
//   ) {
//     return { icon: <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 flex-shrink-0" />, emoji: '📫' };
//   }
//   return { icon: <Cpu className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />, emoji: '✨' };
// };

// const INITIAL_SUGGESTIONS = [
//   '⚡ Core Tech Stack',
//   '🚀 Featured Projects',
//   '💼 Work Experience',
//   '📫 How to Contact?'
// ];

// const parseAiResponse = (rawText) => {
//   const match = rawText.match(/\[SUGGESTIONS:\s*(.*?)\]/i);
//   if (match) {
//     const suggestions = match[1]
//       .split('|')
//       .map((s) => s.trim())
//       .filter(Boolean);
//     const cleanText = rawText.replace(/\[SUGGESTIONS:\s*(.*?)\]/i, '').trim();
//     return { cleanText, suggestions };
//   }
//   return { cleanText: rawText, suggestions: [] };
// };

// export default function ChatbotWidget() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);
//   const [currentSuggestions, setCurrentSuggestions] = useState(INITIAL_SUGGESTIONS);
//   const [messages, setMessages] = useState([
//     {
//       role: 'assistant',
//       content:
//         'System initialized. I am **Bhabasindhu AI**.\n• Pick a suggested inquiry below or ask anything about Bhabasindhu\'s projects and skills.'
//     }
//   ]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 900);
//     return () => clearTimeout(timer);
//   }, []);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     if (isOpen) scrollToBottom();
//   }, [messages, isOpen]);

//   const handleOpenChat = () => {
//     setShowPopup(false);
//     setIsOpen(true);
//   };

//   const handleSendMessage = async (queryText) => {
//     const userMessage = (queryText || input).trim();
//     if (!userMessage || loading) return;

//     setInput('');
//     setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
//     setLoading(true);

//     try {
//       const response = await fetch('/api/chat', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ message: userMessage })
//       });

//       const data = await response.json();
//       const { cleanText, suggestions } = parseAiResponse(data.reply || '');

//       setMessages((prev) => [...prev, { role: 'assistant', content: cleanText }]);

//       if (suggestions && suggestions.length > 0) {
//         setCurrentSuggestions(suggestions);
//       }
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: 'assistant',
//           content: '• Connection timed out.\n• Direct queries can be submitted via the **Contact Form**.'
//         }
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSendMessage(input);
//   };

//   return (
//     <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans select-none pointer-events-none">
//       <style>{`
//         @keyframes pureBonfireGlow {
//           0%, 100% {
//             box-shadow: 0 0 16px 3px rgba(56, 189, 248, 0.35),
//                         0 -6px 22px 5px rgba(14, 165, 233, 0.25);
//           }
//           50% {
//             box-shadow: 0 0 26px 6px rgba(56, 189, 248, 0.55),
//                         0 -10px 34px 8px rgba(14, 165, 233, 0.35);
//           }
//         }
//         .bonfire-shadow-layer {
//           will-change: box-shadow;
//           animation: pureBonfireGlow 3s ease-in-out infinite alternate;
//         }

//         /* Seamless Continuous Watermark Glide */
//         @keyframes smoothWatermarkLoop {
//           0% {
//             transform: translate3d(0, 0, 0) rotate(-16deg);
//           }
//           100% {
//             transform: translate3d(-180px, -240px, 0) rotate(-16deg);
//           }
//         }

//         .animate-watermark-smooth {
//           will-change: transform;
//           animation: smoothWatermarkLoop 18s linear infinite;
//         }

//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>

//       <div className="relative w-0 h-0 flex items-end justify-end">
//         <AnimatePresence mode="wait">
//           {!isOpen ? (
//             <motion.div
//               key="trigger-group"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.12 }}
//               className="absolute bottom-0 right-0 flex flex-col items-end pointer-events-auto"
//             >
//               {/* Floating Welcome Bubble */}
//               <AnimatePresence>
//                 {showPopup && (
//                   <motion.div
//                     key="popup-bubble"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.12 }}
//                     className="mb-3 w-[calc(100vw-2.5rem)] sm:w-80 max-w-[320px] p-3 sm:p-3.5 bg-slate-950/40 border border-sky-400/35 rounded-2xl backdrop-blur-md relative cursor-pointer group shadow-[0_0_20px_rgba(56,189,248,0.2)] flex-shrink-0"
//                     onClick={handleOpenChat}
//                   >
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setShowPopup(false);
//                       }}
//                       className="absolute top-2 right-2 text-rose-400/80 hover:text-rose-200 p-1 rounded-md hover:bg-rose-950/40 transition-colors"
//                       aria-label="Dismiss message"
//                     >
//                       <X className="w-3.5 h-3.5" />
//                     </button>

//                     <div className="flex items-start gap-2.5 sm:gap-3">
//                       <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/40 flex-shrink-0 mt-0.5">
//                         <AiMachineLogo className="w-6 h-6 sm:w-7 sm:h-7" />
//                       </div>
//                       <div className="flex-1 pr-3">
//                         <div className="flex items-center gap-1.5 mb-1">
//                           <span className="font-semibold text-xs text-sky-200 font-mono">Bhabasindhu AI</span>
//                           <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
//                         </div>
//                         <p className="text-[12px] sm:text-[12.5px] text-slate-100 leading-snug">
//                           Looking for a quick technical summary or project breakdown?{' '}
//                           <span className="text-sky-400 font-medium group-hover:underline">Ask me here →</span>
//                         </p>
//                       </div>
//                     </div>

//                     <div className="absolute -bottom-2 right-5 sm:right-6 w-3.5 h-3.5 bg-slate-950/40 border-r border-b border-sky-400/35 transform rotate-45" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* Launcher Button */}
//               <button
//                 onClick={handleOpenChat}
//                 className="relative bonfire-shadow-layer bg-slate-950/50 border border-sky-400/60 text-sky-400 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md group cursor-pointer transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
//                 aria-label="Open Bhabasindhu AI"
//               >
//                 <span className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping pointer-events-none opacity-30" />
//                 <AiMachineLogo className="w-8 h-8 sm:w-10 sm:h-10 relative z-10" />
//               </button>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="chat-window"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.12 }}
//               className="absolute bottom-0 right-0 pointer-events-auto rounded-2xl sm:rounded-3xl flex-shrink-0 w-[calc(100vw-2rem)] sm:w-[385px] max-w-[420px] h-[min(550px,calc(100dvh-5.5rem))] flex flex-col"
//             >
//               {/* Ultra Transparent Window Body */}
//               <div className="bonfire-shadow-layer w-full h-full bg-slate-950/25 border border-sky-400/30 text-sky-100 rounded-2xl sm:rounded-3xl flex flex-col overflow-hidden backdrop-blur-md relative">
                
//                 {/* Background Watermark Matrix with Red Heart Symbols */}
//                 <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
//                   <div className="animate-watermark-smooth flex flex-col gap-6 whitespace-nowrap opacity-20 text-sky-300">
//                     {Array.from({ length: 14 }).map((_, rowIndex) => (
//                       <div
//                         key={rowIndex}
//                         className={`flex items-center gap-6 font-black tracking-widest text-base sm:text-lg uppercase transition-opacity ${
//                           rowIndex % 2 === 0 ? 'ml-12' : '-ml-12'
//                         }`}
//                       >
//                         <span>BHABASINDHU AI</span>
//                         <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
//                         <span>BHABASINDHU AI</span>
//                         <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
//                         <span>BHABASINDHU AI</span>
//                         <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
//                         <span>BHABASINDHU AI</span>
//                         <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Header */}
//                 <div className="relative z-10 bg-slate-900/20 px-4 py-3 sm:px-5 sm:py-3.5 flex items-center justify-between border-b border-sky-500/15 flex-shrink-0">
//                   <div className="flex items-center space-x-2.5 sm:space-x-3">
//                     <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/40">
//                       <AiMachineLogo className="w-6 h-6 sm:w-7 sm:h-7" />
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-bold text-xs sm:text-sm tracking-wide text-sky-100 flex items-center gap-1.5">
//                         Bhabasindhu AI
//                         <span className="text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 font-mono">
//                           CORE
//                         </span>
//                       </span>
//                       <div className="flex items-center space-x-1.5">
//                         <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
//                           <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
//                           <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
//                         </span>
//                         <span className="text-[10px] sm:text-[11px] text-sky-300/80 font-mono">NEURAL ACTIVE</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Attractive Glowing Rose/Pink Close Button */}
//                   <button
//                     onClick={() => setIsOpen(false)}
//                     className="relative group p-1.5 rounded-xl bg-gradient-to-tr from-pink-500/20 via-rose-500/25 to-fuchsia-500/20 hover:from-pink-500/35 hover:to-rose-500/40 border border-rose-400/40 hover:border-rose-400 text-rose-300 hover:text-rose-100 transition-all duration-300 active:scale-90 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_16px_rgba(244,63,94,0.5)] cursor-pointer"
//                     aria-label="Close chat"
//                   >
//                     <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90 text-rose-300 group-hover:text-white" />
//                   </button>
//                 </div>

//                 {/* Message Log */}
//                 <div className="relative z-10 flex-1 p-3.5 sm:p-4 overflow-y-auto overflow-x-hidden space-y-3 text-xs sm:text-sm hide-scrollbar">
//                   {messages.map((msg, index) => (
//                     <div
//                       key={index}
//                       className={`flex items-start space-x-2 sm:space-x-2.5 ${
//                         msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
//                       }`}
//                     >
//                       {msg.role !== 'user' ? (
//                         <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/30 mt-0.5 flex-shrink-0">
//                           <AiMachineLogo className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </div>
//                       ) : (
//                         <div className="p-1 sm:p-1.5 rounded-lg bg-sky-600/30 border border-sky-400/40 mt-0.5 flex-shrink-0">
//                           <User className="w-3.5 h-3.5 text-sky-300" />
//                         </div>
//                       )}

//                       <div
//                         className={`max-w-[85%] px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-[12.5px] sm:text-[13.5px] backdrop-blur-sm ${
//                           msg.role === 'user'
//                             ? 'bg-sky-600/60 text-white rounded-tr-none border border-sky-400/40 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
//                             : 'bg-slate-950/40 text-sky-50 rounded-tl-none border border-sky-500/25 shadow-[0_0_10px_rgba(0,0,0,0.2)]'
//                         }`}
//                       >
//                         <FormattedMessage content={msg.content} />
//                       </div>
//                     </div>
//                   ))}

//                   {loading && (
//                     <div className="flex items-center space-x-2 text-sky-300/80 text-[11px] sm:text-xs italic ml-1 font-mono">
//                       <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 animate-ping" />
//                       <span>Computing neural weights...</span>
//                     </div>
//                   )}
//                   <div ref={messagesEndRef} />
//                 </div>

//                 {/* Recommendations Strip: Sheer Frosted Bar */}
//                 <div className="relative z-10 bg-slate-950/20 border-t border-sky-500/15 px-2.5 py-2 sm:px-3 flex items-center gap-1.5 sm:gap-2 overflow-x-auto hide-scrollbar flex-shrink-0">
//                   <div className="flex items-center gap-1 text-[10.5px] sm:text-[11px] text-sky-400/70 font-mono pl-1 flex-shrink-0 select-none">
//                     <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
//                     <span className="hidden xs:inline">Suggestions:</span>
//                   </div>
//                   {currentSuggestions.map((suggestion, idx) => {
//                     const { icon, emoji } = getChipVisuals(suggestion);
//                     return (
//                       <button
//                         key={idx}
//                         onClick={() => handleSendMessage(suggestion)}
//                         disabled={loading}
//                         className="group flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-[11.5px] font-medium whitespace-nowrap px-2.5 py-1.5 sm:px-3 rounded-lg sm:rounded-xl bg-sky-950/30 hover:bg-sky-900/50 border border-sky-400/25 hover:border-sky-400/60 text-slate-100 hover:text-white transition-all active:scale-95 disabled:opacity-40 cursor-pointer shadow-[0_2px_8px_rgba(14,165,233,0.1)] flex-shrink-0"
//                       >
//                         <span className="text-xs group-hover:scale-110 transition-transform">{emoji}</span>
//                         <span>{suggestion.replace(/^[^\w\s]+/, '').trim()}</span>
//                         {icon}
//                         <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-400/50 group-hover:translate-x-0.5 group-hover:text-sky-300 transition-all" />
//                       </button>
//                     );
//                   })}
//                 </div>

//                 {/* Vibrant & Engaging Input Form */}
//                 <form
//                   onSubmit={handleSubmit}
//                   className="relative z-10 p-2.5 sm:p-3 bg-gradient-to-t from-slate-950/70 via-slate-900/35 to-transparent border-t border-sky-500/20 flex items-center space-x-2 flex-shrink-0"
//                 >
//                   {/* Gradient Border Capsule */}
//                   <div className="relative flex-1 group">
//                     <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 opacity-25 group-hover:opacity-60 group-focus-within:opacity-100 transition-all duration-300 blur-[2px]" />

//                     <div className="relative flex items-center bg-slate-950/75 backdrop-blur-md rounded-xl border border-sky-400/30 group-focus-within:border-sky-300 transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
//                       {/* Pulsing AI Sparkle Icon */}
//                       <span className="pl-3 flex items-center justify-center select-none">
//                         <Sparkles className="w-3.5 h-3.5 text-sky-400/70 group-focus-within:text-cyan-300 group-focus-within:scale-110 group-focus-within:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300" />
//                       </span>

//                       <input
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         placeholder="Ask anything about projects or skills..."
//                         className="w-full bg-transparent px-2.5 py-2 sm:py-2.5 text-xs sm:text-sm text-sky-100 placeholder-sky-300/40 focus:outline-none font-mono selection:bg-cyan-500/30 selection:text-white"
//                       />
//                     </div>
//                   </div>

//                   {/* Radiant Transmit Button */}
//                   <button
//                     type="submit"
//                     disabled={loading || !input.trim()}
//                     className="relative group p-2 sm:p-2.5 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer overflow-hidden flex-shrink-0"
//                     aria-label="Transmit message"
//                   >
//                     <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-xl blur-[3px] group-hover:blur-md opacity-80 group-hover:opacity-100 transition-all duration-300" />
//                     <span className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 font-bold p-1 rounded-lg shadow-sm">
//                       <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </span>
//                   </button>
//                 </form>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </div>
//   );
// }









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

const FormattedMessage = ({ content }) => {
  if (!content) return null;

  return (
    <div className="space-y-2 leading-relaxed">
      {content.split('\n').map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('-');
        const rawContent = isBullet ? trimmed.replace(/^[•\-]\s*/, '') : trimmed;
        const parts = rawContent.split(/(\*\*.*?\*\*)/g);

        return (
          <div
            key={lineIdx}
            className={`flex items-start ${isBullet ? 'gap-2 pl-0.5' : ''}`}
          >
            {isBullet && (
              <span className="mt-1 flex-shrink-0 flex items-center justify-center w-4 h-4 rounded-md bg-sky-500/20 border border-sky-400/40 text-cyan-300 shadow-[0_0_8px_rgba(56,189,248,0.4)]">
                <ChevronRight className="w-2.5 h-2.5 stroke-[2.5]" />
              </span>
            )}

            <div className="flex-1">
              {parts.map((part, partIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  const keyword = part.slice(2, -2);
                  return (
                    <strong
                      key={partIdx}
                      className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-sky-200"
                    >
                      {keyword}
                    </strong>
                  );
                }
                return <span key={partIdx}>{part}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const getChipVisuals = (text) => {
  const lower = text.toLowerCase();
  if (
    lower.includes('project') ||
    lower.includes('staynova') ||
    lower.includes('meetify') ||
    lower.includes('rankresume') ||
    lower.includes('novacommerce')
  ) {
    return { icon: <FolderGit2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />, emoji: '🚀' };
  }
  if (
    lower.includes('stack') ||
    lower.includes('skill') ||
    lower.includes('tech') ||
    lower.includes('react') ||
    lower.includes('node')
  ) {
    return { icon: <Code2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />, emoji: '⚡' };
  }
  if (
    lower.includes('experience') ||
    lower.includes('intern') ||
    lower.includes('work') ||
    lower.includes('zaalima')
  ) {
    return { icon: <Briefcase className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0" />, emoji: '💼' };
  }
  if (
    lower.includes('contact') ||
    lower.includes('hire') ||
    lower.includes('email') ||
    lower.includes('touch')
  ) {
    return { icon: <Mail className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />, emoji: '📫' };
  }
  return { icon: <Cpu className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />, emoji: '✨' };
};

const INITIAL_SUGGESTIONS = [
  '⚡ Core Tech Stack',
  '🚀 Featured Projects',
  '💼 Work Experience',
  '📫 How to Contact?'
];

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
  const [viewportHeight, setViewportHeight] = useState('100dvh');
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

  // Bind height strictly to Mobile Chrome Visual Viewport when keyboard toggles
  useEffect(() => {
    if (!window.visualViewport) return;

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportHeight(`${window.visualViewport.height}px`);
        window.scrollTo(0, 0);
      } else {
        setViewportHeight('min(550px, calc(100dvh - 5.5rem))');
      }
    };

    window.visualViewport.addEventListener('resize', handleResize);
    window.visualViewport.addEventListener('scroll', handleResize);
    handleResize();

    return () => {
      window.visualViewport.removeEventListener('resize', handleResize);
      window.visualViewport.removeEventListener('scroll', handleResize);
    };
  }, []);

  // Lock outer page scrolling on mobile while chatbot is open
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 900);
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
    <div className="font-sans select-none">
      <style>{`
        @keyframes pureBonfireGlow {
          0%, 100% {
            box-shadow: 0 0 16px 3px rgba(56, 189, 248, 0.35),
                        0 -6px 22px 5px rgba(14, 165, 233, 0.25);
          }
          50% {
            box-shadow: 0 0 26px 6px rgba(56, 189, 248, 0.55),
                        0 -10px 34px 8px rgba(14, 165, 233, 0.35);
          }
        }
        .bonfire-shadow-layer {
          will-change: box-shadow;
          animation: pureBonfireGlow 3s ease-in-out infinite alternate;
        }

        @keyframes smoothWatermarkLoop {
          0% { transform: translate3d(0, 0, 0) rotate(-16deg); }
          100% { transform: translate3d(-180px, -240px, 0) rotate(-16deg); }
        }

        .animate-watermark-smooth {
          will-change: transform;
          animation: smoothWatermarkLoop 18s linear infinite;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Floating Trigger Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 pointer-events-none">
        <div className="relative w-0 h-0 flex items-end justify-end">
          <AnimatePresence mode="wait">
            {!isOpen && (
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
                      className="mb-3 w-[calc(100vw-2.5rem)] sm:w-80 max-w-[320px] p-3 sm:p-3.5 bg-slate-950/80 sm:bg-slate-950/40 border border-sky-400/35 rounded-2xl backdrop-blur-md relative cursor-pointer group shadow-[0_0_20px_rgba(56,189,248,0.2)] flex-shrink-0"
                      onClick={handleOpenChat}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowPopup(false);
                        }}
                        className="absolute top-2 right-2 text-rose-400/80 hover:text-rose-200 p-1 rounded-md hover:bg-rose-950/40 transition-colors"
                        aria-label="Dismiss message"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-start gap-2.5 sm:gap-3">
                        <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/40 flex-shrink-0 mt-0.5">
                          <AiMachineLogo className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>
                        <div className="flex-1 pr-3">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="font-semibold text-xs text-sky-200 font-mono">Bhabasindhu AI</span>
                            <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
                          </div>
                          <p className="text-[12px] sm:text-[12.5px] text-slate-100 leading-snug">
                            Looking for a quick technical summary or project breakdown?{' '}
                            <span className="text-sky-400 font-medium group-hover:underline">Ask me here →</span>
                          </p>
                        </div>
                      </div>

                      <div className="absolute -bottom-2 right-5 sm:right-6 w-3.5 h-3.5 bg-slate-950/80 sm:bg-slate-950/40 border-r border-b border-sky-400/35 transform rotate-45" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Floating Trigger Button */}
                <button
                  onClick={handleOpenChat}
                  className="relative bonfire-shadow-layer bg-slate-950/80 sm:bg-slate-950/50 border border-sky-400/60 text-sky-400 w-13 h-13 sm:w-14 sm:h-14 rounded-full flex items-center justify-center backdrop-blur-md group cursor-pointer transition-transform hover:scale-105 active:scale-95 flex-shrink-0"
                  aria-label="Open Bhabasindhu AI"
                >
                  <span className="absolute inset-0 rounded-full border border-sky-400/40 animate-ping pointer-events-none opacity-30" />
                  <AiMachineLogo className="w-9 h-9 sm:w-10 sm:h-10 relative z-10" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Screen-Bounded Chat Interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.15 }}
            style={{ height: viewportHeight }}
            className="fixed inset-x-0 top-0 sm:inset-auto sm:bottom-6 sm:right-6 w-full sm:w-[385px] sm:max-w-[420px] flex flex-col pointer-events-auto z-[9999]"
          >
            <div className="bonfire-shadow-layer w-full h-full bg-slate-950/95 sm:bg-slate-950/30 border-0 sm:border border-sky-400/30 text-sky-100 rounded-none sm:rounded-3xl flex flex-col overflow-hidden backdrop-blur-2xl relative overscroll-contain">
              
              {/* Animated Background Watermark */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0 flex items-center justify-center">
                <div className="animate-watermark-smooth flex flex-col gap-6 whitespace-nowrap opacity-15 sm:opacity-20 text-sky-300">
                  {Array.from({ length: 14 }).map((_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`flex items-center gap-6 font-black tracking-widest text-base sm:text-lg uppercase transition-opacity ${
                        rowIndex % 2 === 0 ? 'ml-12' : '-ml-12'
                      }`}
                    >
                      <span>BHABASINDHU AI</span>
                      <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
                      <span>BHABASINDHU AI</span>
                      <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
                      <span>BHABASINDHU AI</span>
                      <span className="text-red-500 font-normal drop-shadow-[0_0_6px_rgba(239,68,68,0.8)] text-sm">❤️</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fixed Pinned Header */}
              <div className="relative z-20 bg-slate-900/90 sm:bg-slate-900/30 px-4 py-3 sm:py-3.5 flex items-center justify-between border-b border-sky-500/20 backdrop-blur-md flex-shrink-0">
                <div className="flex items-center space-x-2.5 sm:space-x-3">
                  <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/40">
                    <AiMachineLogo className="w-7 h-7 sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm tracking-wide text-sky-100 flex items-center gap-1.5">
                      Bhabasindhu AI
                      <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40 font-mono">
                        CORE
                      </span>
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-sky-400 shadow-[0_0_6px_#38bdf8]" />
                      </span>
                      <span className="text-[11px] text-sky-300/80 font-mono">NEURAL ACTIVE</span>
                    </div>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="relative group p-1.5 rounded-xl bg-gradient-to-tr from-pink-500/20 via-rose-500/25 to-fuchsia-500/20 hover:from-pink-500/35 hover:to-rose-500/40 border border-rose-400/40 hover:border-rose-400 text-rose-300 hover:text-rose-100 transition-all duration-300 active:scale-90 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_16px_rgba(244,63,94,0.5)] cursor-pointer"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-rose-300 group-hover:text-white" />
                </button>
              </div>

              {/* Scrollable Message Feed */}
              <div className="relative z-10 flex-1 p-4 overflow-y-auto overflow-x-hidden space-y-3.5 text-sm hide-scrollbar overscroll-contain">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2.5 ${
                      msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    {msg.role !== 'user' ? (
                      <div className="p-0.5 rounded-full bg-sky-950/60 border border-sky-500/30 mt-0.5 flex-shrink-0">
                        <AiMachineLogo className="w-5 h-5" />
                      </div>
                    ) : (
                      <div className="p-1.5 rounded-lg bg-sky-600/30 border border-sky-400/40 mt-0.5 flex-shrink-0">
                        <User className="w-3.5 h-3.5 text-sky-300" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-[13.5px] backdrop-blur-sm ${
                        msg.role === 'user'
                          ? 'bg-sky-600/75 sm:bg-sky-600/60 text-white rounded-tr-none border border-sky-400/40 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
                          : 'bg-slate-900/85 sm:bg-slate-950/40 text-sky-50 rounded-tl-none border border-sky-500/25 shadow-[0_0_10px_rgba(0,0,0,0.2)]'
                      }`}
                    >
                      <FormattedMessage content={msg.content} />
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex items-center space-x-2 text-sky-300/80 text-xs italic ml-1 font-mono">
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    <span>Computing neural weights...</span>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggestions Strip */}
              <div className="relative z-10 bg-slate-950/90 sm:bg-slate-950/20 border-t border-sky-500/15 px-3 py-2 flex items-center gap-2 overflow-x-auto hide-scrollbar flex-shrink-0">
                <div className="flex items-center gap-1 text-[11px] text-sky-400/70 font-mono pl-1 flex-shrink-0 select-none">
                  <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
                  <span className="hidden xs:inline">Suggestions:</span>
                </div>
                {currentSuggestions.map((suggestion, idx) => {
                  const { icon, emoji } = getChipVisuals(suggestion);
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(suggestion)}
                      disabled={loading}
                      className="group flex items-center gap-1.5 text-[12px] sm:text-[11.5px] font-medium whitespace-nowrap px-3 py-1.5 rounded-xl bg-sky-950/60 sm:bg-sky-950/30 hover:bg-sky-900/60 border border-sky-400/30 hover:border-sky-400/60 text-slate-100 hover:text-white transition-all active:scale-95 disabled:opacity-40 cursor-pointer shadow-[0_2px_8px_rgba(14,165,233,0.1)] flex-shrink-0"
                    >
                      <span className="text-xs group-hover:scale-110 transition-transform">{emoji}</span>
                      <span>{suggestion.replace(/^[^\w\s]+/, '').trim()}</span>
                      {icon}
                      <ChevronRight className="w-3 h-3 text-sky-400/50 group-hover:translate-x-0.5 group-hover:text-sky-300 transition-all" />
                    </button>
                  );
                })}
              </div>

              {/* Pinned Input Form with Disabled Chrome Autofill */}
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="relative z-20 p-2.5 sm:p-3 pb-3 sm:pb-3 bg-slate-950/95 sm:bg-gradient-to-t sm:from-slate-950/70 sm:via-slate-900/35 sm:to-transparent border-t border-sky-500/20 flex items-center space-x-2 flex-shrink-0"
              >
                <div className="relative flex-1 group">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 opacity-25 group-hover:opacity-60 group-focus-within:opacity-100 transition-all duration-300 blur-[2px]" />

                  <div className="relative flex items-center bg-slate-950/90 sm:bg-slate-950/75 backdrop-blur-md rounded-xl border border-sky-400/30 group-focus-within:border-sky-300 transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
                    <span className="pl-3.5 flex items-center justify-center select-none">
                      <Sparkles className="w-4 h-4 text-sky-400/70 group-focus-within:text-cyan-300 group-focus-within:scale-110 group-focus-within:drop-shadow-[0_0_8px_rgba(56,189,248,0.8)] transition-all duration-300" />
                    </span>

                    {/* Disabled browser autofills (passwords, address, cards) + safe text-16px zoom prevention */}
                    <input
                      type="text"
                      name="chat_query_field"
                      id="chat_query_field"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck={false}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask about projects, stack..."
                      className="w-full bg-transparent px-3 py-2.5 sm:py-2.5 text-[16px] sm:text-sm text-sky-100 placeholder-sky-300/40 focus:outline-none font-mono selection:bg-cyan-500/30 selection:text-white"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="relative group w-11 h-11 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 disabled:opacity-30 disabled:pointer-events-none cursor-pointer overflow-hidden flex-shrink-0"
                  aria-label="Transmit message"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 rounded-xl blur-[3px] group-hover:blur-md opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  <span className="relative z-10 w-full h-full flex items-center justify-center bg-gradient-to-tr from-cyan-400 via-sky-400 to-indigo-500 text-slate-950 font-bold rounded-lg shadow-sm">
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>
              </form>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}