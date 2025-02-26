'use client';

import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { NextPage } from 'next';

const ProtectedPage: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
  }, [session]);

  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg text-gray-700">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Protected Page</h1>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Session Data:</h2>
        <pre className="bg-gray-200 p-4 rounded-md text-sm text-gray-800 overflow-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>

      <button
        onClick={() => signOut()}
        className="mt-6 px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
      >
        Sign out
      </button>
    </div>
  );
};

export default ProtectedPage;
