export interface SocialLink {
  name: string;
  url: string;
  icon: 'Github' | 'Linkedin' | 'Twitter' | 'Instagram';
}

export interface ExperienceItem {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
}

export interface PortfolioData {
  name: string;
  email: string;
  profileImage?: string;
  socialLinks: SocialLink[];
}

export interface TranslationResources {
  nav: Record<string, string>;
  hero: {
    role: string;
    bio: string;
  };
  sections: {
    experience: string;
    projects: string;
    about: string;
  };
  experience: ExperienceItem[];
  projects: ProjectItem[];
  about: {
    title: string;
    paragraphs: string[];
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}
