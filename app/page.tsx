import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FaqSection from '@/components/FaqSection';
import { getSiteSettings, getFaqs } from '@/lib/cosmic';

export default async function HomePage() {
  const [settings, faqs] = await Promise.all([
    getSiteSettings(),
    getFaqs(),
  ]);

  return (
    <>
      <HeroSection settings={settings} />
      <HowItWorks />
      {faqs.length > 0 && <FaqSection faqs={faqs} />}
    </>
  );
}