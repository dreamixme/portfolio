import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v1X-appRouter';

import '@/app/globals.css';
import { AppProviders } from '@/providers/AppProviders';

export const metadata: Metadata = {
  title: {
    default: 'Next.js + MUI Boilerplate',
    template: '%s | Next.js + MUI Boilerplate',
  },
  description: 'Production-minded Next.js 16, TypeScript and Material UI 9 boilerplate.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProviders>{children}</AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
