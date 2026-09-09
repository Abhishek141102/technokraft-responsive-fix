import React from 'react';

export const SocialProofLogos: React.FC = () => {
  return (
    <section
      id="social-proof-section"
      className="bg-white border-b border-slate-200 py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by forward-thinking businesses
        </p>

        {/* 6 Grayscale Monochrome Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 items-start justify-items-center opacity-80 hover:opacity-100 transition-opacity">
          {/* Force Motors */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-full border-2 border-slate-700 flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4v16M4 12h16" />
              </svg>
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-tight text-slate-800 text-center">FORCE MOTORS</span>
          </div>

          {/* Vijayanand */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-md bg-slate-800 text-white flex items-center justify-center font-bold text-sm">
              V
            </div>
            <span className="font-extrabold text-xs sm:text-sm tracking-wider text-slate-800 text-center">VIJAYANAND</span>
          </div>

          {/* Medicover Hospitals */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 border border-slate-700 rounded-sm flex items-center justify-center">
              <svg className="w-6 h-6 text-slate-800" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 4h4v6h6v4h-6v6h-4v-6H4v-4h6V4z" />
              </svg>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-tight text-slate-800 text-center">MEDICOVER HOSPITALS</span>
          </div>

          {/* Kaka */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 bg-slate-200 text-slate-900 rounded-sm flex items-center justify-center font-black text-sm">
              K
            </div>
            <span className="font-black text-xs sm:text-base tracking-widest text-slate-800 text-center">KAKA</span>
          </div>

          {/* Polyplex */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 8.5 2 15.5 12 22 22 15.5 22 8.5 12 2" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-slate-800 text-center">POLYPLEX</span>
          </div>

          {/* Suraj */}
          <div className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
            <div className="w-10 h-10 flex items-center justify-center">
              <svg className="w-7 h-7 text-slate-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
            </div>
            <span className="font-bold text-xs sm:text-sm tracking-wider text-slate-800 text-center">SURAJ</span>
          </div>
        </div>
      </div>
    </section>
  );
};