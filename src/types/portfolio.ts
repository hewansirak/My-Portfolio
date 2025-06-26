export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies: string[];
  logo?: string;
}
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  favourites: boolean;
}

export interface Skill {
  name: string;
  category:  'Languages' | 'Web Development' | 'Database' | 'DevOps' | 'Tools';
  proficiency: number;
  icon: string;
}
