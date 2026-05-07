import { NextRequest, NextResponse } from "next/server";

/** Normalize any phone string to E.164 (US assumed if no country code) */
function normalizePhone(raw: string): string {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return `+${digits}`; // pass through whatever we have
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, companyName, email, phone, message } = body;

    // Support legacy single-name submissions gracefully
    const resolvedFirst: string = firstName?.trim() || body.name?.split(" ")[0] || "";
    const resolvedLast: string = lastName?.trim() || body.name?.split(" ").slice(1).join(" ") || "";

    if (!resolvedFirst || !email || !phone) {
      return NextResponse.json(
        { error: "First name, email, and phone are required." },
        { status: 400 }
      );
    }

    const normalizedPhone = normalizePhone(phone);

    // ── GHL Inbound Webhook ──────────────────────────────────────────────
    const ghlUrl = process.env.GHL_WEBHOOK_URL;

    const ghlPayload = {
      first_name: resolvedFirst,
      last_name: resolvedLast,
      email,
      phone: normalizedPhone,
      company_name: companyName || "",
      inquiry_message: message || "",
      lead_source: "Scale Mint Website — /book",
    };

    // ── Google Sheets / legacy webhook ───────────────────────────────────
    const sheetsUrl = process.env.FORM_WEBHOOK_URL;

    const sheetsPayload = {
      name: `${resolvedFirst} ${resolvedLast}`.trim(),
      companyName,
      email,
      phone: normalizedPhone,
      message,
    };

    // Fire both in parallel; Sheets is non-blocking (we don't fail on its error)
    const requests: Promise<Response>[] = [];

    if (ghlUrl) {
      requests.push(
        fetch(ghlUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(ghlPayload),
        })
      );
    } else {
      console.warn("GHL_WEBHOOK_URL is not set — skipping GHL webhook");
    }

    if (sheetsUrl) {
      requests.push(
        fetch(sheetsUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sheetsPayload),
        }).catch((err) => {
          console.error("Sheets webhook error (non-blocking):", err);
          return new Response(null, { status: 200 }); // swallow
        })
      );
    }

    if (requests.length === 0) {
      console.error("No webhook URLs configured (GHL_WEBHOOK_URL and FORM_WEBHOOK_URL are both unset)");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const [ghlRes] = await Promise.all(requests);

    // Only treat GHL as the authoritative success signal
    if (ghlUrl && ghlRes && !ghlRes.ok) {
      const errText = await ghlRes.text().catch(() => "");
      console.error("GHL webhook failed:", ghlRes.status, errText);
      return NextResponse.json(
        { error: "Failed to submit. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submit lead error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
