'use client';

import { type ReactNode } from 'react';

import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { siteConfig } from '@/config/site';

import {
  AvailabilityBadge,
  AvailabilityDot,
  ContactCardFrame,
  ContactCardHeader,
  ContactCodeStamp,
  ContactContainer,
  ContactEyebrow,
  ContactHeader,
  ContactInfoDescription,
  ContactInfoPanel,
  ContactInfoTitle,
  ContactLead,
  ContactLocation,
  ContactMethodArrow,
  ContactMethodIcon,
  ContactMethodLabel,
  ContactMethodLink,
  ContactMethods,
  ContactMethodText,
  ContactMethodValue,
  ContactRoot,
  ContactTitle,
  ContactTitleAccent,
  LocationText,
} from './styled';

type ContactTone = 'primary' | 'secondary' | 'purple';

interface ContactMethod {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  tone: ContactTone;
  external?: boolean;
}

const contactMethods: ContactMethod[] = [
  {
    label: 'ایمیل',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    icon: <EmailRoundedIcon />,
    tone: 'primary',
  },
  {
    label: 'تماس مستقیم',
    value: siteConfig.contact.phone.display,
    href: `tel:${siteConfig.contact.phone.value}`,
    icon: <PhoneInTalkRoundedIcon />,
    tone: 'secondary',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/peyman-hosseini-511b2bb2',
    href: siteConfig.contact.linkedIn,
    icon: <LinkedInIcon />,
    tone: 'purple',
    external: true,
  },
];

export function ContactSection() {
  return (
    <ContactRoot id="contact">
      <ContactContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <ContactHeader>
            <ContactEyebrow>LET&apos;S TALK</ContactEyebrow>
            <ContactTitle>
              ایده‌ای داری؟ <ContactTitleAccent>بیایید درباره‌اش حرف بزنیم.</ContactTitleAccent>
            </ContactTitle>
            <ContactLead>
              برای همکاری روی محصول تازه، توسعه‌ی رابط کاربری یا بهبود یک تجربه‌ی موجود، از یکی از
              راه‌های زیر با من در ارتباط باش.
            </ContactLead>
          </ContactHeader>
        </ScrollReveal>

        <ContactCardFrame>
          <ScrollReveal variant="scale" delay={120}>
            <ContactInfoPanel tone="secondary">
              <ContactCardHeader>
                <div>
                  <AvailabilityBadge>
                    <AvailabilityDot />
                    آماده‌ی گفت‌وگو درباره فرصت‌های تازه
                  </AvailabilityBadge>
                  <ContactInfoTitle>یک گفت‌وگوی خوب، شروع یک محصول خوب است.</ContactInfoTitle>
                  <ContactInfoDescription>
                    راه ارتباطی مناسب خودت را انتخاب کن؛ خوشحال می‌شوم درباره‌ی ایده، محصول یا فرصت
                    همکاری تازه بیشتر بدانم.
                  </ContactInfoDescription>
                </div>
                <ContactCodeStamp aria-hidden="true">&lt;hello /&gt;</ContactCodeStamp>
              </ContactCardHeader>

              <ContactMethods>
                {contactMethods.map((method) => (
                  <ContactMethodLink
                    key={method.label}
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noreferrer' : undefined}
                    aria-label={`${method.label}: ${method.value}`}
                  >
                    <ContactMethodIcon tone={method.tone} aria-hidden="true">
                      {method.icon}
                    </ContactMethodIcon>
                    <ContactMethodText>
                      <ContactMethodLabel>{method.label}</ContactMethodLabel>
                      <ContactMethodValue dir="ltr">{method.value}</ContactMethodValue>
                    </ContactMethodText>
                    <ContactMethodArrow aria-hidden="true">
                      <ArrowOutwardRoundedIcon />
                    </ContactMethodArrow>
                  </ContactMethodLink>
                ))}
              </ContactMethods>

              <ContactLocation>
                <LocationText>
                  <LocationOnRoundedIcon aria-hidden="true" />
                  {siteConfig.contact.location}
                </LocationText>
                <span>Frontend Engineer • Web &amp; Mobile</span>
              </ContactLocation>
            </ContactInfoPanel>
          </ScrollReveal>
        </ContactCardFrame>
      </ContactContainer>
    </ContactRoot>
  );
}
