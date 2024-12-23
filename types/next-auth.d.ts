import NextAuth, { DefaultSession, DefaultUser } from 'next-auth';

// Extend the default User type
declare module 'next-auth' {
  interface User extends DefaultUser {
    role?: string; // Add role property
  }

  interface Session {
    user: {
      role?: string; // Add role to session user
    } & DefaultSession['user'];
  }

  interface JWT {
    role?: string; // Add role to JWT
  }
}
