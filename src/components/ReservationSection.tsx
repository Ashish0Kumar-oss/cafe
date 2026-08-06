import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Sparkles, CheckCircle, MapPin, Armchair } from 'lucide-react';
import { Reservation } from '../types';

interface ReservationSectionProps {
  onReservationComplete?: (res: Reservation) => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onReservationComplete }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('2026-08-07');
  const [time, setTime] = useState('14:30');
  const [tableArea, setTableArea] = useState<Reservation['tableArea']>('Window Alcove');
  const [specialRequest, setSpecialRequest] = useState('');
  const [submittedReservation, setSubmittedReservation] = useState<Reservation | null>(null);

  const tableAreas: { name: Reservation['tableArea']; desc: string; icon: string }[] = [
    { name: 'Window Alcove', desc: 'Natural light & avenue view', icon: '🪟' },
    { name: 'Fireside Lounge', desc: 'Plush velvet armchairs & fireplace', icon: '🔥' },
    { name: 'Roaster Bar', desc: 'Front-row view of master baristas', icon: '☕' },
    { name: 'VIP Private Parlor', desc: 'Intimate secluded room for 4-8', icon: '👑' }
  ];

  const timeSlots = [
    '09:00 AM', '10:30 AM', '12:00 PM', '01:30 PM',
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    const res: Reservation = {
      id: `RES-${Math.floor(100000 + Math.random() * 900000)}`,
      name,
      email,
      phone,
      guests,
      date,
      time,
      tableArea,
      specialRequest,
      status: 'Confirmed',
      createdAt: new Date().toLocaleTimeString()
    };

    setSubmittedReservation(res);
    if (onReservationComplete) onReservationComplete(res);
  };

  return (
    <section id="reservation" className="py-24 sm:py-32 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B2416]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>EXCLUSIVITY & HOSPITALITY</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Reserve Your <span className="gold-gradient-text italic font-cormorant">Experience</span>
          </h2>
          <p className="font-sans text-[#B5B5B5] text-sm max-w-lg mx-auto font-light mt-3">
            Secure an intimate seating area in our roastery lounge for coffee tastings, afternoon tea, or quiet business conversations.
          </p>
        </div>

        {submittedReservation ? (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-[#C89B3C] text-center shadow-2xl"
          >
            <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[#C89B3C]" />
            </div>

            <h3 className="font-serif text-3xl text-white font-semibold mb-2">Reservation Confirmed</h3>
            <p className="font-sans text-xs text-[#B5B5B5] mb-6">
              A confirmation email has been dispatched to <span className="text-white font-medium">{submittedReservation.email}</span>
            </p>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 text-left space-y-3 mb-8">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-[#B5B5B5]">Booking Code</span>
                <span className="font-mono text-xs text-[#C89B3C] font-bold">{submittedReservation.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-[#B5B5B5]">Primary Guest</span>
                <span className="text-xs text-white font-semibold">{submittedReservation.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-[#B5B5B5]">Date & Time</span>
                <span className="text-xs text-[#D9C3A5] font-medium">{submittedReservation.date} at {submittedReservation.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-xs text-[#B5B5B5]">Party Size</span>
                <span className="text-xs text-white">{submittedReservation.guests} Guests</span>
              </div>
              <div className="flex justify-between">
                <span className="text-xs text-[#B5B5B5]">Seating Area</span>
                <span className="text-xs text-[#C89B3C] font-semibold">{submittedReservation.tableArea}</span>
              </div>
            </div>

            <button
              onClick={() => setSubmittedReservation(null)}
              className="px-6 py-3 rounded-full bg-[#C89B3C] text-black text-xs uppercase tracking-wider font-semibold"
            >
              Make Another Reservation
            </button>
          </motion.div>
        ) : (
          /* Form Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual Floor Plan / Seating Selector */}
            <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#D9C3A5]/10 space-y-6">
              <h3 className="font-serif text-2xl text-white font-semibold flex items-center gap-2">
                <Armchair className="w-5 h-5 text-[#C89B3C]" />
                <span>Select Seating Atmosphere</span>
              </h3>
              <p className="font-sans text-xs text-[#B5B5B5] font-light">
                Choose the exact environment for your visit:
              </p>

              <div className="space-y-3">
                {tableAreas.map((area) => (
                  <button
                    key={area.name}
                    type="button"
                    onClick={() => setTableArea(area.name)}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-start gap-4 ${
                      tableArea === area.name
                        ? 'bg-[#3B2416] border-[#C89B3C] shadow-lg shadow-[#C89B3C]/10'
                        : 'glass-panel border-white/5 hover:border-[#C89B3C]/40'
                    }`}
                  >
                    <span className="text-2xl">{area.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-base text-white font-semibold">{area.name}</span>
                        {tableArea === area.name && (
                          <span className="text-[10px] uppercase font-sans tracking-widest text-[#C89B3C] font-bold">
                            Selected
                          </span>
                        )}
                      </div>
                      <span className="font-sans text-xs text-[#B5B5B5] block mt-0.5 font-light">
                        {area.desc}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 text-xs text-[#D9C3A5]/70 space-y-2">
                <p>📍 Maison Du Café — 742 Grand Avenue, Downtown</p>
                <p>🕒 Reservations are held for 15 minutes after selected time.</p>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Sterling"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sterling@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 019-2834"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Number of Guests
                    </label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#1A1A1A] text-xs text-white px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-xs text-white px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Preferred Time *
                    </label>
                    <select
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full bg-[#1A1A1A] text-xs text-white px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Request */}
                <div>
                  <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                    Special Occasion or Dietary Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Anniversary coffee pairing, wheelchair access required..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-[0.2em] hover:shadow-2xl hover:shadow-[#C89B3C]/30 transition-all duration-300"
                >
                  Confirm Table Reservation
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
