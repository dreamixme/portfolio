'use client';

import { createElement, type ElementType, forwardRef, type HTMLAttributes } from 'react';

import { styled } from '@mui/material/styles';

export type SpotlightTone = 'primary' | 'secondary' | 'success' | 'purple';

interface SpotlightRootElementProps extends HTMLAttributes<HTMLElement> {
  asElement: ElementType;
}

const SpotlightRootElement = forwardRef<HTMLElement, SpotlightRootElementProps>(
  function SpotlightRootElement({ asElement, ...props }, ref) {
    return createElement(asElement, { ...props, ref });
  },
);

export const SpotlightBorderRoot = styled(SpotlightRootElement, {
  shouldForwardProp: (prop) => prop !== 'tone',
})<{ tone: SpotlightTone }>(({ tone, theme }) => {
  const toneChannel =
    tone === 'secondary'
      ? theme.vars.palette.secondary.mainChannel
      : tone === 'success'
        ? theme.vars.palette.success.mainChannel
        : tone === 'purple'
          ? '139 92 246'
          : theme.vars.palette.primary.mainChannel;

  return {
    '--spotlight-border-channel': toneChannel,
    '--spotlight-border-opacity': 0,
    '--spotlight-border-size': '220px',
    '--spotlight-border-x': '50%',
    '--spotlight-border-y': '50%',
    position: 'relative',
    isolation: 'isolate',

    '&:focus-within > [data-spotlight-border="true"]': {
      opacity: 0.95,
    },
  };
});

export const SpotlightBorderEffect = styled('span')({
  position: 'absolute',
  zIndex: 20,
  inset: 0,
  boxSizing: 'border-box',
  display: 'block',
  padding: '1.5px',
  borderRadius: 'inherit',
  opacity: 'var(--spotlight-border-opacity)',
  background:
    'radial-gradient(var(--spotlight-border-size) circle at var(--spotlight-border-x) var(--spotlight-border-y), rgba(var(--spotlight-border-channel) / 1) 0%, rgba(var(--spotlight-border-channel) / 0.72) 34%, transparent 72%)',
  filter: 'drop-shadow(0 0 7px rgba(var(--spotlight-border-channel) / 0.34))',
  pointerEvents: 'none',
  transition: 'opacity 180ms ease-out',
  WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  WebkitMaskComposite: 'xor',
  mask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
  maskComposite: 'exclude',

  '@media (hover: none), (pointer: coarse)': {
    display: 'none',
  },

  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
});
