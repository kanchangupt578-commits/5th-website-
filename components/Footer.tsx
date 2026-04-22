import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Business Consulting', href: '/services' },
      { name: 'Digital Strategy', href: '/services' },
      { name: 'Managed Services', href: '/services' },
      { name: 'Quality Assurance', href: '/services' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-ink-dark pt-20 pb-10 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="group">
              <span className="text-3xl font-display font-black tracking-tighter text-primary">
                PrimeCare<span className="text-accent ml-0.5 inline-block h-2 w-2 rounded-full ring-1 ring-accent translate-y-[-4px]"></span>
              </span>
            </Link>
            <p className="text-ink-light leading-relaxed text-[15px] font-medium opacity-80">
              Transforming India&apos;s business landscape through precision advisory and operational excellence.
            </p>
            <div className="flex items-center gap-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="text-ink-light hover:text-accent transition-colors">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-8">
              <h3 className="text-[11px] font-black uppercase tracking-[3px] text-primary underline decoration-accent underline-offset-8">
                {group.title}
              </h3>
              <ul className="space-y-5">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] font-semibold text-ink-light uppercase tracking-wider hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-8">
            <h3 className="text-[11px] font-black uppercase tracking-[3px] text-primary underline decoration-accent underline-offset-8">
              Inquiry
            </h3>
            <ul className="space-y-5 text-[14px]">
              <li className="flex items-start gap-4 text-ink-light font-medium">
                <MapPin className="w-5 h-5 text-accent shrink-0 pt-0.5" />
                <span>Level 14, Business Tower,<br />Noida, UP, India</span>
              </li>
              <li className="flex items-center gap-4 text-ink-light font-medium">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 98765 00000</span>
              </li>
              <li className="flex items-center gap-4 text-ink-light font-medium">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>desk@primecare.solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-ink-light text-[11px] font-black uppercase tracking-[2px]">
            © {new Date().getFullYear()} PrimeCare Solutions • All rights reserved
          </p>
          <div className="flex gap-10 text-[11px] font-black uppercase tracking-[2px] text-ink-light">
            <Link href="#" className="hover:text-primary">Policy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
            <Link href="#" className="hover:text-primary">Legal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
