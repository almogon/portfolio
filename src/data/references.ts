import type { Localized } from '../i18n';

export interface Reference {
  name: string;
  role: Localized;
  company: string;
  description: Localized;
  email?: string;
  linkedIn: string;
}

export const references: Reference[] = [
  {
    name: 'Alberto Salamanca Rico',
    role: { en: 'Direct Manager', es: 'Responsable directo', de: 'Direkter Vorgesetzter' },
    company: 'Babel S.I',
    description: {
      en: 'Can speak about my growth and adaptability.',
      es: 'Puede hablar de mi crecimiento y mi capacidad de adaptación.',
      de: 'Kann über meine Entwicklung und Anpassungsfähigkeit berichten.',
    },
    linkedIn: 'https://es.linkedin.com/in/albertosalamanca',
  },
  {
    name: 'Senen González',
    role: {
      en: 'Senior expert for Data Management and Analysis',
      es: 'Experto sénior en gestión y análisis de datos',
      de: 'Senior-Experte für Datenmanagement und -analyse',
    },
    company: 'Track Machines Connected',
    description: {
      en: 'Can speak about backend design decisions, mentoring, and impact on the team.',
      es: 'Puede hablar de decisiones de diseño de backend, mentoring e impacto en el equipo.',
      de: 'Kann über Backend-Designentscheidungen, Mentoring und meinen Beitrag im Team berichten.',
    },
    email: 'senen.gonzalez@tmc.at',
    linkedIn: 'https://at.linkedin.com/in/dr-senen-gonzalez-62394b172',
  },
  {
    name: 'Sara Mari-Strasser',
    role: { en: 'CEO', es: 'CEO', de: 'CEO' },
    company: 'Schrankerl',
    description: {
      en: 'Can provide context on communication, ownership, and delivery under deadlines as a tech leader.',
      es: 'Puede aportar contexto sobre comunicación, responsabilidad y entregas con plazos ajustados como tech lead.',
      de: 'Kann über Kommunikation, Verantwortungsbewusstsein und termingerechte Lieferung in meiner Rolle als Tech Lead berichten.',
    },
    email: 'sara@schrankerl.at',
    linkedIn: 'https://at.linkedin.com/in/sara-mari-strasser',
  },
];
