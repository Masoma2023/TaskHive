'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import { SessionProvider } from 'next-auth/react';
import '@/styles/global.css';

// eslint-disable-next-line @next/next/no-async-client-component
export default async function RootLayout(props: {
  readonly children: React.ReactNode;
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  // The `suppressHydrationWarning` attribute in <body> is used to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className="bg-gradient-to-b from-[#F0F1F2]  to-[#F2F2F0]">
        <SessionProvider>
          <Navbar />
          {props.children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
