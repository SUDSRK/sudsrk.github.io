const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Webstorm',
    competency: 4,
    category: ['Developer Tools'],
  },
  {
    title: 'VSCode',
    competency: 4,
    category: ['Developer Tools'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Developer Tools'],
  },
  {
    title: 'Anaconda Navigator',
    competency: 3,
    category: ['Developer Tools'],
  },
  // {
  //   title: 'Next.JS',
  //   competency: 3,
  //   category: ['Web Development', 'Javascript'],
  // },
  // {
  //   title: 'Amazon Web Services',
  //   competency: 4,
  //   category: ['Web Development', 'Tools'],
  // },
  {
    title: 'PostgreSQL',
    competency: 2,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python',],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Vue.js',
    competency: 2,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'Angular.js',
    competency: 3,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',

];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
