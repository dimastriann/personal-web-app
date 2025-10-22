export type Skill = {
  [key: string]: {
    id: string;
    label: string;
    level: number;
  };
};

export type Certificate = {
  id: string;
  title: string;
  image: string;
};
