import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  Compass,
  Code2,
  Cog,
  Activity,
  Sliders,
  TrendingUp,
} from "lucide-react";
import { FRAMEWORK_STEPS } from "../data/mockData";

export const ProcessFramework: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const getStepIcon = (iconName: string, isHovered: boolean) => {
    const props = {
      className: `w-5 h-5 transition-colors ${
        isHovered ? "text-blue-600" : "text-slate-600"
      }`,
    };

    switch (iconName) {
      case "Search":
        return <Search {...props} />;
      case "Compass":
        return <Compass {...props} />;
      case "Code2":
        return <Code2 {...props} />;
      case "Cog":
        return <Cog {...props} />;
      case "Activity":
        return <Activity {...props} />;
      case "Sliders":
        return <Sliders {...props} />;
      case "TrendingUp":
        return <TrendingUp {...props} />;
      default:
        return <Code2 {...props} />;
    }
  };

  return (
    <section
      id="framework"
      className="py-24 bg-white border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Business Transformation Framework
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            A proven framework to take your business from where it is today to where you want it to be.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-12 right-12 h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-3 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {FRAMEWORK_STEPS.map((item, idx) => {
              const isHovered = activeStep === idx;

              return (
                <motion.div
                  key={item.title}
                  id={`framework-step-${idx}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  onMouseLeave={() => setActiveStep(null)}
                  variants={{
                    hidden: { opacity: 0, y: 25 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.45, ease: "easeOut" },
                    },
                  }}
                  whileHover={{ y: -6 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <motion.div
                    animate={
                      isHovered
                        ? { scale: 1.1, rotate: 3 }
                        : { scale: 1, rotate: 0 }
                    }
                    transition={{ duration: 0.25 }}
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white mb-4 shadow-sm ${
                      isHovered
                        ? "border-blue-600 bg-blue-50/50 shadow-md"
                        : "border-slate-300 group-hover:border-blue-400"
                    }`}
                  >
                    {getStepIcon(item.iconName, isHovered)}
                  </motion.div>

                  <h3
                    className={`text-base font-bold transition-colors mb-1.5 ${
                      isHovered ? "text-blue-600" : "text-slate-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-normal px-1 max-w-[170px]">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
