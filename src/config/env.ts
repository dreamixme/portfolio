import { z } from 'zod';

const publicEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().min(1).default('/api'),
  NEXT_PUBLIC_SITE_URL: z.url().default('http://localhost:3000'),
});

const parsed = publicEnvSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api',
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
});

if (!parsed.success) {
  throw new Error(`Invalid public environment variables: ${z.prettifyError(parsed.error)}`);
}

export const env = parsed.data;
