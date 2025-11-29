import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import project_nextEventImage from "../assets/project_section/project_nextEventImage.png";
import project_BookClubImage from "../assets/project_section/project_BookClubImage.png";
import project_smartClassImage from "../assets/project_section/project_smartClassImage.png";
import project_BakeryImage from "../assets/project_section/project_BakeryImage.png";
import project_CulinaryManageImage from "../assets/project_section/project_CulinaryManageImage.png";
import project_PosImage from "../assets/project_section/project_PosImage.png";


import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "SHERUL DHANUSHKA",
  greet: "Hello there! ",
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.Besides keeping up with new developments, I enjoy using them in real projects to see what's possible.",
};


export const ProjectsData = [
  {
    id: 1,
    title: "NextEVENT Mobile App",
    description: "A feature-rich mobile app for event management.",
    tech: ["React Native", "Firebase", "NativeWind"],
    image: project_nextEventImage,
    github: "https://github.com/sherulfernando2000/NextEVENT",
    demo: "https://www.linkedin.com/posts/sherul-dhanushka-204a58202_next-event-app-demo-download-check-activity-7376158078075023361-gEGJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADPE5CQB9EB8fzgR1e2_A04MotNThX_htmg"
  },
  {
    id: 2,
    title: "Book Club Management System",
    description: "A modern web app for managing book clubs.",
    tech: ["React", "Express", "Tailwind"],
    image: project_BookClubImage,
    github: "https://github.com/sherulfernando2000/Book_Club_Management",
    demo: "https://www.youtube.com/watch?v=DzAKM_wfO4s"
  },
  {
    id: 3,
    title: "Smart-Class Management",
    description: "An advanced classroom management system featuring React frontend with Tailwind/MUI, and Spring Boot backend with JPA, Spring Security, and JWT authentication.",
    tech: ["React", "Spring Boot", "Tailwind"],
    image: project_smartClassImage,
    github: "https://github.com/sherulfernando2000/Smart-Class",
    demo: "https://www.linkedin.com/posts/sherul-dhanushka-204a58202_springboot-reactjs-fullstackdevelopment-activity-7321709420831227904-l48I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPE5CQB9EB8fzgR1e2_A04MotNThX_htmg"
  },
  {
    id: 4,
    title: "Bakery Management System",
    description: "A Bakery management tool developed using Java, JavaFX, Maven, MySQL.",
    tech: ["Java", "JavaFX", "Maven", "MySQL"],
    image: project_BakeryImage,
    github: "https://github.com/sherulfernando2000/LayeredArchi-snsBakery.git",
    demo: "https://www.linkedin.com/posts/sherul-dhanushka-204a58202_softwaredevelopment-java-javafx-activity-7206223455870984193-pAB5?utm_source=share&utm_medium=member_desktop&rcm=ACoAADPE5CQB9EB8fzgR1e2_A04MotNThX_htmg"
  },
  {
    id: 5,
    title: "Culinary Management System",
    description: "This project is built using Java, JavaFX,Hibernate, Layered Architecture.",
    tech: ["JavaFx", "Hibernate", "Jave", "MySQL"],
    image: project_CulinaryManageImage,
    github: "https://github.com/sherulfernando2000/Student_Management_System_ORM.git",
    demo: "https://www.linkedin.com/posts/sherul-dhanushka-204a58202_digital-student-registration-system-for-the-activity-7294619781440118785-GI-o?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADPE5CQB9EB8fzgR1e2_A04MotNThX_htmg"
  },
  {
    id: 6,
    title: "POS System",
    description: "This project is built using HTML, CSS, JavaScript.",
    tech: ["HTML", "CSS", "JavaScript", "JSP"],
    image: project_PosImage,
    github: "https://github.com/sherulfernando2000/Assigment-6_POS-System.git",
    demo: "https://studio.youtube.com/video/pugb4j0PQkU/edit"
  },
  // {
  //   id: 7,
  //   title: "Weather Dashboard",
  //   description: "Real-time weather tracking application with beautiful UI.",
  //   tech: ["React", "Firebase", "Tailwind"],
  //   image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com"
  // },
  // {
  //   id: 8,
  //   title: "Recipe Sharing Platform",
  //   description: "Community-driven recipe sharing platform with user ratings.",
  //   tech: ["Angular", "NestJS", "Tailwind"],
  //   image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  //   github: "https://github.com",
  //   demo: "https://demo.com"
  // },

];

