"use client";

import { useRef, useState, type FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { submitContact, ApiError } from "@/lib/api";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const renderedAt = useRef(Date.now());

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    const form = new FormData(event.currentTarget);

    try {
      await submitContact({
        name: String(form.get("name") ?? ""),
        email: String(form.get("email") ?? ""),
        company: String(form.get("company") ?? ""),
        message: String(form.get("message") ?? ""),
        website: String(form.get("website") ?? ""),
        renderedAt: renderedAt.current,
      });
      setStatus("success");
    } catch (error) {
      setErrorMessage(
        error instanceof ApiError
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <m.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <CheckCircle2 className="text-accent-400 size-12" />
          <p className="mt-4 text-lg font-semibold text-neutral-900">Message sent</p>
          <p className="mt-2 text-neutral-600">
            Thanks for reaching out — our team will be in touch shortly.
          </p>
        </m.div>
      ) : (
        <m.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="name">Full name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Inc."
              />
            </div>
          </div>

          <div>
            <Label htmlFor="email">Work email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="jane@company.com"
            />
          </div>

          <div>
            <Label htmlFor="message">How can we help?</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Tell us about your team and call volume..."
            />
          </div>

          {/* Honeypot field — hidden from real users, left empty. Bots that
              auto-fill every field will trip the server-side spam check. */}
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/5 p-3 text-sm text-red-300">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <Button
            type="submit"
            variant="cta"
            size="lg"
            disabled={status === "submitting"}
            className="w-full"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </Button>
        </m.form>
      )}
    </AnimatePresence>
  );
}
