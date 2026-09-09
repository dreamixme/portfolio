'use client';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';

type StatAccent = 'primary' | 'secondary' | 'success' | 'purple';

interface RevealProps {
  isVisible: boolean;
}

interface StatCardProps extends RevealProps {
  accent: StatAccent;
  revealDelay: number;
}

const revealTransition = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  filter: isVisible ? 'blur(0)' : 'blur(8px)',
  transform: isVisible ? 'none' : 'translate3d(0, 34px, 0) scale(0.985)',
  transition: [
    'opacity 680ms cubic-bezier(0.16, 1, 0.3, 1)',
    'transform 820ms cubic-bezier(0.16, 1, 0.3, 1)',
    'filter 560ms ease-out',
  ].join(', '),
  transitionDelay: `${delay}ms`,
  willChange: isVisible ? 'auto' : 'opacity, transform, filter',

  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    filter: 'none',
    transform: 'none',
    transition: 'none',
  },
});

export const StatsRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(9),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.paper,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(6 72 251 / 1.5%) 1px, transparent 1px), linear-gradient(90deg, rgb(6 72 251 / 1.5%) 1px, transparent 1px)',
    backgroundSize: '54px 54px',
    maskImage: 'linear-gradient(90deg, transparent, black 18%, black 82%, transparent)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 560,
    height: 560,
    insetInlineEnd: -260,
    top: -260,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgb(6 72 251 / 12%), transparent 68%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
  },
}));

export const StatsContainer = styled(Container)({
  position: 'relative',
});

export const StatsHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<RevealProps>(({ isVisible, theme }) => ({
  maxWidth: 720,
  marginBottom: theme.spacing(5),
  ...revealTransition(isVisible),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
  },
}));

export const StatsTitle = styled('h2')(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
  maxWidth: 680,
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1.35,
  letterSpacing: '-0.025em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

export const StatsTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 56%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const StatsDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 650,
  color: theme.vars.palette.text.secondary,
}));

export const StatsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  alignItems: 'stretch',
  gap: theme.spacing(2),

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'minmax(0, 1.08fr) minmax(0, 0.92fr)',
    gap: theme.spacing(3),
  },
}));

export const MainMetricCard = styled('article', {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<RevealProps>(({ isVisible, theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  minHeight: 410,
  padding: theme.spacing(3),
  border: '1px solid rgb(255 255 255 / 16%)',
  borderRadius: 28,
  color: '#FFFFFF',
  background:
    'radial-gradient(circle at 12% 10%, rgb(249 115 22 / 28%), transparent 34%), linear-gradient(140deg, #071A54 0%, #0648FB 56%, #6D28D9 112%)',
  boxShadow: '0 28px 70px rgb(6 72 251 / 22%)',
  ...revealTransition(isVisible, 100),

  '&::before': {
    content: '"{ }"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: -18,
    bottom: -44,
    color: 'rgb(255 255 255 / 7%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '10rem',
    fontWeight: 900,
    lineHeight: 1,
    direction: 'ltr',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 220,
    height: 220,
    insetInlineStart: -100,
    bottom: -110,
    border: '1px solid rgb(255 255 255 / 10%)',
    borderRadius: '50%',
    boxShadow: '0 0 0 42px rgb(255 255 255 / 3%)',
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4.5),
    borderRadius: 34,
  },
}));

export const MainMetricContent = styled('div')({
  position: 'relative',
  zIndex: 1,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const MainMetricHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
}));

export const MainMetricValue = styled('span')({
  minWidth: '2.2ch',
  display: 'inline-flex',
  alignItems: 'flex-start',
  color: '#FFFFFF',
  fontVariantNumeric: 'tabular-nums',
  textShadow: '0 14px 36px rgb(0 0 0 / 22%)',
});

export const MainMetricNumber = styled('span')(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 900,
  lineHeight: 0.95,
  letterSpacing: '-0.08em',

  [theme.breakpoints.up('sm')]: {
    fontSize: '8rem',
  },
}));

export const MainMetricSuffix = styled('sup')(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  color: '#FDBA74',
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1,

  [theme.breakpoints.up('sm')]: {
    fontSize: '2.5rem',
  },
}));

export const MainMetricLabel = styled('h3')(({ theme }) => ({
  margin: 0,
  color: '#FFFFFF',
  fontSize: '1.65rem',
  fontWeight: 900,
  lineHeight: 1.5,

  [theme.breakpoints.up('sm')]: {
    fontSize: '2rem',
  },
}));

export const MainMetricCaption = styled(Typography)(({ theme }) => ({
  maxWidth: 590,
  marginTop: theme.spacing(3),
  color: 'rgb(255 255 255 / 76%)',

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(4),
  },
}));

export const MainMetricMeta = styled('div')(({ theme }) => ({
  marginTop: 'auto',
  paddingTop: theme.spacing(3),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export const MainMetricMetaItem = styled('span')(({ theme }) => ({
  minHeight: 36,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  paddingInline: theme.spacing(1.25),
  border: '1px solid rgb(255 255 255 / 16%)',
  borderRadius: 999,
  color: 'rgb(255 255 255 / 82%)',
  backgroundColor: 'rgb(255 255 255 / 8%)',
  fontSize: theme.typography.caption.fontSize,
  backdropFilter: 'blur(10px)',
}));

export const StatsCardsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
}));

export const StatCard = styled(SpotlightBorder, {
  shouldForwardProp: (prop) => prop !== 'accent' && prop !== 'isVisible' && prop !== 'revealDelay',
})<StatCardProps>(({ accent, isVisible, revealDelay, theme }) => {
  const accentColor =
    accent === 'secondary'
      ? theme.vars.palette.secondary.main
      : accent === 'success'
        ? theme.vars.palette.success.main
        : accent === 'purple'
          ? '#7C3AED'
          : theme.vars.palette.primary.main;

  return {
    position: 'relative',
    overflow: 'hidden',
    minHeight: 196,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: theme.spacing(2.5),
    border: `1px solid ${theme.vars.palette.divider}`,
    borderRadius: 24,
    backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.72)`,
    boxShadow: '0 18px 48px rgb(16 24 40 / 7%)',
    backdropFilter: 'blur(18px) saturate(145%)',
    WebkitBackdropFilter: 'blur(18px) saturate(145%)',
    ...revealTransition(isVisible, revealDelay),
    transition: [
      `opacity 680ms cubic-bezier(0.16, 1, 0.3, 1) ${revealDelay}ms`,
      `transform 820ms cubic-bezier(0.16, 1, 0.3, 1) ${revealDelay}ms`,
      `filter 560ms ease-out ${revealDelay}ms`,
      `border-color 220ms ${theme.transitions.easing.easeOut}`,
      `box-shadow 220ms ${theme.transitions.easing.easeOut}`,
    ].join(', '),

    '&::before': {
      content: '""',
      position: 'absolute',
      insetInlineStart: 0,
      top: 26,
      bottom: 26,
      width: 3,
      borderRadius: 999,
      backgroundColor: accentColor,
      boxShadow: `0 0 20px ${accentColor}`,
    },

    ...theme.applyStyles('dark', {
      backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.66)`,
      boxShadow: '0 18px 48px rgb(0 0 0 / 20%)',
    }),

    '@media (prefers-reduced-motion: reduce)': {
      opacity: 1,
      filter: 'none',
      transform: 'none',
      transition: 'none',
    },
  };
});

export const StatCardIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: StatAccent }>(({ accent, theme }) => {
  const accentColor =
    accent === 'secondary'
      ? theme.vars.palette.secondary.main
      : accent === 'success'
        ? theme.vars.palette.success.main
        : accent === 'purple'
          ? '#7C3AED'
          : theme.vars.palette.primary.main;
  const accentBackground =
    accent === 'secondary'
      ? `rgba(${theme.vars.palette.secondary.mainChannel} / 0.1)`
      : accent === 'success'
        ? `rgba(${theme.vars.palette.success.mainChannel} / 0.1)`
        : accent === 'purple'
          ? 'rgb(124 58 237 / 10%)'
          : `rgba(${theme.vars.palette.primary.mainChannel} / 0.1)`;

  return {
    position: 'absolute',
    insetInlineEnd: theme.spacing(2),
    top: theme.spacing(2),
    width: 42,
    height: 42,
    display: 'grid',
    placeItems: 'center',
    borderRadius: 14,
    color: accentColor,
    backgroundColor: accentBackground,

    '& svg': {
      fontSize: 22,
    },
  };
});

export const StatCardValue = styled('span')({
  display: 'inline-flex',
  alignItems: 'flex-start',
  fontVariantNumeric: 'tabular-nums',
});

export const StatCardNumber = styled('span')({
  fontSize: '2.8rem',
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: '-0.05em',
});

export const StatCardSuffix = styled('sup')(({ theme }) => ({
  marginTop: theme.spacing(0.35),
  color: theme.vars.palette.primary.main,
  fontSize: '1.2rem',
  fontWeight: 900,
  lineHeight: 1,
}));

export const StatCardLabel = styled('h3')(({ theme }) => ({
  marginTop: theme.spacing(1.25),
  marginBottom: theme.spacing(0.25),
  fontSize: '1rem',
  fontWeight: 800,
}));

export const StatCardDescription = styled(Typography)(({ theme }) => ({
  paddingInlineEnd: theme.spacing(2),
  color: theme.vars.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
}));
