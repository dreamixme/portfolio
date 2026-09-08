import {
  alpha,
  createTheme,
  type PaletteMode,
  type PaletteOptions,
  type ThemeOptions,
} from '@mui/material/styles';

const brand = { blue: '#0648FB', orange: '#F97316' } as const;

const semanticColors = {
  light: {
    primary: { main: brand.blue, light: '#4D7BFF', dark: '#0437C4', contrastText: '#FFFFFF' },
    secondary: { main: brand.orange, light: '#FB923C', dark: '#C2410C', contrastText: '#FFFFFF' },
    error: { main: '#D92D20', light: '#F04438', dark: '#B42318', contrastText: '#FFFFFF' },
    warning: { main: '#B54708', light: '#F79009', dark: '#93370D', contrastText: '#FFFFFF' },
    info: { main: '#1570EF', light: '#2E90FA', dark: '#175CD3', contrastText: '#FFFFFF' },
    success: { main: '#067647', light: '#12B76A', dark: '#05603A', contrastText: '#FFFFFF' },
  },
  dark: {
    primary: { main: '#6B8CFF', light: '#AFC1FF', dark: brand.blue, contrastText: '#07111F' },
    secondary: { main: '#FB923C', light: '#FDBA74', dark: '#EA580C', contrastText: '#1F1308' },
    error: { main: '#F97066', light: '#FDA29B', dark: '#F04438', contrastText: '#230B09' },
    warning: { main: '#FDB022', light: '#FEC84B', dark: '#F79009', contrastText: '#241A02' },
    info: { main: '#53B1FD', light: '#84CAFF', dark: '#2E90FA', contrastText: '#071828' },
    success: { main: '#32D583', light: '#6CE9A6', dark: '#12B76A', contrastText: '#052016' },
  },
} as const;

const commonSettings: ThemeOptions = {
  direction: 'rtl',
  breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "'Yekan Bakh', Arial, sans-serif",
    h1: { fontSize: '2rem', fontWeight: 800, lineHeight: 1.35 },
    h2: { fontSize: '1.75rem', fontWeight: 800, lineHeight: 1.4 },
    h3: { fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.45 },
    h4: { fontSize: '1.25rem', fontWeight: 700, lineHeight: 1.5 },
    h5: { fontSize: '1.125rem', fontWeight: 700, lineHeight: 1.55 },
    h6: { fontSize: '1rem', fontWeight: 700, lineHeight: 1.6 },
    subtitle1: { fontSize: '1rem', fontWeight: 600, lineHeight: 1.7 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 600, lineHeight: 1.7 },
    body1: { fontSize: '1rem', fontWeight: 400, lineHeight: 1.8 },
    body2: { fontSize: '0.875rem', fontWeight: 400, lineHeight: 1.75 },
    button: { fontSize: '0.875rem', fontWeight: 700, lineHeight: 1.5, textTransform: 'none' },
    caption: { fontSize: '0.75rem', fontWeight: 400, lineHeight: 1.65 },
    overline: { fontSize: '0.75rem', fontWeight: 700, lineHeight: 1.6, letterSpacing: 0 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        ':root': {
          '--toastify-color-success': theme.vars.palette.success.main,
          '--toastify-color-warning': theme.vars.palette.warning.main,
          '--toastify-color-error': theme.vars.palette.error.main,
          '--toastify-color-info': theme.vars.palette.info.main,
          '--toast-border-color': theme.vars.palette.divider,
        },
        body: {
          backgroundColor: theme.vars.palette.background.default,
          color: theme.vars.palette.text.primary,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '::selection': {
          color: theme.vars.palette.primary.contrastText,
          backgroundColor: theme.vars.palette.primary.main,
        },
        ':focus-visible': {
          outline: `3px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.35)`,
          outlineOffset: 2,
        },
        'input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill': {
          WebkitTextFillColor: theme.vars.palette.text.primary,
          WebkitBoxShadow: `0 0 0 1000px ${theme.vars.palette.background.paper} inset`,
          caretColor: theme.vars.palette.text.primary,
          transition: 'background-color 9999s ease-out 0s',
        },
      }),
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: ({ theme }) => ({
          width: 'fit-content',
          minWidth: 88,
          borderRadius: 14,
          paddingInline: theme.spacing(2),
          flexShrink: 0,
          transition: theme.transitions.create(['background-color', 'border-color', 'box-shadow']),
          '&.Mui-focusVisible': {
            boxShadow: `0 0 0 4px rgba(${theme.vars.palette.primary.mainChannel} / 0.18)`,
          },
          '& .MuiButton-startIcon': { marginInlineStart: 0, marginInlineEnd: theme.spacing(0.75) },
          '& .MuiButton-endIcon': { marginInlineStart: theme.spacing(0.75), marginInlineEnd: 0 },
        }),
        sizeSmall: { minHeight: 36 },
        sizeMedium: { minHeight: 44 },
        sizeLarge: { minHeight: 48, paddingInline: 24 },
        fullWidth: { width: '100%' },
        contained: ({ theme }) => ({
          boxShadow: 'none',
          '&.Mui-disabled': {
            color: theme.vars.palette.action.disabled,
            backgroundColor: theme.vars.palette.action.disabledBackground,
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.vars.palette.divider,
          '&.Mui-disabled': {
            color: theme.vars.palette.action.disabled,
            borderColor: theme.vars.palette.action.disabledBackground,
          },
        }),
        text: ({ theme }) => ({ '&.Mui-disabled': { color: theme.vars.palette.action.disabled } }),
      },
    },
    MuiTextField: { defaultProps: { fullWidth: true, variant: 'outlined' } },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 44,
          borderRadius: theme.shape.borderRadius,
          backgroundColor: theme.vars.palette.background.paper,
          transition: theme.transitions.create('border-color'),
          '& .MuiOutlinedInput-notchedOutline': { borderColor: theme.vars.palette.divider },
          '&:hover:not(.Mui-disabled) .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.vars.palette.text.secondary,
          },
          '&.Mui-disabled': {
            backgroundColor: theme.vars.palette.background.default,
            opacity: 0.5,
          },
        }),
        input: {
          boxSizing: 'border-box',
          paddingBlock: 10.5,
          fontSize: '1rem',
          lineHeight: 1.6,
        },
        multiline: { paddingBlock: 10 },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          right: 14,
          left: 'auto',
          letterSpacing: 0,
          textAlign: 'right',
          transformOrigin: 'top right',
        },
      },
    },
    MuiFormHelperText: { styleOverrides: { root: { marginInline: 12, lineHeight: 1.65 } } },
    MuiFormControlLabel: {
      styleOverrides: { label: { fontSize: '0.875rem', lineHeight: 1.7 } },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 4,
          color: theme.vars.palette.text.disabled,
          '&.Mui-checked, &.MuiCheckbox-indeterminate': { color: theme.vars.palette.primary.main },
          '&.Mui-disabled': { color: theme.vars.palette.action.disabled },
        }),
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 4,
          color: theme.vars.palette.text.disabled,
          '&.Mui-checked': { color: theme.vars.palette.primary.main },
          '&.Mui-disabled': { color: theme.vars.palette.action.disabled },
        }),
      },
    },
    MuiPaper: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          borderColor: theme.vars.palette.divider,
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: `1px solid ${theme.vars.palette.divider}`,
          borderRadius: 16,
          boxShadow: `0 10px 30px ${alpha('#101828', 0.06)}`,
          ...theme.applyStyles('dark', { boxShadow: 'none' }),
        }),
      },
    },
    MuiChip: {
      defaultProps: { size: 'medium' },
      styleOverrides: {
        root: ({ theme }) => ({
          minHeight: 40,
          height: 'auto',
          borderRadius: 999,
          fontSize: '0.875rem',
          fontWeight: 600,
          overflow: 'hidden',
          '&.MuiChip-outlined': { borderColor: theme.vars.palette.divider },
          '& .MuiChip-label': { paddingInline: 12, paddingBlock: 6 },
          '& .MuiChip-icon': {
            width: 20,
            height: 20,
            flexShrink: 0,
            marginInlineStart: 6,
            marginInlineEnd: -2,
            fontSize: 20,
          },
          '& .MuiChip-deleteIcon': {
            width: 20,
            height: 20,
            flexShrink: 0,
            marginInlineStart: -2,
            marginInlineEnd: 6,
            fontSize: 20,
          },
        }),
        sizeSmall: {
          minHeight: 32,
          '& .MuiChip-label': { paddingInline: 10, paddingBlock: 4 },
          '& .MuiChip-icon, & .MuiChip-deleteIcon': { width: 16, height: 16, fontSize: 16 },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: ({ theme }) => ({
          backgroundColor: theme.vars.palette.text.primary,
          color: theme.vars.palette.background.paper,
          borderRadius: 8,
          fontSize: '0.75rem',
        }),
        arrow: ({ theme }) => ({ color: theme.vars.palette.text.primary }),
      },
    },
  },
};

