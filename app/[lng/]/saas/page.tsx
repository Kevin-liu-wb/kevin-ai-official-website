import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function SaasPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? 'SaaS/应用' : 'SaaS/Applications'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '一系列适用于保险公司、经代公司、MGA、汽车经销商集团、电商和保险科技公司的应用。由易保基于易保云中台开发。'
                : 'Applications for insurers, brokers, MGAs, auto dealers, e-commerce, and insurtech companies. Built on eBaoCloud middleware.'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '应用分类' : 'Application Categories'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: isZh ? '核心系统现代化开放框架' : 'Core Modernization Framework',
                href: `/${lng}/core-modernization`
              },
              { 
                title: isZh ? '后台用户应用' : 'Back-office Apps',
                href: `/${lng}/saas/back-office`
              },
              { 
                title: isZh ? '前端用户应用' : 'Front-office Apps',
                href: `/${lng}/saas/front-office`
              },
              { 
                title: isZh ? '外部用户应用' : 'External User Apps',
                href: `/${lng}/saas/external`
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <a 
                  href={item.href}
                  className="block bg-stripe-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{item.title}</h3>
                  <Button variant="outline" size="sm">
                    {isZh ? '了解更多' : 'Learn More'}
                  </Button>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
