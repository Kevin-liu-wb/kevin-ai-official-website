import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building, CheckCircle, Globe, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function InsurersPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.clients.insurers;

  const insurers = isZh ? [
    { name: '大昌行', type: '一般保险' },
    { name: '万通保险', type: '人寿保险' },
    { name: '中国平安', type: '综合保险' },
    { name: '中国人寿', type: '人寿保险' },
    { name: '太平洋保险', type: '综合保险' },
    { name: '友邦保险', type: '人寿保险' }
  ] : [
    { name: 'DCH', type: 'General Insurance' },
    { name: 'WTW Insurance', type: 'Life Insurance' },
    { name: 'Ping An', type: 'Composite Insurance' },
    { name: 'China Life', type: 'Life Insurance' },
    { name: 'CPIC', type: 'Composite Insurance' },
    { name: 'AIA', type: 'Life Insurance' }
  ];

  const features = isZh ? [
    '灵活的险种支持',
    '快速的渠道接入',
    '强大的数据分析',
    '完善的合规管理'
  ] : [
    'Flexible product support',
    'Fast channel integration',
    'Powerful data analytics',
    'Complete compliance management'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {data.subtitle}
            </p>
            <p className="text-lg text-stripe-gray">
              {data.description}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '知名保险公司客户' : 'Notable Insurance Company Clients'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurers.map((insurer, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-stripe-light rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple/20 to-stripe-blue/20 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-stripe-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stripe-dark">{insurer.name}</h3>
                    <p className="text-sm text-stripe-gray">{insurer.type}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '为什么选择易保' : 'Why Choose eBao'}
              </h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-stripe-purple" />
                    <span className="text-stripe-gray">{feature}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-purple mb-2">300+</div>
                    <div className="text-stripe-gray">{isZh ? '保险公司' : 'Insurers'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">20+</div>
                    <div className="text-stripe-gray">{isZh ? '年经验' : 'Years'}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href={`/${lng}/contact/`}>
            <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
              {isZh ? '联系我们' : 'Contact Us'}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
