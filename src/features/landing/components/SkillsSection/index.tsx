'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { useMediaQuery } from '@mui/material';

import {
  SkillConnector,
  SkillGroupHeader,
  SkillGroupIcon,
  SkillGroupIntro,
  SkillGroupKicker,
  SkillGroupTitle,
  SkillMeta,
  SkillName,
  SkillPanel,
  SkillPercent,
  SkillProgressFill,
  SkillProgressTrack,
  SkillRow,
  SkillsContainer,
  SkillsDescription,
  SkillsGrid,
  SkillsHeader,
  SkillsList,
  SkillsRoot,
  SkillsTitle,
  SkillsTitleAccent,
} from './styled';

type SkillAccent = 'primary' | 'secondary';

interface SkillItem {
  label: string;
  value: number;
}

interface SkillGroup {
  title: string;
  kicker: string;
  accent: SkillAccent;
  icon: ReactNode;
  skills: SkillItem[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'توسعه‌ی رابط و محصول',
    kicker: 'CORE STACK',
    accent: 'primary',
    icon: <CodeRoundedIcon />,
    skills: [
      { label: 'React', value: 95 },
      { label: 'JavaScript', value: 94 },
      { label: 'TypeScript', value: 92 },
      { label: 'Next.js', value: 86 },
    ],
  },
  {
    title: 'معماری و تحویل محصول',
    kicker: 'ENGINEERING',
    accent: 'secondary',
    icon: <AccountTreeRoundedIcon />,
    skills: [
      { label: 'Responsive UI', value: 96 },
      { label: 'REST API Integration', value: 92 },
      { label: 'State Management', value: 90 },
      { label: 'React Native', value: 84 },
    ],
  },
];

const formatNumber = (value: number) => new Intl.NumberFormat('fa-IR').format(value);

function useSkillProgress(shouldStart: boolean, duration = 1500) {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!shouldStart || reduceMotion) {
      return;
    }

    let animationFrame = 0;
    const startTime = window.performance.now();

    const updateProgress = (currentTime: number) => {
      const elapsed = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - elapsed, 4);

      setProgress(easedProgress);

      if (elapsed < 1) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    animationFrame = window.requestAnimationFrame(updateProgress);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, reduceMotion, shouldStart]);

  if (reduceMotion && shouldStart) {
    return 1;
  }

  return progress;
}

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const progress = useSkillProgress(hasEnteredViewport);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      const animationFrame = requestAnimationFrame(() => setHasEnteredViewport(true));

      return () => cancelAnimationFrame(animationFrame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasEnteredViewport(true);
        observer.disconnect();
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <SkillsRoot
      id="skills"
      ref={sectionRef}
      data-skills-state={hasEnteredViewport ? 'running' : 'idle'}
    >
      <SkillsContainer maxWidth="xl">
        <SkillsHeader isVisible={hasEnteredViewport}>
          <SkillsTitle>
            مهارت‌هایی برای ساخت یک <SkillsTitleAccent>محصول کامل</SkillsTitleAccent>
          </SkillsTitle>
          <SkillsDescription>
            از جزئیات رابط کاربری تا معماری و انتشار؛ مجموعه‌ای از توانایی‌هایی که در پروژه‌های
            واقعی به کار گرفته‌ام.
          </SkillsDescription>
        </SkillsHeader>

        <SkillsGrid>
          {skillGroups.map((group, groupIndex) => (
            <SkillPanel
              key={group.title}
              accent={group.accent}
              isVisible={hasEnteredViewport}
              revealDelay={120 + groupIndex * 130}
            >
              <SkillGroupHeader>
                <SkillGroupIcon accent={group.accent} aria-hidden="true">
                  {group.icon}
                </SkillGroupIcon>
                <SkillGroupIntro>
                  <SkillGroupKicker>{group.kicker}</SkillGroupKicker>
                  <SkillGroupTitle>{group.title}</SkillGroupTitle>
                </SkillGroupIntro>
                <SkillConnector accent={group.accent} aria-hidden="true" />
              </SkillGroupHeader>

              <SkillsList>
                {group.skills.map((skill, skillIndex) => {
                  const displayedValue = Math.round(skill.value * progress);
                  const animationDelay = 260 + groupIndex * 130 + skillIndex * 90;

                  return (
                    <SkillRow
                      key={skill.label}
                      aria-label={`${skill.label}، ${formatNumber(skill.value)} درصد`}
                    >
                      <SkillMeta aria-hidden="true">
                        <SkillName dir="ltr">{skill.label}</SkillName>
                        <SkillPercent dir="ltr">{formatNumber(displayedValue)}%</SkillPercent>
                      </SkillMeta>
                      <SkillProgressTrack aria-hidden="true">
                        <SkillProgressFill
                          accent={group.accent}
                          isVisible={hasEnteredViewport}
                          targetValue={skill.value}
                          animationDelay={animationDelay}
                        />
                      </SkillProgressTrack>
                    </SkillRow>
                  );
                })}
              </SkillsList>
            </SkillPanel>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsRoot>
  );
}
