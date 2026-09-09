import React from 'react';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/mockData';
import { PageRoute } from '../types';

interface IndustriesGalleryProps {
  onNavigate: (page: PageRoute) => void;
  onSelectIndustry?: (industry: string) => void;
}

export const IndustriesGallery: React.FC<IndustriesGalleryProps> = ({ onNavigate, onSelectIndustry }) => {
  const handleIndustryClick = (industryName: string) => {
    if (onSelectIndustry) {
      onSelectIndustry(industryName);
    }
    onNavigate('our-work');
  };

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10">
          {/* Header on left */}
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-2 text-base text-slate-600">
              We understand your industry. We build solutions that fit.
            </p>
          </div>

          {/* View All Industries Link */}
          <div>
            <button
              id="view-all-industries-link"
              onClick={() => onNavigate('our-work')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700 cursor-pointer group"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Horizontal Card Gallery (6 rounded cards with dark overlay labels) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INDUSTRIES_DATA.map((ind) => (
            <div
              key={ind.id}
              id={`industry-card-${ind.id}`}
              onClick={() => handleIndustryClick(ind.name)}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image with zoom on hover */}
              <img
                src={ind.imageUrl}
                alt={ind.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-blue-950/90 transition-colors" />

              {/* Bottom Dark Overlay Label */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-center">
                <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-blue-200 transition-colors">
                  {ind.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
