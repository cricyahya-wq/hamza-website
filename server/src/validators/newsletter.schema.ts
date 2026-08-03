import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().email("Enter a valid email address").max(254),
  // Honeypot field — must stay empty. Real users never see or fill it.
  website: z.string().max(200).optional().or(z.literal("")),
  renderedAt: z.coerce.number().optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export const unsubscribeQuerySchema = z.object({
  email: z.string().trim().email(),
  token: z.string().min(1),
});
