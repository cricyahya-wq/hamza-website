import { pool } from "../db/pool";

export interface NewContactSubmission {
  name: string;
  email: string;
  company?: string;
  message: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface ContactSubmissionRecord {
  id: string;
  createdAt: Date;
}

export async function createContactSubmission(
  input: NewContactSubmission,
): Promise<ContactSubmissionRecord> {
  const result = await pool.query<{ id: string; created_at: Date }>(
    `INSERT INTO contact_submissions (name, email, company, message, ip_address, user_agent)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, created_at`,
    [
      input.name,
      input.email,
      input.company || null,
      input.message,
      input.ipAddress ?? null,
      input.userAgent ?? null,
    ],
  );

  const row = result.rows[0];
  if (!row) {
    throw new Error("Failed to insert contact submission");
  }

  return { id: row.id, createdAt: row.created_at };
}
