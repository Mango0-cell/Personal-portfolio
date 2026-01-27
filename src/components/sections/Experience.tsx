import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { experiences } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const sectionClass = 'w-full max-w-7xl mx-auto px-6 py-40 min-h-screen flex flex-col justify-center items-center gap-12';

export function Experience() {
  const { t } = useTranslation();
  const experienceReveal = useScrollReveal();

  return (
    <section
      id="experience"
      ref={experienceReveal.ref as React.RefObject<HTMLElement>}
      className={`${sectionClass} transition-all duration-1000 ease-out transform ${
        experienceReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-6'
      }`}
    >
      <h2 className="text-3xl font-bold mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
        <span className="smooth-transition">{t('sections.experience')}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
      </h2>

      <div className="relative w-full flex flex-col items-center">
        <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-800 -translate-x-1/2" aria-hidden />

        <div className="space-y-14 w-full max-w-4xl">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const translationBase = exp.translationKey;
            const title = t(`${translationBase}.title`);
            const description = t(`${translationBase}.description`);

            return (
              <div
                key={exp.id}
                className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
              >
                <div
                  className={`relative w-full md:w-[48%] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}
                >
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-400 border-4 border-zinc-950 shadow-md" aria-hidden />

                  <article
                    className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-12 md:p-16 w-full shadow-lg hover:border-teal-500/50 hover:shadow-teal-500/10 smooth-transition"
                  >
                    <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-teal-400 smooth-transition flex items-center gap-2">
                      {title}
                      <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 smooth-transition" />
                    </h3>

                    <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 smooth-transition">
                      {description}
                    </p>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
