import { Experience, Project, Skill } from '../types/portfolio';
import { calculateDuration } from './calculateDuration';

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'iCog Labs',
    position: 'AGI Research Intern',
    startDate: '2025-03',
    endDate: 'Present',
    duration: calculateDuration('2025-03', 'Present'),
    description: [
      'Working on the semantic parsing of PubMed Articles and GSM dataset using MedCAT models'
    ],
    technologies: ['MedCAT', 'Natural Language Processing (NLP)', 'Machine Learning', 'Python']
  },
  {
    id: '2',
    company: 'Headstarter',
    position: 'Software Engineering Resident',
    startDate: '2024-09',
    endDate: '2025-03',
    duration: calculateDuration('2024-09', '2025-03'),
    description: [
      'Built 14+ machine learning, AI-engineering, and full-stack projects in fast-paced software team environments',
      'Developed 5+ neural networks in Python, and 11 apps in TypeScript on AWS/Vercel with dev and production environments',
      'Implemented LLM-chaining, hyperparameter tuning, fine-tuning on 10+ LLM models controlling for latency & accuracy',
      'Mentored by Google Machine Learning and Amazon Engineers'
    ],
    technologies: ['Machine Learning', 'AI Engineering', 'Full-stack Development', 'Python', 'TypeScript', 'AWS', 'Vercel', 'LLM Models', 'Neural Networks']
  },
  {
    id: '3',
    company: 'ETHSWITCH',
    position: 'Software Engineering Intern',
    startDate: '2024-08',
    endDate: '2024-10',
    duration: calculateDuration('2024-08', '2024-10'),
    description: [
      'Led a team of 3 on customizing and implementing in-house ERP systems to improve workflow efficiency in one of Ethiopia\'s largest and leading Fintech Company.',
      'Worked on the Procurement, HR, and Finance module mainly using Odoo open-source ERP.'
    ],
    technologies: ['ERP Systems', 'Odoo', 'Fintech', 'Team Leadership']
  },
  {
    id: '4',
    company: 'BITS COLLEGE',
    position: 'Teaching Assistant',
    startDate: '2023-03',
    endDate: 'Present',
    duration: calculateDuration('2023-03', 'Present'),
    description: [
      'Served as a dedicated lab assistant, supervising lab sessions for classes of 90+ students, mentoring their coursework, and providing guidance on 30+ projects in Fundamentals of Programming.',
      'Worked with students to help them understand key concepts in Computer Systems and Fundamentals of Programming and Database fundamentals',
      'Created lesson materials to aid students in studying, note-taking, and test-taking preparation.'
    ],
    technologies: ['Fundamentals of Programming', 'Computer Systems', 'Database Fundamentals', 'Mentoring', 'Curriculum Development']
  },
  {
    id: '5',
    company: 'Mentor Knowledge Solutions',
    position: 'Backend Developer',
    startDate: '2023-04',
    endDate: '2024-01',
    duration: calculateDuration('2023-04', '2024-01'),
    description: [
      'Worked as a backend engineer on ERP systems for an international client developing efficient systems that improved system performance by 30%.',
      'Collaborated with an agile team of 5+ engineers to design and implement RESTful APIs, ensuring seamless integration',
      'Optimized database queries, reducing response times by 40%'
    ],
    technologies: ['Backend Development', 'ERP Systems', 'RESTful APIs', 'Database Optimization', 'Agile Methodologies']
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with admin dashboard',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    liveUrl: 'https://demo-ecommerce.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    favourites: true
  },
  {
    id: '2',
    title: 'Task Management System',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A modern task management application with real-time collaboration, drag-and-drop interface, team management, and progress tracking capabilities.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'TailwindCSS'],
    githubUrl: 'https://github.com/yourusername/task-management',
    liveUrl: 'https://task-manager-demo.vercel.app',
    imageUrl: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
    favourites: true
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Interactive weather application with data visualization',
    longDescription: 'A comprehensive weather dashboard featuring current conditions, forecasts, interactive maps, and historical data visualization using modern web APIs.',
    technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Vuex', 'SCSS'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather-dashboard-demo.netlify.app',
    imageUrl: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    favourites: false
  },
  {
    id: '4',
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media performance tracking',
    longDescription: 'A powerful analytics platform that aggregates data from multiple social media platforms, providing insights through interactive charts and automated reporting.',
    technologies: ['React', 'D3.js', 'Python', 'Flask', 'MySQL', 'Docker'],
    githubUrl: 'https://github.com/yourusername/social-media-analytics',
    imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    favourites: false
  }
];

export const skills: Skill[] = [

  // Languages
  { name: 'Python', category: 'Languages', proficiency: 95, icon: 'Terminal' },
  { name: 'JavaScript', category: 'Languages', proficiency: 90, icon: 'Code' },
  { name: 'TypeScript', category: 'Languages', proficiency: 90, icon: 'FileText' },
  { name: 'Ruby', category: 'Languages', proficiency: 95, icon: 'Gem' }, 
  { name: 'Java', category: 'Languages', proficiency: 85, icon: 'Coffee' }, 
  { name: 'PHP', category: 'Languages', proficiency: 85, icon: 'Server' }, 
  { name: 'Dart', category: 'Languages', proficiency: 85, icon: 'Tablet' }, 

  // Web Development
  { name: 'React', category: 'Web Development', proficiency: 95, icon: 'Layers' }, 
  { name: 'Next.js', category: 'Web Development', proficiency: 90, icon: 'Globe' }, 
  { name: 'Node.js', category: 'Web Development', proficiency: 90, icon: 'Leaf' }, 
  { name: 'Express.js', category: 'Web Development', proficiency: 80, icon: 'Zap' },

  // Database
  { name: 'PostgreSQL', category: 'Database', proficiency: 90, icon: 'Database' },
  { name: 'SQL', category: 'Database', proficiency: 90, icon: 'Database' }, 
  { name: 'NoSQL', category: 'Database', proficiency: 80, icon: 'HardDrive' }, 

  // DevOps
  { name: 'Docker', category: 'DevOps', proficiency: 85, icon: 'Package' }, 
  { name: 'AWS', category: 'DevOps', proficiency: 80, icon: 'Cloud' }, 
  { name: 'GCP', category: 'DevOps', proficiency: 80, icon: 'CloudCog' }, 
  { name: 'Jenkins', category: 'DevOps', proficiency: 80, icon: 'CloudCog' }, 

  // Tools
  { name: 'Git', category: 'Tools', proficiency: 95, icon: 'GitBranch' }, 
  { name: 'Figma', category: 'Tools', proficiency: 90, icon: 'Figma' } 
];