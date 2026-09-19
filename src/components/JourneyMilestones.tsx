import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MILESTONES = [
  {
    year: '2014',
    title: 'Company Founded',
    description:
      'Established in Nashik with a dedicated focus on bespoke web and software development.',
    color: 'bg-cyan-400',
    image:
      '/technokraft-responsive-fix/assets/tts_llp_logo.png',
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
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=300&fit=crop',
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const showPrevious = () => {
    setDirection(-1);
    setCurrentIndex((current) =>
      current === 0 ? MILESTONES.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setDirection(1);
    setCurrentIndex((current) =>
      current === MILESTONES.length - 1 ? 0 : current + 1,
    );
  };

  const item = MILESTONES[currentIndex];

  return (
    <section className="mt-15 overflow-hidden border-b border-slate-200 bg-[#F1F4F8] py-14 sm:py-15">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Milestones That Define Us
          </h2>
        </motion.div>

        <div className="relative mx-auto mt-12 max-w-2xl sm:mt-14">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-14 h-px bg-slate-300/70" />

          {/* Previous button */}
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous milestone"
            className="absolute left-0 top-12 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:scale-105 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next milestone"
            className="absolute right-0 top-12 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-md transition-all hover:scale-105 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="overflow-hidden px-12 sm:px-16">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.div
                key={item.year}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="flex min-h-[390px] flex-col items-center text-center"
              >
                {/* Circular photo */}
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative z-10 h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white bg-white shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-contain"
                  />
                </motion.div>

                {/* Year badge */}
                <div
                  className={`mt-6 flex h-14 w-full items-center justify-center text-xl font-extrabold text-white shadow-sm ${item.color}`}
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
                <p className="mt-2 max-w-md text-base leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slide indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {MILESTONES.map((milestone, index) => (
              <button
                key={milestone.year}
                type="button"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                aria-label={`Go to ${milestone.year} milestone`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-6 bg-blue-600'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