const createAppPalette = (mode: PaletteMode): PaletteOptions => {
  const isDark = mode === 'dark';
  const colors = semanticColors[mode];

  return {
    mode,
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
    ...colors,
    text: isDark
      ? { primary: '#F2F4F7', secondary: '#AAB4C5', disabled: '#667085' }
      : { primary: '#172033', secondary: '#667085', disabled: '#98A2B3' },
    divider: isDark ? '#27334A' : '#E4E7EC',
    background: isDark
      ? { default: '#0B1020', paper: '#121A2B' }
      : { default: '#F6F8FC', paper: '#FFFFFF' },
    action: isDark
      ? {
          active: '#D0D5DD',
          hover: alpha('#FFFFFF', 0.06),
          selected: alpha(colors.primary.main, 0.16),
          focus: alpha(colors.primary.main, 0.2),
          disabled: '#667085',
          disabledBackground: '#202A3C',
        }
      : {
          active: '#344054',
          hover: alpha(colors.primary.main, 0.06),
          selected: alpha(colors.primary.main, 0.1),
          focus: alpha(colors.primary.main, 0.14),
          disabled: '#98A2B3',
          disabledBackground: '#EAECF0',
        },
    grey: {
      50: '#F9FAFB',
      100: '#F2F4F7',
      200: '#EAECF0',
      300: '#D0D5DD',
      400: '#98A2B3',
      500: '#667085',
      600: '#475467',
      700: '#344054',
      800: '#1D2939',
      900: '#101828',
    },
  };
};

export const theme = createTheme({
  ...commonSettings,
  cssVariables: {
    colorSchemeSelector: 'data',
    cssVarPrefix: 'portfolio',
  },
  colorSchemes: {
    light: { palette: createAppPalette('light') },
    dark: { palette: createAppPalette('dark') },
  },
});
