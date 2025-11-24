// "use client"
// import { useState } from 'react';
// import {ArrowUpRight, LucideIcon, Icon} from 'lucide-react';

// type Industry = {
//     id: number;
//     title: string;
//     info1: string;
//     info2: string;
//     img: string;
//     icon: string;
// };

// export default function IndustryCard({ industry }: { industry:Industry } ) {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div
//             className={`w-80 flex-shrink-0  ${isHovered ? "" : "border-l-2"}  transition-all duration-300 cursor-pointer relative h-96`}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >

//             <img
//                 src={industry.img}
//                 alt={industry.title}
//                 className="absolute inset-0 w-full h-full object-cover rounded-2xl"
//             />

//             <div className={`absolute left-0 right-0 top-0 bg-white transition-all duration-300 ease-in-out overflow-hidden ${isHovered ? 'h-0 ' : 'h-64'
//             }`}>
//                 <div className='p-6'>
//                     <div className={`w-16 h-16  rounded-xl flex items-center justify-center mb-4 ${isHovered ? '' : 'bg-green-200'}`}>
//                         {Icon && <Icon className="w-8 h-8 text-green-600" iconNode={[]} />}
//                     </div>
//                     <h2 className="text-2xl font-light text-gray-900 mb-4 line-clamp-2">{industry.title}</h2>
//                     <div className="space-y-3 mb-6">
//                         <p className={`text-base font-light line-clamp-2 ${isHovered ? "text-white font-bold" : "text-gray-700 "}  `}>
//                             {industry.info1}
//                         </p>
//                         <p className="text-gray-700 text-base font-light line-clamp-2">
//                             {industry.info2}
//                         </p>
//                     </div>
//                 </div>
//             </div>


//             <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300  ease-in-out ${isHovered ? 'h-full bg-black' : 'h-32'
//             } ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
//                 <div className="h-full px-6  ">
//                     <div className="w-full h-full rounded-xl" style={{
//                         boxShadow: '0 0 0 24px white'
//                     }}>
//                     </div>
//                     <div className="absolute left-0 top-0 bottom-0 w-6 bg-white"></div>
//                     <div className="absolute right-0 top-0 bottom-0 w-6 bg-white"></div>
//                 </div>
//             </div>


//             <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100  delay-150' : 'opacity-0 duration-300 pointer-events-none'
//             }`}>
//                 <div className="absolute inset-0  flex flex-col justify-between p-6 bg-black/40 text-white rounded-2xl overflow-hidden">
//                     <div className="overflow-y-auto">
//                         <div className="w-16 h-16  border-2 border-white rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm">
//                             {Icon && <Icon className="w-8 h-8 text-white" iconNode={[]} />}
//                         </div>
//                         <h2 className="text-2xl font-light mb-4">{industry.title}</h2>
//                         <div className="space-y-3">
//                             <p className="text-base font-light">{industry.info1}</p>
//                             <p className="text-base font-light">{industry.info2}</p>
//                         </div>
//                     </div>
//                     <button className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity w-fit flex-shrink-0">
//                         View industry
//                         <ArrowUpRight className="w-4 h-4" />
//                     </button>
//                 </div>
//             </div>
//         </div>


//     )

// }