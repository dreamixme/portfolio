import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';

import { ScrollReveal } from '@/components/common/ScrollReveal';

import {
  AcademicCard,
  AcademicCardBody,
  AcademicCardTop,
  AcademicSerial,
  DegreeContent,
  DegreeDescription,
  DegreeKicker,
  DegreeMeta,
  DegreeMetaItem,
  DegreeTitle,
  EducationContainer,
  EducationHeader,
  EducationRoot,
  EducationTitle,
  EducationTitleAccent,
  EducationTimeline,
  EducationTimelineHeader,
  EducationTimelineTitle,
  InstitutionIdentity,
  InstitutionIcon,
  InstitutionLabel,
  InstitutionName,
  ScoreCaption,
  ScoreGauge,
  ScoreGaugeCore,
  ScorePanel,
  ScoreValue,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineLabel,
  TimelineYear,
} from './styled';

const educationTimeline = [
  { year: '۱۳۹۰', label: 'شروع دوره‌ی کارشناسی' },
  { year: 'IT', label: 'چهار سال یادگیری دانشگاهی' },
  { year: '۱۳۹۴', label: 'پایان موفق دوره' },
] as const;

export function EducationSection() {
  return (
    <EducationRoot id="education">
      <EducationContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <EducationHeader>
            <EducationTitle>
              پایه‌ی دانشگاهی؛ <EducationTitleAccent>شروع یک مسیر مداوم.</EducationTitleAccent>
            </EducationTitle>
            <DegreeDescription>
              تحصیل در فناوری اطلاعات، پایه‌ی ورودم به دنیای نرم‌افزار بود؛ مسیری که با تجربه‌ی
              واقعی، حل مسئله و یادگیری پیوسته ادامه پیدا کرده است.
            </DegreeDescription>
          </EducationHeader>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={120}>
          <AcademicCard asElement="article" tone="purple">
            <AcademicCardTop>
              <InstitutionIdentity>
                <InstitutionIcon aria-hidden="true">
                  <SchoolRoundedIcon />
                </InstitutionIcon>
                <div>
                  <InstitutionLabel>دانشگاه</InstitutionLabel>
                  <InstitutionName>دانشگاه کردستان</InstitutionName>
                </div>
              </InstitutionIdentity>
              <AcademicSerial dir="ltr">EDU / 01</AcademicSerial>
            </AcademicCardTop>

            <AcademicCardBody>
              <DegreeContent>
                <DegreeKicker dir="ltr">BACHELOR OF SCIENCE</DegreeKicker>
                <DegreeTitle>
                  کارشناسی <span>فناوری اطلاعات</span>
                </DegreeTitle>

                <DegreeMeta>
                  <DegreeMetaItem>
                    <CalendarMonthRoundedIcon aria-hidden="true" />
                    <span dir="ltr">۱۳۹۰ — ۱۳۹۴</span>
                  </DegreeMetaItem>
                  <DegreeMetaItem>
                    <AccountBalanceRoundedIcon aria-hidden="true" />
                    دوره‌ی کارشناسی
                  </DegreeMetaItem>
                </DegreeMeta>

                <DegreeDescription>
                  این دوره، نگاه ساختاریافته‌ام به فناوری و نرم‌افزار را شکل داد و زمینه‌ای شد تا
                  مسیر حرفه‌ای خودم را در توسعه‌ی محصولات وب و موبایل دنبال کنم.
                </DegreeDescription>
              </DegreeContent>

              <ScorePanel>
                <ScoreGauge
                  role="meter"
                  aria-label="معدل کل، ۱۶ ممیز ۳۷ از ۲۰"
                  aria-valuemin={0}
                  aria-valuemax={20}
                  aria-valuenow={16.37}
                >
                  <ScoreGaugeCore>
                    <ScoreValue dir="ltr">۱۶٫۳۷</ScoreValue>
                    <ScoreCaption>معدل کل دوره</ScoreCaption>
                  </ScoreGaugeCore>
                </ScoreGauge>
              </ScorePanel>
            </AcademicCardBody>

            <EducationTimeline>
              <EducationTimelineHeader>
                <EducationTimelineTitle>مسیر دوره</EducationTimelineTitle>
                <span dir="ltr">2011 — 2015</span>
              </EducationTimelineHeader>

              <ol>
                {educationTimeline.map((item, index) => (
                  <TimelineItem key={item.year}>
                    <TimelineDot isHighlight={index === 1} aria-hidden="true" />
                    <TimelineContent>
                      <TimelineYear dir="ltr">{item.year}</TimelineYear>
                      <TimelineLabel>{item.label}</TimelineLabel>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </ol>
            </EducationTimeline>
          </AcademicCard>
        </ScrollReveal>
      </EducationContainer>
    </EducationRoot>
  );
}
