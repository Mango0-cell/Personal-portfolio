import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../utils';
import { LanguageSelector } from '../LanguageSelector';
import { useNavigation } from '../../hooks/useNavigation';


export function Navbar() {
  const { navLinks, isOpen, scrolled, toggleMenu, closeMenu } = useNavigation();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="w-full max-w-6xl flex items-center justify-between py-4 md:py-3">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-zinc-100 hover:text-teal-400 transition-all duration-300"
          >
            {portfolioData.name.split(' ')[0]}
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base md:text-lg font-medium text-zinc-300 hover:text-teal-400 transition-all duration-300 relative group"
                onClick={closeMenu}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <button
              className="md:hidden text-zinc-300 hover:text-teal-400 transition-all duration-300 p-2 hover:bg-zinc-800/50 rounded-lg"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full flex justify-center px-4 md:px-6 bg-zinc-950/95 backdrop-blur-md">
          <div className="w-full max-w-7xl pb-4 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-base font-medium text-zinc-300 hover:text-teal-400 transition-all duration-300 py-3 px-2 hover:bg-zinc-800/50 rounded-lg"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
