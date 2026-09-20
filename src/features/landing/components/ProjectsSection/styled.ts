'use client';

import { Container } from '@mui/material';
import { keyframes, styled } from '@mui/material/styles';

import { SpotlightBorder } from '@/components/common/SpotlightBorder';
import AppLink from '@/components/common/AppLink';
import MuiButton from '@/components/Shared/MuiButton';
import MuiIconButton from '@/components/Shared/MuiIconButton';

const railEnter = keyframes`
  from { opacity: 0; transform: translate3d(36px, 0, 0); }
  to { opacity: 1; transform: translate3d(0, 0, 0); }
`;

export const ProjectsRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  isolation: 'isolate',
  overflow: 'hidden',
  paddingTop: theme.spacing(9),
  paddingBottom: theme.spacing(10),
  borderBottom: `1px solid ${theme.vars.palette.divider}`,
  background: `linear-gradient(180deg, rgba(${theme.vars.palette.background.paperChannel} / 0.68), rgba(${theme.vars.palette.background.defaultChannel} / 0.94))`,

  '&::before': {
    content: '""',
    position: 'absolute',
    zIndex: -2,
    inset: 0,
    backgroundImage:
      'linear-gradient(rgb(6 72 251 / 2.4%) 1px, transparent 1px), linear-gradient(90deg, rgb(6 72 251 / 2.4%) 1px, transparent 1px)',
    backgroundSize: '56px 56px',
    maskImage: 'linear-gradient(to bottom, transparent, black 16%, black 84%, transparent)',
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    zIndex: -1,
    width: 820,
    height: 820,
    insetInlineEnd: -480,
    top: 120,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgb(6 72 251 / 14%), rgb(124 58 237 / 6%) 42%, transparent 70%)',
    pointerEvents: 'none',
  },

  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(13),
    paddingBottom: theme.spacing(14),
  },
}));

export const ExperienceAnchor = styled('span')({
  position: 'absolute',
  top: 0,
});

export const ProjectsContainer = styled(Container)({
  position: 'relative',
});

export const ProjectsHeader = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(4),
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(2),

  [theme.breakpoints.up('md')]: {
    gap: theme.spacing(1),
  },
}));

export const ProjectsHeaderContent = styled('div')({
  minWidth: 0,
  textAlign: 'center',
});

export const ProjectsTitle = styled('h2')(({ theme }) => ({
  maxWidth: 800,
  marginTop: theme.spacing(2),
  marginBottom: 0,
  fontSize: '2.1rem',
  fontWeight: 900,
  lineHeight: 1.42,
  letterSpacing: '-0.035em',
  textWrap: 'balance',

  [theme.breakpoints.up('md')]: {
    fontSize: '3.2rem',
  },
}));

export const ProjectsTitleAccent = styled('span')({
  color: 'transparent',
  background:
    'linear-gradient(115deg, var(--portfolio-palette-primary-main), #7C3AED 54%, var(--portfolio-palette-secondary-main))',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
});

export const ProjectsDescription = styled('p')(({ theme }) => ({
  margin: 0,
  paddingInlineStart: theme.spacing(3),
  color: theme.vars.palette.text.secondary,
  fontSize: '0.95rem',
  maxWidth: 640,
  lineHeight: 1.9,
}));

