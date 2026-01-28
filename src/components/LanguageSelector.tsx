import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'es', name: 'Español', flag: ''},
  { code: 'en', name: 'English', flag: ''}
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  // Cerrar el dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-teal-500/50 transition-all duration-300 hover:bg-zinc-800/80 group"
        aria-label="Cambiar idioma"
      >
        <span className="text-2xl">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-zinc-300 group-hover:text-teal-400 transition-colors">
          {currentLanguage.code.toUpperCase()}
        </span>
        <ChevronDown
          size={16}
          className={`text-zinc-400 group-hover:text-teal-400 transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 w-48 bg-zinc-900/95 backdrop-blur-md border border-zinc-800 rounded-lg shadow-2xl shadow-black/50 overflow-hidden animate-fadeIn z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                language.code === i18n.language
                  ? 'bg-teal-500/20 text-teal-400 border-l-2 border-teal-400'
                  : 'text-zinc-300 hover:bg-zinc-800/80 hover:text-teal-400'
              }`}
            >
              <span className="text-2xl">{language.flag}</span>
              <div className="flex flex-col items-start">
                <span className="text-sm font-medium">{language.name}</span>
                <span className="text-xs text-zinc-500">{language.code.toUpperCase()}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
