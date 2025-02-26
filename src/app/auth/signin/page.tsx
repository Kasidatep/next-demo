'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { NextPage } from 'next';

const SignIn: NextPage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleSignIn = (provider: string) => {
    if (isChecked) {
      signIn(provider, {
        callbackUrl: 'https://next-deno.kasidate.me/protected'
      });
    } else {
      alert('Please provide consent before signing in.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Sign in</h1>
        <hr className="mb-4" />

        <p className="text-gray-600 text-sm mb-4">
          Before signing in, we need your permission to access your email address.
          This is required for:
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
          <li>✅ Account creation & login</li>
          <li>✅ Providing personalized services</li>
          <li>✅ Sending important notifications</li>
        </ul>

        <label className="flex items-center space-x-2 cursor-pointer mb-4">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="w-5 h-5 text-blue-500 rounded border-gray-300 focus:ring focus:ring-blue-200"
          />
          <span className="text-gray-700 text-sm">
            I agree to share my email address and understand how it will be used.
          </span>
        </label>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => handleSignIn('google')}
            className={`px-4 py-2 rounded-lg text-white ${
              isChecked ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isChecked}
          >
            Sign in with Google
          </button>
          <button
            onClick={() => handleSignIn('line')}
            className={`px-4 py-2 rounded-lg text-white ${
              isChecked ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isChecked}
          >
            Sign in with LINE
          </button>
          <button
            onClick={() => handleSignIn('facebook')}
            className={`px-4 py-2 rounded-lg text-white ${
              isChecked ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isChecked}
          >
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
