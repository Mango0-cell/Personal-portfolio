# 🚀 Personal Portfolio - Eduardo Meneses

Portfolio personal desarrollado con React, TypeScript y Tailwind CSS, con soporte completo de internacionalización (i18n).

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite&logoColor=white)

## ✨ Características

- ⚡ **Vite** - Build tool ultrarrápido con HMR
- ⚛️ **React 19** - Última versión de React
- 📝 **TypeScript** - Tipado estático para mayor robustez
- 🎨 **Tailwind CSS 4** - Estilos utility-first modernos
- 🌐 **i18next** - Internacionalización completa (Español/Inglés)
- 📱 **Responsive Design** - Adaptable a todos los dispositivos
- 🎭 **Animaciones suaves** - Scroll reveal y transiciones CSS
- 🔧 **ESLint** - Linting para código limpio

## 📂 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/           # Componentes atómicos (Card, SocialIcon)
│   ├── common/       # Componentes compartidos (Footer, Section)
│   ├── layout/       # Layout (Navbar, Footer)
│   └── sections/     # Secciones principales (Hero, Projects, About)
├── hooks/            # Custom hooks (useScrollReveal, useNavigation)
├── types/            # Interfaces TypeScript
├── utils/            # Constantes y utilidades
└── assets/           # Imágenes y recursos
public/
└── locales/          # Archivos de traducción (en/es)
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Mango0-cell/Personal-portfolio.git

# Entrar al directorio
cd Personal-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 📜 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint |

## 🌍 Internacionalización

El proyecto soporta múltiples idiomas gracias a **i18next**:

- 🇪🇸 Español
- 🇺🇸 Inglés

Los archivos de traducción se encuentran en `public/locales/`.

### Añadir un nuevo idioma

1. Crear carpeta en `public/locales/{código-idioma}/`
2. Copiar y traducir `translation.json`
3. El detector de idioma lo reconocerá automáticamente

## 🎯 Secciones

- **Hero** - Presentación principal con información de contacto
- **Projects** - Portfolio de proyectos destacados
- **About** - Información personal y profesional
- **Footer** - Enlaces sociales y copyright

## 🔧 Tecnologías Principales

| Tecnología | Uso |
|------------|-----|
| React 19 | UI Library |
| TypeScript | Tipado estático |
| Tailwind CSS 4 | Estilos |
| Vite 7 | Build tool |
| i18next | Internacionalización |
| Lucide React | Iconos |

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

---

Hecho con ❤️ por [Eduardo Meneses](https://github.com/Mango0-cell)

