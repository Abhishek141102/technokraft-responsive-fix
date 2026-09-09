import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { PageRoute } from "../types";

interface HeroSectionProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  return (
    <section
      id="home-hero-section"
      className="relative min-h-[480px] lg:min-h-[650px] bg-[#0B0F19] text-white overflow-hidden flex items-center"
    >
      <img
        src="/assets/tts_hero_img.png"
        alt="Digital transformation vision"
        className="absolute inset-0 w-full h-full object-cover object-[80%_center] lg:object-center"
      />

      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-[#0B0F19]/20 via-[#0B0F19]/70 to-[#0B0F19]" />

      {/* Main Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 z-10">
        <div className="max-w-[600px] text-center lg:text-left mx-auto lg:mx-0">
          {/* Headline */}
          <h1 className="text-[1.8rem] sm:text-5xl lg:text-[3.05rem] font-extrabold tracking-tight text-white leading-[1.25]">
            We Build. We Transform.
            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">
              We Scale Your Business.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-[560px]">
            We help businesses modernize operations, automate processes, harness
            data and scale with confidence.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              id="hero-explore-work-btn"
              onClick={() => onNavigate("our-work")}
              className="px-7 py-3.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
            >
              <span>Explore Our Work</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              id="hero-schedule-consultation-btn"
              onClick={onOpenContact}
              className="px-7 py-3.5 rounded-md border border-slate-700 hover:border-slate-500 bg-slate-900/60 hover:bg-slate-800 text-slate-200 font-semibold text-base transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95 backdrop-blur-xs"
            >
              <Calendar className="w-5 h-5 text-blue-400" />
              <span>Schedule Consultation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
