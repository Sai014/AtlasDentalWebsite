import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CalendarCheck, CheckCircle2, ArrowRight, Target, Eye, Award } from "lucide-react";
import { Button } from "../components/ui/button";
import { PageHero, SectionTitle, Icon } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { BookingContext } from "../App";
import { clinic, heroImages, aboutHighlights, stats, clinicImages, doctor } from "../mock";

const About = () => {
  const { openBooking } = useContext(BookingContext);
  return (
    <div>
      <Seo
        title="About Us"
        description="Learn about Atlas Dental Clinic — a modern, technology-driven dental clinic in Bengaluru offering painless, personalized care for all ages, led by Dr. Daniya Muskaan."
        path="/about-us"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }])}
      />
      <PageHero title="About Atlas Dental Clinic" crumb="About Us" />

      {/* Intro */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={heroImages.patient} alt="Atlas Dental" className="rounded-3xl w-full h-[460px] object-cover shadow-xl" />
            <div className="absolute -bottom-8 left-6 right-6 md:left-10 md:right-10 bg-white rounded-2xl shadow-2xl p-6 grid grid-cols-3 gap-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle eyebrow="Welcome" title="Smile with Confidence, Shine with Pride" />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>Welcome to Atlas Dental Clinic – Your Smile’s Best Friend. We transform dental visits into seamless, smile-boosting experiences. Nestled in the heart of Bangalore, our state-of-the-art clinic combines cutting-edge technology with compassionate care to deliver personalized treatments for all ages.</p>
              <p>From routine check-ups and teeth whitening to advanced implants, orthodontics, and root canals, our team of highly skilled dentists ensures precision, comfort, and lasting results.</p>
              <p>What sets us apart? We prioritize your comfort with painless procedures, sedation options, and a great ambiance. Our commitment to hygiene meets global standards, using sterilized equipment and digital imaging for accurate diagnoses.</p>
            </div>
            <Button onClick={() => openBooking()} className="mt-8 bg-primary hover:bg-[#0958bf] text-white rounded-full px-6">
              <CalendarCheck className="w-4 h-4 mr-2" /> Book Your Visit
            </Button>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad brand-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle center eyebrow="Why Choose Us" title="The Atlas Difference" subtitle="Every visit is designed to feel calm, safe and reassuring — from the moment you walk in." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutHighlights.map((h) => (
              <div key={h.title} className="card-soft bg-white rounded-2xl p-7 text-center border border-slate-100">
                <div className="mx-auto h-14 w-14 rounded-2xl bg-sky-50 flex items-center justify-center">
                  <Icon name={h.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-[#0b2f56] mt-5">{h.title}</h3>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", text: "To craft healthy, radiant smiles that boost confidence — through preventive, cosmetic and restorative care delivered with warmth and precision." },
            { icon: Eye, title: "Our Vision", text: "To be Bengaluru’s most trusted, technology-driven dental clinic where every patient feels genuinely cared for." },
            { icon: Award, title: "Our Values", text: "Comfort, hygiene, honesty and excellence — the principles behind every treatment plan and every smile we create." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl p-8 bg-[#0b3c72] text-white">
              <c.icon className="w-9 h-9 text-sky-300" />
              <h3 className="font-display text-xl font-bold mt-5">{c.title}</h3>
              <p className="text-sky-100 text-sm mt-3 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctor strip */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-[2rem] brand-gradient border border-sky-100 p-8 md:p-12 grid lg:grid-cols-[auto_1fr] gap-8 items-center">
            <img src={doctor.image} alt={doctor.name} className="w-40 h-40 rounded-3xl object-cover shadow-xl mx-auto" />
            <div>
              <p className="text-primary font-semibold text-sm">Led By</p>
              <h3 className="font-display text-2xl font-extrabold text-[#0b2f56] mt-1">{doctor.name}, {doctor.role}</h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{doctor.bio[1]}</p>
              <Link to="/doctor"><Button variant="outline" className="mt-5 rounded-full border-primary text-primary hover:bg-primary hover:text-white">View Full Profile <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
