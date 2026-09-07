import { z } from 'zod';

const publicEnvSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().min(1).default('/api'),
});

const parsed = publicEnvSchema.safeParse({
  NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL ?? '/api',
});

if (!parsed.success) {
  throw new Error(`Invalid public environment variables: ${z.prettifyError(parsed.error)}`);
}

export const env = parsed.data;
