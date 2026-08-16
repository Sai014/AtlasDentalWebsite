import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowRight } from "lucide-react";
import { clinic, services } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-[#0b2f56] text-slate-200 mt-0">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={clinic.logo} alt="Atlas Dental" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
              <div>
                <p className="font-display font-extrabold text-white text-lg leading-tight">Atlas Dental</p>
                <p className="text-xs text-sky-300">Clinic • Bengaluru</p>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {clinic.tagline}. Modern, technology-driven dental care with a gentle,
              personalized touch for every smile.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "About Us", to: "/about-us" },
                { label: "Our Doctor", to: "/doctor" },
                { label: "All Services", to: "/services" },
                { label: "Updates & Blog", to: "/updates" },
                { label: "Photo Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-300 hover:text-sky-300 transition-colors inline-flex items-center gap-1.5 group">
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular services */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Popular Services</h4>
            <ul className="space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-slate-300 hover:text-sky-300 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-sky-300 shrink-0" />
                <span className="text-slate-300 leading-relaxed">{clinic.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-300 shrink-0" />
                <a href={`tel:${clinic.phoneLandline}`} className="text-slate-300 hover:text-sky-300">{clinic.phoneLandline}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-300 shrink-0" />
                <a href={`mailto:${clinic.email}`} className="text-slate-300 hover:text-sky-300">{clinic.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-sky-300 shrink-0" />
                <span className="text-slate-300">Mon–Thu: 10AM–2PM<br />Fri: 3PM–7PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Atlas Dental Clinic. All rights reserved.</p>
          <p>Ramdev Garden, St Thomas Town, Bengaluru — 560084</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
