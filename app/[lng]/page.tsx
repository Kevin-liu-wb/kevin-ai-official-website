import { Hero } from '@/components/sections/hero/hero';
import { Features } from '@/components/sections/features/features';
import { Testimonials } from '@/components/sections/testimonials/testimonials';
import { News } from '@/components/sections/news/news';
import { Events } from '@/components/sections/events/events';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function HomePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;

  return (
    <>
      <Hero lang={lng} t={t} />
      <Features lang={lng} t={t} />
      <Testimonials lang={lng} t={t} />
      <News lang={lng} t={t} />
      <Events lang={lng} t={t} />
    </>
  );
}
