import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../LanguageSelector';

/**
 * Componente Navbar
 * Navegación principal con links internos y selector de idioma
 */
export const Navbar: React.FC = () => {
  const { t } = useTranslation();

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    // ELIMINAMOS TEMPORALMENTE WORK EXPERIENCE//{ label: t('nav.experience'), href: '#experience' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.contact'), href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-2 py-2 flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="text-xl font-bold text-slate-900 dark:text-white">
          Portfolio
        </div>

        {/* Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </nav>
  );
};

export default Navbar;
