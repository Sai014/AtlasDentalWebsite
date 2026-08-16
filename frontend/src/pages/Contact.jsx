import React, { useState, useContext } from "react";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CalendarCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { PageHero, SectionTitle } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { useToast } from "../hooks/use-toast";
import { BookingContext } from "../App";
import { clinic } from "../mock";

const Contact = () => {
  const { toast } = useToast();
  const { openBooking } = useContext(BookingContext);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks for reaching out — we'll get back to you shortly. (Demo)" });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: MapPin, title: "Visit Us", lines: [clinic.address] },
    { icon: Phone, title: "Call Us", lines: [clinic.phoneLandline, clinic.phoneIntl] },
    { icon: Mail, title: "Email Us", lines: [clinic.email] },
    { icon: Clock, title: "Working Hours", lines: ["Mon–Thu: 10AM – 2PM", "Fri: 3PM – 7PM", "Sat–Sun: Closed"] },
  ];

  const mapSrc = `https://maps.google.com/maps?q=${clinic.mapLat},${clinic.mapLng}&z=16&output=embed`;

  return (
    <div>
      <Seo
        title="Contact Us"
        description="Contact Atlas Dental Clinic, Bengaluru — Ramdev Garden, St Thomas Town, Kacharakanahalli 560084. Call 08048034495 or book your dental appointment online today."
        path="/contact"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])}
      />
      <PageHero title="Contact Us" crumb="Contact" />

      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {info.map((c) => (
              <div key={c.title} className="card-soft bg-white rounded-2xl p-6 border border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-sky-50 flex items-center justify-center">
                  <c.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-[#0b2f56] mt-4">{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-slate-500 mt-1 leading-relaxed">{l}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <SectionTitle eyebrow="Send a Message" title="We’d Love to Hear From You" subtitle="Have a question or want to book a visit? Drop us a message and our team will respond promptly." />
              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm">Full Name</Label>
                    <Input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="mt-1.5 h-11" />
                  </div>
                  <div>
                    <Label className="text-sm">Phone</Label>
                    <Input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Mobile number" className="mt-1.5 h-11" />
                  </div>
                </div>
                <div>
                  <Label className="text-sm">Email</Label>
                  <Input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label className="text-sm">Message</Label>
                  <Textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" className="mt-1.5 min-h-28" />
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button type="submit" className="bg-primary hover:bg-[#0958bf] text-white rounded-full px-7 h-11">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                  <a href={`https://wa.me/${clinic.whatsappDigits}`} target="_blank" rel="noopener noreferrer">
                    <Button type="button" className="bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full px-7 h-11">
                      <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                    </Button>
                  </a>
                </div>
              </form>
            </div>

            {/* Map */}
            <div>
              <div className="rounded-3xl overflow-hidden card-soft border border-slate-100">
                <iframe
                  title="Atlas Dental Clinic Location"
                  src={mapSrc}
                  className="w-full h-[380px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 rounded-2xl bg-[#0b3c72] p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-white">
                  <p className="font-display font-bold text-lg">Prefer to book directly?</p>
                  <p className="text-sky-100 text-sm">Reserve your slot online in under a minute.</p>
                </div>
                <Button onClick={() => openBooking()} className="bg-white text-primary hover:bg-sky-50 rounded-full px-6 shrink-0">
                  <CalendarCheck className="w-4 h-4 mr-2" /> Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
