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
import packageJson from '../../../package.json';

import {
  FooterBackButton,
  FooterBlocks,
  FooterBottom,
  FooterBrandName,
  FooterCodeLine,
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
  FooterRoot,
} from './SiteFooter.styled';
import { Stack, Typography } from '@mui/material';

export function SiteFooter() {
  return (
    <FooterRoot>
      <FooterContainer maxWidth="xl">
        <FooterBlocks>
          <Stack sx={{ flex: 1, direction: 'rtl' }}>
            <ScrollReveal variant="up">
              <FooterHero>
                <FooterHeroCopy>
                  {/*<FooterAvailability>*/}
                  {/*  <span aria-hidden="true" />*/}
                  {/*  AVAILABLE FOR SELECT PROJECTS*/}
                  {/*</FooterAvailability>*/}
                  <FooterHeadline>
                    برای ساختن محصول بعدی، <FooterHeadlineAccent>آماده‌ام!</FooterHeadlineAccent>
                  </FooterHeadline>
                  <FooterLead>
                    اگر ایده‌ای داری که به طراحی دقیق، توسعه‌ی تمیز و یک تجربه‌ی کاربری قابل اتکا
                    نیاز دارد، از همین‌جا گفتگو را شروع کنیم.
                  </FooterLead>
                  <FooterHeroAction>
                    <FooterPrimaryButton
                      href={`mailto:${siteConfig.contact.email}`}
                      text="شروع یک گفتگو"
                      size="large"
                      endIcon={<ArrowOutwardRoundedIcon />}
                    />
                    {/*<FooterResponseNote>معمولاً کمتر از یک روز پاسخ می‌دهم.</FooterResponseNote>*/}
                  </FooterHeroAction>
                </FooterHeroCopy>
              </FooterHero>
            </ScrollReveal>
          </Stack>
          <Stack sx={{ flex: 1, direction: 'rtl' }}>
            <ScrollReveal variant="up" delay={100}>
              <FooterGrid>
                <FooterIdentity>
                  <FooterIdentityHeader>
                    <FooterLogo>
                      <Image src="/p-hosseini.svg" alt="لوگوی پیمان" width={46} height={46} />
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
                  <FooterContact>
                    {/*<FooterColumnLabel dir="ltr">LET&apos;S CONNECT</FooterColumnLabel>*/}
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
                </FooterIdentity>
              </FooterGrid>
            </ScrollReveal>
          </Stack>
        </FooterBlocks>
        <FooterBottom>
          <FooterNavigation aria-label="دسترسی سریع فوتر">
            <FooterLinks>
              {headerNavigation.map((item, index) => (
                <FooterLinkButton
                  key={item.href}
                  href={item.href}
                  variant="text"
                  color="inherit"
                  size="small"
                >
                  {/*<small dir="ltr">{String(index + 1).padStart(2, '0')}</small>*/}
                  {item.label}
                </FooterLinkButton>
              ))}
            </FooterLinks>
          </FooterNavigation>
          <FooterCopyright>
            <span aria-hidden="true" />© {new Date().getFullYear()} Peyman Hosseini -
            <Typography component="p">{`v ${packageJson.version}`}</Typography>
          </FooterCopyright>

          <FooterCodeLine dir="ltr"></FooterCodeLine>
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