// export const PROJECTS = [
//   {
//     id: 1,
//     name: "Personal Portfolio",
//     description:
//       "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
//     image: projectImage1,
//     githubLink: "https://github.com/user/personal-portfolio",
//   },
//   {
//     id: 2,
//     name: "E-Commerce Platform",
//     description:
//       "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
//     image: projectImage2,
//     githubLink: "https://github.com/user/ecommerce-platform",
//   },
//   {
//     id: 3,
//     name: "Task Management Tool",
//     description:
//       "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
//     image: projectImage3,
//     githubLink: "https://github.com/user/task-management-tool",
//   },
//   {
//     id: 4,
//     name: "Weather App",
//     description:
//       "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
//     image: projectImage4,
//     githubLink: "https://github.com/user/weather-app",
//   },
//   {
//     id: 5,
//     name: "Blog Platform",
//     description:
//       "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
//     image: projectImage5,
//     githubLink: "https://github.com/user/blog-platform",
//   },
//   {
//     id: 6,
//     name: "Chat Application",
//     description:
//       "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
//     image: projectImage6,
//     githubLink: "https://github.com/user/chat-application",
//   },
// ];

export const BIO = [
  "Hello! I'm Sherul Dhanushka, a dedicated web developer with expertise in both front-end and back-end technologies. I specialize in crafting responsive and accessible web applications, ensuring a seamless user experience through meticulous UI/UX design.",
  "I have hands-on experience building full-stack applications using modern frameworks like React, Next.js, and React Native on the front end, as well as Spring Boot, Node.js, and Express on the back end.Along with technical skills, I focus deeply on code quality and intuitive user experiences—balancing both engineering logic and creative design.",
  "continuously explore new tools and technologies to stay aligned with the evolving software landscape. I'm committed to growing as a software engineer and contributing to impactful, user-centric products—whether independently or as part of a collaborative team.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-white lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiRedis className="text-4xl text-red-600 lg:text-5xl" />,
    name: "Redis",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Lead Frontend Developer",
    company: "Innovative Tech Solutions",
    duration: "July 2020 - Present",
    description:
      "As the Lead Frontend Developer, I spearheaded the development of advanced web applications using cutting-edge technologies like React, Redux, and TypeScript. I worked closely with cross-functional teams, including designers, product managers, and backend developers, to deliver seamless and high-performance user experiences.",
  },
  {
    title: "Frontend Engineer",
    company: "Digital Creations",
    duration: "February 2016 - June 2020",
    description:
      "At Digital Creations, I focused on building highly interactive and responsive web interfaces using HTML, CSS, JavaScript, and modern libraries like React. I collaborated closely with UX/UI designers to implement design changes that enhanced user engagement and satisfaction. My role involved optimizing website performance, ensuring cross-browser compatibility, and implementing SEO best practices. ",
  },
  {
    title: "Junior Web Developer",
    company: "Bright Future Technologies",
    duration: "August 2014 - January 2016",
    description:
      "In my role as a Junior Web Developer, I assisted in the development and maintenance of various web applications. I gained hands-on experience in utilizing HTML, CSS, and JavaScript to create user-friendly interfaces. I actively participated in team meetings, contributed to project planning, and collaborated with senior developers to implement new features.",
  },
];

export const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "September 2012 - June 2014",
    description:
      "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "University of California, Berkeley",
    duration: "September 2008 - June 2012",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];

export const SERVICES = [
  {
    "id": 1,
    "title": "web Development",
    "info1": "I specialize in modern front-end development with React, Tailwind CSS, and Angular, creating fast, responsive, and visually polished user interfaces that deliver smooth and intuitive experiences.",
    "info2": "We build HIPAA-compliant systems, telemedicine platforms, and AI health analytics tools.",
    "img": projectImage2,
    "icon": "laptop-minimal"
  },
  {
    "id": 2,
    "title": "Backend Development",
    "info1": "I develop robust backend systems using Spring Boot, NestJS, and Laravel, building secure APIs, handling business logic, and ensuring efficient, scalable server-side performance",
    "info2": "We specialize in payment gateways, blockchain integration, and regulatory automation.",
    "img": projectImage2,
    "icon": "PcCase"
  },
  {
    "id": 3,
    "title": "Mobile Applications",
    "info1": "I build cross-platform mobile applications using React Native and Firebase, delivering fast, seamless apps with real-time data, secure authentication, and smooth user experiences across both Android and iOS.",
    "info2": "From LMS platforms to AI-driven assessment tools, we redefine digital learning.",
    "img": projectImage2,
    "icon": "Smartphone"
  },
  {
    "id": 4,
    "title": "UI/UX Design",
    "info1": "Design beautiful and intuitive user interfaces that provide excellent user experiences.",
    "icon": "Palette",
    "img": "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
  },

  {
    "id": 5,
    "title": "Software Solutions",
    "info1": "Custom software development tailored to your business needs and requirements.",
    "icon": "Code",
    "img": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80"
  }

]
