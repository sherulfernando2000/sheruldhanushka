"use client"
import { ArrowUpRight } from "lucide-react";
import { useState } from "react"
import Link from "next/link";

type Blog = {
    id: number;
    category: string;
    title: string;
    imageURL: string;
};

export default function BlogCard({blog}:{blog:Blog}) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link href={""}>
            <div className={`w-full relative h-64 sm:h-80 md:h-84 hover:cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white rounded-full px-3 py-1 text-xs sm:text-sm absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                {blog.category}
            </div>
            <img src={blog.imageURL} alt="Blog post cover"
                className="w-full h-full object-cover object-center rounded-2xl"
            />

            <div className={`bg-white absolute left-0 right-0 bottom-0 px-3 sm:px-4 transition-all duration-200 ${isHovered ? 'h-0' : 'h-24 sm:h-28 md:h-32'}`}>
            </div>

            <div className={`absolute inset-0 ${isHovered ? 'opacity-100 px-1 bg-black/40 delay-120 text-white font-semibold' : 'opacity-100 text-black'} rounded-2xl`}>
                <div className={`absolute left-0 right-0 bottom-0 px-3 sm:px-4 h-24 sm:h-28 md:h-32`}>
                    <div className={`pt-2 mb-2 text-sm sm:text-base   `}>
                        {blog.title}
                    </div>
                    <div className={`flex items-center w-fit ${isHovered ? 'bg-white/10':'bg-gray-100'} rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 gap-2 hover:cursor-pointer group overflow-hidden text-xs sm:text-sm`}>
                        <span className="transition-transform duration-100 group-hover:translate-x-3 ">
                            View article
                        </span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:-translate-x-20 sm:group-hover:-translate-x-22" />
                    </div>
                </div>
            </div>
        </div>
        </Link>
        
    )
}


{/* <Link href={""}>
            <div className={`w-full relative h-64 sm:h-80 md:h-96 hover:cursor-pointer`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white rounded-full px-3 py-1 text-xs sm:text-sm absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
                R & D
            </div>
            <img src="blog.jpg" alt="Blog post cover"
                className="w-full h-full object-cover object-center rounded-2xl"
            />

            <div className={`bg-white absolute left-0 right-0 bottom-0 px-3 sm:px-4 transition-all duration-200 ${isHovered ? 'h-0' : 'h-24 sm:h-28 md:h-32'}`}>
            </div>

            <div className={`absolute inset-0 ${isHovered ? 'opacity-100 bg-black/40 text-white font-semibold' : 'opacity-100 text-black'} rounded-2xl`}>
                <div className={`absolute left-0 right-0 bottom-1 px-3 sm:px-4 h-24 sm:h-28 md:h-32`}>
                    <div className={`pt-2 mb-2 text-sm sm:text-base leading-snug sm:leading-normal line-clamp-2`}>
                        Preserving Data Anonymization in the Age of AI: A Working Solution Examined
                    </div>
                    <div className={`flex items-center w-fit ${isHovered ? 'bg-white/10':'bg-gray-100'} rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 gap-2 hover:cursor-pointer group overflow-hidden text-xs sm:text-sm`}>
                        <span className="transition-transform duration-100 group-hover:translate-x-6 whitespace-nowrap">
                            View article
                        </span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 sm:mt-1 transition-transform duration-300 group-hover:-translate-x-20 sm:group-hover:-translate-x-22" />
                    </div>
                </div>
            </div>
        </div>
        </Link> */}