import React, { useState, useEffect } from "react";
import profileImg from "../assets/bhabasindhu_image.png";

export default function GreetingModal() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const mountTimer = setTimeout(() => {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    }, 1000);

    return () => clearTimeout(mountTimer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setVisible(false);
    setTimeout(() => {
      setMounted(false);
      setIsClosing(false);
    }, 600);
  };

  if (!mounted) return null;

  return (
    <div
      onClick={handleClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer transition-opacity duration-1000 ease-out ${
        visible && !isClosing ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
    >
      {/* Outer Neon Glow Wrapper - stopPropagation prevents outside-click from triggering inside */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-sm rounded-[28px] p-[1.5px] cursor-default bg-gradient-to-tr from-cyan-400 via-indigo-500 to-pink-500 shadow-[0_0_60px_-15px_rgba(236,72,153,0.35)] transition-all duration-1000 cubic-bezier(0.16,1,0.3,1) ${
          visible && !isClosing
            ? "scale-100 translate-y-0 opacity-100"
            : "scale-90 translate-y-6 opacity-0"
        }`}
      >
        {/* Inner Pitch Black Container */}
        <div className="relative w-full rounded-[26.5px] bg-[#050505]/95 px-7 py-8 text-center overflow-hidden">
          {/* Ambient Lighting Spheres */}
          <div className="absolute -top-20 -left-20 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-pink-500/15 blur-3xl pointer-events-none animate-pulse" />

          {/* Close Cross Button */}
          <button
            onClick={handleClose}
            aria-label="Close greeting"
            className="absolute top-4 right-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors text-xs border border-white/10 cursor-pointer"
          >
            ✕
          </button>

          {/* Profile Image with Pulsing Neon Aura */}
          <div className="relative mx-auto mb-5 h-24 w-24">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-md opacity-75 animate-pulse" />
            <img
              src={profileImg}
              alt="Bhabasindhu Das"
              className="relative h-full w-full rounded-full object-cover border-2 border-black/80"
            />
          </div>

          {/* Glowing Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/25 bg-pink-500/10 px-3.5 py-1 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
            </span>
            <span className="text-[11px] font-semibold tracking-wider uppercase bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
              Portfolio • 2026
            </span>
          </div>

          {/* Professional Heading */}
          <h2 className="text-2xl font-bold tracking-tight text-white leading-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Bhabasindhu
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
            Full-Stack & Machine Learning Engineer
          </p>

          <p className="mt-3 text-sm leading-relaxed text-neutral-300/90 font-light">
            Welcome to my digital workspace. Explore my production architectures, interactive web platforms, and applied intelligence models.
          </p>
        </div>
      </div>
    </div>
  );
}