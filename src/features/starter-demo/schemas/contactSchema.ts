import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Name must contain at least 2 characters.'),
  email: z.email('Enter a valid email address.'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
