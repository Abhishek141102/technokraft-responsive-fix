import React from 'react';
import { motion } from 'motion/react';

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
  // Duplicate items create a seamless infinite marquee loop.
  const marqueeItems = [...MILESTONES, ...MILESTONES];

  return (
    <section className="py-20 mt-15 overflow-hidden bg-[#F1F4F8] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Milestones That Define Us
          </h2>
        </motion.div>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-0 right-0 top-14 h-px bg-slate-300/70" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative w-full overflow-hidden"
          >
            <div className="journey-marquee flex w-max gap-6 sm:gap-8">
            {marqueeItems.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group shrink-0 w-[220px] sm:w-[240px] flex flex-col items-center text-center"
              >
                {/* Circular photo */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.22, ease: 'easeOut' }}
                  className="relative z-10 w-28 h-28 rounded-full overflow-hidden border-4 border-white bg-white shadow-md"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>

                {/* Chevron year badge */}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className={`mt-6 w-full h-14 flex items-center justify-center text-white text-xl font-extrabold ${item.color} shadow-sm`}
                  style={{
                    clipPath:
                      'polygon(0% 0%, 88% 0%, 100% 50%, 88% 100%, 0% 100%, 12% 50%)',
                  }}
                >
                  {item.year}
                </motion.div>

                <h3 className="mt-5 text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes journeyMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-50% - 1rem));
          }
        }

        .journey-marquee {
          animation: journeyMarquee 32s linear infinite;
          will-change: transform;
        }

        .journey-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .journey-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};
