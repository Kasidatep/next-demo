import NextAuth from 'next-auth';
import LineProvider from 'next-auth/providers/line';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          redirect_uri: process.env.NEXTAUTH_URL + '/api/auth/callback/google',
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
      authorization: {
        params: {
          redirect_uri: process.env.NEXTAUTH_URL + '/api/auth/callback/facebook',
        },
      },
    }),
    LineProvider({
      clientId: process.env.LINE_CLIENT_ID as string,
      clientSecret: process.env.LINE_CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: 'openid profile email',
          redirect_uri: process.env.NEXTAUTH_URL + '/api/auth/callback/line',
          callbackUrl: process.env.NEXTAUTH_URL + '/protected',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }: { token: any, account: any }) {
      console.log(token)
      console.log(account)
      if (account?.access_token) {
        token.accessToken = account.access_token;
      }
      if (account?.id_token) {
        token.idToken = account.id_token;
      }

      return token;
    },
    async session({ session, token }: { session: any, token: any }) {
      session.user.idToken = token.idToken as string;
      console.log(session);
      console.log(token)

      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
  debug: true, 
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
