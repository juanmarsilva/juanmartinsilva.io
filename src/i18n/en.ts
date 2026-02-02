import { Translations } from "./types";

export const en: Translations = {
  nav: {
    about: "About Me",
    stack: "Stack",
    experience: "Experience",
    contact: "Contact",
  },
  hero: {
    role: "Fullstack Developer",
    titlePart1: "Designing high-impact",
    titlePart2: "digital experiences.",
    description: "Over 3 years building scalable solutions with clean architectures and an obsession for visual detail. Specialist in React, Next.js and Mobile Applications.",
    downloadCv: "Download CV",
    workExperience: "Work Experience",
  },
  experience: {
    list: [
      {
        role: "Front End Developer",
        company: "Quares IT Solutions",
        period: "2023 - Present",
        activities: [
          "I play a key role in software development, implementing functionalities, optimizing code, and supporting architectural decisions.",
          "I analyze functional documentation to technically propose tasks to be developed.",
          "I perform code optimizations to improve performance and user experience.",
          "I participate in code reviews and provide feedback to other developers.",
          "I participate in technical or architectural designs, and in the construction of technical documentation.",
          "I make development time estimates, meeting them or alerting early by providing alternative action plans.",
        ],
        highlight: true,
      },
      {
        role: "Full Stack Tech Assistant",
        company: "Henry Bootcamp",
        period: "2022 - 2023",
        activities: [
          "Coordinate a group of students to achieve integration into the study team.",
          "Assist in solving exercises and promote group collaboration (Pair Programming).",
          "Propose ideas for improving the Bootcamp processes.",
        ],
        highlight: false,
      },
    ],
  },
  stack: {
    core: "CORE",
    frontendTitle: "Frontend development",
    frontendDesc: "Reactive and performant interfaces with a focus on accessibility.",
    mobileTitle: "Mobile",
    mobileDesc: "Scalable native apps.",
    backendTitle: "Backend & DB",
    mobileSubtitle: "APPS",
    backendSubtitle: "SERVER & DATA",
    backendDesc: "Robust APIs and optimized databases.",
  },
  site: {
    title: "Juan Martin Silva | Fullstack Developer",
    description: "Juan Martin Silva's professional portfolio - Fullstack Developer.",
  },
  footer: {
    talk: "Let's Talk",
    project: "Have a project in mind?",
    social: "SOCIAL",
  },
  sections: {
    stack: {
      title: "Tech Stack",
      subtitle: "Tools and technologies I master to create digital products.",
    },
    experience: {
      title: "Career Path",
      subtitle: "Impact and results in high-level projects.",
    },
  },
};
