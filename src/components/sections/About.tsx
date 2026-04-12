'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Award, MapPin, Lightbulb, Zap, Globe } from 'lucide-react';

export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const cardBase =
    'cursor-default backdrop-blur-xl border border-white/[0.08] rounded-2xl group hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden';
  const cardBg = { background: 'rgba(20, 20, 25, 0.5)' };

  return (
    <section id="about" ref={ref} className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center text-white"
          style={{ fontSize: '3rem', fontWeight: 700 }}
        >
          {t('sections.about')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* Bio — wide card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`md:col-span-8 p-8 ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/60 leading-relaxed mb-4" style={{ fontSize: '1.125rem' }}>
                {t('about.paragraph1')}
              </p>
              <p className="text-white/40 leading-relaxed text-sm">
                {t('about.paragraph2')}
              </p>
            </div>
          </motion.div>

          {/* Projects stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`md:col-span-4 p-8 flex flex-col justify-center items-center text-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <Code2 className="w-10 h-10 mb-3 text-blue-400 mx-auto" />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">
                {t('about.stats.projects.value')}
              </div>
              <div className="text-sm text-white/50">{t('about.stats.projects.label')}</div>
            </div>
          </motion.div>

          {/* Learning stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className={`md:col-span-4 p-8 flex flex-col justify-center items-center text-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <Award className="w-10 h-10 mb-3 text-violet-400 mx-auto" />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">
                {t('about.stats.learning.value')}
              </div>
              <div className="text-sm text-white/50">{t('about.stats.learning.label')}</div>
            </div>
          </motion.div>

          {/* Location stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className={`md:col-span-4 p-8 flex flex-col justify-center items-center text-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <MapPin className="w-10 h-10 mb-3 text-blue-400 mx-auto" />
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">
                {t('about.stats.location.value')}
              </div>
              <div className="text-sm text-white/50">Colombia</div>
            </div>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.48 }}
            className={`md:col-span-4 p-8 ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">
              <p className="text-white/40 leading-relaxed text-sm">{t('about.paragraph3')}</p>
            </div>
          </motion.div>

          {/* Innovation First */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`md:col-span-4 p-6 flex flex-col justify-center items-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <Lightbulb className="w-8 h-8 mb-2 text-yellow-400" />
              <div className="text-sm text-white/50">{t('about.features.innovation')}</div>
            </div>
          </motion.div>

          {/* Built for Speed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55 }}
            className={`md:col-span-4 p-6 flex flex-col justify-center items-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <Zap className="w-8 h-8 mb-2 text-blue-400" />
              <div className="text-sm text-white/50">{t('about.features.speed')}</div>
            </div>
          </motion.div>

          {/* Globally Minded */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`md:col-span-4 p-6 flex flex-col justify-center items-center ${cardBase}`}
            style={cardBg}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <Globe className="w-8 h-8 mb-2 text-violet-400" />
              <div className="text-sm text-white/50">{t('about.features.global')}</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
