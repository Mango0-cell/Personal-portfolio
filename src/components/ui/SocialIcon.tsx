import { ExternalLink, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import type { ComponentType } from 'react';
import type { SocialLink } from '../../types';

const iconMap: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  Github,
  Linkedin,
  Twitter,
  Instagram
};

export function SocialIcon({ social }: { social: SocialLink }) {
  const Icon = iconMap[social.icon] || ExternalLink;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-all duration-300 text-zinc-400 hover:text-teal-400 hover:scale-110 p-2 md:p-3 rounded-lg hover:bg-zinc-800/50"
      aria-label={social.name}
      title={social.name}
    >
      <Icon size={22} strokeWidth={1.5} />
    </a>
  );
}
