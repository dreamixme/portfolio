'use client';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ProjectVisual } from '@/features/projects/components/ProjectVisual';
import { projectCategoryLabels } from '@/features/projects/data/projects';
import type { PortfolioProject } from '@/features/projects/types';

import {
  BackLink,
  CaseCard,
  CaseCardIcon,
  CaseCardKicker,
  CaseCardText,
  CaseCardTitle,
  CaseGrid,
  DetailAside,
  DetailContainer,
  DetailContent,
  DetailEyebrow,
  DetailHero,
  DetailIntro,
  DetailRoot,
  DetailTitle,
  DraftNotice,
  GalleryCaption,
  GalleryGrid,
  GalleryImage,
  GalleryItem,
  HeroActions,
  HeroCopy,
  LiveProjectButton,
  MetaGrid,
  MetaItem,
  NextProjectCard,
  NextProjectKicker,
  NextProjectLink,
  NextProjectTitle,
  Overview,
  OverviewHeading,
  OverviewParagraph,
  SectionKicker,
  SidePanel,
  SidePanelSection,
  TagList,
  TagListItem,
  VisualFrame,
} from './styled';

interface ProjectDetailProps {
  project: PortfolioProject;
  nextProject: PortfolioProject;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const caseItems = [
    {
      kicker: 'THE CHALLENGE',
      title: 'مسئله و چالش',
      text:
        project.challenge ??
        'شرح مسئله‌ی محصول، محدودیت‌ها و چالش‌های اصلی پس از دریافت اطلاعات کامل پروژه در این بخش قرار می‌گیرد.',
      icon: <ConstructionRoundedIcon />,
    },
    {
      kicker: 'THE APPROACH',
      title: 'راه‌حل و اجرا',
      text:
        project.solution ??
        'تصمیم‌های طراحی، معماری و کارهایی که در روند اجرای پروژه انجام شده‌اند، به‌صورت دقیق روایت می‌شوند.',
      icon: <CodeRoundedIcon />,
    },
    {
      kicker: 'THE IMPACT',
      title: 'نتیجه و اثر',
      text:
        project.outcome ??
        'خروجی نهایی، بهبودهای ایجادشده و دستاوردهای قابل اندازه‌گیری پروژه در نسخه‌ی کامل نمایش داده می‌شوند.',
      icon: <CheckCircleRoundedIcon />,
    },
  ];

