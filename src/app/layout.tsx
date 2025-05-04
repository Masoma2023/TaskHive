import { DemoBadge } from '@/components/DemoBadge';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/global.css';

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;

  // The `suppressHydrationWarning` attribute in <body> is used to prevent hydration errors caused by Sentry Overlay,
  // which dynamically adds a `style` attribute to the body tag.

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <Navbar />
        {props.children}
        <DemoBadge />
      </body>
    </html>
  );
}
