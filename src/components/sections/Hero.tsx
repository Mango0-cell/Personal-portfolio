import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SocialIcon } from '../ui/SocialIcon';

const sectionClass = 'w-full max-w-7xl mx-auto px-6 py-40 min-h-screen flex flex-col justify-center items-center gap-12';

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
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="flex flex-col justify-start w-full">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-zinc-50 leading-tight">
            {portfolioData.name}
          </h1>

          <p className="text-2xl md:text-3xl font-semibold text-teal-400 mb-8 smooth-transition hover:text-teal-300">
            {t('hero.role')}
          </p>

          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg">
            {t('hero.bio')}
          </p>

          <div className="flex gap-8 items-center pt-6">
            <a
              href={`mailto:${portfolioData.email}`}
              className="smooth-transition text-zinc-400 hover:text-teal-400 hover:scale-125 p-3 rounded-lg hover:bg-zinc-800/50"
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
