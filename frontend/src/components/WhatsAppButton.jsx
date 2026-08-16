import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { clinic } from "../mock";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const link = `https://wa.me/${clinic.whatsappDigits}?text=${encodeURIComponent(
    "Hi Atlas Dental Clinic, I'd like to know more / book an appointment."
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-up border border-slate-100">
          <div className="bg-[#075E54] p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
            </div>
            <div className="text-white">
              <p className="font-semibold text-sm">Atlas Dental Clinic</p>
              <p className="text-[11px] text-emerald-100">Typically replies within minutes</p>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-slate-100 rounded-xl rounded-tl-none p-3 text-sm text-slate-700">
              Hi there! 👋 How can we help you smile brighter today?
            </div>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center bg-[#25D366] hover:bg-[#1ebe5b] text-white font-semibold py-2.5 rounded-full transition-colors"
            >
              Start Chat
            </a>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl pulse-ring hover:scale-105 transition-transform"
        aria-label="WhatsApp chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
      </button>
    </div>
  );
};

export default WhatsAppButton;
