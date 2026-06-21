import type { ContactInput, QuoteInput } from "@/lib/validators";

function baseTemplate(title: string, content: string): string {
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;padding:20px;color:#1e293b;background:#ffffff"><div style="text-align:center;padding:20px 0;border-bottom:2px solid #d97706;margin-bottom:24px"><h1 style="color:#0f172a;font-size:20px;margin:0">PearlSourceHub</h1><p style="color:#64748b;font-size:13px;margin:4px 0 0">Pearl River Delta Sourcing Partner</p></div><h2 style="font-size:18px;color:#0f172a;margin-bottom:8px">${title}</h2>${content}<div style="margin-top:32px;padding-top:16px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8"><p>This email was sent from the PearlSourceHub website form.</p></div></body></html>`;
}

function field(label: string, value: string): string {
  const display = value || "(not provided)";
  return `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#334155;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;color:#475569">${display}</td></tr>`;
}

export function contactEmailTemplate(data: ContactInput, timestamp: string): { html: string } {
  const content = `<table style="width:100%;border-collapse:collapse">${field("Name", `${data.firstName} ${data.lastName}`)}${field("Email", data.email)}${field("Company", data.company || "")}${field("Message", data.message)}${field("Source", "Contact Page")}${field("Submitted", timestamp)}</table>`;
  return { html: baseTemplate("New Contact Inquiry", content) };
}

export function quoteEmailTemplate(data: QuoteInput, timestamp: string): { html: string } {
  const content = `<table style="width:100%;border-collapse:collapse">${field("Name", data.name)}${field("Email", data.email)}${field("Company", data.company || "")}${field("Country", data.country)}${field("Product Category", data.productCategory)}${field("Target Market", data.targetMarket || "")}${field("Est. Order Quantity", data.estimatedOrderQuantity || "")}${field("OEM/ODM", data.oemOdmRequirement || "")}${field("Current Stage", data.currentStage)}${field("Main Concern", data.mainConcern)}${field("Target Price", data.targetPrice || "")}${field("Project Details", data.message)}${field("Source", "Quote Page")}${field("Submitted", timestamp)}</table><div style="background:#fffbeb;border:1px solid #fcd34d;border-radius:8px;padding:16px;margin-top:16px"><p style="font-weight:600;color:#92400e;margin:0 0 8px">Suggested Next Steps</p><ol style="margin:0;padding-left:20px;color:#78350f;font-size:14px"><li>Review product category against PRD manufacturing clusters</li><li>Identify the right manufacturing city (Shenzhen, Dongguan, Guangzhou, Foshan, Zhongshan, Huizhou)</li><li>Shortlist qualified supplier directions</li><li>Suggest verification, sample development, or factory audit steps</li></ol></div>`;
  return { html: baseTemplate("New Product Brief / Quote Request", content) };
}
