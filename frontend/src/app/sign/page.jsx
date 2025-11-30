

// app/signin/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Sign() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign in data:', formData);
    // Handle sign in logic here
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
              {/* <Link href="/" className="inline-flex items-center space-x-2 mb-8">
                <div className="w-8 h-8 bg-[#715A5A] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold text-[#37353E]">Locafind</span>
              </Link> */}
              <h1 className="text-3xl font-bold text-[#37353E] mb-2">Welcome Back</h1>
              <p className="text-[#44444E]">Sign in to your Locafind account</p>
            </div>

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
                <Link
                  href="/"
                  className="w-full bg-[#715A5A] text-white py-4 px-41 rounded-lg hover:bg-[#5a4a4a] transition-colors font-semibold"
                >
                  Sign In
                </Link>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-[#D3DAD9]"></div>
                <span className="px-4 text-sm text-[#44444E]">or</span>
                <div className="flex-1 border-t border-[#D3DAD9]"></div>
              </div>

              {/* Social Sign In */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-3 py-3 border border-[#D3DAD9] rounded-lg hover:bg-[#D3DAD9] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-[#37353E] font-medium">Sign in with Google</span>
                </button>
              </div>
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

// app/signin/page.jsx
