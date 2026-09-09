import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MILESTONES = [
  {
    year: '2014',
    title: 'Company Founded',
    description:
      'Established in Nashik with a dedicated focus on bespoke web and software development.',
    color: 'bg-cyan-400',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop',
  },
  {
    year: '2018',
    title: 'Enterprise Scaling',
    description:
      'Expanded capabilities into enterprise ERP, multi-tenant SaaS platforms, and mobile apps.',
    color: 'bg-blue-500',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
  },
  {
    year: '2022',
    title: 'Cloud & AI Adoption',
    description:
      'Integrated automated AWS/Azure DevOps, microservices architectures, and AI solutions.',
    color: 'bg-blue-600',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop',
  },
  {
    year: '2026',
    title: '50+ Projects Delivered',
    description:
      'Recognized as a leading trusted IT engineering and consulting partner across industries.',
    color: 'bg-blue-900',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop',
  },
];

export const JourneyMilestones: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section className="py-20 mt-15 bg-[#F1F4F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Milestones That Define Us
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Left arrow */}
          <button
            onClick={() => scrollBy('left')}
            aria-label="Previous milestone"
            className="hidden sm:flex absolute -left-4 top-24 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy('right')}
            aria-label="Next milestone"
            className="hidden sm:flex absolute -right-4 top-24 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 sm:gap-8 pb-2"
          >
            {MILESTONES.map((item) => (
              <div
                key={item.year}
                className="snap-center shrink-0 w-[220px] sm:w-[240px] flex flex-col items-center text-center"
              >
                {/* Circular photo */}
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Chevron year badge */}
                <div
                  className={`mt-6 w-full h-14 flex items-center justify-center text-white text-xl font-extrabold ${item.color}`}
                  style={{
                    clipPath:
                      'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%, 12% 50%)',
                  }}
                >
                  {item.year}
                </div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};