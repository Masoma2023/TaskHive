import type { Metadata } from 'next';
// app/layout.tsx
import Navbar from '@/components/navbar/Navbar';

export const metadata: Metadata = {
  title: 'My App',
  description: 'Welcome to my Next.js app!',
};

export default function layout() {
  return (
    <html lang="en">
      <body>

        <Navbar />

        <main></main>

      </body>
    </html>
  );
}
