import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialIcons = [FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter];
  return (
    <footer className="relative bg-gray-50 text-center py-16 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="bg-[url('/subtract.png')] bg-cover bg-center absolute z-0"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <Image src="/Logo.png" alt="Task Hive Logo" width={104} height={24} className="mb-2 flex" />
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
