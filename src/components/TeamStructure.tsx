import React from 'react';
import {
  BriefcaseBusiness,
  BarChart3,
  Code2,
  Users,
  UserRound,
} from 'lucide-react';
import { motion, type Variants } from 'motion/react';

const TEAM_STRUCTURE = {
  leader: {
    name: 'Your Name',
    role: 'Founder / Team Lead',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },

  coreTeam: {
    name: 'Core Team',
    description:
      'A collaborative team working together to plan, analyze, design, and develop innovative digital solutions.',
  },

  departments: [
    {
      title: 'Business Analyst',
      shortTitle: 'BA',
      description:
        'Understanding business needs, gathering requirements, and converting ideas into practical solutions.',
      icon: BriefcaseBusiness,
      image:
        'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=500&h=350&fit=crop',
    },
    {
      title: 'Data Analyst',
      shortTitle: 'DA',
      description:
        'Analyzing data, identifying insights, and supporting informed business decisions.',
      icon: BarChart3,
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop',
    },
    {
      title: 'Development Team',
      shortTitle: 'Developers',
      description:
        'Building scalable, reliable, and user-friendly web and software applications.',
      icon: Code2,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=350&fit=crop',
    },
  ],
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};

export const TeamStructure: React.FC = () => {
  return (
    <section
      id="team-structure"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={itemVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            <Users className="h-4 w-4" />
            Our Team
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-center">
            Our Team Structure
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-500">
            A strong team of professionals working together to turn ideas into
            meaningful digital solutions.
          </p>
        </motion.div>

        {/* Hierarchy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="mt-14"
        >
          {/* Leader Card */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-sm rounded-2xl border border-blue-100 bg-white p-5 text-center shadow-lg shadow-blue-100/50"
            >
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-blue-50">
                <img
                  src={TEAM_STRUCTURE.leader.image}
                  alt={TEAM_STRUCTURE.leader.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold text-slate-900">
                {TEAM_STRUCTURE.leader.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-blue-600">
                {TEAM_STRUCTURE.leader.role}
              </p>

              {/* Connector */}
              <div className="absolute -bottom-12 left-1/2 hidden h-12 w-px -translate-x-1/2 bg-blue-200 md:block" />
            </motion.div>
          </motion.div>

          {/* Core Team Card */}
          <motion.div variants={itemVariants} className="mt-20 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-6 text-center text-white shadow-xl shadow-blue-200/50">
              {/* Connector top */}
              <div className="absolute -top-8 left-1/2 h-8 w-px -translate-x-1/2 bg-blue-200" />

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <Users className="h-6 w-6" />
              </div>

              <h3 className="mt-3 text-xl font-bold">
                {TEAM_STRUCTURE.coreTeam.name}
              </h3>

              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-blue-50">
                {TEAM_STRUCTURE.coreTeam.description}
              </p>

              {/* Connector bottom */}
              <div className="absolute -bottom-10 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-blue-200 md:block" />
            </div>
          </motion.div>

          {/* Department Cards */}
          <div className="relative mt-20">
            {/* Horizontal connector for desktop */}
            <div className="absolute -top-10 left-[16.66%] right-[16.66%] hidden h-px bg-blue-200 md:block" />

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-6 md:grid-cols-3"
            >
              {TEAM_STRUCTURE.departments.map((department) => {
                const Icon = department.icon;

                return (
                  <motion.div
                    key={department.shortTitle}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                  >
                    {/* Vertical connector */}
                    <div className="absolute -top-10 left-1/2 hidden h-10 w-px -translate-x-1/2 bg-blue-200 md:block" />

                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={department.image}
                        alt={department.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />

                      <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-md">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="mb-3 inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600">
                        {department.shortTitle}
                      </div>

                      <h3 className="text-xl font-bold text-slate-900">
                        {department.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-slate-500">
                        {department.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamStructure;