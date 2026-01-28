import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const sectionClass = 'w-full max-w-7xl mx-auto px-4 md:px-6 pt-20 pb-32 md:py-40 min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12';

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
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
        <span className="transition-all duration-300">{t('sections.projects')}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
      </h2>

      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {projects.map((project) => {
            const translationBase = project.translationKey;
            const title = t(`${translationBase}.title`);
            const description = t(`${translationBase}.description`);
            const techStack = project.techStack || [];

            return (
              <article
                key={project.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-teal-500/50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
              >
                <div className="h-40 md:h-48 w-full bg-zinc-800 group-hover:bg-zinc-700 transition-all duration-300 overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                      onError={(e) => {
                        console.error('Error cargando imagen:', project.image);
                        e.currentTarget.src = 'https://via.placeholder.com/400x300?text=No+Image';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-500">
                      <span>No image</span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-4 md:space-y-5">
                  <h3 className="text-lg md:text-xl font-semibold text-zinc-100 group-hover:text-teal-400 transition-all duration-300 flex items-center gap-2">
                    <span>{title}</span>
                    <ArrowRight
                      size={18}
                      className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                    />
                  </h3>

                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
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
