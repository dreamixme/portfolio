'use client';

import { Fragment, type ReactNode, useEffect, useState } from 'react';

import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { useMediaQuery } from '@mui/material';

import {
  CodeBackdrop,
  CodeComment,
  CodeCursor,
  CodeGlyph,
  CodeKeyword,
  CodeLine,
  CodeLineText,
  CodeOrbit,
  CodeProperty,
  CodeStage,
  CodeString,
  CodeTag,
  CodeWindow,
  CodeWindowBody,
  CodeWindowFooter,
  CodeWindowHeader,
  FloatingCodeTag,
  HeroActionButton,
  HeroActions,
  HeroBadge,
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroLayout,
  HeroRoot,
  HeroStatus,
  HeroStatusDot,
  HeroTitle,
  HeroTitleAccent,
  WindowDot,
  WindowDots,
  WindowFileName,
} from './styled';

const backgroundGlyphs = ['</>', '{ }', 'const', '<P />', '=>', '01', 'npm_', '[ ]'];

type CodeTone = 'plain' | 'keyword' | 'property' | 'string' | 'comment' | 'tag';

interface CodeToken {
  text: string;
  tone: CodeTone;
}

const codeLines: CodeToken[][] = [
  [
    { text: 'const', tone: 'keyword' },
    { text: ' developer = {', tone: 'plain' },
  ],
  [
    { text: '  name:', tone: 'property' },
    { text: " 'Peyman Hosseini',", tone: 'string' },
  ],
  [
    { text: '  role:', tone: 'property' },
    { text: " 'Senior Frontend Engineer',", tone: 'string' },
  ],
  [
    { text: '  experience:', tone: 'property' },
    { text: " '8+ years',", tone: 'string' },
  ],
  [
    { text: '  stack:', tone: 'property' },
    { text: " ['React', 'Next.js', 'TypeScript'],", tone: 'string' },
  ],
  [
    { text: '  domains:', tone: 'property' },
    { text: " ['Fintech', 'Telecom'],", tone: 'string' },
  ],
  [{ text: '};', tone: 'plain' }],
  [{ text: '// turn ideas into reliable products', tone: 'comment' }],
  [
    { text: 'return', tone: 'keyword' },
    { text: ' ', tone: 'plain' },
    { text: '<Build with="purpose" />', tone: 'tag' },
  ],
];

const codeLineLengths = codeLines.map((line) =>
  line.reduce((length, token) => length + token.text.length, 0),
);

const codeLineOffsets = codeLineLengths.map((_, lineIndex) =>
  codeLineLengths.slice(0, lineIndex).reduce((total, length) => total + length, 0),
);

const totalCodeCharacters = codeLineLengths.reduce((total, length) => total + length, 0);

type TypewriterPhase = 'typing' | 'holding' | 'deleting' | 'waiting';

interface TypewriterState {
  visibleCharacters: number;
  phase: TypewriterPhase;
}

function useLoopingTypewriter() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [state, setState] = useState<TypewriterState>({
    visibleCharacters: 0,
    phase: 'typing',
  });

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const delay =
      state.phase === 'holding'
        ? 2200
        : state.phase === 'waiting'
          ? 650
          : state.phase === 'deleting'
            ? 12
            : 24;

    const timeout = window.setTimeout(() => {
      setState((current) => {
        if (current.phase === 'typing') {
          const nextCount = Math.min(current.visibleCharacters + 1, totalCodeCharacters);

          return {
            visibleCharacters: nextCount,
            phase: nextCount === totalCodeCharacters ? 'holding' : 'typing',
          };
        }

        if (current.phase === 'holding') {
          return { ...current, phase: 'deleting' };
        }

        if (current.phase === 'deleting') {
          const nextCount = Math.max(current.visibleCharacters - 3, 0);

          return {
            visibleCharacters: nextCount,
            phase: nextCount === 0 ? 'waiting' : 'deleting',
          };
        }

        return { visibleCharacters: 0, phase: 'typing' };
      });
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [reduceMotion, state]);

  return reduceMotion ? totalCodeCharacters : state.visibleCharacters;
}

function renderCodeToken(token: CodeToken, visibleText: string): ReactNode {
  if (token.tone === 'keyword') {
    return <CodeKeyword>{visibleText}</CodeKeyword>;
  }

  if (token.tone === 'property') {
    return <CodeProperty>{visibleText}</CodeProperty>;
  }

  if (token.tone === 'string') {
    return <CodeString>{visibleText}</CodeString>;
  }

  if (token.tone === 'comment') {
    return <CodeComment>{visibleText}</CodeComment>;
  }

  if (token.tone === 'tag') {
    return <CodeTag>{visibleText}</CodeTag>;
  }

  return visibleText;
}

