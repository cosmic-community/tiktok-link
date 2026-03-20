import Link from 'next/link';
import type { SiteSettings } from '@/types';

interface HeaderProps {
  settings: SiteSettings | null;
}

export default function Header({ settings }: HeaderProps) {
  const siteName = settings?.metadata?.site_name || 'TikTok Downloader';
  const logoUrl = settings?.metadata?.logo?.imgix_url;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-tiktok-dark/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Site Name */}
          <Link href="/" className="flex items-center gap-3 group">
            {logoUrl ? (
              <img
                src={`${logoUrl}?w=80&h=80&fit=crop&auto=format,compress`}
                alt={siteName}
                width={32}
                height={32}
                className="rounded-lg"
              />
            ) : (
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-tiktok-cyan to-tiktok-magenta flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </div>
            )}
            <span className="text-lg font-bold text-white group-hover:text-tiktok-cyan transition-colors">
              {siteName}
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#download"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-tiktok-cyan to-tiktok-magenta text-white hover:opacity-90 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}