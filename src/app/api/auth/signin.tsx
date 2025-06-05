'use client';
import Loading from '@/components/Loading';
import { Eye, EyeOff } from 'lucide-react'; // Optional: lucide-react icons
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Suspense, useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/');
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Welcome Back</h1>
          <p className="text-sm text-gray-500 text-center mb-6">Sign in to your account</p>

          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition pr-10"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                tabIndex={-1}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 text-center">
            Don&apos;t have an account?
            <a href="/signup" className="text-blue-600 hover:underline ml-1">
              Register
            </a>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
