import { AboutSection } from '@/features/landing/components/AboutSection';
import { ContactSection } from '@/features/landing/components/ContactSection';
import { EducationSection } from '@/features/landing/components/EducationSection';
import { ExperienceSection } from '@/features/landing/components/ExperienceSection';
import { HeroSection } from '@/features/landing/components/HeroSection';
import { ProjectsSection } from '@/features/landing/components/ProjectsSection';
import { ServicesSection } from '@/features/landing/components/ServicesSection';
import { SkillsSection } from '@/features/landing/components/SkillsSection';
import { StatsSection } from '@/features/landing/components/StatsSection';
import { LandingMain } from '@/features/landing/styled';

export default function HomePage() {
  return (
    <LandingMain>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </LandingMain>
  );
}
