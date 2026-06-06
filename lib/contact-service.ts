import type { ContactFormValues, ContactSubmissionResult } from "@/lib/contact";

type ContactDeliveryPayload = ContactFormValues & {
  receivedAt: string;
};

type ResendEmailPayload = {
  from: string;
  to: string[];
  subject: string;
  html: string;
  text: string;
};

const resendApiUrl = "https://api.resend.com/emails";

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    return null;
  }

  return {
    apiKey,
    recipient,
    from,
  };
}

function buildTextMessage(payload: ContactDeliveryPayload) {
  return [
    "Neue Kontaktanfrage ueber die Website der Jaeger GmbH",
    "",
    `Name: ${payload.name}`,
    `E-Mail: ${payload.email}`,
    `Telefon: ${payload.phone}`,
    `Eingegangen: ${payload.receivedAt}`,
    "",
    "Nachricht:",
    payload.message,
  ].join("\n");
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtmlMessage(payload: ContactDeliveryPayload) {
  return `
    <div style="font-family:Segoe UI,Arial,sans-serif;line-height:1.6;color:#0f172a;">
      <h1 style="font-size:20px;margin:0 0 16px;">Neue Kontaktanfrage ueber die Website der Jaeger GmbH</h1>
      <p style="margin:0 0 8px;"><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p style="margin:0 0 8px;"><strong>E-Mail:</strong> ${escapeHtml(payload.email)}</p>
      <p style="margin:0 0 8px;"><strong>Telefon:</strong> ${escapeHtml(payload.phone)}</p>
      <p style="margin:0 0 16px;"><strong>Eingegangen:</strong> ${escapeHtml(payload.receivedAt)}</p>
      <p style="margin:0 0 8px;"><strong>Nachricht:</strong></p>
      <div style="white-space:pre-wrap;border:1px solid #cbd5e1;border-radius:12px;padding:16px;background:#f8fafc;">
        ${escapeHtml(payload.message)}
      </div>
    </div>
  `;
}

async function sendWithResend(payload: ContactDeliveryPayload): Promise<ContactSubmissionResult> {
  const config = getResendConfig();

  if (!config) {
    return {
      ok: false,
      message:
        "Der E-Mail-Versand ist noch nicht vollständig konfiguriert. Bitte hinterlegen Sie die erforderlichen Resend-Umgebungsvariablen.",
    };
  }

  const emailPayload: ResendEmailPayload = {
    from: config.from,
    to: [config.recipient],
    subject: `Neue Kontaktanfrage von ${payload.name}`,
    html: buildHtmlMessage(payload),
    text: buildTextMessage(payload),
  };

  let response: Response;

  try {
    response = await fetch(resendApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${config.apiKey}`,
      },
      body: JSON.stringify(emailPayload),
    });
  } catch {
    return {
      ok: false,
      message:
        "Die Verbindung zum E-Mail-Dienst konnte nicht hergestellt werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
    };
  }

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}));
    console.error("[Resend error]", response.status, JSON.stringify(errorBody));
    return {
      ok: false,
      message:
        "Die Anfrage konnte derzeit nicht per E-Mail zugestellt werden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns telefonisch.",
    };
  }

  return {
    ok: true,
    message:
      "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns so rasch wie möglich.",
  };
}

export async function deliverContactMessage(
  payload: ContactDeliveryPayload,
): Promise<ContactSubmissionResult> {
  return sendWithResend(payload);
}
