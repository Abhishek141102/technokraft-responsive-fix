import React from "react";
import { MapPin, Phone, Mail, Clock3 } from "lucide-react";

export const GetInTouchSection: React.FC = () => {
  return (
    <section id="get-in-touch" className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Information */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
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
                    href="tel:+918408000048"
                    className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    +91 84080 00048
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
                    href="mailto:info@technokraftservices.com"
                    className="mt-1 inline-block text-sm text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    info@technokraftservices.com
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
                    Mon - Sat: 09:30 AM - 08:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Google Maps iframe */}
          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="TechnoKraft Training & Solution PVT LTD Location"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d374.5721994456583!2d73.76372274615402!3d20.006360139964965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeb9bbe9b8d51%3A0x198c21864b858779!2sTechnoKraft%20Training%20%26%20Solution%20PVT%20LTD!5e1!3m2!1sen!2sus!4v1789020336666!5m2!1sen!2sus"
                className="w-full h-72 sm:h-80 lg:h-[360px] border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
