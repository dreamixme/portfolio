import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { headerNavigation } from '@/config/navigation';

import {
  FooterBackButton,
  FooterBottom,
  FooterBrandColumn,
  FooterBrandName,
  FooterBrandRow,
  FooterCallToAction,
  FooterContainer,
  FooterCredit,
  FooterDescription,
  FooterGlassPanel,
  FooterGrid,
  FooterLinkButton,
  FooterLinksGrid,
  FooterLinksTitle,
  FooterLogoFrame,
  FooterPrimaryButton,
  FooterRoot,
  FooterSeparator,
} from './SiteFooter.styled';

export function SiteFooter() {
  return (
    <FooterRoot>
      <FooterContainer maxWidth="xl">
        <FooterGlassPanel>
          <FooterGrid>
            <FooterBrandColumn>
              <FooterBrandRow>
                <FooterLogoFrame>
                  <Image src="/peyman-logo.svg" alt="لوگوی پیمان" width={44} height={44} />
                </FooterLogoFrame>
                <div>
                  <FooterBrandName variant="h6">پیمان</FooterBrandName>
                  <Typography variant="caption" color="text.secondary">
                    مهندس نرم‌افزار و توسعه‌دهنده وب
                  </Typography>
                </div>
              </FooterBrandRow>
              <FooterDescription>
                این پورتفولیو قدم‌به‌قدم در حال تکمیل است؛ جایی برای نمایش تجربه‌ها، مهارت‌ها و
                محصولاتی که با دقت ساخته شده‌اند.
              </FooterDescription>
            </FooterBrandColumn>

            <div>
              <FooterLinksTitle variant="subtitle2">دسترسی سریع</FooterLinksTitle>
              <FooterLinksGrid>
                {headerNavigation.map((item) => (
                  <FooterLinkButton
                    key={item.href}
                    href={item.href}
                    variant="text"
                    color="inherit"
                    size="small"
                  >
                    {item.label}
                  </FooterLinkButton>
                ))}
              </FooterLinksGrid>
            </div>

            <FooterCallToAction>
              <Typography variant="subtitle2">آماده‌ی یک همکاری تازه‌ام</Typography>
              <FooterPrimaryButton
                href="#contact"
                text="بیایید گفتگو کنیم"
                endIcon={<CodeRoundedIcon />}
              />
              <FooterBackButton
                href="#hero"
                variant="text"
                color="inherit"
                startIcon={<ArrowUpwardRoundedIcon />}
              >
                بازگشت به بالا
              </FooterBackButton>
            </FooterCallToAction>
          </FooterGrid>

          <FooterSeparator />

          <FooterBottom>
            <Typography variant="caption" color="text.secondary">
              © {new Date().getFullYear()} پیمان. تمامی حقوق محفوظ است.
            </Typography>
            <FooterCredit variant="caption">
              طراحی و توسعه با
              <CodeRoundedIcon fontSize="inherit" aria-hidden="true" />
              Next.js
            </FooterCredit>
          </FooterBottom>
        </FooterGlassPanel>
      </FooterContainer>
    </FooterRoot>
  );
}
