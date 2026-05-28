import { NextResponse } from "next/server";

import {
  hasContactErrors,
  normalizeContactValues,
  validateContactValues,
  type ContactFormValues,
} from "@/lib/contact";
import { deliverContactMessage } from "@/lib/contact-service";

export async function POST(request: Request) {
  let values: ContactFormValues;

  try {
    const body = (await request.json()) as Partial<ContactFormValues>;

    values = {
      name: body.name ?? "",
      email: body.email ?? "",
      phone: body.phone ?? "",
      message: body.message ?? "",
    };
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Die Anfrage konnte nicht verarbeitet werden. Bitte versuchen Sie es erneut.",
      },
      { status: 400 },
    );
  }

  const fieldErrors = validateContactValues(values);

  if (hasContactErrors(fieldErrors)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Bitte prüfen Sie die markierten Felder und senden Sie das Formular erneut.",
        fieldErrors,
      },
      { status: 400 },
    );
  }

  const normalized = normalizeContactValues(values);
  const result = await deliverContactMessage({
    ...normalized,
    receivedAt: new Date().toISOString(),
  });

  if (!result.ok) {
    return NextResponse.json(result, { status: 500 });
  }

  return NextResponse.json(result, { status: 200 });
}
