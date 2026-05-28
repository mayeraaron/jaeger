"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  hasContactErrors,
  validateContactValues,
  type ContactField,
  type ContactFieldErrors,
  type ContactFormValues,
  type ContactSubmissionResult,
} from "@/lib/contact";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

type SubmissionState =
  | { type: "idle"; message: string }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
    setSubmissionState({ type: "idle", message: "" });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const errors = validateContactValues(values);

    if (hasContactErrors(errors)) {
      setFieldErrors(errors);
      setSubmissionState({
        type: "error",
        message: "Bitte prüfen Sie die markierten Felder und senden Sie das Formular erneut.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmissionState({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as ContactSubmissionResult;

      if (!response.ok || !result.ok) {
        setFieldErrors(result.ok ? {} : result.fieldErrors ?? {});
        setSubmissionState({
          type: "error",
          message:
            result.message ||
            "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut.",
        });
        return;
      }

      setValues(initialValues);
      setFieldErrors({});
      setSubmissionState({
        type: "success",
        message: result.message,
      });
    } catch {
      setSubmissionState({
        type: "error",
        message:
          "Die Anfrage konnte derzeit nicht gesendet werden. Bitte versuchen Sie es später erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8"
      aria-describedby="contact-form-status"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          id="name"
          label="Name"
          value={values.name}
          onChange={(value) => handleChange("name", value)}
          error={fieldErrors.name}
          placeholder="Ihr Name"
          autoComplete="name"
        />
        <FormField
          id="email"
          label="E-Mail"
          type="email"
          value={values.email}
          onChange={(value) => handleChange("email", value)}
          error={fieldErrors.email}
          placeholder="name@firma.at"
          autoComplete="email"
        />
        <FormField
          id="phone"
          label="Telefon"
          type="tel"
          value={values.phone}
          onChange={(value) => handleChange("phone", value)}
          error={fieldErrors.phone}
          placeholder="+43 ..."
          autoComplete="tel"
        />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-sm font-semibold text-zinc-700">
            Nachricht
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={values.message}
            onChange={(event) => handleChange("message", event.target.value)}
            aria-invalid={fieldErrors.message ? "true" : "false"}
            aria-describedby={fieldErrors.message ? "message-error" : undefined}
            className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-3 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/40"
            placeholder="Worum geht es bei Ihrer Anfrage?"
          />
          <FieldError id="message-error" error={fieldErrors.message} />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          id="contact-form-status"
          role={submissionState.type === "error" ? "alert" : "status"}
          aria-live="polite"
          className={
            submissionState.type === "success"
              ? "text-sm leading-7 text-emerald-600"
              : submissionState.type === "error"
                ? "text-sm leading-7 text-rose-600"
                : "text-sm leading-7 text-zinc-500"
          }
        >
          {submissionState.message || "Wir melden uns nach Eingang Ihrer Anfrage so rasch wie möglich."}
        </div>
        <Button type="submit" className="min-w-48" disabled={isSubmitting}>
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </Button>
      </div>
    </form>
  );
}

type FormFieldProps = {
  id: ContactField;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
};

function FormField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  autoComplete,
}: FormFieldProps) {
  return (
    <div className="sm:col-span-1">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-zinc-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        autoComplete={autoComplete}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-12 w-full rounded-2xl border border-zinc-300 bg-white px-4 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/40"
        placeholder={placeholder}
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

type FieldErrorProps = {
  id: string;
  error?: string;
};

function FieldError({ id, error }: FieldErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <p id={id} className="mt-2 text-sm text-rose-600">
      {error}
    </p>
  );
}
