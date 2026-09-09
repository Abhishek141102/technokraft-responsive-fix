import React from "react";
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
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            What Are You Trying to Achieve?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Choose your goal and see how we can help you get there.
          </p>
        </div>

        {/* 6-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {GOALS_DATA.map((goal) => (
            <div
              key={goal.id}
              id={`goal-card-${goal.id}`}
              onClick={() => handleCardClick(goal.title)}
              className="group relative bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-blue-400/80 transition-all duration-300 flex flex-col items-center text-center justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Top: Blue Line Icon in subtle container */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-lg bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:bg-blue-600/10 group-hover:scale-105 transition-all">
                  {getIcon(goal.iconName)}
                </div>

                {/* Bold Title */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {goal.title}
                </h3>

                {/* Short Descriptor */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {goal.description}
                </p>
              </div>

              {/* Bottom Right Subtle Blue Arrow */}
              <div className="mt-6 flex justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-200">
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
