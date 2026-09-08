import { env } from '@/config/env';

export const siteConfig = {
  name: 'Peyman',
  title: 'Peyman | Software Engineer',
  description:
    'Personal portfolio of Peyman, a software engineer building fast, accessible and polished web experiences.',
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: 'en_US',
  language: 'en',
  themeColor: '#2563EB',
} as const;
