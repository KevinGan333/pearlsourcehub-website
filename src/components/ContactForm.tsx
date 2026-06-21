"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import FormStatus from "@/components/FormStatus";
import SubmitButton from "@/components/SubmitButton";

interface ContactFormProps {
  variant?: "contact" | "quote";
}

export default function ContactForm({ variant = "contact" }: ContactFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function clearError() {
    setError("");
    setFieldErrors({});
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    clearError();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString().trim();
    });

    try {
      const endpoint = variant === "quote" ? "/api/quote" : "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        setError(json.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      // Success — redirect to thank-you page
      const redirectPath = variant === "quote" ? "/thank-you/quote" : "/thank-you/contact";
      router.push(redirectPath);
    } catch {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  }

  const isQuote = variant === "quote";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <div className="absolute opacity-0 pointer-events-none" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <FormStatus message={error} type="error" onDismiss={clearError} />}

      {/* Name fields */}
      <div className="grid gap-5 sm:grid-cols-2">
        {isQuote ? (
          <>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" required className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 ${fieldErrors.name ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-amber-600 focus:ring-amber-600"}`} placeholder="John Smith" />
              {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 ${fieldErrors.email ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-amber-600 focus:ring-amber-600"}`} placeholder="john@company.com" />
              {fieldErrors.email && <p className="mt-1 text-xs text-red-600">{fieldErrors.email}</p>}
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First name <span className="text-red-500">*</span></label>
              <input type="text" id="firstName" name="firstName" required className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 ${fieldErrors.firstName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-amber-600 focus:ring-amber-600"}`} placeholder="John" />
              {fieldErrors.firstName && <p className="mt-1 text-xs text-red-600">{fieldErrors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name <span className="text-red-500">*</span></label>
              <input type="text" id="lastName" name="lastName" required className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 ${fieldErrors.lastName ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-amber-600 focus:ring-amber-600"}`} placeholder="Smith" />
              {fieldErrors.lastName && <p className="mt-1 text-xs text-red-600">{fieldErrors.lastName}</p>}
            </div>
          </>
        )}
      </div>

      {/* Email + Company (for contact variant) or Company + Country (for quote) */}
      <div className="grid gap-5 sm:grid-cols-2">
        {isQuote ? (
          <>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
              <input type="text" id="company" name="company" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="Your Company Ltd." />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country <span className="text-red-500">*</span></label>
              <input type="text" id="country" name="country" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="United States" />
              {fieldErrors.country && <p className="mt-1 text-xs text-red-600">{fieldErrors.country}</p>}
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email <span className="text-red-500">*</span></label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="john@company.com" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
              <input type="text" id="company" name="company" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="Your Company Ltd." />
            </div>
          </>
        )}
      </div>

      {/* Quote-specific fields */}
      {isQuote && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700">Product category <span className="text-red-500">*</span></label>
              <select id="productCategory" name="productCategory" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
                <option value="">Select a category</option>
                <option>Consumer Electronics</option><option>Smart Hardware</option><option>LED Lighting</option><option>Small Appliances</option><option>Beauty Devices</option><option>Packaging</option><option>Hardware and Molds</option><option>Furniture and Home Products</option><option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="targetMarket" className="block text-sm font-medium text-slate-700">Target market</label>
              <input type="text" id="targetMarket" name="targetMarket" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="United States, Europe" />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="estimatedOrderQuantity" className="block text-sm font-medium text-slate-700">Est. order quantity</label>
              <select id="estimatedOrderQuantity" name="estimatedOrderQuantity" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
                <option value="">Select range</option>
                <option>100–500 units</option><option>500–2,000 units</option><option>2,000–10,000 units</option><option>10,000+ units</option><option>Not sure yet</option>
              </select>
            </div>
            <div>
              <label htmlFor="oemOdmRequirement" className="block text-sm font-medium text-slate-700">OEM or ODM</label>
              <select id="oemOdmRequirement" name="oemOdmRequirement" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
                <option value="">Select</option><option>OEM (I have my own design)</option><option>ODM (I need factory design support)</option><option>Not sure</option>
              </select>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="currentStage" className="block text-sm font-medium text-slate-700">Current stage <span className="text-red-500">*</span></label>
              <select id="currentStage" name="currentStage" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
                <option value="">Select stage</option>
                <option>Idea / concept</option><option>Design ready, need samples</option><option>Have existing supplier, want to switch</option><option>Ready for mass production</option>
              </select>
            </div>
            <div>
              <label htmlFor="mainConcern" className="block text-sm font-medium text-slate-700">Main concern <span className="text-red-500">*</span></label>
              <select id="mainConcern" name="mainConcern" required className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600">
                <option value="">Select concern</option>
                <option>Supplier verification</option><option>Sample development</option><option>Price / cost</option><option>Quality</option><option>Compliance / certifications</option><option>Delivery / timeline</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="targetPrice" className="block text-sm font-medium text-slate-700">Target price (if available)</label>
            <input type="text" id="targetPrice" name="targetPrice" className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:border-amber-600 focus:outline-none focus:ring-1 focus:ring-amber-600" placeholder="e.g. $15–20 FOB per unit" />
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          {isQuote ? "Project details" : "Message"} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={isQuote ? 6 : 4}
          required
          className={`mt-1 block w-full rounded-lg border px-3 py-2.5 text-sm shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 ${fieldErrors.message ? "border-red-300 focus:border-red-500 focus:ring-red-500" : "border-slate-300 focus:border-amber-600 focus:ring-amber-600"}`}
          placeholder={isQuote ? "Describe your product, target price, target markets, and any certifications required (CE, FCC, FDA, UL, etc.)." : "How can we help you?"}
        />
        {fieldErrors.message && <p className="mt-1 text-xs text-red-600">{fieldErrors.message}</p>}
      </div>

      <SubmitButton loading={loading} label={isQuote ? "Submit Product Brief" : "Send Message"} />
    </form>
  );
}
