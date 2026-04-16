import type { ExperienceItem, PortfolioData, ProjectItem, SocialLink } from '../types';

export const portfolioData: PortfolioData = {
    name: 'Eduardo Meneses',
    email: 'eduardo.meneses@utp.edu.co',
    profileImage: '/assets/photo-circle.jpeg',
    socialLinks: [
        {
            name: 'GitHub',
            url: 'https://github.com/Mango0-cell',
            icon: 'Github'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/eduardo-meneses-4127753b6/',
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

export const projects: ProjectItem[] = [
    {
        id: 'navidad',
        translationKey: 'projects.navidad',
        link: 'https://mango0-cell.github.io/armando-la-navidad-HTML-y-CSS-puro/',
        github: 'https://github.com/Mango0-cell/Armando-la-Navidad-HTML-y-CSS-puro',
        techStack: ['HTML5 Puro', 'CSS3'],
        image: '/assets/projects/ArmandoNavidad.png'
    },
    {
        id: 'news',
        translationKey: 'projects.news',
        link: 'https://portal-de-noticias-umber.vercel.app/',
        github: 'https://github.com/Mango0-cell/Portal-de-Noticias',
        techStack: ['React', 'TypeScript', 'RTK Query', 'Tailwind CSS'],
        image: '/assets/projects/PortalNoticias.png'
    },
    {
        id: 'ui_clone',
        translationKey: 'projects.ui_clone',
        link: 'https://vary-raft-57916228.figma.site/',
        github: 'https://github.com/Mango0-cell/Clonacion-de-UI-Web',
        techStack: ['Figma', 'UX/UI', 'Web Design'],
        image: '/assets/projects/ClonacionUIWeb.png'
    },
    {
        id: 'kanban',
        translationKey: 'projects.kanban',
        link: 'https://kanban-app-full-stack.vercel.app',
        github: 'https://github.com/Mango0-cell/My-Full-Stack-App-Kanban',
        techStack: ['React', 'NestJS', 'TypeScript', 'Docker', 'AWS', 'WebSockets'],
        image: '/assets/projects/AppKanban.png'
    },
];
