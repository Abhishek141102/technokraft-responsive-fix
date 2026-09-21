import React from "react";
import { PageRoute } from "../types";

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
  onServiceNavigate: (slug: string) => void;
  onOpenContact: () => void;
  onIndustryNavigate?: (slug: string) => void; // Optional prop for industry navigation
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onServiceNavigate,
  onOpenContact,
  onIndustryNavigate,
}) => {
  return (
    <footer
      id="global-footer"
      className="bg-[#0B0F19] text-white border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Column 1: TechnoKraft Logo & Mission Statement */}
          <div className="lg:col-span-1 space-y-4">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center cursor-pointer group"
            >
              <img
                src={`${(import.meta as ImportMeta & { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/"}assets/tts_logo.png`}
                alt="TechnoKraft Services LLP"
                className="h-9 w-auto"
              />
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              We build, transform and scale businesses with technology,
              automation and data-driven strategies.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/ttsnashik/"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                in
              </a>
              {/* Instagram */}

              <a
                href="https://www.instagram.com/technokraft_services"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/tts.net.in/"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors text-sm font-bold"
              >
                f
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919370174424"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-md bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.003L2 22l5.11-1.32A9.958 9.958 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.163a8.14 8.14 0 01-4.146-1.135l-.297-.176-3.03.783.808-2.955-.193-.303A8.14 8.14 0 013.837 12c0-4.507 3.657-8.163 8.164-8.163S20.163 7.493 20.163 12 16.508 20.163 12.001 20.163z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Services
            </h3>

            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() =>
                    onServiceNavigate("custom-software-development")
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom Software Development
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("custom-erp-development")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Custom ERP Development
                </button>
              </li>

              <li>
                <button
                  onClick={() =>
                    onServiceNavigate("inventory-management-software")
                  }
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inventory Management
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("web-development")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Web Application Development
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("mobile-app-development")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mobile App Development
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("cloud-devops")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cloud & DevOps Engineering
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("cybersecurity-vapt")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cybersecurity & VAPT Audits
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("ai-machine-learning")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  AI & Machine Learning
                </button>
              </li>

              <li>
                <button
                  onClick={() => onServiceNavigate("nashik-software-services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Nashik Software Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Industries
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("manufacturing")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Manufacturing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("healthcare")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Healthcare
                </button>
              </li>
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("retail-ecommerce")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Retail & E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("education")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("professional-services")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Professional Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onIndustryNavigate?.("startups")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Startups
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How We Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("opportunities")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("blogs")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blogs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate("our-work")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("our-work")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Whitepapers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("our-work")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Guides
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 6: Office Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-4">
              Office Info
            </h3>
            <div className="space-y-4 text-xs text-slate-400">
              <div>
                <p className="text-slate-300 font-semibold mb-1">Address</p>
                <p className="leading-5">
                  3rd Floor, Kanchwala Avenue, Above Viju&apos;s Dabeli,
                  <br />
                  Thatte Nagar Marg, College Road, Nashik, Maharashtra 422005
                </p>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Mobile</p>
                <a
                  href="tel:+919370174424"
                  className="hover:text-white transition-colors"
                >
                  +91 93701 74424
                </a>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Email</p>
                <a
                  href="mailto:info@technokraftservices.com"
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  info@technokraftservices.com
                </a>
              </div>
              <div>
                <p className="text-slate-300 font-semibold mb-1">Open Hours</p>
                <p className="leading-5">
                  Mon - Sat
                  <br />
                  09:30 AM - 08:30 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 TechnoKraft Services LLP. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onNavigate("privacy-policy")}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate("terms-&-conditions")}
              className="hover:text-slate-400 transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
