import type { ExperienceItem, PortfolioData, ProjectItem, SocialLink } from './types';

export const portfolioData: PortfolioData = {
    name: 'Eduardo Meneses',
    email: 'eduardo.meneses@utp.edu.co',
    profileImage: '/src/assets/profile-picture.jpeg',
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

// Experiencia: solo datos estructurales + translationKey
export const experiences: ExperienceItem[] = [
    {
        id: 'exp-1',
        translationKey: 'experience.0',
        companyUrl: 'https://techcompany.com'
    },
    {
        id: 'exp-2',
        translationKey: 'experience.1',
        companyUrl: 'https://techcompany.com'
    },
    {
        id: 'exp-3',
        translationKey: 'experience.2',
        companyUrl: 'https://techcompany.com'
    }
];

// Proyectos: datos estructurales + translationKey
export const projects: ProjectItem[] = [
    {
        id: 'project-1',
        translationKey: 'projects.0',
        link: '#',
        github: 'https://github.com/Mango0-cell/Armando-la-Navidad-HTML-y-CSS-puro',
        techStack: ['HTML5', 'CSS3']
    },
    {
        id: 'project-2',
        translationKey: 'projects.1',
        link: '#',
        github: 'https://github.com/Mango0-cell/Portal-de-Noticias',
        techStack: ['TypeScript', 'React', 'Tailwind', 'CSS', 'RTK Query']
    },
    {
        id: 'project-3',
        translationKey: 'projects.2',
        link: '#',
        github: 'https://github.com/Mango0-cell/Clonacion-de-UI-Web',
        techStack: ['Figma', 'UX/UI']
    },
    {
        id: 'project-4',
        translationKey: 'projects.3',
        link: '#',
        github: 'https://github.com/Mango0-cell/My-Full-Stack-App-Kanban',
        techStack: ['Next.js', 'NestJS', 'TypeScript', 'Docker', 'AWS', 'React']
    },
    {
        id: 'project-5',
        translationKey: 'projects.4',
        link: '#',
        github: 'https://github.com/Mango0-cell/personal-portfolio',
        techStack: ['i18n', 'React', 'Tailwind']
    }
];
