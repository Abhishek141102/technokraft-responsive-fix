import React from "react";
import { motion, type Variants } from "motion/react";

const TEAM_STRUCTURE = [
  {
    name: "Omkar Mogal",
    role: "Business Analyst",
    image: "/technokraft-responsive-fix/assets/omkar_mogal.jpeg",
    linkedin: "https://www.linkedin.com/in/omkar-mogal-020678350/",
  },
  {
    name: "Dipak Mahajan",
    role: "UI/UX Designer",
    image: "/technokraft-responsive-fix/assets/dipak_mahajan.jpeg",
    linkedin: "https://www.linkedin.com/in/dipak-mahajan-417868229/",
  },
  {
    name: "Kunal Patil",
    role: "Full Stack Developer",
    image: "/technokraft-responsive-fix/assets/kunal_patil.png",
    linkedin: "https://www.linkedin.com/in/kunal-patil11/",
  },
  {
    name: "Sejdeep Kour",
    role: "Digital Marketing Specialist",
    image: "/technokraft-responsive-fix/assets/sejdeep_kaur.jpeg",
    linkedin: "https://www.linkedin.com/in/sejdeep-kour/",
  },
  {
    name: "Sanskruti Sole",
    role: "Human Resources Manager",
    image: "/technokraft-responsive-fix/assets/sanskruti_sole.PNG",
    linkedin: "https://www.linkedin.com/in/sanskruti-sole-aa6433395/",
  },
];


const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.28,
      ease: "easeOut",
    },
  },
};

export const TeamStructure: React.FC = () => {
  return (
    <section id="team-structure" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Meet Our Department Heads
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Our department heads bring together expertise, collaboration, and
            strategic direction to ensure excellence across every area of our
            organization.
          </p>
        </motion.div>

        {/* Team Cards */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {TEAM_STRUCTURE.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.012 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              {/* Top: Image */}
              <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-top"
                />

                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
              </div>

              {/* Bottom: Name, Role, Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="px-2 py-6 text-center"
              >
                {/* Name */}
                <h4 className="text-base font-bold leading-snug text-slate-900">
                  {member.name}
                </h4>

                {/* Designation */}
                <p className="mt-1 text-sm text-blue-600">{member.role}</p>

                {/* Social Links */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {/* LinkedIn */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} LinkedIn`}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-sm font-bold text-slate-500 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    in
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamStructure;
