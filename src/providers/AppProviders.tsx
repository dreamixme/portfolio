'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@/theme/theme';

export function AppProviders({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
