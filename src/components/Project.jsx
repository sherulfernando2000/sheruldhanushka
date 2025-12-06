import { useState } from 'react';
import  ProjectCard  from '../components/handmade/project-card';
import { ProjectsData as projectsData} from '../constants';

export default function Project() {
  
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
    <section className="pt-20 px-4 sm:px-8 lg:px-1 min-h-screen" id="work" data-aos="flip-up" data-aos-duration="1000">
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
