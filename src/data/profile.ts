// Single source of truth for personal details used across the site
export const profile = {
  name: 'Álvaro Morales',
  role: 'Tech Lead',
  currentCompany: 'Schrankerl',
  university: 'Universidad Politécnica de Madrid',
  countryCode: 'AT',
  careerStart: new Date(2015, 2), // March 2015, first internship
  email: 'alvaromoralesgonzalez92@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/%C3%A1lvaro-morales',
  linkedInLabel: 'linkedin.com/in/álvaro-morales',
  github: 'https://github.com/almogon',
  githubLabel: 'github.com/almogon',
  repository: 'https://github.com/almogon/portfolio',
  keywords: ['TypeScript', 'Python', 'Angular', 'Java', 'Spring Boot', 'Odoo', 'AWS', 'Software architecture', 'Technical leadership'],
  spokenLanguages: ['es', 'en', 'de'],
};

export const yearsOfExperience = Math.floor(
  (Date.now() - profile.careerStart.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
);
