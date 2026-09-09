'use client';

import { Container, Typography } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';

const orbitSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const monogramFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-2deg); }
  50% { transform: translate3d(0, -8px, 0) rotate(2deg); }
`;

export const AboutRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(10),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  backgroundColor: theme.vars.palette.background.paper,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'radial-gradient(circle, rgb(6 72 251 / 8%) 1px, transparent 1.5px), radial-gradient(circle, rgb(124 58 237 / 6%) 1px, transparent 1.5px)',
    backgroundPosition: '0 0, 18px 18px',
    backgroundSize: '36px 36px',
    maskImage: 'linear-gradient(90deg, transparent, black 20%, black 80%, transparent)',
  },

  '&::after': {
    content: '"</>"',
    position: 'absolute',
    zIndex: -1,
    insetInlineStart: '-0.1em',
    top: '48%',
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.035)`,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: 'clamp(11rem, 27vw, 27rem)',
    fontWeight: 900,
    lineHeight: 0.8,
    direction: 'ltr',
    transform: 'translateY(-50%) rotate(-8deg)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(14),
  },
}));

export const AboutContainer = styled(Container)({
  position: 'relative',
});

export const AboutHeader = styled('div')(({ theme }) => ({
  maxWidth: 810,
  marginBottom: theme.spacing(5),

  [theme.breakpoints.up('md')]: {
    marginBottom: theme.spacing(7),
  },
}));

export const AboutTitle = styled('h2')(({ theme }) => ({
  maxWidth: 780,
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

export const AboutTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 52%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const AboutDescription = styled(Typography)(({ theme }) => ({
  maxWidth: 680,
  color: theme.vars.palette.text.secondary,
}));

export const AboutGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  alignItems: 'stretch',
  gap: theme.spacing(2.5),

  '& > div': {
    height: '100%',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'minmax(0, 1.12fr) minmax(380px, 0.88fr)',
    gap: theme.spacing(3),
  },
}));

export const StoryCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  height: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 28,
  background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.defaultChannel} / 0.88), rgba(${theme.vars.palette.background.paperChannel} / 0.7))`,
  boxShadow: '0 26px 70px rgb(16 24 40 / 8%)',
  backdropFilter: 'blur(22px) saturate(145%)',
  WebkitBackdropFilter: 'blur(22px) saturate(145%)',

  '&::before': {
    content: '"#"',
    position: 'absolute',
    zIndex: -1,
    insetInlineEnd: -28,
    bottom: -88,
    color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.045)`,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '18rem',
    fontWeight: 900,
    lineHeight: 1,
    pointerEvents: 'none',
  },

  ...theme.applyStyles('dark', {
    background: `linear-gradient(145deg, rgba(${theme.vars.palette.background.defaultChannel} / 0.76), rgba(${theme.vars.palette.background.paperChannel} / 0.65))`,
    boxShadow: '0 26px 70px rgb(0 0 0 / 22%)',
  }),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    borderRadius: 34,
  },
}));

export const StoryFileBar = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  paddingBottom: theme.spacing(2.5),
  borderBottom: `1px dashed ${theme.vars.palette.divider}`,
}));

export const FileBadge = styled('span')(({ theme }) => ({
  minWidth: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.vars.palette.text.secondary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.72rem',
  fontWeight: 700,

  '& svg': {
    color: theme.vars.palette.primary.main,
    fontSize: 18,
  },
}));

export const FileStatus = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.75),
  color: theme.vars.palette.text.secondary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.62rem',
  fontWeight: 700,
  letterSpacing: '0.06em',
  direction: 'ltr',

  '& > span': {
    width: 7,
    height: 7,
    borderRadius: '50%',
    backgroundColor: theme.vars.palette.success.main,
    boxShadow: `0 0 12px rgba(${theme.vars.palette.success.mainChannel} / 0.48)`,
  },
}));

export const StoryQuote = styled('blockquote')(({ theme }) => ({
  position: 'relative',
  maxWidth: 760,
  margin: theme.spacing(4, 0, 3),
  paddingInlineStart: theme.spacing(2),
  color: theme.vars.palette.text.primary,
  fontSize: '1.65rem',
  fontWeight: 900,
  lineHeight: 1.65,
  textWrap: 'balance',

  '&::before': {
    content: '""',
    position: 'absolute',
    insetInlineStart: 0,
    top: 5,
    bottom: 5,
    width: 3,
    borderRadius: 999,
    background: 'linear-gradient(to bottom, #0648FB, #7C3AED, #F97316)',
    boxShadow: '0 0 18px rgb(124 58 237 / 28%)',
  },

  [theme.breakpoints.up('sm')]: {
    marginTop: theme.spacing(5),
    paddingInlineStart: theme.spacing(3),
    fontSize: '2rem',
  },
}));

