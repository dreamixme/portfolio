'use client';

import {
  type ElementType,
  type HTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
} from 'react';

import { SpotlightBorderEffect, SpotlightBorderRoot, type SpotlightTone } from './styled';

export interface SpotlightBorderProps extends HTMLAttributes<HTMLElement> {
  asElement?: ElementType;
  tone?: SpotlightTone;
}

export function SpotlightBorder({
  children,
  asElement = 'div',
  onPointerCancel,
  onPointerEnter,
  onPointerLeave,
  onPointerMove,
  tone = 'primary',
  ...props
}: SpotlightBorderProps) {
  const rootRef = useRef<HTMLElement>(null);
  const animationFrameRef = useRef(0);
  const pointerPositionRef = useRef({ x: 0, y: 0 });

  useEffect(
    () => () => {
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    },
    [],
  );

  const updatePointerPosition = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerPositionRef.current = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    if (animationFrameRef.current) {
      return;
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      const root = rootRef.current;

      if (root) {
        root.style.setProperty('--spotlight-border-x', `${pointerPositionRef.current.x}px`);
        root.style.setProperty('--spotlight-border-y', `${pointerPositionRef.current.y}px`);
      }

      animationFrameRef.current = 0;
    });
  };

  const handlePointerEnter = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerEnter?.(event);

    if (event.pointerType === 'touch') {
      return;
    }

    event.currentTarget.style.setProperty('--spotlight-border-opacity', '1');
    updatePointerPosition(event);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerMove?.(event);
    updatePointerPosition(event);
  };

  const hideSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty('--spotlight-border-opacity', '0');
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerLeave?.(event);
    hideSpotlight(event);
  };

  const handlePointerCancel = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerCancel?.(event);
    hideSpotlight(event);
  };

  return (
    <SpotlightBorderRoot
      asElement={asElement}
      data-spotlight-element={typeof asElement === 'string' ? asElement : 'custom'}
      ref={rootRef}
      tone={tone}
      onPointerCancel={handlePointerCancel}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      {...props}
    >
      {children}
      <SpotlightBorderEffect data-spotlight-border="true" aria-hidden="true" />
    </SpotlightBorderRoot>
  );
}
