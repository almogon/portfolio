import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import duellumIcon from '../assets/apps/duellum.png';
import rosterProIcon from '../assets/apps/rosterpro.png';

// Owner and contact registered in the app stores (used by the app privacy and support pages)
export const appOwner = {
  name: 'Álvaro Morales González',
  email: 'morales_rivas@hotmail.com',
};

// Store links (App Store / Google Play) are added here once the apps are live.
export interface App {
  name: string;
  icon: ImageMetadata;
  tagline: Localized;
  description: Localized;
  status: Localized;
  platforms: string[];
  stack: string[];
  website?: string;
  privacy?: string;
  support?: string;
}

export const apps: App[] = [
  {
    name: 'RosterPro',
    icon: rosterProIcon,
    tagline: {
      en: 'Team manager for sports coaches',
      es: 'Gestión de equipos para entrenadores',
      de: 'Teammanager für Trainer',
    },
    description: {
      en: 'Coaches manage their teams and players, record matches live with per-player stats and turn them into a season leaderboard. Supports football, basketball and volleyball, with subscription plans.',
      es: 'Los entrenadores gestionan sus equipos y jugadores, registran los partidos en directo con estadísticas por jugador y las convierten en una clasificación de temporada. Fútbol, baloncesto y vóley, con planes de suscripción.',
      de: 'Trainer verwalten ihre Teams und Spieler, erfassen Spiele live mit Statistiken pro Spieler und machen daraus eine Saisonrangliste. Für Fußball, Basketball und Volleyball, mit Abo-Modellen.',
    },
    status: { en: 'Coming soon to the stores', es: 'Próximamente en las tiendas', de: 'Bald in den Stores' },
    platforms: ['iOS', 'Android', 'Web'],
    stack: ['Flutter', 'Supabase', 'Riverpod', 'Stripe'],
    website: 'https://www.rosterpromanager.com',
  },
  {
    name: 'Duellum',
    icon: duellumIcon,
    tagline: {
      en: 'Learn German and Spanish as a couple',
      es: 'Aprender alemán y español en pareja',
      de: 'Deutsch und Spanisch zu zweit lernen',
    },
    description: {
      en: 'A private app for two: short lessons with eight exercise types, including listening and speaking, plus a weekly XP Duel between the two learners. Works offline and syncs when back online.',
      es: 'Una app privada para dos: lecciones cortas con ocho tipos de ejercicio, incluidos escuchar y hablar, y un Duelo semanal de XP entre los dos. Funciona sin conexión y se sincroniza al volver.',
      de: 'Eine private App für zwei: kurze Lektionen mit acht Übungstypen, darunter Hören und Sprechen, und ein wöchentliches XP-Duell zwischen beiden. Funktioniert offline und synchronisiert sich danach.',
    },
    status: { en: 'In beta', es: 'En beta', de: 'In der Beta' },
    platforms: ['iOS'],
    stack: ['Flutter', 'Supabase', 'Riverpod'],
    privacy: '/apps/duellum/privacy/',
    support: '/apps/duellum/support/',
  },
];
