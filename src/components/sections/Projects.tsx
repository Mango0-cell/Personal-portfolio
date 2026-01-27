import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const sectionClass = 'w-full max-w-7xl mx-auto px-6 py-40 min-h-screen flex flex-col justify-center items-center gap-12';

export function Projects() {
  const { t } = useTranslation();
  const projectsReveal = useScrollReveal();

  return (
    <section
      id="projects"
      ref={projectsReveal.ref as React.RefObject<HTMLElement>}
      className={`${sectionClass} transition-all duration-1000 ease-out transform ${
        projectsReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-6'
      }`}
    >
      <h2 className="text-3xl font-bold mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
        <span className="smooth-transition">{t('sections.projects')}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
      </h2>

      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project) => {
            const translationBase = project.translationKey;
            const title = t(`${translationBase}.title`);
            const description = t(`${translationBase}.description`);
            const techStack = project.techStack || [];

            return (
              <article
                key={project.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 smooth-transition shadow-lg"
              >
                <div className="h-48 w-full bg-zinc-800 group-hover:bg-zinc-700 smooth-transition" />

                <div className="p-12 md:p-16 space-y-5">
                  <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-teal-400 smooth-transition flex items-center gap-2">
                    <span>{title}</span>
                    <ArrowRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition"
                    />
                  </h3>

                  <p className="text-zinc-400 leading-relaxed">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-teal-400 hover:text-teal-300 smooth-transition inline-flex items-center gap-2"
                      >
                        Demo
                        <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-300 hover:text-teal-300 smooth-transition inline-flex items-center gap-2"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
