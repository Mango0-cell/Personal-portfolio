"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";
import CardSwap, { Card } from "../CardSwap";
import { projects } from "../../utils";

const projectMeta: Record<string, { accent: string }> = {
  navidad: { accent: "#F97316" },
  news: { accent: "#0EA5E9" },
  ui_clone: { accent: "#2822e2" },
  kanban: { accent: "#6c0faa" },
};

export function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const bringToFrontRef = useRef<((idx: number) => void) | null>(null);
  const [activeFront, setActiveFront] = useState(0);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative pt-32 pb-28 md:pb-56 px-4 overflow-visible"
    >
      <div className="absolute -inset-x-32 -inset-y-24 pointer-events-none">
        <div
          className="absolute right-[4%] top-24 h-80 w-80 rounded-full blur-[140px] opacity-[0.14]"
          style={{ background: "var(--neon-blue)" }}
        />
        <div
          className="absolute left-[12%] bottom-20 h-72 w-72 rounded-full blur-[130px] opacity-10"
          style={{ background: "var(--neon-purple)" }}
        />
      </div>
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center text-white"
          style={{ fontSize: "3rem", fontWeight: 700 }}
        >
          {t("sections.projects")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center text-white/40 mb-16"
        >
          {t("projects.scrollHint")} ↓
        </motion.p>

        {/* CardSwap layout */}
        <div
          className="relative flex items-center justify-center"
          style={{ height: "620px" }}
        >
          {/* Left side — project index list */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-64 z-20 max-[900px]:hidden"
          >
            <p className="text-white/30 text-xs uppercase tracking-widest mb-5">
              {t("projects.interactHint")}
            </p>
            <div className="space-y-4">
              {projects.map((project, i) => {
                const meta = projectMeta[project.id] ?? { accent: "#3B82F6" };
                return (
                  <button
                    key={project.id}
                    onClick={() => bringToFrontRef.current?.(i)}
                    className={`flex items-center gap-3 transition-colors duration-200 cursor-pointer w-full text-left group ${
                      activeFront === i
                        ? "text-white"
                        : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: meta.accent,
                        boxShadow:
                          activeFront === i
                            ? `0 0 14px ${meta.accent}, 0 0 6px ${meta.accent}`
                            : `0 0 6px ${meta.accent}60`,
                        transform:
                          activeFront === i ? "scale(1.4)" : "scale(1)",
                      }}
                    />
                    <span
                      className={`text-base font-medium transition-all duration-200 ${activeFront === i ? "translate-x-1" : ""}`}
                    >
                      {t(`${project.translationKey}.title`)}
                    </span>
                  </button>
                );
              })}
            </div>
            <motion.p
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
              className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent animate-gradient text-sm mt-7 font-medium"
              style={{ backgroundSize: "200% auto" }}
            >
              ↑ {t("projects.selectHint")}
            </motion.p>
          </motion.div>

          {/* CardSwap stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-full pointer-events-none"
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
              bringToFrontRef={bringToFrontRef}
              onFrontChange={setActiveFront}
            >
              {projects.map((project) => {
                const meta = projectMeta[project.id] ?? { accent: "#3B82F6" };
                const title = t(`${project.translationKey}.title`);
                const description = t(`${project.translationKey}.description`);

                return (
                  <Card
                    key={project.id}
                    customClass="overflow-hidden cursor-pointer"
                    style={{
                      background: "rgba(14,14,18,0.95)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow:
                        "0 25px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {/* Project screenshot */}
                    <div
                      className="relative h-60 overflow-hidden"
                      style={{ background: "#0E0E12" }}
                    >
                      {project.image && (
                        <img
                          src={project.image as string}
                          alt={title}
                          className="absolute inset-0 w-full h-full object-cover object-top"
                          onError={(e) => {
                            (
                              e.currentTarget as HTMLImageElement
                            ).style.display = "none";
                          }}
                        />
                      )}
                      {/* Gradient overlay at bottom for readability */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0E0E12] to-transparent" />
                    </div>

                    {/* Card content */}
                    <div className="px-5 pt-3 pb-2">
                      <div className="flex items-start justify-between gap-3 mb-1.5">
                        <h3 className="text-white font-bold text-sm leading-tight">
                          {title}
                        </h3>
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5"
                          style={{
                            backgroundColor: meta.accent,
                            boxShadow: `0 0 8px ${meta.accent}`,
                          }}
                        />
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed mb-2.5">
                        {description}
                      </p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mb-2.5">
                        {(project.techStack ?? []).slice(0, 4).map((tag) => (
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
                        {project.link && project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/15 hover:bg-blue-500/30 rounded-lg border border-blue-400/30 hover:border-blue-400/60 text-blue-300 hover:text-blue-200 text-xs font-medium transition-all duration-200"
                          >
                            <ExternalLink className="w-3 h-3" />
                            {t("projects.liveDemo")}
                          </a>
                        )}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-500/15 hover:bg-violet-500/30 rounded-lg border border-violet-400/30 hover:border-violet-400/60 text-violet-300 hover:text-violet-200 text-xs font-medium transition-all duration-200"
                          >
                            <Github className="w-3 h-3" />
                            {t("projects.viewCode")}
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-px"
                      style={{
                        background: `linear-gradient(to right, transparent, ${meta.accent}80, transparent)`,
                      }}
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
