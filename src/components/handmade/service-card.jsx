
import { useState } from 'react';
import { ArrowUpRight, Icon, LaptopMinimal } from 'lucide-react';
import * as Icons from "lucide-react";


export default function serviceCard({ service }) {
    const [isHovered, setIsHovered] = useState(false);
    const LucideIcon = Icons[service.icon] || Icons.LaptopMinimal;

    return (
        <div
      className={`w-full h-full ${isHovered ? "" : "border-l-2"}  transition-all duration-300 cursor-pointer relative`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minHeight: '400px' }}
    >
      <img
        src={service.img}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover rounded-2xl"
      />

      {/* Top section - slides up on hover */}
      <div className={`absolute left-0 right-0 top-0 bg-black transition-all duration-300 ease-in-out overflow-hidden ${
        isHovered ? 'h-0 ' : 'h-48 sm:h-56 md:h-64'
      }`}>
        <div className='p-4 sm:p-6'>
          <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-3 sm:mb-4 ${
            isHovered ? '' : ' border border-stone-50/30 bg-white/20 backdrop-blur-md shadow-lg shadow-white/10'
          }`}>
            <LucideIcon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />
          </div>
          <h2 className="text-xl sm:text-2xl font-light text-white mb-3 sm:mb-4 line-clamp-2">
            {service.title}
          </h2>
          <div className="space-y-2 sm:space-y-3">
            <p className={`text-sm sm:text-base font-light line-clamp-2 ${
              isHovered ? "text-white font-bold" : "text-white"
            }`}>
              {service.info1}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section - decorative border effect */}
      <div className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ease-in-out ${
        isHovered ? 'h-full bg-black' : 'h-24 sm:h-36'
      } ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <div className="h-full px-4 sm:px-6">
          <div className="w-full h-full rounded-xl" style={{
            boxShadow: '0 0 0 16px black, 0 0 0 24px black'
          }}></div>
          <div className="absolute left-0 top-0 bottom-0 w-4 sm:w-6 bg-black"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 sm:w-6 bg-black"></div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
        isHovered ? 'opacity-100 delay-150' : 'opacity-0 duration-300 pointer-events-none'
      }`}>
        <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 bg-black/40 text-white rounded-2xl overflow-hidden">
          <div className="overflow-y-auto">
            <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 border-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 backdrop-blur-sm">
              <LucideIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl font-light mb-3 sm:mb-4">{service.title}</h2>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base font-light">{service.info1}</p>
            </div>
          </div>
          <button className="flex items-center gap-2 text-xs sm:text-sm font-medium hover:opacity-80 transition-opacity w-fit flex-shrink-0 mt-4">
            View service
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>


    )

}