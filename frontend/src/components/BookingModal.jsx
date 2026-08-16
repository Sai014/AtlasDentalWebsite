import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useToast } from "../hooks/use-toast";
import {
  Check,
  ChevronLeft,
  MapPin,
  Video,
  CalendarCheck,
  Stethoscope,
  PartyPopper,
} from "lucide-react";
import { services, doctor, timeSlots, consultationModes, clinic } from "../mock";

const steps = ["Service", "Mode", "Date & Time", "Your Details", "Done"];

const BookingModal = ({ open, onOpenChange, presetService }) => {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    service: "",
    mode: "in-clinic",
    date: undefined,
    time: "",
    name: "",
    phone: "",
    email: "",
    gender: "",
    age: "",
  });
  const [appointmentId, setAppointmentId] = useState("");

  useEffect(() => {
    if (open) {
      setStep(0);
      setAppointmentId("");
      setData((d) => ({ ...d, service: presetService || "" }));
    }
  }, [open, presetService]);

  const update = (k, v) => setData((d) => ({ ...d, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return !!data.mode;
    if (step === 2) return !!data.date && !!data.time;
    if (step === 3)
      return data.name && data.phone.length >= 10 && data.email.includes("@") && data.gender && data.age;
    return true;
  };

  const confirm = () => {
    const id = "ATL" + Math.floor(100000 + Math.random() * 900000);
    setAppointmentId(id);
    // MOCK: persist locally so it "feels" real (no backend)
    try {
      const saved = JSON.parse(localStorage.getItem("atlas_bookings") || "[]");
      saved.push({ id, ...data, createdAt: new Date().toISOString() });
      localStorage.setItem("atlas_bookings", JSON.stringify(saved));
    } catch (e) {}
    setStep(4);
    toast({
      title: "Appointment Confirmed!",
      description: `Your appointment ID is ${id}. A confirmation would be sent to your phone & email.`,
    });
  };

  const selectedService = services.find((s) => s.slug === data.service);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px] p-0 overflow-hidden gap-0 max-h-[92vh] overflow-y-auto">
        <DialogHeader className="bg-[#0b3c72] px-6 py-5 text-left space-y-1">
          <DialogTitle className="text-white font-display text-xl flex items-center gap-2">
            <CalendarCheck className="w-5 h-5" /> Book an Appointment
          </DialogTitle>
          <p className="text-sky-200 text-sm">Atlas Dental Clinic, Bengaluru</p>
        </DialogHeader>

        {/* Progress */}
        {step < 4 && (
          <div className="flex items-center gap-1.5 px-6 pt-5">
            {steps.slice(0, 4).map((label, i) => (
              <div key={label} className="flex-1">
                <div
                  className={`h-1.5 rounded-full transition-colors ${
                    i <= step ? "bg-primary" : "bg-slate-200"
                  }`}
                />
                <span
                  className={`mt-1.5 block text-[11px] font-medium ${
                    i <= step ? "text-primary" : "text-slate-400"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="px-6 py-5">
          {/* STEP 0 — Service */}
          {step === 0 && (
            <div className="animate-fade-up">
              <p className="font-display font-semibold text-slate-800 mb-3">
                Which service are you interested in?
              </p>
              <Select value={data.service} onValueChange={(v) => update("service", v)}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  {services.map((s) => (
                    <SelectItem key={s.slug} value={s.slug}>
                      {s.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedService && (
                <div className="mt-4 flex gap-3 p-3 bg-sky-50 rounded-xl">
                  <img src={selectedService.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
                  <p className="text-sm text-slate-600">{selectedService.short}</p>
                </div>
              )}

              <div className="mt-6 flex items-center gap-3 p-3 border rounded-xl">
                <img src={doctor.image} alt={doctor.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-800 flex items-center gap-1.5">
                    <Stethoscope className="w-4 h-4 text-primary" /> {doctor.name}
                  </p>
                  <p className="text-xs text-slate-500">{doctor.role} • {doctor.experience}</p>
                </div>
              </div>
            </div>
          )}

          {/* STEP 1 — Mode */}
          {step === 1 && (
            <div className="animate-fade-up">
              <p className="font-display font-semibold text-slate-800 mb-3">
                How would you like to consult?
              </p>
              <RadioGroup value={data.mode} onValueChange={(v) => update("mode", v)} className="grid grid-cols-2 gap-3">
                {consultationModes.map((m) => {
                  const Icon = m.id === "in-clinic" ? MapPin : Video;
                  const active = data.mode === m.id;
                  return (
                    <label
                      key={m.id}
                      className={`cursor-pointer rounded-xl border-2 p-4 transition-all ${
                        active ? "border-primary bg-sky-50" : "border-slate-200 hover:border-sky-300"
                      }`}
                    >
                      <RadioGroupItem value={m.id} className="sr-only" />
                      <Icon className={`w-6 h-6 mb-2 ${active ? "text-primary" : "text-slate-400"}`} />
                      <p className="font-semibold text-sm text-slate-800">{m.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{m.desc}</p>
                    </label>
                  );
                })}
              </RadioGroup>
            </div>
          )}

          {/* STEP 2 — Date & Time */}
          {step === 2 && (
            <div className="animate-fade-up">
              <p className="font-display font-semibold text-slate-800 mb-3">Pick a date & time</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="rounded-xl border p-1 flex justify-center">
                  <Calendar
                    mode="single"
                    selected={data.date}
                    onSelect={(d) => update("date", d)}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="rounded-md"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-medium text-slate-500 mb-2">Available slots</p>
                  <div className="grid grid-cols-3 gap-2 max-h-52 overflow-y-auto pr-1">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => update("time", t)}
                        className={`text-xs py-2 rounded-lg border transition-all ${
                          data.time === t
                            ? "bg-primary text-white border-primary"
                            : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3 — Details */}
          {step === 3 && (
            <div className="animate-fade-up space-y-4">
              <p className="font-display font-semibold text-slate-800">Your details</p>
              <div>
                <Label className="text-sm">Full Name</Label>
                <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. Priya Sharma" className="mt-1.5 h-11" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label className="text-sm">Phone</Label>
                  <Input value={data.phone} onChange={(e) => update("phone", e.target.value.replace(/[^0-9]/g, ""))} placeholder="10-digit mobile" maxLength={10} className="mt-1.5 h-11" />
                </div>
                <div>
                  <Label className="text-sm">Age</Label>
                  <Input value={data.age} onChange={(e) => update("age", e.target.value.replace(/[^0-9]/g, ""))} placeholder="Age" maxLength={3} className="mt-1.5 h-11" />
                </div>
              </div>
              <div>
                <Label className="text-sm">Email</Label>
                <Input value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="you@email.com" className="mt-1.5 h-11" />
              </div>
              <div>
                <Label className="text-sm">Gender</Label>
                <Select value={data.gender} onValueChange={(v) => update("gender", v)}>
                  <SelectTrigger className="mt-1.5 h-11">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* STEP 4 — Confirmation */}
          {step === 4 && (
            <div className="animate-fade-up text-center py-4">
              <div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <PartyPopper className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-800">Appointment Confirmed!</h3>
              <p className="text-slate-500 text-sm mt-1">
                A confirmation would be sent via phone & email.
              </p>
              <div className="mt-5 bg-sky-50 rounded-xl p-4 text-left text-sm space-y-2">
                <Row label="Appointment ID" value={appointmentId} highlight />
                <Row label="Service" value={selectedService?.title} />
                <Row label="Mode" value={consultationModes.find((m) => m.id === data.mode)?.label} />
                <Row label="Date" value={data.date ? data.date.toDateString() : ""} />
                <Row label="Time" value={data.time} />
                <Row label="Patient" value={`${data.name} (${data.age}, ${data.gender})`} />
              </div>
              <p className="text-[11px] text-slate-400 mt-3">
                This is a demo booking. No real notification is sent.
              </p>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div className="px-6 pb-6 flex items-center justify-between gap-3">
          {step > 0 && step < 4 ? (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)} className="text-slate-500">
              <ChevronLeft className="w-4 h-4 mr-1" /> Back
            </Button>
          ) : (
            <span />
          )}

          {step < 3 && (
            <Button
              disabled={!canNext()}
              onClick={() => setStep((s) => s + 1)}
              className="bg-primary hover:bg-[#0958bf] text-white rounded-full px-8"
            >
              Continue
            </Button>
          )}
          {step === 3 && (
            <Button
              disabled={!canNext()}
              onClick={confirm}
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-8"
            >
              <Check className="w-4 h-4 mr-2" /> Confirm Booking
            </Button>
          )}
          {step === 4 && (
            <Button onClick={() => onOpenChange(false)} className="ml-auto bg-primary hover:bg-[#0958bf] text-white rounded-full px-8">
              Done
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Row = ({ label, value, highlight }) => (
  <div className="flex items-center justify-between">
    <span className="text-slate-500">{label}</span>
    <span className={`font-semibold ${highlight ? "text-primary" : "text-slate-800"}`}>{value}</span>
  </div>
);

export default BookingModal;
