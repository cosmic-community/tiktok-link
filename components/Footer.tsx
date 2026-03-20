import Link from 'next/link';
import type { SiteSettings } from '@/types';

interface FooterProps {
  settings: SiteSettings | null;
}

export default function Footer({ settings }: FooterProps) {
  const footerText = settings?.metadata?.footer_text || '';
  const siteName = settings?.metadata?.site_name || 'TikTok Downloader';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-tiktok-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tiktok-cyan to-tiktok-magenta flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">{siteName}</span>
            </Link>
            {footerText && (
              <p className="text-sm text-gray-400 max-w-xs">{footerText}</p>
            )}
            {!footerText && (
              <p className="text-sm text-gray-400 max-w-xs">
                Download TikTok videos without watermark. Free, fast, and easy to use.
              </p>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-400 hover:text-tiktok-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#download" className="text-sm text-gray-400 hover:text-tiktok-cyan transition-colors">
                  Download Video
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-gray-400 hover:text-tiktok-cyan transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-400">
              This tool is for personal use only. Please respect content creators&apos; rights and TikTok&apos;s terms of service.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} {siteName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}