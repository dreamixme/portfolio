'use client';

import { createContext, type ReactNode, useCallback, useContext, useMemo } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { CssBaseline } from '@mui/material';
import {
  type PaletteMode,
  ThemeProvider as MuiThemeProvider,
  useColorScheme,
} from '@mui/material/styles';

import { theme } from '@/theme/theme';
import { MuiToastProvider } from '@/components/Shared/Toastify';

type ThemePreference = PaletteMode | 'system';

interface ThemeModeContextValue {
  preference: ThemePreference;
  activeMode: PaletteMode | undefined;
  setPreference: (preference: ThemePreference) => void;
  toggleMode: () => void;
}

const ThemeModeContext = createContext<ThemeModeContextValue | undefined>(undefined);

function ThemeModeProvider({ children }: Readonly<{ children: ReactNode }>) {
  const { mode, systemMode, setMode } = useColorScheme();
  const preference: ThemePreference = mode ?? 'system';
  const activeMode = preference === 'system' ? systemMode : preference;

  const setPreference = useCallback(
    (nextPreference: ThemePreference) => {
      setMode(nextPreference);
    },
    [setMode],
  );

  const toggleMode = useCallback(() => {
    setMode(activeMode === 'dark' ? 'light' : 'dark');
  }, [activeMode, setMode]);

  const value = useMemo(
    () => ({ preference, activeMode, setPreference, toggleMode }),
    [preference, activeMode, setPreference, toggleMode],
  );

  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('useThemeMode must be used inside ThemeProvider.');
  }

  return context;
}

export function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <MuiThemeProvider theme={theme} defaultMode="system" disableTransitionOnChange>
        <CssBaseline />
        <ThemeModeProvider>{children}</ThemeModeProvider>
        <MuiToastProvider />
      </MuiThemeProvider>
    </AppRouterCacheProvider>
  );
}
