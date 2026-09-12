import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES_DATA } from "../data/mockData";
import { PageRoute } from "../types";

interface IndustriesGalleryProps {
  onNavigate: (page: PageRoute) => void;
  onSelectIndustry?: (industry: string) => void;
}

export const IndustriesGallery: React.FC<IndustriesGalleryProps> = ({
  onNavigate,
  onSelectIndustry,
}) => {
  const handleIndustryClick = (industryName: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(industryName);
    }
    onNavigate("our-work");
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Industries We Serve
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600">
            We understand your industry. We build solutions that fit.
          </p>

          <button
            id="view-all-industries-link"
            onClick={() => onNavigate("our-work")}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer group"
          >
            <span>View All Industries</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {INDUSTRIES_DATA.map((ind) => (
            <motion.div
              key={ind.id}
              id={`industry-card-${ind.id}`}
              onClick={() => handleIndustryClick(ind.name)}
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
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <motion.img
                src={ind.imageUrl}
                alt={ind.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-blue-950/90 transition-colors duration-300" />

              <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                  {ind.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
