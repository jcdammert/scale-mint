import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, companyName, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.FORM_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("FORM_WEBHOOK_URL is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const formData = new URLSearchParams();
    formData.append("Timestamp", new Date().toISOString());
    formData.append("Name", name);
    formData.append("Company Name", companyName);
    formData.append("Email", email);
    formData.append("Phone", phone);
    formData.append("Message", message);

    const webhookRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    if (!webhookRes.ok) {
      console.error("Webhook failed:", webhookRes.status, await webhookRes.text());
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
