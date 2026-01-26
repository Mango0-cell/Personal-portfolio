// ============================================
// IMPORTACIONES
// ============================================
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Github, Linkedin, Twitter, Instagram, ExternalLink, Calendar, ArrowRight, Menu, X } from 'lucide-react';
import { portfolioData, type SocialLink } from './data';
import LanguageSwitcher from './LanguageSwitcher';
import './App.css';

// ============================================
// HOOK PERSONALIZADO: SCROLL REVEAL
// ============================================
// Detecta cuando un elemento entra en el viewport para animaciones
// Las animaciones se repiten cada vez que el elemento entra/sale del viewport
function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Actualiza el estado cada vez que la visibilidad cambia
        // Activa fade in/out para efecto focus mode
        setIsVisible(entry.intersectionRatio >= 0.3);
      },
      {
        threshold: 0.3, // Se activa cuando el 30% es visible
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
}

// ============================================
// COMPONENTE: BARRA DE NAVEGACIÓN
// ============================================
function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.about'), href: '#about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 smooth-transition ${
        scrolled 
          ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Contenedor centrado del navbar */}
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl flex items-center justify-between py-6">
          
          {/* Logo / Nombre - Izquierda */}
          <a 
            href="#home" 
            className="text-2xl font-bold text-zinc-100 hover:text-teal-400 smooth-transition"
          >
            {portfolioData.name.split(' ')[0]}
          </a>

          {/* Links de navegación - Centro (Desktop) */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-300 hover:text-teal-400 smooth-transition relative group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full smooth-transition"></span>
              </a>
            ))}
          </div>

          {/* Cambiador de idioma */}
          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          {/* Botón hamburguesa - Mobile (Derecha) */}
          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden text-zinc-300 hover:text-teal-400 smooth-transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden w-full flex justify-center px-6">
          <div className="w-full max-w-7xl pb-4 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-zinc-300 hover:text-teal-400 smooth-transition py-2 border-b border-zinc-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
