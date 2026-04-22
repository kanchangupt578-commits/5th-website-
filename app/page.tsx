'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  ArrowRight, 
  Star, 
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import { useState } from 'react';

const services = [
  {
    title: 'Business Consulting',
    description: 'Expert guidance to streamline your operations and maximize growth potential in competitive markets.',
    icon: ShieldCheck,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Managed Solutions',
    description: 'End-to-end management of your critical business processes, allowing you to focus on core innovation.',
    icon: Zap,
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'Talent Excellence',
    description: 'Connecting you with top-tier professional talent across India to build world-class teams.',
    icon: Users,
    color: 'bg-purple-50 text-purple-600',
  },
];

const testimonials = [
  {
    name: 'Anjali Sharma',
    role: 'CEO, TechNova India',
    content: 'PrimeCare Solutions transformed how we approach our operational efficiency. Their team is professional, insightful, and truly dedicated.',
    image: 'https://picsum.photos/seed/person1/100/100',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Director, Global Logistics',
    content: 'The level of detail and quality they bring to the table is unmatched. Highly recommended for any serious business in India.',
    image: 'https://picsum.photos/seed/person2/100/100',
  },
];

const faqs = [
  {
    question: 'How do I get started with your services?',
    answer: 'Simply click the "Book Now" button or visit our Contact page. Our team will reach out within 24 hours to schedule an initial consultation.'
  },
  {
    question: 'Do you offer customized solutions?',
    answer: 'Yes, every business is unique. We tailor our services specifically to your industry, goals, and current challenges.'
  },
  {
    question: 'Where are you located?',
    answer: 'Our main office is in Noida, India, but we serve clients across the entire country and internationally.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageLayout>
      {/* Hero Section - Split Editorial Layout */}
      <section className="relative min-h-[85vh] lg:h-[85vh] flex flex-col lg:flex-row bg-bg-base overflow-hidden">
        <div className="flex-1 lg:flex-[1.2] flex flex-col justify-center px-10 lg:px-20 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="editorial-eyebrow mb-6 inline-block">Premier Professional Solutions</span>
            <h1 className="editorial-headline mb-8">
              Quality Service <br />
              <span className="text-accent italic">You Can Trust.</span>
            </h1>
            <p className="editorial-subtext mb-10">
              Specialized advisory and operational excellence for India&apos;s emerging enterprises. 
              We bridge the gap between vision and execution with precision.
            </p>
            <div className="flex items-center gap-10">
              <Link
                href="/contact"
                className="px-12 py-5 bg-primary text-white font-bold text-[16px] hover:bg-accent transition-all duration-300 shadow-2xl shadow-primary/20"
              >
                GET STARTED
              </Link>
              <Link href="/services" className="group flex items-center gap-3 font-bold text-[14px] text-ink-dark uppercase tracking-widest border-b border-transparent hover:border-accent transition-all">
                View Portfolio
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right side - Services Panel (Editorial Style) */}
        <div className="flex-1 bg-white border-l border-slate-200 p-10 lg:p-20 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col h-full"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-display font-bold text-primary mb-3">Our Expertise</h2>
              <p className="text-ink-light text-[15px]">Comprehensive solutions tailored to your unique business needs.</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 flex-grow">
              {services.map((service, i) => (
                <div key={service.title} className="p-8 border border-slate-100 hover:border-slate-200 transition-all group">
                  <div className="editorial-eyebrow mb-3 flex items-center gap-2">
                    <service.icon className="w-4 h-4" />
                    <span>Expertise 0{i+1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-ink-light text-[14px]">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom Bar - Dark Editorial Stats */}
      <section className="bg-ink-dark text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center px-6 md:border-r md:border-white/10 last:border-0">
            <span className="text-[48px] font-display font-bold text-accent leading-none mb-2 block">500+</span>
            <span className="text-[12px] uppercase tracking-[3px] font-semibold text-white/50">Clients Served</span>
          </div>
          <div className="text-center px-6 md:border-r md:border-white/10 last:border-0">
            <span className="text-[48px] font-display font-bold text-accent leading-none mb-2 block">15+</span>
            <span className="text-[12px] uppercase tracking-[3px] font-semibold text-white/50">Years Experience</span>
          </div>
          <div className="text-center px-6">
            <span className="text-[48px] font-display font-bold text-accent leading-none mb-2 block">24/7</span>
            <span className="text-[12px] uppercase tracking-[3px] font-semibold text-white/50">Expert Support</span>
          </div>
        </div>
      </section>

      {/* About Preview - Restyled */}
      <section className="py-32 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[4/3] bg-bg-base overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
             <Image
              src="https://picsum.photos/seed/editorial-about/1200/900"
              alt="Editorial aesthetics"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-[20px] border-white/5 pointer-events-none" />
          </div>
          <div>
            <span className="editorial-eyebrow mb-6 inline-block">Since 2015</span>
            <h2 className="text-5xl font-display font-bold text-primary mb-8 leading-tight">Built on Integrity and <br />Excellence</h2>
            <p className="text-[18px] text-ink-light mb-10 leading-relaxed italic border-l-4 border-accent pl-8">
              &quot;Founded with a vision to revolutionize the professional service sector in India, we merge traditional ethics with modern innovation.&quot;
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-[14px] font-black uppercase tracking-[3px] text-primary group"
            >
              Our Philosophy
              <div className="w-10 h-[2px] bg-accent transition-all group-hover:w-20" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4 text-center">What Our Clients Say</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-soft rounded-3xl relative"
            >
              <div className="text-4xl text-accent/20 absolute top-8 left-8 italic font-serif group-hover:scale-125 transition-transform font-bold">&quot;</div>
              <p className="text-lg text-slate-700 italic mb-8 relative z-10 leading-relaxed line-clamp-3 overflow-hidden">
                {t.content}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={60}
                  height={60}
                  className="rounded-full w-14 h-14 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-soft">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-slate-100 transition-all hover:shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-primary">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180 text-accent' : 'text-slate-400'}`} />
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-48 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden px-6'}`}
                >
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,#3b82f6,transparent),radial-gradient(circle_at_70%_80%,#3b82f6,transparent)]" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl text-white font-display font-bold mb-6">Ready to Experience Excellence?</h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Join hundreds of successful businesses who trust PrimeCare Solutions for their strategic operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-white rounded-full font-bold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                Schedule Consultation
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </PageLayout>
  );
}
