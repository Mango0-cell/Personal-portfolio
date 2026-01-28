import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../utils';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SocialIcon } from '../ui/SocialIcon';

const sectionClass = 'w-full max-w-7xl mx-auto px-4 md:px-6 pt-32 pb-32 md:py-40 min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12';

export function About() {
  const { t } = useTranslation();
  const aboutReveal = useScrollReveal();
  const aboutParagraphs = [t('about.paragraph1'), t('about.paragraph2'), t('about.paragraph3')];

  return (
    <section
      id="about"
      ref={aboutReveal.ref as React.RefObject<HTMLElement>}
      className={`${sectionClass} transition-all duration-1000 ease-out transform ${
        aboutReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-6'
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
        <span className="transition-all duration-300">{t('sections.about')}</span>
        <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
      </h2>

      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center w-full max-w-4xl">
          <div className="w-full h-full">
            <div className="aspect-[4/5] w-full bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center hover:scale-105 transition-all duration-300">
              {portfolioData.profileImage ? (
                <img
                  src={portfolioData.profileImage}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-zinc-500 text-center px-6">
                  <p className="text-lg font-semibold">Foto</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-zinc-900/50 p-6 md:p-12 lg:p-10 rounded-2xl border border-zinc-800 shadow-lg space-y-6 hover:border-teal-500/30 transition-all duration-300">
            <div className="space-y-3 md:space-y-4">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base text-zinc-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 md:gap-6 pt-4 justify-center md:justify-start">
              <a
                href={`mailto:${portfolioData.email}`}
                className="transition-all duration-300 text-zinc-400 hover:text-teal-400 hover:scale-110 p-2 md:p-3 rounded-lg hover:bg-zinc-800/60"
                aria-label="Email"
              >
                <Mail size={22} strokeWidth={1.5} />
              </a>
              {portfolioData.socialLinks.map((social) => (
                <SocialIcon key={social.name} social={social} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
