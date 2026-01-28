import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SocialIcon } from '../ui/SocialIcon';

const sectionClass = 'w-full max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-40 min-h-screen flex flex-col justify-center items-center gap-8 md:gap-12';

export function Hero() {
  const { t } = useTranslation();
  const heroReveal = useScrollReveal();

  return (
    <header
      id="home"
      ref={heroReveal.ref as React.RefObject<HTMLElement>}
      className={`${sectionClass} transition-all duration-1000 ease-out transform ${
        heroReveal.isVisible ? 'opacity-100 translate-y-0' : 'opacity-20 translate-y-6'
      }`}
    >
      <div className="w-full flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="flex flex-col justify-center md:justify-start w-full text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-zinc-50 leading-tight">
            {portfolioData.name}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-400 mb-6 md:mb-8 transition-all duration-300 hover:text-teal-300">
            {t('hero.role')}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
            {t('hero.bio')}
          </p>

          <div className="flex gap-4 md:gap-8 items-center justify-center md:justify-start pt-4 md:pt-6">
            <a
              href={`mailto:${portfolioData.email}`}
              className="transition-all duration-300 text-zinc-400 hover:text-teal-400 hover:scale-110 p-2 md:p-3 rounded-lg hover:bg-zinc-800/50"
              aria-label="Email"
              title="Enviar email"
            >
              <Mail size={28} strokeWidth={1.5} />
            </a>
            {portfolioData.socialLinks.map((social) => (
              <SocialIcon key={social.name} social={social} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
