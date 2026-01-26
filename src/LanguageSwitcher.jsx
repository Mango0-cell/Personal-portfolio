import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeTo = (lng) => () => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2 bg-zinc-900/70 border border-zinc-800 rounded-full px-3 py-1 text-sm text-zinc-300">
      <button
        onClick={changeTo('es')}
        className={`px-3 py-1 rounded-full transition-colors ${
          i18n.language?.startsWith('es') ? 'bg-teal-500 text-zinc-950' : 'hover:bg-zinc-800'
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
      <button
        onClick={changeTo('en')}
        className={`px-3 py-1 rounded-full transition-colors ${
          i18n.language?.startsWith('en') ? 'bg-teal-500 text-zinc-950' : 'hover:bg-zinc-800'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
