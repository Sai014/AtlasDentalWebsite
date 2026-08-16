import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Search } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { PageHero, Icon } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { BookingContext } from "../App";
import { services } from "../mock";

const Services = () => {
  const { openBooking } = useContext(BookingContext);
  const [query, setQuery] = useState("");
  const filtered = services.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <Seo
        title="Dental Services in Bengaluru"
        description="Explore all 18 dental services at Atlas Dental Clinic, Bengaluru — teeth whitening, implants, root canal, aligners, braces, veneers, crowns, paediatric dentistry and more."
        path="/services"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])}
      />
      <PageHero title="Our Dental Services" crumb="Services" />

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-10">
            <div>
              <h2 className="font-display text-2xl font-extrabold text-[#0b2f56]">18 Comprehensive Treatments</h2>
              <p className="text-slate-500 mt-1">Everything from preventive care to advanced cosmetic dentistry.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search services..." className="pl-10 h-11 rounded-full" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((s) => (
              <div key={s.slug} className="card-soft bg-white rounded-2xl overflow-hidden group flex flex-col border border-slate-100">
                <Link to={`/services/${s.slug}`} className="relative h-44 overflow-hidden block">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 h-11 w-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow">
                    <Icon name={s.icon} className="w-5 h-5 text-primary" />
                  </div>
                </Link>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display font-bold text-lg text-[#0b2f56]">{s.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-3 flex-1">{s.short}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button onClick={() => openBooking(s.slug)} className="text-xs font-semibold text-slate-500 hover:text-primary">Book</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-slate-500 py-16">No services match “{query}”.</p>
          )}
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] bg-[#0b3c72] p-10 md:p-14 text-center">
            <h2 className="font-display text-3xl font-extrabold text-white">Not sure which treatment you need?</h2>
            <p className="text-sky-100 mt-3 max-w-xl mx-auto">Book a consultation with digital X-ray and let Dr. Daniya recommend the right plan for you.</p>
            <Button onClick={() => openBooking("consultation-digital-xray")} className="mt-7 h-12 px-8 bg-white text-primary hover:bg-sky-50 rounded-full">
              <CalendarCheck className="w-5 h-5 mr-2" /> Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
