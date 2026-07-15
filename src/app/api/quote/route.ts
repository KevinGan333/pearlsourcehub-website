import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";
import { quoteSchema } from "@/lib/validators";
import { quoteEmailTemplate } from "@/lib/emailTemplates";

const SPAM_KEYWORDS = [
  "seo services", "buy backlinks", "guest post", "cheap seo",
  "viagra", "casino", "crypto currency", "earn money fast",
];

function looksLikeSpam(data: Record<string, string>): boolean {
  const text = Object.values(data).join(" ").toLowerCase();
  return SPAM_KEYWORDS.some((kw) => text.includes(kw));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = quoteSchema.safeParse(body);

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(errors).flat()[0] || "Validation failed";
      return NextResponse.json({ success: false, error: firstError }, { status: 400 });
    }

    const data = parsed.data;

    // Honeypot check
    if (data.website && data.website.length > 0) {
      return NextResponse.json({ success: true });
    }

    // Spam check
    if (looksLikeSpam(data as unknown as Record<string, string>)) {
      return NextResponse.json({ success: true });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn("RESEND_API_KEY not set — email not sent");
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(resendApiKey);
    const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19) + " UTC";

    await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL || "PearlSourceHub <noreply@pearlsourcehub.com>",
      to: process.env.LEAD_TO_EMAIL || "kevin.gan@pearlsourcehub.com",
      subject: "New Product Brief / Quote Request - PearlSourceHub",
      ...quoteEmailTemplate(data, timestamp),
    });

    // Save to Supabase
    try { const adminClient = createAdminClient();
      await adminClient.from("inquiries").insert({
        source: "quote", name: data.name, email: data.email, company: data.company || null,
        country: data.country, product_category: data.productCategory,
        target_market: data.targetMarket || null, estimated_order_quantity: data.estimatedOrderQuantity || null,
        oem_odm_requirement: data.oemOdmRequirement || null, current_stage: data.currentStage,
        main_concern: data.mainConcern, target_price: data.targetPrice || null, message: data.message,
      });
    } catch { /* non-critical */ }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Server error. Please try again later." }, { status: 500 });
  }
}
