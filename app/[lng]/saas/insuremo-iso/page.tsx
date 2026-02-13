import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Cloud, Link, Zap, Shield, CheckCircle, Globe } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function InsuremoIsoPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas.insuremoIso;

  const features = [
    {
      icon: Link,
      title: isZh ? 'API集成' : 'API Integration',
      description: isZh ? '标准化的API接口' : 'Standardized API interfaces'
    },
    {
      icon: Zap,
      title: isZh ? '快速接入' : 'Quick Integration',
      description: isZh ? '分钟级渠道接入' : 'Minute-level channel integration'
    },
    {
      icon: Globe,
      title: isZh ? '多渠道支持' : 'Multi-channel Support',
      description: isZh ? '支持各类分销渠道' : 'Support for various distribution channels'
    },
    {
      icon: Shield,
      title: isZh ? '安全可靠' : 'Secure & Reliable',
      description: isZh ? '企业级安全保障' : 'Enterprise-grade security'
    }
  ];

  const benefits = isZh ? [
    '标准化的API接口',
    '丰富的集成文档',
    '沙箱测试环境',
    '7×24技术支持',
    '多语言SDK支持'
  ] : [
    'Standardized API interfaces',
    'Comprehensive integration documentation',
    'Sandbox testing environment',
    '7×24 technical support',
    'Multi-language SDK support'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Cloud className="w-8 h-8 text-white" />
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
                {isZh ? '连接保险公司与分销渠道的桥梁' : 'Bridge Between Insurers and Distribution Channels'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? 'InsureMO ISO中台是连接保险公司与各类分销渠道的中间件平台，提供标准化的API接口，帮助保险公司快速接入多种渠道。'
                  : 'InsureMO ISO middleware platform connects insurers with various distribution channels, providing standardized API interfaces to help insurers quickly integrate multiple channels.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">100+</div>
                    <div className="text-stripe-gray">{isZh ? 'API接口' : 'APIs'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">50+</div>
                    <div className="text-stripe-gray">{isZh ? '渠道类型' : 'Channels'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">99.9%</div>
                    <div className="text-stripe-gray">{isZh ? '可用性' : 'Uptime'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">ms</div>
                    <div className="text-stripe-gray">{isZh ? '响应时间' : 'Response'}</div>
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
              ? '联系我们，了解更多关于InsureMO ISO中台的详细信息'
              : 'Contact us to learn more about InsureMO ISO middleware'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
