import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function Page({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const title = t.about?.company?.title ?? 'Company Overview';
  return (
    <div className="pt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-muted-foreground mb-6">Placeholder page</p>
    </div>
  );
}
