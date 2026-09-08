import type { Metadata, Viewport } from 'next';

import '@/app/globals.css';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import { siteConfig } from '@/config/site';
import { AppProviders } from '@/providers/AppProviders';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: '/' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  keywords: [
    'Peyman',
    'Software Engineer',
    'Web Developer',
    'Frontend Developer',
    'Next.js Developer',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' }],
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: '/',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: ['/opengraph-image'],
  },
  formatDetection: {
    telephone: false,
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProviders>
            <PersonJsonLd />
            {children}
          </AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
