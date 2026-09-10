import React from "react";
import { STATS_METRICS } from "../data/mockData";

export const MetricsBar: React.FC = () => {
  return (
    <section
      id="metrics"
      className="bg-[#0B0F19] text-white py-14 border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-x-10 gap-y-10 text-center max-w-5xl mx-auto">
          {STATS_METRICS.map((stat, idx) => (
            <div
              key={stat.label}
              id={`stat-metric-${idx}`}
              className="flex flex-col items-center justify-center group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                {stat.value}
              </div>
              <p className="mt-2 text-xs sm:text-sm font-medium text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
