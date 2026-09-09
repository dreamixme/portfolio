'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { useMediaQuery } from '@mui/material';

import { RevealRoot } from './styled';

export type RevealVariant = 'up' | 'start' | 'end' | 'scale';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
}

export function ScrollReveal({
  children,
  variant = 'up',
  delay = 0,
  threshold = 0.16,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element || reduceMotion) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const animationFrame = requestAnimationFrame(() => setIsVisible(true));

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [reduceMotion, threshold]);

  return (
    <RevealRoot
      ref={elementRef}
      revealVariant={variant}
      revealDelay={delay}
      isVisible={isVisible || reduceMotion}
      data-reveal-state={isVisible || reduceMotion ? 'visible' : 'hidden'}
    >
      {children}
    </RevealRoot>
  );
}
