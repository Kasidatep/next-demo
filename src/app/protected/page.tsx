'use client';


import { useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { NextPage } from 'next';

const ProtectedPage: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {
    // if (session?.user.idToken) {
    //   fetch('/api/your-backend-endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${session.user.idToken}`,
    //     },
    //     body: JSON.stringify({ token: session.user.idToken }),
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // }

    console.log(session);
  }, [session]);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
};

export default ProtectedPage;
