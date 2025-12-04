import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Code, Rocket, Star } from 'lucide-react';

const Education = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const timelineData = [
    {
      year: '2025',
      title: 'First Internship',
      description: 'Working as a intern softwaere developer at Sans-Technologies.',
      icon: GraduationCap,
      color: 'from-blue-400 to-blue-600',
      iconBg: 'bg-blue-500',
      side: 'left'
    },
    {
      year: '2024 - 2025',
      title: 'Demonstrater in IJSE',
      description: 'Worked as a part-time demonstrater for programming courses.',
      icon: Code,
      color: 'from-green-400 to-green-600',
      iconBg: 'bg-green-500',
      side: 'right'
    },
    {
      year: '2023 - 2025',
      title: 'Institute of Software Enginnering',
      description: 'Completed HND in Software Engineering.',
      icon: Briefcase,
      color: 'from-yellow-400 to-yellow-600',
      iconBg: 'bg-yellow-500',
      side: 'left'
    },
    {
      year: '2022 - 2023',
      title: 'VTA Srilanka',
      description: 'Completed Quantity Surveying Diploma.',
      icon: Award,
      color: 'from-orange-400 to-orange-600',
      iconBg: 'bg-orange-500',
      side: 'right'
    },
    {
      year: '2021',
      title: 'University Of Rajarata',
      description: 'Selected for applied science degree.',
      icon: Rocket,
      color: 'from-red-400 to-red-600',
      iconBg: 'bg-red-500',
      side: 'left'
    },
    {
      year: '2019',
      title: 'Holy Cross College',
      description: 'Complete A/L with B,C & S in Chemistry,Combined Maths & Physics.',
      icon: Star,
      color: 'from-purple-400 to-purple-600',
      iconBg: 'bg-purple-500',
      side: 'right'
    }
  ];

  return (
    <div className="w-full py-16 px-1 md:px-4 pl-8">
      <div className="max-full mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey
          </h2>
          <p className="text-gray-400 text-lg">
            Education & Professional Experience
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute -left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-1 h-full 
                         bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500 opacity-40 shadow-lg shadow-blue-500/30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isLeft = item.side === 'left';
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className={`flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} pl-7 md:pl-0`}>
                      <div
                        className={`relative bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10
                                   transition-all duration-500 hover:bg-white/10 hover:border-blue-400/50
                                   hover:scale-105 group overflow-hidden
                                   ${isHovered ? 'shadow-2xl shadow-blue-500/50' : ''}`}
                      >
                        {/* Windows 11 Style Glow Effect */}
                        {isHovered && (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-cyan-400/10 to-transparent 
                                        animate-pulse pointer-events-none rounded-2xl" />
                        )}
                        
                        {/* Year Badge */}
                        <div className={`relative inline-block mb-3 px-4 py-1 rounded-full text-sm font-semibold
                                       bg-gradient-to-r from-blue-500 to-cyan-500 text-white
                                       shadow-lg shadow-blue-500/50 transition-all duration-300
                                       `}>
                          {item.year}
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Connector Line - Hidden on mobile */}
                      {/* <div
                        className={`hidden xl:block absolute top-8 h-0.5 bg-gradient-to-r 
                                   ${isLeft ? 'right-48 -translate-x-96' : 'left-48 translate-x-96'}
                                   ${isLeft ? 'bg-gradient-to-r from-blue-400 to-cyan-400' : 'bg-gradient-to-l from-blue-400 to-cyan-400'}
                                   ${isHovered ? 'shadow-lg shadow-blue-500/50' : ''}`}
                        style={{ width: 'calc(15% - 3rem)' }}
                      /> */}
                    </div>

                    {/* Center Icon */}
                    <div className="absolute -left-12 md:relative md:left-auto w-16 md:w-2/12 flex justify-center">
                      <div
                        className={`relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full
                                   bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center
                                   border-4 border-slate-900 shadow-lg shadow-blue-500/50
                                   transition-all duration-500 hover:scale-125 hover:rotate-12
                                   hover:shadow-2xl hover:shadow-blue-500/80
                                   ${isHovered ? 'scale-125 rotate-12 shadow-2xl shadow-blue-500/80' : ''}`}
                      >
                        {/* Icon glow effect */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 
                                       blur-xl opacity-0 transition-opacity duration-500
                                       ${isHovered ? 'opacity-60' : ''}`} />
                        <Icon className="relative z-10 w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Empty Space on opposite side - Hidden on mobile */}
                    <div className="hidden md:block md:w-5/12" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Decoration */}
          <div className="relative mt-12 flex justify-center">
            <div className="w-10 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 
                          shadow-lg shadow-blue-500/50 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;