export interface SocialLink {
  name: string;
  url: string;
  icon: 'Github' | 'Linkedin' | 'Twitter' | 'Instagram';
}

export interface ExperienceItem {
  id: string;
  translationKey: string;
  companyUrl?: string;
}

export interface ProjectItem {
  id: string;
  translationKey: string;
  image?: string;
  link?: string;
  github?: string;
  techStack?: string[];
}

// Formato del contenido traducible
export interface ExperienceCopy {
  date: string;
  title: string;
  company: string;
  description: string;
}

export interface ProjectCopy {
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
  experience: ExperienceCopy[];
  projects: ProjectCopy[];
  about: {
    title: string;
    paragraphs: string[];
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
}
