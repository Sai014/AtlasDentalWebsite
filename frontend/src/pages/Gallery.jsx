import React, { useState } from "react";
import { X } from "lucide-react";
import { PageHero } from "../components/common";
import Seo, { breadcrumbLd } from "../components/Seo";
import { gallery } from "../mock";
import { Dialog, DialogContent } from "../components/ui/dialog";

const Gallery = () => {
  const [active, setActive] = useState(null);
  return (
    <div>
      <Seo
        title="Photo Gallery"
        description="Take a look inside Atlas Dental Clinic, Bengaluru — our modern, hygienic and welcoming clinic designed for your comfort."
        path="/gallery"
        jsonLd={breadcrumbLd([{ name: "Home", path: "/" }, { name: "Gallery", path: "/gallery" }])}
      />
      <PageHero title="Photo Gallery" crumb="Gallery" />
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 max-w-2xl mx-auto mb-12">
            A peek into our modern, welcoming clinic — designed for comfort, hygiene and beautiful smiles.
          </p>
          <div className="columns-2 md:columns-3 gap-5 space-y-5">
            {gallery.map((img, i) => (
              <button
                key={i}
                onClick={() => setActive(img)}
                className="block w-full overflow-hidden rounded-2xl card-soft group"
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={() => setActive(null)}>
        <DialogContent className="max-w-3xl p-2 bg-transparent border-0 shadow-none">
          {active && (
            <img src={active} alt="Preview" className="w-full max-h-[80vh] object-contain rounded-xl" />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
