'use client';

import { Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';

type SkillAccent = 'primary' | 'secondary';

interface RevealProps {
  isVisible: boolean;
}

interface SkillPanelProps extends RevealProps {
  accent: SkillAccent;
  revealDelay: number;
}

interface SkillProgressProps extends RevealProps {
  accent: SkillAccent;
  targetValue: number;
  animationDelay: number;
}

const revealTransition = (isVisible: boolean, delay = 0) => ({
  opacity: isVisible ? 1 : 0,
  filter: isVisible ? 'blur(0)' : 'blur(8px)',
  transform: isVisible ? 'none' : 'translate3d(0, 34px, 0) scale(0.985)',
  transition: [
    `opacity 680ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    `transform 820ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    `filter 560ms ease-out ${delay}ms`,
  ].join(', '),
  willChange: isVisible ? 'auto' : 'opacity, transform, filter',

  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    filter: 'none',
    transform: 'none',
    transition: 'none',
  },
});

const getAccentColor = (accent: SkillAccent) =>
  accent === 'secondary'
    ? 'var(--portfolio-palette-secondary-main)'
    : 'var(--portfolio-palette-primary-main)';

export const SkillsRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(9),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.default,

  '&::before': {
    content: '"</>"',
    position: 'absolute',
    zIndex: -2,
    insetInlineStart: '-0.08em',
    top: '44%',
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.035)`,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: 'clamp(10rem, 28vw, 30rem)',
    fontWeight: 900,
    lineHeight: 0.7,
    direction: 'ltr',
    transform: 'translateY(-50%) rotate(-7deg)',
    pointerEvents: 'none',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 620,
    height: 620,
    insetInlineEnd: -330,
    bottom: -380,
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(${theme.vars.palette.secondary.mainChannel} / 0.12), transparent 68%)`,
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(13),
  },
}));

export const SkillsContainer = styled(Container)({
  position: 'relative',
});

export const SkillsHeader = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<RevealProps>(({ isVisible, theme }) => ({
  maxWidth: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(5),
  ...revealTransition(isVisible),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(6),
  },
}));

export const SkillsTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: '2rem',
  fontWeight: 900,
  lineHeight: 1.4,
  letterSpacing: '-0.025em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3rem',
  },
}));

export const SkillsTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 52%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const SkillsDescription = styled(Typography)(({ theme }) => ({
  // maxWidth: 680,
  marginTop: theme.spacing(1.5),
  color: theme.vars.palette.text.secondary,
}));

export const SkillsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  maxWidth: 'calc(100% - 200px)',
  margin: '0 auto',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2.5),

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(3),
  },
}));

export const SkillPanel = styled(SpotlightBorder, {
  shouldForwardProp: (prop) => prop !== 'accent' && prop !== 'isVisible' && prop !== 'revealDelay',
})<SkillPanelProps>(({ accent, isVisible, revealDelay, theme }) => {
  const accentColor = getAccentColor(accent);

  return {
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    padding: theme.spacing(2.5),
    border: `1px solid ${theme.vars.palette.divider}`,
    borderRadius: 26,
    background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.9), rgba(${theme.vars.palette.background.paperChannel} / 0.62))`,
    boxShadow: '0 24px 64px rgb(16 24 40 / 8%)',
    backdropFilter: 'blur(22px) saturate(145%)',
    WebkitBackdropFilter: 'blur(22px) saturate(145%)',
    ...revealTransition(isVisible, revealDelay),

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      width: 240,
      height: 240,
      insetInlineEnd: -100,
      top: -130,
      borderRadius: '50%',
      background: `radial-gradient(circle, color-mix(in srgb, ${accentColor} 18%, transparent), transparent 70%)`,
      pointerEvents: 'none',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      zIndex: -1,
      borderRadius: 'inherit',
      background:
        'linear-gradient(120deg, rgb(255 255 255 / 7%), transparent 28%, transparent 72%, rgb(255 255 255 / 4%))',
      pointerEvents: 'none',
    },

    ...theme.applyStyles('dark', {
      background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.82), rgba(${theme.vars.palette.background.defaultChannel} / 0.7))`,
      boxShadow: '0 24px 64px rgb(0 0 0 / 22%)',
    }),

    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3.5),
      borderRadius: 32,
    },
  };
});

export const SkillGroupHeader = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, auto) minmax(52px, 1fr)',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
}));

