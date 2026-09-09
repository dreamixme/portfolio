import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import TaskAltRoundedIcon from '@mui/icons-material/TaskAltRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

import { ScrollReveal } from '@/components/common/ScrollReveal';

import {
  AboutContainer,
  AboutDescription,
  AboutGrid,
  AboutHeader,
  AboutRoot,
  AboutTitle,
  AboutTitleAccent,
  FileBadge,
  FileStatus,
  PrincipleContent,
  PrincipleIcon,
  PrincipleItem,
  PrincipleLabel,
  PrincipleList,
  PrincipleText,
  PrinciplesHeading,
  PrinciplesPanel,
  PrinciplesTitle,
  ProfileCard,
  ProfileCodeTag,
  ProfileFact,
  ProfileFactIcon,
  ProfileFacts,
  ProfileFactText,
  ProfileFactValue,
  ProfileIdentity,
  ProfileKicker,
  ProfileMonogram,
  ProfileOrbit,
  ProfileRole,
  ProfileTop,
  StoryCard,
  StoryClosing,
  StoryFileBar,
  StoryParagraph,
  StoryQuote,
  StoryQuoteMark,
  StorySignature,
  StorySignatureLine,
} from './styled';

const principles = [
  {
    label: 'حل مسئله',
    text: 'مسئله‌های پیچیده را به قدم‌های روشن و قابل اجرا تبدیل می‌کنم.',
    icon: <PsychologyRoundedIcon />,
  },
  {
    label: 'مسئولیت‌پذیری',
    text: 'کیفیت نتیجه و رساندن کار به نقطه‌ی قابل اتکا برایم جدی است.',
    icon: <TaskAltRoundedIcon />,
  },
  {
    label: 'یادگیری مداوم',
    text: 'هر پروژه را فرصتی برای عمیق‌تر شدن و ساختن راه بهتر می‌بینم.',
    icon: <TrendingUpRoundedIcon />,
  },
] as const;

const profileFacts = [
  { label: 'موقعیت', value: 'تهران، ایران', icon: <LocationOnRoundedIcon /> },
  { label: 'محصول', value: 'وب و موبایل', icon: <DevicesRoundedIcon /> },
  { label: 'تجربه', value: 'بیش از ۸ سال', icon: <AutoAwesomeRoundedIcon /> },
] as const;

export function AboutSection() {
  return (
    <AboutRoot id="about">
      <AboutContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <AboutHeader>
            <AboutTitle>
              پشت هر محصول خوب، <AboutTitleAccent>یک نگاه دقیق</AboutTitleAccent> قرار دارد.
            </AboutTitle>
            <AboutDescription>
              کمی بیشتر از مسیر، ذهنیت و روشی که با آن ایده‌ها را به تجربه‌های واقعی تبدیل می‌کنم.
            </AboutDescription>
          </AboutHeader>
        </ScrollReveal>

        <AboutGrid>
          <ScrollReveal variant="start">
            <StoryCard asElement="article" tone="primary">
              <StoryFileBar>
                <FileBadge dir="ltr">
                  <TerminalRoundedIcon aria-hidden="true" />
                  about-me.md
                </FileBadge>
                <FileStatus>
                  <span aria-hidden="true" />
                  OPEN TO IDEAS
                </FileStatus>
              </StoryFileBar>

              <StoryQuote>
                <StoryQuoteMark aria-hidden="true">“</StoryQuoteMark>
                چالش را به یک مسئله‌ی قابل حل تبدیل می‌کنم؛ بعد تا رسیدن به جواب رهایش نمی‌کنم.
              </StoryQuote>

              <StoryParagraph>
                من پیمان حسینی‌ام؛ مهندس نرم‌افزار و توسعه‌دهنده‌ی ارشد فرانت‌اند. بیش از هشت سال
                است که رابط‌ها و محصولات واقعی برای وب و موبایل می‌سازم؛ از سرویس‌های مالی و فین‌تک
                تا محصولات حوزه‌ی مخابرات.
              </StoryParagraph>
              <StoryParagraph>
                برای من کدنویسی فقط پیاده‌سازی طرح نیست؛ راهی برای حل مسئله، ساده‌کردن تجربه‌ی کاربر
                و ساختن محصولی است که بتوان به کیفیت و عملکردش اعتماد کرد.
              </StoryParagraph>

              <StoryClosing>
                <StorySignature aria-hidden="true">Peyman</StorySignature>
                <StorySignatureLine>
                  <strong>پیمان حسینی</strong>
                  <span>Senior Frontend Engineer</span>
                </StorySignatureLine>
              </StoryClosing>
            </StoryCard>
          </ScrollReveal>

          <ScrollReveal variant="end" delay={100}>
            <ProfileCard asElement="article" tone="secondary">
              <ProfileTop>
                <ProfileKicker dir="ltr">PROFILE / 2026</ProfileKicker>
                <ProfileCodeTag dir="ltr">const me = developer;</ProfileCodeTag>
              </ProfileTop>

              <ProfileIdentity>
                <ProfileOrbit aria-hidden="true">
                  <span>&lt;/&gt;</span>
                  <span>{'{ }'}</span>
                  <span>01</span>
                </ProfileOrbit>
                <ProfileMonogram aria-hidden="true">P</ProfileMonogram>
                <ProfileRole>
                  <strong>Frontend Engineer</strong>
                  <span>Web • Mobile • Product</span>
                </ProfileRole>
              </ProfileIdentity>

              <ProfileFacts>
                {profileFacts.map((fact) => (
                  <ProfileFact key={fact.label}>
                    <ProfileFactIcon aria-hidden="true">{fact.icon}</ProfileFactIcon>
                    <ProfileFactText>
                      <span>{fact.label}</span>
                      <ProfileFactValue>{fact.value}</ProfileFactValue>
                    </ProfileFactText>
                  </ProfileFact>
                ))}
              </ProfileFacts>
            </ProfileCard>
          </ScrollReveal>
        </AboutGrid>

        <ScrollReveal variant="up" delay={180}>
          <PrinciplesPanel tone="purple">
            <PrinciplesHeading>
              <span dir="ltr">HOW I WORK</span>
              <PrinciplesTitle>سه اصل ثابت در کار من</PrinciplesTitle>
            </PrinciplesHeading>

            <PrincipleList>
              {principles.map((principle) => (
                <PrincipleItem key={principle.label}>
                  <PrincipleIcon aria-hidden="true">{principle.icon}</PrincipleIcon>
                  <PrincipleContent>
                    <PrincipleLabel>{principle.label}</PrincipleLabel>
                    <PrincipleText>{principle.text}</PrincipleText>
                  </PrincipleContent>
                </PrincipleItem>
              ))}
            </PrincipleList>
          </PrinciplesPanel>
        </ScrollReveal>
      </AboutContainer>
    </AboutRoot>
  );
}
