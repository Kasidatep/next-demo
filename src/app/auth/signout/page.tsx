'use client';

import { signOut } from 'next-auth/react';
import { NextPage } from 'next';

const SignOut: NextPage = () => {
  return (
    <div>
      <h1>You are signed out</h1>
      <button onClick={() => signOut()}>Sign in again</button>
    </div>
  );
};

export default SignOut;
