import { useState, useRef, useEffect, useCallback } from 'react';
import ServiceCard from '../components/handmade/service-card';
import { SERVICES } from '../constants'
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Services = () => {
  const mobileScrollRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardWidthDesktop, setCardWidthDesktop] = useState(0); // To store desktop card width

  // Function to calculate and set desktop card width
  const calculateDesktopCardWidth = useCallback(() => {
    if (desktopScrollRef.current) {
      const firstCard = desktopScrollRef.current.querySelector('.service-card-desktop-wrapper');
      if (firstCard) {
        // Include gap in the width calculation for accurate scrolling
        const cardComputedStyle = window.getComputedStyle(firstCard);
        const cardMarginRight = parseFloat(cardComputedStyle.marginRight) || 0; // Check for right margin/gap
        const cardWidth = firstCard.offsetWidth + cardMarginRight;
        setCardWidthDesktop(cardWidth);
      }
    }
  }, []);

  useEffect(() => {
    calculateDesktopCardWidth();
    // Recalculate on window resize
    window.addEventListener('resize', calculateDesktopCardWidth);
    return () => window.removeEventListener('resize', calculateDesktopCardWidth);
  }, [calculateDesktopCardWidth]);


  const scrollToIndexMobile = (index) => {
    if (mobileScrollRef.current) {
      // Assuming a consistent width for mobile cards,
      // or calculate based on the first card if they vary.
      const firstCard = mobileScrollRef.current.querySelector('.service-card-mobile-wrapper');
      const cardWidth = firstCard ? firstCard.offsetWidth : mobileScrollRef.current.offsetWidth; // Fallback
      
      mobileScrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const scrollToIndexDesktop = (index) => {
    if (desktopScrollRef.current && cardWidthDesktop > 0) {
      desktopScrollRef.current.scrollTo({
        left: cardWidthDesktop * index,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    // Determine which scroll ref is visible (mobile or desktop)
    if (window.innerWidth < 768) { // Assuming md breakpoint is 768px
      const newIndex = currentIndex === 0 ? SERVICES.length - 1 : currentIndex - 1;
      scrollToIndexMobile(newIndex);
    } else {
      const newIndex = currentIndex === 0 ? SERVICES.length - 1 : currentIndex - 1;
      scrollToIndexDesktop(newIndex);
    }
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    // Determine which scroll ref is visible (mobile or desktop)
    if (window.innerWidth < 768) { // Assuming md breakpoint is 768px
      const newIndex = currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
      scrollToIndexMobile(newIndex);
    } else {
      const newIndex = currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
      scrollToIndexDesktop(newIndex);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      const newIndex = currentIndex === SERVICES.length - 1 ? 0 : currentIndex + 1;
      // Apply scroll based on current view (mobile or desktop)
      if (window.innerWidth < 768) {
        scrollToIndexMobile(newIndex);
      } else {
        scrollToIndexDesktop(newIndex);
      }
      setCurrentIndex(newIndex);
    }, 2000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Resume auto-play after user interaction
  useEffect(() => {
    if (!isAutoPlaying) {
      const timeout = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 2000); // Resume after 8 seconds of inactivity

      return () => clearTimeout(timeout);
    }
  }, [isAutoPlaying]); // Removed currentIndex from dependency to avoid resetting timeout on every scroll


  return (
    <section className="flex w-full flex-col gap-8 sm:gap-12 py-12 sm:py-20 ">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white text-center px-4">
        SERVICES
      </h1>

      {/* Mobile: Show 1.5 cards with horizontal scroll and arrows */}
      <div className='md:hidden relative px-4'>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          aria-label="Next service"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={mobileScrollRef}
          className='overflow-x-auto pb-4 scrollbar-hide'
          style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={() => setIsAutoPlaying(false)}
          // Update current index on scroll end for mobile
          onScroll={(e) => {
            const scrollLeft = e.target.scrollLeft;
            const cardWidth = e.target.offsetWidth;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== currentIndex) {
              setCurrentIndex(newIndex);
              setIsAutoPlaying(false); // Stop autoplay on manual scroll
            }
          }}
        >
          <div className='flex gap-4'>
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 service-card-mobile-wrapper" // Added wrapper class for mobile
                style={{
                  width: 'calc(100vw - 4rem)',
                  maxWidth: '320px',
                  scrollSnapAlign: 'start'
                }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators - Mobile */}
        <div className="flex justify-center gap-2 mt-4">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToIndexMobile(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-blue-500 w-6'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal scroll with larger cards and arrows */}
      <div className='hidden md:block relative'>
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
          aria-label="Previous service"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20 shadow-lg"
          aria-label="Next service"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div
          ref={desktopScrollRef}
          className='overflow-x-auto px-8 lg:px-16 pb-4 scrollbar-hide'
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          // Update current index on scroll end for desktop
          onScroll={(e) => {
            if (cardWidthDesktop > 0) {
              const scrollLeft = e.target.scrollLeft;
              const newIndex = Math.round(scrollLeft / cardWidthDesktop);
              if (newIndex !== currentIndex) {
                setCurrentIndex(newIndex);
                setIsAutoPlaying(false); // Stop autoplay on manual scroll
              }
            }
          }}
        >
          <div className='flex gap-8 lg:gap-10 min-w-max'>
            {SERVICES.map((service, index) => (
              <div key={index} className="w-80 lg:w-96 flex-shrink-0 service-card-desktop-wrapper"> {/* Added wrapper class for desktop */}
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators - Desktop (NEW) */}
        <div className="flex justify-center gap-2 mt-4">
          {SERVICES.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                scrollToIndexDesktop(index);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-blue-500 w-6'
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to service ${index + 1}`}
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

export default Services;