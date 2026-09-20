'use client';

import { Container, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';

const orbit = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const scoreGlow = keyframes`
  0%, 100% { opacity: 0.42; transform: scale(0.92); }
  50% { opacity: 0.72; transform: scale(1.04); }
`;

export const EducationRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(10),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.default,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(124 58 237 / 2.5%) 1px, transparent 1px), linear-gradient(90deg, rgb(124 58 237 / 2.5%) 1px, transparent 1px)',
    backgroundSize: '58px 58px',
    maskImage: 'radial-gradient(circle at 78% 52%, black, transparent 70%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 680,
    height: 680,
    insetInlineEnd: -360,
    top: -340,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgb(124 58 237 / 13%), rgb(6 72 251 / 5%) 48%, transparent 70%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(14),
  },
}));

export const EducationContainer = styled(Container)({
  position: 'relative',
});

export const EducationHeader = styled('div')(({ theme }) => ({
  maxWidth: 800,
  marginBottom: theme.spacing(5),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(7),
  },
}));

export const EducationEyebrow = styled('span')(({ theme }) => ({
  minHeight: 34,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  paddingInline: theme.spacing(1.5),
  border: '1px solid rgb(124 58 237 / 20%)',
  borderRadius: 999,
  color: '#7C3AED',
  backgroundColor: 'rgb(124 58 237 / 7%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.72rem',
  fontWeight: 800,
  letterSpacing: '0.04em',
  direction: 'ltr',

  '&::before': {
    content: '"07"',
    color: theme.vars.palette.secondary.main,
  },
}));

export const EducationTitle = styled('h2')(({ theme }) => ({
  maxWidth: 760,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(1.5),
  fontSize: '2.1rem',
  fontWeight: 900,
  lineHeight: 1.4,
  letterSpacing: '-0.03em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
}));

export const EducationTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 52%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const DegreeDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 700,
  color: theme.vars.palette.text.secondary,
}));

export const AcademicCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 28,
  background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.96), rgba(${theme.vars.palette.background.paperChannel} / 0.72))`,
  boxShadow: '0 30px 80px rgb(16 24 40 / 10%)',
  backdropFilter: 'blur(24px) saturate(145%)',
  WebkitBackdropFilter: 'blur(24px) saturate(145%)',

  '&::before': {
    content: '"IT"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: '-0.08em',
    bottom: '-0.22em',
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.035)`,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: 'clamp(11rem, 28vw, 24rem)',
    fontWeight: 900,
    lineHeight: 0.75,
    direction: 'ltr',
    pointerEvents: 'none',
  },

  ...theme.applyStyles('dark', {
    background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.paperChannel} / 0.88), rgba(${theme.vars.palette.background.defaultChannel} / 0.76))`,
    boxShadow: '0 30px 80px rgb(0 0 0 / 28%)',
  }),

  [theme.breakpoints.up('sm')]: {
    borderRadius: 34,
  },
}));

export const AcademicCardTop = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  minHeight: 86,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 2.5),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.42)`,

  [theme.breakpoints.up('sm')]: {
    paddingInline: theme.spacing(4),
  },
}));

