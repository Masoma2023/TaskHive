import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter];
  return (
    <footer className="relative text-center py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hive_vibe(2).png"
        width={1000}
        height={1000}
        alt="Honeycomb"
        className="absolute w-36 top-0 right-0 md:w-44 block dark:hidden"
        priority
      />
      <Image
        src="/hive vibe2025.png"
        width={1000}
        height={1000}
        alt="Honeycomb"
        className="absolute w-36 top-0 right-0 md:w-44 hidden dark:block"
        priority
      />
      <Image src="/Group71.png" alt="Honeycomb" className="absolute w-36 bottom-0 left-0 md:w-44 block dark:hidden" width={1000} height={1000} />
      <Image src="/Group711.png" alt="Honeycomb" className="absolute w-36 bottom-0 left-0 md:w-44 hidden dark:block" width={1000} height={1000} />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image src="/Logo.png" alt="Task Hive Logo" width={104} height={24} className="mb-2 flex dark:hidden" />
        <Image src="/LogoLight.png" alt="Task Hive Logo" width={104} height={24} className="mb-2 dark:flex hidden" />
        <p className="text-gray-500 mt-1">© 2025</p>

        {/* Links */}
        <nav className="mt-4 text-[#022155] dark:text-white space-x-3">
          <Link href="/about" className="hover:underline border-r-2 border-gray-700 pr-2">About</Link>
          <Link href="/contact" className="hover:underline border-r-2 border-gray-700 pr-2">Contact</Link>
          <Link href="/privacy" className="hover:underline">Privacy</Link>
        </nav>

        {/* Social Icons */}

        <div className="mt-6 flex justify-center gap-4">
          {socialIcons.map(Icon => (
            <div
              key={Icon.name ?? Math.random()}

              className="w-10 h-10 p-0 rounded-full border border-gray-300 flex items-center justify-center text-[#022155] hover:bg-[#FACC15] transition"
            >
              <Icon />
            </div>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;
