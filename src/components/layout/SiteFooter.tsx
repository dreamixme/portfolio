'use client';

import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import Image from 'next/image';

import { ScrollReveal } from '@/components/common/ScrollReveal';
import { headerNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

import {
  FooterAvailability,
  FooterBackButton,
  FooterBottom,
  FooterBrandName,
  FooterCodeLine,
  FooterColumnLabel,
  FooterContact,
  FooterContactEmail,
  FooterContactLink,
  FooterContactList,
  FooterContainer,
  FooterCopyright,
  FooterDescription,
  FooterGrid,
  FooterHeadline,
  FooterHeadlineAccent,
  FooterHero,
  FooterHeroAction,
  FooterHeroCopy,
  FooterIdentity,
  FooterIdentityHeader,
  FooterLead,
  FooterLinkButton,
  FooterLinks,
  FooterLocation,
  FooterLogo,
  FooterNavigation,
  FooterPrimaryButton,
  FooterResponseNote,
  FooterRoot,
} from './SiteFooter.styled';

export function SiteFooter() {
  return (
    <FooterRoot>
      <FooterContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <FooterHero>
            <FooterHeroCopy>
              <FooterAvailability>
                <span aria-hidden="true" />
                AVAILABLE FOR SELECT PROJECTS
              </FooterAvailability>
              <FooterHeadline>
                برای ساختن محصول بعدی، <FooterHeadlineAccent>آماده‌ام.</FooterHeadlineAccent>
              </FooterHeadline>
              <FooterLead>
                اگر ایده‌ای داری که به طراحی دقیق، توسعه‌ی تمیز و یک تجربه‌ی کاربری قابل اتکا نیاز
                دارد، از همین‌جا گفتگو را شروع کنیم.
              </FooterLead>
            </FooterHeroCopy>

            <FooterHeroAction>
              <FooterPrimaryButton
                href={`mailto:${siteConfig.contact.email}`}
                text="شروع یک گفتگو"
                size="large"
                endIcon={<ArrowOutwardRoundedIcon />}
              />
              <FooterResponseNote>معمولاً کمتر از یک روز پاسخ می‌دهم.</FooterResponseNote>
            </FooterHeroAction>
          </FooterHero>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={100}>
          <FooterGrid>
            <FooterIdentity>
              <FooterIdentityHeader>
                <FooterLogo>
                  <Image src="/peyman-logo.svg" alt="لوگوی پیمان" width={46} height={46} />
                </FooterLogo>
                <div>
                  <FooterBrandName>پیمان حسینی</FooterBrandName>
                  <span dir="ltr">SENIOR FRONTEND ENGINEER</span>
                </div>
              </FooterIdentityHeader>
              <FooterDescription>
                توسعه‌دهنده‌ی محصول برای وب و موبایل؛ با تمرکز روی رابط‌های سریع، مقیاس‌پذیر و
                تجربه‌هایی که ساده و دقیق کار می‌کنند.
              </FooterDescription>
              <FooterLocation>
                <LocationOnRoundedIcon aria-hidden="true" />
                {siteConfig.contact.location}
              </FooterLocation>
            </FooterIdentity>

            <FooterNavigation aria-label="دسترسی سریع فوتر">
              <FooterColumnLabel dir="ltr">EXPLORE</FooterColumnLabel>
              <FooterLinks>
                {headerNavigation.map((item, index) => (
                  <FooterLinkButton
                    key={item.href}
                    href={item.href}
                    variant="text"
                    color="inherit"
                    size="small"
                  >
                    <small dir="ltr">{String(index + 1).padStart(2, '0')}</small>
                    {item.label}
                  </FooterLinkButton>
                ))}
              </FooterLinks>
            </FooterNavigation>

            <FooterContact>
              <FooterColumnLabel dir="ltr">LET&apos;S CONNECT</FooterColumnLabel>
              <FooterContactEmail href={`mailto:${siteConfig.contact.email}`} dir="ltr">
                {siteConfig.contact.email}
                <ArrowOutwardRoundedIcon aria-hidden="true" />
              </FooterContactEmail>
              <FooterContactList>
                <FooterContactLink href={`tel:${siteConfig.contact.phone.value}`} dir="ltr">
                  <PhoneInTalkRoundedIcon aria-hidden="true" />
                  {siteConfig.contact.phone.display}
                </FooterContactLink>
                <FooterContactLink
                  href={siteConfig.contact.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                >
                  <LinkedInIcon aria-hidden="true" />
                  LinkedIn
                </FooterContactLink>
              </FooterContactList>
            </FooterContact>
          </FooterGrid>
        </ScrollReveal>

        <FooterBottom>
          <FooterCopyright>
            <span aria-hidden="true" />© {new Date().getFullYear()} Peyman Hosseini
          </FooterCopyright>
          <FooterCodeLine dir="ltr">
            {'<footer> Designed & built with care </footer>'}
          </FooterCodeLine>
          <FooterBackButton
            href="/#hero"
            variant="text"
            color="inherit"
            startIcon={<ArrowUpwardRoundedIcon />}
          >
            بازگشت به بالا
          </FooterBackButton>
        </FooterBottom>
      </FooterContainer>
    </FooterRoot>
  );
}
