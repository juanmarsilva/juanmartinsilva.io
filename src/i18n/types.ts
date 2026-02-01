export interface ExperienceActivity {
  role: string;
  company: string;
  period: string;
  activities: string[];
  highlight: boolean;
}

export interface Translations {
  nav: {
    about: string;
    stack: string;
    experience: string;
    contact: string;
  };
  site: {
    title: string;
    description: string;
  };
  hero: {
    role: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    downloadCv: string;
    workExperience: string;
  };
  experience: {
    list: ExperienceActivity[];
  };
  stack: {
    core: string;
    frontendTitle: string;
    frontendDesc: string;
    mobileTitle: string;
    mobileDesc: string;
    backendTitle: string;
  };
  footer: {
    talk: string;
    project: string;
    social: string;
  };
  sections: {
    stack: {
      title: string;
      subtitle: string;
    };
    experience: {
      title: string;
      subtitle: string;
    };
  };
}
