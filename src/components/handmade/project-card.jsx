import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';


// Dummy project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full stack e-commerce platform with Spring Boot backend and React frontend.",
    tech: ["React", "Tailwind", "Spring Boot"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time task management application with Firebase backend.",
    tech: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management built with Angular.",
    tech: ["Angular", "NestJS", "Tailwind"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with React Native.",
    tech: ["React Native", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 5,
    title: "Blog Management System",
    description: "Content management system built with Laravel and React.",
    tech: ["React", "Laravel", "Tailwind"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 6,
    title: "Real Estate Portal",
    description: "Property listing platform with advanced search and filters.",
    tech: ["React", "Spring Boot", "Tailwind"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 7,
    title: "Weather Dashboard",
    description: "Real-time weather tracking application with beautiful UI.",
    tech: ["React", "Firebase", "Tailwind"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 8,
    title: "Recipe Sharing Platform",
    description: "Community-driven recipe sharing platform with user ratings.",
    tech: ["Angular", "NestJS", "Tailwind"],
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 9,
    title: "Expense Tracker",
    description: "Personal finance management app with data visualization.",
    tech: ["React Native", "Firebase"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 10,
    title: "Learning Management System",
    description: "Online education platform with video streaming and quizzes.",
    tech: ["React", "Laravel", "Tailwind"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

// Tech stack colors
const techColors = {
  "React": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Angular": "bg-red-500/20 text-red-400 border-red-500/30",
  "React Native": "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  "Tailwind": "bg-teal-500/20 text-teal-400 border-teal-500/30",
  "Spring Boot": "bg-green-500/20 text-green-400 border-green-500/30",
  "NestJS": "bg-pink-500/20 text-pink-400 border-pink-500/30",
  "Laravel": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "Firebase": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
};

// ProjectCard Component
export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 hover:cursor-pointer">
        {/* Category Badge */}
        <div className="bg-black/80 backdrop-blur-sm rounded-full px-3 py-1 text-xs sm:text-sm absolute top-3 sm:top-4 right-3 sm:right-4 z-10 text-white border border-white/20">
          {project.tech[0]}
        </div>

        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover object-center"
        />

        {/* Black overlay that slides up on hover - covers bottom half by default */}
        <div className={`bg-black absolute left-0 right-0 bottom-0 transition-all duration-300 ${
          isHovered ? 'h-0' : 'h-28 sm:h-32 md:h-36'
        }`} />

        {/* Content Overlay */}
        <div className={`absolute inset-0 ${
          isHovered ? 'bg-black/40 backdrop-blur-sm' : ''
        } transition-all duration-300 rounded-2xl`}>
          
          {/* Always Visible Content (Bottom) - Shows when NOT hovered */}
          <div className={`absolute left-0 right-0 bottom-0 px-4 sm:px-6 pb-4 transition-all duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
              {project.title}
            </h3>
            
            {/* Tech Badges and Buttons Row */}
            <div className="flex flex-wrap gap-2 items-center">
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 flex-1">
                {project.tech.slice(0, 2).map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-2 py-1 rounded-full border ${techColors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 ${isHovered ? 'bg-black/70' : 'bg-white/10'} backdrop-blur-sm text-white rounded-xl px-3 py-1.5 transition-all duration-300 hover:scale-90 border border-white/20 text-xs`}
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 ${isHovered ? 'bg-black/70' : 'bg-white/10'} backdrop-blur-sm text-white rounded-xl px-3 py-1.5 transition-all duration-300 hover:scale-90 border border-white/20 text-xs`}
                >
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* Hover Content (Full Card) - Shows when hovered */}
          <div className={`absolute inset-0 flex flex-col justify-between p-4 sm:p-6 transition-all duration-300 text-white ${
            isHovered ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none'
          }`}>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-200 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className={`text-xs px-3 py-1.5 rounded-full border ${techColors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons on Hover */}
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-95 border border-white/20"
              >
                <Github className="w-4 h-4" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white rounded-xl px-4 py-2 transition-all duration-300 hover:scale-95 border border-white/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}