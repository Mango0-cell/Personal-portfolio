import React from 'react';
import { useTranslation } from 'react-i18next';
import { portfolioData } from '../../data';

/**
 * Componente Footer
 * Pie de página con copyright y información
 */
export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();
  const copyright = t('footer.copyright', {
    name: portfolioData.name,
    defaultValue: `© ${year} ${portfolioData.name}. Todos los derechos reservados.`
  });

  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {copyright}
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-400">
          {t('footer.madeWith')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
