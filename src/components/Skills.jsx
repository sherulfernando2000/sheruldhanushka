import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SKILLS_DATA } from '../constants'; // Adjust path if you put it in data/skills.js

// A simple component for a single skill card
const SkillCard = ({ category, icon: Icon, skills }) => (
  <div className="h-full max-w-[280px] md:max-w-sm lg:max-w-lg  skill-card bg-white/15 opacity-80 backdrop-blur-sm rounded-xl p-6 lg:p-8 shadow-xl transition-all duration-300 border-l-4 border-blue-500
                hover:-translate-y-2 hover:shadow-2xl hover:border-blue-700
                hover:shadow-blue-500/[0.2] relative overflow-hidden"> {/* Added relative & overflow-hidden for pseudo-element */}
    {/* Optional: Mimic the ::before gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 transition-opacity duration-300 group-hover:opacity-5"></div>


    <h2 className="text-xl lg:text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-3 relative z-10">
      {Icon && <Icon className="w-7 h-7 text-blue-500" />} {category}
    </h2>
    <div className="flex flex-wrap gap-3 relative z-10">
      {skills.map((skill, skillIndex) => (
        <span
          key={skillIndex}
          className="skill-tag bg-gray-800 text-white px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-300 border border-blue-400 hover:bg-blue-500 hover:border-blue-500"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);


const Skills = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidth, setCardWidth] = useState(0); // To store card width including gap

  const calculateCardWidth = useCallback(() => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.querySelector('.skill-card-wrapper');
      if (firstCard) {
        const cardComputedStyle = window.getComputedStyle(firstCard);
        // Get the gap value. Tailwind's `gap-8` (32px) for lg:gap-10 (40px)
        // We'll approximate this by taking the margin-right of the card.
        // It's safer to directly get the grid-gap if using actual grid.
        // For flex, it's often the gap applied to the parent or a margin on child.
        // Let's assume a consistent gap or calculate from actual element.
        // For Tailwind flex `gap-x`, child elements typically don't have individual margins.
        // A robust way would be to get the scroll container's scrollWidth
        // and divide by number of cards, or measure the actual visible card width.
        const width = firstCard.offsetWidth; // This is the width of the card itself
        // To accurately get the 'step' for scrolling, we need card + gap.
        // Since gap is on the parent, we need to manually add it.
        // Let's define the gaps used in the flex container:
        const currentGap = window.innerWidth >= 1024 ? 40 : 32; // lg:gap-10 = 40px, gap-8 = 32px

        setCardWidth(width + currentGap);
      }
    }
  }, []);

  useEffect(() => {
    calculateCardWidth();
    window.addEventListener('resize', calculateCardWidth);
    return () => window.removeEventListener('resize', calculateCardWidth);
  }, [calculateCardWidth]);

  const scrollToIndex = (index) => {
    if (scrollRef.current && cardWidth > 0) {
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === 0 ? SKILLS_DATA.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    const newIndex = currentIndex === SKILLS_DATA.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const newIndex = currentIndex === SKILLS_DATA.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex, scrollToIndex]); // Added scrollToIndex to dependencies

  // Resume auto-play after user interaction
  useEffect(() => {
    if (!isAutoPlaying) {
      const timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 8000); // Resume after 8 seconds of inactivity

      return () => clearTimeout(timeout);
    }
  }, [isAutoPlaying]);

  return (
    <section className="flex w-full flex-col gap-8 sm:gap-12 py-12 sm:py-20 text-white">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center px-4 mb-6">
        MY SKILLS
      </h1>

      <div className='relative sm:px-8 lg:px-16'>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
          aria-label="Previous skill category"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
          aria-label="Next skill category"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className='overflow-x-auto pb-4 scrollbar-hide'
          // We don't use scroll-snap-type here because we are programmatically controlling scroll
          // style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseDown={() => setIsAutoPlaying(false)} // Stop autoplay on user interaction
          onTouchStart={() => setIsAutoPlaying(false)} // For touch devices
          onScroll={(e) => {
            if (cardWidth > 0) {
              const scrollLeft = e.target.scrollLeft;
              // Calculate current index more robustly, considering cards might not perfectly align
              // Find the card closest to the beginning of the scroll container
              let closestIndex = 0;
              let minDistance = Infinity;

              SKILLS_DATA.forEach((_, index) => {
                  const cardPosition = cardWidth * index;
                  const distance = Math.abs(scrollLeft - cardPosition);
                  if (distance < minDistance) {
                      minDistance = distance;
                      closestIndex = index;
                  }
              });

              if (closestIndex !== currentIndex) {
                setCurrentIndex(closestIndex);
                setIsAutoPlaying(false); // Stop autoplay on manual scroll
              }
            }
          }}
        >
          <div className='flex gap-8 lg:gap-10 min-w-max py-4'>
            {SKILLS_DATA.map((skillCategory, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.333rem)] lg:w-[400px] skill-card-wrapper" // Adjust card width as needed
                // For desktop, a fixed width works well. For mobile/tablet, responsive widths.
                // The w-[calc(50%-1rem)] assumes a gap of `gap-8` (2rem/2 = 1rem per card)
                // For 'md' grid-like effect, w-[calc(33.333%-1.333rem)] for gap-8
              >
                <SkillCard {...skillCategory} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {SKILLS_DATA.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-blue-500 w-6' // Active dot styling
                  : 'bg-white/30 hover:bg-white/50' // Inactive dot styling
              }`}
              aria-label={`Go to skill category ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

export default Skills;