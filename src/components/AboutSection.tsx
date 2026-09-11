import React from "react";
import { motion, type Variants } from "motion/react";
import { JourneyMilestones } from './JourneyMilestones';
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
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
    name: 'Rahul Makasare',
    role: 'Founder & Director',
    description:
      'Driving strategic technology direction, enterprise architecture, and long-term client success across digital transformation initiatives.',
  },
  {
    name: 'Arvind Thevar',
    role: 'Founder & Director',
    description:
      'Leading operational excellence, cross-platform product engineering, and cutting-edge software delivery standards.',
  },
  {
    name: 'Sonali Thevar',
    role: 'Director',
    description:
      'Guiding strategic growth, quality assurance frameworks, client relations, and organizational development.',
  },
  {
    name: 'Siddhant Dadel',
    role: 'Director',
    description:
      'Overseeing agile technical operations, full-stack solution architectures, and innovation in digital engineering.',
  },
];

const TEAM_SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/tts.net.in/',
  instagram: 'https://www.instagram.com/technokraft_services/',
  linkedin: 'https://www.linkedin.com/company/ttsnashik/',
};

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenContact,
}) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mx-auto text-center">
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
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-[#F8F9FB] border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To be the premier technology innovation hub recognized globally
              for world-class IT engineering, client success, and transformative
              digital experiences.
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8F9FB] border border-slate-200 p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To empower businesses worldwide through reliable, scalable, and
              intelligent software solutions that accelerate digital growth and
              drive sustainable operational efficiency.
            </p>
          </div>
        </motion.div>

        <JourneyMilestones />

        {/* Core Values */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-blue-600" />
            Our Core Values
          </h3>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <motion.div
                key={value.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                whileHover={{ y: -4, scale: 1.012 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="rounded-xl bg-white border border-slate-200 p-6 text-center hover:border-blue-400/60 hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 mx-auto rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <value.icon className="w-5.5 h-5.5 text-blue-600" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">
                  {value.title}
                </h4>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        

        {/* CTA Section */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mt-16 rounded-2xl bg-[#0B0F19] px-6 sm:px-10 py-12 text-center">
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

        {/* Leadership Team */}
<motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="mt-16">
  <h3 className="text-2xl font-bold text-slate-900 text-center">Our Leadership Team</h3>
  <p className="mt-2 text-sm text-slate-500 text-center max-w-xl mx-auto">
    People who combine engineering expertise with strong communication and a
    quality-first mindset.
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
        {/* Top: gradient photo overlay */}
        <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-6 text-center">
          <img
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=400&background=1D4ED8&color=1D4ED8`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative z-10">
            <p className="text-white text-sm font-medium leading-relaxed">
              {member.description}
            </p>
            <button
              className="mt-5 px-5 py-2 rounded-md bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-sm font-semibold transition-colors cursor-pointer"
            >
              Read More
            </button>
          </div>
        </div>

        {/* Bottom: name, role, socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="py-6 text-center"
        >
          <h4 className="text-base font-bold text-slate-900">{member.name}</h4>
          <p className="mt-1 text-sm text-blue-600">{member.role}</p>

          <div className="mt-4 flex items-center justify-center gap-2">
            
              <a href={TEAM_SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-xs font-bold"
            >
              f
            </a>
            
              <a href={TEAM_SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            
              <a href={TEAM_SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-md border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors text-xs font-bold"
            >
              in
            </a>
          </div>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>
    </section>
  );
};
