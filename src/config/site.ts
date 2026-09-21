import { env } from '@/config/env';

export const siteConfig = {
  name: 'Peyman',
  title: 'Peyman | Software Engineer',
  description:
    'پورتفولیوی پیمان؛ مهندس نرم‌افزار و توسعه‌دهنده وب با تمرکز بر تجربه‌های سریع و دقیق.',
  url: env.NEXT_PUBLIC_SITE_URL,
  locale: 'fa_IR',
  language: 'fa',
  contact: {
    email: 'info@peymanhosseini.ir',
    phone: {
      display: '+98 904 422 4818',
      value: '+989044224818',
    },
    location: 'تهران، ایران',
    linkedIn: 'https://www.linkedin.com/in/peyman-hosseini-511b2bb2',
  },
} as const;
