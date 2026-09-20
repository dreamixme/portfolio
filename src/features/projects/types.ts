export type ProjectCategory = 'company' | 'freelance';

export type ProjectTone = 'primary' | 'secondary' | 'purple' | 'success';

export type ProjectVisualVariant = 'dashboard' | 'mobile' | 'commerce' | 'platform';

export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  latinTitle: string;
  category: ProjectCategory;
  shortDescription: string;
  overview: string[];
  challenge?: string;
  solution?: string;
  outcome?: string;
  companyOrClient?: string;
  role?: string;
  period?: string;
  liveUrl?: string;
  repositoryUrl?: string;
  coverImage?: string;
  gallery?: ProjectGalleryItem[];
  stack: string[];
  services: string[];
  tone: ProjectTone;
  visualVariant: ProjectVisualVariant;
  featured?: boolean;
  isDraft?: boolean;
}
