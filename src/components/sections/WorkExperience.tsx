"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { BriefcaseBusiness, Coffee } from "lucide-react";
import { useTranslation } from "react-i18next";
import BorderGlow from "../BorderGlow";

const experiences = [
  {
    id: "swiftcontrol",
    image: "/assets/experience/swiftcontrol.png",
    accent: "#38BDF8",
    glowColor: "199 89 74",
    icon: BriefcaseBusiness,
    colors: ["#38bdf8", "#6366f1", "#c084fc"],
    objectPosition: "30% top",
  },
  {
    id: "brunchosos",
    image: "/assets/experience/Brunchosos-coffee-and-bread.png",
    accent: "#F59E0B",
    glowColor: "32 95 64",
    icon: Coffee,
    colors: ["#f59e0b", "#fb7185", "#38bdf8"],
    objectPosition: "center top",
  },
];

export function WorkExperience() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <section
      id="work-experience"
      ref={ref}
      className="relative py-28 px-4 overflow-visible"
    >
      <div className="absolute -inset-x-32 -inset-y-28 pointer-events-none">
        <div className="absolute left-1/2 top-24 h-[calc(100%-12rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/25 to-transparent max-md:hidden" />
        <div
          className="absolute right-[2%] top-12 h-80 w-80 rounded-full blur-[140px] opacity-[0.18]"
          style={{ background: "var(--neon-blue)" }}
        />
        <div
          className="absolute left-[2%] bottom-0 h-80 w-80 rounded-full blur-[140px] opacity-[0.16]"
          style={{ background: "var(--neon-purple)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2
            className="text-white"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3rem)", fontWeight: 700 }}
          >
            {t("sections.workExperience")}
          </h2>
        </motion.div>

        <div className="relative space-y-10 md:space-y-0">
          {experiences.map((item, index) => {
            const Icon = item.icon;
            const isRight = index % 2 === 1;

            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 34, x: isRight ? 32 : -32 }}
                animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + index * 0.18,
                  ease: "easeOut",
                }}
                className={`relative md:w-[86%] xl:w-[88%] ${isRight ? "md:ml-auto md:-mt-8" : "md:mr-auto"}`}
              >
                <BorderGlow
                  className="group"
                  edgeSensitivity={25}
                  glowColor={item.glowColor}
                  backgroundColor="rgba(14, 14, 18, 0.92)"
                  borderRadius={24}
                  glowRadius={34}
                  glowIntensity={0.8}
                  coneSpread={24}
                  animated={index === 0}
                  colors={item.colors}
                  fillOpacity={0.32}
                >
                  <div className="relative grid min-h-[390px] grid-cols-1 overflow-hidden rounded-[inherit] md:grid-cols-[1.08fr_1fr]">
                    <div
                      className={`relative min-h-[220px] overflow-hidden ${isRight ? "md:order-2" : ""}`}
                    >
                      <img
                        src={item.image}
                        alt={t(`workExperience.items.${item.id}.imageAlt`)}
                        style={{ objectPosition: item.objectPosition }}
                        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          isRight
                            ? "md:[mask-image:linear-gradient(to_left,black_22%,rgba(0,0,0,0.55)_58%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_left,black_22%,rgba(0,0,0,0.55)_58%,transparent_100%)]"
                            : "md:[mask-image:linear-gradient(to_right,black_22%,rgba(0,0,0,0.55)_58%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,black_22%,rgba(0,0,0,0.55)_58%,transparent_100%)]"
                        }`}
                      />
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: isRight
                            ? `radial-gradient(70% 90% at 72% 50%, ${item.accent}1F 0%, transparent 70%)`
                            : `radial-gradient(70% 90% at 28% 50%, ${item.accent}1F 0%, transparent 70%)`,
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0E12] via-transparent to-transparent md:hidden" />
                    </div>

                    <div className="relative z-10 flex flex-col justify-center bg-[#0E0E12]/92 p-7 md:bg-transparent md:p-9">
                      <div
                        className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5"
                        style={{
                          color: item.accent,
                          boxShadow: `inset 0 0 18px ${item.accent}20`,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/30">
                        {t(`workExperience.items.${item.id}.label`)}
                      </p>
                      <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
                        {t(`workExperience.items.${item.id}.title`)}
                      </h3>
                      <p className="text-sm leading-7 text-white/50 md:text-[0.95rem]">
                        {t(`workExperience.items.${item.id}.description`)}
                      </p>
                    </div>
                  </div>
                </BorderGlow>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
