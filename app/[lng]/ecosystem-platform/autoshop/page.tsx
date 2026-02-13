import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Car, Zap, Shield, Users, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function AutoshopPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.ecosystem.autoshop;

  const features = [
    {
      icon: Car,
      title: isZh ? '车辆管理' : 'Vehicle Management',
      description: isZh ? '支持多品牌、多车型车辆保险方案配置和管理' : 'Support for multi-brand and multi-model vehicle insurance configuration'
    },
    {
      icon: Zap,
      title: isZh ? '快速出单' : 'Quick Policy Issuance',
      description: isZh ? '分钟级出单，提升客户体验' : 'Minute-level policy issuance for better customer experience'
    },
    {
      icon: Shield,
      title: isZh ? '风险管理' : 'Risk Management',
      description: isZh ? '智能风险评估，降低理赔风险' : 'Intelligent risk assessment to reduce claims risk'
    },
    {
      icon: Users,
      title: isZh ? '团队管理' : 'Team Management',
      description: isZh ? '完善的销售团队管理和绩效考核' : 'Complete sales team management and performance assessment'
    }
  ];

  const benefits = isZh ? [
    '3个月快速上线',
    '支持近90家店面同时使用',
    '逾400名一线员工培训',
    '全流程线上化操作',
    '移动端支持'
  ] : [
    '3-month rapid deployment',
    'Support for 90+ dealerships',
    '400+ trained staff',
    'Full-process digitization',
    'Mobile support'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
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
                {isZh ? '为汽车经销商集团打造' : 'Built for Auto Dealer Groups'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '车商云是专为汽车经销商集团设计的保险业务管理平台，帮助您高效管理保险业务，提升客户服务质量。'
                  : 'Autoshop is an insurance business management platform designed specifically for auto dealer groups, helping you efficiently manage insurance business and improve customer service quality.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">90+</div>
                    <div className="text-stripe-gray">{isZh ? '店面数量' : 'Dealerships'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">400+</div>
                    <div className="text-stripe-gray">{isZh ? '培训员工' : 'Trained Staff'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">3</div>
                    <div className="text-stripe-gray">{isZh ? '个月上线' : 'Months to Deploy'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                    <div className="text-stripe-gray">{isZh ? '线上化' : 'Digitalized'}</div>
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
              ? '联系我们，了解更多关于车商云的详细信息'
              : 'Contact us to learn more about Autoshop'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
