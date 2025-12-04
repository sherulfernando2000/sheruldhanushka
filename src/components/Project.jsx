import { useState } from 'react';
import  ProjectCard  from '../components/handmade/project-card';
import { ProjectsData as projectsData} from '../constants';

export default function Project() {
  
// const projectsData = [
//   {
//     id: 1,
//     title: "NextEVENT Mobile App",
//     description: "A feature-rich mobile app for event management, built using React Native, Expo, and NativeWind for styling.",
//     tech: ["React Native", "Firebase", "NativeWind"],
//     image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "Real-time task management application with Firebase backend.",
//     tech: ["React", "Firebase", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 3,
//     title: "Social Media Dashboard",
//     description: "Analytics dashboard for social media management built with Angular.",
//     tech: ["Angular", "NestJS", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 4,
//     title: "Mobile Fitness App",
//     description: "Cross-platform fitness tracking app with React Native.",
//     tech: ["React Native", "Firebase", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 5,
//     title: "Blog Management System",
//     description: "Content management system built with Laravel and React.",
//     tech: ["React", "Laravel", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 6,
//     title: "Real Estate Portal",
//     description: "Property listing platform with advanced search and filters.",
//     tech: ["React", "Spring Boot", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 7,
//     title: "Weather Dashboard",
//     description: "Real-time weather tracking application with beautiful UI.",
//     tech: ["React", "Firebase", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 8,
//     title: "Recipe Sharing Platform",
//     description: "Community-driven recipe sharing platform with user ratings.",
//     tech: ["Angular", "NestJS", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 9,
//     title: "Expense Tracker",
//     description: "Personal finance management app with data visualization.",
//     tech: ["React Native", "Firebase"],
//     image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   },
//   {
//     id: 10,
//     title: "Learning Management System",
//     description: "Online education platform with video streaming and quizzes.",
//     tech: ["React", "Laravel", "Tailwind"],
//     image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
//     github: "https://github.com",
//     demo: "https://demo.com"
//   }
// ];

  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filters = ['All', 'React', 'React Native', 'Tailwind', 'Spring Boot', 'NestJS', 'Firebase'];
  // 'Angular', 'Laravel'

  // Filter projects based on selected tech
  const filteredProjects = selectedFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tech.includes(selectedFilter));

  // Show only first 6 or all based on showAll state
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section className="pt-20 px-4 sm:px-8 lg:px-1 min-h-screen" id="work">
      {/* Header */}
      <div className='flex justify-center'>
        <h1 className="mb-2 text-center text-3xl sm:text-4xl lg:text-5xl font-semibold w-fit tracking-wide  border-b-2 px-8 rounded-md shadow-xl"> Projects</h1>
  
      </div>
     
      <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        " Turning ideas into real, working solutions. "
      </p>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setSelectedFilter(filter)}
            className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 border ${
              selectedFilter === filter
                ? 'bg-blue-500 text-white border-blue-500 shadow-lg shadow-blue-500/50'
                : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-7xl mx-auto transition-all duration-500">
        {displayedProjects.map((project) => (
          <div 
            key={project.id}
            className="transition-all duration-500 animate-in fade-in slide-in-from-bottom-4"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/50"
          >
            {showAll ? 'Show Less' : `Show More (${filteredProjects.length - 3} more)`}
          </button>
        </div>
      )}

      {/* No Results Message */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">No projects found with this technology.</p>
        </div>
      )}
    </section>
  );
}
