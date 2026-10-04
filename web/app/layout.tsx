import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import PhoneFrame from '@/components/PhoneFrame';
import StoreHydration from '@/components/StoreHydration';
import DeadManMonitor from '@/components/DeadManMonitor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'City Safer / Defense — Inteligentny Powrót do Domu',
  description: 'Bezpieczny routing, automatyczny Dead Man’s Switch oraz sieć zaufanych kontaktów i raportów.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body className={`${inter.className} bg-olive-950 text-white h-[100dvh] overflow-hidden antialiased selection:bg-lime-400 selection:text-olive-950`}>
        <StoreHydration />
        <PhoneFrame>
          <DeadManMonitor />
          {children}
          <BottomNav />
        </PhoneFrame>
      </body>
    </html>
  );
}
