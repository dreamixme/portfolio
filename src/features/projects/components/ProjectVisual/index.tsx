'use client';

import type { PortfolioProject } from '@/features/projects/types';

import {
  BrowserContent,
  BrowserDots,
  BrowserLine,
  BrowserMain,
  BrowserMetric,
  BrowserMock,
  BrowserSidebar,
  BrowserToolbar,
  CodeMark,
  CoverImage,
  ProjectVisualRoot,
  VisualBadge,
} from './styled';

interface ProjectVisualProps {
  project: PortfolioProject;
  mode?: 'card' | 'hero';
  priority?: boolean;
}

export function ProjectVisual({ project, mode = 'card', priority = false }: ProjectVisualProps) {
  return (
    <ProjectVisualRoot
      tone={project.tone}
      visualVariant={project.visualVariant}
      mode={mode}
      data-visual-variant={project.visualVariant}
    >
      {project.coverImage ? (
        <CoverImage
          src={project.coverImage}
          alt={`نمایی از پروژه ${project.title}`}
          fill
          priority={priority}
          sizes={
            mode === 'hero' ? '(max-width: 900px) 100vw, 1200px' : '(max-width: 600px) 86vw, 520px'
          }
        />
      ) : (
        <BrowserMock aria-hidden="true">
          <BrowserToolbar>
            <BrowserDots>
              <span />
              <span />
              <span />
            </BrowserDots>
            <BrowserLine />
          </BrowserToolbar>
          <BrowserContent>
            <BrowserSidebar>
              <span />
              <span />
              <span />
              <span />
            </BrowserSidebar>
            <BrowserMain>
              <span />
              <div>
                <BrowserMetric />
                <BrowserMetric />
                <BrowserMetric />
              </div>
              <span />
              <span />
            </BrowserMain>
          </BrowserContent>
        </BrowserMock>
      )}

      <VisualBadge dir="ltr">{project.latinTitle}</VisualBadge>
      {!project.coverImage && <CodeMark aria-hidden="true">{'</>'}</CodeMark>}
    </ProjectVisualRoot>
  );
}
