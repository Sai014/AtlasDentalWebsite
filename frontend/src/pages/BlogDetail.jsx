import React, { useContext } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { CalendarDays, ChevronRight, Tag, ArrowRight, Facebook, Instagram, Share2, CalendarCheck } from "lucide-react";
import { Button } from "../components/ui/button";
import Seo from "../components/Seo";
import { BookingContext } from "../App";
import { blogs, clinic } from "../mock";

const Block = ({ block }) => {
  if (block.type === "h2")
    return <h2 className="font-display text-2xl font-bold text-[#0b2f56] mt-8 mb-3">{block.text}</h2>;
  if (block.type === "ul")
    return (
      <ul className="my-4 space-y-2">
        {block.items.map((it, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    );
  return <p className="text-slate-600 leading-relaxed text-[17px] my-4">{block.text}</p>;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const { openBooking } = useContext(BookingContext);
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <Navigate to="/updates" replace />;
  const related = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.image,
    datePublished: blog.dateTime,
    author: { "@type": "Organization", name: "Atlas Dental Clinic" },
    publisher: {
      "@type": "Organization",
      name: "Atlas Dental Clinic",
      logo: { "@type": "ImageObject", url: clinic.logo },
    },
  };

  return (
    <div>
      <Seo
        title={blog.title}
        description={blog.excerpt}
        path={`/updates/${blog.slug}`}
        image={blog.image}
        jsonLd={articleLd}
      />
      {/* Header */}
      <section className="hero-gradient pt-12 pb-10 border-b border-sky-100">
        <div className="max-w-3xl mx-auto px-6">
          <nav className="text-sm text-slate-500 mb-4 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/updates" className="hover:text-primary">Updates</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-primary font-medium line-clamp-1">{blog.title}</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-white px-3 py-1.5 rounded-full shadow-sm">
            <CalendarDays className="w-3.5 h-3.5" /> {blog.date}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold text-[#0b2f56] mt-4 leading-tight">{blog.title}</h1>
        </div>
      </section>

      {/* Content */}
      <article className="py-14">
        <div className="max-w-3xl mx-auto px-6">
          <img src={blog.image} alt={blog.title} className="w-full h-72 md:h-96 object-cover rounded-3xl shadow-xl mb-8" />
          {blog.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* Keywords */}
          <div className="mt-10 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400" />
            {blog.keywords.map((k) => (
              <span key={k} className="text-xs bg-sky-50 text-primary px-3 py-1.5 rounded-full font-medium">{k}</span>
            ))}
          </div>

          {/* Share */}
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm text-slate-500 flex items-center gap-1.5"><Share2 className="w-4 h-4" /> Share:</span>
            <a href={clinic.facebook} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-sky-50 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href={clinic.instagram} target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-sky-50 hover:bg-primary hover:text-white flex items-center justify-center text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-[#0b3c72] p-8 text-center">
            <h3 className="font-display text-xl font-bold text-white">Have questions about your dental health?</h3>
            <p className="text-sky-100 mt-2 text-sm">Book a consultation with Dr. Daniya Muskaan at Atlas Dental Clinic.</p>
            <Button onClick={() => openBooking()} className="mt-5 bg-white text-primary hover:bg-sky-50 rounded-full px-7">
              <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
            </Button>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="pb-24 brand-gradient pt-14">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-2xl font-extrabold text-[#0b2f56] mb-8">Related Posts</h2>
          <div className="grid md:grid-cols-3 gap-7">
            {related.map((b) => (
              <Link key={b.slug} to={`/updates/${b.slug}`} className="card-soft bg-white rounded-2xl overflow-hidden group border border-slate-100">
                <div className="h-48 overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <span className="text-xs text-primary font-semibold">{b.date}</span>
                  <h3 className="font-display font-bold text-[#0b2f56] mt-2 leading-snug line-clamp-2">{b.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
