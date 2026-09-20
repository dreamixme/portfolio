import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { ProjectDetail } from '@/features/projects/components/ProjectDetail';
import {
  getNextProject,
  getProjectBySlug,
  portfolioProjects,
  projectCategoryLabels,
} from '@/features/projects/data/projects';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const canonicalPath = `/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      url: canonicalPath,
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
      siteName: siteConfig.name,
      ...(project.coverImage
        ? { images: [{ url: project.coverImage, alt: `نمایی از پروژه ${project.title}` }] }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} | ${siteConfig.name}`,
      description: project.shortDescription,
      ...(project.coverImage ? { images: [project.coverImage] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);
  const projectUrl = new URL(`/projects/${project.slug}`, siteConfig.url).toString();
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    alternateName: project.latinTitle,
    description: project.shortDescription,
    url: projectUrl,
    genre: projectCategoryLabels[project.category],
    keywords: project.stack.join(', '),
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    ...(project.liveUrl ? { sameAs: project.liveUrl } : {}),
    ...(project.coverImage
      ? { image: new URL(project.coverImage, siteConfig.url).toString() }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <ProjectDetail project={project} nextProject={nextProject} />
    </>
  );
}
