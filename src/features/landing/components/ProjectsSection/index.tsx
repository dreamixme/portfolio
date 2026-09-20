'use client';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import SwipeRoundedIcon from '@mui/icons-material/SwipeRounded';
import WorkspacesRoundedIcon from '@mui/icons-material/WorkspacesRounded';
import { useEffect, useMemo, useRef, useState } from 'react';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { ProjectVisual } from '@/features/projects/components/ProjectVisual';
import { getProjectsByCategory, projectCategoryLabels } from '@/features/projects/data/projects';
import type { ProjectCategory as ProjectCategoryType } from '@/features/projects/types';

import {
  CategoryButton,
  CategorySwitcher,
  ExperienceAnchor,
  ProjectCard,
  ProjectCardBody,
  ProjectCardFooter,
  ProjectCardHeader,
  ProjectCardLink,
  ProjectCategory,
  ProjectDomain,
  ProjectIndex,
  ProjectRail,
  ProjectRailItem,
  ProjectStack,
  ProjectStackItem,
  ProjectSummary,
  ProjectTitle,
  ProjectsContainer,
  ProjectsDescription,
  ProjectsHeader,
  ProjectsHeaderContent,
  ProjectsRoot,
  ProjectsTitle,
  ProjectsTitleAccent,
  RailHint,
  RailMeta,
  RailNavigation,
  RailProgress,
  RailProgressBar,
  RailProgressValue,
  RailRoundButton,
} from './styled';

const categories: ProjectCategoryType[] = ['company', 'freelance'];

