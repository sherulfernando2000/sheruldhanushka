import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from "../../constants";
import { ArrowUpRight } from "lucide-react";
import LinkedIn from '../../assets/LinkedIn.png'
import GitHub from '../../assets/GitHub.png'

const ProjectCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div  >
            <div className={`w-full relative h-64 sm:h-80 md:h-84 hover:cursor-pointer`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="bg-black rounded-full px-3 py-1 text-xs sm:text-sm absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                    React{/* {blog.category} */}
                </div>
                <img src={PROJECTS[1].image} alt="Blog post cover"
                    className="w-full h-full object-cover object-center rounded-2xl"
                />

                <div className={`bg-black  absolute left-0 right-0 bottom-0 px-3 sm:px-4 transition-all duration-50 ${isHovered ? 'h-0' : 'h-24 sm:h-28 md:h-32'}`}>
                </div>

                <div className={`absolute inset-0 ${isHovered ? 'opacity-100 px-1 bg-black/40 delay-50 text-white font-semibold' : 'opacity-100 text-white'} rounded-2xl`}>
                    <div className={`absolute left-0 right-0 bottom-0 px-3 sm:px-4 h-24 sm:h-28 md:h-32`}>
                        <div className={`pt-2 mb-2 text-sm sm:text-base   `}>
                            Book club management
                            {/* {blog.title} */}
                        </div>
                        <div className={`pt-2 mb-2 text-sm sm:text-base   `}>
                            Book club management
                            
                        </div>
                        <div className='flex gap-2'>
                            <div className={`flex items-center w-fit ${isHovered ? 'bg-black/70' : 'bg-white/10 '}  text-white rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 gap-2 hover:cursor-pointer hover:scale-90  group overflow-hidden text-xs sm:text-sm`}>
                                <span className="">
                                    Github
                                </span>
                                 <div className='w-4 h-4 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 transition-transform duration-300 '>
                                    <img src={GitHub} alt="" />
                                </div>
                            </div>
                            <div className={`flex items-center w-fit ${isHovered ? 'bg-black/70' : 'bg-white/10 '}  text-white rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 gap-2 hover:cursor-pointer hover:scale-90 group overflow-hidden text-xs sm:text-sm`}>
                                <span className="">
                                     LinkedIn
                                </span>
                                <div className='w-4 h-4 sm:w-4 sm:h-4 mt-0.5 sm:mt-1'>
                                    <img src={LinkedIn} alt="" />
                                </div>
                                {/* <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:-translate-x-20 sm:group-hover:-translate-x-22" /> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard