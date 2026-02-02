# Personal Portfolio 🚀

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS featuring internationalization support (English and Spanish).

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Internationalization (i18n)**: Multi-language support with English and Spanish translations
- **Modern Tech Stack**: Built with React 19, TypeScript, and Tailwind CSS 4
- **Dark Theme**: Clean, modern dark theme interface
- **Project Showcase**: Featured projects section with live demos and GitHub links
- **About Section**: Personal information and professional bio
- **Social Links**: Quick access to GitHub, LinkedIn, Instagram, and other social profiles
- **Fast Loading**: Optimized with Vite for lightning-fast build times and hot module replacement

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Internationalization**: i18next, react-i18next
- **Icons**: lucide-react
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
personal-portfolio/
├── public/
│   ├── assets/              # Static assets (images, icons)
│   └── locales/             # Translation files
│       ├── en/              # English translations
│       └── es/              # Spanish translations
├── src/
│   ├── assets/              # Project images and media
│   ├── components/          # React components
│   │   ├── layout/          # Layout components (Navbar, Footer)
│   │   ├── sections/        # Section components (Hero, Projects, About)
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions and constants
│   ├── App.tsx              # Main application component
│   ├── i18n.ts              # i18next configuration
│   └── main.tsx             # Application entry point
├── ARQUITECTURA.md          # Detailed architecture documentation
└── package.json             # Project dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

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

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run predeploy` - Build the project before deployment

## 🌐 Internationalization

The project supports multiple languages through i18next:

- **English (en)**: Default language
- **Spanish (es)**: Available as secondary language

Translation files are located in `public/locales/{language}/translation.json`

To add a new language:
1. Create a new folder in `public/locales/` with the language code
2. Add a `translation.json` file with translations
3. Update the i18n configuration in `src/i18n.ts`

## 📝 Content Management

### Update Text Content
Edit the translation files:
- English: `public/locales/en/translation.json`
- Spanish: `public/locales/es/translation.json`

### Update Personal Data
Edit `src/utils/constants.ts` to update:
- Personal information
- Social media links
- Project URLs
- Technology tags

## 📦 Build and Deployment

Build the project for production:
```bash
npm run build
```

The production-ready files will be generated in the `dist/` directory.

## 📄 License

This project is private and maintained by Eduardo Meneses.

## 👨‍💻 Author

**Eduardo Meneses**
- GitHub: [@Mango0-cell](https://github.com/Mango0-cell)
- Email: eduardo.meneses@utp.edu.co
- Instagram: [@storxm._](https://instagram.com/storxm._)

## 🙏 Acknowledgments

Built with modern web technologies and best practices for clean code architecture. For detailed architecture documentation, see [ARQUITECTURA.md](./ARQUITECTURA.md).
