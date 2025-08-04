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
    title: 'Match Finder',
    description: 'A fun matchmaking web app that pairs users based on quiz answers and shared interests.',
    longDescription: 'A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, product management, shopping cart, payment integration, and admin dashboard.',
    technologies: ['React', 'TypeScript', 'Supabase', 'Docker'],
    githubUrl: 'https://github.com/hewansirak/match-finder',
    liveUrl: 'https://match-finder-omega.vercel.app/',
    imageUrl: '/src/assets/match.png',
    favourites: true
  },
  {
    id: '2',
    title: 'AI-Powered Coding Companion',
    description: 'Collaborative project management tool with real-time updates',
    longDescription: 'A modern task management application with real-time collaboration, drag-and-drop interface, team management, and progress tracking capabilities.',
    technologies: ['Vanilla JS', 'Tailwind CSS'],
    githubUrl: 'https://github.com/hewansirak/Cursor-Clone/tree/mychanges',
    imageUrl: '/src/assets/cursor.png',
    favourites: true
  },
  {
    id: '3',
    title: 'Brain Tumor Classification',
    description: 'Brain Tumor Classification using Neural Networks. ',
    longDescription: 'A comprehensive weather dashboard featuring current conditions, forecasts, interactive maps, and historical data visualization using modern web APIs.',
    technologies: ['Streamlit', 'TensorFlow', 'Numpy', 'Pandas', 'Matplotlib', 'OpenCV'],
    githubUrl: 'https://github.com/hewansirak/Brain-Tumor-Classification',
    liveUrl: 'https://brain-tumor-classification-proj.streamlit.app',
    imageUrl: '/src/assets/tumor.png',
    favourites: true
  },
  {
    id: '4',
    title: 'Discordish Clone',
    description: 'A modern, real-time Discord clone built with Next.js, Convex, and Clerk authentication.',
    longDescription: 'A modern, real-time Discord clone built with Next.js, Convex, and Clerk authentication.',
    technologies: ['Next.js', 'TypeScript','Tailwind', 'Convex', 'Clerk'],
    githubUrl: 'https://github.com/hewansirak/Discordish-Clone',
    liveUrl: 'https://discordish-clone.vercel.app',
    imageUrl: '/src/assets/discord.png',
    favourites: false
  },
    {
    id: '5',
    title: 'Customer Churn Prediction',
    description: 'Brain Tumor Classification using Neural Networks. ',
    longDescription: 'A comprehensive weather dashboard featuring current conditions, forecasts, interactive maps, and historical data visualization using modern web APIs.',
    technologies: ['Streamlit', 'TensorFlow', 'Numpy', 'Pandas', 'Matplotlib', 'OpenCV'],
    githubUrl: 'https://github.com/hewansirak/Customer-churn-prediction',
    liveUrl: 'https://customer-churn-prediction-proj.streamlit.app',
    imageUrl: '/src/assets/churn.png',
    favourites: true
  },
  {
    id: '6',
    title: 'PR Review Agent',
    description: 'This is a GitHub App that reviews pull requests and submits reviews with AI',
    longDescription: "I built upon a system that can review pull requests in GitHub repos and suggest improvements to the code using GitHub Apps and Groq's models.",
    technologies: ['Github Apps', 'Groq', 'TypeScript'],
    githubUrl: 'https://github.com/hewansirak/PR-Reviewer',
    imageUrl: '/src/assets/pr.png',
    favourites: false
  },
    {
    id: '7',
    title: 'Tutor Mate',
    description: 'Academic Research Assistant',
    longDescription: "Academic research assistant that helps you find, summarize, and download academic papers using AI-powered search",
    technologies: ['Github Apps', 'Groq', 'TypeScript'],
    githubUrl: 'https://github.com/hewansirak/PR-Reviewer',
    liveUrl: 'https://tutormate-bot-proj.streamlit.app',
    imageUrl: '/src/assets/tutor.png',
    favourites: false
  },
  {
    id: '9',
    title: 'Financial Market Anomaly Detection',
    description: 'Machine learning model to identify anomalies in financial markets.',
    longDescription: "A machine learning model to identify anomalies in financial markets based on real bloomberg data.",
    technologies: ['yFinance', 'Streamlit', 'sklearn', 'Numpy', 'Matplotlib'],
    githubUrl: 'https://github.com/hewansirak/Financial-market-anomaly-detection',
    liveUrl: 'https://financial-market-anomaly-detection.streamlit.app/',
    imageUrl: '/src/assets/anomaly.png',
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