import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BookingModal from "./components/BookingModal";
import { Toaster } from "./components/ui/toaster";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

// Booking context so any button across the app can open the booking modal
export const BookingContext = React.createContext({ openBooking: () => {} });

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [presetService, setPresetService] = useState(null);

  const openBooking = (serviceSlug = null) => {
    setPresetService(serviceSlug);
    setBookingOpen(true);
  };

  return (
    <div className="App">
      <BookingContext.Provider value={{ openBooking }}>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/updates" element={<Blog />} />
              <Route path="/updates/:slug" element={<BlogDetail />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
          <BookingModal
            open={bookingOpen}
            onOpenChange={setBookingOpen}
            presetService={presetService}
          />
          <Toaster />
        </BrowserRouter>
      </BookingContext.Provider>
    </div>
  );
}

export default App;
