'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import { useMediaQuery } from '@mui/material';

import {
  MainMetricCaption,
  MainMetricCard,
  MainMetricContent,
  MainMetricHeader,
  MainMetricLabel,
  MainMetricMeta,
  MainMetricMetaItem,
  MainMetricNumber,
  MainMetricSuffix,
  MainMetricValue,
  StatCard,
  StatCardDescription,
  StatCardIcon,
  StatCardLabel,
  StatCardNumber,
  StatCardSuffix,
  StatCardValue,
  StatsCardsGrid,
  StatsContainer,
  StatsDescription,
  StatsGrid,
  StatsHeader,
  StatsRoot,
  StatsTitle,
  StatsTitleAccent,
} from './styled';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  description: string;
  icon: ReactNode;
  accent: 'primary' | 'secondary' | 'success' | 'purple';
}

const stats: StatItem[] = [
  {
    value: 9,
    suffix: '+',
    label: 'پروژه‌ی منتخب',
    description: 'محصولات واقعی وب، PWA و موبایل',
    icon: <CodeRoundedIcon />,
    accent: 'primary',
  },
  {
    value: 5,
    label: 'تجربه‌ی سازمانی',
    description: 'همکاری با تیم‌های محصول و فناوری',
    icon: <ApartmentRoundedIcon />,
    accent: 'purple',
  },
  {
    value: 2,
    label: 'حوزه‌ی تخصصی',
    description: 'فناوری مالی و صنعت مخابرات',
    icon: <AccountTreeRoundedIcon />,
    accent: 'secondary',
  },
  {
    value: 3,
    label: 'پلتفرم توسعه',
    description: 'وب، PWA و اپلیکیشن موبایل',
    icon: <DevicesRoundedIcon />,
    accent: 'success',
  },
];

const formatNumber = (value: number) => new Intl.NumberFormat('fa-IR').format(value);

function useCountProgress(shouldStart: boolean, duration = 1700) {
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

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const countProgress = useCountProgress(hasEnteredViewport);

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
        threshold: 0.24,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const experienceCount = Math.round(8 * countProgress);

  return (
    <StatsRoot
      id="stats"
      ref={sectionRef}
      data-counter-state={hasEnteredViewport ? 'running' : 'idle'}
    >
      <StatsContainer maxWidth="xl">
        <StatsHeader isVisible={hasEnteredViewport}>
          <StatsTitle>
            تجربه‌ای که با <StatsTitleAccent>عددهای واقعی</StatsTitleAccent> دیده می‌شود.
          </StatsTitle>
          <StatsDescription>
            پشت هر عدد، یک مسیر واقعی از حل مسئله، همکاری تیمی و ساخت محصول برای کاربران قرار دارد.
          </StatsDescription>
        </StatsHeader>

        <StatsGrid>
          <MainMetricCard isVisible={hasEnteredViewport} aria-label="بیش از هشت سال تجربه حرفه‌ای">
            <MainMetricContent>
              <MainMetricHeader>
                <MainMetricValue dir="ltr" aria-hidden="true">
                  <MainMetricNumber>{formatNumber(experienceCount)}</MainMetricNumber>
                  <MainMetricSuffix>+</MainMetricSuffix>
                </MainMetricValue>
                <MainMetricLabel>
                  سال تجربه‌ی
                  <br />
                  حرفه‌ای
                </MainMetricLabel>
              </MainMetricHeader>

              <MainMetricCaption>
                از توسعه‌ی اپلیکیشن Android تا معماری رابط‌های مدرن React و Next.js؛ مسیری پیوسته
                برای ساخت محصولاتی سریع، مقیاس‌پذیر و قابل اعتماد.
              </MainMetricCaption>

              <MainMetricMeta>
                <MainMetricMetaItem>
                  <TrendingUpRoundedIcon fontSize="small" />
                  از ۱۳۹۶ تا امروز
                </MainMetricMetaItem>
                <MainMetricMetaItem>
                  <CodeRoundedIcon fontSize="small" />
                  Frontend • Mobile
                </MainMetricMetaItem>
              </MainMetricMeta>
            </MainMetricContent>
          </MainMetricCard>

          <StatsCardsGrid>
            {stats.map((stat, index) => {
              const displayedValue = Math.round(stat.value * countProgress);

              return (
                <StatCard
                  key={stat.label}
                  accent={stat.accent}
                  isVisible={hasEnteredViewport}
                  revealDelay={180 + index * 90}
                  aria-label={`${stat.value}${stat.suffix ?? ''} ${stat.label}`}
                >
                  <StatCardIcon accent={stat.accent} aria-hidden="true">
                    {stat.icon}
                  </StatCardIcon>
                  <StatCardValue dir="ltr" aria-hidden="true">
                    <StatCardNumber>{formatNumber(displayedValue)}</StatCardNumber>
                    {stat.suffix && <StatCardSuffix>{stat.suffix}</StatCardSuffix>}
                  </StatCardValue>
                  <StatCardLabel>{stat.label}</StatCardLabel>
                  <StatCardDescription>{stat.description}</StatCardDescription>
                </StatCard>
              );
            })}
          </StatsCardsGrid>
        </StatsGrid>
      </StatsContainer>
    </StatsRoot>
  );
}
