import type { Metadata, Viewport } from 'next';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';

import '@/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { PersonJsonLd } from '@/components/seo/PersonJsonLd';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/providers/ThemeProviders';

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
    'توسعه‌دهنده وب',
    'مهندس نرم‌افزار',
    'پورتفولیو برنامه‌نویس',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/peyman-logo.svg', type: 'image/svg+xml' },
      { url: '/icon-48x48.png', sizes: '48x48', type: 'image/png' },
    ],
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
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F6F8FC' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1020' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language} dir="rtl" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/fonts/woff2/YekanBakh-FaNum-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <InitColorSchemeScript attribute="data" defaultMode="system" />
        <ThemeProvider>
          <PersonJsonLd />
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
