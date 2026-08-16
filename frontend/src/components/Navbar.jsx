import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, CalendarCheck } from "lucide-react";
import { clinic } from "../mock";
import { Button } from "./ui/button";
import { BookingContext } from "../App";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Our Doctor", to: "/doctor" },
  { label: "Services", to: "/services" },
  { label: "Updates", to: "/updates" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { openBooking } = useContext(BookingContext);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-[#0b3c72] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={`mailto:${clinic.email}`} className="hover:text-sky-300 transition-colors">
              {clinic.email}
            </a>
            <span className="text-white/40">|</span>
            <span className="text-white/80">Mon–Thu 10AM–2PM &nbsp;•&nbsp; Fri 3PM–7PM</span>
          </div>
          <a href={`tel:${clinic.phoneLandline}`} className="flex items-center gap-2 hover:text-sky-300 transition-colors">
            <Phone className="w-3.5 h-3.5" /> {clinic.phoneLandline}
          </a>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_6px_30px_-12px_rgba(11,111,232,0.25)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[74px]">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={clinic.logo}
              alt="Atlas Dental Clinic"
              className="h-11 w-11 rounded-full object-cover ring-2 ring-sky-100 group-hover:ring-sky-300 transition-all"
            />
            <div className="leading-tight">
              <span className="block font-display font-extrabold text-[#0b3c72] text-lg tracking-tight">
                Atlas Dental
              </span>
              <span className="block text-[11px] text-sky-600 font-medium tracking-wide">
                Clinic • Bengaluru
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative px-3.5 py-2 text-[15px] font-medium rounded-lg transition-colors ${
                  isActive(link.to)
                    ? "text-primary"
                    : "text-slate-600 hover:text-primary"
                }`}
              >
                {link.label}
                {isActive(link.to) && (
                  <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              onClick={() => openBooking()}
              className="hidden sm:inline-flex bg-primary hover:bg-[#0958bf] text-white rounded-full px-5 shadow-lg shadow-blue-200"
            >
              <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2 rounded-lg text-[#0b3c72] hover:bg-sky-50">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <div className="flex items-center gap-3 p-5 border-b">
                  <img src={clinic.logo} alt="logo" className="h-10 w-10 rounded-full object-cover" />
                  <span className="font-display font-bold text-[#0b3c72]">Atlas Dental</span>
                </div>
                <div className="flex flex-col p-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileOpen(false)}
                      className={`px-4 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                        isActive(link.to)
                          ? "bg-sky-50 text-primary"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      setMobileOpen(false);
                      openBooking();
                    }}
                    className="mt-3 bg-primary hover:bg-[#0958bf] text-white rounded-full"
                  >
                    <CalendarCheck className="w-4 h-4 mr-2" /> Book Appointment
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
