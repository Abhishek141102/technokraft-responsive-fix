import React, { useState, useEffect, useLayoutEffect } from "react";
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
import { ContactSection } from "./components/ContactSection";
import { GetInTouchSection } from "./components/GetInTouchSection";
import { ServiceDetail } from "./components/ServiceDetail";
import { IndustryDetail } from "./components/IndustryDetail";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/Terms&Conditions";
import { Blogs } from "./components/Blogs";
import { BlogDetail } from "./components/BlogDetails";
import { Opportunities } from "./components/Opportunities";

export default function App() {
  // GitHub Pages-compatible routing using the URL hash.
  // This prevents /our-work, /case-study, /about and /contact
  // from returning a 404 when the page is refreshed.
  const getInitialRoute = (): PageRoute => {
    const hash = window.location.hash.toLowerCase();

    if (hash.includes("#/services/")) return "service-detail";
    if (hash.includes("#/case-study")) return "case-study";
    if (hash.includes("#/our-work")) return "our-work";
    if (hash.includes("#/about")) return "about";
    if (hash.includes("#/contact")) return "contact";
    if (hash.includes("#/industries/")) return "industry-detail";
    if (hash.startsWith("#/privacy-policy")) return "privacy-policy";
    if (hash.startsWith("#/terms-&-conditions")) return "terms-&-conditions";
    if (hash.startsWith("#/blog-detail")) return "blog-detail";
    if (hash.startsWith("#/blogs")) return "blogs";
    if (hash.startsWith("#/opportunities")) return "opportunities";

    return "home";
  };

  const getInitialServiceSlug = (): string | null => {
    const hash = window.location.hash.toLowerCase();
    const match = hash.match(/#\/services\/([^?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const getInitialIndustrySlug = (): string | null => {
    const hash = window.location.hash.toLowerCase();
    const match = hash.match(/#\/industries\/([^?]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialRoute());
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string | null>(
    getInitialServiceSlug(),
  );
  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<
    string | null
  >(getInitialIndustrySlug());
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedGoalFilter, setSelectedGoalFilter] =
    useState<string>("All Goals");
  const [selectedIndustryFilter, setSelectedIndustryFilter] =
    useState<string>("All Industries");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    "capernaum-erp",
  );

  // Sync state with popstate (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialRoute());
      setSelectedServiceSlug(getInitialServiceSlug());
      setSelectedIndustrySlug(getInitialIndustrySlug());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const scrollToTopInstantly = () => {
    const html = document.documentElement;
    const body = document.body;

    // Temporarily disable any global CSS scroll-behavior: smooth.
    const previousHtmlBehavior = html.style.scrollBehavior;
    const previousBodyBehavior = body.style.scrollBehavior;

    html.style.scrollBehavior = "auto";
    body.style.scrollBehavior = "auto";

    window.scrollTo(0, 0);
    html.scrollTop = 0;
    body.scrollTop = 0;

    // Restore the original styles after the scroll is completed.
    requestAnimationFrame(() => {
      html.style.scrollBehavior = previousHtmlBehavior;
      body.style.scrollBehavior = previousBodyBehavior;
    });
  };

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    scrollToTopInstantly();

    // Use hash routing for GitHub Pages.
    // GitHub Pages does not provide SPA fallback for paths such as
    // /our-work, /case-study, /about or /contact.
    const hash = page === "home" ? "#/" : `#/${page}`;

    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
  };

  const handleServiceNavigate = (slug: string) => {
    setSelectedServiceSlug(slug);
    setCurrentPage("service-detail");
    const hash = `#/services/${slug}`;
    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
    scrollToTopInstantly();
  };

  const handleIndustryNavigate = (slug: string) => {
    setSelectedIndustrySlug(slug);
    setCurrentPage("industry-detail");
    const hash = `#/industries/${slug}`;
    if (window.location.hash !== hash) {
      window.history.pushState({}, "", hash);
    }
    scrollToTopInstantly();
  };

  // Reset scroll after the new page has rendered as well.
  useLayoutEffect(() => {
    scrollToTopInstantly();
  }, [currentPage, selectedServiceSlug, selectedIndustrySlug]);

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
        onServiceNavigate={handleServiceNavigate}
        onIndustryNavigate={handleIndustryNavigate}
      />

      {/* Page Content */}
      <main className="flex-grow">
        {currentPage === "home" && (
          <>
            <HeroSection
              onNavigate={(page) => {
                if (page === "our-work") {
                  setSelectedGoalFilter("All Goals");
                  setSelectedIndustryFilter("All Industries");
                }
                handleNavigate(page);
              }}
              onOpenContact={() => setIsConsultationOpen(true)}
            />
            <SocialProofLogos />
            <GoalSelector
              onSelectGoal={handleSelectGoal}
              onNavigate={handleNavigate}
            />
            <ProcessFramework />
            <MetricsBar />
            <IndustriesGallery onIndustryNavigate={handleIndustryNavigate} />
            <GetInTouchSection />
          </>
        )}

        {currentPage === "service-detail" && selectedServiceSlug && (
          <ServiceDetail
            key={selectedServiceSlug}
            slug={selectedServiceSlug}
            onOpenContact={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "industry-detail" && selectedIndustrySlug && (
          <IndustryDetail
            key={selectedIndustrySlug}
            slug={selectedIndustrySlug}
            onOpenContact={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "case-study" && (
          <CaseStudyDetail
            projectId={selectedProjectId}
            onNavigate={handleNavigate}
            onOpenContact={() => setIsConsultationOpen(true)}
          />
        )}

        {currentPage === "our-work" && (
          <OurWorkPortfolio
            onNavigate={handleNavigate}
            onOpenContact={() => setIsConsultationOpen(true)}
            onSelectProject={(projectId) => {
              setSelectedProjectId(projectId);
            }}
            selectedGoalFilter="All Goals"
            selectedIndustryFilter="All Industries"
          />
        )}

        {currentPage === "about" && (
          <AboutSection onOpenContact={() => setIsConsultationOpen(true)} />
        )}

        {currentPage === "contact" && <ContactSection />}

        {currentPage === "privacy-policy" && <PrivacyPolicy />}

        {currentPage === "terms-&-conditions" && <TermsOfUse />}

        {currentPage === "blogs" && <Blogs onNavigate={handleNavigate} />}

        {currentPage === "blog-detail" && (
          <BlogDetail onNavigate={handleNavigate} />
        )}

        {currentPage === "opportunities" && (
          <Opportunities onNavigate={handleNavigate} />
        )}
      </main>

      {/* Global Dark Theme Footer */}
      <Footer
        onNavigate={handleNavigate}
        onServiceNavigate={handleServiceNavigate}
        onOpenContact={() => setIsConsultationOpen(true)}
        onIndustryNavigate={handleIndustryNavigate}
      />

      {/* Interactive Consultation / Let's Talk Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
