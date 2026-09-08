import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import MuiButton from '@/components/Shared/MuiButton';
import MuiIconButton from '@/components/Shared/MuiIconButton';
import AppLink from '@/components/common/AppLink';

export const HeaderRoot = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
  paddingBlock: theme.spacing(1.25),
  background: 'linear-gradient(180deg, rgb(246 248 252 / 92%) 0%, rgb(246 248 252 / 0%) 100%)',

  ...theme.applyStyles('dark', {
    background: 'linear-gradient(180deg, rgb(11 16 32 / 92%) 0%, rgb(11 16 32 / 0%) 100%)',
  }),
}));

export const HeaderContainer = styled(Container)({
  position: 'relative',
});

export const HeaderInner = styled('div')(({ theme }) => ({
  minHeight: 66,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(0.75, 1),
  border: '1px solid rgb(255 255 255 / 82%)',
  borderRadius: 32,
  backgroundColor: 'rgb(255 255 255 / 72%)',
  boxShadow: '0 18px 45px rgb(16 24 40 / 10%), inset 0 1px 0 rgb(255 255 255 / 88%)',
  backdropFilter: 'blur(24px) saturate(170%)',
  WebkitBackdropFilter: 'blur(24px) saturate(170%)',

  [theme.breakpoints.up('md')]: {
    paddingInline: theme.spacing(1.5),
  },

  ...theme.applyStyles('dark', {
    borderColor: 'rgb(255 255 255 / 9%)',
    backgroundColor: 'rgb(18 26 43 / 74%)',
    boxShadow: '0 20px 48px rgb(0 0 0 / 30%), inset 0 1px 0 rgb(255 255 255 / 7%)',
  }),
}));

export const HeaderBrandLink = styled(AppLink)(({ theme }) => ({
  minWidth: 'max-content',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.25),
}));

export const HeaderLogoFrame = styled('span')(({ theme }) => ({
  width: 44,
  height: 44,
  display: 'grid',
  placeItems: 'center',
  transition: theme.transitions.create(['transform', 'box-shadow']),

  '&:hover': {
    transform: 'translateY(-2px) rotate(-2deg)',
    boxShadow: '0 14px 34px rgb(6 72 251 / 20%)',
  },
}));

export const HeaderBrandCopy = styled('span')({
  display: 'block',
});

export const HeaderBrandName = styled('span')({
  display: 'block',
  color: 'transparent',
  fontWeight: 900,
  lineHeight: 1.4,
  letterSpacing: '0.08em',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const HeaderBrandRole = styled('span')(({ theme }) => ({
  display: 'block',
  color: theme.vars.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
  lineHeight: theme.typography.caption.lineHeight,

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const DesktopNavigation = styled('nav')(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: theme.spacing(0.25),

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

export const HeaderNavigationButton = styled(MuiButton)(({ theme }) => ({
  minWidth: 'auto',
  paddingInline: theme.spacing(1.5),
  borderRadius: 999,
  color: theme.vars.palette.text.secondary,
  transition: theme.transitions.create(['color', 'background-color', 'transform']),

  '&:hover': {
    color: theme.vars.palette.primary.main,
    backgroundColor: theme.vars.palette.action.hover,
    transform: 'translateY(-1px)',
  },
}));

export const HeaderActions = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

export const ThemeToggleButton = styled(MuiIconButton)(({ theme }) => ({
  width: 42,
  height: 42,
  border: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.06)`,
  transition: theme.transitions.create(['color', 'background-color', 'transform']),

  '&:hover': {
    color: theme.vars.palette.primary.main,
    backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.12)`,
    transform: 'rotate(-8deg)',
  },
}));

export const HeaderCallToAction = styled(MuiButton)(({ theme }) => ({
  display: 'none',
  borderRadius: 999,
  boxShadow: `0 8px 20px rgba(${theme.vars.palette.primary.mainChannel} / 0.22)`,

  [theme.breakpoints.up('sm')]: {
    display: 'inline-flex',
  },
}));

export const MobileMenuButton = styled(MuiIconButton)(({ theme }) => ({
  width: 42,
  height: 42,
  display: 'inline-flex',
  border: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.64)`,

  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const MobileNavigation = styled('nav')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
}));

export const MobileNavigationButton = styled(MuiButton)(({ theme }) => ({
  minHeight: 48,
  justifyContent: 'flex-start',
  paddingInline: theme.spacing(2),
}));

export const MobileCallToAction = styled(MuiButton)({
  borderRadius: 999,
});
