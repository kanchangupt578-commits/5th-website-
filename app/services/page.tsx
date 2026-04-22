'use client';

import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Users, 
  Zap, 
  BarChart3, 
  Globe, 
  Headphones,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';

const allServices = [
  {
    title: 'Business Strategy',
    description: 'We develop roadmap-driven strategies that align with your long-term vision and market realities.',
    icon: BarChart3,
    features: ['Market Analysis', 'Competitive Positioning', 'Revenue Optimization'],
    color: 'bg-blue-600',
  },
  {
    title: 'Operational Excellence',
    description: 'Streamlining processes to reduce waste, improve quality, and enhance overall organizational productivity.',
    icon: ShieldCheck,
    features: ['Process Mapping', 'Quality Assurance', 'Resource Management'],
    color: 'bg-indigo-600',
  },
  {
    title: 'Managed Services',
    description: 'Reliable day-to-day management of business operations, allowing your leadership to stay focused.',
    icon: Zap,
    features: ['IT Support', 'Administrative Management', 'Logistics Oversight'],
    color: 'bg-purple-600',
  },
  {
    title: 'Talent Acquisition',
    description: 'Matching your organization with high-performing professionals who fit your company culture.',
    icon: Users,
    features: ['Executive Search', 'Specialist Recruitment', 'Onboarding Support'],
    color: 'bg-emerald-600',
  },
  {
    title: 'Digital Transformation',
    description: 'Leveraging modern technologies to digitize your operations and improve customer experiences.',
    icon: Globe,
    features: ['Cloud Integration', 'Software Solutions', 'Data Analytics'],
    color: 'bg-amber-600',
  },
  {
    title: '24/7 Premium Support',
    description: 'Dedicated account managers available round the clock to ensure your business never skips a beat.',
    icon: Headphones,
    features: ['Dedicated Support', 'Emergency Response', 'Client Portal'],
    color: 'bg-rose-600',
  },
];

export default function ServicesPage() {
  return (
    <PageLayout>
      {/* Header */}
      <section className="pt-40 pb-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-20" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="editorial-eyebrow mb-6 inline-block text-accent"
          >
            Premium Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="editorial-headline mb-8 text-white"
          >
            Our Professional <span className="text-accent italic decoration-white/20 underline-offset-8">Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed italic"
          >
            Empowering your enterprise with tailored strategies and world-class operational support.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-${service.color.split('-')[1]}-200/50 group-hover:rotate-12 transition-transform`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 mb-10">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm font-semibold text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="flex items-center gap-2 font-bold text-primary group-hover:text-accent transition-colors"
              >
                Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-[100px] -z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-display font-bold text-white mb-6">Why Our Services Stand Out?</h2>
                <p className="text-slate-400 text-lg mb-10 italic">&quot;Quality is not an act, it is a habit.&quot;</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { label: '99% Success Rate', desc: 'In project delivery' },
                    { label: '10+ Years', desc: 'Industry experience' },
                    { label: 'Global Reach', desc: 'International standards' },
                    { label: 'Tailored Fit', desc: 'Contextual solutions' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-accent mb-1">{stat.label}</div>
                      <div className="text-sm text-slate-500">{stat.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                <h3 className="text-white font-bold text-xl mb-6">Request Service Inquiry</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Business Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-accent outline-none transition-colors" 
                  />
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400 focus:border-accent outline-none transition-colors">
                    <option>Select Service</option>
                    {allServices.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                  <button className="w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
