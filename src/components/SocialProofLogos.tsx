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
  // Duplicate the logos so the marquee can loop seamlessly.
  const marqueeClients = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="social-proof-section"
      className="bg-white border-b border-slate-200 py-8 sm:py-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <p className="text-center px-4 text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-widest mb-7 sm:mb-8">
          Trusted by forward-thinking businesses
        </p>

        <div className="relative w-full overflow-hidden">
          {/* Soft edge fades for a polished marquee effect */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 z-10 bg-gradient-to-l from-white to-transparent" />

          <div
            className="
              flex w-max items-center
              animate-[trustedPartnersMarquee_24s_linear_infinite]
              hover:[animation-play-state:paused]
              motion-reduce:animate-none
            "
          >
            {marqueeClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="
                  flex w-[190px] sm:w-[240px] md:w-[280px]
                  shrink-0 flex-col items-center justify-center gap-2
                  px-5 sm:px-8
                  opacity-90 hover:opacity-100
                  transition-all duration-300
                  hover:scale-105
                "
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="
                    h-11 sm:h-14
                    w-auto max-w-[145px] sm:max-w-[180px]
                    object-contain
                  "
                />

                <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-slate-600 text-center whitespace-nowrap">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trustedPartnersMarquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
