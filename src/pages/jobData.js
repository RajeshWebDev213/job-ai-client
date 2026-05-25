// src/pages/jobData.js

import googleLogo from "../assets/google.png";
import amazonLogo from "../assets/amazon.png";
import microsoftLogo from "../assets/microsoft.png";
import netflixLogo from "../assets/netflix.png";
import metaLogo from "../assets/meta.png";

const jobsdata = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Google",
    logo: googleLogo,
    type: "Full Time",
    location: "Hyderabad, India",
    salary: "10 - 15 LPA",
    experience: "1+ Years",
    posted: "2 days ago",

    description:
      "Google is looking for a Frontend Developer to build highly scalable and modern user interfaces using React.js and Tailwind CSS.",

    responsibilities: [
      "Build responsive and scalable UI components",
      "Collaborate with backend and design teams",
      "Optimize application performance",
      "Maintain reusable frontend architecture",
    ],

    requirements: [
      "Strong React.js knowledge",
      "Good understanding of JavaScript ES6+",
      "Experience with Tailwind CSS",
      "Knowledge of Git & GitHub",
    ],

    skills: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Git",
      "REST APIs",
    ],
  },

  {
    _id: "2",
    title: "MERN Stack Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Bangalore, India",
    salary: "12 - 18 LPA",
    experience: "2+ Years",
    posted: "1 week ago",

    description:
      "Amazon is hiring a MERN Stack Developer to develop scalable full-stack web applications.",

    responsibilities: [
      "Develop backend APIs using Node.js",
      "Integrate frontend with backend systems",
      "Work with MongoDB databases",
      "Write production-ready clean code",
    ],

    requirements: [
      "Experience with MERN Stack",
      "Strong API development knowledge",
      "Database management skills",
      "Good debugging skills",
    ],

    skills: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
    ],
  },

  {
    _id: "3",
    title: "Backend Developer",
    company: "Microsoft",
    logo: microsoftLogo,
    type: "Hybrid",
    location: "Chennai, India",
    salary: "15 - 22 LPA",
    experience: "2+ Years",
    posted: "3 days ago",

    description:
      "Microsoft is searching for a Backend Developer to create secure and scalable APIs.",

    responsibilities: [
      "Develop REST APIs",
      "Maintain backend services",
      "Improve database performance",
      "Implement authentication systems",
    ],

    requirements: [
      "Strong Node.js knowledge",
      "Experience with MongoDB",
      "Understanding of JWT authentication",
      "Knowledge of API security",
    ],

    skills: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "JWT",
      "REST APIs",
    ],
  },

  {
    _id: "4",
    title: "UI/UX Designer",
    company: "Netflix",
    logo: netflixLogo,
    type: "Full Time",
    location: "Mumbai, India",
    salary: "18 - 24 LPA",
    experience: "3+ Years",
    posted: "5 days ago",

    description:
      "Netflix is looking for a creative UI/UX Designer to design modern digital experiences.",

    responsibilities: [
      "Create user-friendly interfaces",
      "Build wireframes and prototypes",
      "Collaborate with developers",
      "Conduct user research",
    ],

    requirements: [
      "Experience in UI/UX design",
      "Strong Figma knowledge",
      "Understanding of design systems",
      "Creative problem-solving skills",
    ],

    skills: [
      "Figma",
      "UI Design",
      "UX Research",
      "Wireframing",
      "Prototyping",
    ],
  },

  {
    _id: "5",
    title: "Data Scientist",
    company: "Meta",
    logo: metaLogo,
    type: "Remote",
    location: "Pune, India",
    salary: "20 - 30 LPA",
    experience: "2+ Years",
    posted: "4 days ago",

    description:
      "Meta is hiring a Data Scientist to work on AI-driven analytics and machine learning models.",

    responsibilities: [
      "Analyze large datasets",
      "Build ML models",
      "Create predictive systems",
      "Work with cross-functional teams",
    ],

    requirements: [
      "Strong Python knowledge",
      "Machine learning experience",
      "Understanding of statistics",
      "Experience with TensorFlow",
    ],

    skills: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "Pandas",
      "Data Analysis",
    ],
  },

  {
    _id: "6",
    title: "DevOps Engineer",
    company: "Google",
    logo: googleLogo,
    type: "Full Time",
    location: "Remote",
    salary: "22 - 35 LPA",
    experience: "4+ Years",
    posted: "1 day ago",

    description:
      "Google is hiring a DevOps Engineer to automate deployment pipelines and cloud infrastructure.",

    responsibilities: [
      "Manage CI/CD pipelines",
      "Handle cloud infrastructure",
      "Improve deployment workflows",
      "Monitor application systems",
    ],

    requirements: [
      "Experience with AWS or GCP",
      "Docker & Kubernetes knowledge",
      "Linux administration skills",
      "CI/CD experience",
    ],

    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Linux",
    ],
  },

  {
    _id: "7",
    title: "React Native Developer",
    company: "Amazon",
    logo: amazonLogo,
    type: "Remote",
    location: "Work From Home",
    salary: "14 - 20 LPA",
    experience: "2+ Years",
    posted: "6 days ago",

    description:
      "Amazon is hiring a React Native Developer to build cross-platform mobile applications.",

    responsibilities: [
      "Build mobile UI components",
      "Integrate APIs into mobile apps",
      "Optimize mobile performance",
      "Debug production issues",
    ],

    requirements: [
      "Experience with React Native",
      "Strong JavaScript knowledge",
      "Mobile app debugging skills",
      "API integration experience",
    ],

    skills: [
      "React Native",
      "JavaScript",
      "Firebase",
      "REST APIs",
      "Redux",
    ],
  },

  {
    _id: "8",
    title: "AI/ML Engineer",
    company: "Meta",
    logo: metaLogo,
    type: "Full Time",
    location: "Bangalore, India",
    salary: "25 - 40 LPA",
    experience: "3+ Years",
    posted: "Today",

    description:
      "Meta is hiring an AI/ML Engineer to build next-generation intelligent systems.",

    responsibilities: [
      "Train machine learning models",
      "Deploy AI systems",
      "Optimize ML algorithms",
      "Research advanced AI solutions",
    ],

    requirements: [
      "Strong Python skills",
      "Deep Learning knowledge",
      "TensorFlow/PyTorch experience",
      "Mathematics and statistics knowledge",
    ],

    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "AI",
    ],
  },
];

export default jobsdata;