'use client';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react'; // Optional: lucide-react icons
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';
import Loading from '../Loading';

export default function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    // eslint-disable-next-line no-console
    console.log(name, email, password);
    e.preventDefault();
    try {
      // https://taskhivebackend.onrender.com/api/users
      await axios.post('https://taskhivebackend.onrender.com/api/users/signup', {
        name,
        email,
        password,
      }, { headers: { 'Content-Type': 'application/json' } });
      router.push('/signin');
    } catch (err: any) {
    // eslint-disable-next-line no-console
      console.log(err?.response?.data?.msg);
      setError(err?.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Create Your Account</h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password with show/hide */}
          <div className="mb-6 relative">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-2 -bottom-0.5 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </Suspense>
  );
}
