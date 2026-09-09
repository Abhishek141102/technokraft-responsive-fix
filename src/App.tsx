import React, { useState, useEffect } from "react";
import { PageRoute } from "./types";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SocialProofLogos } from "./components/SocialProofLogos";
import { GoalSelector } from "./components/GoalSelector";
import { ProcessFramework } from "./components/ProcessFramework";
import { MetricsBar } from "./components/MetricsBar";
import { IndustriesGallery } from "./components/IndustriesGallery";
import { CaseStudyDetail } from "./components/CaseStudyDetail";
import { OurWorkPortfolio } from "./components/OurWorkPortfolio";
import { Footer } from "./components/Footer";
import { ConsultationModal } from "./components/ConsultationModal";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from './components/ContactSection';

export default function App() {
  // Parse initial route from pathname or hash if available
  const getInitialRoute = (): PageRoute => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    if (path.includes("case-study") || hash.includes("case-study"))
      return "case-study";
    if (path.includes("our-work") || hash.includes("our-work"))
      return "our-work";
    if (path.includes("about") || hash.includes("about")) return "about";
    if (path.includes("contact") || hash.includes("contact")) return "contact";
    return "home";
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedGoalFilter, setSelectedGoalFilter] =
    useState<string>("All Goals");
  const [selectedIndustryFilter, setSelectedIndustryFilter] =
    useState<string>("All Industries");

  // Sync state with popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Update history without hard reload
    const path = page === "home" ? "/" : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
  };

  const handleSelectGoal = (goalTitle: string) => {
    setSelectedGoalFilter(goalTitle);
  };

  const handleSelectIndustry = (industryName: string) => {
    setSelectedIndustryFilter(industryName);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Global Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContact={() => setIsConsultationOpen(true)}
      />

      {/* Page Content */}
      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            <HeroSection
              onNavigate={handleNavigate}
              onOpenContact={() => setIsConsultationOpen(true)}
            />
            <SocialProofLogos />
            <GoalSelector
              onSelectGoal={handleSelectGoal}
              onNavigate={handleNavigate}
            />
            <ProcessFramework />
            <MetricsBar />
            <IndustriesGallery
              onNavigate={handleNavigate}
              onSelectIndustry={handleSelectIndustry}
            />
          </>
        )}

        {currentPage === "case-study" && (
          <CaseStudyDetail
            onNavigate={handleNavigate}
            onOpenContact={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "our-work" && (
          <OurWorkPortfolio
            onNavigate={handleNavigate}
            onOpenContact={() => setIsConsultationOpen(true)}
            selectedGoalFilter={selectedGoalFilter}
            selectedIndustryFilter={selectedIndustryFilter}
          />
        )}

        {currentPage === "about" && (
          <AboutSection onOpenContact={() => setIsConsultationOpen(true)} />
        )}

        {currentPage === "contact" && (
          <ContactSection/>
        )}
      </main>

      {/* Global Dark Theme Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setIsConsultationOpen(true)}
      />

      {/* Interactive Consultation / Let's Talk Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
