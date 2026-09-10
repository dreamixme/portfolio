import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';

import { ScrollReveal } from '@/components/common/ScrollReveal';

import {
  ArchitectureDiagram,
  ArchitectureNode,
  BrowserBody,
  BrowserCard,
  BrowserCardGrid,
  BrowserChart,
  BrowserContent,
  BrowserNavigation,
  BrowserSidebar,
  BrowserToolbar,
  BrowserWindow,
  CompactServiceCard,
  CompactServiceDescription,
  CompactServiceIcon,
  CompactServiceNumber,
  CompactServiceTitle,
  IntegrationDiagram,
  IntegrationHub,
  MobilePreview,
  MobileServiceCard,
  PhoneFrame,
  PhoneNotch,
  PhoneScreen,
  PrimaryServiceCard,
  PrimaryServiceContent,
  PrimaryServiceDescription,
  PrimaryServiceHeader,
  PrimaryServiceIcon,
  PrimaryServiceKicker,
  PrimaryServiceTitle,
  ProcessConnector,
  ProcessContent,
  ProcessItem,
  ProcessList,
  ProcessNumber,
  ProcessPanel,
  ProcessTitle,
  ServiceCapabilities,
  ServiceCapability,
  ServiceCardHeader,
  ServiceDescription,
  ServiceIcon,
  ServiceNumber,
  ServicesActionButton,
  ServicesAside,
  ServicesContainer,
  ServicesEyebrow,
  ServicesGrid,
  ServicesHeader,
  ServicesHeaderContent,
  ServicesRoot,
  ServicesSideColumn,
  ServicesTitle,
  ServicesTitleAccent,
  ServiceTitle,
  SideServicesGrid,
} from './styled';

const processSteps = [
  {
    number: '01',
    title: 'شناخت مسئله',
    text: 'نیاز محصول، کاربر و محدودیت‌های فنی را روشن می‌کنیم.',
  },
  {
    number: '02',
    title: 'طراحی راهکار',
    text: 'ساختار رابط، معماری و مسیر اجرای مناسب مشخص می‌شود.',
  },
  {
    number: '03',
    title: 'توسعه دقیق',
    text: 'محصول مرحله‌به‌مرحله با تمرکز روی کیفیت ساخته می‌شود.',
  },
  {
    number: '04',
    title: 'تحویل و بهبود',
    text: 'خروجی نهایی بررسی، منتشر و برای ادامه مسیر آماده می‌شود.',
  },
] as const;

