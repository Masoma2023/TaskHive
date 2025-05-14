'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { RiMenu5Fill } from 'react-icons/ri';
import LightDarkMode from './LightDarkMode';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/features', label: 'Features' },
    { href: '/contact', label: 'Contact' },

  ];

  const pathname = usePathname();

  return (
    <div className="flex md:hidden">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-white text-[#022155] shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64`}
      >
        <div className="flex items-center justify-between p-4 border-b-gray-800">
          <Image height={1500} width={1500} src="/Logo.png" alt="task hive logo" className="h-4 w-20" />
          <div className="flex space-x-2">
            <span className="flex md:hidden justify-center items-center ">
              <LightDarkMode />
            </span>
            <div
              onClick={toggleSidebar}
              onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleSidebar()}
              role="button"
              tabIndex={0}
              className="fixed top-3 z-50 p-2"
              aria-label="Open sidebar"
            >
              <FiX className="w-6 h-6" />
            </div>
          </div>

        </div>
        <div className="flex flex-col mt-4 px-6 space-y-4">
          {Array.isArray(links)
            && links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium border-1 px-8 py-4 rounded-lg ${
                    isActive
                      ? 'text-white bg-[#022155]'
                      : 'text-gray-500 hover:text-[#022155]'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

        </div>
        <Link
          href="/signup"
          className="bg-[#022155] text-white px-16 py-4 fixed bottom-4 left-12 rounded-lg font-medium hover:bg-[#42516bab] transition duration-300"
        >
          Sign Up
        </Link>
      </div>

      {/* Open Sidebar Button */}
      {!isOpen && (
        <div
          onClick={toggleSidebar}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && toggleSidebar()}
          role="button"
          tabIndex={0}
          className="fixed top-3 z-50 p-2"
          aria-label="Open sidebar"
        >
          <RiMenu5Fill className="w-8 h-8 text-[#022155]" />
        </div>

      )}
    </div>
  );
}
