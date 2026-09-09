import React, { useState } from 'react';
import {
  Search,
  Compass,
  Code2,
  Cog,
  Activity,
  Sliders,
  TrendingUp,
} from 'lucide-react';
import { FRAMEWORK_STEPS } from '../data/mockData';

export const ProcessFramework: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const getStepIcon = (iconName: string, isHovered: boolean) => {
    const props = {
      className: `w-5 h-5 transition-colors ${
        isHovered ? 'text-blue-600' : 'text-slate-600'
      }`,
    };
    switch (iconName) {
      case 'Search':
        return <Search {...props} />;
      case 'Compass':
        return <Compass {...props} />;
      case 'Code2':
        return <Code2 {...props} />;
      case 'Cog':
        return <Cog {...props} />;
      case 'Activity':
        return <Activity {...props} />;
      case 'Sliders':
        return <Sliders {...props} />;
      case 'TrendingUp':
        return <TrendingUp {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section id="framework" className="py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Business Transformation Framework
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A proven framework to take your business from where it is today to where you want it to be.
          </p>
        </div>

        {/* Horizontal Linked Timeline Stepper */}
        <div className="relative">
          {/* Subtle connecting dashed line behind the nodes (Desktop only) */}
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

          {/* Grid of 7 Framework Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-3 relative z-10">
            {FRAMEWORK_STEPS.map((item, idx) => {
              const isHovered = activeStep === idx;
              return (
                <div
                  key={item.title}
                  id={`framework-step-${idx}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  {/* Circular Node Icon */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white mb-4 shadow-sm ${
                      isHovered
                        ? 'border-blue-600 bg-blue-50/50 shadow-md scale-110'
                        : 'border-slate-300 group-hover:border-blue-400'
                    }`}
                  >
                    {getStepIcon(item.iconName, isHovered)}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-base font-bold transition-colors mb-1.5 ${
                      isHovered ? 'text-blue-600' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-xs text-slate-500 leading-normal px-1 max-w-[170px]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
