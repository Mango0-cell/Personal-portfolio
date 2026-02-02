# Personal Portfolio

A modern, multilingual personal portfolio website built with React, TypeScript, and Vite. Features a clean architecture with internationalization support for English and Spanish.

## 🚀 Features

- **Multilingual Support**: Full internationalization (i18n) with English and Spanish translations
- **Modern Tech Stack**: React 19, TypeScript, Vite, and Tailwind CSS 4
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Clean Architecture**: Modular component structure following clean code principles
- **Type Safety**: Full TypeScript support with strict typing
- **Fast Development**: Hot Module Replacement (HMR) with Vite
- **Icon Library**: Lucide React icons for consistent visual elements

## 📋 Project Structure

```
personal-portfolio/
├── public/
│   └── locales/              # Externalized translations
│       ├── en/
│       │   └── translation.json
│       └── es/
│           └── translation.json
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable atomic components
│   │   ├── common/           # Layout components
│   │   ├── layout/           # Main layout components (Navbar, Footer)
│   │   └── sections/         # Page sections (Hero, Projects, About)
│   ├── types/                # TypeScript interfaces
│   ├── utils/                # Constants and utilities
│   ├── hooks/                # Custom React hooks
│   ├── assets/               # Images and static assets
│   ├── i18n.ts              # i18next configuration
│   ├── App.tsx              # Main application component
│   └── main.tsx             # Application entry point
└── package.json
```

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### Internationalization
- **i18next 25.8.0** - Internationalization framework
- **react-i18next 16.5.3** - React integration for i18next
- **i18next-http-backend 2.6.2** - Backend to load translations
- **i18next-browser-languagedetector 8.2.0** - Language detection

### Development Tools
- **ESLint 9.39.1** - Code linting
- **Prettier** - Code formatting
- **@vitejs/plugin-react-swc** - Fast Refresh with SWC

## 🚦 Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Mango0-cell/Personal-portfolio.git
cd Personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production (TypeScript compilation + Vite build)
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality
- **`npm run predeploy`** - Pre-deployment build script

## 🌐 Internationalization

The project supports multiple languages through i18next:

- **English** (`en`) - Default language
- **Spanish** (`es`)

### Adding/Editing Translations

Edit the JSON files in `public/locales/`:
- `public/locales/en/translation.json` - English translations
- `public/locales/es/translation.json` - Spanish translations

### Adding a New Language

1. Create a new folder in `public/locales/` (e.g., `fr` for French)
2. Add a `translation.json` file with translations
3. The language will be automatically detected and available

## 🎨 Customization

### Personal Information

Edit `src/utils/constants.ts` to update:
- Name, email, and profile image
- Social media links
- Project information
- Company URLs

### Styling

The project uses Tailwind CSS. Main styles are in:
- `src/index.css` - Global styles
- `src/App.css` - App-specific styles
- Component files - Component-scoped styles

## 📦 Sections

The portfolio includes the following sections:

1. **Hero** - Introduction with name and title
2. **Projects** - Showcase of development projects with images and tech stacks
3. **About** - Personal information and bio
4. ~~**Experience**~~ - (Temporarily disabled) Work experience timeline

## 🏗️ Architecture

This project follows clean code principles with:

- **Separation of Concerns**: Components, types, and utilities are clearly separated
- **Modular Components**: Reusable UI components in `components/ui/`
- **Type Safety**: All components and data structures are typed
- **Internationalization**: Text content is externalized for easy translation

For detailed architecture documentation, see [ARQUITECTURA.md](./ARQUITECTURA.md)

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **GitHub Pages**: Use `gh-pages` package (already included)
- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Deploy with drag-and-drop or Git integration

Build command: `npm run build`
Output directory: `dist/`

## 📄 License

This project is private and proprietary.

## 👤 Author

**Eduardo Meneses**
- GitHub: [@Mango0-cell](https://github.com/Mango0-cell)
- Email: eduardo.meneses@utp.edu.co

## 🤝 Contributing

This is a personal portfolio project. Feel free to fork and adapt for your own use!
