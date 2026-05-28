export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactField = keyof ContactFormValues;

export type ContactFieldErrors = Partial<Record<ContactField, string>>;

export type ContactSubmissionResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fieldErrors?: ContactFieldErrors };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeContactValues(values: ContactFormValues): ContactFormValues {
  return {
    name: values.name.trim(),
    email: values.email.trim(),
    phone: values.phone.trim(),
    message: values.message.trim(),
  };
}

export function validateContactValues(values: ContactFormValues): ContactFieldErrors {
  const normalized = normalizeContactValues(values);
  const errors: ContactFieldErrors = {};

  if (normalized.name.length < 2) {
    errors.name = "Bitte geben Sie einen vollständigen Namen an.";
  }

  if (!emailPattern.test(normalized.email)) {
    errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
  }

  if (normalized.phone.length < 6) {
    errors.phone = "Bitte geben Sie eine erreichbare Telefonnummer an.";
  }

  if (normalized.message.length < 20) {
    errors.message = "Bitte beschreiben Sie Ihr Anliegen mit mindestens 20 Zeichen.";
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors) {
  return Object.keys(errors).length > 0;
}
