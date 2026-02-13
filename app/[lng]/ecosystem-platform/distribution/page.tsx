import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Globe, Zap, Shield, Users, CheckCircle, MapPin } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function DistributionPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.ecosystem.distribution;

  const features = [
    {
      icon: Globe,
      title: isZh ? '本地化支持' : 'Localized Support',
      description: isZh ? '专为泰国市场设计，符合当地法规' : 'Designed for Thailand market, compliant with local regulations'
    },
    {
      icon: Zap,
      title: isZh ? '多渠道分销' : 'Multi-channel Distribution',
      description: isZh ? '支持银行、电信、线上等多渠道分销' : 'Support for bank, telecom, online and other channels'
    },
    {
      icon: Shield,
      title: isZh ? '合规管理' : 'Compliance Management',
      description: isZh ? '符合泰国保险监管要求' : 'Compliant with Thai insurance regulations'
    },
    {
      icon: Users,
      title: isZh ? '代理人网络' : 'Agent Network',
      description: isZh ? '支持大规模代理人团队管理' : 'Support for large-scale agent team management'
    }
  ];

  const benefits = isZh ? [
    '符合泰国保险监管',
    '多语言支持',
    '本地化支付集成',
    '快速产品配置',
    '实时数据分析'
  ] : [
    'Thai insurance regulation compliant',
    'Multi-language support',
    'Local payment integration',
    'Rapid product configuration',
    'Real-time data analytics'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-stripe-purple" />
              <span className="text-stripe-purple font-semibold">Thailand</span>
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
                {isZh ? '泰国保险分销解决方案' : 'Thailand Insurance Distribution Solution'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '泰国保险分销云是专为泰国市场设计的保险分销平台，支持多渠道保险产品管理和分发，帮助保险公司快速拓展泰国市场。'
                  : 'Thailand Insurance Distribution Cloud is an insurance distribution platform designed specifically for the Thai market, supporting multi-channel insurance product management and distribution to help insurers quickly expand in Thailand.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">THB</div>
                    <div className="text-stripe-gray">{isZh ? '本地货币' : 'Local Currency'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">OIC</div>
                    <div className="text-stripe-gray">{isZh ? '监管合规' : 'Regulation'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">TH</div>
                    <div className="text-stripe-gray">{isZh ? '泰国语言' : 'Thai Lang'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">API</div>
                    <div className="text-stripe-gray">{isZh ? '开放接口' : 'Open API'}</div>
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
              ? '联系我们，了解更多关于泰国保险分销云的详细信息'
              : 'Contact us to learn more about Thailand Insurance Distribution Cloud'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
