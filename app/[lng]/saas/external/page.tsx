import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Globe, Users, TrendingUp, CheckCircle, Shield, Handshake } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function ExternalPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas.external;

  const features = [
    {
      icon: Users,
      title: isZh ? '合作伙伴管理' : 'Partner Management',
      description: isZh ? '管理经纪人、代理机构等合作伙伴' : 'Manage brokers, agencies and other partners'
    },
    {
      icon: TrendingUp,
      title: isZh ? '业绩追踪' : 'Performance Tracking',
      description: isZh ? '实时追踪销售业绩' : 'Real-time sales performance tracking'
    },
    {
      icon: Shield,
      title: isZh ? '合规管理' : 'Compliance Management',
      description: isZh ? '确保业务合规运营' : 'Ensure compliant business operations'
    },
    {
      icon: Handshake,
      title: isZh ? '渠道拓展' : 'Channel Expansion',
      description: isZh ? '轻松接入新的销售渠道' : 'Easily add new sales channels'
    }
  ];

  const benefits = isZh ? [
    '统一合作伙伴门户',
    '灵活的佣金计算',
    '实时数据同步',
    'API集成能力',
    '移动端支持'
  ] : [
    'Unified partner portal',
    'Flexible commission calculation',
    'Real-time data sync',
    'API integration',
    'Mobile support'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-white" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '合作伙伴和渠道管理系统' : 'Partner and Channel Management System'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '外部用户应用为保险中介、经纪人、渠道合作伙伴提供业务管理系统，帮助合作伙伴高效开展保险业务。'
                  : 'External application provides business management systems for insurance agents, brokers, and channel partners to help them efficiently conduct insurance business.'}
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-stripe-purple" />
                    <span className="text-stripe-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-purple mb-2">500+</div>
                    <div className="text-stripe-gray">{isZh ? '合作伙伴' : 'Partners'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">10K+</div>
                    <div className="text-stripe-gray">{isZh ? '经纪人' : 'Agents'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">99%</div>
                    <div className="text-stripe-gray">{isZh ? '系统可用性' : 'Uptime'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">API</div>
                    <div className="text-stripe-gray">{isZh ? '集成' : 'Integration'}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '核心功能' : 'Core Features'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-stripe-dark mb-2">{feature.title}</h3>
                  <p className="text-stripe-gray text-sm">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '准备好开始了吗？' : 'Ready to Get Started?'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们，了解更多关于外部用户应用的详细信息'
              : 'Contact us to learn more about External application'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
