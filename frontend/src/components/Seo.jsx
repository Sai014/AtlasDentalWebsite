import { useEffect } from "react";

const SITE = "https://www.atlasdentalblr.com";

// Lightweight SEO manager — sets <title>, meta description, canonical,
// Open Graph / Twitter tags and injects optional JSON-LD structured data.
function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const Seo = ({
  title,
  description,
  path = "/",
  image = "https://fplogoimages.withfloats.com/actual/69ea4366f90899d3af866de9.jpeg",
  jsonLd,
}) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | Atlas Dental Clinic, Bengaluru`
      : "Atlas Dental Clinic, Bengaluru | Smile with Confidence, Shine with Pride";
    const url = `${SITE}${path}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    // JSON-LD structured data (page specific)
    const ID = "page-jsonld";
    let script = document.getElementById(ID);
    if (jsonLd) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = ID;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    } else if (script) {
      script.remove();
    }

    return () => {
      const s = document.getElementById(ID);
      if (s) s.remove();
    };
  }, [title, description, path, image, jsonLd]);

  return null;
};

export const breadcrumbLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});

export const faqLd = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export default Seo;
