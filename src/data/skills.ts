import type { Localized } from '../i18n';

export interface SkillGroup {
  label: Localized;
  skills: (string | Localized)[];
  /** Skills highlighted as the strongest ones in the group */
  main?: string[];
  wide?: boolean;
}

export const skillGroups: SkillGroup[] = [
  {
    label: { en: 'Leadership & Practices', es: 'Liderazgo y prácticas', de: 'Führung & Methoden' },
    wide: true,
    skills: [
      { en: 'Technical leadership', es: 'Liderazgo técnico', de: 'Technische Führung' },
      { en: 'Software architecture', es: 'Arquitectura de software', de: 'Softwarearchitektur' },
      'Mentoring',
      'Scrum',
      { en: 'REST API design', es: 'Diseño de APIs REST', de: 'REST-API-Design' },
      { en: 'Testing & documentation', es: 'Testing y documentación', de: 'Testing & Dokumentation' },
    ],
  },
  {
    label: { en: 'Programming languages', es: 'Lenguajes de programación', de: 'Programmiersprachen' },
    skills: ['Python', 'TypeScript', 'Java', 'JavaScript', 'SQL'],
    main: ['Python', 'TypeScript'],
  },
  {
    label: { en: 'Frameworks & Platforms', es: 'Frameworks y plataformas', de: 'Frameworks & Plattformen' },
    skills: ['Angular', 'Astro', 'Node.js', 'React', 'React Native', 'Spring Boot', 'Ionic', 'Odoo', 'Oracle APEX'],
  },
  {
    label: { en: 'Databases', es: 'Bases de datos', de: 'Datenbanken' },
    skills: ['Oracle', 'MySQL', 'DynamoDB', 'MongoDB', 'PostgreSQL'],
  },
  {
    label: { en: 'Cloud & DevOps', es: 'Cloud y DevOps', de: 'Cloud & DevOps' },
    skills: ['AWS', 'Firebase', 'Vercel', 'Odoo.sh', 'Docker'],
  },
  {
    label: { en: 'Spoken languages', es: 'Idiomas', de: 'Sprachen' },
    wide: true,
    skills: [
      { en: 'Spanish · Native', es: 'Español · Nativo', de: 'Spanisch · Muttersprache' },
      { en: 'English · B2', es: 'Inglés · B2', de: 'Englisch · B2' },
      { en: 'German · B1', es: 'Alemán · B1', de: 'Deutsch · B1' },
    ],
  },
];
