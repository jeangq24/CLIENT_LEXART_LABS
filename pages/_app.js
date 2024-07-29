// pages/_app.js
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { UserProvider, useUser } from '../lib/UserContext';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

function AuthGuard({ children }) {
  const router = useRouter();
  const { user, loading } = useUser();

  useEffect(() => {
    if (!loading) {
      if (!user?.id && router.pathname !== '/auth' && !user && router.pathname !== '/register') {
        router.push('/auth');
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;  
  }

  return <>{children}</>;
}

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AuthGuard>
        <main className={montserrat.className}>
          <Component {...pageProps} />
          <Toaster />
        </main>
      </AuthGuard>
    </UserProvider>
  );
}

export default MyApp;
