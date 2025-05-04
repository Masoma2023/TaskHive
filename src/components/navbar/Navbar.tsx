'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export default function Navbar() {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 px-6 py-4 shadow flex justify-between items-center">
      {/* Logo */}
      <Image height={200} width={200} src="/public/Logo.png" alt="task hive logo" />

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex text-gray-600 dark:text-gray-300">
        <Link href="/" className="font-medium hover:text-blue-700 dark:hover:text-white">Home</Link>
        <Link href="/about" className="hover:text-blue-700 dark:hover:text-white">About</Link>
        <Link href="/features" className="hover:text-blue-700 dark:hover:text-white">Features</Link>
        <Link href="/contact" className="hover:text-blue-700 dark:hover:text-white">Contact</Link>
      </div>

      {/* Right controls */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-10 h-6 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center shadow"
        >
          {dark ? <IoMoonOutline className="w-5 h-5 text-white" /> : <IoSunnyOutline className="w-5 h-5 text-yellow-400" />}
        </button>

        {/* Sign Up Button */}
        <Link
          href="/signup"
          className="bg-blue-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
