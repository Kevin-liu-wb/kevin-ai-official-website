import { Header } from '@/components/layout/header/header';
import { Footer } from '@/components/layout/footer/footer';
import { i18nConfig } from '@/i18n/config';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export async function generateStaticParams() {
  return i18nConfig.locales.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
  params: { lng }
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  const t = translations[lng as keyof typeof translations] || zhCN;

  return (
    <div className="min-h-screen flex flex-col">
      <Header lang={lng} t={t} />
      <main className="flex-1">
        {children}
      </main>
      <Footer lang={lng} t={t} />
    </div>
  );
}
