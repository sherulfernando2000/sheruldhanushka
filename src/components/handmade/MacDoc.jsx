import React, { useState } from 'react';
// import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import GitHub from '../../assets/GitHub.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Insta from '../../assets/Insta.png'
import Email from '../../assets/Email.png'
import Facebook from '../../assets/Facebook.png'
import projectImage1 from "../../assets/project1.jpeg";

const MacDock = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: GitHub,
      url: 'https://github.com/yourusername',
      color: '#181717'
    },
    {
      name: 'LinkedIn',
      icon: LinkedIn,
      url: 'https://linkedin.com/in/yourusername',
      color: '#0A66C2'
    },
    
    {
      name: 'Instagram',
      icon: Insta,
      url: 'https://instagram.com/yourusername',
      color: '#E4405F'
    },
    {
      name: 'Email',
      icon: Email,
      url: 'mailto:your.email@example.com',
      color: '#EA4335'
    },
    {
      name: 'FaceBook',
      icon: Facebook,
      url: 'https://twitter.com/yourusername',
      color: '#1DA1F2'
    },
  ];

  const getScale = (index) => {
    if (hoveredIndex === null) return 1;
    
    const distance = Math.abs(index - hoveredIndex);
    
    if (distance === 0) return 1.5; // Hovered icon
    if (distance === 1) return 1.2; // Adjacent icons
    if (distance === 2) return 1.05; // Second adjacent icons
    return 1; // Rest
  };

  return (
    <div className="flex justify-center items-end w-full px-4 py-8">
      <div className="relative">
        {/* Dock Container */}
        <div 
          className="flex items-end gap-5 md:gap-8 px-3 md:px-4 py-3 md:py-4 
                     bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl
                     border border-white/20 shadow-2xl
                     transition-all duration-300"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const scale = getScale(index);
            
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
                onMouseEnter={() => setHoveredIndex(index)}
                style={{
                  transform: `scale(${scale}) translateY(${scale > 1 ? -30 * (scale - 1) : 0}px)`,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}
              >
                {/* Tooltip */}
                <div 
                  className="absolute -top-8 left-1/2 -translate-x-1/2 
                             bg-gray-900/90 text-white text-xs px-3 py-1.5 rounded-lg
                             opacity-0 group-hover:opacity-100 pointer-events-none
                             transition-opacity duration-200 whitespace-nowrap
                             backdrop-blur-sm"
                >
                  {social.name}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 
                                  border-4 border-transparent border-t-gray-900/90" />
                </div>

                {/* Icon Container */}
                <div 
                  className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                             rounded-xl md:rounded-2xl
                             
                             shadow-lg group-hover:shadow-xl
                             transition-all duration-300"
                >
                  <img src={social.icon} alt="" />
                  {/* <Icon 
                    size={20}
                    className="md:w-8 md:h-8"
                    style={{ color: social.color }}
                    strokeWidth={1.5}
                  /> */}
                </div>
              </a>
            );
          })}
        </div>

        {/* Dock Shadow/Reflection */}
        <div 
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[95%] h-2
                     bg-gradient-to-b from-black/20 to-transparent rounded-full blur-sm"
        />
      </div>
    </div>
  );
};



export default MacDock;