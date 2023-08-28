import { addUser } from '@/app/service/user';
import NextAuth, { AuthOptions, NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || '',
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user: { id, name, email, image } }) {
      if (!email) return false;
      addUser({ id, name: name || '', email, username: email.split('@')[0] });
      return true;
    },
    async session({ session }) {
      const user = session?.user;
      if (user) {
        session.user = { ...user, username: user.email?.split('@')[0] || '' };
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

const handler: NextAuthOptions = NextAuth(authOptions);
export { handler as GET, handler as POST };
