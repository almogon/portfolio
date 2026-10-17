export const languages = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
} as const;

export type Lang = keyof typeof languages;

export const langs = Object.keys(languages) as Lang[];

export const defaultLang: Lang = 'en';

/** A value translated into every supported language */
export type Localized<T = string> = Record<Lang, T>;

export const ogLocale: Localized = {
  en: 'en_US',
  es: 'es_ES',
  de: 'de_AT',
};

/** Path of the home page for a language: '/', '/es/', '/de/' */
export const localePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);

export const ui = {
  en: {
    meta: {
      title: (name: string) => `${name} — Tech Lead & Full Stack Developer`,
      description: (name: string, years: number) =>
        `${name} is a tech lead and full stack developer based in Austria, open to remote work, with ${years}+ years of experience building web products with TypeScript, Angular and Python.`,
    },
    nav: {
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      references: 'References',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      backToTop: 'back to top',
      language: 'Language',
      skipLink: 'Skip to content',
    },
    hero: {
      subtitle: '& tech lead',
      intro: (years: number) => `${years}+ years building web products with TypeScript, Angular and Python.`,
      intro2: 'I lead development teams, shape software architecture and still enjoy shipping code.',
      cta: 'Get in touch',
      scroll: 'Scroll to see more',
    },
    experience: {
      title: 'Experience',
      progression: 'Career progression',
      current: 'Current',
      present: 'Present',
      stack: (company: string) => `${company} tech stack`,
      years: (n: number) => `${n} ${n === 1 ? 'yr' : 'yrs'}`,
      months: (n: number) => `${n} ${n === 1 ? 'mo' : 'mos'}`,
    },
    skills: {
      title: 'Skills',
      intro:
        'As a full stack developer, I have had the privilege of working with a wide range of technologies across the entire stack, and as a tech lead, with the people building it.',
      main: 'Main languages',
    },
    education: {
      title: 'Education',
    },
    references: {
      title: 'References',
      intro: 'People I have worked with who can talk about how I work.',
      onLinkedIn: (name: string) => `${name} on LinkedIn`,
      emailTo: (name: string) => `Email ${name}`,
    },
    contact: {
      title: 'Contact',
      lead: "Let's build something together.",
      body: 'Whether it is a role, a project or a technical conversation, I am happy to hear from you. I am based in Austria and open to remote work. Email is the quickest way to reach me.',
      sendEmail: 'Send an email',
      connect: 'Connect on LinkedIn',
      email: 'Email',
    },
    footer: {
      builtWith: 'Built with Astro',
      source: 'View source',
    },
  },
  es: {
    meta: {
      title: (name: string) => `${name} — Tech Lead y desarrollador full stack`,
      description: (name: string, years: number) =>
        `${name} es tech lead y desarrollador full stack en Austria, abierto a trabajar en remoto, con más de ${years} años de experiencia creando productos web con TypeScript, Angular y Python.`,
    },
    nav: {
      experience: 'Experiencia',
      skills: 'Habilidades',
      education: 'Formación',
      references: 'Referencias',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      backToTop: 'volver arriba',
      language: 'Idioma',
      skipLink: 'Saltar al contenido',
    },
    hero: {
      subtitle: '& tech lead',
      intro: (years: number) => `Más de ${years} años creando productos web con TypeScript, Angular y Python.`,
      intro2: 'Lidero equipos de desarrollo, diseño arquitecturas de software y sigo disfrutando de escribir código.',
      cta: 'Hablemos',
      scroll: 'Desplázate para ver más',
    },
    experience: {
      title: 'Experiencia',
      progression: 'Evolución profesional',
      current: 'Actual',
      present: 'Actualidad',
      stack: (company: string) => `Tecnologías en ${company}`,
      years: (n: number) => `${n} ${n === 1 ? 'año' : 'años'}`,
      months: (n: number) => `${n} ${n === 1 ? 'mes' : 'meses'}`,
    },
    skills: {
      title: 'Habilidades',
      intro:
        'Como desarrollador full stack he tenido la oportunidad de trabajar con una gran variedad de tecnologías en todo el stack y, como tech lead, con las personas que lo construyen.',
      main: 'Lenguajes principales',
    },
    education: {
      title: 'Formación',
    },
    references: {
      title: 'Referencias',
      intro: 'Personas con las que he trabajado y que pueden hablar de cómo trabajo.',
      onLinkedIn: (name: string) => `${name} en LinkedIn`,
      emailTo: (name: string) => `Escribir a ${name}`,
    },
    contact: {
      title: 'Contacto',
      lead: 'Construyamos algo juntos.',
      body: 'Ya sea un puesto, un proyecto o una conversación técnica, estaré encantado de escucharte. Vivo en Austria y estoy abierto a trabajar en remoto. El email es la forma más rápida de contactarme.',
      sendEmail: 'Enviar un email',
      connect: 'Conectar en LinkedIn',
      email: 'Email',
    },
    footer: {
      builtWith: 'Hecho con Astro',
      source: 'Ver código fuente',
    },
  },
  de: {
    meta: {
      title: (name: string) => `${name} — Tech Lead & Full-Stack-Entwickler`,
      description: (name: string, years: number) =>
        `${name} ist Tech Lead und Full-Stack-Entwickler in Österreich, offen für Remote-Arbeit, mit über ${years} Jahren Erfahrung in der Entwicklung von Webprodukten mit TypeScript, Angular und Python.`,
    },
    nav: {
      experience: 'Erfahrung',
      skills: 'Kenntnisse',
      education: 'Ausbildung',
      references: 'Referenzen',
      contact: 'Kontakt',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      backToTop: 'zurück nach oben',
      language: 'Sprache',
      skipLink: 'Zum Inhalt springen',
    },
    hero: {
      subtitle: '& Tech Lead',
      intro: (years: number) =>
        `Über ${years} Jahre Erfahrung in der Entwicklung von Webprodukten mit TypeScript, Angular und Python.`,
      intro2: 'Ich leite Entwicklungsteams, gestalte Softwarearchitekturen und schreibe weiterhin gerne Code.',
      cta: 'Kontakt aufnehmen',
      scroll: 'Scrollen für mehr',
    },
    experience: {
      title: 'Berufserfahrung',
      progression: 'Karriereverlauf',
      current: 'Aktuell',
      present: 'heute',
      stack: (company: string) => `Tech-Stack bei ${company}`,
      years: (n: number) => `${n} J.`,
      months: (n: number) => `${n} Mon.`,
    },
    skills: {
      title: 'Kenntnisse',
      intro:
        'Als Full-Stack-Entwickler durfte ich mit einer großen Bandbreite an Technologien über den gesamten Stack arbeiten – und als Tech Lead mit den Menschen, die ihn bauen.',
      main: 'Hauptsprachen',
    },
    education: {
      title: 'Ausbildung',
    },
    references: {
      title: 'Referenzen',
      intro: 'Menschen, mit denen ich zusammengearbeitet habe und die erzählen können, wie ich arbeite.',
      onLinkedIn: (name: string) => `${name} auf LinkedIn`,
      emailTo: (name: string) => `E-Mail an ${name}`,
    },
    contact: {
      title: 'Kontakt',
      lead: 'Lassen Sie uns gemeinsam etwas bauen.',
      body: 'Ob eine Stelle, ein Projekt oder ein technischer Austausch – ich freue mich, von Ihnen zu hören. Ich lebe in Österreich und bin offen für Remote-Arbeit. Am schnellsten erreichen Sie mich per E-Mail.',
      sendEmail: 'E-Mail senden',
      connect: 'Auf LinkedIn vernetzen',
      email: 'E-Mail',
    },
    footer: {
      builtWith: 'Erstellt mit Astro',
      source: 'Quellcode ansehen',
    },
  },
} as const;

export const useTranslations = (lang: Lang) => ui[lang];
