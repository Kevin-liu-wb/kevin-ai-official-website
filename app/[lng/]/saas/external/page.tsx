import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ExternalPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const apps = [
    {
      title: 'InsureMO ISO Middle Office',
      description: isZh ? '保险中间件运营平台' : 'Insurance middleware operations platform',
      href: `/${lng}/saas/insuremo-iso`
    },
    {
      title: 'MyTruckSure SaaS',
      description: isZh ? '商用车保险管理平台' : 'Commercial vehicle insurance management platform',
      href: `/${lng}/saas/mytrucksure`
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-pink/5 to-stripe-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '外部用户应用' : 'External User Applications'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '为外部合作伙伴和渠道提供的保险应用解决方案'
                : 'Insurance application solutions for external partners and channels'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={app.href}>
                  <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-stripe-dark mb-3">{app.title}</h3>
                    <p className="text-stripe-gray mb-4">{app.description}</p>
                    <div className="flex items-center text-stripe-purple">
                      {isZh ? '了解更多' : 'Learn More'}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
