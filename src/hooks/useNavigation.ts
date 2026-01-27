import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function useNavigation() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = useMemo(
    () => [
      { name: t('nav.home'), href: '#home' },
      { name: t('nav.experience'), href: '#experience' },
      { name: t('nav.projects'), href: '#projects' },
      { name: t('nav.about'), href: '#about' }
    ],
    [t]
  );

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return { navLinks, isOpen, scrolled, toggleMenu, closeMenu };
}
