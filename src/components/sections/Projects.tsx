'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import CardSwap, { Card } from '../CardSwap';
import { projects } from '../../utils';

const projectMeta: Record<string, { accent: string }> = {
  navidad: { accent: '#F97316' },
  news:    { accent: '#0EA5E9' },
  ui_clone:{ accent: '#A855F7' },
  kanban:  { accent: '#10B981' },
};

export function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="pt-32 pb-56 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-white"
          style={{ fontSize: '3rem', fontWeight: 700 }}
        >
          {t('sections.projects')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-white/40 mb-16"
        >
          {t('projects.scrollHint')} ↓
        </motion.p>

        {/* CardSwap layout */}
        <div className="relative flex items-center justify-center" style={{ height: '620px' }}>

          {/* Left side — project index list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 max-[900px]:hidden"
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">
              {t('projects.scrollHint')}
            </p>
            <div className="space-y-3">
              {projects.map((project, i) => {
                const meta = projectMeta[project.id] ?? { accent: '#3B82F6' };
                return (
                  <div
                    key={project.id}
                    className="flex items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-200"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: meta.accent, boxShadow: `0 0 6px ${meta.accent}` }}
                    />
                    <span className="text-sm">{t(`${project.translationKey}.title`)}</span>
                    <span className="text-xs opacity-50">0{i + 1}</span>
                  </div>
                );
              })}
            </div>
            <p className="text-white/20 text-xs mt-6">↑ click a card to select it</p>
          </motion.div>

          {/* CardSwap stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-full"
          >
            <CardSwap
              width={630}
              height={460}
              cardDistance={55}
              verticalDistance={50}
              delay={3000}
              pauseOnHover={false}
              skewAmount={5}
              easing="elastic"
            >
              {projects.map(project => {
                const meta = projectMeta[project.id] ?? { accent: '#3B82F6' };
                const title = t(`${project.translationKey}.title`);
                const description = t(`${project.translationKey}.description`);

                return (
                  <Card
                    key={project.id}
                    customClass="overflow-hidden cursor-pointer"
                    style={{
                      background: 'rgba(14,14,18,0.95)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      boxShadow: '0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Project screenshot */}
                    <div className="relative h-56 overflow-hidden" style={{ background: '#0E0E12' }}>
                      {project.image && (
                        <img
                          src={project.image as string}
                          alt={title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                        />
                      )}
                      {/* Gradient overlay at bottom for readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0E0E12] to-transparent" />
                    </div>

                    {/* Card content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="text-white font-bold text-sm leading-tight">{title}</h3>
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-1"
                          style={{ backgroundColor: meta.accent, boxShadow: `0 0 8px ${meta.accent}` }}
                        />
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed mb-3 line-clamp-2">{description}</p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {(project.techStack ?? []).slice(0, 4).map(tag => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-[10px] rounded-full border border-white/10 bg-white/5 text-white/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-2">
                        {project.link && project.link !== '#' && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-white/60 hover:text-white text-xs transition-all duration-200"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {t('projects.liveDemo')}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={e => e.stopPropagation()}
                            className="flex items-center gap-1 px-2.5 py-1 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 text-white/60 hover:text-white text-xs transition-all duration-200"
                          >
                            <Github className="w-3 h-3" />
                            {t('projects.viewCode')}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(to right, transparent, ${meta.accent}80, transparent)` }}
                    />
                  </Card>
                );
              })}
            </CardSwap>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
