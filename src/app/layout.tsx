import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import SupabaseProvider from '@/components/SupabaseProvider';
import QueryClientProviderWrapper from '@/components/QueryClientProviderWrapper';
import Header from '@/components/Header';
import { ToastProvider } from '@/components/Toast';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

const siteUrl = 'https://ingreedie.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ingreedie – Cook What You Have, Waste Less',
    template: '%s | Ingreedie',
  },
  description:
    'Ingreedie finds recipes based on the ingredients you already have. Track your pantry, reduce food waste, and discover meals you can make right now.',
  keywords: [
    'recipe finder',
    'pantry recipes',
    'ingredients to recipe',
    'reduce food waste',
    'what to cook',
    'meal planning',
    'pantry management',
    'cook with what you have',
  ],
  authors: [{ name: 'Ingreedie' }],
  creator: 'Ingreedie',
  publisher: 'Ingreedie',
  category: 'Food & Drink',

  // Canonical URL
  alternates: {
    canonical: siteUrl,
  },

  // Open Graph (Facebook, LinkedIn, iMessage, Slack, etc.)
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Ingreedie',
    title: 'Ingreedie – Cook What You Have, Waste Less',
    description:
      'Find recipes based on what\'s already in your pantry. Reduce food waste and discover meals you can make right now.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Ingreedie – Cook What You Have, Waste Less',
      },
    ],
    locale: 'en_US',
  },

  // Twitter / X Cards
  twitter: {
    card: 'summary_large_image',
    title: 'Ingreedie – Cook What You Have, Waste Less',
    description:
      'Find recipes based on what\'s already in your pantry. Reduce food waste and discover meals you can make right now.',
    images: ['/opengraph-image.png'],
    creator: '@ingreedie',
    site: '@ingreedie',
  },

  // Favicon / App icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // PWA / mobile app manifest
  manifest: '/site.webmanifest',

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server component can't set cookies on initial render
          }
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={dmSans.className}>
        <SupabaseProvider initialSession={session}>
          <ToastProvider>
            <Header />
            <QueryClientProviderWrapper>
              <main className="min-h-[calc(100vh-72px)]">{children}</main>
            </QueryClientProviderWrapper>
          </ToastProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
