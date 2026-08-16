import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays } from "lucide-react";
import { PageHero } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { blogs } from "../mock";

const Blog = () => {
  const [featured, ...rest] = blogs;
  return (
    <div>
      <Seo
        title="Dental Health Updates & Blog"
        description="Read the latest dental health tips, treatment insights and news from Atlas Dental Clinic, Bengaluru — wisdom teeth, clear aligners, paediatric care and more."
        path="/updates"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Updates", path: "/updates" }])}
      />
      <PageHero title="Latest Updates" crumb="Updates" />
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured */}
          <Link to={`/updates/${featured.slug}`} className="card-soft grid md:grid-cols-2 bg-white rounded-3xl overflow-hidden group border border-slate-100 mb-14">
            <div className="h-64 md:h-full overflow-hidden">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-primary bg-sky-50 px-3 py-1.5 rounded-full">
                <CalendarDays className="w-3.5 h-3.5" /> {featured.date}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-[#0b2f56] mt-4 leading-snug">{featured.title}</h2>
              <p className="text-slate-500 mt-3 leading-relaxed">{featured.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-7">
            {rest.map((b) => (
              <Link key={b.slug} to={`/updates/${b.slug}`} className="card-soft bg-white rounded-2xl overflow-hidden group border border-slate-100 flex flex-col">
                <div className="h-52 overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs text-primary font-semibold">{b.date}</span>
                  <h3 className="font-display font-bold text-lg text-[#0b2f56] mt-2 leading-snug line-clamp-2">{b.title}</h3>
                  <p className="text-sm text-slate-500 mt-2 line-clamp-3 flex-1">{b.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
