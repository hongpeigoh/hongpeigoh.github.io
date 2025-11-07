export type IntroductionData = {
  welcome: string;
  name: string;
  blurb: string;
};
export type ExperienceData = {
  imgUrl: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  details: string[];
  tech: string[];
};
export type EducationData = {
  imgUrl: string;
  school: string;
  degree: string;
  duration: string;
  location: string;
  grade: string;
  details?: string[];
};
export type ProjectData = {
  imgUrl: string;
  title: string;
  subtitle: string;
  date: string;
  href: string;
  label: string;
  text: string;
  tech: string[];
};
export type MiscData = {
  imgUrl: string;
  title: string;
  subtitle: string;
  date: string;
  href: string;
  label: string;
  text: string;
};
