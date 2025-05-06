'use client';

import { useEffect, useState } from 'react';
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

export default function LightDarkMode() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme') as 'light' | 'dark';
      if (stored) {
        setTheme(stored);
        document.documentElement.classList.toggle('dark', stored === 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-8 bg-white border-1 border-gray-500 rounded-full flex items-center px-1 transition-all duration-300 flex"
    >
      <div
        className={`w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
          theme === 'dark' ? 'translate-x-0 bg-[#022155]' : 'translate-x-6 bg-yellow-400'
        }`}
      >
        {theme === 'dark'
          ? (
              <IoMoonOutline className="text-white" />
            )
          : (
              <IoSunnyOutline className="text-black" />
            )}
      </div>
    </button>
  );
}