function renderTypedLine(tokens: CodeToken[], visibleCharacters: number) {
  let consumedCharacters = 0;

  return tokens.map((token, tokenIndex) => {
    const visibleTokenCharacters = Math.max(
      0,
      Math.min(token.text.length, visibleCharacters - consumedCharacters),
    );
    const visibleText = token.text.slice(0, visibleTokenCharacters);

    consumedCharacters += token.text.length;

    return (
      <Fragment key={`${token.tone}-${tokenIndex}`}>{renderCodeToken(token, visibleText)}</Fragment>
    );
  });
}

export function HeroSection() {
  const visibleCharacters = useLoopingTypewriter();
  const activeLineIndex = codeLineOffsets.reduce(
    (activeIndex, offset, lineIndex) => (visibleCharacters >= offset ? lineIndex : activeIndex),
    0,
  );

  return (
    <HeroRoot id="hero">
      <CodeBackdrop aria-hidden="true">
        {backgroundGlyphs.map((glyph) => (
          <CodeGlyph key={glyph}>{glyph}</CodeGlyph>
        ))}
      </CodeBackdrop>

      <HeroContainer maxWidth="xl">
        <HeroLayout>
          <HeroContent>
            <HeroBadge
              label="Senior Frontend Engineer • 8+ سال تجربه"
              variant="outlined"
              color="primary"
            />
            <HeroTitle>
              من پیمان حسینی‌ام؛ <HeroTitleAccent>ایده‌ها را به محصول</HeroTitleAccent> تبدیل
              می‌کنم.
            </HeroTitle>
            <HeroDescription>
              توسعه‌دهنده‌ی ارشد فرانت‌اند با تجربه‌ی ساخت محصولات وب و موبایل در حوزه‌های مالی و
              مخابرات؛ با تمرکز روی React، Next.js، TypeScript و رابط‌های سریع و واکنش‌گرا.
            </HeroDescription>
            <HeroActions>
              <HeroActionButton
                href="#projects"
                text="دیدن پروژه‌ها"
                size="large"
                endIcon={<ArrowOutwardRoundedIcon />}
              />
              <HeroActionButton
                href="#about"
                variant="outlined"
                text="بیشتر درباره من"
                size="large"
              />
            </HeroActions>
            <HeroStatus>
              <HeroStatusDot />
              آماده برای همکاری روی ایده‌های تازه
            </HeroStatus>
          </HeroContent>

          <CodeStage
            role="img"
            aria-label="معرفی پیمان حسینی، توسعه‌دهنده ارشد فرانت‌اند با بیش از هشت سال تجربه، به شکل ویرایشگر کد"
          >
            <CodeOrbit aria-hidden="true">
              <CodeRoundedIcon />
            </CodeOrbit>
            <FloatingCodeTag aria-hidden="true">&lt;Portfolio /&gt;</FloatingCodeTag>

            <CodeWindow>
              <CodeWindowHeader>
                <WindowDots aria-hidden="true">
                  <WindowDot />
                  <WindowDot />
                  <WindowDot />
                </WindowDots>
                <WindowFileName>
                  <TerminalRoundedIcon fontSize="inherit" />
                  peyman.tsx
                </WindowFileName>
              </CodeWindowHeader>

              <CodeWindowBody dir="ltr" aria-hidden="true">
                {codeLines.map((line, lineIndex) => {
                  const lineCharacterCount = Math.max(
                    0,
                    Math.min(
                      codeLineLengths[lineIndex],
                      visibleCharacters - codeLineOffsets[lineIndex],
                    ),
                  );

                  return (
                    <CodeLine key={lineIndex} data-line={String(lineIndex + 1).padStart(2, '0')}>
                      <CodeLineText>
                        {renderTypedLine(line, lineCharacterCount)}
                        {lineIndex === activeLineIndex && <CodeCursor />}
                      </CodeLineText>
                    </CodeLine>
                  );
                })}
              </CodeWindowBody>

              <CodeWindowFooter>
                <span>TypeScript</span>
                <span>UTF-8</span>
                <span>Ln {activeLineIndex + 1}</span>
              </CodeWindowFooter>
            </CodeWindow>
          </CodeStage>
        </HeroLayout>
      </HeroContainer>
    </HeroRoot>
  );
}