export const InstitutionIdentity = styled('div')(({ theme }) => ({
  minWidth: 0,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const InstitutionIcon = styled('span')(({ theme }) => ({
  width: 48,
  height: 48,
  display: 'grid',
  flexShrink: 0,
  placeItems: 'center',
  border: '1px solid rgb(124 58 237 / 24%)',
  borderRadius: 15,
  color: '#8B5CF6',
  background: `linear-gradient(145deg, rgb(124 58 237 / 14%), rgba(${theme.vars.palette.primary.mainChannel} / 8%))`,

  '& svg': {
    fontSize: 25,
  },
}));

export const InstitutionLabel = styled('span')(({ theme }) => ({
  display: 'block',
  marginBottom: 2,
  color: theme.vars.palette.text.secondary,
  fontSize: '0.7rem',
}));

export const InstitutionName = styled('strong')(({ theme }) => ({
  display: 'block',
  overflow: 'hidden',
  color: theme.vars.palette.text.primary,
  fontSize: '1rem',
  fontWeight: 900,
  lineHeight: 1.5,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  [theme.breakpoints.up('sm')]: {
    fontSize: '1.15rem',
  },
}));

export const AcademicSerial = styled('span')(({ theme }) => ({
  flexShrink: 0,
  padding: theme.spacing(0.8, 1.2),
  border: `1px dashed rgba(${theme.vars.palette.text.primaryChannel} / 0.18)`,
  borderRadius: 10,
  color: theme.vars.palette.text.secondary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
}));

export const AcademicCardBody = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',

  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'minmax(0, 1fr) 330px',
  },
}));

export const DegreeContent = styled('div')(({ theme }) => ({
  minWidth: 0,
  padding: theme.spacing(3, 2.5),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(5),
  },
}));

export const DegreeKicker = styled('span')(({ theme }) => ({
  display: 'block',
  marginBottom: theme.spacing(1),
  color: theme.vars.palette.primary.main,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.7rem',
  fontWeight: 800,
  letterSpacing: '0.14em',
  textAlign: 'right',
}));

export const DegreeTitle = styled('h3')(({ theme }) => ({
  maxWidth: 640,
  margin: 0,
  fontSize: '1.9rem',
  fontWeight: 900,
  lineHeight: 1.45,
  letterSpacing: '-0.02em',
  textWrap: 'balance',

  '& span': {
    color: '#7C3AED',
  },

  [theme.breakpoints.up('sm')]: {
    fontSize: '2.65rem',
  },
}));

export const DegreeMeta = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2.5),
  marginBottom: theme.spacing(3),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1),
}));

export const DegreeMetaItem = styled('span')(({ theme }) => ({
  minHeight: 38,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  paddingInline: theme.spacing(1.25),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 999,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.58)`,
  fontSize: theme.typography.caption.fontSize,

  '& svg': {
    color: theme.vars.palette.secondary.main,
    fontSize: 18,
  },
}));

export const ScorePanel = styled('div')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  minHeight: 340,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(4),
  borderTop: `1px solid ${theme.vars.palette.divider}`,
  background:
    'radial-gradient(circle at 50% 42%, rgb(124 58 237 / 16%), transparent 48%), linear-gradient(145deg, rgb(6 72 251 / 6%), rgb(124 58 237 / 8%))',

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 260,
    height: 260,
    border: '1px dashed rgb(124 58 237 / 20%)',
    borderRadius: '50%',
    animation: `${orbit} 26s linear infinite`,
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 180,
    height: 180,
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgb(124 58 237 / 20%), transparent 72%)',
    filter: 'blur(12px)',
    animation: `${scoreGlow} 4s ease-in-out infinite`,
  },

  [theme.breakpoints.up('md')]: {
    minHeight: '100%',
    borderTop: 0,
    borderInlineStart: `1px solid ${theme.vars.palette.divider}`,
  },

  '@media (prefers-reduced-motion: reduce)': {
    '&::before, &::after': {
      animation: 'none',
    },
  },
}));

export const ScoreGauge = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 190,
  height: 190,
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  background:
    'conic-gradient(from 215deg, #7C3AED 0 55%, var(--portfolio-palette-primary-main) 55% 81.85%, rgba(124 58 237 / 12%) 81.85% 100%)',
  boxShadow: '0 24px 60px rgb(124 58 237 / 22%)',

  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 10,
    border: `1px solid ${theme.vars.palette.divider}`,
    borderRadius: '50%',
    backgroundColor: theme.vars.palette.background.paper,
    boxShadow: 'inset 0 0 34px rgb(124 58 237 / 10%)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    top: 8,
    width: 10,
    height: 10,
    border: '2px solid white',
    borderRadius: '50%',
    backgroundColor: theme.vars.palette.secondary.main,
    boxShadow: `0 0 18px ${theme.vars.palette.secondary.main}`,
  },
}));

export const ScoreGaugeCore = styled('span')({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
});

export const ScoreValue = styled('strong')(({ theme }) => ({
  color: theme.vars.palette.text.primary,
  fontSize: '2.7rem',
  fontWeight: 900,
  lineHeight: 1,
  letterSpacing: '-0.06em',
  fontVariantNumeric: 'tabular-nums',
}));

export const ScoreLabel = styled('span')(({ theme }) => ({
  marginTop: theme.spacing(0.75),
  color: theme.vars.palette.text.secondary,
  fontSize: '0.72rem',
  fontWeight: 700,
}));

export const ScoreCaption = styled('strong')(({ theme }) => ({
  color: theme.vars.palette.text.primary,
  fontSize: '0.9rem',
  fontWeight: 800,
}));

export const EducationTimeline = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  padding: theme.spacing(2.5),
  borderTop: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.34)`,

  '& ol': {
    position: 'relative',
    margin: 0,
    padding: 0,
    display: 'grid',
    gap: theme.spacing(2),
    listStyle: 'none',

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      insetInlineStart: 7,
      top: 10,
      bottom: 10,
      width: 2,
      borderRadius: 999,
      background:
        'linear-gradient(to bottom, var(--portfolio-palette-primary-main), #7C3AED, var(--portfolio-palette-secondary-main))',
      opacity: 0.5,
    },
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3.5, 4),

    '& ol': {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: theme.spacing(3),

      '&::before': {
        insetInlineStart: '8%',
        insetInlineEnd: '8%',
        top: 7,
        bottom: 'auto',
        width: 'auto',
        height: 2,
        background:
          'linear-gradient(90deg, var(--portfolio-palette-secondary-main), #7C3AED, var(--portfolio-palette-primary-main))',
      },
    },
  },
}));

