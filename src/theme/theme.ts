'use client';

import { createTheme } from '@mui/material/styles';

import { components } from '@/theme/components';
import { palette } from '@/theme/palette';
import { typography } from '@/theme/typography';

export const theme = createTheme({
  cssVariables: true,
  palette,
  typography,
  shape: {
    borderRadius: 12,
  },
  components,
});
