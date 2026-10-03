import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import PhoneFrame from '@/components/PhoneFrame';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lumina / Defense — Inteligentny Powrót do Domu',
  description: 'Bezpieczny routing, automatyczny Dead Man’s Switch oraz sieć zaufanych kontaktów i raportów.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-olive-950 text-white min-h-screen antialiased selection:bg-lime-400 selection:text-olive-950`}>
        <PhoneFrame>
          {children}
          <BottomNav />
        </PhoneFrame>
      </body>
    </html>
  );
}
