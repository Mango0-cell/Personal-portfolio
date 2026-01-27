import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800 text-center text-zinc-500 text-sm space-y-4">
      <p className="smooth-transition hover:text-teal-400">
        {t('footer.copyright', { year: new Date().getFullYear(), name: portfolioData.name })}
      </p>
      <p className="text-xs text-zinc-600">
        {t('footer.madeWith')}
      </p>
    </footer>
  );
}