export const EducationTimelineHeader = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),

  '& > span': {
    color: theme.vars.palette.text.secondary,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.68rem',
    letterSpacing: '0.08em',
  },
}));

export const EducationTimelineTitle = styled('h4')(({ theme }) => ({
  margin: 0,
  color: theme.vars.palette.text.primary,
  fontSize: '0.9rem',
  fontWeight: 900,
}));

export const TimelineItem = styled('li')(({ theme }) => ({
  minWidth: 0,
  display: 'grid',
  gridTemplateColumns: '16px minmax(0, 1fr)',
  alignItems: 'start',
  gap: theme.spacing(1.25),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr',
    justifyItems: 'center',
    textAlign: 'center',
  },
}));

export const TimelineDot = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isHighlight',
})<{ isHighlight: boolean }>(({ isHighlight, theme }) => ({
  position: 'relative',
  width: 16,
  height: 16,
  flexShrink: 0,
  border: `4px solid ${theme.vars.palette.background.paper}`,
  borderRadius: '50%',
  backgroundColor: isHighlight ? '#7C3AED' : theme.vars.palette.primary.main,
  boxShadow: isHighlight
    ? '0 0 0 3px rgb(124 58 237 / 18%), 0 0 18px rgb(124 58 237 / 38%)'
    : `0 0 0 3px rgba(${theme.vars.palette.primary.mainChannel} / 0.14)`,
}));

export const TimelineContent = styled('div')({
  minWidth: 0,
});

export const TimelineYear = styled('strong')(({ theme }) => ({
  display: 'block',
  marginBottom: 3,
  color: theme.vars.palette.text.primary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.8rem',
  fontWeight: 900,
}));

export const TimelineLabel = styled('span')(({ theme }) => ({
  display: 'block',
  color: theme.vars.palette.text.secondary,
  fontSize: '0.74rem',
  lineHeight: 1.7,
}));
