import type { Localized } from '../i18n';

export interface Education {
  degreeType: Localized;
  degree: Localized;
  institution: string;
  period: string;
  url: string;
  description: Localized;
}

export const education: Education[] = [
  {
    degreeType: { en: "Bachelor's Degree", es: 'Grado', de: 'Bachelorabschluss' },
    degree: { en: 'Software Engineering', es: 'Ingeniería del Software', de: 'Software Engineering' },
    institution: 'Universidad Politécnica de Madrid',
    period: '2010 – 2015',
    url: 'https://www.upm.es/internacional/Students/StudiesDegrees/OfficialUndergraduateDegrees/Relationed%20Articles?fmt=detail&prefmt=articulo&id=3388060c9abe0210VgnVCM10000009c7648a____',
    description: {
      en: 'Comprehensive education in software design, algorithms, data structures, systems programming, and software architecture. Final thesis focused on good architecture practices and how to choose the best option during development.',
      es: 'Formación completa en diseño de software, algoritmos, estructuras de datos, programación de sistemas y arquitectura de software. El trabajo de fin de grado se centró en buenas prácticas de arquitectura y en cómo elegir la mejor opción durante el desarrollo.',
      de: 'Umfassende Ausbildung in Softwaredesign, Algorithmen, Datenstrukturen, Systemprogrammierung und Softwarearchitektur. Die Abschlussarbeit befasste sich mit guten Architekturpraktiken und damit, wie man während der Entwicklung die beste Option wählt.',
    },
  },
];
