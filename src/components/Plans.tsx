import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PLANS } from '../utils/constants';

const Plans: React.FC = () => {
  return (
    <section id="plans" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Journey
          </h2>
          <p className="text-lg text-gray-600">
            Select the plan that fits your preparation timeline and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-2 border-teal-500 relative shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-teal-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`p-6 ${plan.popular ? 'bg-teal-50' : 'bg-white'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gray-900">₹{plan.price}</span>
                  <span className="text-gray-500 ml-1">/ {plan.duration} months</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 size={18} className="text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                  }`}
                >
                  {plan.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;