export const SkillGroupIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: SkillAccent }>(({ accent, theme }) => {
  const accentColor = getAccentColor(accent);

  return {
    width: 48,
    height: 48,
    display: 'grid',
    flexShrink: 0,
    placeItems: 'center',
    border: `1px solid color-mix(in srgb, ${accentColor} 26%, transparent)`,
    borderRadius: 15,
    color: accentColor,
    backgroundColor: `color-mix(in srgb, ${accentColor} 10%, transparent)`,

    '& svg': {
      fontSize: 25,
    },

    [theme.breakpoints.down('sm')]: {
      width: 44,
      height: 44,
    },
  };
});

export const SkillGroupIntro = styled('div')({
  minWidth: 0,
});

export const SkillGroupKicker = styled('span')(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(0.25),
  color: theme.vars.palette.text.secondary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  lineHeight: 1.4,
  direction: 'ltr',
  textAlign: 'right',
}));

export const SkillGroupTitle = styled('h3')(({ theme }) => ({
  margin: 0,
  fontSize: '1.2rem',
  fontWeight: 900,
  lineHeight: 1.5,
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('sm')]: {
    fontSize: '1.45rem',
  },
}));

export const SkillConnector = styled('span', {
  shouldForwardProp: (prop) => prop !== 'accent',
})<{ accent: SkillAccent }>(({ accent, theme }) => {
  const accentColor = getAccentColor(accent);

  return {
    position: 'relative',
    height: 1,
    marginInlineStart: theme.spacing(1),
    background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${accentColor} 45%, transparent))`,

    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: accentColor,
      boxShadow: `0 0 12px ${accentColor}`,
      transform: 'translateY(-50%)',
    },

    '&::before': {
      insetInlineStart: 0,
    },

    '&::after': {
      insetInlineEnd: 0,
    },
  };
});

export const SkillsList = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
}));

export const SkillRow = styled('div')({
  minWidth: 0,
});

export const SkillMeta = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(1),
}));

export const SkillName = styled('span')(({ theme }) => ({
  overflow: 'hidden',
  color: theme.vars.palette.text.primary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.8rem',
  fontWeight: 700,
  letterSpacing: '0.025em',
  lineHeight: 1.5,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('sm')]: {
    fontSize: '0.86rem',
  },
}));

export const SkillPercent = styled('span')(({ theme }) => ({
  minWidth: '4ch',
  flexShrink: 0,
  color: theme.vars.palette.text.secondary,
  fontSize: '0.86rem',
  fontWeight: 800,
  lineHeight: 1.5,
  textAlign: 'left',
  fontVariantNumeric: 'tabular-nums',
}));

export const SkillProgressTrack = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  height: 10,
  border: `1px solid rgba(${theme.vars.palette.text.primaryChannel} / 0.055)`,
  borderRadius: 999,
  backgroundColor: `rgba(${theme.vars.palette.text.primaryChannel} / 0.075)`,
  boxShadow: 'inset 0 1px 2px rgb(0 0 0 / 10%)',
}));

export const SkillProgressFill = styled('span', {
  shouldForwardProp: (prop) =>
    prop !== 'accent' &&
    prop !== 'isVisible' &&
    prop !== 'targetValue' &&
    prop !== 'animationDelay',
})<SkillProgressProps>(({ accent, animationDelay, isVisible, targetValue }) => ({
  position: 'absolute',
  inset: 0,
  display: 'block',
  borderRadius: 'inherit',
  background:
    accent === 'secondary'
      ? 'linear-gradient(90deg, #F97316, #EC4899 58%, #8B5CF6)'
      : 'linear-gradient(90deg, #0648FB, #5B7CFF 55%, #8B5CF6)',
  boxShadow:
    accent === 'secondary' ? '0 0 16px rgb(249 115 22 / 42%)' : '0 0 16px rgb(6 72 251 / 42%)',
  transform: `scaleX(${isVisible ? targetValue / 100 : 0})`,
  transformOrigin: 'right center',
  transition: `transform 1500ms cubic-bezier(0.16, 1, 0.3, 1) ${animationDelay}ms`,
  willChange: isVisible ? 'auto' : 'transform',

  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(100deg, transparent 0%, transparent 38%, rgb(255 255 255 / 55%) 50%, transparent 62%, transparent 100%)',
    backgroundSize: '220% 100%',
    animation: isVisible ? 'skill-shimmer 1800ms ease-out 500ms 1 both' : 'none',
  },

  '@keyframes skill-shimmer': {
    from: {
      backgroundPosition: '180% 0',
    },
    to: {
      backgroundPosition: '-60% 0',
    },
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',

    '&::after': {
      animation: 'none',
    },
  },
}));
