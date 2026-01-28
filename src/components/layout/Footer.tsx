import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 border-t border-zinc-800 text-center text-zinc-500 text-xs md:text-sm space-y-3 md:space-y-4">
      <p className="transition-all duration-300 hover:text-teal-400">
        {t('footer.copyright', { year: new Date().getFullYear(), name: portfolioData.name })}
      </p>
      <p className="text-xs text-zinc-600">
        {t('footer.madeWith')}
      </p>
    </footer>
  );
}
