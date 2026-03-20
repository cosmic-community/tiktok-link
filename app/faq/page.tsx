import type { Metadata } from 'next';
import FaqSection from '@/components/FaqSection';
import { getFaqs, getSiteSettings } from '@/lib/cosmic';
import Link from 'next/link';

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteName = settings?.metadata?.site_name || 'TikTok Video Downloader';

  return {
    title: `FAQ - ${siteName}`,
    description: 'Frequently asked questions about downloading TikTok videos without watermark.',
  };
}

export default async function FaqPage() {
  const faqs = await getFaqs();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 tiktok-gradient-bg" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-tiktok-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-tiktok-magenta/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-tiktok-cyan transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Frequently Asked{' '}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about downloading TikTok videos without watermarks.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      {faqs.length > 0 ? (
        <FaqSection faqs={faqs} showTitle={false} />
      ) : (
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-lg">No FAQs available yet. Check back soon!</p>
          </div>
        </section>
      )}
    </div>
  );
}