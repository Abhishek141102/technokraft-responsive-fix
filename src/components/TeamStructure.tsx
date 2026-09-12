import React from "react";
import { motion, type Variants } from "motion/react";

const TEAM_STRUCTURE = [
  {
    name: "Business Analysis Team",
    role: "Business Analyst",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=700&fit=crop",
  },
  {
    name: "Data Analysis Team",
    role: "Data Analyst",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700&fit=crop",
  },
  {
    name: "Creative Design Team",
    role: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=600&h=700&fit=crop",
  },
  {
    name: "Development Team",
    role: "Software Developers",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=700&fit=crop",
  },
  {
    name: "Quality Assurance Team",
    role: "QA & Testing",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=700&fit=crop",
  },
];

const TEAM_SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/tts.net.in/",
  instagram: "https://www.instagram.com/technokraft_services/",
  linkedin: "https://www.linkedin.com/company/ttsnashik/",
};

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
            Our Team Structure
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-slate-500 sm:text-lg">
            A collaborative team of professionals working together to deliver
            reliable, innovative, and impactful digital solutions.
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
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
                  {/* Facebook */}
                  <a
                    href={TEAM_SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Facebook`}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-sm font-bold text-slate-500 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    f
                  </a>

                  {/* Instagram */}
                  <a
                    href={TEAM_SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} Instagram`}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={TEAM_SOCIAL_LINKS.linkedin}
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