function getDomain(url?: string) {
  if (!url) return 'CASE STUDY';

  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return 'LIVE PROJECT';
  }
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategoryType>('company');
  const [activeIndex, setActiveIndex] = useState(0);
  const railRef = useRef<HTMLUListElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const scrollFrameRef = useRef(0);
  const projects = useMemo(() => getProjectsByCategory(activeCategory), [activeCategory]);

  useEffect(
    () => () => {
      if (scrollFrameRef.current) window.cancelAnimationFrame(scrollFrameRef.current);
    },
    [],
  );

  const centerCardInRail = (card: HTMLLIElement | null) => {
    const rail = railRef.current;

    if (!rail || !card) return;

    const railBounds = rail.getBoundingClientRect();
    const cardBounds = card.getBoundingClientRect();
    const offset =
      cardBounds.left + cardBounds.width / 2 - (railBounds.left + railBounds.width / 2);

    rail.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const changeCategory = (category: ProjectCategoryType) => {
    setActiveCategory(category);
    setActiveIndex(0);
    cardRefs.current = [];
  };

  const goToProject = (index: number) => {
    const nextIndex = Math.max(0, Math.min(index, projects.length - 1));
    setActiveIndex(nextIndex);
    centerCardInRail(cardRefs.current[nextIndex]);
  };

  const updateActiveProject = () => {
    if (scrollFrameRef.current) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const rail = railRef.current;

      if (!rail) return;

      const railCenter = rail.getBoundingClientRect().left + rail.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const bounds = card.getBoundingClientRect();
        const distance = Math.abs(bounds.left + bounds.width / 2 - railCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
      scrollFrameRef.current = 0;
    });
  };

  return (
    <ProjectsRoot id="projects">
      <ExperienceAnchor id="experience" aria-hidden="true" />
      <ProjectsContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <ProjectsHeader>
            <ProjectsHeaderContent>
              <ProjectsTitle>
                تجربه‌ها <ProjectsTitleAccent>و پروژه‌های من</ProjectsTitleAccent>
              </ProjectsTitle>
            </ProjectsHeaderContent>
            <ProjectsDescription>
              ترکیبی از محصولاتی که در تیم‌های حرفه‌ای روی آن‌ها کار کرده‌ام و پروژه‌های مستقلی که
              از ایده تا اجرا پیش برده‌ام؛ هر کارت، ورودی یک مطالعه‌ی موردی کامل است.
            </ProjectsDescription>
          </ProjectsHeader>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={80}>
          <CategorySwitcher role="tablist" aria-label="دسته‌بندی پروژه‌ها">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              const count = getProjectsByCategory(category).length;

              return (
                <CategoryButton
                  key={category}
                  id={`projects-tab-${category}`}
                  role="tab"
                  aria-controls={`projects-panel-${category}`}
                  aria-selected={isActive}
                  isActive={isActive}
                  variant={isActive ? 'contained' : 'text'}
                  startIcon={
                    category === 'company' ? (
                      <BusinessCenterRoundedIcon />
                    ) : (
                      <WorkspacesRoundedIcon />
                    )
                  }
                  onClick={() => changeCategory(category)}
                >
                  <span>{projectCategoryLabels[category]}</span>
                  <small>{count.toLocaleString('fa-IR')}</small>
                </CategoryButton>
              );
            })}
          </CategorySwitcher>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={140}>
          <ProjectRail
            key={activeCategory}
            id={`projects-panel-${activeCategory}`}
            ref={railRef}
            role="tabpanel"
            aria-labelledby={`projects-tab-${activeCategory}`}
            aria-live="polite"
            aria-label={projectCategoryLabels[activeCategory]}
            onScroll={updateActiveProject}
          >
            {projects.map((project, index) => (
              <ProjectRailItem
                key={project.slug}
                ref={(element) => {
                  cardRefs.current[index] = element;
                }}
              >
                <ProjectCard asElement="article" tone={project.tone}>
                  <ProjectCardLink href={{ pathname: `/projects/${project.slug}` }}>
                    <ProjectVisual project={project} />
                    <ProjectCardBody>
                      <ProjectCardHeader>
                        <ProjectCategory>
                          {project.category === 'company' ? 'تجربه‌ی شرکتی' : 'پروژه‌ی مستقل'}
                        </ProjectCategory>
                        <ProjectIndex dir="ltr">{String(index + 1).padStart(2, '0')}</ProjectIndex>
                      </ProjectCardHeader>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectSummary>{project.shortDescription}</ProjectSummary>
                      <ProjectStack aria-label="تکنولوژی‌های پروژه">
                        {project.stack.slice(0, 3).map((item) => (
                          <ProjectStackItem key={item} dir="ltr">
                            {item}
                          </ProjectStackItem>
                        ))}
                      </ProjectStack>
                    </ProjectCardBody>
                    <ProjectCardFooter>
                      <ProjectDomain dir="ltr">
                        <LanguageRoundedIcon aria-hidden="true" />
                        {getDomain(project.liveUrl)}
                      </ProjectDomain>
                      <span>
                        مشاهده جزئیات
                        <ArrowOutwardRoundedIcon aria-hidden="true" />
                      </span>
                    </ProjectCardFooter>
                  </ProjectCardLink>
                </ProjectCard>
              </ProjectRailItem>
            ))}
          </ProjectRail>

          <RailMeta>
            <RailHint>
              <SwipeRoundedIcon aria-hidden="true" />
              برای دیدن پروژه‌ها بکشید
            </RailHint>

            <RailProgress aria-label={`پروژه ${activeIndex + 1} از ${projects.length}`}>
              <RailProgressValue dir="ltr">
                {String(activeIndex + 1).padStart(2, '0')}
                <span>/</span>
                {String(projects.length).padStart(2, '0')}
              </RailProgressValue>
              <RailProgressBar progress={projects.length ? (activeIndex + 1) / projects.length : 0}>
                <span />
              </RailProgressBar>
            </RailProgress>

            <RailNavigation dir="ltr">
              <RailRoundButton
                label="پروژه قبلی"
                disabled={activeIndex === 0}
                onClick={() => goToProject(activeIndex - 1)}
              >
                <ArrowBackRoundedIcon />
              </RailRoundButton>
              <RailRoundButton
                label="پروژه بعدی"
                disabled={activeIndex === projects.length - 1}
                onClick={() => goToProject(activeIndex + 1)}
              >
                <ArrowForwardRoundedIcon />
              </RailRoundButton>
            </RailNavigation>
          </RailMeta>
        </ScrollReveal>
      </ProjectsContainer>
    </ProjectsRoot>
  );
}
