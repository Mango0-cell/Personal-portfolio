// ============================================
// ARCHIVO DE CONFIGURACIÓN DE DATOS
// ============================================
// Todas las secciones del portafolio se alimentan de estos datos

export interface SocialLink {
    name: string;
    url: string;
    icon: string; 
}

export interface Experience {
    date: string;
    title: string;
    company: string;
    companyUrl?: string;
    description: string;
}

export interface Project {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    github?: string;
}

export interface PortfolioData {
    // Información personal
    name: string;
    role: string;
    bio: string;
    email: string;

    // Redes sociales
    socialLinks: SocialLink[];

    // Experiencia laboral
    experience: Experience[];

    // Proyectos destacados
    projects: Project[];

    // Sobre mí
    about: {
        title: string;
        paragraphs: string[];
        image: string;
    };
}


export const portfolioData: PortfolioData = {
    // Sección: Encabezado / Hero
    name: "Eduardo Meneses",
    role: "Desarrollador Full Stack",
    bio: "Desarrollador de Software motivado, comprometido con el aprendizaje continuo y la participación activa en proyectos de desarrollo tanto en Backend como en Frontend. Capaz de crear soluciones escalables y centradas en el usuario.",
    email: "eduardo.meneses@utp.edu.co",
    

    // Sección: Enlaces de redes sociales
    socialLinks: [
        {
            name: "GitHub",
            url: "https://github.com/Mango0-cell",
            icon: "Github"
        },
        {
            name: "LinkedIn",
            url: "#",
            icon: "Linkedin"
        },
        {
            name: "Twitter",
            url: "#",
            icon: "Twitter"
        },
        {
            name: "Instagram",
            url: "https://instagram.com/storxm._",
            icon: "Instagram"
        }
    ],

    experience: [
        {
            date: "Ene, 2026 - Presente",
            title: "Full Stack Developer",
            company: "--------------",
            companyUrl: "https://techcompany.com",
            description: ""
        },
        {
                        date: "Ene, 2026 - Presente",
            title: "Full Stack Developer",
            company: "--------------",
            companyUrl: "https://techcompany.com",
            description: ""
        },
        {
                       date: "Ene, 2026 - Presente",
            title: "Full Stack Developer",
            company: "--------------",
            companyUrl: "https://techcompany.com",
            description: ""
        }
    ],

    // Sección: Proyectos destacados
    projects: [
        {
            title: "Armando la Navidad",
            description: "Desarrollé un juego interactivo utilizando exclusivamente CSS (sin frameworks ni JavaScript) para manejar layouts, tipografías y colores. Creé animaciones complejas y transiciones fluidas, así como una lógica de aleatoriedad real y transformaciones CSS, garantizando también un diseño responsivo.",
            tags: ["HTML5 Puro", "CSS3"],
            link: "#",
            github: "https://github.com/Mango0-cell/Armando-la-Navidad-HTML-y-CSS-puro"
        },
        {
            title: "Portal de Noticias",
            description: "Construí una aplicación web moderna y responsiva que consume la News API para mostrar información en tiempo real, optimicé el rendimiento mediante RTK Query para el manejo eficiente del caché y el estado global de la aplicación y diseñé una interfaz de usuario avanzada con modo claro/oscuro sincronizado. ",
            tags: ["TypeScript", "React", "Tailwind", "CSS", "RTK(redux) Query"],
            link: "#",
            github: "https://github.com/Mango0-cell/Portal-de-Noticias"
        },
        {
            title: "Clonacion-de-UI-Web",
            description: "Apliqué principios fundamentales de UX/UI para replicar fielmente una interfaz web existente, enfocándome en la precisión de espaciados, tipografía y jerarquía visual.",
            tags: ["Figma", "UX/UI Design"],
            link: "#",
            github: "https://github.com/Mango0-cell/Clonacion-de-UI-Web"

        },
        {
            title: "My Full Stack App - Kanban",
            description: "Desarrollé una aplicación web Full Stack tipo Kanban con autenticación segura, gestión CRUD completa y edición de contenido en Markdown. Implementé funcionalidades interactivas avanzadas como drag and drop para tareas y columnas, y un chat en tiempo real utilizando WebSockets. Arquitectura Backend modular: API REST construida con NestJS y TypeORM, dockerizada para ser lanzada a través de un ciclo CD. Infraestructura y Despliegue: Configuración de base de datos PostgreSQL y despliegue del sistema en AWS EC2 utilizando contenedores Docker en una misma instancia, asegurando comunicación instantanea, con copias de seguridad constantes. ",
            tags: ["Next.js", "NestJS", "TypeScript", "Docker", "AWS", "React"],
            link: "#",
            github: "https://github.com/Mango0-cell/My-Full-Stack-App-Kanban"

        },
        {
            title: "Portafolio Personal",
            description: "Contruí mi portafolio personal utilizando React, Tailwind CSS implementando i18next, react-i18next y i18next-browser-languagedetector.",
            tags: ["i18n", "React"],
            link: "#",
            github: "https://github.com/Mango0-cell/personal-portfolio"

        }
    ],

    // Sección: Sobre mí
    about: {
        title: "Sobre mí",
        paragraphs: [
            "Soy un desarrollador apasionado por la tecnología y la innovación. Desde temprana edad me ha fascinado el mundo del desarrollo de software.",
            "Me encanta aprender nuevas tecnologías y enfrentar desafíos complejos. En mi tiempo libre, contribuyo a proyectos de código abierto para aprender del conocimiento con la comunidad.",
            "Mi objetivo es crear aplicaciones que no solo funcionen bien, sino que también proporcionen una experiencia excepcional al usuario."
        ],
        image: "/src/assets/profile-picture.jpeg", 
    }
};
