import type { PortfolioProject, ProjectCategory } from '@/features/projects/types';

export const projectCategoryLabels: Record<ProjectCategory, string> = {
  company: 'پروژه‌های شرکتی',
  freelance: 'پروژه‌های مستقل',
};

// این رکوردها اسکلت اولیه‌ی ویترین هستند و با اطلاعات نهایی هر پروژه تکمیل می‌شوند.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'ewano-pwa',
    title: 'اوانو PWA',
    latinTitle: 'EWANO PWA',
    category: 'company',
    shortDescription:
      'یک تجربه‌ی وب اپلیکیشن برای محصول ایوانو؛ آماده برای تکمیل با جزئیات نقش، چالش‌ها و خروجی نهایی.',
    overview: [
      'این صفحه فعلاً ساختار اولیه‌ی مطالعه‌ی موردی پروژه را نمایش می‌دهد. شرح دقیق مسئله، مسئولیت‌ها، تصمیم‌های فنی و نتیجه‌ها پس از دریافت اطلاعات کامل پروژه جایگزین می‌شود.',
    ],
    companyOrClient: 'پروژه‌ی شرکتی',
    role: 'Frontend Developer',
    liveUrl: 'https://pwa.ewano.app/',
    stack: ['React', 'TypeScript', 'PWA'],
    services: ['توسعه فرانت‌اند', 'رابط واکنش‌گرا'],
    tone: 'primary',
    visualVariant: 'mobile',
    featured: true,
    isDraft: true,
  },
  {
    slug: 'mci-pwa',
    title: 'همراه من PWA',
    latinTitle: 'MCI PWA',
    category: 'company',
    shortDescription:
      'بخشی از تجربه‌ی حرفه‌ای در توسعه‌ی یک محصول پرترافیک؛ جزئیات فنی و دستاوردها به‌زودی افزوده می‌شوند.',
    overview: [
      'قالب این صفحه برای روایت کامل پروژه، از زمینه‌ی کسب‌وکار و نقش فردی تا راهکار فنی و نتیجه‌های قابل اندازه‌گیری آماده شده است.',
    ],
    companyOrClient: 'پروژه‌ی شرکتی',
    role: 'Frontend Developer',
    liveUrl: 'https://pwa.mci.ir/',
    stack: ['React', 'JavaScript', 'PWA'],
    services: ['توسعه محصول', 'بهینه‌سازی تجربه کاربر'],
    tone: 'secondary',
    visualVariant: 'dashboard',
    isDraft: true,
  },
  {
    slug: 'ewano-credit-landing',
    title: 'لندینگ اعتبار عمومی',
    latinTitle: 'EWANO Landing',
    category: 'company',
    shortDescription:
      'یک تجربه‌ی وب اپلیکیشن برای محصول ایوانو؛ آماده برای تکمیل با جزئیات نقش، چالش‌ها و خروجی نهایی.',
    overview: [
      'این صفحه فعلاً ساختار اولیه‌ی مطالعه‌ی موردی پروژه را نمایش می‌دهد. شرح دقیق مسئله، مسئولیت‌ها، تصمیم‌های فنی و نتیجه‌ها پس از دریافت اطلاعات کامل پروژه جایگزین می‌شود.',
    ],
    companyOrClient: 'پروژه‌ی شرکتی',
    role: 'Frontend Developer',
    liveUrl: 'https://ewano.app/public-credit/',
    stack: ['NextJs', 'TypeScript', 'PWA'],
    services: ['اعتبار اوانو'],
    tone: 'primary',
    visualVariant: 'dashboard',
    featured: true,
    isDraft: true,
  },
  {
    slug: 'my-tci',
    title: 'مخابرات من',
    latinTitle: 'MY TCI',
    category: 'company',
    shortDescription:
      'محصولی در مقیاس سازمانی که صفحه‌ی مطالعه‌ی موردی آن برای دریافت داستان کامل پروژه آماده است.',
    overview: [
      'در نسخه‌ی نهایی، این بخش مسیر مسئله تا راه‌حل، همکاری تیمی، معماری رابط و اثر خروجی را با تصویرهای واقعی روایت می‌کند.',
    ],
    companyOrClient: 'پروژه‌ی شرکتی',
    role: 'Frontend Developer',
    liveUrl: 'https://my.tci.ir/',
    stack: ['React', 'REST API', 'Responsive UI'],
    services: ['پیاده‌سازی رابط', 'اتصال سرویس‌ها'],
    tone: 'purple',
    visualVariant: 'platform',
    isDraft: true,
  },
  {
    slug: 'tabarestan',
    title: 'طبرستان',
    latinTitle: 'TABARESTAN',
    category: 'freelance',
    shortDescription:
      'یک پروژه‌ی مستقل با تمرکز بر حضور حرفه‌ای در وب؛ آماده برای اضافه‌شدن اسکرین‌شات‌ها و روایت کامل.',
    overview: [
      'این مطالعه‌ی موردی پس از دریافت داده‌های نهایی، هدف پروژه، انتخاب‌های طراحی و توسعه و نتیجه‌ی همکاری را به شکل تصویری نمایش می‌دهد.',
    ],
    companyOrClient: 'پروژه‌ی مستقل',
    role: 'Frontend Developer',
    stack: ['Next.js', 'TypeScript', 'Responsive UI'],
    services: ['طراحی رابط', 'توسعه وب'],
    tone: 'success',
    visualVariant: 'commerce',
    featured: true,
    isDraft: true,
  },
  {
    slug: 'alovilaa',
    title: 'الوویلا',
    latinTitle: 'ALOVILAA',
    category: 'freelance',
    shortDescription:
      'تجربه‌ای مستقل در ساخت یک محصول وب؛ جزئیات محصول، نقش و تصاویر واقعی در مرحله‌ی بعد تکمیل می‌شود.',
    overview: [
      'ساختار صفحه آماده است تا مسئله‌ی اصلی محصول، مسیر پیاده‌سازی، قابلیت‌های مهم و نتیجه‌های پروژه را منظم و قابل مرور نمایش دهد.',
    ],
    companyOrClient: 'پروژه‌ی مستقل',
    role: 'Frontend Developer',
    liveUrl: 'https://alovilaa.ir/',
    stack: ['React', 'Map', 'REST API'],
    services: ['توسعه محصول', 'رابط تعاملی'],
    tone: 'secondary',
    visualVariant: 'platform',
    isDraft: true,
  },
  {
    slug: 'baham-tech',
    title: 'باهم‌تک',
    latinTitle: 'BAHAM TECH',
    category: 'freelance',
    shortDescription:
      'یک پروژه‌ی وب مستقل که برای ارائه‌ی عمیق‌تر فرایند، تکنولوژی‌ها و خروجی بصری آماده شده است.',
    overview: [
      'در نسخه‌ی کامل، این صفحه با توضیح مسئله، تصمیم‌های کلیدی، اسکرین‌شات‌های محصول و لینک‌های مرتبط تکمیل خواهد شد.',
    ],
    companyOrClient: 'پروژه‌ی مستقل',
    role: 'Frontend Developer',
    liveUrl: 'https://bahamtech.com/',
    stack: ['Next.js', 'TypeScript', 'UI Engineering'],
    services: ['توسعه فرانت‌اند', 'طراحی سیستم رابط'],
    tone: 'primary',
    visualVariant: 'dashboard',
    isDraft: true,
  },
];

export function getProjectsByCategory(category: ProjectCategory) {
  return portfolioProjects.filter((project) => project.category === category);
}

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}

export function getNextProject(currentSlug: string) {
  const currentIndex = portfolioProjects.findIndex((project) => project.slug === currentSlug);

  if (currentIndex < 0) {
    return portfolioProjects[0];
  }

  return portfolioProjects[(currentIndex + 1) % portfolioProjects.length];
}
