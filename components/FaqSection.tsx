import type { Faq } from '@/types';
import FaqItem from '@/components/FaqItem';

interface FaqSectionProps {
  faqs: Faq[];
  showTitle?: boolean;
}

export default function FaqSection({ faqs, showTitle = true }: FaqSectionProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-tiktok-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-tiktok-magenta/5 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        {showTitle && (
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-gray-400 mb-6">
              Got Questions?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Find answers to common questions about our TikTok video downloader.
            </p>
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={faq.id} faq={faq} defaultOpen={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}