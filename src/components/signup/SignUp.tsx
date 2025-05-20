'use client';

import { Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';

import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  return (
    <div className="min-h-screen relative flex  items-center justify-center overflow-hidden">
      {/* Decorative honeycomb */}
      <div className="right-0 top-1/4 absolute transform -translate-y-1/2 z-0 h-64 w-64">
        <Image
          src="/Group76.png"
          width={600}
          height={600}
          alt="Honeycomb "
          priority
        />
      </div>

      {/* Sign-up card */}
      <div className="bg-gray-100 rounded-md border border-gray-300  p-8 w-full max-w-lg">
        <h2 className="text-5xl mb-16 text-center text-gray-800">Let’s get started!</h2>

        {/* Name */}
        <label className="block mb-6">
          <span className="text-lg font-medium text-gray-700">Full Name</span>
          <div className="relative mt-1">
            <User className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
              placeholder="Enter your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />

          </div>
        </label>

        {/* Email */}
        <label className="block mb-6">
          <span className="text-lg font-medium text-gray-700">Work Email</span>
          <div className="relative mt-1">
            <Mail className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="email"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </label>

        {/* Password */}
        <label className="block mb-6">
          <span className="text-lg font-medium text-gray-700">Password</span>
          <div className="relative mt-1">
            <Lock className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="password"
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-[#FACC15] focus:outline-none"
              placeholder="Create a strong password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </label>

        {/* Submit */}
        <button type="button" className="w-full bg-[#022155] text-white text-xl font-semibold py-4 rounded-lg hover:bg-[#FACC15] transition">
          Access Your Workspace
        </button>

      </div>
    </div>
  );
}
