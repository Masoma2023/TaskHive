'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LightDarkMode from './LightDarkMode';
import Sidebar from './SideBar';

export default function Navbar() {
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

        {/* Sign Up Button */}
        <div className="flex md:hidden mb-1"><Sidebar /></div>
        <Link
          href="/signup"

          className="bg-[#022155] text-white px-4 py-2 md:flex hidden rounded-lg font-medium hover:bg-[#42516bab] transition duration-300"
        >
          Sign Up
        </Link>
        {/* Theme Toggle */}
        <div className="md:flex hidden">
          <LightDarkMode />
        </div>

      </div>
    </nav>
  );
}
