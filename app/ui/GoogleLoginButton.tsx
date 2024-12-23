'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

const GoogleLoginButton = () => {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/account' })} // Redirect to home after login
      className="flex justify-center gap-3 items-center text-black p-2 rounded shadow-lg"
    >
      <Image src={`/google.png`} alt="Google" width={20} height={20} />
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
