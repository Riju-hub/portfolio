import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Send,
  User,
  Sparkles,
  Code2,
  FolderGit2,
  Briefcase,
  Mail,
  Cpu,
  ChevronRight,
  Mic,
  MicOff,
  PhoneOff
} from 'lucide-react';

const AiMachineLogo = ({ className }) => (
  <img
    src="/chatbot_image.jpg"
    alt="Bhabasindhu AI"
    className={`rounded-full object-cover border border-sky-400/50 shadow-[0_0_10px_rgba(56,189,248,0.4)] ${className}`}
  />
);

// ChatGPT Voice Waveform Pill Icon
const VoicePillIcon = ({ isActive, className = '' }) => (
  <div className={`flex items-center justify-center gap-[2.5px] h-4 ${className}`}>
    <span
      className={`w-[2.5px] bg-white rounded-full transition-all duration-300 ${
        isActive ? 'h-3 animate-[pulse_0.7s_infinite]' : 'h-2'
      }`}
    />
    <span
      className={`w-[2.5px] bg-white rounded-full transition-all duration-300 ${
        isActive ? 'h-4 animate-[pulse_1s_infinite]' : 'h-3.5'
      }`}
    />
    <span
      className={`w-[2.5px] bg-white rounded-full transition-all duration-300 ${
        isActive ? 'h-5 animate-[pulse_0.5s_infinite]' : 'h-2.5'
      }`}
    />
    <span
      className={`w-[2.5px] bg-white rounded-full transition-all duration-300 ${
        isActive ? 'h-3 animate-[pulse_0.9s_infinite]' : 'h-2'
      }`}
    />
  </div>
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

  // --- Voice Calling States ---
  const [isLiveCall, setIsLiveCall] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [callStatus, setCallStatus] = useState('');

  const messagesEndRef = useRef(null);
  const recognitionRef = useRef(null);
  const isLiveCallRef = useRef(false);

  useEffect(() => {
    isLiveCallRef.current = isLiveCall;
  }, [isLiveCall]);

  useEffect(() => {
    if (!isOpen || !window.visualViewport) return;

    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewportHeight(`${window.visualViewport.height}px`);
      } else {
        setViewportHeight('min(550px, calc(100dvh - 5.5rem))');
      }
    };

    window.visualViewport.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.visualViewport.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
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

  // Natural Speech Output
  const speakText = useCallback((text, onFinish) => {
    if (!window.speechSynthesis) {
      if (onFinish) onFinish();
      return;
    }

    window.speechSynthesis.cancel();

    const cleanToSpeak = text
      .replace(/[*#`_~•\-]/g, '')
      .replace(/\[SUGGESTIONS:.*?\]/gi, '')
      .trim();

    if (!cleanToSpeak) {
      if (onFinish) onFinish();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(cleanToSpeak);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;

    const voices = window.speechSynthesis.getVoices();
    const naturalVoice = voices.find(
      (v) =>
        v.lang.includes('en') &&
        (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha'))
    );
    if (naturalVoice) utterance.voice = naturalVoice;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setCallStatus('Speaking...');
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      if (onFinish) onFinish();
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      if (onFinish) onFinish();
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  // API Call Handler
  const handleSendMessage = useCallback(
    async (queryText, isVoice = false) => {
      const userMessage = (queryText || input).trim();
      if (!userMessage || loading) return;

      setInput('');
      setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
      setLoading(true);

      if (isVoice) {
        setCallStatus('Thinking...');
      }

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: userMessage, isVoiceMode: isVoice })
        });

        const data = await response.json();
        const { cleanText, suggestions } = parseAiResponse(data.reply || '');

        setMessages((prev) => [...prev, { role: 'assistant', content: cleanText }]);

        if (suggestions && suggestions.length > 0) {
          setCurrentSuggestions(suggestions);
        }

        if (isVoice) {
          speakText(cleanText, () => {
            if (isLiveCallRef.current) {
              startListeningSession();
            }
          });
        }
      } catch (err) {
        const fallbackText =
          '• Connection timed out.\n• Direct queries can be submitted via the **Contact Form**.';
        setMessages((prev) => [...prev, { role: 'assistant', content: fallbackText }]);

        if (isVoice) {
          speakText('Connection timed out. Feel free to use the contact form.', () => {
            if (isLiveCallRef.current) startListeningSession();
          });
        }
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input, loading, speakText]
  );

  // Microphone Speech Recognition
  const startListeningSession = useCallback(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Voice calling requires Google Chrome, Edge, or Safari.');
      return;
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.abort();
      } catch (e) {}
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setCallStatus('Listening...');
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setIsListening(false);
      if (isLiveCallRef.current) {
        handleSendMessage(transcript, true);
      } else {
        setInput(transcript);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
      if (isLiveCallRef.current) {
        setCallStatus('Tap mic to speak');
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }, [handleSendMessage]);

  const stopListeningSession = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  // Live Call Controls
  const handleStartLiveCall = () => {
    setIsLiveCall(true);
    isLiveCallRef.current = true;
    const greeting = "Hey there! I'm Bhabasindhu's AI assistant. Ask me anything about his projects, skills, or experience.";
    speakText(greeting, () => {
      if (isLiveCallRef.current) {
        startListeningSession();
      }
    });
  };

  const handleEndLiveCall = () => {
    setIsLiveCall(false);
    isLiveCallRef.current = false;
    stopListeningSession();
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setCallStatus('');
  };

  const handleOpenChat = () => {
    setShowPopup(false);
    setIsOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(input, false);
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

      {/* Main Chat Window */}
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
              
              {/* Background Watermark */}
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

              {/* Header with ChatGPT Voice Pill Trigger */}
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
                      <span className="text-[11px] text-sky-300/80 font-mono">
                        {isLiveCall ? 'VOICE CONNECTED' : 'NEURAL ACTIVE'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Header Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={isLiveCall ? handleEndLiveCall : handleStartLiveCall}
                    title={isLiveCall ? 'End Call' : 'Start Voice Mode'}
                    className={`group relative p-1.5 px-2.5 rounded-full flex items-center gap-1.5 transition-all duration-300 active:scale-95 cursor-pointer ${
                      isLiveCall
                        ? 'bg-rose-500/20 border border-rose-400/60 text-rose-300 shadow-[0_0_12px_rgba(244,63,94,0.4)]'
                        : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 text-white shadow-[0_0_12px_rgba(244,63,94,0.35)]'
                    }`}
                  >
                    <VoicePillIcon isActive={isLiveCall} />
                    <span className="text-[11px] font-mono font-medium tracking-tight">
                      {isLiveCall ? 'End' : 'Voice'}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (isLiveCall) handleEndLiveCall();
                      setIsOpen(false);
                    }}
                    className="relative group p-1.5 rounded-xl bg-gradient-to-tr from-pink-500/20 via-rose-500/25 to-fuchsia-500/20 hover:from-pink-500/35 hover:to-rose-500/40 border border-rose-400/40 hover:border-rose-400 text-rose-300 hover:text-rose-100 transition-all duration-300 active:scale-90 shadow-[0_0_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_16px_rgba(244,63,94,0.5)] cursor-pointer"
                    aria-label="Close chat"
                  >
                    <X className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90 text-rose-300 group-hover:text-white" />
                  </button>
                </div>
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
                      onClick={() => handleSendMessage(suggestion, false)}
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

              {/* Pinned Input Form */}
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="relative z-20 p-2.5 sm:p-3 pb-3 sm:pb-3 bg-slate-950/95 sm:bg-gradient-to-t sm:from-slate-950/70 sm:via-slate-900/35 sm:to-transparent border-t border-sky-500/20 flex items-center space-x-2 flex-shrink-0"
              >
                <div className="relative flex-1 group">
                  <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-500 opacity-25 group-hover:opacity-60 group-focus-within:opacity-100 transition-all duration-300 blur-[2px]" />

                  <div className="relative flex items-center bg-slate-950/90 sm:bg-slate-950/75 backdrop-blur-md rounded-xl border border-sky-400/30 group-focus-within:border-sky-300 transition-all duration-300 shadow-[inset_0_1px_4px_rgba(0,0,0,0.5)]">
                    <span className="pl-3.5 flex items-center justify-center select-none">
                      <Sparkles className="w-4 h-4 text-sky-400/70 group-focus-within:text-cyan-300 group-focus-within:scale-110 transition-all duration-300" />
                    </span>

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
                      placeholder={isListening ? 'Listening...' : 'Ask about projects, stack...'}
                      className="w-full bg-transparent px-3 py-2.5 sm:py-2.5 text-[16px] sm:text-sm text-sky-100 placeholder-sky-300/40 focus:outline-none font-mono"
                    />

                    {/* Quick Text-Dictation Mic Button */}
                    <button
                      type="button"
                      onClick={isListening ? stopListeningSession : startListeningSession}
                      className={`mr-1.5 p-1.5 rounded-lg border transition-all ${
                        isListening
                          ? 'bg-rose-500/20 border-rose-400 text-rose-300 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]'
                          : 'bg-sky-950/50 border-sky-400/30 text-sky-300 hover:text-white hover:border-sky-300'
                      }`}
                      title={isListening ? 'Stop listening' : 'Dictate with Voice'}
                    >
                      {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    </button>

                    {/* Pink ChatGPT-Style Waveform Button */}
                    <button
                      type="button"
                      onClick={handleStartLiveCall}
                      className="mr-2 w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-rose-500 hover:from-pink-400 hover:to-rose-400 flex items-center justify-center shadow-[0_0_10px_rgba(244,63,94,0.4)] transition-transform hover:scale-105 active:scale-95 cursor-pointer flex-shrink-0"
                      title="Start ChatGPT Voice Mode"
                    >
                      <VoicePillIcon isActive={false} />
                    </button>
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

              {/* Full-Screen ChatGPT Voice Mode Overlay */}
              <AnimatePresence>
                {isLiveCall && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 z-50 bg-slate-950/95 backdrop-blur-3xl flex flex-col items-center justify-between p-6 text-center"
                  >
                    {/* Top Status */}
                    <div className="pt-2 flex flex-col items-center">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-400/30 text-pink-300 text-xs font-mono">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSpeaking
                              ? 'bg-emerald-400 animate-ping'
                              : isListening
                              ? 'bg-pink-400 animate-pulse'
                              : 'bg-sky-400'
                          }`}
                        />
                        <span>VOICE MODE</span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-sky-100 tracking-wide">
                        Bhabasindhu AI
                      </h3>
                      <p className="text-xs text-sky-300/70 font-mono mt-0.5">
                        {callStatus || 'Listening...'}
                      </p>
                    </div>

                    {/* ChatGPT Liquid Orb / Waveform Graphic */}
                    <div className="relative flex items-center justify-center my-auto">
                      <div
                        className={`absolute w-48 h-48 rounded-full blur-3xl transition-all duration-700 ${
                          isSpeaking
                            ? 'bg-gradient-to-r from-emerald-500/30 via-teal-500/30 to-sky-500/30 scale-125 opacity-100'
                            : isListening
                            ? 'bg-gradient-to-r from-pink-500/30 via-rose-500/30 to-purple-500/30 scale-110 opacity-80 animate-pulse'
                            : 'bg-sky-500/20 scale-95 opacity-50'
                        }`}
                      />

                      <div
                        className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                          isSpeaking
                            ? 'bg-gradient-to-tr from-teal-400 via-sky-500 to-indigo-500 shadow-[0_0_35px_rgba(20,184,166,0.6)] scale-105'
                            : isListening
                            ? 'bg-gradient-to-tr from-rose-500 via-pink-500 to-indigo-600 shadow-[0_0_35px_rgba(244,63,94,0.6)] scale-100'
                            : 'bg-slate-900 border border-sky-400/40 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 h-10">
                          <span
                            className={`w-1.5 bg-white/90 rounded-full transition-all duration-200 ${
                              isSpeaking
                                ? 'h-8 animate-[pulse_0.4s_infinite]'
                                : isListening
                                ? 'h-6 animate-[pulse_0.8s_infinite]'
                                : 'h-2'
                            }`}
                          />
                          <span
                            className={`w-1.5 bg-white/90 rounded-full transition-all duration-200 ${
                              isSpeaking
                                ? 'h-10 animate-[pulse_0.6s_infinite]'
                                : isListening
                                ? 'h-8 animate-[pulse_0.5s_infinite]'
                                : 'h-3'
                            }`}
                          />
                          <span
                            className={`w-1.5 bg-white/90 rounded-full transition-all duration-200 ${
                              isSpeaking
                                ? 'h-6 animate-[pulse_0.3s_infinite]'
                                : isListening
                                ? 'h-10 animate-[pulse_0.7s_infinite]'
                                : 'h-2'
                            }`}
                          />
                          <span
                            className={`w-1.5 bg-white/90 rounded-full transition-all duration-200 ${
                              isSpeaking
                                ? 'h-9 animate-[pulse_0.5s_infinite]'
                                : isListening
                                ? 'h-5 animate-[pulse_0.6s_infinite]'
                                : 'h-2.5'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Control Dock */}
                    <div className="w-full flex items-center justify-center gap-5 pb-4">
                      <button
                        type="button"
                        onClick={isListening ? stopListeningSession : startListeningSession}
                        className={`p-4 rounded-full border transition-all duration-300 active:scale-95 cursor-pointer ${
                          isListening
                            ? 'bg-sky-500/20 border-sky-400 text-sky-200 shadow-[0_0_16px_rgba(56,189,248,0.4)]'
                            : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                        title={isListening ? 'Mute' : 'Unmute'}
                      >
                        {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5 text-rose-400" />}
                      </button>

                      <button
                        type="button"
                        onClick={handleEndLiveCall}
                        className="p-4 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-lg"
                        title="Close Voice Mode"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}