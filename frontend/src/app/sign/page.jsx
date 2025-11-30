'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sign() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Sending signin data:', formData);

      const response = await fetch('http://localhost:4000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signin failed');
      }

      console.log('Signin successful:', data);
      
      // Store token and user data
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));
      
      // Redirect to home page
      router.push('/');
      
    } catch (err) {
      setError(err.message);
      console.error('Signin error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#D3DAD9] to-[#f0f4f3] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#37353E] mb-2">Welcome Back</h1>
            <p className="text-[#44444E]">Sign in to your Locafind account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Sign In Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D3DAD9]">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#37353E] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-[#37353E]">
                    Password
                  </label>
                  <Link href="/forgot-password" className="text-sm text-[#715A5A] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-[#715A5A] border-[#D3DAD9] rounded focus:ring-[#715A5A] focus:ring-2"
                />
                <label className="text-sm text-[#44444E]">Remember me</label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#715A5A] text-white py-4 rounded-lg hover:bg-[#5a4a4a] transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* ... (Rest of your component remains the same) ... */}
          </div>

          {/* Don't have account */}
          <div className="text-center mt-6">
            <p className="text-[#44444E]">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#715A5A] font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}