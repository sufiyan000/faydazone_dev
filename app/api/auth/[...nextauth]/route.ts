import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

const users = [
  { id: '1', name: 'Admin User', email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { id: '2', name: 'Regular User', email: 'user@example.com', password: 'user123', role: 'user' },
];

export const authOptions: AuthOptions = { // Exporting authOptions
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = users.find(
          (u) => u.email === credentials?.email && u.password === credentials?.password
        );
        return user || null;
      },
    }),
     // Adding Google Provider
     GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Save the user's role, name, and email to the JWT token
      if (user) {
        // await connectToDatabase(); // Connect to MongoDB
        // // Check if user already exists in DB
        // const existingUser = await User.findOne({ email: user.email });

        // if (!existingUser) {
        //   // If the user doesn't exist, create a new user
        //   const newUser = new User({
        //     email: user.email,
        //     name: user.name,
        //     role: 'user', // Default role, can be changed if needed
        //   });
        //   await newUser.save();
        // }
        token.role = user.role || 'user';  // Default to 'user' if role is undefined
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      // Add user details from the token to the session
      session.user.role = token.role as string;
      session.user.name = token.name as string;
      session.user.email = token.email as string;
      session.user.image = token.image as string;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