export function ServicesSection() {
  return (
    <ServicesRoot id="services">
      <ServicesContainer maxWidth="xl">
        <ScrollReveal variant="up">
          <ServicesHeader>
            <ServicesHeaderContent>
              <ServicesEyebrow>SERVICES</ServicesEyebrow>
              <ServicesTitle>
                از یک مسئله‌ی واقعی تا{' '}
                <ServicesTitleAccent>محصولی قابل استفاده.</ServicesTitleAccent>
              </ServicesTitle>
            </ServicesHeaderContent>
            <ServicesAside>
              <ServiceDescription>
                تجربه‌ی فنی و محصولی برای ساخت، بازطراحی و توسعه‌ی رابط‌هایی که سریع، واکنش‌گرا و
                آماده‌ی رشد باشند.
              </ServiceDescription>
              <ServicesActionButton
                href="#contact"
                text="شروع یک همکاری"
                endIcon={<ArrowOutwardRoundedIcon />}
              />
            </ServicesAside>
          </ServicesHeader>
        </ScrollReveal>

        <ServicesGrid>
          <ScrollReveal variant="start">
            <PrimaryServiceCard asElement="article" tone="primary">
              <PrimaryServiceContent>
                <PrimaryServiceHeader>
                  <PrimaryServiceIcon aria-hidden="true">
                    <CodeRoundedIcon />
                  </PrimaryServiceIcon>
                  <PrimaryServiceKicker dir="ltr">01 / WEB PRODUCT</PrimaryServiceKicker>
                </PrimaryServiceHeader>
                <PrimaryServiceTitle>توسعه‌ی محصول وب</PrimaryServiceTitle>
                <PrimaryServiceDescription>
                  ساخت تجربه‌های سریع و واکنش‌گرا با React، Next.js و TypeScript؛ از پیاده‌سازی رابط
                  تا آماده‌سازی یک محصول قابل توسعه و انتشار.
                </PrimaryServiceDescription>
                <ServiceCapabilities aria-label="تکنولوژی‌های اصلی توسعه وب">
                  <ServiceCapability dir="ltr">React</ServiceCapability>
                  <ServiceCapability dir="ltr">Next.js</ServiceCapability>
                  <ServiceCapability dir="ltr">TypeScript</ServiceCapability>
                  <ServiceCapability dir="ltr">Responsive UI</ServiceCapability>
                </ServiceCapabilities>
              </PrimaryServiceContent>

              <BrowserWindow aria-hidden="true">
                <BrowserToolbar>
                  <span />
                  <span />
                  <span />
                  <BrowserNavigation dir="ltr">portfolio.dev/product</BrowserNavigation>
                </BrowserToolbar>
                <BrowserBody>
                  <BrowserSidebar>
                    <span />
                    <span />
                    <span />
                    <span />
                  </BrowserSidebar>
                  <BrowserContent>
                    <BrowserChart>
                      <span />
                    </BrowserChart>
                    <BrowserCardGrid>
                      <BrowserCard />
                      <BrowserCard />
                      <BrowserCard />
                    </BrowserCardGrid>
                  </BrowserContent>
                </BrowserBody>
              </BrowserWindow>
            </PrimaryServiceCard>
          </ScrollReveal>

          <ServicesSideColumn>
            <ScrollReveal variant="end" delay={80}>
              <MobileServiceCard asElement="article" tone="secondary">
                <ServiceCardHeader>
                  <ServiceIcon tone="secondary" aria-hidden="true">
                    <PhoneIphoneRoundedIcon />
                  </ServiceIcon>
                  <ServiceNumber dir="ltr">02</ServiceNumber>
                </ServiceCardHeader>
                <ServiceTitle>اپلیکیشن موبایل</ServiceTitle>
                <ServiceDescription>
                  توسعه‌ی تجربه‌های یکپارچه برای موبایل با React Native و تمرکز روی رابط روان و قابل
                  اعتماد.
                </ServiceDescription>

                <MobilePreview aria-hidden="true">
                  <PhoneFrame>
                    <PhoneNotch />
                    <PhoneScreen>
                      <span />
                      <span />
                      <span />
                    </PhoneScreen>
                  </PhoneFrame>
                  <PhoneFrame>
                    <PhoneNotch />
                    <PhoneScreen>
                      <span />
                      <span />
                      <span />
                    </PhoneScreen>
                  </PhoneFrame>
                </MobilePreview>
              </MobileServiceCard>
            </ScrollReveal>

            <SideServicesGrid>
              <ScrollReveal variant="up" delay={140}>
                <CompactServiceCard asElement="article" tone="purple">
                  <ServiceCardHeader>
                    <CompactServiceIcon tone="purple" aria-hidden="true">
                      <AccountTreeRoundedIcon />
                    </CompactServiceIcon>
                    <CompactServiceNumber dir="ltr">03</CompactServiceNumber>
                  </ServiceCardHeader>
                  <CompactServiceTitle>معماری فرانت‌اند</CompactServiceTitle>
                  <CompactServiceDescription>
                    ساختار مقیاس‌پذیر، مدیریت state و بازطراحی کدهای موجود.
                  </CompactServiceDescription>
                  <ArchitectureDiagram aria-hidden="true">
                    <ArchitectureNode />
                    <ArchitectureNode />
                    <ArchitectureNode />
                    <ArchitectureNode />
                  </ArchitectureDiagram>
                </CompactServiceCard>
              </ScrollReveal>

              <ScrollReveal variant="up" delay={200}>
                <CompactServiceCard asElement="article" tone="success">
                  <ServiceCardHeader>
                    <CompactServiceIcon tone="success" aria-hidden="true">
                      <ApiRoundedIcon />
                    </CompactServiceIcon>
                    <CompactServiceNumber dir="ltr">04</CompactServiceNumber>
                  </ServiceCardHeader>
                  <CompactServiceTitle>اتصال API و داده</CompactServiceTitle>
                  <CompactServiceDescription>
                    یکپارچه‌سازی REST API، فرم‌ها، نقشه و سرویس‌های محصول.
                  </CompactServiceDescription>
                  <IntegrationDiagram aria-hidden="true">
                    <span />
                    <span />
                    <IntegrationHub>API</IntegrationHub>
                    <span />
                    <span />
                  </IntegrationDiagram>
                </CompactServiceCard>
              </ScrollReveal>
            </SideServicesGrid>
          </ServicesSideColumn>
        </ServicesGrid>

        <ScrollReveal variant="up" delay={220}>
          <ProcessPanel tone="primary">
            <ProcessTitle>
              <span dir="ltr">FROM IDEA TO RELEASE</span>
              مسیر یک همکاری شفاف
            </ProcessTitle>
            <ProcessList>
              {processSteps.map((step, index) => (
                <ProcessItem key={step.number}>
                  <ProcessNumber dir="ltr">{step.number}</ProcessNumber>
                  <ProcessContent>
                    <strong>{step.title}</strong>
                    <span>{step.text}</span>
                  </ProcessContent>
                  {index < processSteps.length - 1 && <ProcessConnector aria-hidden="true" />}
                </ProcessItem>
              ))}
            </ProcessList>
          </ProcessPanel>
        </ScrollReveal>
      </ServicesContainer>
    </ServicesRoot>
  );
}
