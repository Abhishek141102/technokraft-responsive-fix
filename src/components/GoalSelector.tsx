import React from "react";
import { motion } from "motion/react";
import {
  Laptop,
  TrendingUp,
  Cpu,
  RefreshCw,
  BarChart2,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { GOALS_DATA } from "../data/mockData";
import { PageRoute } from "../types";

interface GoalSelectorProps {
  onSelectGoal: (goalId: string) => void;
  onNavigate: (page: PageRoute) => void;
}

export const GoalSelector: React.FC<GoalSelectorProps> = ({
  onSelectGoal,
  onNavigate,
}) => {
  const getIcon = (iconName: string) => {
    const props = {
      className:
        "w-6 h-6 text-blue-600 group-hover:text-blue-700 transition-colors",
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

  const handleCardClick = (goalTitle: string) => {
    onSelectGoal(goalTitle);
    onNavigate("our-work");
  };

  return (
    <section
      id="services"
      className="py-20 bg-[#F8F9FB] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              onClick={() => handleCardClick(goal.title)}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.45, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="group relative bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-shadow duration-300 flex flex-col items-center text-center justify-between cursor-pointer"
            >
              <div className="flex flex-col items-center">
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="w-12 h-12 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600/10 transition-colors"
                >
                  {getIcon(goal.iconName)}
                </motion.div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {goal.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {goal.description}
                </p>
              </div>

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
  );
};