export const StoryQuoteMark = styled('span')(({ theme }) => ({
  position: 'absolute',
  insetInlineEnd: 0,
  top: -56,
  color: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,
  fontFamily: 'Georgia, serif',
  fontSize: '8rem',
  fontWeight: 900,
  lineHeight: 1,
  pointerEvents: 'none',
}));

export const StoryParagraph = styled(Typography)(({ theme }) => ({
  maxWidth: 760,
  marginTop: theme.spacing(1.5),
  color: theme.vars.palette.text.secondary,
}));

export const StoryClosing = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
  paddingTop: theme.spacing(2.5),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  borderTop: `1px solid ${theme.vars.palette.divider}`,
}));

export const StorySignature = styled('span')(({ theme }) => ({
  color: theme.vars.palette.primary.main,
  fontFamily: 'Georgia, Times New Roman, serif',
  fontSize: '1.5rem',
  fontStyle: 'italic',
  lineHeight: 1,
  transform: 'rotate(-4deg)',
}));

export const StorySignatureLine = styled('span')(({ theme }) => ({
  paddingInlineStart: theme.spacing(1.5),
  borderInlineStart: `1px solid ${theme.vars.palette.divider}`,

  '& strong, & span': {
    display: 'block',
  },

  '& strong': {
    color: theme.vars.palette.text.primary,
    fontSize: '0.78rem',
    fontWeight: 900,
  },

  '& span': {
    marginTop: 2,
    color: theme.vars.palette.text.secondary,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.6rem',
    direction: 'ltr',
  },
}));

export const ProfileCard = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  height: '100%',
  boxSizing: 'border-box',
  padding: theme.spacing(2.5),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 28,
  color: '#FFFFFF',
  background:
    'radial-gradient(circle at 12% 8%, rgb(249 115 22 / 22%), transparent 30%), radial-gradient(circle at 88% 74%, rgb(124 58 237 / 38%), transparent 42%), linear-gradient(145deg, #071A54 0%, #063DBD 48%, #24104F 112%)',
  boxShadow: '0 28px 72px rgb(6 72 251 / 20%)',

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(255 255 255 / 4%) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 4%) 1px, transparent 1px)',
    backgroundSize: '42px 42px',
    maskImage: 'radial-gradient(circle at 50% 48%, black, transparent 72%)',
  },

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
    borderRadius: 34,
  },
}));

export const ProfileTop = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

export const ProfileKicker = styled('span')({
  color: 'rgb(255 255 255 / 62%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
});

export const ProfileCodeTag = styled('span')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(0.7, 1),
  border: '1px solid rgb(255 255 255 / 13%)',
  borderRadius: 10,
  color: 'rgb(255 255 255 / 62%)',
  backgroundColor: 'rgb(255 255 255 / 7%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.58rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}));

export const ProfileIdentity = styled('div')(({ theme }) => ({
  position: 'relative',
  minHeight: 300,
  display: 'grid',
  placeItems: 'center',
  marginBlock: theme.spacing(2),
}));

export const ProfileOrbit = styled('span')({
  position: 'absolute',
  width: 245,
  height: 245,
  border: '1px dashed rgb(255 255 255 / 18%)',
  borderRadius: '50%',
  animation: `${orbitSpin} 28s linear infinite`,

  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    borderRadius: '50%',
  },

  '&::before': {
    inset: 24,
    border: '1px solid rgb(255 255 255 / 8%)',
  },

  '&::after': {
    width: 10,
    height: 10,
    insetInlineStart: 16,
    top: 48,
    backgroundColor: '#FDBA74',
    boxShadow: '0 0 18px #F97316',
  },

  '& > span': {
    position: 'absolute',
    color: 'rgb(255 255 255 / 52%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.64rem',
    fontWeight: 700,
  },

  '& > span:nth-of-type(1)': {
    insetInlineEnd: -8,
    top: '46%',
  },

  '& > span:nth-of-type(2)': {
    insetInlineStart: 26,
    bottom: 18,
  },

  '& > span:nth-of-type(3)': {
    insetInlineStart: '48%',
    top: -8,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const ProfileMonogram = styled('span')({
  position: 'relative',
  width: 154,
  height: 154,
  display: 'grid',
  placeItems: 'center',
  border: '1px solid rgb(255 255 255 / 18%)',
  borderRadius: 44,
  color: '#FFFFFF',
  background:
    'linear-gradient(145deg, rgb(255 255 255 / 16%), rgb(255 255 255 / 6%)), linear-gradient(145deg, #0648FB, #7C3AED)',
  boxShadow: '0 28px 60px rgb(0 0 0 / 24%), inset 0 1px rgb(255 255 255 / 18%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '5.4rem',
  fontWeight: 900,
  lineHeight: 1,
  textShadow: '0 12px 26px rgb(0 0 0 / 24%)',
  animation: `${monogramFloat} 5s ease-in-out infinite`,

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
});

export const ProfileRole = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(0.5),
  display: 'grid',
  justifyItems: 'center',

  '& strong': {
    color: '#FFFFFF',
    fontSize: '0.86rem',
    fontWeight: 900,
  },

  '& span': {
    marginTop: 3,
    color: 'rgb(255 255 255 / 58%)',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.6rem',
    letterSpacing: '0.05em',
    direction: 'ltr',
  },
}));

