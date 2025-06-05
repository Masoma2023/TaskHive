import axios from 'axios';
import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await axios.post('https://taskhivebackend.onrender.com/api/users/signin', {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = res.data;

          if (user) {
            return user;
          }
          return null;
        } catch (error: any) {
          console.error('Authorize error:', error?.response?.data || error.message);
          throw new Error(error?.response?.data?.msg || 'Invalid credentials');
        }
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        session.user = token.user;
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST };
