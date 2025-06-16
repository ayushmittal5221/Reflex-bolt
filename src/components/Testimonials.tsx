import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../utils/constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => 
        current === TESTIMONIALS.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  const goToPrev = () => {
    setActiveIndex((current) => 
      current === 0 ? TESTIMONIALS.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((current) => 
      current === TESTIMONIALS.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-800 text-white">
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
          className="max-w-4xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative">
            {/* Testimonial cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                      <div className="flex items-center mb-6">
                        <div className="mr-4">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-teal-300"
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{testimonial.name}</h3>
                          <p className="text-teal-300">Medical Student</p>
                        </div>
                        <Quote size={40} className="ml-auto opacity-20" />
                      </div>
                      <p className="text-lg leading-relaxed">"{testimonial.text}"</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button 
              onClick={goToPrev}
              className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === activeIndex ? 'bg-teal-400' : 'bg-white/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;