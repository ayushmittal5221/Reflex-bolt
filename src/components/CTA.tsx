import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PLANS } from '../utils/constants';

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Could You Be Our Next NEET PG Champion?
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {PLANS.map((plan) => (
              <a
                key={plan.id}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center px-4 py-3 rounded-lg font-medium text-center
                  ${plan.id === 2 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  }
                  transition-colors duration-300
                `}
              >
                {plan.duration} months
                {plan.id === 2 && <ArrowRight size={16} className="ml-2" />}
              </a>
            ))}
          </div>
        </div>
        
        {/* App screenshots with headings */}
        <div className="max-w-6xl mx-auto">
          {/* Headings */}
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center w-64">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard</h3>
              <p className="text-sm text-gray-600">Track your progress</p>
            </div>
            <div className="text-center w-72">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Test Builder</h3>
              <p className="text-sm text-gray-600">Create custom tests</p>
            </div>
            <div className="text-center w-64">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Notes</h3>
              <p className="text-sm text-gray-600">Concise study material</p>
            </div>
          </div>
          
          {/* App screenshot cards */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Dashboard Card */}
            <div className="relative group">
              <div className="bg-white p-3 rounded-2xl shadow-2xl rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/1.jpg" 
                    alt="Dashboard" 
                    className="w-64 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Test Builder Card - Center and larger */}
            <div className="relative z-10 group">
              <div className="bg-white p-3 rounded-2xl shadow-3xl scale-110">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/2.jpg" 
                    alt="Test Builder" 
                    className="w-72 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Notes Card */}
            <div className="relative group">
              <div className="bg-white p-3 rounded-2xl shadow-2xl -rotate-3 transition-transform duration-500 hover:rotate-0">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src="/3.jpg" 
                    alt="Notes" 
                    className="w-64 h-auto object-cover"
                    style={{ 
                      clipPath: 'inset(60px 0 80px 0)',
                      marginTop: '-60px',
                      marginBottom: '-80px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-teal-500 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
      </div>
    </section>
  );
};

export default CTA;