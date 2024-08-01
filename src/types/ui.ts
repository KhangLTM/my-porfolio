// types.ts
export interface Hero {
  title: string;
  desc: string;
}

export interface About {
  image: string;
  desc: string[];
}

export interface WorkExperience {
  jobTitle: string;
  companyName: string;
  date: string;
  responsibility: string[];
}

export interface Project {
  image: string;
  name: string;
  desc: string;
  techStack: string | string[];
}

export interface Projects {
  featured: Project[];
  other: Project[];
}

export interface Contact {
  desc: string;
  sign: string;
}
export interface Nav {
  name: string;
  value: string;
}

export interface UI {
  nav: Nav[];
  hero: Hero;
  about: About;
  experience: WorkExperience[];
  projects: Projects;
  contact: Contact;
}

export interface GlobalValContextType {
  UI: UI;
}
