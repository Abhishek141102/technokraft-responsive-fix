import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin, Phone, Mail, Clock3 } from "lucide-react";
import { serviceBySlug } from "../data/servicesData";

interface ServiceDetailProps {
  slug: string;
  onOpenContact: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug, onOpenContact }) => {
  const service = serviceBySlug(slug);

  if (!service) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">Service Not Found</h1>
          <p className="mt-3 text-slate-600">The requested service could not be found.</p>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">
      {/* Hero */}
      <motion.section
        className="bg-[#0B0F19] text-white py-16 sm:py-20 lg:py-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {service.eyebrow && (
              <p className="text-xs sm:text-sm font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">
                {service.eyebrow}
              </p>
            )}
            <p className="text-sm font-semibold text-blue-400 mb-3">TechnoKraft Services</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-8 max-w-4xl">
              {service.lead}
            </p>
          </motion.div>
        </div>
      </motion.section>

      <main>
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Intro callout */}
            {service.introTitle && service.intro && (
              <motion.div
                className="rounded-2xl bg-slate-50 border-l-4 border-blue-600 p-6 sm:p-8 mb-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">{service.introTitle}</h2>
                <p className="mt-3 text-slate-600 leading-7">{service.intro}</p>
              </motion.div>
            )}

            {service.cards && service.cards.length > 0 && (
              <section>
                {service.sectionTitle && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">
                    {service.sectionTitle}
                  </h2>
                )}
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } },
                  }}
                >
                  {service.cards.map((card) => (
                    <motion.article
                      key={card.title}
                      variants={{
                        hidden: { opacity: 0, y: 25 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
                      }}
                      whileHover={{ y: -5 }}
                      className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                          <p className="mt-2 text-sm text-slate-600 leading-6">{card.description}</p>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </section>
            )}

            {service.integrations && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">
                  Enterprise Hardware & Third-Party Integrations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.integrations.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 p-4">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                      <span className="text-sm font-medium text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {service.comparison && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">Custom ERP vs. Ready-Made ERP Comparison</h2>
                <div className="overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full min-w-[700px] text-sm">
                    <thead className="bg-slate-900 text-white">
                      <tr>
                        <th className="text-left px-5 py-4 font-semibold">Feature</th>
                        <th className="text-left px-5 py-4 font-semibold">Ready-Made Off-the-Shelf ERP</th>
                        <th className="text-left px-5 py-4 font-semibold">TechnoKraft Custom ERP</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.comparison.map(([feature, ready, custom]) => (
                        <tr key={feature} className="border-t border-slate-200">
                          <td className="px-5 py-4 font-semibold text-slate-900">{feature}</td>
                          <td className="px-5 py-4 text-slate-600">{ready}</td>
                          <td className="px-5 py-4 text-slate-700 font-medium">{custom}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {service.caseStudies && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">Proven ERP Case Studies in Production</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {service.caseStudies.map((item) => (
                    <motion.article
                        key={item.title}
                        className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.45 }}
                        whileHover={{ y: -5 }}
                      >
                      <h3 className="font-bold text-slate-900 text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-6">{item.description}</p>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {service.methodology && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">Our 6-Stage Security Audit Methodology</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {service.methodology.map((item) => (
                    <motion.article
                      key={item.step}
                      className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.45 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="text-sm font-bold text-blue-600">{item.step}</div>
                      <h3 className="mt-2 font-bold text-slate-900 text-lg">{item.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-6">{item.description}</p>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {service.compliance && (
              <motion.section
                className="mt-14 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Compliance Readiness & Data Protection</h2>
                <p className="mt-4 text-slate-600 leading-7">{service.compliance}</p>
              </motion.section>
            )}

            {service.sectors && (
              <section className="mt-14">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">Software Solutions Tailored for Regional Sectors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {service.sectors.map((sector) => (
                    <motion.article
                        key={sector.title}
                        className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm"
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.45 }}
                        whileHover={{ y: -5 }}
                      >
                      <h3 className="font-bold text-slate-900">{sector.title}</h3>
                      <p className="mt-2 text-sm text-slate-600 leading-6">{sector.description}</p>
                    </motion.article>
                  ))}
                </div>
              </section>
            )}

            {service.office && (
              <motion.section
                className="mt-14 rounded-2xl bg-slate-50 border border-slate-200 p-6 sm:p-8"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Visit Our Development Center in Nashik</h2>
                <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                  <div className="flex gap-3"><MapPin className="w-5 h-5 text-blue-600 shrink-0" /><div><p className="font-semibold text-slate-900">Office Address</p><p className="mt-1 text-slate-600 leading-6">{service.office.address}</p></div></div>
                  <div className="flex gap-3"><Phone className="w-5 h-5 text-blue-600 shrink-0" /><div><p className="font-semibold text-slate-900">Phone Inquiries</p><a href="tel:+919370174424" className="mt-1 inline-block text-slate-600 hover:text-blue-600">{service.office.phone}</a></div></div>
                  <div className="flex gap-3"><Mail className="w-5 h-5 text-blue-600 shrink-0" /><div><p className="font-semibold text-slate-900">Email</p><a href="mailto:info@technokraftservices.com" className="mt-1 inline-block text-slate-600 hover:text-blue-600">{service.office.email}</a></div></div>
                  <div className="flex gap-3"><Clock3 className="w-5 h-5 text-blue-600 shrink-0" /><div><p className="font-semibold text-slate-900">Working Hours</p><p className="mt-1 text-slate-600">{service.office.hours}</p></div></div>
                </div>
              </motion.section>
            )}

            {service.faqs && service.faqs.length > 0 && (
              <motion.section
                className="mt-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-7">Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {service.faqs.map((faq) => (
                    <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white">
                      <summary className="list-none cursor-pointer px-5 py-4 font-semibold text-slate-900 flex items-center justify-between gap-4">
                        <span>{faq.question}</span>
                        <ChevronDown className="w-5 h-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-7">{faq.answer}</div>
                    </details>
                  ))}
                </div>
              </motion.section>
            )}

            {service.ctaTitle && (
              <motion.section
                className="mt-14"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl bg-slate-50 border border-slate-200 text-center p-7 sm:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{service.ctaTitle}</h2>
                  {service.ctaText && <p className="mt-3 text-slate-600">{service.ctaText}</p>}
                  <button onClick={onOpenContact} className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition-colors">
                    {service.ctaButton || "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.section>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};
