import { env } from '@/config/env';

export const siteConfig = {
  name: 'Peyman',
  title: 'Peyman | Software Engineer',
  description:
    'پورتفولیوی پیمان؛ مهندس نرم‌افزار و توسعه‌دهنده وب با تمرکز بر تجربه‌های سریع و دقیق.',
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: 'fa_IR',
  language: 'fa',
} as const;
