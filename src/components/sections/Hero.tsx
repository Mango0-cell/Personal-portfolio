"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Download, X, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import DecryptedText from "../DecryptedText";

export function Hero() {
  const { t } = useTranslation();
  const [animKey, setAnimKey] = useState(0);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-16"
    >
      {/* Ambient glow blobs */}
      <div className="absolute -inset-x-32 -inset-y-24 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-20 w-96 h-96 rounded-full"
          style={{
            background: "var(--neon-blue)",
            filter: "blur(140px)",
            opacity: 0.12,
          }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-24 -left-20 w-96 h-96 rounded-full"
          style={{
            background: "var(--neon-purple)",
            filter: "blur(140px)",
            opacity: 0.12,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative px-4 md:px-8 lg:px-16">
        <div className="max-w-xl">
          {/* Small photo circle + available badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-4 mb-6"
          >
            {/* Small photo circle */}
            <div className="relative w-14 h-14 flex-shrink-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0%, var(--neon-blue) 40%, var(--neon-purple) 70%, transparent 100%)",
                  padding: "2px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              />
              <div className="absolute inset-0.5 rounded-full overflow-hidden">
                <img
                  src="/assets/photo-circle.jpeg"
                  alt="Eduardo Meneses"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Available to work badge */}
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 text-xs font-medium hover:bg-green-500/20 transition-all duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("hero.available")}
            </button>
          </motion.div>

          {/* Encrypt button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mb-4"
          >
            <button
              onClick={() => setAnimKey((k) => k + 1)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500/40 bg-blue-500/10 text-blue-400 text-xs font-medium hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300"
            >
              <Sparkles className="w-3.5 h-3.5" />
              encrypt
            </button>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-3 text-white text-left whitespace-nowrap"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            <DecryptedText
              key={`name-${animKey}`}
              text="Eduardo Meneses"
              animateOn="view"
              sequential
              revealDirection="start"
              speed={120}
              encryptedClassName="opacity-20 text-blue-400"
            />
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-6"
          >
            <h2
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-left"
              style={{
                fontSize: "clamp(1.3rem, 3vw, 2rem)",
                lineHeight: 1.2,
                fontWeight: 700,
                backgroundSize: "200% auto",
              }}
            >
              <DecryptedText
                key={`role-${animKey}`}
                text={t("hero.role")}
                animateOn="view"
                sequential
                revealDirection="center"
                speed={130}
                encryptedClassName="opacity-25"
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-white/50 mb-8 max-w-lg text-left"
            style={{ fontSize: "1rem" }}
          >
            {t("hero.bio")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToProjects}
              className="relative px-8 py-4 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 font-medium text-white"
              style={{
                background:
                  "linear-gradient(135deg, var(--neon-blue), var(--neon-purple))",
              }}
            >
              {t("hero.viewWork")}
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-blue-400/50 font-medium text-white/80 hover:text-white"
            >
              {t("hero.contactMe")}
            </button>
            <button
              onClick={() => setCvModalOpen(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-blue-500/40 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 font-medium"
            >
              <Download className="w-4 h-4" />
              CV
            </button>
          </motion.div>
        </div>
      </div>

      {/* CV language modal */}
      <AnimatePresence>
        {cvModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setCvModalOpen(false)}
            />

            {/* Modal */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                className="pointer-events-auto w-full max-w-sm rounded-2xl border p-8 relative"
                style={{
                  background: "rgba(14,14,18,0.97)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
              >
                {/* Close */}
                <button
                  onClick={() => setCvModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-white/30 hover:text-white/70 hover:bg-white/5 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {t("hero.cvModal.title")}
                  </h3>
                  <p className="text-sm text-white/40 mt-1">
                    {t("hero.cvModal.subtitle")}
                  </p>
                </div>

                {/* Options */}
                <div className="flex flex-col gap-3">
                  <a
                    href="/assets/Eduardo_Meneses_en.pdf"
                    download="Eduardo_Meneses_CV_EN.pdf"
                    onClick={() => setCvModalOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 group"
                  >
                    <span className="text-2xl">🇺🇸</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                        {t("hero.cvModal.english")}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/20 group-hover:text-blue-400 transition-colors" />
                  </a>

                  <a
                    href="/assets/Eduardo_Meneses.pdf"
                    download="Eduardo_Meneses_CV_ES.pdf"
                    onClick={() => setCvModalOpen(false)}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl border border-white/8 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all duration-200 group"
                  >
                    <span className="text-2xl">🇪🇸</span>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
                        {t("hero.cvModal.spanish")}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-white/20 group-hover:text-violet-400 transition-colors" />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
