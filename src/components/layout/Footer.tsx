import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../utils';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full max-w-10xl mx-auto px-2 md:px-5 py-2 md:py-2 border-t border-zinc-800 text-center text-zinc-500 text-xs md:text-sm space-y-3 md:space-y-4">
      <p className="transition-all duration-300 hover:text-teal-400">
        {t('footer.copyright', { year: new Date().getFullYear(), name: portfolioData.name })}
      </p>
      <p className="text-xs text-zinc-600">
        {t('footer.madeWith')}
      </p>
    </footer>
  );
}
