import React from "react";

const BASE_URL =
  (import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ??
  "/";

const CLIENTS = [
  {
    name: "Capernaum Solutions Pvt Ltd",
    logo: `${BASE_URL}assets/capernaum.png`,
  },
  {
    name: "Focus Coaching Classes",
    logo: `${BASE_URL}assets/focus-coching-classes-.webp`,
  },
  { name: "Irasa Perfumes", logo: `${BASE_URL}assets/irasa-logo.jpg` },
  {
    name: "Rejos Transport Services",
    logo: `${BASE_URL}assets/rejos.jpg`,
  },
];

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

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10 items-center justify-items-center opacity-90 hover:opacity-100 transition-opacity">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center gap-2 group cursor-pointer transition-transform hover:scale-105"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 sm:h-14 w-auto max-w-[160px] object-contain"
              />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-slate-600 text-center whitespace-nowrap">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