  return (
    <DetailRoot>
      <DetailContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <BackLink href="/#projects">
            <ArrowBackRoundedIcon aria-hidden="true" />
            بازگشت به همه پروژه‌ها
          </BackLink>
        </ScrollReveal>

        <DetailHero>
          <ScrollReveal variant="start" delay={60}>
            <HeroCopy>
              <DetailEyebrow dir="ltr">PROJECT / {project.latinTitle}</DetailEyebrow>
              <DetailTitle>{project.title}</DetailTitle>
              <DetailIntro>{project.shortDescription}</DetailIntro>
              <HeroActions>
                {project.liveUrl && (
                  <LiveProjectButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    text="مشاهده نسخه آنلاین"
                    endIcon={<ArrowOutwardRoundedIcon />}
                  />
                )}
                <span>{projectCategoryLabels[project.category]}</span>
              </HeroActions>
            </HeroCopy>
          </ScrollReveal>

          <ScrollReveal variant="end" delay={120}>
            <MetaGrid>
              <MetaItem>
                <PersonRoundedIcon aria-hidden="true" />
                <span>نقش من</span>
                <strong dir="ltr">{project.role ?? 'در حال تکمیل'}</strong>
              </MetaItem>
              <MetaItem>
                <BusinessCenterRoundedIcon aria-hidden="true" />
                <span>شرکت / کارفرما</span>
                <strong>{project.companyOrClient ?? 'در حال تکمیل'}</strong>
              </MetaItem>
              <MetaItem>
                <CalendarMonthRoundedIcon aria-hidden="true" />
                <span>بازه اجرا</span>
                <strong>{project.period ?? 'در حال تکمیل'}</strong>
              </MetaItem>
              <MetaItem>
                <LanguageRoundedIcon aria-hidden="true" />
                <span>وضعیت</span>
                <strong>{project.liveUrl ? 'منتشر شده' : 'مطالعه موردی'}</strong>
              </MetaItem>
            </MetaGrid>
          </ScrollReveal>
        </DetailHero>

        <ScrollReveal variant="scale" delay={160}>
          <VisualFrame>
            <ProjectVisual project={project} mode="hero" priority />
          </VisualFrame>
        </ScrollReveal>

        <DetailContent>
          <DetailAside>
            <ScrollReveal variant="start">
              <SidePanel>
                <SidePanelSection>
                  <SectionKicker dir="ltr">TECH STACK</SectionKicker>
                  <TagList>
                    {project.stack.map((item) => (
                      <TagListItem key={item} dir="ltr">
                        {item}
                      </TagListItem>
                    ))}
                  </TagList>
                </SidePanelSection>
                <SidePanelSection>
                  <SectionKicker dir="ltr">RESPONSIBILITIES</SectionKicker>
                  <TagList>
                    {project.services.map((item) => (
                      <TagListItem key={item}>{item}</TagListItem>
                    ))}
                  </TagList>
                </SidePanelSection>
              </SidePanel>
            </ScrollReveal>
          </DetailAside>

          <Overview>
            <ScrollReveal variant="up">
              <SectionKicker dir="ltr">PROJECT OVERVIEW</SectionKicker>
              <OverviewHeading>داستان پروژه، از مسئله تا نتیجه.</OverviewHeading>
              {project.overview.map((paragraph) => (
                <OverviewParagraph key={paragraph}>{paragraph}</OverviewParagraph>
              ))}
              {project.isDraft && (
                <DraftNotice>
                  <ConstructionRoundedIcon aria-hidden="true" />
                  <div>
                    <strong>این مطالعه‌ی موردی آماده‌ی دریافت محتوای اصلی است.</strong>
                    <span>
                      متن‌ها و تصویرهای فعلی نقش پیش‌نمایش دارند و با دیتای نهایی پروژه جایگزین
                      می‌شوند.
                    </span>
                  </div>
                </DraftNotice>
              )}
            </ScrollReveal>
          </Overview>
        </DetailContent>

        <CaseGrid>
          {caseItems.map((item, index) => (
            <ScrollReveal key={item.kicker} variant="up" delay={index * 80}>
              <CaseCard
                asElement="article"
                tone={index === 1 ? 'purple' : index === 2 ? 'success' : 'secondary'}
              >
                <CaseCardIcon aria-hidden="true">{item.icon}</CaseCardIcon>
                <CaseCardKicker dir="ltr">{item.kicker}</CaseCardKicker>
                <CaseCardTitle>{item.title}</CaseCardTitle>
                <CaseCardText>{item.text}</CaseCardText>
              </CaseCard>
            </ScrollReveal>
          ))}
        </CaseGrid>

        {project.gallery && project.gallery.length > 0 && (
          <GalleryGrid>
            {project.gallery.map((item, index) => (
              <ScrollReveal key={item.src} variant="scale" delay={index * 60}>
                <GalleryItem>
                  <GalleryImage
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                  {item.caption && <GalleryCaption>{item.caption}</GalleryCaption>}
                </GalleryItem>
              </ScrollReveal>
            ))}
          </GalleryGrid>
        )}

        <ScrollReveal variant="up">
          <NextProjectCard>
            <NextProjectLink href={{ pathname: `/projects/${nextProject.slug}` }}>
              <div>
                <NextProjectKicker dir="ltr">NEXT CASE STUDY</NextProjectKicker>
                <NextProjectTitle>{nextProject.title}</NextProjectTitle>
              </div>
              <ArrowOutwardRoundedIcon aria-hidden="true" />
            </NextProjectLink>
          </NextProjectCard>
        </ScrollReveal>
      </DetailContainer>
    </DetailRoot>
  );
}
