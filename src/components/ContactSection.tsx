import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Sparkles, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isOpenNow, setIsOpenNow] = useState(true);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  useEffect(() => {
    // Determine live status: café open 07:00 to 22:00
    const now = new Date();
    const hour = now.getHours();
    setIsOpenNow(hour >= 7 && hour < 22);
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C89B3C] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C89B3C]" />
            <span>CONNECT WITH US</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-white tracking-tight leading-tight">
            Visit Our <span className="gold-gradient-text italic font-cormorant">Flagship Lounge</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Details & Live Status */}
          <div className="lg:col-span-5 glass-card p-8 rounded-3xl border border-[#D9C3A5]/10 space-y-8">
            {/* Live Status Badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <span className="font-serif text-lg text-white font-semibold">Live Lounge Status</span>
              <div
                className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans font-semibold ${
                  isOpenNow
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                    : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span>{isOpenNow ? 'Open Now (Serving)' : 'Closed (Opens at 07:00 AM)'}</span>
              </div>
            </div>

            {/* Contact Info Items */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-semibold">Address</h4>
                  <p className="font-sans text-xs text-[#B5B5B5] leading-relaxed">
                    742 Grand Avenue, Cultural Quarter, Downtown Metropolis
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-semibold">Telephone</h4>
                  <p className="font-sans text-xs text-[#B5B5B5]">+1 (800) 849-CAFÉ (2233)</p>
                  <p className="font-sans text-[11px] text-[#C89B3C]">Direct Concierge & VIP Booking</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-semibold">Email Inquiry</h4>
                  <p className="font-sans text-xs text-[#B5B5B5]">concierge@maisonducafe.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#3B2416] border border-[#C89B3C]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#C89B3C]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-white font-semibold">Opening Hours</h4>
                  <p className="font-sans text-xs text-[#B5B5B5]">Mon - Fri: 07:00 AM – 10:00 PM</p>
                  <p className="font-sans text-xs text-[#B5B5B5]">Sat - Sun: 08:00 AM – 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder Frame */}
            <div className="relative rounded-2xl overflow-hidden h-44 border border-white/10 glass-panel">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80"
                alt="Map location preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-50 contrast-125"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="glass-panel px-4 py-2 rounded-xl border border-[#C89B3C] flex items-center gap-2 text-xs text-white">
                  <MapPin className="w-4 h-4 text-[#C89B3C]" />
                  <span>Click for Google Maps Navigation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-[#C89B3C]/30 shadow-2xl">
            <h3 className="font-serif text-2xl text-white font-semibold mb-6">Send A Direct Message</h3>

            {sent ? (
              <div className="p-8 text-center glass-panel rounded-2xl border border-emerald-500/40">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h4 className="font-serif text-xl text-white">Message Dispatched</h4>
                <p className="text-xs text-[#B5B5B5] mt-1">Our concierge team will reply within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="eleanor@domain.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[#1A1A1A] text-xs text-white px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C]"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Private Event Booking">Private Event Booking</option>
                    <option value="Corporate Catering">Corporate Bean Subscription & Catering</option>
                    <option value="Press & Media">Press & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-sans tracking-widest text-[#C89B3C] mb-2 font-semibold">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How may we assist your coffee journey today?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-[#B5B5B5]/50 px-4 py-3.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#C89B3C] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#3B2416] via-[#C89B3C] to-[#E2B45C] text-black font-semibold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-[#C89B3C]/30 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Concierge Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
