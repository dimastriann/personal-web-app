export type Profile = {
  firstName: string;
  lastName: string;
  fullName: string;
  role: string;
  currentRole: string;
  currentLevel: string;
  firstYOE: number;
  address: string;
  aboutMe: string;
};

export interface BaseProfile {
  id: string;
  from: string;
  to: string;
  address: string;
}

export interface Education extends BaseProfile {
  universityName: string;
  major: string;
  level: string;
  address: string;
}

export interface WorkExperience extends BaseProfile {
  companyName: string;
  role: string;
  projects: Project[];
  summary: string[];
}

export type Project = {
  client: string;
  highlights: string[];
  tags: string[];
};
