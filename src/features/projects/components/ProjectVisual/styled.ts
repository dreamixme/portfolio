'use client';

import Image from 'next/image';

import { keyframes, styled } from '@mui/material/styles';

import type { ProjectTone, ProjectVisualVariant } from '@/features/projects/types';

type VisualMode = 'card' | 'hero';

const visualFloat = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-1.5deg); }
  50% { transform: translate3d(0, -7px, 0) rotate(0deg); }
`;

const toneColor = (tone: ProjectTone) => {
  if (tone === 'secondary') return '#F97316';
  if (tone === 'purple') return '#7C3AED';
  if (tone === 'success') return '#12B76A';
  return '#0648FB';
};

export const ProjectVisualRoot = styled('div', {
  shouldForwardProp: (prop) => prop !== 'tone' && prop !== 'visualVariant' && prop !== 'mode',
})<{ tone: ProjectTone; visualVariant: ProjectVisualVariant; mode: VisualMode }>(({
  mode,
  tone,
  visualVariant,
  theme,
}) => {
  const accent = toneColor(tone);
  const variantPosition =
    visualVariant === 'mobile'
      ? '18% 18%'
      : visualVariant === 'commerce'
        ? '82% 24%'
        : visualVariant === 'platform'
          ? '72% 84%'
          : '22% 80%';

  return {
    '--project-accent': accent,
    position: 'relative',
    isolation: 'isolate',
    overflow: 'hidden',
    minHeight: mode === 'hero' ? 420 : 282,
    borderRadius: mode === 'hero' ? 30 : 22,
    background: `radial-gradient(circle at ${variantPosition}, ${accent}55, transparent 34%), linear-gradient(145deg, #071432 0%, #0C1D46 48%, #11152A 100%)`,
    boxShadow: mode === 'hero' ? `0 36px 100px ${accent}24` : `0 22px 54px ${accent}1f`,

    '&::before': {
      content: '""',
      position: 'absolute',
      zIndex: -1,
      inset: 0,
      backgroundImage:
        'linear-gradient(rgb(255 255 255 / 5%) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 5%) 1px, transparent 1px)',
      backgroundSize: mode === 'hero' ? '54px 54px' : '38px 38px',
      maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 84%)',
    },

    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      border: '1px solid rgb(255 255 255 / 12%)',
      borderRadius: 'inherit',
      pointerEvents: 'none',
    },

    [theme.breakpoints.down('sm')]: {
      minHeight: mode === 'hero' ? 300 : 238,
      borderRadius: 20,
    },
  };
});

export const CoverImage = styled(Image)({
  zIndex: -1,
  objectFit: 'cover',
});

export const BrowserMock = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '78%',
  height: '72%',
  insetInlineStart: '11%',
  top: '16%',
  overflow: 'hidden',
  border: '1px solid rgb(255 255 255 / 16%)',
  borderRadius: 18,
  backgroundColor: 'rgb(8 16 38 / 76%)',
  boxShadow: '0 28px 58px rgb(0 0 0 / 34%)',
  backdropFilter: 'blur(18px)',
  animation: `${visualFloat} 7s ease-in-out infinite`,

  '[data-visual-variant="mobile"] &': {
    width: '48%',
    height: '84%',
    insetInlineStart: '26%',
    top: '8%',
    borderRadius: 25,
  },

  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none',
  },

  [theme.breakpoints.down('sm')]: {
    width: '82%',
    insetInlineStart: '9%',
  },
}));

export const BrowserToolbar = styled('div')({
  height: 32,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
  paddingInline: 12,
  borderBottom: '1px solid rgb(255 255 255 / 10%)',
  backgroundColor: 'rgb(255 255 255 / 5%)',
});

export const BrowserDots = styled('div')({
  display: 'flex',
  gap: 5,

  '& span': {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: 'rgb(255 255 255 / 38%)',
  },

  '& span:first-of-type': {
    backgroundColor: 'var(--project-accent)',
  },
});

export const BrowserLine = styled('span')({
  width: '48%',
  height: 6,
  borderRadius: 999,
  backgroundColor: 'rgb(255 255 255 / 9%)',
});

export const BrowserContent = styled('div')({
  height: 'calc(100% - 32px)',
  display: 'grid',
  gridTemplateColumns: '25% 1fr',
});

export const BrowserSidebar = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  padding: 14,
  borderInlineEnd: '1px solid rgb(255 255 255 / 9%)',
  backgroundColor: 'rgb(255 255 255 / 3%)',

  '& span': {
    height: 7,
    borderRadius: 999,
    backgroundColor: 'rgb(255 255 255 / 12%)',
  },

  '& span:first-of-type': {
    backgroundColor: 'var(--project-accent)',
    opacity: 0.8,
  },
});

export const BrowserMain = styled('div')({
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 15,

  '& > span': {
    width: '56%',
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgb(255 255 255 / 16%)',
  },

  '& > span:last-of-type': {
    width: '78%',
    height: 34,
    marginTop: 'auto',
    background: 'linear-gradient(90deg, var(--project-accent), rgb(255 255 255 / 9%))',
    opacity: 0.5,
  },

  '& > div': {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 8,
  },
});

export const BrowserMetric = styled('span')({
  height: 54,
  border: '1px solid rgb(255 255 255 / 8%)',
  borderRadius: 10,
  backgroundColor: 'rgb(255 255 255 / 5%)',

  '&:nth-of-type(2)': {
    backgroundColor: 'color-mix(in srgb, var(--project-accent) 22%, transparent)',
  },
});

export const VisualBadge = styled('span')(({ theme }) => ({
  position: 'absolute',
  zIndex: 2,
  insetInlineStart: theme.spacing(2),
  bottom: theme.spacing(2),
  maxWidth: '70%',
  overflow: 'hidden',
  padding: theme.spacing(0.75, 1.2),
  border: '1px solid rgb(255 255 255 / 14%)',
  borderRadius: 10,
  color: 'rgb(255 255 255 / 74%)',
  backgroundColor: 'rgb(5 12 28 / 54%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: '0.66rem',
  fontWeight: 800,
  letterSpacing: '0.1em',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  backdropFilter: 'blur(12px)',
}));

export const CodeMark = styled('span')({
  position: 'absolute',
  insetInlineEnd: '4%',
  top: '-0.16em',
  color: 'rgb(255 255 255 / 7%)',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontSize: 'clamp(6rem, 18vw, 13rem)',
  fontWeight: 900,
  lineHeight: 1,
  direction: 'ltr',
  pointerEvents: 'none',
});
