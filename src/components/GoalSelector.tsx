import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Laptop,
  TrendingUp,
  Cpu,
  RefreshCw,
  BarChart2,
  Maximize2,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { GOALS_DATA } from "../data/mockData";
import { PageRoute } from "../types";

interface GoalSelectorProps {
  onSelectGoal: (goalId: string) => void;
  onNavigate: (page: PageRoute) => void;
}

/* =========================================================
   DETAILED INFORMATION FOR EACH GOAL
========================================================= */

const GOAL_DETAILS: Record<
  string,
  {
    intro: string;
    details: string;
    services: string[];
  }
> = {
  build: {
    intro: "Turn your idea into a reliable digital product.",
    details:
      "Whether you are starting a new business, launching a digital product, or replacing an existing process, we help you plan, design, develop, and deploy technology solutions that are built around your requirements.",
    services: [
      "Web & Mobile Application Development",
      "ERP & CRM Solutions",
      "UI/UX Design",
      "Custom Software Development",
    ],
  },

  grow: {
    intro:
      "Use technology to create new opportunities and accelerate business growth.",
    details:
      "We help businesses improve their digital presence, reach more customers, manage leads effectively, and create technology platforms that support customer engagement and revenue growth.",
    services: [
      "Lead Management Solutions",
      "E-Commerce Development",
      "Customer & Sales Platforms",
      "Digital Business Solutions",
    ],
  },

  automate: {
    intro:
      "Reduce repetitive work and make your business processes more efficient.",
    details:
      "We identify time-consuming manual processes and convert them into streamlined digital workflows. Automation can help reduce repetitive tasks, improve accuracy, and give your team more time to focus on important business activities.",
    services: [
      "Business Process Automation",
      "Workflow Automation",
      "ERP & CRM Integration",
      "Automated Reports & Notifications",
    ],
  },

  transform: {
    intro:
      "Modernize your technology and move your business toward a smarter digital future.",
    details:
      "Legacy systems and outdated processes can make it difficult to adapt and grow. We help modernize existing applications, processes, and infrastructure with contemporary technologies and integrated digital solutions.",
    services: [
      "Legacy System Modernization",
      "Digital Transformation",
      "Cloud Migration & Integration",
      "Modern Web & Software Solutions",
    ],
  },

  analyze: {
    intro: "Turn your business data into meaningful insights.",
    details:
      "We help organizations bring their data together, visualize important metrics, and understand business performance through dashboards, reports, and analytics solutions that support informed decision-making.",
    services: [
      "Business Intelligence Dashboards",
      "Data Visualization",
      "Reports & Analytics",
      "Performance & KPI Tracking",
    ],
  },

  scale: {
    intro: "Build technology that can grow with your business.",
    details:
      "As your business grows, your technology needs to handle increasing users, data, transactions, and operational complexity. We design scalable and reliable systems that can evolve with your business.",
    services: [
      "Scalable Application Architecture",
      "Cloud Infrastructure",
      "Performance Optimization",
      "System Integration & Expansion",
    ],
  },
};

export const GoalSelector: React.FC<GoalSelectorProps> = ({ onSelectGoal }) => {
  const [selectedGoal, setSelectedGoal] = useState<
    (typeof GOALS_DATA)[number] | null
  >(null);

  /* =========================================================
     ICON
  ========================================================= */

  const getIcon = (iconName: string, large = false) => {
    const props = {
      className: large
        ? "w-9 h-9 sm:w-10 sm:h-10 text-blue-600"
        : "w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors",
    };

    switch (iconName) {
      case "Laptop":
        return <Laptop {...props} />;

      case "TrendingUp":
        return <TrendingUp {...props} />;

      case "Cpu":
        return <Cpu {...props} />;

      case "RefreshCw":
        return <RefreshCw {...props} />;

      case "BarChart2":
        return <BarChart2 {...props} />;

      case "Maximize2":
        return <Maximize2 {...props} />;

      default:
        return <Laptop {...props} />;
    }
  };

  /* =========================================================
     OPEN MODAL
  ========================================================= */

  const handleCardClick = (goal: (typeof GOALS_DATA)[number]) => {
    setSelectedGoal(goal);
    onSelectGoal(goal.title);
  };

  /* =========================================================
     CLOSE MODAL
  ========================================================= */

  const closeModal = () => {
    setSelectedGoal(null);
  };

  /* =========================================================
     UI
  ========================================================= */

  return (
    <>
      <section
        id="services"
        className="py-20 bg-[#F8F9FB] border-b border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What Are You Trying to Achieve?
            </h2>

            <p className="mt-3 text-base sm:text-lg text-slate-600">
              Choose your goal and see how we can help you get there.
            </p>
          </motion.div>

          {/* =====================================================
              GOAL CARDS
          ===================================================== */}

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {GOALS_DATA.map((goal) => (
              <motion.div
                key={goal.id}
                id={`goal-card-${goal.id}`}
                onClick={() => handleCardClick(goal)}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.45,
                      ease: "easeOut",
                    },
                  },
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="group relative bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-shadow duration-300 flex flex-col items-center text-center justify-between cursor-pointer"
              >
                <div className="flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      rotate: 5,
                      scale: 1.1,
                    }}
                    className="w-12 h-12 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600/10 transition-colors"
                  >
                    {getIcon(goal.iconName)}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {goal.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {goal.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="mt-6 flex justify-center">
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-colors duration-200"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          GOAL DETAILS MODAL
      ========================================================= */}

      <AnimatePresence>
        {selectedGoal && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.94,
                y: 20,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
            >
              {/* =================================================
                  MODAL HEADER
              ================================================= */}

              <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 px-6 sm:px-10 py-8 sm:py-10 text-center">
                {/* Close */}
                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon */}
                <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white flex items-center justify-center shadow-lg">
                  {getIcon(selectedGoal.iconName, true)}
                </div>

                {/* Small Heading */}
                <p className="mt-5 text-sm font-medium text-blue-100">
                  Your Goal
                </p>

                {/* Goal Title */}
                <h3 className="mt-1 text-3xl sm:text-4xl font-extrabold text-white">
                  {selectedGoal.title}
                </h3>
              </div>

              {/* =================================================
                  MODAL CONTENT
              ================================================= */}

              <div className="px-6 sm:px-10 py-8 sm:py-9">
                {/* Intro */}
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
                  {GOAL_DETAILS[selectedGoal.id]?.intro}
                </h4>

                {/* Description */}
                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed text-center max-w-xl mx-auto">
                  {GOAL_DETAILS[selectedGoal.id]?.details}
                </p>

                {/* Services */}
                <div className="mt-8">
                  <h5 className="text-lg font-bold text-slate-900 text-center">
                    How We Can Help
                  </h5>

                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {GOAL_DETAILS[selectedGoal.id]?.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />

                        <span className="text-sm text-slate-700 font-medium">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
