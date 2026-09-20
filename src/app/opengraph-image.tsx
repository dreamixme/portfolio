import { ImageResponse } from 'next/og';

import { siteConfig } from '@/config/site';

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const dynamic = 'force-static';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '88px',
        color: '#F8FAFC',
        background:
          'radial-gradient(circle at 80% 20%, #7C3AED 0, transparent 38%), linear-gradient(135deg, #0F172A 0%, #111827 100%)',
      }}
    >
      <div style={{ color: '#93C5FD', fontSize: 30, letterSpacing: 8, textTransform: 'uppercase' }}>
        Software Engineer
      </div>
      <div style={{ marginTop: 24, fontSize: 104, fontWeight: 800, letterSpacing: -5 }}>
        {siteConfig.name}
      </div>
      <div
        style={{ marginTop: 30, maxWidth: 900, color: '#CBD5E1', fontSize: 36, lineHeight: 1.35 }}
      >
        Building fast, accessible and polished web experiences.
      </div>
    </div>,
    size,
  );
}
