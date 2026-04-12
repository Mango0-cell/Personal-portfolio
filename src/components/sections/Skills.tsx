'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import GradualBlur from '../GradualBlur';

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Node.js', color: '#339933' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GitHub', color: '#F0F6FC' },
  { name: 'WebSockets', color: '#6366F1' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Git', color: '#F05032' },
  { name: 'RTK Query', color: '#764ABC' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'i18next', color: '#26A69A' },
];

const duplicated = [...technologies, ...technologies, ...technologies];
const duplicatedReverse = [...technologies, ...technologies, ...technologies].reverse();

function TechPill({ tech }: { tech: { name: string; color: string } }) {
  return (
    <div
      className="group backdrop-blur-xl border rounded-2xl px-7 py-4 flex-shrink-0 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
      style={{ background: 'rgba(20, 20, 25, 0.5)', borderColor: 'rgba(255,255,255,0.08)', minWidth: '160px' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at center, ${tech.color}, transparent)` }}
      />
      <div className="relative z-10 flex items-center justify-center gap-3">
        <div
          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
        />
        <span className="font-medium text-sm whitespace-nowrap text-white/70">{tech.name}</span>
      </div>
    </div>
  );
}

export function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
          style={{ fontSize: '3rem', fontWeight: 700 }}
        >
          {t('sections.skills')}
        </motion.h2>
      </div>

      {/* Row 1 — scrolls left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative mb-4"
      >
        <GradualBlur
          target="parent"
          position="left"
          height="14rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={20}
        />
        <GradualBlur
          target="parent"
          position="right"
          height="14rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={20}
        />
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' } }}
          className="flex gap-4 flex-shrink-0"
        >
          {duplicated.map((tech, index) => (
            <TechPill key={`row1-${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </motion.div>

      {/* Row 2 — scrolls right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="relative"
      >
        <GradualBlur
          target="parent"
          position="left"
          height="14rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={20}
        />
        <GradualBlur
          target="parent"
          position="right"
          height="14rem"
          strength={3}
          divCount={6}
          curve="bezier"
          exponential
          opacity={1}
          zIndex={20}
        />
        <motion.div
          animate={{ x: [-1920, 0] }}
          transition={{ x: { repeat: Infinity, repeatType: 'loop', duration: 35, ease: 'linear' } }}
          className="flex gap-4 flex-shrink-0"
        >
          {duplicatedReverse.map((tech, index) => (
            <TechPill key={`row2-${tech.name}-${index}`} tech={tech} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
