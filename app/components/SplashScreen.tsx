"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

export default function SplashScreen({ onAnimationComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("sivi_splash_viewed");

    if (hasSeenSplash) {
      onAnimationComplete();
      setIsChecking(false);
      return;
    }

    // Show splash screen only if it hasn't been viewed yet
    setIsVisible(true);
    setIsChecking(false);

    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("sivi_splash_viewed", "true");
    }, 2200);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  // Block rendering until the storage parameters are confirmed
  if (isChecking) return null;

  return (
    <AnimatePresence onExitComplete={onAnimationComplete}>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ 
            duration: 0.85, 
            ease: [0.76, 0, 0.24, 1] 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FAF9F6] text-[#111111] select-none pointer-events-none"
        >
          <div className="flex flex-col items-center text-center px-6">
            <motion.h1
              initial={{ opacity: 0, letterSpacing: "0.15em", y: 10 }}
              animate={{ opacity: 1, letterSpacing: "0.25em", y: 0 }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="text-2xl sm:text-4xl md:text-5xl font-serif font-light tracking-[0.25em] uppercase text-[#111111] mb-5 leading-none"
            >
              SIVI THE COUTURIER
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="w-16 h-[1px] bg-[#111111] mb-5"
            />

            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.6, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase font-sans font-medium text-[#111111] pl-[0.4em]"
            >
              Handloom &bull; Couture &bull; Heritage
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}