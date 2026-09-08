'use client';

import { useState } from 'react';

import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Image from 'next/image';

import { MuiDrawer } from '@/components/Shared/MuiDrawer';
import { headerNavigation } from '@/config/navigation';
import { useThemeMode } from '@/providers/ThemeProviders';

import {
  DesktopNavigation,
  HeaderActions,
  HeaderBrandCopy,
  HeaderBrandLink,
  HeaderBrandName,
  HeaderBrandRole,
  HeaderCallToAction,
  HeaderContainer,
  HeaderInner,
  HeaderLogoFrame,
  HeaderNavigationButton,
  HeaderRoot,
  MobileCallToAction,
  MobileMenuButton,
  MobileNavigation,
  MobileNavigationButton,
  ThemeToggleButton,
} from './SiteHeader.styled';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { activeMode, toggleMode } = useThemeMode();
  const isDark = activeMode === 'dark';

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <HeaderRoot>
      <HeaderContainer maxWidth="xl">
        <HeaderInner>
          <HeaderBrandLink href="#hero" aria-label="صفحه اصلی پیمان">
            <HeaderLogoFrame>
              <Image src="/peyman-logo.svg" alt="" width={34} height={34} priority />
            </HeaderLogoFrame>

            <HeaderBrandCopy>
              <HeaderBrandName>PEYMAN</HeaderBrandName>
              <HeaderBrandRole>Software Engineer</HeaderBrandRole>
            </HeaderBrandCopy>
          </HeaderBrandLink>

          <DesktopNavigation aria-label="ناوبری اصلی">
            {headerNavigation.map((item) => (
              <HeaderNavigationButton
                key={item.href}
                href={item.href}
                variant="text"
                color="inherit"
                size="small"
              >
                {item.label}
              </HeaderNavigationButton>
            ))}
          </DesktopNavigation>

          <HeaderActions>
            <ThemeToggleButton
              label={isDark ? 'فعال‌کردن تم روشن' : 'فعال‌کردن تم تیره'}
              onClick={toggleMode}
            >
              {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </ThemeToggleButton>

            <HeaderCallToAction href="#contact" text="شروع همکاری" size="small" />

            <MobileMenuButton label="بازکردن منو" onClick={() => setMobileMenuOpen(true)}>
              <MenuRoundedIcon />
            </MobileMenuButton>
          </HeaderActions>
        </HeaderInner>
      </HeaderContainer>

      <MuiDrawer anchor="right" open={mobileMenuOpen} onClose={closeMobileMenu} title="دسترسی سریع">
        <MobileNavigation aria-label="ناوبری موبایل">
          {headerNavigation.map((item) => (
            <MobileNavigationButton
              key={item.href}
              href={item.href}
              variant="text"
              color="inherit"
              fullWidth
              onClick={closeMobileMenu}
            >
              {item.label}
            </MobileNavigationButton>
          ))}
          <MobileCallToAction href="#contact" text="شروع همکاری" onClick={closeMobileMenu} />
        </MobileNavigation>
      </MuiDrawer>
    </HeaderRoot>
  );
}
