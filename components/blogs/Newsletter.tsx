"use client";

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <div className="bg-[#4361EE]/5 rounded-2xl p-8 mb-9">
      <div className="flex flex-col h-full">
        <div className="mb-8">
          <div className="w-12 h-12 bg-[#4361EE]/10 rounded-full flex items-center justify-center mb-6">
            <Mail className="w-6 h-6 text-[#4361EE]" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Subscribe to our newsletter!
          </h3>
          <p className="text-gray-600">
            Be the first to get exclusive offers and latest news about software development, tech trends, and industry insights.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-auto">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4361EE] focus:ring-2 focus:ring-[#4361EE]/20 transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#4361EE] text-white py-3 rounded-lg font-medium hover:bg-[#3730A3] transition-colors duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}