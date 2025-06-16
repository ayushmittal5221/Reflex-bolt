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
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of medical students who have transformed their NEET PG preparation with Reflex Prep
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {PLANS.map((plan) => (
              <a
                key={plan.id}
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  flex items-center justify-center px-4 py-3 rounded-lg font-medium text-center
                  ${plan.id === 2 
                    ? 'bg-teal-500 hover:bg-teal-600 text-white col-span-2 sm:col-span-1' 
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
        
        {/* App screenshots */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-white p-2 rounded-xl shadow-xl rotate-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 w-44">
                <div className="bg-teal-500 text-white p-3">
                  <div className="text-sm font-semibold">Dashboard</div>
                </div>
                <div className="p-3">
                  <div className="bg-white rounded p-2 mb-2 shadow-sm">
                    <div className="w-full h-2 bg-blue-100 rounded-full mb-1"></div>
                    <div className="w-3/4 h-2 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded p-2 mb-2 shadow-sm">
                    <div className="w-full h-2 bg-blue-100 rounded-full mb-1"></div>
                    <div className="w-1/2 h-2 bg-blue-100 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded p-2 shadow-sm">
                    <div className="w-full h-2 bg-blue-100 rounded-full mb-1"></div>
                    <div className="w-2/3 h-2 bg-blue-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            <div className="bg-white p-2 rounded-xl shadow-2xl">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-72 w-48">
                <div className="bg-blue-500 text-white p-3">
                  <div className="text-sm font-semibold">Test Builder</div>
                </div>
                <div className="p-3">
                  <div className="bg-white rounded p-2 mb-2 shadow-sm">
                    <div className="w-full h-3 bg-teal-100 rounded-full"></div>
                  </div>
                  <div className="bg-white rounded p-2 mb-2 shadow-sm">
                    <div className="w-full h-10 bg-blue-100 rounded"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <div className="bg-white p-2 rounded shadow-sm border border-blue-200">
                      <div className="w-full h-2 bg-blue-100 rounded-full"></div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm border border-blue-200">
                      <div className="w-full h-2 bg-blue-100 rounded-full"></div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm border border-blue-200">
                      <div className="w-full h-2 bg-blue-100 rounded-full"></div>
                    </div>
                    <div className="bg-white p-2 rounded shadow-sm border border-blue-200">
                      <div className="w-full h-2 bg-blue-100 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-2 rounded-xl shadow-xl -rotate-3">
              <div className="bg-gray-100 rounded-lg overflow-hidden h-64 w-44">
                <div className="bg-blue-600 text-white p-3">
                  <div className="text-sm font-semibold">Notes</div>
                </div>
                <div className="p-3">
                  <div className="bg-white rounded p-2 mb-2 shadow-sm">
                    <div className="w-full h-20 bg-gray-100 rounded mb-1"></div>
                    <div className="w-full h-2 bg-blue-100 rounded-full mt-2"></div>
                    <div className="w-2/3 h-2 bg-blue-100 rounded-full mt-1"></div>
                  </div>
                  <div className="bg-white rounded p-2 shadow-sm">
                    <div className="w-full h-2 bg-blue-100 rounded-full mb-1"></div>
                    <div className="w-1/2 h-2 bg-blue-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;