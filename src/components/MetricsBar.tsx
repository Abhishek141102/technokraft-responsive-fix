import React from "react";
import { motion } from "motion/react";
import { STATS_METRICS } from "../data/mockData";

export const MetricsBar: React.FC = () => {
  return (
    <section
      id="metrics"
      className="bg-[#0B0F19] text-white py-14 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-10 text-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {STATS_METRICS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              id={`stat-metric-${idx}`}
              className="flex flex-col items-center justify-center group"
              variants={{
                hidden: { opacity: 0, y: 25, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -5, scale: 1.04 }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
