import DownloadForm from '@/components/DownloadForm';
import type { SiteSettings } from '@/types';

interface HeroSectionProps {
  settings: SiteSettings | null;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const tagline = settings?.metadata?.tagline || 'Download TikTok Videos Without Watermark';
  const heroDescription = settings?.metadata?.hero_description || 'Paste any TikTok video link below and download it instantly — clean, watermark-free, and in high quality.';

  return (
    <section id="download" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tiktok-gradient-bg" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-tiktok-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-tiktok-magenta/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-tiktok-cyan/5 to-tiktok-magenta/5 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-sm text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-tiktok-cyan animate-pulse" />
          Free &amp; No Registration Required
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 text-balance leading-tight">
          {tagline.split(' ').map((word, i) => {
            const highlightWords = ['Without', 'Watermark', 'Download'];
            const isHighlight = highlightWords.some(hw => word.toLowerCase().includes(hw.toLowerCase()));
            if (isHighlight) {
              return (
                <span key={i} className="gradient-text">
                  {word}{' '}
                </span>
              );
            }
            return (
              <span key={i} className="text-white">
                {word}{' '}
              </span>
            );
          })}
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 text-balance">
          {heroDescription}
        </p>

        {/* Download Form */}
        <DownloadForm />

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">100%</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Free</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">HD</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Quality</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">No</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1">Watermark</div>
          </div>
        </div>
      </div>
    </section>
  );
}