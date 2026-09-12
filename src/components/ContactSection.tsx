import React, { FormEvent, useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Hero */}
      <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="bg-[#0B0F19] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
            Contact Us
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight">
            Build Your Next Digital
            <span className="block text-blue-500">Innovation Together.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base sm:text-lg text-slate-300 leading-relaxed">
            Have a project in mind, need custom enterprise software, AI
            integration, or expert IT consulting? Our team in Nashik is ready to
            assist you.
          </p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Office information */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Get In Touch With Our Team
            </h2>

            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Address</h3>
                  <p className="mt-1 text-sm text-slate-600 leading-6">
                    3rd Floor, Kanchwala Avenue, Above Viju&apos;s Dabeli
                    <br />
                    Thatte Nagar Marg, College Road
                    <br />
                    Nashik, Maharashtra 422005
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <a
                    href="tel:+919370174424"
                    className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600"
                  >
                    +91 93701 74424
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <a
                    href="mailto:technokraftservicesllp@gmail.com"
                    className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600"
                  >
                    technokraftservicesllp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Clock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Open Hours</h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Mon - Sat
                    <br />
                    09:30 AM - 08:30 PM
                  </p>
                </div>
              </div>
            </div>
            

            {/* Google Maps Preview */}
            <div className="mt-5 w-full overflow-hidden rounded-xl border border-slate-200 shadow-sm">
              <iframe
                title="TechnoKraft Services LLP Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.054314379084!2d73.7636211!3d20.006235000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebfc6cb832b7%3A0x86b5c410caf6bb9a!2s!5e0!3m2!1sen!2sin!4v1789032168203!5m2!1sen!2sin"
                className="w-full h-48 sm:h-56 border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-7 lg:p-8">
              {submitted ? (
                <div className="min-h-[420px] flex flex-col items-center justify-center text-center">
                  <CheckCircle2 className="w-14 h-14 text-emerald-500" />
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    Thank You!
                  </h2>
                  <p className="mt-2 max-w-md text-slate-600">
                    Your message has been received. Our team will get in touch
                    with you soon.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-sm text-slate-600">
                    Share a few details and we&apos;ll get back to you.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Your Name *
                        </label>
                        <input
                          required
                          name="name"
                          placeholder="Enter your name"
                          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Your Email *
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Mobile Number *
                        </label>
                        <input
                          required
                          type="tel"
                          name="mobile"
                          placeholder="10-digit mobile number"
                          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-slate-700">
                          Service Interest / Subject *
                        </label>
                        <input
                          required
                          name="subject"
                          placeholder="e.g. Web Development"
                          className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-semibold text-slate-700">
                        Message *
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project or requirement..."
                        className="mt-2 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                      />
                    </div>

                    <button
                      type="submit"
                      className="mx-auto flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm transition-colors"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
