import { ScrollReveal, type RevealVariant } from '@/components/common/ScrollReveal';

import {
  SectionCard,
  SectionContainer,
  SectionDescription,
  SectionEyebrow,
  SectionRoot,
  SectionTitle,
} from './styled';

interface PlaceholderSectionProps {
  id: string;
  eyebrow: string;
  title: string;
  sectionNumber: string;
  alternate?: boolean;
  revealVariant?: RevealVariant;
}

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  sectionNumber,
  alternate = false,
  revealVariant = alternate ? 'start' : 'end',
}: PlaceholderSectionProps) {
  return (
    <SectionRoot id={id} alternate={alternate}>
      <SectionContainer maxWidth="lg">
        <ScrollReveal variant={revealVariant}>
          <SectionCard tone="primary" sectionNumber={sectionNumber}>
            <SectionEyebrow variant="overline">{eyebrow}</SectionEyebrow>
            <SectionTitle>{title}</SectionTitle>
            <SectionDescription>
              محتوای اصلی این سکشن در مرحله بعد با اطلاعات واقعی، طراحی اختصاصی و انیمیشن‌های متناسب
              تکمیل می‌شود.
            </SectionDescription>
          </SectionCard>
        </ScrollReveal>
      </SectionContainer>
    </SectionRoot>
  );
}
