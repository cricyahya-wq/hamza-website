const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

interface ApiErrorDetail {
  path: string;
  message: string;
}

export class ApiError extends Error {
  status: number;
  details?: ApiErrorDetail[];

  constructor(message: string, status: number, details?: ApiErrorDetail[]) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new ApiError(
      "Couldn't reach the server. Check your connection and try again.",
      0,
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new ApiError(
      data?.error?.message ?? "Something went wrong. Please try again.",
      response.status,
      data?.error?.details,
    );
  }

  return data as T;
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  message: string;
  website?: string;
  renderedAt: number;
}

export function submitContact(payload: ContactPayload) {
  return postJson<{ message: string; id: string }>("/api/contact", payload);
}

export interface NewsletterPayload {
  email: string;
  website?: string;
  renderedAt: number;
}

export function subscribeNewsletter(payload: NewsletterPayload) {
  return postJson<{ message: string }>("/api/newsletter/subscribe", payload);
}
