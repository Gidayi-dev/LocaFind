// app/signup/page.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
// import LayoutWrapper from '../components/LayoutWrapper';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'user', // Default role
    businessName: '',
    businessType: '',
    businessAddress: '',
    businessDescription: '',
    acceptTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
    // Handle sign up logic here
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const businessTypes = [
    'Restaurant & Food',
    'Retail & Shopping',
    'Services & Repair',
    'Healthcare & Pharmacy',
    'Beauty & Salon',
    'Grocery & Supermarket',
    'Electronics & Tech',
    'Fashion & Clothing',
    'Other'
  ];

  return (
    // <LayoutWrapper>
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
              <h1 className="text-3xl font-bold text-[#37353E] mb-2">Create Account</h1>
              <p className="text-[#44444E]">Join the Locafind community today</p>
            </div>

            {/* Sign Up Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#D3DAD9]">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#37353E] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

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

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-[#37353E] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                    placeholder="+254 700 000 000"
                    required
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-[#37353E] mb-2">
                    Account Type
                  </label>
                  <div className="space-y-3">
                    {/* User Role Option */}
                    <label className="flex items-start space-x-3 p-4 border border-[#D3DAD9] rounded-lg cursor-pointer hover:border-[#715A5A] transition-colors">
                      <input
                        type="radio"
                        name="role"
                        value="user"
                        checked={formData.role === 'user'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#715A5A] border-[#D3DAD9] focus:ring-[#715A5A] focus:ring-2 mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-[#37353E]">Regular User</div>
                        <div className="text-sm text-[#44444E] mt-1">
                          Discover local businesses, save favorites, and contribute to the community
                        </div>
                      </div>
                    </label>

                    {/* Vendor Role Option */}
                    <label className="flex items-start space-x-3 p-4 border border-[#D3DAD9] rounded-lg cursor-pointer hover:border-[#715A5A] transition-colors">
                      <input
                        type="radio"
                        name="role"
                        value="vendor"
                        checked={formData.role === 'vendor'}
                        onChange={handleChange}
                        className="w-4 h-4 text-[#715A5A] border-[#D3DAD9] focus:ring-[#715A5A] focus:ring-2 mt-1"
                      />
                      <div className="flex-1">
                        <div className="font-medium text-[#37353E]">Business Owner</div>
                        <div className="text-sm text-[#44444E] mt-1">
                          Claim and manage your business listing, get verified, and reach more customers
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Business Owner Additional Fields */}
                {formData.role === 'vendor' && (
                  <div className="space-y-4 p-4 bg-[#D3DAD9] rounded-lg border border-[#715A5A]">
                    <h3 className="font-semibold text-[#37353E] mb-2">Business Information</h3>
                    
                    {/* Business Name */}
                    <div>
                      <label className="block text-sm font-medium text-[#37353E] mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                        placeholder="Enter your business name"
                        required={formData.role === 'vendor'}
                      />
                    </div>

                    {/* Business Type */}
                    <div>
                      <label className="block text-sm font-medium text-[#37353E] mb-2">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                        required={formData.role === 'vendor'}
                      >
                        <option value="">Select business type</option>
                        {businessTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Business Address */}
                    <div>
                      <label className="block text-sm font-medium text-[#37353E] mb-2">
                        Business Address *
                      </label>
                      <input
                        type="text"
                        name="businessAddress"
                        value={formData.businessAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white"
                        placeholder="Enter your business address"
                        required={formData.role === 'vendor'}
                      />
                    </div>

                    {/* Business Description */}
                    <div>
                      <label className="block text-sm font-medium text-[#37353E] mb-2">
                        Business Description
                      </label>
                      <textarea
                        name="businessDescription"
                        value={formData.businessDescription}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent bg-white resize-none"
                        placeholder="Briefly describe your business..."
                      />
                    </div>
                  </div>
                )}

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-[#37353E] mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                    placeholder="Create a password"
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium text-[#37353E] mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#D3DAD9] rounded-lg focus:ring-2 focus:ring-[#715A5A] focus:border-transparent"
                    placeholder="Confirm your password"
                    required
                  />
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#715A5A] border-[#D3DAD9] rounded focus:ring-[#715A5A] focus:ring-2 mt-1"
                    required
                  />
                  <label className="text-sm text-[#44444E]">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#715A5A] hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#715A5A] hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                
<Link
                  href="/sign"
                  className="w-full bg-[#715A5A] text-white py-4 px-32 rounded-lg hover:bg-[#5a4a4a] transition-colors font-semibold"
                >
                  Create Account
                </Link>
              </form>

              {/* Divider */}
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-[#D3DAD9]"></div>
                <span className="px-4 text-sm text-[#44444E]">or</span>
                <div className="flex-1 border-t border-[#D3DAD9]"></div>
              </div>

              {/* Social Sign Up */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center space-x-3 py-3 border border-[#D3DAD9] rounded-lg hover:bg-[#D3DAD9] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-[#37353E] font-medium">Sign up with Google</span>
                </button>
              </div>
            </div>

            {/* Already have account */}
            <div className="text-center mt-6">
              <p className="text-[#44444E]">
                Already have an account?{' '}
                <Link href="/sign" className="text-[#715A5A] font-semibold hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
   
  );
}