export const ProfileFacts = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(1),

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },

  [theme.breakpoints.between('lg', 'xl')]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
}));

export const ProfileFact = styled('div')(({ theme }) => ({
  minWidth: 0,
  minHeight: 68,
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  border: '1px solid rgb(255 255 255 / 12%)',
  borderRadius: 16,
  backgroundColor: 'rgb(255 255 255 / 7%)',
  backdropFilter: 'blur(12px)',
}));

export const ProfileFactIcon = styled('span')({
  width: 38,
  height: 38,
  display: 'grid',
  flexShrink: 0,
  placeItems: 'center',
  borderRadius: 12,
  color: '#FDBA74',
  backgroundColor: 'rgb(249 115 22 / 12%)',

  '& svg': {
    fontSize: 20,
  },
});

export const ProfileFactText = styled('span')({
  minWidth: 0,

  '& > span': {
    display: 'block',
    color: 'rgb(255 255 255 / 52%)',
    fontSize: '0.62rem',
  },
});

export const ProfileFactValue = styled('strong')({
  display: 'block',
  overflow: 'hidden',
  marginTop: 2,
  color: '#FFFFFF',
  fontSize: '0.72rem',
  fontWeight: 800,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const PrinciplesPanel = styled(SpotlightBorder)(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  marginTop: theme.spacing(2.5),
  padding: theme.spacing(2.5),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 24,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.66)`,
  backdropFilter: 'blur(18px) saturate(145%)',
  WebkitBackdropFilter: 'blur(18px) saturate(145%)',

  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    display: 'grid',
    gridTemplateColumns: '250px minmax(0, 1fr)',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
}));

export const PrinciplesHeading = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2.5),

  '& > span': {
    display: 'block',
    marginBottom: theme.spacing(0.5),
    color: '#7C3AED',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    fontSize: '0.66rem',
    fontWeight: 800,
    letterSpacing: '0.1em',
    textAlign: 'right',
  },

  [theme.breakpoints.up('md')]: {
    marginBottom: 0,
    paddingInlineEnd: theme.spacing(3),
    borderInlineEnd: `1px solid ${theme.vars.palette.divider}`,
  },
}));

export const PrinciplesTitle = styled('h3')(({ theme }) => ({
  margin: 0,
  color: theme.vars.palette.text.primary,
  fontSize: '1.2rem',
  fontWeight: 900,
  lineHeight: 1.5,
}));

export const PrincipleList = styled('ul')(({ theme }) => ({
  margin: 0,
  padding: 0,
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr)',
  gap: theme.spacing(2),
  listStyle: 'none',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
}));

export const PrincipleItem = styled('li')(({ theme }) => ({
  minWidth: 0,
  display: 'flex',
  alignItems: 'flex-start',
  gap: theme.spacing(1.25),

  [theme.breakpoints.up('sm')]: {
    '&:not(:last-of-type)': {
      paddingInlineEnd: theme.spacing(2),
      borderInlineEnd: `1px dashed ${theme.vars.palette.divider}`,
    },
  },
}));

export const PrincipleIcon = styled('span')(({ theme }) => ({
  width: 42,
  height: 42,
  display: 'grid',
  flexShrink: 0,
  placeItems: 'center',
  border: `1px solid rgba(${theme.vars.palette.primary.mainChannel} / 0.18)`,
  borderRadius: 13,
  color: theme.vars.palette.primary.main,
  backgroundColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.08)`,

  '& svg': {
    fontSize: 21,
  },
}));

export const PrincipleContent = styled('div')({
  minWidth: 0,
});

export const PrincipleLabel = styled('strong')(({ theme }) => ({
  display: 'block',
  color: theme.vars.palette.text.primary,
  fontSize: '0.84rem',
  fontWeight: 900,
}));

export const PrincipleText = styled('span')(({ theme }) => ({
  display: 'block',
  marginTop: theme.spacing(0.4),
  color: theme.vars.palette.text.secondary,
  fontSize: '0.7rem',
  lineHeight: 1.7,
}));
