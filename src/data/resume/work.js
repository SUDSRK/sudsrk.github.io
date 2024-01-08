/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Food Darzee',
    position: 'Lead Front-End Engineer',
    url: 'https://fooddarzee.com/about',
    startDate: '2021-09-27',
    summary: `As the sole Frontend Developer on the team, I spearheaded the development efforts for both website and mobile applications. 
    Successfully wrote numerous modules and features,
     demonstrating proficiency in crafting solutions that enhanced the overall user experience.`,
    highlights: [
      'Exclusive Front-End Role: As the sole front-end developer, managed all tasks independently, demonstrating expertise, autonomy, and diversity. Oversaw the entire front-end development, collaborating seamlessly with the team.',
      'Comprehensive Website Contributions: Demonstrated proficiency in creating diverse modules and features on the website, showcasing an in-depth understanding of front-end development principles and implementing them seamlessly.',
      'Strategic Code Refactoring: Applied advanced code refactoring techniques to optimize efficiency, with a specific emphasis on the comprehensive redesign of the different websites and application modules for better user convenience',
      'Innovative Mobile App Enhancements: Played a pivotal role in the evolution of the mobile application’s front end, introducing novel features and redesigned modules that contributed to an enriched and seamless customer experience.',
      'Close Collaboration and Project Delivery Excellence: Worked closely with co-founders, demonstrating effective leadership in project delivery. Meticulously addressed project requirements, ensuring a harmonious integration of technical elements and meeting the overarching goals of the projects within the anticipated timeline.',
    ],
  },
  {
    name: 'ML Infomap',
    position: 'Machine Learnng Engineer and Full Stack Developer',
    url: 'http://mlinfomap.com',
    startDate: '2020-08-17',
    endDate: '2021-09-24',
    summary: 'Worked as a Junior Full Stack Dveloper and the sole Machine Learning Engineer for the firm. Worked on multiple projects in diffrrent domains.',
    highlights: [
      'Enhancement of a Vehicle Tracking System Website: Played an integral role in the collaborative implementation of diverse solutions for the design and development of a robust Vehicle Tracking System Web Application. Worked closely with stakeholders to meticulously gather requirements and executed the implementation of tailored functionalities to precisely address specific project needs within the anticipated project timeline.',
      'Collaborated with DRDO on a Project: Collaborated closely with DRDO on the Terrain Suitability and Vulnerability Project, assuming a leadership role in developing machine learning algorithms tailored for predictive modeling. Spearheaded the coordination efforts for the creation of a Web application, facilitating the efficient visualization and analysis of complex terrain data. Successfully integrated advanced machine learning algorithms into the application, amplifying its predictive capabilities and significantly enhancing decision-making processes.',
      'Developed a PGRouting Application: Led the development efforts for the creation of an Application and Web API dedicated to the implementation of PGRouting. Orchestrated the design and implementation of robust features, guaranteeing smooth integration with broader system architecture, to optimize operational expenses .'
    ],
  },
];

export default work;
