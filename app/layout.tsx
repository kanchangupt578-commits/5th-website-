import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'PrimeCare Solutions | Quality Service You Can Trust',
  description: 'PrimeCare Solutions provides premium professional services across India. Committed to quality, excellence, and building trust with every client.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-900 bg-[#F9FAFB]">
        {children}
      </body>
    </html>
  );
}
