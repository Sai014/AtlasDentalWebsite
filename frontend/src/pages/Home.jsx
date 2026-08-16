import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, Phone, Star, Quote, CheckCircle2, Clock, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Icon, SectionTitle } from "../components/common";
import Seo, { faqLd } from "../components/Seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { BookingContext } from "../App";
import {
  clinic, heroImages, aboutHighlights, stats, services, doctor,
  gallery, blogs, testimonials, clinicImages, faqs,
} from "../mock";

const Home = () => {
  const { openBooking } = useContext(BookingContext);

  return (
    <div>
      <Seo
        title="Best Dental Clinic in Bengaluru"
        description="Atlas Dental Clinic in Bengaluru offers painless, technology-driven dental care for all ages — teeth whitening, implants, root canal, aligners & more. Book online today."
        path="/"
        jsonLd={faqLd(faqs)}
      />
      {/* ============ HERO ============ */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-white px-4 py-2 rounded-full shadow-sm">
              <Star className="w-4 h-4 fill-primary" /> {clinic.tagline}
            </span>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-extrabold leading-[1.08] text-[#0b2f56]">
              Your Smile’s <span className="text-gradient">Best Friend</span> in Bengaluru
            </h1>
            <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-xl">
              At Atlas Dental Clinic, we transform dental visits into seamless, smile-boosting
              experiences — combining cutting-edge technology with compassionate, painless care
              for all ages.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button onClick={() => openBooking()} className="h-12 px-7 bg-primary hover:bg-[#0958bf] text-white rounded-full text-base shadow-lg shadow-blue-200">
                <CalendarCheck className="w-5 h-5 mr-2" /> Book Appointment
              </Button>
              <a href={`tel:${clinic.phoneLandline}`}>
                <Button variant="outline" className="h-12 px-7 rounded-full text-base border-slate-300 text-[#0b2f56] hover:bg-white hover:border-primary">
                  <Phone className="w-5 h-5 mr-2" /> {clinic.phoneLandline}
                </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6">
              {["Painless Care", "Sedation Options", "Digital Imaging"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-sky-300/20 blob-shape" />
            <img
              src={heroImages.main}
              alt="Happy patient with a bright smile"
              className="relative rounded-[2rem] w-full h-[460px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
              <div className="h-11 w-11 rounded-full bg-sky-100 flex items-center justify-center">
                <Star className="w-5 h-5 text-primary fill-primary" />
              </div>
              <div>
                <p className="font-display font-bold text-[#0b2f56] leading-none">5.0 Rating</p>
                <p className="text-xs text-slate-500 mt-1">Loved by patients</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float" style={{ animationDelay: "1s" }}>
              <img src={doctor.image} alt={doctor.name} className="h-11 w-11 rounded-full object-cover" />
              <div>
                <p className="font-display font-bold text-[#0b2f56] leading-none text-sm">{doctor.name}</p>
                <p className="text-xs text-slate-500 mt-1">{doctor.role}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-[#0b3c72]">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-extrabold text-white">{s.value}</p>
              <p className="text-sky-200 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img src={heroImages.secondary} alt="Dental care" className="rounded-3xl w-full h-[420px] object-cover shadow-xl" />
            <img src={clinicImages.interior1} alt="Clinic interior" className="hidden md:block absolute -bottom-10 -right-6 w-52 h-40 object-cover rounded-2xl shadow-2xl ring-8 ring-white" />
          </div>
          <div>
            <SectionTitle
              eyebrow="About Us"
              title="A Modern Clinic Built Around Your Comfort"
              subtitle="Nestled in the heart of Bangalore, our state-of-the-art clinic combines cutting-edge technology with compassionate care to deliver personalized treatments for all ages."
            />
            <div className="grid sm:grid-cols-2 gap-5">
              {aboutHighlights.map((h) => (
                <div key={h.title} className="flex gap-3">
                  <div className="h-11 w-11 rounded-xl bg-sky-50 flex items-center justify-center shrink-0">
                    <Icon name={h.icon} className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0b2f56]">{h.title}</p>
                    <p className="text-sm text-slate-500 mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about-us">
              <Button className="mt-8 bg-primary hover:bg-[#0958bf] text-white rounded-full px-6">
                Know More About Us <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="section-pad brand-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle center eyebrow="Featured Services" title="What We Cure" subtitle="From routine check-ups to advanced cosmetic and restorative dentistry — all under one roof." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="card-soft bg-white rounded-2xl overflow-hidden group">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-3 left-3 h-11 w-11 rounded-xl bg-white/95 backdrop-blur flex items-center justify-center shadow">
                    <Icon name={s.icon} className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-lg text-[#0b2f56]">{s.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed line-clamp-2">{s.short}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="rounded-full px-8 h-12 border-primary text-primary hover:bg-primary hover:text-white">
                View All 18 Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DOCTOR ============ */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-sky-100 blob-shape" />
            <img src={doctor.image} alt={doctor.name} className="relative rounded-[2rem] w-full max-w-sm mx-auto h-[440px] object-cover shadow-2xl" />
          </div>
          <div className="order-1 lg:order-2">
            <SectionTitle eyebrow="Meet Our Doctor" title={doctor.name} subtitle={doctor.bio[0]} />
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { k: "Speciality", v: doctor.role },
                { k: "Experience", v: doctor.experience },
                { k: "Education", v: doctor.education },
                { k: "Reg. No", v: doctor.registration },
              ].map((d) => (
                <div key={d.k} className="bg-sky-50 rounded-xl p-4">
                  <p className="text-xs text-slate-500">{d.k}</p>
                  <p className="font-semibold text-[#0b2f56] mt-1">{d.v}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => openBooking()} className="bg-primary hover:bg-[#0958bf] text-white rounded-full px-6">
                <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
              </Button>
              <Link to="/doctor">
                <Button variant="outline" className="rounded-full px-6 border-slate-300 text-[#0b2f56] hover:border-primary">View Details</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="section-pad brand-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle center eyebrow="Image Gallery" title="Pictures That Speak" subtitle="A glimpse into our modern, welcoming clinic and the smiles we create." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.slice(0, 4).map((img, i) => (
              <div key={i} className={`overflow-hidden rounded-2xl ${i === 0 ? "md:row-span-2 md:h-full" : ""}`}>
                <img src={img} alt="Clinic" className={`w-full object-cover hover:scale-110 transition-transform duration-700 ${i === 0 ? "h-full min-h-[220px]" : "h-44"}`} />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/gallery">
              <Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">View Full Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle center eyebrow="Patient Stories" title="Smiles We’ve Transformed" subtitle="Real experiences from patients who trust Atlas Dental with their smiles." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-soft bg-white rounded-2xl p-6 border border-slate-100">
                <Quote className="w-8 h-8 text-sky-200" />
                <p className="text-sm text-slate-600 leading-relaxed mt-3">“{t.text}”</p>
                <div className="flex gap-0.5 mt-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="font-semibold text-[#0b2f56]">{t.name}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SECOND OPINION CTA ============ */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0b3c72] p-10 md:p-14">
            <div className="absolute -top-16 -right-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl" />
            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white">Need a Trusted Second Opinion?</h2>
                <p className="text-sky-100 mt-4 text-lg">Not sure about your diagnosis or treatment plan? We’re here to help — book a consultation or chat with us on WhatsApp.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button onClick={() => openBooking()} className="h-12 px-7 bg-white text-primary hover:bg-sky-50 rounded-full">
                    <CalendarCheck className="w-5 h-5 mr-2" /> Book Consultation
                  </Button>
                  <a href={`https://wa.me/${clinic.whatsappDigits}`} target="_blank" rel="noopener noreferrer">
                    <Button className="h-12 px-7 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full">Message Us</Button>
                  </a>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4 text-white">
                  <Clock className="w-6 h-6 text-sky-300" />
                  <div><p className="font-semibold">Opening Hours</p><p className="text-sm text-sky-100">Mon–Thu 10AM–2PM • Fri 3PM–7PM</p></div>
                </div>
                <div className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4 text-white">
                  <MapPin className="w-6 h-6 text-sky-300" />
                  <div><p className="font-semibold">Visit Us</p><p className="text-sm text-sky-100">St Thomas Town, Bengaluru — 560084</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-6">
          <SectionTitle center eyebrow="FAQ" title="Frequently Asked Questions" subtitle="Everything you need to know before your visit to Atlas Dental Clinic." />
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 rounded-2xl px-5 bg-white card-soft">
                <AccordionTrigger className="text-left font-display font-semibold text-[#0b2f56] hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed text-[15px] pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============ BLOG ============ */}
      <section className="section-pad brand-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle center eyebrow="Updates" title="Read What’s Latest" subtitle="Tips, insights and news from the Atlas Dental team." />
          <div className="grid md:grid-cols-3 gap-7">
            {blogs.slice(0, 3).map((b) => (
              <Link key={b.slug} to={`/updates/${b.slug}`} className="card-soft bg-white rounded-2xl overflow-hidden group">
                <div className="h-52 overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-primary font-semibold">{b.date}</p>
                  <h3 className="font-display font-bold text-lg text-[#0b2f56] mt-2 leading-snug line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-2">{b.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/updates"><Button variant="outline" className="rounded-full px-8 border-primary text-primary hover:bg-primary hover:text-white">All Updates</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
