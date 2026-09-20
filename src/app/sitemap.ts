import type { MetadataRoute } from 'next';

import { siteConfig } from '@/config/site';
import { portfolioProjects } from '@/features/projects/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...portfolioProjects.map((project) => ({
      url: new URL(`/projects/${project.slug}`, siteConfig.url).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.8 : 0.7,
    })),
  ];
}
