import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        experience: 'Experience',
        projects: 'Projects',
        about: 'About Me',
        contact: 'Contact'
      },
      hero: {
        role: 'Full Stack Developer',
        bio: 'Passionate about building modern web experiences. Focused on React, TypeScript, and performant interfaces.'
      },
      sections: {
        experience: 'My Work Experience',
        projects: 'Projects',
        about: 'About Me'
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        experience: 'Experiencia',
        projects: 'Proyectos',
        about: 'Acerca de mí',
        contact: 'Contacto'
      },
      hero: {
        role: 'Desarrollador Full Stack',
        bio: 'Apasionado por crear experiencias web modernas. Enfocado en React, TypeScript y interfaces de alto rendimiento.'
      },
      sections: {
        experience: 'Mi experiencia laboral',
        projects: 'Proyectos',
        about: 'Acerca de mí'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'cookie', 'htmlTag'],
      caches: ['localStorage', 'cookie']
    }
  });

export default i18n;
