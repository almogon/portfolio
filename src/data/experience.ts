import type { Localized } from '../i18n';

// Dates are 'YYYY-MM' or 'YYYY'; a role without `end` is the current one.
// Roles are listed newest first.
export interface Role {
  title: Localized;
  start: string;
  end?: string;
}

export interface Experience {
  company: string;
  url: string;
  summary: Localized;
  roles: Role[];
  highlights: Localized<string[]>;
  stack: string[];
}

const fullStackDeveloper: Localized = {
  en: 'Full Stack Developer',
  es: 'Desarrollador full stack',
  de: 'Full-Stack-Entwickler',
};

const softwareEngineer: Localized = {
  en: 'Software Engineer',
  es: 'Ingeniero de software',
  de: 'Software Engineer',
};

export const experiences: Experience[] = [
  {
    company: 'Schrankerl',
    url: 'https://schrankerl.at',
    summary: {
      en: 'Company that offers fresh and varied food for companies, preparing custom menus based on preferences and profiles.',
      es: 'Empresa que ofrece comida fresca y variada a empresas, preparando menús personalizados según preferencias y perfiles.',
      de: 'Unternehmen, das Firmen mit frischem und abwechslungsreichem Essen versorgt und individuelle Menüs nach Vorlieben und Profilen zusammenstellt.',
    },
    roles: [
      { title: { en: 'Tech Lead', es: 'Tech Lead', de: 'Tech Lead' }, start: '2025-02' },
      { title: softwareEngineer, start: '2023-02', end: '2025-02' },
      { title: fullStackDeveloper, start: '2022-02', end: '2023-02' },
    ],
    highlights: {
      en: [
        'Lead a team of 4, supervising tasks and making sure they are delivered on time.',
        'Own the decisions about our tools and software architecture.',
        'Maintenance and quality work across all our systems.',
        'Modular backend on Odoo.sh and a frontend built with the latest version of Angular.',
      ],
      es: [
        'Lidero un equipo de 4 personas, supervisando las tareas y asegurando que se entreguen a tiempo.',
        'Tomo las decisiones sobre nuestras herramientas y la arquitectura de software.',
        'Tareas de mantenimiento y calidad en todos nuestros sistemas.',
        'Backend modular en Odoo.sh y frontend desarrollado con la última versión de Angular.',
      ],
      de: [
        'Leitung eines 4-köpfigen Teams: Aufgaben steuern und sicherstellen, dass sie termingerecht geliefert werden.',
        'Verantwortung für die Entscheidungen zu Tools und Softwarearchitektur.',
        'Wartung und Qualitätssicherung aller unserer Systeme.',
        'Modulares Backend auf Odoo.sh und ein Frontend mit der neuesten Angular-Version.',
      ],
    },
    stack: ['Odoo.sh', 'Python', 'Angular', 'TypeScript'],
  },
  {
    company: 'Solvistas',
    url: 'https://www.solvistas.com/de',
    summary: {
      en: 'Provides data science solutions and services in classic disciplines such as analytics, data management, business intelligence and digitalization.',
      es: 'Ofrece soluciones y servicios de ciencia de datos en disciplinas clásicas como analítica, gestión de datos, business intelligence y digitalización.',
      de: 'Bietet Data-Science-Lösungen und -Services in klassischen Disziplinen wie Analytics, Datenmanagement, Business Intelligence und Digitalisierung.',
    },
    roles: [{ title: softwareEngineer, start: '2020-09', end: '2022-02' }],
    highlights: {
      en: [
        'Built REST APIs with Java Spring, including testing and documentation.',
        'Designed and implemented components, models and views for the web application with Angular and TypeScript.',
        'Developed the Relv.io mobile app with React Native on Firebase.',
        'Led the team: architecture decisions, task management and feature development.',
        'Scrum Master for half a year.',
      ],
      es: [
        'Desarrollo de APIs REST con Java Spring, incluyendo tests y documentación.',
        'Diseño e implementación de componentes, modelos y vistas para la aplicación web con Angular y TypeScript.',
        'Desarrollo de la app móvil Relv.io con React Native sobre Firebase.',
        'Liderazgo del equipo: decisiones de arquitectura, gestión de tareas y desarrollo de funcionalidades.',
        'Scrum Master durante medio año.',
      ],
      de: [
        'Entwicklung von REST-APIs mit Java Spring, inklusive Tests und Dokumentation.',
        'Design und Umsetzung von Komponenten, Modellen und Views für die Webanwendung mit Angular und TypeScript.',
        'Entwicklung der mobilen App Relv.io mit React Native auf Firebase.',
        'Teamleitung: Architekturentscheidungen, Aufgabenmanagement und Feature-Entwicklung.',
        'Ein halbes Jahr als Scrum Master tätig.',
      ],
    },
    stack: ['Java Spring', 'Angular', 'TypeScript', 'React Native', 'Firebase'],
  },
  {
    company: 'TMC',
    url: 'https://www.tmconnected.com/en/home/',
    summary: {
      en: 'Focused on solutions for rail infrastructure and rail traffic management.',
      es: 'Centrada en soluciones para infraestructura ferroviaria y gestión del tráfico ferroviario.',
      de: 'Spezialisiert auf Lösungen für Bahninfrastruktur und Bahnverkehrsmanagement.',
    },
    roles: [{ title: fullStackDeveloper, start: '2018-07', end: '2020-09' }],
    highlights: {
      en: [
        'Designed and developed several backend and frontend projects.',
        'Built REST web services and cloud data structures on Amazon Web Services (AWS).',
        'Designed and implemented new views and components with Angular and TypeScript.',
      ],
      es: [
        'Diseño y desarrollo de varios proyectos de backend y frontend.',
        'Desarrollo de servicios web REST y estructuras de datos en la nube con Amazon Web Services (AWS).',
        'Diseño e implementación de nuevas vistas y componentes con Angular y TypeScript.',
      ],
      de: [
        'Design und Entwicklung mehrerer Backend- und Frontend-Projekte.',
        'Entwicklung von REST-Webservices und Cloud-Datenstrukturen auf Amazon Web Services (AWS).',
        'Design und Umsetzung neuer Views und Komponenten mit Angular und TypeScript.',
      ],
    },
    stack: ['AWS', 'REST', 'Angular', 'TypeScript'],
  },
  {
    company: 'Babel S.I',
    url: 'https://babelgroup.com/en/',
    summary: {
      en: 'Helps companies improve their business processes and digital transformation.',
      es: 'Ayuda a las empresas a mejorar sus procesos de negocio y su transformación digital.',
      de: 'Unterstützt Unternehmen bei der Verbesserung ihrer Geschäftsprozesse und ihrer digitalen Transformation.',
    },
    roles: [
      { title: fullStackDeveloper, start: '2015-09', end: '2018-07' },
      { title: { en: 'Intern', es: 'Becario', de: 'Praktikant' }, start: '2015-03', end: '2015-09' },
    ],
    highlights: {
      en: [
        'Designed and implemented backend services with Spring Boot and Maven.',
        'Modelled and created new Oracle databases.',
        'Implemented hybrid apps with Ionic, based on microservices and components.',
        'As an intern, learned to deliver end to end: defining when a project starts, choosing technologies and architecture, and implementing frontend and backend services.',
      ],
      es: [
        'Diseño e implementación de servicios backend con Spring Boot y Maven.',
        'Modelado y creación de nuevas bases de datos en Oracle.',
        'Desarrollo de apps híbridas con Ionic, basadas en microservicios y componentes.',
        'Como becario, aprendí a entregar de principio a fin: definir cuándo arranca un proyecto, elegir tecnologías y arquitectura, e implementar servicios de frontend y backend.',
      ],
      de: [
        'Design und Umsetzung von Backend-Services mit Spring Boot und Maven.',
        'Modellierung und Aufbau neuer Oracle-Datenbanken.',
        'Entwicklung hybrider Apps mit Ionic auf Basis von Microservices und Komponenten.',
        'Als Praktikant lernte ich, Projekte von Anfang bis Ende umzusetzen: den Projektstart definieren, Technologien und Architektur auswählen sowie Frontend- und Backend-Services implementieren.',
      ],
    },
    stack: ['Spring Boot', 'Maven', 'Oracle', 'Ionic'],
  },
];
