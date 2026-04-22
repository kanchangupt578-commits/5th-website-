'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => {
      setFormState('sent');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="editorial-eyebrow mb-6 inline-block text-accent"
          >
            Connect With Us
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="editorial-headline mb-8 text-primary"
          >
            Start a <span className="text-accent italic">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="editorial-subtext max-w-2xl mx-auto italic"
          >
            Have a project in mind or need expert advice? We&apos;re here to help you scale your business.
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-soft rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Office Address</div>
                      <p className="text-slate-500">123 Business Hub, Sector 62,<br />Noida, India - 201301</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Phone Numbers</div>
                      <p className="text-slate-500">+91 98765 43210<br />+91 12345 67890</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold text-primary">Email Support</div>
                      <p className="text-slate-500">info@primecare.solutions<br />support@primecare.solutions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary text-white rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 blur-3xl" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" />
                  Business Hours
                </h3>
                <ul className="space-y-4 text-slate-400">
                  <li className="flex justify-between"><span>Mon - Fri:</span> <span>9:00 AM - 6:00 PM</span></li>
                  <li className="flex justify-between"><span>Saturday:</span> <span>10:00 AM - 2:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday:</span> <span className="text-accent font-bold">Closed</span></li>
                </ul>
                <Link href="#" className="mt-8 flex items-center gap-2 text-accent font-bold hover:underline">
                  <MessageCircle className="w-5 h-5" />
                  Live Chat Available
                </Link>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl shadow-blue-900/5">
                <h2 className="text-3xl font-display font-bold mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full bg-soft border border-slate-200 rounded-xl px-5 py-4 focus:border-accent focus:bg-white outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full bg-soft border border-slate-200 rounded-xl px-5 py-4 focus:border-accent focus:bg-white outline-none transition-all" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full bg-soft border border-slate-200 rounded-xl px-5 py-4 focus:border-accent focus:bg-white outline-none transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Subject</label>
                      <select className="w-full bg-soft border border-slate-200 rounded-xl px-5 py-4 focus:border-accent focus:bg-white outline-none transition-all appearance-none">
                        <option>General Inquiry</option>
                        <option>Service Request</option>
                        <option>Partner with Us</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea 
                      required
                      placeholder="How can we help you?" 
                      rows={5}
                      className="w-full bg-soft border border-slate-200 rounded-xl px-5 py-4 focus:border-accent focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState !== 'idle'}
                    className={`w-full py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                      formState === 'sent' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-primary text-white hover:bg-accent'
                    }`}
                  >
                    {formState === 'sending' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : formState === 'sent' ? (
                      <>Message Sent Successfully!</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-200/50">
          <div className="text-center p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-xl">
            <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-primary">Our Location</h3>
            <p className="text-slate-500 text-sm">Interactive Map Unavailable in Preview</p>
            <p className="font-semibold mt-2">Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
