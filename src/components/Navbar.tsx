import React, { useState } from "react";
import { Menu, X, ChevronRight, ArrowUpRight, ChevronDown } from 'lucide-react';
import { PageRoute } from "../types";

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null,
  );
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(
    null,
  );
  const isDark = currentPage === "home";

  const SERVICES_ITEMS = [
  "Custom Software Development",
  "Custom ERP Development",
  "Inventory Management Software",
  "Web Application Development",
  "Mobile App Development",
  "Cloud & DevOps Engineering",
  "Cybersecurity & VAPT Audits",
  "AI & Machine Learning",
  "Nashik Software Services",
];

  const INDUSTRIES_ITEMS = [
    "Manufacturing",
    "Healthcare",
    "Retail & E-commerce",
    "Education",
    "Professional Services",
    "Startups",
  ];

  const navLinks = [
    { label: "Home", page: "home" as PageRoute },
    {
      label: "Services",
      page: "home" as PageRoute,
      hash: "#services",
      dropdown: SERVICES_ITEMS,
    },
    {
      label: "Industries",
      page: "home" as PageRoute,
      hash: "#industries",
      dropdown: INDUSTRIES_ITEMS,
    },
    { label: "Our Work", page: "our-work" as PageRoute },
    { label: "How We Work", page: "home" as PageRoute, hash: "#framework" },
    { label: "Insights", page: "our-work" as PageRoute },
    { label: "About", page: "about" as PageRoute },
    { label: "Contact Us", page: "contact" as PageRoute },
  ];

  const handleLinkClick = (item: {
    label: string;
    page: PageRoute;
    hash?: string;
  }) => {
    setMobileMenuOpen(false);
    onNavigate(item.page);
    if (item.hash && item.page === currentPage) {
      const el = document.querySelector(item.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      id="main-navigation"
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        isDark
          ? "bg-[#0B0F19] text-white border-b border-slate-800/80 shadow-md"
          : "bg-white text-slate-800 border-b border-slate-200 shadow-xs"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: TechnoKraft Brand Logo */}
        <div
          id="nav-brand-logo"
          onClick={() => onNavigate("home")}
          className="flex items-center cursor-pointer group select-none"
        >
          <img
            src={isDark ? "/assets/tts_logo.png" : "/assets/tts_llp_logo.png"}
            alt="TechnoKraft Services LLP"
            className="w-[154px] h-[37px] object-contain"
          />
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav
          id="desktop-nav-links"
          className="hidden lg:flex items-center space-x-7"
        >
          {navLinks.map((item) => {
            const isActive =
              (item.page === currentPage && !item.hash) ||
              (item.page === "our-work" &&
                currentPage === "case-study" &&
                item.label === "Our Work");

            if ("dropdown" in item && item.dropdown) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button
                    id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    
                    className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-1.5 ${
                      isDark
                        ? isActive
                          ? "text-white font-semibold"
                          : "text-slate-300 hover:text-white"
                        : isActive
                          ? "text-blue-600 font-semibold"
                          : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>

                  {openDesktopDropdown === item.label && (
                    <div className={`absolute top-full left-0 pt-3 w-56 z-50`}>
                      <div
                        className={`rounded-lg shadow-xl border overflow-hidden ${
                          isDark
                            ? "bg-[#0B0F19] border-slate-800"
                            : "bg-white border-slate-200"
                        }`}
                      >
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setOpenDesktopDropdown(null);
                              handleLinkClick(item);
                            }}
                            className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                              isDark
                                ? "text-slate-300 hover:bg-slate-800 hover:text-white"
                                : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.label}
                id={`nav-link-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => handleLinkClick(item)}
                className={`text-sm font-medium transition-colors cursor-pointer py-1.5 ${
                  isDark
                    ? isActive
                      ? "text-white font-semibold"
                      : "text-slate-300 hover:text-white"
                    : isActive
                      ? "text-blue-600 font-semibold"
                      : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: CTA Button "Let's Talk" */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-cta-talk-btn"
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md hover:shadow-blue-500/20 active:scale-95 cursor-pointer flex items-center gap-1.5"
          >
            <span>Let&apos;s Talk</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center">
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${
              isDark
                ? "text-slate-300 hover:bg-slate-800"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className={`lg:hidden px-4 pt-2 pb-6 border-b ${
            isDark
              ? "bg-[#0B0F19] border-slate-800 text-white"
              : "bg-white border-slate-200 text-slate-900"
          }`}
        >
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((item) => {
              if ("dropdown" in item && item.dropdown) {
                const isOpen = openMobileDropdown === item.label;
                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(isOpen ? null : item.label)
                      }
                      className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isDark
                          ? "hover:bg-slate-800 text-slate-200"
                          : "hover:bg-slate-100 text-slate-800"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 flex flex-col space-y-1 mt-1">
                        {item.dropdown.map((sub) => (
                          <button
                            key={sub}
                            onClick={() => handleLinkClick(item)}
                            className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              isDark
                                ? "text-slate-400 hover:bg-slate-800 hover:text-white"
                                : "text-slate-600 hover:bg-slate-100"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleLinkClick(item)}
                  className={`text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isDark
                      ? "hover:bg-slate-800 text-slate-200"
                      : "hover:bg-slate-100 text-slate-800"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-md bg-blue-600 text-white font-medium text-center text-sm shadow-sm"
              >
                Let&apos;s Talk
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
