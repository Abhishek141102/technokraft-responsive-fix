import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export const GetInTouchSection: React.FC = () => {
  const contactItems = [
    {
      icon: MapPin,
      title: "Address",
      content: (
        <p className="mt-1 text-sm text-slate-600">
          3rd Floor, Kanchwala Avenue, Above Viju&apos;s Dabeli
          <br />
          Thatte Nagar Marg, College Road
          <br />
          Nashik, Maharashtra 422005
        </p>
      ),
    },
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <a
          href="tel:+919370174424"
          className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600 transition-colors"
        >
          +91 93701 74424
        </a>
      ),
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a
          href="mailto:technokraftservicesllp@gmail.com"
          className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600 transition-colors"
        >
          technokraftservicesllp@gmail.com
        </a>
      ),
    },
    {
      icon: Clock3,
      title: "Open Hours",
      content: (
        <p className="mt-1 text-sm text-slate-600">
          Mon - Sat: 09:30 AM - 08:30 PM
        </p>
      ),
    },
  ];

  return (
    <section id="get-in-touch" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Get In Touch With Our Team
            </h2>

            <motion.div
              className="mt-8 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}
            >
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: "easeOut" },
                      },
                    }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-11 h-11 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>

                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      {item.content}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Google Maps iframe */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          >
            <motion.div
              className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100"
              whileHover={{ y: -4, boxShadow: "0 14px 30px rgba(15, 23, 42, 0.10)" }}
              transition={{ duration: 0.3 }}
            >
              <iframe
                title="TechnoKraft Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.054314379084!2d73.7636211!3d20.006235000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebfc6cb832b7%3A0x86b5c410caf6bb9a!2s!5e0!3m2!1sen!2sin!4v1789032168203!5m2!1sen!2sin"
                className="w-full h-72 sm:h-80 lg:h-[360px] border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
