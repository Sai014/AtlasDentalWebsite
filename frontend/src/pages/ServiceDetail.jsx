import React, { useContext } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { CalendarCheck, CheckCircle2, ArrowRight, Phone, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Icon, SectionTitle } from "../components/common";
import Seo from "../components/Seo";
import { BookingContext } from "../App";
import { services, clinic } from "../mock";

const ServiceDetail = () => {
  const { slug } = useParams();
  const { openBooking } = useContext(BookingContext);
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.description,
    image: service.image,
    provider: {
      "@type": "Dentist",
      name: "Atlas Dental Clinic",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
  };

  return (
    <div>
      <Seo
        title={service.title}
        description={`${service.short} Book ${service.title.toLowerCase()} at Atlas Dental Clinic, Bengaluru.`}
        path={`/services/${service.slug}`}
        image={service.image}
        jsonLd={serviceLd}
      />
      {/* Hero */}
      <section className="hero-gradient pt-14 pb-16 border-b border-sky-100">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2">
              <Link to="/" className="hover:text-primary">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link to="/services" className="hover:text-primary">Services</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-primary font-medium">{service.title}</span>
            </nav>
            <div className="h-14 w-14 rounded-2xl bg-white shadow flex items-center justify-center mb-5">
              <Icon name={service.icon} className="w-7 h-7 text-primary" />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#0b2f56] leading-tight">{service.title}</h1>
            <p className="text-lg text-slate-600 mt-4 leading-relaxed">{service.short}</p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Button onClick={() => openBooking(service.slug)} className="h-12 px-7 bg-primary hover:bg-[#0958bf] text-white rounded-full">
                <CalendarCheck className="w-5 h-5 mr-2" /> Book This Service
              </Button>
              <a href={`tel:${clinic.phoneLandline}`}>
                <Button variant="outline" className="h-12 px-7 rounded-full border-slate-300 text-[#0b2f56] hover:border-primary">
                  <Phone className="w-5 h-5 mr-2" /> Call Clinic
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-sky-200/40 blob-shape" />
            <img src={service.image} alt={service.title} className="relative rounded-[2rem] w-full h-[400px] object-cover shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_360px] gap-12">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-[#0b2f56] mb-4">Overview</h2>
            <p className="text-slate-600 leading-relaxed text-[17px]">{service.description}</p>

            <h3 className="font-display text-xl font-bold text-[#0b2f56] mt-10 mb-4">Key Highlights</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {service.highlights.map((h) => (
                <div key={h} className="flex items-start gap-3 bg-sky-50 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#0b2f56]">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="card-soft bg-[#0b3c72] rounded-2xl p-6 text-white sticky top-24">
              <h3 className="font-display text-lg font-bold">Ready to book?</h3>
              <p className="text-sky-100 text-sm mt-2">Schedule your {service.title.toLowerCase()} appointment in just a few taps.</p>
              <Button onClick={() => openBooking(service.slug)} className="w-full mt-5 bg-white text-primary hover:bg-sky-50 rounded-full">
                <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
              </Button>
              <div className="mt-5 pt-5 border-t border-white/15 text-sm space-y-2">
                <p className="flex items-center gap-2 text-sky-100"><Phone className="w-4 h-4" /> {clinic.phoneLandline}</p>
                <p className="text-sky-100">Mon–Thu 10AM–2PM • Fri 3PM–7PM</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle eyebrow="Explore More" title="Related Services" />
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card-soft bg-white rounded-2xl overflow-hidden group border border-slate-100">
                <div className="h-40 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-[#0b2f56]">{s.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Learn More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
