import React from "react";
import { motion, type Variants } from "motion/react";
import { JourneyMilestones } from "./JourneyMilestones";
import { TeamStructure } from "./TeamStructure";
import {
  Eye,
  Target,
  Heart,
  ShieldCheck,
  Zap,
  Code2,
  Users2,
  ArrowRight,
} from "lucide-react";

interface AboutSectionProps {
  onOpenContact: () => void;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Quality & Security",
    description:
      "Best practices, code reviews, and testing for dependable delivery.",
  },
  {
    icon: Zap,
    title: "Agile Delivery",
    description:
      "Iterative releases with clear timelines and progress updates.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "React, Node.js, Flutter, Python, cloud platforms, and more.",
  },
  {
    icon: Users2,
    title: "Client-Focused",
    description: "Solutions aligned with business goals and user experience.",
  },
];

const LEADERSHIP_TEAM = [
  {
    name: "Rahul Makasare",
    role: "Founder & Director",
    image: "/technokraft-responsive-fix/assets/rahulmakasare.jpg",
    facebook: "https://www.facebook.com/r5star",
    instagram: "https://www.instagram.com/_ra_._one_",
    linkedin: "https://www.linkedin.com/in/rahulmakasare",
  },
  {
    name: "Arvind Thevar",
    role: "Founder & Director",
    image: "/technokraft-responsive-fix/assets/arvind_sir.jpg",
    facebook: "https://www.facebook.com/arvind.thevar.90",
    instagram: "https://www.instagram.com/arvindthevar/",
    linkedin: "https://www.linkedin.com/in/arvind-thevar-9a87719a/",
  },
  {
    name: "Sonali Thevar",
    role: "Director",
    image: "/technokraft-responsive-fix/assets/sonalithevar.jpg",
    facebook: "https://www.facebook.com/sonali.bhatt.9210",
    instagram: "https://www.instagram.com/bhattsonali",
    linkedin: "https://www.linkedin.com/in/sonalisharma4",
  },
  {
    name: "Siddhant Dadel",
    role: "Director",
    image: "/technokraft-responsive-fix/assets/siddhant-dadel-3.jpeg",
    facebook: "https://www.facebook.com/share/15y3VQczuH/",
    instagram: "https://instagram.com/siddhant_dadel",
    linkedin:
      "https://www.linkedin.com/in/siddhantdadel?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
            About TechnoKraft Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Leading IT Solutions & Software Company in Nashik
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed">
            TechnoKraft Services is committed to delivering innovative
            technology solutions that empower businesses to achieve their
            digital transformation goals. With over 12 years of industry
            experience, we combine technical expertise with business acumen to
            create long-term value for our clients.
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We believe in long-term partnerships, transparent communication, and
            measurable outcomes. From planning to deployment and support, our
            team works with you at every step.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-2xl bg-[#F8F9FB] border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-5 mx-auto">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center">
              Our Vision
            </h3>
            <p className="mt-3 text-base text-slate-600 leading-relaxed text-center">
              To be the premier technology innovation hub recognized globally
              for world-class IT engineering, client success, and transformative
              digital experiences.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F9FB] border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-5 mx-auto">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 text-center">
              Our Mission
            </h3>
            <p className="mt-3 text-base text-slate-600 leading-relaxed text-center">
              To empower businesses worldwide through reliable, scalable, and
              intelligent software solutions that accelerate digital growth and
              drive sustainable operational efficiency.
            </p>
          </div>
        </motion.div>

        <JourneyMilestones />

        {/* Leadership Team */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="mt-16"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 text-center">
            Meet Our Expert Leaders & Technical Directors
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-slate-500 sm:text-lg">
            Meet the visionaries and leaders guiding TechnoKraft Services with
            strategic direction, industry expertise, and a commitment to
            long-term growth and innovation.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                whileHover={{ y: -4, scale: 1.012 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-shadow bg-white"
              >
                <div className="relative bg-slate-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block w-full h-auto object-contain"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="py-6 text-center"
                >
                  <h4 className="text-base font-bold text-slate-900">
                    {member.name}
                  </h4>
                  <p className="mt-1 text-sm text-blue-600">{member.role}</p>

                  <div className="mt-4 flex items-center justify-center gap-2">
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-sm font-bold"
                    >
                      f
                    </a>

                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-sm font-bold"
                    >
                      in
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <TeamStructure />

        {/* CTA Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 rounded-2xl bg-[#0B0F19] px-6 sm:px-10 py-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to Build Something Reliable?
          </h3>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Let's discuss how our team can help you plan, build, and scale your
            next digital product.
          </p>
          <button
            id="about-cta-consultation-btn"
            onClick={onOpenContact}
            className="mt-7 inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 cursor-pointer active:scale-95"
          >
            <span>Request a Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
