import { Experience } from '../types/portfolio';

function calculateDuration(startDateStr: string, endDateStr: string): string {
    const start = new Date(startDateStr + '-01'); // To avoid timezone issues
    const end = endDateStr === 'Present' ? new Date() : new Date(endDateStr + '-01');

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearString = years > 0 ? `${years} year${years === 1 ? '' : 's'}` : '';
    const monthString = months > 0 ? `${months} month${months === 1 ? '' : 's'}` : '';

    if (years === 0 && months === 0) {
        return 'One month'; 
    } else if (yearString && monthString) {
        return `${yearString} ${monthString}`;
    } else if (yearString) {
        return yearString;
    } else {
        return monthString;
    }
}

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