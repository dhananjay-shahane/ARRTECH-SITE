import type { Metadata } from 'next';
import { Inter, Nunito_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { ConditionalNavbar, ConditionalFooter } from '@/components/layout/ConditionalLayoutElements';
import { ElevenLabsWidget } from '@/components/layout/ElevenLabsWidget';

import { DynamicTitle } from '@/components/layout/DynamicTitle';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-nunito-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arrtech.com'),
  title: {
    default: 'ARRTECH APPS AND DATA SOLUTIONS - Custom Enterprise Software & Cloud Platforms',
    template: '%s | ARRTECH APPS AND DATA SOLUTIONS'
  },
  description: 'ARRTECH APPS AND DATA SOLUTIONS delivers custom enterprise software, cloud platforms, e-governance systems, and digital creative services. Trusted by leading organizations across India.',
  keywords: [
    'enterprise software',
    'custom IT services',
    'cloud platforms',
    'web development',
    'e-commerce development',
    'UI/UX design',
    'SEO services',
    'e-governance solutions',
    'driving test tracks',
    'township management system',
    'visitor management system',
    'ARRTECH APPS AND DATA SOLUTIONS',
    'India'
  ],
  authors: [
    { name: 'rajesh kumar' },
    { name: 'dhananjay shahane' }
  ],
  creator: 'ARRTECH APPS AND DATA SOLUTIONS',
  publisher: 'ARRTECH APPS AND DATA SOLUTIONS',
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

  manifest: '/manifest.json',
  openGraph: {
    title: 'ARRTECH APPS AND DATA SOLUTIONS - Custom Enterprise Software & Cloud Platforms',
    description: 'Architecting custom software and scalable digital platforms for forward-thinking enterprises across India.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://arrtech.com',
    siteName: 'ARRTECH APPS AND DATA SOLUTIONS',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ARRTECH APPS AND DATA SOLUTIONS - Custom Enterprise Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ARRTECH APPS AND DATA SOLUTIONS - Custom Enterprise Software',
    description: 'Architecting custom software and scalable digital platforms for forward-thinking enterprises.',
    images: ['/og-image.png'],
    creator: '@arrtech',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://arrtech.com',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>

        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
      </head>
      <body className="flex flex-col min-h-screen bg-[#0f172a] text-white antialiased font-sans overflow-x-hidden" suppressHydrationWarning>
        <DynamicTitle />
        <ConditionalNavbar />
        <main className="flex-grow">
          {children}
        </main>
        <ConditionalFooter />
        <ElevenLabsWidget />
      </body>
    </html>
  );
}
