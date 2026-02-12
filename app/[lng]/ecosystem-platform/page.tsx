import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Globe, Zap, Shield } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function EcosystemPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: Globe,
      title: isZh ? '全渠道连接' : 'Omni-channel Connectivity',
      description: isZh 
        ? '连接任何分销渠道，包括线上平台、移动应用、代理人网络等'
        : 'Connect any distribution channel including online platforms, mobile apps, and agent networks'
    },
    {
      icon: Zap,
      title: isZh ? '快速产品发布' : 'Rapid Product Launch',
      description: isZh
        ? '从产品设计到上线只需数周，而非数月'
        : 'Launch products in weeks, not months'
    },
    {
      icon: Shield,
      title: isZh ? '安全可靠' : 'Secure & Reliable',
      description: isZh
        ? '企业级安全架构，99.99%可用性保证'
        : 'Enterprise-grade security with 99.99% uptime guarantee'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '保险生态平台' : 'Insurance Ecosystem Platform'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '易保云中台是为保险公司、保险经纪/代理公司、兼业渠道、保险科技公司和初创企业提供的保险中间件平台。从灵活的初创企业到保费收入400多亿的保险公司，易保云中台已有300多个全球成功案例。'
                : 'eBaoCloud middleware platform for insurers, brokers, channels, and insurtech companies. From agile startups to insurers with 40B+ premium, we have 300+ global success cases.'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{feature.title}</h3>
                  <p className="text-stripe-gray">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
