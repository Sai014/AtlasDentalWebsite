import React, { useContext } from "react";
import { CalendarCheck, GraduationCap, Briefcase, MapPin, Phone, BadgeCheck, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageHero, SectionTitle } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { BookingContext } from "../App";
import { doctor, clinic } from "../mock";

const Doctor = () => {
  const { openBooking } = useContext(BookingContext);
  const physicianLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Dr. Daniya Muskaan",
    medicalSpecialty: "Dentistry",
    jobTitle: "Dental Surgeon",
    image: doctor.image,
    worksFor: { "@type": "Dentist", name: "Atlas Dental Clinic" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  };
  const details = [
    { icon: BadgeCheck, k: "Speciality", v: doctor.role },
    { icon: GraduationCap, k: "Education", v: doctor.education },
    { icon: Briefcase, k: "Experience", v: doctor.experience },
    { icon: Phone, k: "Mobile", v: doctor.mobile },
    { icon: BadgeCheck, k: "Membership", v: doctor.membership },
    { icon: MapPin, k: "Location", v: doctor.location },
  ];
  return (
    <div>
      <Seo
        title="Dr. Daniya Muskaan — Dental Surgeon"
        description="Meet Dr. Daniya Muskaan, Dental Surgeon at Atlas Dental Clinic, Bengaluru. Specialising in cosmetic dentistry, veneers, crowns, whitening and restorative care."
        path="/doctor"
        jsonLd={physicianLd}
      />
      <PageHero title="Our Doctor" crumb="Our Doctor" />

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[380px_1fr] gap-12">
          {/* Left card */}
          <div>
            <div className="card-soft bg-white rounded-3xl overflow-hidden border border-slate-100 sticky top-24">
              <div className="relative">
                <img src={doctor.image} alt={doctor.name} className="w-full h-80 object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2f56]/80 to-transparent p-5">
                  <p className="font-display text-xl font-bold text-white">{doctor.name}</p>
                  <p className="text-sky-200 text-sm">{doctor.role}</p>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {details.map((d) => (
                  <div key={d.k} className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-sky-50 flex items-center justify-center shrink-0">
                      <d.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-xs text-slate-500">{d.k}</span>
                      <span className="text-sm font-semibold text-[#0b2f56]">{d.v}</span>
                    </div>
                  </div>
                ))}
                <Button onClick={() => openBooking()} className="w-full mt-2 bg-primary hover:bg-[#0958bf] text-white rounded-full">
                  <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
                </Button>
              </div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <SectionTitle eyebrow="Profile" title={`About ${doctor.name}`} />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              {doctor.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <h3 className="font-display text-xl font-bold text-[#0b2f56] mt-10 mb-4">Areas of Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {doctor.specialities.map((s) => (
                <div key={s} className="flex items-center gap-3 bg-sky-50 rounded-xl px-4 py-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-[#0b2f56]">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-[#0b3c72] p-8 text-white">
              <h3 className="font-display text-xl font-bold">A calm, spa-like experience</h3>
              <p className="text-sky-100 mt-3 leading-relaxed">{doctor.bio[2]}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Doctor;
