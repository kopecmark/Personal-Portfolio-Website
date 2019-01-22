module.exports = {
  siteTitle: 'Taran Cacacho | Full-Stack Software Engineer',
  siteDescription: 'Full-stack software engineer based in San Francisco, CA',
  siteKeywords:
    'Taran Noah Cacacho, Taran, Noah, Cacacho, Fwep, software engineer, front-end engineer, web developer, javascript, UCLA',
  siteUrl: 'https://brittanychiang.com',
  siteLanguage: 'en_US',

  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Taran Cacacho',
  location: 'San Francisco, CA',
  email: 'tarancacacho@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/Fwep/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/tarancacacho/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/_fwep_/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/fwep_',
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
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@fwep_',
  googleAnalyticsID: 'UA-45666519-2',

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
