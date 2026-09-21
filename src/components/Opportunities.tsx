import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Users,
  Rocket,
  CheckCircle2,
  Upload,
  Send,
  ChevronDown,
} from "lucide-react";
import { PageRoute } from "../types";

interface OpportunitiesProps {
  onNavigate: (page: PageRoute) => void;
}

export const Opportunities: React.FC<OpportunitiesProps> = ({ onNavigate }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Backend / email integration can be added later
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0B0F19] pt-32 pb-24">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Career Opportunities
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Start Your Journey With{" "}
              <span className="text-blue-500">TechnoKraft</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Join TechnoKraft Services as an intern and gain practical
              experience by working on real-world technology and business
              projects.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("apply-now")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Apply for Internship
              <Send size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why Join Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Learn. Build. Grow.
            </h2>

            <p className="mt-4 text-slate-600">
              Our internship opportunities are designed to provide practical
              exposure and help students build skills through real project
              experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: BriefcaseBusiness,
                title: "Real Project Experience",
                text: "Work on practical projects and understand real business requirements.",
              },
              {
                icon: Users,
                title: "Mentorship",
                text: "Learn from experienced professionals and receive practical guidance.",
              },
              {
                icon: GraduationCap,
                title: "Skill Development",
                text: "Improve your technical, analytical and professional skills.",
              },
              {
                icon: Rocket,
                title: "Career Exposure",
                text: "Get exposure to professional workflows, teamwork and project delivery.",
              },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERNSHIP ROLES */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Current Opportunities
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Internship Roles
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                
                title: "Business Analyst Intern",
                description:
                  "Assist in understanding business requirements, preparing documentation and analyzing project needs.",
              },
              {
                
                title: "Data Analyst Intern",
                description:
                  "Work with data analysis, reporting, dashboards and extracting meaningful business insights.",
              },
              {
                
                title: "Full Stack Developer Intern",
                description:
                  "Gain practical experience in frontend, backend, databases and full-stack web application development.",
              },
              {
                
                title: "AI / ML Intern",
                description:
                  "Work on artificial intelligence and machine learning concepts, data preparation, model development and practical AI-based solutions.",
              },
              {
                
                title: "Cloud Intern",
                description:
                  "Gain practical exposure to cloud platforms, cloud infrastructure, deployment, storage, networking and basic cloud operations.",
              },
              {
                
                title: "Networking Intern",
                description:
                  "Learn networking fundamentals, network configuration, troubleshooting, security concepts and practical IT infrastructure operations.",
              },
              {
                
                title: "UI / UX Design Intern",
                description:
                  "Work on user interface design, user experience principles, wireframes, prototypes and creating intuitive digital experiences.",
              },
              {
                
                title: "Other",
                description:
                  "Have another area of interest? Tell us about your skills and the role you are looking for.",
              },
            ].map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div>
                  

                  <h3 className="mt-5 text-xl font-bold leading-snug text-slate-900">
                    {role.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {role.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply-now" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0B0F19] p-6 shadow-2xl md:p-10">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Apply Now
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Internship Application
              </h2>

              <p className="mt-4 text-slate-400">
                Fill in your details and tell us about your interests and
                skills.
              </p>
            </div>

            {submitted && (
              <div className="mb-8 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-300">
                <CheckCircle2 className="mt-0.5 shrink-0" size={20} />

                <div>
                  <p className="font-semibold">
                    Application submitted successfully!
                  </p>

                  <p className="mt-1 text-sm text-green-300/80">
                    Thank you for your interest in TechnoKraft Services.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {/* FULL NAME */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Name <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Email Address <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                {/* MOBILE */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                {/* COLLEGE */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    College / University
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your college / university"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>

                

                
              </div>

              {/* ROLE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Preferred Role <span className="text-red-400">*</span>
                </label>

                <div className="relative">
                  <select
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 pr-10 text-white outline-none transition focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Select an internship role
                    </option>

                    <option value="Business Analyst Intern">
                      Business Analyst Intern
                    </option>

                    <option value="Data Analyst Intern">
                      Data Analyst Intern
                    </option>

                    <option value="Full Stack Developer Intern">
                      Full Stack Developer Intern
                    </option>

                    <option value="AI / ML Intern">
                      AI / ML Intern
                    </option>

                    <option value="Cloud Intern">
                      Cloud Intern
                    </option>

                    <option value="Networking Intern">
                      Networking Intern
                    </option>

                    <option value="UI / UX Design Intern">
                      UI / UX Design Intern
                    </option>

                    <option value="Other">Other</option>
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                </div>
              </div>

              {/* OTHER ROLE */}
              {selectedRole === "Other" && (
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Specify Role / Area <span className="text-red-400">*</span>
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="Enter the role or area you are interested in"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                  />
                </div>
              )}

              {/* SKILLS */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Skills / Technologies
                </label>

                <input
                  type="text"
                  placeholder="e.g. React, Node.js, Excel, Power BI, SQL"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              {/* RESUME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Resume <span className="text-red-400">*</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-dashed border-slate-600 bg-slate-900 px-4 py-4 transition hover:border-blue-400">
                  <Upload size={20} className="text-blue-400" />

                  <span className="text-sm text-slate-400">
                    Upload your resume (PDF)
                  </span>

                  <input
                    type="file"
                    required
                    accept=".pdf"
                    className="hidden"
                  />
                </label>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="mx-auto flex w-auto items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Submit Application
                <Send size={18} />
              </button>

              <p className="text-center text-xs text-slate-500">
                By submitting this form, you agree to provide accurate
                information for internship evaluation.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* BACK CTA */}
      <section className="border-t border-slate-200 py-12">
        <div className="text-center">
          <p className="text-slate-600">Want to know more about us?</p>

          <button
            onClick={() => onNavigate("about")}
            className="mt-3 font-semibold text-blue-600 hover:text-blue-700"
          >
            Explore TechnoKraft Services →
          </button>
        </div>
      </section>
    </div>
  );
};
