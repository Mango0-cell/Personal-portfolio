import type { ExperienceItem, PortfolioData, ProjectItem, SocialLink } from './types';

export const portfolioData: PortfolioData = {
    name: 'Eduardo Meneses',
    email: 'eduardo.meneses@utp.edu.co',
    profileImage: '/public/assets/profile-picture.jpeg',
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/Mango0-cell',
            icon: 'Github'
        },
        {
            name: 'LinkedIn',
            url: '#',
            icon: 'Linkedin'
        },
        {
            name: 'Twitter',
            url: '#',
            icon: 'Twitter'
        },
        {
            name: 'Instagram',
            url: 'https://instagram.com/storxm._',
            icon: 'Instagram'
        }
    ] as SocialLink[]
};

// Experiencia: solo datos estructurales + translationKey con claves de objeto
export const experiences: ExperienceItem[] = [
    {
        id: 'job1',
        translationKey: 'experience.job1',
        companyUrl: 'https://techcompany.com'
    },
    {
        id: 'job2',
        translationKey: 'experience.job2',
        companyUrl: 'https://techcompany.com'
    },
    {
        id: 'job3',
        translationKey: 'experience.job3',
        companyUrl: 'https://techcompany.com'
    }
];

// Proyectos: datos estructurales + translationKey con claves de objeto
export const projects: ProjectItem[] = [
    {
        id: 'navidad',
        translationKey: 'projects.navidad',
        link: 'https://mango0-cell.github.io/Armando-la-Navidad-HTML-y-CSS-puro/',
        github: 'https://github.com/Mango0-cell/Armando-la-Navidad-HTML-y-CSS-puro',
        techStack: ['HTML5 Puro', 'CSS3']
    },
    {
        id: 'news',
        translationKey: 'projects.news',
        link: '#',
        github: 'https://github.com/Mango0-cell/Portal-de-Noticias',
        techStack: ['React', 'TypeScript', 'RTK Query', 'Tailwind CSS']
    },
    {
        id: 'ui_clone',
        translationKey: 'projects.ui_clone',
        link: '#',
        github: 'https://github.com/Mango0-cell/Clonacion-de-UI-Web',
        techStack: ['Figma', 'UX/UI', 'Web Design']
    },
    {
        id: 'kanban',
        translationKey: 'projects.kanban',
        link: '#',
        github: 'https://github.com/Mango0-cell/My-Full-Stack-App-Kanban',
        techStack: ['React', 'NestJS', 'TypeScript', 'Docker', 'AWS', 'WebSockets']
    },
    {
        id: 'portfolio',
        translationKey: 'projects.portfolio',
        link: '#',
        github: 'https://github.com/Mango0-cell/personal-portfolio',
        techStack: ['React', 'Tailwind CSS', 'i18n', 'Vite']
    }
];
