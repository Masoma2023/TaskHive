import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/global.css';

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
        <Navbar />
        {props.children}
        <Footer />
      </body>
    </html>
  );
}
