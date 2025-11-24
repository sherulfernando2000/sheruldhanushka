// "use client"
// import React, { useState, useRef, useEffect } from 'react';

// type CustomerCardProps = {
//     videoPreview: string;
//     youtubeUrl: string;
//     title: string;
//     isActive: boolean;
//     isHovered: boolean;
//     onHover: () => void;
//     onLeave: () => void;

// }

// export default function CustomerCard ({ videoPreview, youtubeUrl, title, isActive, isHovered, onHover, onLeave }:CustomerCardProps)  {
//     const videoRef = useRef<HTMLVideoElement>(null);
//     const [showTitle, setShowTitle] = useState<boolean>(false);

//     useEffect(() => {
//         if (videoRef.current) {
//             if (isActive) {
//                 videoRef.current.currentTime = 0;
//                 videoRef.current.play().catch(err => console.log('Play failed:', err));
//                 setTimeout(() => setShowTitle(true), 300);
//             } else {
//                 videoRef.current.pause();
//                 setShowTitle(false);
//             }
//         }
//     }, [isActive]);

//     const handleVideoClick = () => {
//         if (youtubeUrl) {
//             window.open(youtubeUrl, '_blank');
//         }
//     };

//     return (
//         <div
//             className={`relative transition-all duration-500 ease-in-out cursor-pointer md:min-w-20 lg:min-w-32 xl:min-w-52 h-64 md:h-80  lg:h-96 flex-shrink-0 
//                 ${isActive
//                 ? 'w-[80vw] md:flex-[3] opacity-100'
//                 : isHovered
//                     ? 'w-90  md:flex-[0.5] blur-[1px]'
//                     : 'w-[80vw] md:flex-[0.5]  blur-[1px]'
//                 }`}
//             onMouseEnter={onHover}
//             onMouseLeave={onLeave}
//             onClick={isActive ? handleVideoClick : undefined}
            
//         >
//             <div className="relative w-full h-full rounded-sm overflow-hidden ">
//                 <video
//                     ref={videoRef}
//                     className="absolute inset-0 w-full h-full object-cover"
//                     muted
//                     loop
//                     playsInline
//                     src={videoPreview}
//                 />

//                 {isActive && (
//                     <div className="absolute top-6 left-6 bg-black/40 px-4 py-2 rounded-full z-10">
//                         <span className="text-white text-sm font-medium flex items-center gap-2">
//                             {/* play button */}
//                             <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                                 <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                             </svg>
//                             Watch the video
//                         </span>
//                     </div>
//                 )}

//                 {isActive && showTitle && (
//                     <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
//                         <h3 className={`text-white font-semibold leading-tight text-base md:text-xl transform transition-all duration-300 ease-in-out delay-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//                             }`}>
//                             {title}
//                         </h3>
//                     </div>
//                 )}

                
//                 {!isActive && (
//                     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
//                         <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center backdrop-blur-sm bg-white/10 transition-transform duration-300">
//                             <div className="w-12 h-12 rounded-full border-2 border-white/60 flex items-center justify-center">
//                             {/* play button */}
//                                 <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
//                                     <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
//                                 </svg>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };



