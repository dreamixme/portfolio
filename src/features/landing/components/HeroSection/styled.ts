'use client';

import { Chip, Container, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import MuiButton from '@/components/Shared/MuiButton';
import { SpotlightBorder } from '@/components/common/SpotlightBorder';

const float = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(var(--glyph-rotate, 0deg)); }
  50% { transform: translate3d(0, -14px, 0) rotate(var(--glyph-rotate, 0deg)); }
`;

const orbit = keyframes`
  0%, 100% { transform: translateY(0) rotate(-7deg); }
  50% { transform: translateY(-10px) rotate(3deg); }
`;

const blink = keyframes`
  0%, 48% { opacity: 1; }
  49%, 100% { opacity: 0; }
`;

const statusPulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgb(18 183 106 / 42%); }
  70%, 100% { box-shadow: 0 0 0 8px rgb(18 183 106 / 0%); }
`;

const heroItemEnter = keyframes`
  from {
    opacity: 0;
    filter: blur(8px);
    transform: translate3d(0, 28px, 0);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0);
  }
`;

const heroVisualEnter = keyframes`
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translate3d(var(--hero-enter-x), 30px, 0) scale(0.97);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const backdropEnter = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const HeroRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  minHeight: 'calc(100svh - 86px)',
  display: 'grid',
  placeItems: 'center',
  isolation: 'isolate',
  overflow: 'hidden',
  borderBottom: `1px solid ${theme.vars.palette.divider}`,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(6 72 251 / 5%) 1px, transparent 1px), linear-gradient(90deg, rgb(6 72 251 / 5%) 1px, transparent 1px)',
    backgroundSize: '42px 42px',
    maskImage: 'linear-gradient(to bottom, black, transparent 92%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 780,
    height: 780,
    insetInlineStart: '51%',
    top: '48%',
    transform: 'translate(50%, -50%)',
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgb(6 72 251 / 16%), rgb(124 58 237 / 7%) 44%, transparent 70%)',
    filter: 'blur(12px)',
    pointerEvents: 'none',
  },
}));

export const CodeBackdrop = styled('div')({
  position: 'absolute',
  zIndex: -1,
  inset: 0,
  overflow: 'hidden',
  pointerEvents: 'none',
  animation: `${backdropEnter} 1.1s ease-out both`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const CodeGlyph = styled('span')(({ theme }) => ({
  '--glyph-rotate': '-8deg',
  position: 'absolute',
  display: 'grid',
  placeItems: 'center',
  minWidth: 62,
  minHeight: 42,
  padding: theme.spacing(0.75, 1.25),
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.13)`,
  borderRadius: 14,
  color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.18)`,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.34)`,
  boxShadow: `0 12px 32px rgba(${theme.vars.palette.primary.mainChannel} / 0.06)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '1rem',
  fontWeight: 800,
  direction: 'ltr',
  backdropFilter: 'blur(8px)',
  animation: `${float} 7s ease-in-out infinite`,

  '&:nth-of-type(1)': { top: '12%', left: '5%', animationDelay: '-1s' },
  '&:nth-of-type(2)': {
    '--glyph-rotate': '7deg',
    top: '22%',
    right: '7%',
    animationDelay: '-4s',
  },
  '&:nth-of-type(3)': {
    '--glyph-rotate': '-4deg',
    bottom: '16%',
    left: '9%',
    animationDelay: '-2s',
  },
  '&:nth-of-type(4)': {
    '--glyph-rotate': '10deg',
    right: '4%',
    bottom: '10%',
    animationDelay: '-5s',
  },
  '&:nth-of-type(5)': {
    '--glyph-rotate': '5deg',
    top: '46%',
    left: '2%',
    animationDelay: '-3s',
  },
  '&:nth-of-type(6)': {
    '--glyph-rotate': '-11deg',
    top: '8%',
    right: '31%',
    animationDelay: '-6s',
  },
  '&:nth-of-type(7)': {
    '--glyph-rotate': '8deg',
    bottom: '6%',
    right: '34%',
    animationDelay: '-2.5s',
  },
  '&:nth-of-type(8)': {
    '--glyph-rotate': '-5deg',
    top: '63%',
    right: '2%',
    animationDelay: '-4.5s',
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: 48,
    minHeight: 36,
    fontSize: '0.8rem',
    opacity: 0.72,
  },

  ...theme.applyStyles('dark', {
    borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.16)`,
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.24)`,
    backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.28)`,
  }),

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const HeroContainer = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(9),

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
  },
}));

export const HeroLayout = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  alignItems: 'center',
  gap: theme.spacing(7),

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'minmax(0, 1.05fr) minmax(390px, 0.95fr)',
    gap: theme.spacing(8),
  },

  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(12),
  },
}));

export const HeroContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  textAlign: 'center',

  '& > *': {
    opacity: 0,
    animation: `${heroItemEnter} 760ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },

  '& > :nth-child(1)': { animationDelay: '80ms' },
  '& > :nth-child(2)': { animationDelay: '160ms' },
  '& > :nth-child(3)': { animationDelay: '240ms' },
  '& > :nth-child(4)': { animationDelay: '320ms' },
  '& > :nth-child(5)': { animationDelay: '400ms' },

  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
    textAlign: 'start',
  },

  '@media (prefers-reduced-motion: reduce)': {
    '& > *': {
      opacity: 1,
      animation: 'none',
    },
  },
}));

export const HeroBadge = styled(Chip)(({ theme }) => ({
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.62)`,
  boxShadow: `0 10px 28px rgba(${theme.vars.palette.primary.mainChannel} / 0.09)`,
  backdropFilter: 'blur(12px)',
}));

export const HeroTitle = styled('h1')(({ theme }) => ({
  margin: 0,
  maxWidth: 760,
  fontSize: '2.35rem',
  fontWeight: 900,
  lineHeight: 1.25,
  letterSpacing: '-0.035em',
  textWrap: 'balance',

  [theme.breakpoints.up('sm')]: {
    fontSize: '3.35rem',
  },

  [theme.breakpoints.up('lg')]: {
    fontSize: '4.35rem',
  },
}));

export const HeroTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(120deg, var(--portfolio-palette-primary-main) 5%, #7C3AED 55%, var(--portfolio-palette-secondary-main) 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const HeroDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 650,
  color: theme.vars.palette.text.secondary,
  fontSize: '1rem',

  [theme.breakpoints.up('md')]: {
    fontSize: '1.12rem',
  },
}));

export const HeroActions = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
    flexDirection: 'row',
  },
}));

export const HeroActionButton = styled(MuiButton)(({ theme }) => ({
  width: '100%',
  borderRadius: 999,

  '&.MuiButton-contained': {
    boxShadow: `0 14px 30px rgba(${theme.vars.palette.primary.mainChannel} / 0.24)`,
  },

  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

export const HeroStatus = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  color: theme.vars.palette.text.secondary,
  fontSize: theme.typography.caption.fontSize,
}));

export const HeroStatusDot = styled('span')({
  width: 8,
  height: 8,
  flexShrink: 0,
  borderRadius: '50%',
  backgroundColor: '#12B76A',
  animation: `${statusPulse} 2.2s ease-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const CodeStage = styled('div')(({ theme }) => ({
  '--hero-enter-x': '0px',
  position: 'relative',
  width: '100%',
  maxWidth: 610,
  minHeight: 390,
  marginInline: 'auto',
  display: 'grid',
  placeItems: 'center',
  direction: 'ltr',
  animation: `${heroVisualEnter} 920ms cubic-bezier(0.16, 1, 0.3, 1) 220ms both`,

  [theme.breakpoints.up('md')]: {
    '--hero-enter-x': '-52px',
    minHeight: 480,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const CodeWindow = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: '100%',
  overflow: 'hidden',
  border: '1px solid rgb(255 255 255 / 86%)',
  borderRadius: 24,
  backgroundColor: 'rgb(255 255 255 / 70%)',
  boxShadow: '0 32px 80px rgb(16 24 40 / 16%), inset 0 1px 0 rgb(255 255 255 / 90%)',
  backdropFilter: 'blur(24px) saturate(165%)',
  WebkitBackdropFilter: 'blur(24px) saturate(165%)',
  transform: 'rotate(-1.4deg)',
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.complex,
  }),

  '&:hover': {
    transform: 'translateY(-5px) rotate(0deg)',
    boxShadow: '0 38px 90px rgb(16 24 40 / 20%), inset 0 1px 0 rgb(255 255 255 / 90%)',
  },

  ...theme.applyStyles('dark', {
    borderColor: 'rgb(255 255 255 / 10%)',
    backgroundColor: 'rgb(18 26 43 / 76%)',
    boxShadow: '0 34px 90px rgb(0 0 0 / 38%), inset 0 1px 0 rgb(255 255 255 / 7%)',
  }),

  '@media (prefers-reduced-motion: reduce)': {
    transform: 'none',
    transition: 'none',
  },
}));

export const CodeWindowHeader = styled('div')(({ theme }) => ({
  minHeight: 52,
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  paddingInline: theme.spacing(2),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.5)`,
}));

export const WindowDots = styled('span')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(0.75),
}));

export const WindowDot = styled('span')(({ theme }) => ({
  width: 10,
  height: 10,
  borderRadius: '50%',
  backgroundColor: theme.vars.palette.divider,

  '&:nth-of-type(1)': { backgroundColor: '#F04438' },
  '&:nth-of-type(2)': { backgroundColor: '#FDB022' },
  '&:nth-of-type(3)': { backgroundColor: '#12B76A' },
}));

export const WindowFileName = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.vars.palette.text.secondary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.74rem',
}));

export const CodeWindowBody = styled('div')(({ theme }) => ({
  minHeight: 286,
  padding: theme.spacing(2.5, 1.5),
  overflowX: 'auto',
  overscrollBehaviorInline: 'contain',
  scrollbarWidth: 'thin',
  color: theme.vars.palette.text.primary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: 'clamp(0.68rem, 1.6vw, 0.84rem)',
  lineHeight: 1.95,

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 2.5),
  },
}));

export const CodeLine = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '24px minmax(0, 1fr)',
  gap: theme.spacing(1.5),
  whiteSpace: 'nowrap',

  '&::before': {
    content: 'attr(data-line)',
    color: theme.vars.palette.text.disabled,
    userSelect: 'none',
  },
}));

export const CodeLineText = styled('span')({
  minWidth: 'max-content',
  whiteSpace: 'pre',
});

export const CodeKeyword = styled('span')({
  color: '#7C3AED',
  fontWeight: 700,
});

export const CodeProperty = styled('span')(({ theme }) => ({
  color: theme.vars.palette.primary.main,
}));

export const CodeString = styled('span')(({ theme }) => ({
  color: theme.vars.palette.secondary.main,
}));

export const CodeComment = styled('span')(({ theme }) => ({
  color: theme.vars.palette.text.secondary,
  fontStyle: 'italic',
}));

export const CodeTag = styled('span')({
  color: '#12A36D',
  fontWeight: 700,
});

export const CodeCursor = styled('span')(({ theme }) => ({
  display: 'inline-block',
  width: 7,
  height: '1.15em',
  marginLeft: theme.spacing(0.5),
  verticalAlign: 'text-bottom',
  backgroundColor: theme.vars.palette.primary.main,
  animation: `${blink} 1s steps(1) infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const CodeWindowFooter = styled('div')(({ theme }) => ({
  minHeight: 38,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: theme.spacing(2),
  paddingInline: theme.spacing(2),
  borderTop: `1px solid ${theme.vars.palette.divider}`,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.44)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.64rem',
}));

export const CodeOrbit = styled('span')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  width: 66,
  height: 66,
  insetInlineEnd: -10,
  top: 20,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgb(255 255 255 / 78%)',
  borderRadius: 20,
  color: '#FFFFFF',
  background: `linear-gradient(135deg, ${theme.vars.palette.primary.main}, #7C3AED)`,
  boxShadow: `0 18px 36px rgba(${theme.vars.palette.primary.mainChannel} / 0.3)`,
  animation: `${orbit} 5s ease-in-out infinite`,

  [theme.breakpoints.up('sm')]: {
    insetInlineEnd: -28,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const FloatingCodeTag = styled('span')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  insetInlineStart: -6,
  bottom: 18,
  padding: theme.spacing(1, 1.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 12,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.82)`,
  boxShadow: '0 14px 34px rgb(16 24 40 / 14%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.76rem',
  fontWeight: 800,
  backdropFilter: 'blur(14px)',
  animation: `${float} 6s ease-in-out -2s infinite`,

  [theme.breakpoints.up('sm')]: {
    insetInlineStart: -24,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));
