import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | PearlSourceHub",
  description: "Your message has been received. PearlSourceHub will respond within one business day.",
  robots: { index: false, follow: false },
};

export default function ContactThankYouPage() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Thanks for contacting PearlSourceHub</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">We received your message and will respond within one business day.</p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors">Back to Home</Link>
          <Link href="/resources" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors">Explore Resources</Link>
        </div>
      </div>
    </section>
  );
}
