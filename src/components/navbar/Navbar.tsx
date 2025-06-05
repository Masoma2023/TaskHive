'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Loading from '../Loading';
import LightDarkMode from './LightDarkMode';

export default function Navbar() {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/contact', label: 'Contact' },

  ];

  return (
    <nav className="border-b-gray-800 md:px-12 px-4 py-4 shadow flex justify-between items-center">
      {/* Logo */}
      <Image height={1500} width={1500} src="/Logo.png" alt="task hive logo" className="h-6 w-26" />

      {/* Navigation Links */}
      <div className="lg:space-x-6 space-x-4 hidden md:flex">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 font-medium ${
                isActive
                  ? 'border-b-2 border-[#022155] text-[#022155]'
                  : 'text-gray-500 hover:text-[#022155]'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      {/* Right controls */}
      <div className="flex items-center md:space-x-4 space-x-12">

        <div>
          {status === 'loading'
            ? (
                <Loading />
              )
            : session
              ? (
                  <button
                    type="button"
                    onClick={() => signOut()}
                    className="bg-red-500 cursor-pointer hover:opacity-80 active:scale-99 text-white px-4 py-2 rounded-md"
                  >
                    Log Out
                  </button>
                )
              : (
                  <button
                    type="button"
                    onClick={() => signIn()}
                    className="bg-sky-800 cursor-pointer hover:opacity-80 active:scale-99 text-white px-4 py-2 rounded-md"
                  >
                    Sign In
                  </button>
                )}
        </div>
        {/* Theme Toggle */}
        <div className="md:flex hidden">
          <LightDarkMode />
        </div>

      </div>
    </nav>
  );
}
