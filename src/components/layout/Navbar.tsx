import { Menu, X } from 'lucide-react';
import { portfolioData } from '../../data';
import LanguageSwitcher from '../../LanguageSwitcher';
import { useNavigation } from '../../hooks/useNavigation';

export function Navbar() {
  const { navLinks, isOpen, scrolled, toggleMenu, closeMenu } = useNavigation();

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 smooth-transition ${
        scrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-center px-6">
        <div className="w-full max-w-7xl flex items-center justify-between py-6">
          <a
            href="#home"
            className="text-2xl font-bold text-zinc-100 hover:text-teal-400 smooth-transition"
          >
            {portfolioData.name.split(' ')[0]}
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-zinc-300 hover:text-teal-400 smooth-transition relative group"
                onClick={closeMenu}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full smooth-transition"></span>
              </a>
            ))}
          </div>

          <div className="hidden md:flex">
            <LanguageSwitcher />
          </div>

          <div className="flex items-center gap-3">
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
            <button
              className="md:hidden text-zinc-300 hover:text-teal-400 smooth-transition"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full flex justify-center px-6">
          <div className="w-full max-w-7xl pb-4 space-y-4 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-zinc-300 hover:text-teal-400 smooth-transition py-2 border-b border-zinc-800"
                onClick={closeMenu}
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
