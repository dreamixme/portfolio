'use client';

import { Container, Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import MuiButton from '@/components/Shared/MuiButton';

export const FooterRoot = styled('footer')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  backgroundColor: theme.vars.palette.background.default,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 520,
    height: 520,
    insetInlineEnd: -220,
    top: -260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgb(6 72 251 / 16%), transparent 68%)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 440,
    height: 440,
    insetInlineStart: -210,
    bottom: -280,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgb(249 115 22 / 13%), transparent 68%)',
    pointerEvents: 'none',
  },
}));

export const FooterContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  paddingTop: theme.spacing(5),
  paddingBottom: theme.spacing(5),

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(7),
    paddingBottom: theme.spacing(7),
  },
}));

export const FooterGlassPanel = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(3),
  border: '1px solid rgb(255 255 255 / 86%)',
  borderRadius: 28,
  backgroundColor: 'rgb(255 255 255 / 66%)',
  boxShadow: '0 24px 64px rgb(16 24 40 / 9%), inset 0 1px 0 rgb(255 255 255 / 92%)',
  backdropFilter: 'blur(24px) saturate(155%)',
  WebkitBackdropFilter: 'blur(24px) saturate(155%)',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    insetInlineStart: '12%',
    width: '42%',
    height: 1,
    background: `linear-gradient(90deg, transparent, ${theme.vars.palette.primary.main}, transparent)`,
    opacity: 0.6,
  },

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
    borderRadius: 34,
  },

  ...theme.applyStyles('dark', {
    borderColor: 'rgb(255 255 255 / 9%)',
    backgroundColor: 'rgb(18 26 43 / 68%)',
    boxShadow: '0 28px 72px rgb(0 0 0 / 28%), inset 0 1px 0 rgb(255 255 255 / 6%)',
  }),
}));

export const FooterGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  alignItems: 'start',
  gap: theme.spacing(4),

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'minmax(280px, 1.15fr) 1fr auto',
    gap: theme.spacing(6),
  },
}));

export const FooterBrandColumn = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2.25),
}));

export const FooterBrandRow = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
}));

export const FooterLogoFrame = styled('span')(({ theme }) => ({
  width: 58,
  height: 58,
  flexShrink: 0,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid transparent',
  borderRadius: 18,
  background: `linear-gradient(${theme.vars.palette.background.paper}, ${theme.vars.palette.background.paper}) padding-box, linear-gradient(135deg, ${theme.vars.palette.primary.main}, ${theme.vars.palette.secondary.main}) border-box`,
  boxShadow: `0 14px 30px rgba(${theme.vars.palette.primary.mainChannel} / 0.16)`,
}));

export const FooterBrandName = styled(Typography)({
  fontWeight: 900,
});

export const FooterDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 460,
  color: theme.vars.palette.text.secondary,
}));

export const FooterLinksTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1.5),
}));

export const FooterLinksGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(110px, 1fr))',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.75),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 18,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.42)`,
}));

export const FooterLinkButton = styled(MuiButton)(({ theme }) => ({
  minWidth: 0,
  justifyContent: 'flex-start',
  color: theme.vars.palette.text.secondary,
  borderRadius: 12,
  transition: theme.transitions.create(['color', 'background-color', 'transform']),

  '&:hover': {
    color: theme.vars.palette.primary.main,
    backgroundColor: theme.vars.palette.action.hover,
    transform: 'translateX(-3px)',
  },
}));

export const FooterCallToAction = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1.5),
  padding: theme.spacing(2),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 20,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.44)`,
}));

export const FooterPrimaryButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: 999,
  boxShadow: `0 10px 24px rgba(${theme.vars.palette.primary.mainChannel} / 0.22)`,
}));

export const FooterBackButton = styled(MuiButton)(({ theme }) => ({
  color: theme.vars.palette.text.secondary,
  transition: theme.transitions.create(['color', 'transform']),

  '&:hover': {
    color: theme.vars.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}));

export const FooterSeparator = styled(Divider)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),

  [theme.breakpoints.up('md')]: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
}));

export const FooterBottom = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));

export const FooterCredit = styled(Typography)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  color: theme.vars.palette.text.secondary,
}));
