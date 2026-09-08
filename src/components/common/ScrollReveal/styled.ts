'use client';

import { styled } from '@mui/material/styles';

import type { RevealVariant } from './index';

interface RevealRootProps {
  revealVariant: RevealVariant;
  revealDelay: number;
  isVisible: boolean;
}

const hiddenTransforms: Record<RevealVariant, string> = {
  up: 'translate3d(0, 38px, 0)',
  start: 'translate3d(46px, 18px, 0)',
  end: 'translate3d(-46px, 18px, 0)',
  scale: 'translate3d(0, 24px, 0) scale(0.975)',
};

export const RevealRoot = styled('div', {
  shouldForwardProp: (prop) =>
    prop !== 'revealVariant' && prop !== 'revealDelay' && prop !== 'isVisible',
})<RevealRootProps>(({ isVisible, revealDelay, revealVariant, theme }) => ({
  width: '100%',
  opacity: isVisible ? 1 : 0,
  filter: isVisible ? 'blur(0)' : 'blur(8px)',
  transform: isVisible ? 'none' : hiddenTransforms[revealVariant],
  transition: [
    `opacity 680ms ${theme.transitions.easing.easeOut}`,
    `transform 820ms cubic-bezier(0.16, 1, 0.3, 1)`,
    `filter 560ms ${theme.transitions.easing.easeOut}`,
  ].join(', '),
  transitionDelay: `${revealDelay}ms`,
  willChange: isVisible ? 'auto' : 'opacity, transform, filter',

  [theme.breakpoints.down('sm')]: {
    transform: isVisible ? 'none' : 'translate3d(0, 28px, 0)',
  },

  '@media (prefers-reduced-motion: reduce)': {
    opacity: 1,
    filter: 'none',
    transform: 'none',
    transition: 'none',
  },
}));