export const CategorySwitcher = styled('div')(({ theme }) => ({
  width: 'fit-content',
  maxWidth: '100%',
  marginBottom: theme.spacing(4),
  display: 'flex',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0.6),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 99,
  margin: '0 auto',
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.7)`,
  boxShadow: '0 14px 34px rgb(16 24 40 / 6%)',
  backdropFilter: 'blur(18px)',

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

export const CategoryButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'isActive',
})<{ isActive: boolean }>(({ isActive, theme }) => ({
  minWidth: 190,
  gap: theme.spacing(0.75),
  borderRadius: 99,
  color: isActive ? '#FFFFFF' : theme.vars.palette.text.secondary,
  background: isActive
    ? 'linear-gradient(115deg, var(--portfolio-palette-primary-main), #6D5DFB)'
    : 'transparent',
  boxShadow: isActive ? '0 12px 26px rgb(6 72 251 / 22%)' : 'none',

  '&:hover': {
    color: isActive ? '#FFFFFF' : theme.vars.palette.text.primary,
    background: isActive
      ? 'linear-gradient(115deg, var(--portfolio-palette-primary-dark), #5B4AE8)'
      : theme.vars.palette.action.hover,
  },

  '& small': {
    minWidth: 25,
    height: 25,
    display: 'grid',
    placeItems: 'center',
    border: '1px solid currentColor',
    borderRadius: 999,
    fontSize: '0.68rem',
    lineHeight: 1,
    opacity: isActive ? 0.84 : 0.55,
  },

  [theme.breakpoints.down('sm')]: {
    minWidth: 0,
    flex: 1,
    paddingInline: theme.spacing(1),
    fontSize: '0.78rem',

    '& .MuiButton-startIcon': {
      display: 'none',
    },
  },
}));

export const ProjectRail = styled('ul')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2.5),
  marginBlock: 0,
  marginTop: theme.spacing(4),
  marginInline: 'calc((100vw - 100%) / -2)',
  paddingInline: 'calc((100vw - 100%) / 2)',
  paddingBottom: theme.spacing(2),
  overflowX: 'auto',
  overflowY: 'hidden',
  overscrollBehaviorInline: 'contain',
  scrollBehavior: 'smooth',
  scrollSnapType: 'inline mandatory',
  scrollPaddingInline: 'max(24px, calc((100vw - 1536px) / 2 + 24px))',
  scrollbarWidth: 'none',
  WebkitOverflowScrolling: 'touch',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
}));

export const ProjectRailItem = styled('li')(({ theme }) => ({
  width: 'min(510px, 78vw)',
  minWidth: 'min(510px, 78vw)',
  listStyle: 'none',
  scrollSnapAlign: 'center',
  animation: `${railEnter} 520ms cubic-bezier(0.16, 1, 0.3, 1) both`,

  '&:nth-of-type(2)': { animationDelay: '60ms' },
  '&:nth-of-type(3)': { animationDelay: '120ms' },

  [theme.breakpoints.down('sm')]: {
    width: '86vw',
    minWidth: '86vw',
    maxWidth: 360,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },
}));

export const ProjectCard = styled(SpotlightBorder)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 28,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.86)`,
  boxShadow: '0 26px 70px rgb(16 24 40 / 9%)',
  backdropFilter: 'blur(20px) saturate(145%)',
  WebkitBackdropFilter: 'blur(20px) saturate(145%)',
  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color'], {
    duration: 320,
  }),

  '&:hover': {
    transform: 'translateY(-7px)',
    borderColor: `rgba(${theme.vars.palette.primary.mainChannel} / 0.24)`,
    boxShadow: '0 34px 86px rgb(16 24 40 / 15%)',
  },

  ...theme.applyStyles('dark', {
    backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.78)`,
    boxShadow: '0 26px 70px rgb(0 0 0 / 28%)',
  }),

  [theme.breakpoints.down('sm')]: {
    borderRadius: 24,
  },
}));

export const ProjectCardLink = styled(AppLink)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  color: 'inherit',
});

export const ProjectCardBody = styled('div')(({ theme }) => ({
  padding: theme.spacing(2.5, 2.75, 2),

  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3, 3.25, 2.5),
  },
}));

export const ProjectCardHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
}));

export const ProjectCategory = styled('span')(({ theme }) => ({
  color: theme.vars.palette.primary.main,
  fontSize: '0.72rem',
  fontWeight: 800,
}));

export const ProjectIndex = styled('span')(({ theme }) => ({
  color: theme.vars.palette.text.disabled,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.7rem',
  fontWeight: 800,
  letterSpacing: '0.08em',
}));

export const ProjectTitle = styled('h3')(({ theme }) => ({
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(0.8),
  fontSize: '1.7rem',
  fontWeight: 900,
  lineHeight: 1.45,
  letterSpacing: '-0.02em',
}));

export const ProjectSummary = styled('p')(({ theme }) => ({
  minHeight: '3.55em',
  margin: 0,
  display: '-webkit-box',
  overflow: 'hidden',
  color: theme.vars.palette.text.secondary,
  fontSize: '0.88rem',
  lineHeight: 1.78,
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
}));

export const ProjectStack = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(0.7),
}));

export const ProjectStackItem = styled('span')(({ theme }) => ({
  padding: theme.spacing(0.55, 0.9),
  border: `1px solid ${theme.vars.palette.divider}`,
  borderRadius: 8,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.62)`,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.63rem',
  fontWeight: 700,
}));

export const ProjectCardFooter = styled('div')(({ theme }) => ({
  minHeight: 62,
  marginTop: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(1.5, 2.75),
  borderTop: `1px solid ${theme.vars.palette.divider}`,
  color: theme.vars.palette.text.secondary,
  backgroundColor: `rgba(${theme.vars.palette.background.defaultChannel} / 0.44)`,

  '& > span': {
    display: 'inline-flex',
    alignItems: 'center',
    gap: theme.spacing(0.6),
    color: theme.vars.palette.text.primary,
    fontSize: '0.77rem',
    fontWeight: 800,
  },

  '& > span svg': {
    color: theme.vars.palette.primary.main,
    fontSize: 18,
    transition: 'transform 220ms ease',
  },

  'a:hover & > span svg': {
    transform: 'translate(-3px, -3px)',
  },
}));

export const ProjectDomain = styled('small')(({ theme }) => ({
  minWidth: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.6),
  overflow: 'hidden',
  color: theme.vars.palette.text.disabled,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.63rem',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  '& svg': {
    flexShrink: 0,
    fontSize: 15,
  },
}));

export const RailMeta = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'grid',
  gridTemplateColumns: 'minmax(180px, 1fr) minmax(180px, 360px) auto',
  alignItems: 'center',
  gap: theme.spacing(2.5),

  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr auto',
  },
}));

export const RailHint = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(0.8),
  color: theme.vars.palette.text.secondary,
  fontSize: '0.76rem',

  '& svg': {
    color: theme.vars.palette.secondary.main,
    fontSize: 20,
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const RailProgress = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
}));

export const RailProgressValue = styled('span')(({ theme }) => ({
  display: 'inline-flex',
  gap: 5,
  color: theme.vars.palette.text.primary,
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.7rem',
  fontWeight: 800,

  '& span': {
    color: theme.vars.palette.text.disabled,
  },
}));

export const RailProgressBar = styled('span', {
  shouldForwardProp: (prop) => prop !== 'progress',
})<{ progress: number }>(({ progress, theme }) => ({
  height: 3,
  flex: 1,
  overflow: 'hidden',
  borderRadius: 999,
  backgroundColor: theme.vars.palette.divider,

  '& span': {
    width: '100%',
    height: '100%',
    display: 'block',
    borderRadius: 'inherit',
    background: 'linear-gradient(90deg, #0648FB, #7C3AED, #F97316)',
    transform: `scaleX(${progress})`,
    transformOrigin: 'left center',
    transition: 'transform 360ms cubic-bezier(0.16, 1, 0.3, 1)',
  },
}));

export const RailNavigation = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

export const RailRoundButton = styled(MuiIconButton)(({ theme }) => ({
  width: 46,
  height: 46,
  border: `1px solid ${theme.vars.palette.divider}`,
  color: theme.vars.palette.text.primary,
  backgroundColor: `rgba(${theme.vars.palette.background.paperChannel} / 0.76)`,

  '&:hover': {
    color: '#FFFFFF',
    borderColor: theme.vars.palette.primary.main,
    backgroundColor: theme.vars.palette.primary.main,
  },
}));
