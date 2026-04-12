'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Download } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import DecryptedText from '../DecryptedText';

export function Hero() {
  const { t } = useTranslation();
  const [animKey, setAnimKey] = useState(0);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative pt-24 pb-16"
    >
      {/* Ambient glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 -right-1/4 w-96 h-96 rounded-full"
          style={{ background: 'var(--neon-blue)', filter: 'blur(140px)', opacity: 0.12 }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full"
          style={{ background: 'var(--neon-purple)', filter: 'blur(140px)', opacity: 0.12 }}
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
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0%, var(--neon-blue) 40%, var(--neon-purple) 70%, transparent 100%)',
                padding: '2px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
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
          <a
            href="mailto:eduardo.meneses@utp.edu.co"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 text-xs font-medium hover:bg-green-500/20 transition-all duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            {t('hero.available')}
          </a>
        </motion.div>

        {/* Encrypt button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-4"
        >
          <button
            onClick={() => setAnimKey(k => k + 1)}
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
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.05, fontWeight: 700 }}
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
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)', lineHeight: 1.2, fontWeight: 700, backgroundSize: '200% auto' }}
          >
            <DecryptedText
              key={`role-${animKey}`}
              text={t('hero.role')}
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
          style={{ fontSize: '1rem' }}
        >
          {t('hero.bio')}
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
            style={{ background: 'linear-gradient(135deg, var(--neon-blue), var(--neon-purple))' }}
          >
            {t('hero.viewWork')}
          </button>
          <a
            href="mailto:eduardo.meneses@utp.edu.co"
            className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 hover:border-blue-400/50 font-medium text-white/80 hover:text-white"
          >
            {t('hero.contactMe')}
          </a>
          <a
            href="/assets/Eduardo_Meneses.pdf"
            download="Eduardo_Meneses_CV.pdf"
            className="flex items-center justify-center gap-2 px-8 py-4 border border-blue-500/40 bg-blue-500/10 text-blue-400 rounded-xl hover:bg-blue-500/20 hover:border-blue-400/60 transition-all duration-300 font-medium"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
