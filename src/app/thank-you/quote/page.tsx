import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Product Brief Received | PearlSourceHub",
  description: "Your product brief has been received. PearlSourceHub will review your requirements and suggest the right Pearl River Delta manufacturing direction.",
  robots: { index: false, follow: false },
};

export default function QuoteThankYouPage() {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Your product brief has been received</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">Our team will review your product details, identify the right Pearl River Delta manufacturing direction, and suggest the next sourcing, verification, or sample development steps.</p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-6 max-w-md mx-auto text-left">
          <h2 className="text-sm font-semibold text-slate-900 mb-3">What Happens Next</h2>
          <ol className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-xs font-medium text-amber-700 flex items-center justify-center mt-0.5">1</span>We review your product brief — typically within one business day.</li>
            <li className="flex items-start gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-xs font-medium text-amber-700 flex items-center justify-center mt-0.5">2</span>We identify the right PRD manufacturing cluster for your product.</li>
            <li className="flex items-start gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-xs font-medium text-amber-700 flex items-center justify-center mt-0.5">3</span>We shortlist possible supplier directions.</li>
            <li className="flex items-start gap-2"><span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 text-xs font-medium text-amber-700 flex items-center justify-center mt-0.5">4</span>We suggest verification, sample, or audit steps.</li>
          </ol>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link href="/manufacturing-clusters" className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-amber-500 transition-colors">Explore Manufacturing Clusters</Link>
          <Link href="/services" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:bg-slate-50 transition-colors">View Services</Link>
        </div>
      </div>
    </section>
  );
}
