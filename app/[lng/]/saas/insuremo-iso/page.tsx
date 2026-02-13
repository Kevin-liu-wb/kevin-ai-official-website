import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function InsuremoIsoPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              InsureMO ISO Middle Office
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '保险中间件运营平台，为保险生态提供强大的技术支撑'
                : 'Insurance middleware operations platform providing powerful technical support for the insurance ecosystem'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '平台特性' : 'Platform Features'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              isZh ? '产品管理' : 'Product Management',
              isZh ? '渠道接入' : 'Channel Integration',
              isZh ? '保单处理' : 'Policy Processing',
              isZh ? '数据报表' : 'Data Reporting',
              isZh ? 'API开放' : 'Open APIs',
              isZh ? '生态连接' : 'Ecosystem Connectivity',
            ].map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-6 text-center">
                  <h3 className="text-lg font-bold text-stripe-dark">{feature}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
