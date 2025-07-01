import React from 'react';
import { Hammer, FileText } from 'lucide-react';

const TestKnowledge: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Test Your Knowledge?
          </h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Challenge yourself with our specialized quiz formats and free grand tests designed to boost your confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Hammer Quiz CTA */}
            <a 
              href="https://reflex-hammer-769d6zo.gamma.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white px-8 py-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[280px]"
            >
              <div className="flex items-center justify-center mb-2">
                <Hammer size={24} className="mr-3 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-xl">Hammer Quiz</span>
              </div>
              <div className="text-sm opacity-90 font-normal">
                Quick & Focused Practice
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/30 rounded-full"></div>
            </a>
            
            {/* Free Grand Test CTA */}
            <a 
              href="https://app.reflexprep.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-6 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-white/20 min-w-[280px]"
            >
              <div className="flex items-center justify-center mb-2">
                <FileText size={24} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xl">Attempt Free GT</span>
              </div>
              <div className="text-sm opacity-90 font-normal">
                Full-Length Mock Exam
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white/30 rounded-full"></div>
            </a>
          </div>
          
          {/* Additional info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 max-w-lg mx-auto">
              Practice with real exam patterns and get instant feedback to improve your performance
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 blur-2xl"></div>
      </div>
    </section>
  );
};

export default TestKnowledge;