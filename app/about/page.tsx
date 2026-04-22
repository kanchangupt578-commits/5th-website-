'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const values = [
  {
    title: 'Excellence',
    description: 'We strive for perfection in every project we undertake.',
    icon: Award,
  },
  {
    title: 'Integrity',
    description: 'Transparency and honesty are the foundation of our relationships.',
    icon: Target,
  },
  {
    title: 'Innovation',
    description: 'We embrace new technologies and forward-thinking strategies.',
    icon: Eye,
  },
];

const team = [
  {
    name: 'Vikram Mehta',
    role: 'Founder & CEO',
    image: 'https://picsum.photos/seed/ceo/400/400',
  },
  {
    name: 'Priya Joshi',
    role: 'Operations Director',
    image: 'https://picsum.photos/seed/ops/400/400',
  },
  {
    name: 'Arjun Das',
    role: 'Strategy Consultant',
    image: 'https://picsum.photos/seed/strategy/400/400',
  },
  {
    name: 'Meera Nair',
    role: 'Customer Success',
    image: 'https://picsum.photos/seed/success/400/400',
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Page Header */}
      <section className="pt-40 pb-20 bg-bg-base">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="editorial-eyebrow mb-6 inline-block"
          >
            Our Heritage
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="editorial-headline mb-8 text-primary"
          >
            About PrimeCare
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="editorial-subtext max-w-2xl mx-auto italic"
          >
            A dedicated team of professionals committed to transforming the business landscape in India through quality and innovation.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-display font-bold mb-8">Our Story & Mission</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              PrimeCare Solutions was born out of a desire to provide world-class professional services to the growing Indian market. We saw a gap in the industry where quality was often compromised for speed.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is simple: to provide reliable, high-end solutions that help our clients achieve sustainable growth. We believe in building long-term partnerships based on mutual trust and exceptional results.
            </p>
            <div className="space-y-6">
              {[
                'Empowering business growth across all sectors',
                'Setting the standard for professional excellence',
                'Fostering a culture of innovation and collaboration'
              ].map((point) => (
                <div key={point} className="flex items-center gap-4 text-primary font-bold">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://picsum.photos/seed/mission/600/800"
                alt="Our mission"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Values That Drive Us</h2>
            <p className="text-slate-500 max-w-xl mx-auto italic">These core principles guide every decision we make and every service we provide.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8">
                  <v.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4 text-primary">Meet the Experts</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our leadership team brings decades of combined experience across various industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-default"
              >
                <div className="aspect-square rounded-2xl overflow-hidden mb-6 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-accent font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
