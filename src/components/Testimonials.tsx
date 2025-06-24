import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Changed from 4000 to 3000 (3 seconds)

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying]);

  // Handle smooth transitions
  const handleTransition = (newIndex: number) => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setActiveIndex(newIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === TESTIMONIALS.length - 1 ? 0 : activeIndex + 1;
    handleTransition(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? TESTIMONIALS.length - 1 : activeIndex - 1;
    handleTransition(prevIndex);
  };

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      handleTransition(index);
    }
  };

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Doctors Trust Reflex
          </h2>
          <p className="text-lg opacity-90">
            Hear from medical professionals who have transformed their NEET PG preparation
          </p>
        </div>
        
        <div 
          className="max-w-5xl mx-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${activeIndex * 100}%)`,
                filter: isTransitioning ? 'blur(1px)' : 'blur(0px)'
              }}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Profile section */}
                      <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="relative mb-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-3 border-teal-300 shadow-lg"
                          />
                          <div className="absolute -top-2 -right-2 bg-teal-400 rounded-full p-1">
                            <Quote size={16} className="text-white" />
                          </div>
                        </div>
                        <h3 className="font-bold text-xl md:text-2xl mb-2 text-teal-100">
                          {testimonial.name}
                        </h3>
                        <div className="bg-teal-500/30 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-teal-200">Medical Student</span>
                        </div>
                      </div>
                      
                      {/* Testimonial content */}
                      <div className="flex-1">
                        <div className="relative">
                          <Quote size={40} className="absolute -top-4 -left-2 opacity-20 text-teal-300" />
                          <p className="text-lg md:text-xl leading-relaxed pl-8 italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            disabled={isTransitioning}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-white/30 p-3 rounded-full group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          
          <button 
            onClick={handleNext}
            disabled={isTransitioning}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 backdrop-blur-sm border border-white/30 p-3 rounded-full group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>
          
          {/* Progress bar */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 rounded-full p-1 backdrop-blur-sm">
            <div className="flex space-x-1">
              {TESTIMONIALS.map((_, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-full"
                >
                  <button
                    onClick={() => handleDotClick(index)}
                    disabled={isTransitioning}
                    className={`block w-12 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-teal-400' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                  {/* Auto-play progress indicator */}
                  {index === activeIndex && isAutoPlaying && (
                    <div 
                      className="absolute top-0 left-0 h-full bg-teal-200 rounded-full animate-pulse"
                      style={{
                        animation: 'progress 3s linear infinite'
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Auto-play indicator */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-white/70 hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-teal-400 animate-pulse' : 'bg-white/40'}`} />
            {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Click to {isAutoPlaying ? 'pause' : 'resume'}
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;