import React, { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  FileSpreadsheet,
  Unplug,
  EyeOff,
  Clock,
  Search,
  Compass,
  Code2,
  Cog,
  BarChart2,
  Sliders,
  Quote,
  TrendingUp,
  Layers,
  ShieldCheck,
  Smartphone,
  Monitor,
} from "lucide-react";
import { PageRoute } from "../types";
import { ROADMAP_PHASES, TESTIMONIALS } from "../data/mockData";

interface CaseStudyDetailProps {
  onNavigate: (page: PageRoute) => void;
  onOpenContact: () => void;
}

export const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  onNavigate,
  onOpenContact,
}) => {
  const [activeSection, setActiveSection] = useState("overview");

  const sidebarLinks = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "The Challenge" },
    { id: "approach", label: "Our Approach" },
    { id: "solution", label: "The Solution" },
    { id: "results", label: "Results" },
    { id: "roadmap", label: "Future Roadmap" },
    { id: "feedback", label: "Client Feedback" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="case-study-page" className="bg-white min-h-screen">
      {/* Breadcrumbs & Hero Header */}
      <div className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Breadcrumbs Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 text-sm mb-6">
            <div className="flex items-center space-x-2 text-slate-500 font-medium">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Home
              </button>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <button
                onClick={() => onNavigate("our-work")}
                className="hover:text-blue-600 cursor-pointer"
              >
                Our Work
              </button>
              <ChevronRight className="w-4 h-4 text-slate-400" />
              <span className="text-slate-900 font-semibold">Case Study</span>
            </div>

            {/* Back Button */}
            <button
              id="back-to-work-btn"
              onClick={() => onNavigate("our-work")}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Our Work</span>
            </button>
          </div>

          {/* Hero Content with Split Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Transforming Operations for a Leading Manufacturing Company
              </h1>
              <p className="mt-3 text-lg text-slate-600 font-normal">
                From manual operations to a connected, data-driven business.
              </p>

              {/* Metadata Strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-4 py-4 px-5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Industry
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    Manufacturing
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Business Type
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    Mid-Market
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Engagement
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    Digital Transformation
                  </span>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                    Timeline
                  </span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">
                    8 Months
                  </span>
                </div>
              </div>
            </div>

            {/* Right Hero Image: Industrial robotic arm */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 h-72 sm:h-80">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Industrial robotic arm"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-blue-900/20" />

                {/* Badge */}
                <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs px-3 py-1.5 rounded-md border border-slate-700/80 font-medium">
                  Smart Factory Integration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Sticky In-Page Navigation Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-1 bg-slate-50/70 p-4 rounded-xl border border-slate-200/80">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 mb-3">
                Contents
              </p>
              {sidebarLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`sidebar-link-${link.id}`}
                    onClick={() => scrollToSection(link.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                      isActive
                        ? "bg-blue-600 text-white font-semibold shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-white" />
                    )}
                  </button>
                );
              })}

              <div className="pt-6 mt-4 border-t border-slate-200">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3.5 text-center">
                  <p className="text-xs font-semibold text-blue-950 mb-1">
                    Need a similar transformation?
                  </p>
                  <button
                    onClick={onOpenContact}
                    className="w-full mt-2 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-md shadow-xs transition-colors"
                  >
                    Talk to an Expert
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Right Content Column */}
          <main className="lg:col-span-9 space-y-16">
            {/* 1. Key Impact Metric Cards (4 Grid) */}
            <section id="overview" className="scroll-mt-32">
              <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                Key Impact Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-black text-blue-600 tracking-tight">
                    40%
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-700 uppercase tracking-wider">
                    Reduction in manual processing
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-black text-blue-600 tracking-tight">
                    3x
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-700 uppercase tracking-wider">
                    Faster reporting and visibility
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-black text-blue-600 tracking-tight">
                    25%
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-700 uppercase tracking-wider">
                    Increase in lead conversion
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-5 hover:border-blue-300 transition-colors">
                  <div className="text-3xl font-black text-blue-600 tracking-tight">
                    10 hrs/week
                  </div>
                  <p className="mt-2 text-xs font-medium text-slate-700 uppercase tracking-wider">
                    Saved in operational work
                  </p>
                </div>
              </div>
            </section>

            {/* 2. The Challenge */}
            <section
              id="challenge"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                The Challenge
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                The client was growing rapidly, but operations were held back by
                manual processes, disconnected systems and limited visibility
                across departments.
              </p>

              {/* 4-Card Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center mb-3">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Manual Data Entry
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    High dependency on Excel and manual tracking
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-3">
                    <Unplug className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Disconnected Systems
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No integration between departments
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                    <EyeOff className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Low Visibility
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    No real-time insights for decision making
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    Slow Reporting
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Reports took days to prepare and compile
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Our Approach */}
            <section
              id="approach"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                Our Approach
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                We followed a structured transformation framework to identify
                gaps, design solutions and drive measurable impact.
              </p>

              {/* Linked 6-Step Horizontal Mini-Process Diagram */}
              <div className="relative">
                <div className="hidden md:block absolute top-6 left-8 right-8 h-0.5 bg-slate-200 z-0" />
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 relative z-10">
                  {[
                    {
                      title: "Discover",
                      desc: "Understand business goals and pain points",
                      icon: Search,
                    },
                    {
                      title: "Strategize",
                      desc: "Create a data-driven transformation roadmap",
                      icon: Compass,
                    },
                    {
                      title: "Build",
                      desc: "Design & develop integrated solutions",
                      icon: Code2,
                    },
                    {
                      title: "Automate",
                      desc: "Automate workflows and business processes",
                      icon: Cog,
                    },
                    {
                      title: "Analyze",
                      desc: "Implement dashboards and analytics",
                      icon: BarChart2,
                    },
                    {
                      title: "Optimize",
                      desc: "Continuously improve and optimize",
                      icon: Sliders,
                    },
                  ].map((step, idx) => {
                    const IconComponent = step.icon;
                    return (
                      <div
                        key={step.title}
                        className="text-center flex flex-col items-center group"
                      >
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center font-bold text-sm mb-3 shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-all">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-tight">
                          {step.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* 4. The Solution */}
            <section
              id="solution"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                The Solution
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-6">
                We built an integrated digital ecosystem that connects people,
                processes and data across the organization.
              </p>

              {/* Checklist with Custom Blue Checkmarks */}
              <div className="space-y-3 mb-10 max-w-2xl">
                {[
                  "Centralized operational dashboard",
                  "Automated workflows and approvals",
                  "Integrated CRM, Inventory & Production",
                  "Real-time analytics with Power BI",
                  "Role-based access and data security",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-800">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Mockup: Dark UI Desktop Dashboard & Companion Mobile App */}
              <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-800 shadow-2xl relative overflow-hidden w-full min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 mb-6 border-b border-slate-800 min-w-0">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-[10px] sm:text-xs text-slate-400 font-mono ml-2 truncate min-w-0">
                      manufacturing-ops-dashboard.technokraft.internal
                    </span>
                  </div>
                  <div className="text-[10px] sm:text-xs text-blue-400 font-medium flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Live Telemetry Connected
                  </div>
                </div>

                {/* Dashboard layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start min-w-0">
                  {/* Left Desktop Panel */}
                  <div className="lg:col-span-8 space-y-4 min-w-0">
                    {/* Top KPI row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Total Plant Output
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          128,420 units
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          +14.2% vs last month
                        </span>
                      </div>
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Active Assembly Lines
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          18 / 18
                        </div>
                        <span className="text-[10px] text-emerald-400 font-medium">
                          100% operational
                        </span>
                      </div>
                      <div className="bg-slate-800/80 p-3.5 rounded-lg border border-slate-700">
                        <span className="text-[11px] font-medium text-slate-400">
                          Avg Lead Time
                        </span>
                        <div className="text-lg font-bold text-white mt-1">
                          4.2 days
                        </div>
                        <span className="text-[10px] text-blue-400 font-medium">
                          Reduced from 11 days
                        </span>
                      </div>
                    </div>

                    {/* Bar Chart Mockup & Pie Chart */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Bar graph */}
                      <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-semibold text-slate-200">
                            Production Velocity (Hours)
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Shift A vs B
                          </span>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2 pt-4 px-2">
                          {[40, 65, 55, 80, 70, 95, 85, 100].map((val, i) => (
                            <div
                              key={i}
                              className="flex-1 flex flex-col items-center gap-1"
                            >
                              <div
                                style={{ height: `${val}%` }}
                                className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-xs hover:brightness-125 transition-all"
                              />
                              <span className="text-[9px] text-slate-400">
                                D{i + 1}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Pie/Doughnut graph */}
                      <div className="bg-slate-800/60 p-4 rounded-lg border border-slate-700 flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-slate-200">
                            Department Allocations
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Real-time
                          </span>
                        </div>
                        <div className="flex items-center justify-center py-2">
                          <svg
                            className="w-28 h-28 transform -rotate-90"
                            viewBox="0 0 36 36"
                          >
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#1E293B"
                              strokeWidth="4"
                            />
                            {/* Blue slice 45% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="4"
                              strokeDasharray="40 100"
                              strokeDashoffset="0"
                            />
                            {/* Cyan slice 30% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#38BDF8"
                              strokeWidth="4"
                              strokeDasharray="25 100"
                              strokeDashoffset="-40"
                            />
                            {/* Amber slice 25% */}
                            <circle
                              cx="18"
                              cy="18"
                              r="14"
                              fill="none"
                              stroke="#F59E0B"
                              strokeWidth="4"
                              strokeDasharray="20 100"
                              strokeDashoffset="-65"
                            />
                          </svg>
                        </div>
                        <div className="grid grid-cols-3 gap-1 text-[10px] text-center text-slate-300">
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-blue-600 mr-1" />
                            Machining
                          </div>
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 mr-1" />
                            Assembly
                          </div>
                          <div>
                            <span className="inline-block w-2 h-2 rounded-full bg-amber-500 mr-1" />
                            QA / Dispatch
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Mobile App Mockup */}
                  <div className="lg:col-span-4 flex justify-center w-full">
                    <div className="w-full max-w-56 bg-slate-950 rounded-2xl p-3 border-2 border-slate-700 shadow-xl">
                      {/* Mobile Notch */}
                      <div className="w-20 h-3 bg-slate-800 rounded-full mx-auto mb-3" />
                      <div className="flex items-center justify-between mb-3 text-slate-300">
                        <span className="text-[11px] font-bold">
                          Plant Companion
                        </span>
                        <Smartphone className="w-3.5 h-3.5 text-blue-400" />
                      </div>
                      <div className="bg-slate-900 p-2 rounded-lg border border-slate-800 mb-2">
                        <span className="text-[9px] text-slate-400 block">
                          Active Alert
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-400">
                          All 6 CNC Mills synced
                        </span>
                      </div>
                      <div className="space-y-1.5 text-[9px] text-slate-400">
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>Inventory sync</span>
                          <span className="text-blue-400 font-mono">100%</span>
                        </div>
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>Dispatch queue</span>
                          <span className="text-emerald-400 font-mono">
                            42 Trucks
                          </span>
                        </div>
                        <div className="p-1.5 bg-slate-900 rounded border border-slate-800 flex justify-between">
                          <span>ERP Latency</span>
                          <span className="text-cyan-400 font-mono">18ms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. Results That Matter */}
            <section
              id="results"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Results That Matter
              </h2>
              <p className="text-base text-slate-600 mb-6">
                Measurable impact that drives real business growth.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-3xl font-black text-blue-700">40%</div>
                  <p className="text-xs font-semibold text-slate-700 mt-2 uppercase tracking-wider">
                    Reduction in manual processing
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-3xl font-black text-blue-700">3x</div>
                  <p className="text-xs font-semibold text-slate-700 mt-2 uppercase tracking-wider">
                    Faster reporting and visibility
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-3xl font-black text-blue-700">25%</div>
                  <p className="text-xs font-semibold text-slate-700 mt-2 uppercase tracking-wider">
                    Increase in lead conversion
                  </p>
                </div>
                <div className="p-6 rounded-xl bg-blue-50/70 border border-blue-200">
                  <div className="text-3xl font-black text-blue-700">
                    10 hrs/week
                  </div>
                  <p className="text-xs font-semibold text-slate-700 mt-2 uppercase tracking-wider">
                    Saved in operational work
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Future Roadmap */}
            <section
              id="roadmap"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                Future Roadmap
              </h2>
              <p className="text-base text-slate-600 mb-8">
                The transformation journey is just beginning.
              </p>

              {/* Stepper Timeline Labeled with Phase 1 to Phase 5 */}
              <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-8">
                {ROADMAP_PHASES.map((item, idx) => {
                  const getStatusBadge = (status: string) => {
                    switch (status) {
                      case "Completed":
                        return "bg-emerald-100 text-emerald-800 border-emerald-300";
                      case "In-Progress":
                        return "bg-amber-100 text-amber-800 border-amber-300";
                      case "Next":
                        return "bg-blue-100 text-blue-800 border-blue-300";
                      default:
                        return "bg-slate-100 text-slate-600 border-slate-300";
                    }
                  };

                  return (
                    <div key={item.phase} className="relative">
                      {/* Circle indicator on vertical bar */}
                      <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-white border-2 border-blue-600" />
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                          {item.phase}
                        </span>
                        <span
                          className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getStatusBadge(item.status)}`}
                        >
                          {item.status}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {item.items}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 7. Client Feedback */}
            <section
              id="feedback"
              className="scroll-mt-32 border-t border-slate-200 pt-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Client Feedback
              </h2>
              <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 relative">
                <Quote className="w-10 h-10 text-blue-500/40 mb-4" />
                <p className="text-base sm:text-lg text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;TechnoKraft understood our business deeply and built a
                  solution that transformed the way we operate. The impact on
                  efficiency and visibility has been remarkable.&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80"
                    alt="Rajesh Patil"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Rajesh Patil
                    </h4>
                    <p className="text-xs text-slate-400">
                      Head of Operations, Force Motors
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};
