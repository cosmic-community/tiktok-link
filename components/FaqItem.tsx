'use client';

import { useState } from 'react';
import type { Faq } from '@/types';

interface FaqItemProps {
  faq: Faq;
  defaultOpen?: boolean;
}

export default function FaqItem({ faq, defaultOpen = false }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const question = faq.metadata?.question || faq.title;
  const answer = faq.metadata?.answer || '';

  if (!question) {
    return null;
  }

  return (
    <div
      className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'bg-white/[0.07]' : 'hover:bg-white/[0.04]'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base sm:text-lg font-semibold text-white pr-4">
          {question}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-br from-tiktok-cyan to-tiktok-magenta rotate-180'
              : 'bg-white/10'
          }`}
        >
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <div className="h-px bg-gradient-to-r from-tiktok-cyan/20 via-tiktok-magenta/20 to-transparent mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed whitespace-pre-line">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}