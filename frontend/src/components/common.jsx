import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BookingContext } from "../App";
import {
  Sparkles, Anchor, Activity, Siren, Search, Leaf, Zap, Baby,
  LayoutGrid, Smile, AlignJustify, Grip, Minus, Crown, Layers, Dot,
  Wind, ScanLine, ShieldCheck, Heart, Droplets, Stethoscope, Star,
} from "lucide-react";

export const iconMap = {
  Sparkles, Anchor, Activity, Siren, Search, Leaf, Zap, Baby,
  LayoutGrid, Smile, AlignJustify, Grip, Minus, Crown, Layers, Dot,
  Wind, ScanLine, ShieldCheck, Heart, Droplets, Stethoscope,
};

export const Icon = ({ name, className }) => {
  const Cmp = iconMap[name] || Sparkles;
  return <Cmp className={className} />;
};

// Section eyebrow + title
export const SectionTitle = ({ eyebrow, title, subtitle, center, light }) => (
  <div className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-12`}>
    {eyebrow && (
      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-sky-50 px-4 py-1.5 rounded-full mb-4">
        <Star className="w-3.5 h-3.5 fill-primary" /> {eyebrow}
      </span>
    )}
    <h2 className={`font-display text-3xl md:text-[42px] leading-tight font-extrabold ${light ? "text-white" : "text-[#0b2f56]"}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`mt-4 text-[17px] leading-relaxed ${light ? "text-sky-100" : "text-slate-500"}`}>
        {subtitle}
      </p>
    )}
  </div>
);

// Reusable page hero banner for inner pages
export const PageHero = ({ title, crumb }) => (
  <section className="hero-gradient pt-16 pb-14 border-b border-sky-100">
    <div className="max-w-7xl mx-auto px-6">
      <nav className="text-sm text-slate-500 mb-3 flex items-center gap-2">
        <Link to="/" className="hover:text-primary">Home</Link>
        <span className="text-slate-300">/</span>
        <span className="text-primary font-medium">{crumb}</span>
      </nav>
      <h1 className="font-display text-4xl md:text-5xl font-extrabold text-[#0b2f56]">{title}</h1>
    </div>
  </section>
);

export const BookButton = ({ service, className, children }) => {
  const { openBooking } = useContext(BookingContext);
  return (
    <button onClick={() => openBooking(service)} className={className}>
      {children}
    </button>
  );
};
