module.exports = {
  siteTitle: 'Mark Kopec | Full-Stack Software Engineer',
  siteDescription: 'Full-stack software engineer based in Calgary, AB, Canada',
  siteKeywords:
    'Mark Kopec, Mark, Kopec, software engineer, front-end engineer, front-end developer, web developer, software developer, javascript, mechanical engineer, project manager, project management professional',
  siteUrl: 'https://www.mkopec.com',
  siteLanguage: 'en_US',

  googleVerification: 'LljmGYszSdLgS8uyR2gVPJ3cn9kKf6MrULHhmci7JnM',

  name: 'Mark Kopec',
  location: 'Calgary, AB, Canada',
  email: 'mark.kopec@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/kopecmark/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/mark-kopec/',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Projects',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  googleAnalyticsID: 'UA-132772964-1',

  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
