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

  const products = [
    {
      title: isZh ? '寿险应用开放框架' : 'Life Insurance Open Framework',
      description: isZh 
        ? '基于云中台的寿险核心系统开放框架，支持产品工厂、保单管理、理赔等全流程'
        : 'Life insurance core system framework supporting product factory, policy management, and claims'
    },
    {
      title: isZh ? '产险应用开放框架' : 'General Insurance Open Framework',
      description: isZh
        ? '灵活的车险、财产险解决方案，支持快速产品配置和渠道对接'
        : 'Flexible auto and property insurance solutions with rapid configuration'
    },
    {
      title: isZh ? '车商云' : 'Auto Dealer Cloud',
      description: isZh
        ? '为汽车经销商集团提供的保险业务管理平台'
        : 'Insurance business management platform for auto dealer groups'
    },
    {
      title: isZh ? '移动顾问' : 'Mobile Advisor',
      description: isZh
        ? '代理人移动展业工具，支持全流程线上化'
        : 'Mobile sales tool for agents with full digital process'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-blue/5 to-stripe-pink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? 'SaaS / 应用' : 'SaaS / Applications'}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold text-stripe-dark mb-4">{product.title}</h3>
                  <p className="text-stripe-gray mb-6">{product.description}</p>
                  <Button variant="outline">
                    {isZh ? '了解更多' : 'Learn More'}
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
