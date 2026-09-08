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
}

export function PlaceholderSection({
  id,
  eyebrow,
  title,
  sectionNumber,
  alternate = false,
}: PlaceholderSectionProps) {
  return (
    <SectionRoot id={id} alternate={alternate}>
      <SectionContainer maxWidth="lg">
        <SectionCard sectionNumber={sectionNumber}>
          <SectionEyebrow variant="overline">{eyebrow}</SectionEyebrow>
          <SectionTitle>{title}</SectionTitle>
          <SectionDescription>
            محتوای اصلی این سکشن در مرحله بعد با اطلاعات واقعی، طراحی اختصاصی و انیمیشن‌های متناسب
            تکمیل می‌شود.
          </SectionDescription>
        </SectionCard>
      </SectionContainer>
    </SectionRoot>
  );
}
