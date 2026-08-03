import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(120, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(254),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long"),
  // Honeypot field — must stay empty. Real users never see or fill it.
  website: z.string().max(200).optional().or(z.literal("")),
  // Client-side timestamp (ms) from when the form was rendered, used to
  // reject submissions completed faster than a human plausibly could.
  renderedAt: z.coerce.number().optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
