'use client';

import { signIn } from 'next-auth/react';
import { NextPage } from 'next';

const SignIn: NextPage = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <hr></hr>
      <button onClick={() => signIn('google', {callbackUrl: 'https://kbsk6c57-3001.asse.devtunnels.ms/protected'})}>Sign in with Google</button>
      <br />
      <button onClick={() => signIn('line', {callbackUrl: 'https://kbsk6c57-3001.asse.devtunnels.ms/protected'})}>Sign in with LINE</button>
      <br />
      <button onClick={() => signIn('facebook', {callbackUrl: 'https://kbsk6c57-3001.asse.devtunnels.ms/protected'})}>Sign in with Facebook</button>
    </div>
  );
};

export default SignIn;
