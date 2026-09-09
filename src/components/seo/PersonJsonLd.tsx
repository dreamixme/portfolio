import { siteConfig } from '@/config/site';

export function PersonJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: 'Software Engineer',
    description: siteConfig.description,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phone.value,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tehran',
      addressCountry: 'IR',
    },
    sameAs: [siteConfig.contact.linkedIn],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
      }}
    />
  );
}
