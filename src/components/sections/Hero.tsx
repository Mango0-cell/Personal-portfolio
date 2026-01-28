import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../utils';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { SocialIcon } from '../ui/SocialIcon';
import profilePhoto from '../../assets/photo-circle.jpeg';

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
      <div className="w-full flex flex-col  gap-8 md:gap-16 items-center">
        <div className="flex flex-col justify-center md:justify-start w-full text-center md:text-left">
          {/* Fila superior: Foto + Badge */}
          <div className="flex items-center gap-4 mb-6 px-4 justify-center md:justify-start">
            <img
              src={profilePhoto}
              alt={portfolioData.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-teal-400/50"
            />
            <a
              href={`mailto:${portfolioData.email}`}
              className="flex items-center gap-2 px-4 py-1 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 text-sm font-medium transition-all duration-300 hover:scale-105 hover:bg-green-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              {t('hero.available') || 'Disponible para trabajar'}
            </a>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-50 leading-tight">
            {portfolioData.name}
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-400 transition-all duration-300 hover:text-teal-300">
            {t('hero.role')}
          </p>

          <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-lg mx-auto md:mx-0">
            {t('hero.bio')}
          </p>

          <div className="flex gap-4 md:gap-8 items-center justify-center md:justify-start pt-2">
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