function App() {
  // Hooks de scroll reveal para cada sección
  const heroReveal = useScrollReveal();
  const experienceReveal = useScrollReveal();
  const projectsReveal = useScrollReveal();
  const aboutReveal = useScrollReveal();
  const { t } = useTranslation();

  // ============================================
  // CONSTANTE DE ESTILO ESTANDARIZADO
  // ============================================
  const sectionClass = "w-full max-w-7xl mx-auto px-6 py-40 min-h-screen flex flex-col justify-center items-center gap-12";

  return (
    <div className="w-full min-h-screen bg-zinc-950 text-zinc-200 overflow-x-hidden">
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Container principal: contenedor de todas las secciones */}
      <main className="portfolio-container w-full flex flex-col items-center pt-20">
        
        {/* ============================================ */}
        {/* SECCIÓN: HERO / ENCABEZADO */}
        {/* ============================================ */}
        <header 
          id="home"
          ref={heroReveal.ref as React.RefObject<HTMLElement>}
          className={`${sectionClass} transition-all duration-1000 ease-out transform ${
            heroReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-20 translate-y-6'
          }`}
        >
          {/* Layout de dos columnas: Foto + Contenido */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* COLUMNA DERECHA: Contenido y Redes Sociales */}
            <div className="flex flex-col justify-start w-full">
              {/* Nombre principal */}
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-zinc-50 leading-tight">
                {portfolioData.name}
              </h1>
              
              {/* Rol/Profesión */}
              <p className="text-2xl md:text-3xl font-semibold text-teal-400 mb-8 smooth-transition hover:text-teal-300">
                {t('hero.role')}
              </p>
              
              {/* Descripción/Bio */}
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-lg">
                {portfolioData.bio}
              </p>
              
              {/* Enlaces de redes sociales */}
              <div className="flex gap-8 items-center pt-6">
                <a 
                  href={`mailto:${portfolioData.email}`}
                  className="smooth-transition text-zinc-400 hover:text-teal-400 hover:scale-125 p-3 rounded-lg hover:bg-zinc-800/50"
                  aria-label="Email"
                  title="Enviar email"
                >
                  <Mail size={28} strokeWidth={1.5} />
                </a>
                {portfolioData.socialLinks.map((social) => (
                  <SocialIcon key={social.name} social={social} />
                ))}
              </div>
            </div>

          </div>
        </header>

        {/* ============================================ */}
        {/* SECCIÓN: EXPERIENCIA LABORAL */}
        {/* ============================================ */}
        <section 
          id="experience"
          ref={experienceReveal.ref as React.RefObject<HTMLElement>}
          className={`${sectionClass} transition-all duration-1000 ease-out transform ${
            experienceReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-20 translate-y-6'
          }`}
        >
          {/* Título alineado a la izquierda */}
          <h2 className="text-3xl font-bold mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
            <span className="smooth-transition">{t('sections.experience')}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </h2>
          
          {/* Timeline centrado */}
          <div className="relative w-full flex flex-col items-center">
            <div className="absolute left-1/2 top-0 h-full w-px bg-zinc-800 -translate-x-1/2" aria-hidden />

            <div className="space-y-14 w-full max-w-4xl">
              {portfolioData.experience.map((exp, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex ${isLeft ? 'justify-start' : 'justify-end'} w-full`}
                  >
                    <div 
                      className={`relative w-full md:w-[48%] ${isLeft ? 'md:pr-10' : 'md:pl-10'}`}
                    >
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-teal-400 border-4 border-zinc-950 shadow-md" aria-hidden />

                      <article 
                        className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-12 md:p-16 w-full shadow-lg hover:border-teal-500/50 hover:shadow-teal-500/10 smooth-transition"
                      >
                        {/* Fecha con icono */}
                        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-3 group-hover:text-teal-400 smooth-transition">
                          <Calendar size={14} />
                          <time className="font-medium">{exp.date}</time>
                        </div>
                        
                        {/* Título del trabajo */}
                        <h3 className="text-2xl font-semibold text-zinc-100 mb-2 group-hover:text-teal-400 smooth-transition flex items-center gap-2">
                          {exp.title}
                          <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 smooth-transition" />
                        </h3>
                        
                        {/* Empresa con enlace */}
                        {exp.companyUrl ? (
                          <a 
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-400 smooth-transition hover:text-teal-400 inline-flex items-center gap-2 mb-4 font-medium"
                          >
                            {exp.company}
                            <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
                          </a>
                        ) : (
                          <p className="text-zinc-400 mb-4 font-medium">{exp.company}</p>
                        )}
                        
                        {/* Descripción */}
                        <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 smooth-transition">
                          {exp.description}
                        </p>
                      </article>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECCIÓN: PROYECTOS */}
        {/* ============================================ */}
        <section 
          id="projects"
          ref={projectsReveal.ref as React.RefObject<HTMLElement>}
          className={`${sectionClass} transition-all duration-1000 ease-out transform ${
            projectsReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-20 translate-y-6'
          }`}
        >
          {/* Título alineado a la izquierda */}
          <h2 className="text-3xl font-bold mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
            <span className="smooth-transition">{t('sections.projects')}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </h2>
          
          {/* Grid centrado */}
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
              {portfolioData.projects.map((project, index) => (
                <article 
                  key={index}
                  className="group bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 smooth-transition shadow-lg"
                >
                  {/* Placeholder de imagen del proyecto */}
                  <div className="h-48 w-full bg-zinc-800 group-hover:bg-zinc-700 smooth-transition" />

                  <div className="p-12 md:p-16 space-y-5">
                    {/* Título del proyecto */}
                    <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-teal-400 smooth-transition flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowRight 
                        size={18} 
                        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 smooth-transition" 
                      />
                    </h3>

                    {/* Descripción */}
                    <p className="text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Enlaces */}
                    <div className="pt-3 flex gap-4">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-teal-400 hover:text-teal-300 smooth-transition inline-flex items-center gap-2"
                        >
                          Ver proyecto
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-zinc-300 hover:text-teal-300 smooth-transition inline-flex items-center gap-2"
                        >
                          <Github size={14} />
                          Código
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECCIÓN: SOBRE MÍ */}
        {/* ============================================ */}
        <section 
          id="about"
          ref={aboutReveal.ref as React.RefObject<HTMLElement>}
          className={`${sectionClass} transition-all duration-1000 ease-out transform ${
            aboutReveal.isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-20 translate-y-6'
          }`}
        >
          {/* Título alineado a la izquierda */}
          <h2 className="text-3xl font-bold mb-12 text-zinc-50 flex items-center gap-3 text-left self-start w-full">
            <span className="smooth-transition">{t('sections.about')}</span>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </h2>
          
          {/* Contenido centrado en grid */}
          <div className="flex flex-col items-center w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full max-w-4xl">
              {/* Columna Izquierda: Placeholder de foto */}
              <div className="w-full h-full">
                <div className="aspect-[4/5] w-full bg-zinc-800 rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                  {portfolioData.about.image ? (
                    <img 
                      src={portfolioData.about.image}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-zinc-500 text-center px-6">
                      <p className="text-lg font-semibold">Tu Foto Aquí</p>
                      <p className="text-sm text-zinc-400">Usa un retrato 4:5 para un look editorial</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Columna Derecha: Tarjeta de contenido */}
              <div className="bg-zinc-900/50 p-12 md:p-16 rounded-2xl border border-zinc-800 shadow-lg space-y-6">
                <div className="space-y-4">
                  {portfolioData.about.paragraphs.map((paragraph, index) => (
                    <p 
                      key={index}
                      className="text-zinc-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Redes sociales en About */}
                <div className="flex gap-6 pt-4">
                  <a 
                    href={`mailto:${portfolioData.email}`}
                    className="smooth-transition text-zinc-400 hover:text-teal-400 hover:scale-110 p-3 rounded-lg hover:bg-zinc-800/60"
                    aria-label="Email"
                  >
                    <Mail size={24} strokeWidth={1.5} />
                  </a>
                  {portfolioData.socialLinks.map((social) => (
                    <SocialIcon key={social.name} social={social} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FOOTER */}
        {/* ============================================ */}
        <footer className="w-full max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800 text-center text-zinc-500 text-sm space-y-4">
          <p className="smooth-transition hover:text-teal-400">
            © 2024 {portfolioData.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-zinc-600">
            Hecho con React + Vite + Tailwind CSS
          </p>
        </footer>
      </main>
    </div>
  );
}

// ============================================
// COMPONENTE: ICONO DE RED SOCIAL
// ============================================
// Renderiza iconos de redes con efectos hover mejorados
function SocialIcon({ social }: { social: SocialLink }) {
  const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
    Github,
    Linkedin,
    Twitter,
    Instagram,
  };
  
  const Icon = iconMap[social.icon] || ExternalLink;
  
  return (
    <a 
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="smooth-transition text-zinc-400 hover:text-teal-400 hover:scale-125 p-3 rounded-lg hover:bg-zinc-800/50"
      aria-label={social.name}
      title={social.name}
    >
      <Icon size={28} strokeWidth={1.5} />
    </a>
  );
}

export default App;
