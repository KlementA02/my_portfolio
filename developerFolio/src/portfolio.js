/* Clement Asare-Ampofo's Developer Portfolio Config */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Clement Asare-Ampofo",
  title: "Hi all, I'm Clement",
  subTitle: emoji(
    "A passionate Mobile App Developer 🚀 with a strong foundation in computer engineering. Experienced in building efficient, user-friendly Flutter applications and integrating robust backend systems."
  ),
  resumeLink: "mailto:asarek591@gmail.com",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/KlementA02",
  linkedin: "https://www.linkedin.com/in/asare-ampofo-clement-58381427b",
  gmail: "asarek591@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "MOBILE APP DEVELOPER WHO BUILDS BEAUTIFUL, FUNCTIONAL FLUTTER APPS",
  skills: [
    emoji("⚡ Build cross-platform mobile apps using Flutter and Dart"),
    emoji("⚡ Integrate Firebase services (Auth, Firestore, Realtime DB)"),
    emoji("⚡ RESTful API development and backend integration"),
    emoji("⚡ Deliver responsive UI with Material Design")
  ],
  softwareSkills: [
    { skillName: "Flutter", fontAwesomeClassname: "fas fa-mobile-alt" },
    { skillName: "Dart", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "VS Code", fontAwesomeClassname: "fas fa-terminal" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Mines and Technology",
      logo: require("./assets/images/umtLogo.png"),
      subHeader: "BSc. Computer Science and Engineering",
      duration: "2022 - 2025",
      desc: "Second-Class Upper Division",
      descBullets: ["Tutored peers in Flutter/Dart development"]
    },
    {
      schoolName: "Mfantsipim School",
      logo: require("./assets/images/mfantsipimLogo.png"),
      subHeader: "WASSCE",
      duration: "2018 - 2021",
      desc: "High School Certificate"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Mobile App Development", progressPercentage: "90%" },
    { Stack: "Backend Integration", progressPercentage: "80%" },
    { Stack: "UI/UX Design", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Mobile App Developer",
      company: "Ideation Axis",
      companylogo: require("./assets/images/defaultLogo.png"),
      date: "Jan 2022 – Present",
      desc: "Designed and developed Flutter apps with Firebase integration, REST APIs, and responsive UI. Mentored junior devs and led tutoring sessions."
    },
    {
      role: "Mobile App Development Tutor (Freelance)",
      company: "Remote",
      companylogo: require("./assets/images/defaultLogo.png"),
      date: "Jun 2021 – Present",
      desc: "Tutored students in Flutter and Dart, created custom learning projects, and supported first-time app deployments."
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS I’VE WORKED ON",
  projects: [
    {
      image: require("./assets/images/defaultLogo.png"),
      projectName: "Cho Rider App",
      projectDesc: "A Flutter-based delivery app with real-time tracking and transaction history, using Firebase for backend services.",
      footerLink: []
    },
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Certifications and recognitions",
  achievementsCards: [
    {
      title: "AI Career Essentials - ALX Africa",
      subtitle: "Certificate in AI Augmented Professional Skills, enhancing productivity and adaptability in modern workflows.",
      image: require("./assets/images/defaultLogo.png"),
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I occasionally write about my work and experience in mobile dev.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: emoji("Love to teach and mentor new developers"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Coming soon",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Email me to request my resume or collaboration",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Reach out to discuss projects or opportunities.",
  number: "+233554991156 / +233509894853",
  email_address: "asarek591@gmail.com"
};

const twitterDetails = {
  userName: "", 
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
