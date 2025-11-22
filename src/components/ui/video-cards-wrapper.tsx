"use client"
import { useState } from "react";
import CustomerCard from "./customer-card";
import {videos} from "@/lib/data/videos";



export default function VideoCardsWrapper(){
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [lastHoveredIndex, setLastHoveredIndex] = useState(0);

    

    const handleHover = (index: number) => {
        setHoveredIndex(index);
        setLastHoveredIndex(index);
    };

    const handleLeave = () => {
        setHoveredIndex(lastHoveredIndex);
    };

    return (
        <div className="bg-gradient-to-br px-6 md:px-12 xl:p-14 xl:pt-0">
            <div className="w-full mx-auto">
                <div className="overflow-x-auto overflow-y-hidden scrollbar-hide md:overflow-x-visible">
                    <div className="flex gap-4 md:gap-4 min-w-min md:min-w-0">
                        {videos.map((video, index) => (
                            <CustomerCard
                                key={index}
                                videoPreview={video.videoPreview}
                                youtubeUrl={video.youtubeUrl}
                                title={video.title}
                                isActive={hoveredIndex === index}
                                isHovered={hoveredIndex !== null && hoveredIndex == index}
                                onHover={() => handleHover(index)}
                                onLeave={handleLeave}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

