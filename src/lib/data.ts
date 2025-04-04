import movieImg from 'public/movie.png'
import blogImg from 'public/blog.png'
import thenuImg from 'public/thenu.png'
import ptlImg from 'public/ptl.png'

const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
] as const

export const experiencesData = [
  {
    description: 'The company providing service to buy courses on website.',
    relatedTechnologies: ['JavaScript', 'Typescript', 'ReactJS', 'NextJS', 'TailwindCSS CSS'],
    project: 'Laan Academy',
    task: 'System design, UI design, Full coding for frontend and backend',
    responsibility:
      'I have learned everything that is needed to complete the work, discuss with the customers to clarify the problems, suggest solutions, design the system. As well as pay attention to coding style',
  },
  {
    description: ' We provide medical record storage solutions for hospitals.',
    project: 'EZHospital',
    task: 'UI design, full coding for frontend',
    relatedTechnologies: ['JavaScript', 'Typescript', 'ReactJS', ' Material UI'],
    responsibility:
      ' I response for implementing the features that satisfy the requirements of the app and discussing with the backend team to clarify the problems, suggest solutions. As well as pay attention to coding style',
  },
  {
    description: 'Provide internal personnel records storage for the company.',
    project: 'EZHcm',
    task: 'UI design, Full coding for frontend',
    relatedTechnologies: ['JavaScript', 'Typescript', 'ReactJS', 'Material UI'],
    responsibility:
      ' I response for implementing the features that satisfy the requirements of the app and discussing with the backend team to clarify the problems, suggest solutions. As well as pay attention to coding style',
  },
  {
    description: 'Provide internal website for company.',
    project: 'Solutionists',
    task: 'UI design, Full coding for frontend',
    relatedTechnologies: ['JavaScript', 'Typescript', 'ReactJS', 'NextJS', 'TailwindCSS CSS'],
    responsibility: 'I discussing with the chairman to clarify the problems, suggest solutions',
  },
  {
    description: 'The company offers to book and share shuttle service through cross-platform applications',
    project: 'NearMe',
    task: 'Push event third-party, build UI, Create and update feature, fix bug and maintenance',
    relatedTechnologies: ['JavaScript', 'Typescript', 'ReactJS', 'NextJS', 'GraphQL', 'NodeJS', 'TailwindCSS CSS'],
    responsibility:
      ' I have learned everything that is needed to complete the work, discussing with the customers to clarify the problems, suggest solutions, expand my knowledge breadthwise in web development. As well as pay attention to coding styl',
  },
  {
    description: 'Manage people in and out with camera devices',
    project: 'Camera',
    task: 'build UI, fix bug and maintenance',
    relatedTechnologies: ['JavaScript', 'ReactJS', 'JQuery'],
    responsibility:
      'I response for implementing the features that satisfy the requirements of the app with backend and designer team',
  },
] as const

export const projectsData = [
  {
    title: 'PTL',
    description: 'The company providing interior design and construction services.',
    tags: ['React', 'Next.js', 'Nest.js', 'TailwindCSS', 'SQL server'],
    imageUrl: ptlImg,
    url: 'https://noithatptl.vn/',
  },
  {
    title: 'Thenu',
    description: 'The company provider spa services.',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    imageUrl: thenuImg,
    url: 'https://www.thenu.com.vn/',
  },
  {
    title: 'Blogs',
    description: ' My IT blog is a place to share knowledge, experience and latest updates on information technology.',
    tags: ['React', 'Next.js', 'TailwindCSS', 'Mongodb'],
    imageUrl: blogImg,
    url: 'https://thanhtrairo.io.vn/',
  },
  {
    title: 'Movie',
    description:
      ' I Display, lookup related information about films, tv series and allow rating films, tv series for logged in users',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    imageUrl: movieImg,
    url: 'https://movie-nextjs-six.vercel.app/',
  },
] as const

const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Docker',
  'Nginx',
] as const

export { links, skillsData }
