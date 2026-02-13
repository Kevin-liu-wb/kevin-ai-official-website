import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Users, CheckCircle, Globe, ArrowRight, CreditCard, Smartphone } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function ChannelsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.clients.channels;

  const channels = isZh ? [
    { name: '银行', icon: CreditCard },
    { name: '移动出行', icon: Smartphone },
    { name: '电信', icon: Globe },
    { name: '旅行社', icon: Globe },
    { name: '经纪人', icon: Users },
    { name: '支付平台', icon: CreditCard }
  ] : [
    { name: 'Banking', icon: CreditCard },
    { name: 'Mobility', icon: Smartphone },
    { name: 'Telecom', icon: Globe },
    { name: 'Travel', icon: Globe },
    { name: 'Brokers', icon: Users },
    { name: 'Payment', icon: CreditCard }
  ];

  const features = isZh ? [
    '多渠道快速接入',
    '统一的保险产品管理',
    '实时数据同步',
    '灵活的佣金结算'
  ] : [
    'Multi-channel quick integration',
    'Unified insurance product management',
    'Real-time data sync',
    'Flexible commission settlement'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
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
              {isZh ? '支持的渠道类型' : 'Supported Channel Types'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {channels.map((channel, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-stripe-light rounded-xl p-6 text-center">
                  <channel.icon className="w-8 h-8 text-stripe-purple mx-auto mb-3" />
                  <h3 className="font-medium text-stripe-dark">{channel.name}</h3>
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
                {isZh ? '赋能保险分销渠道' : 'Empowering Insurance Distribution Channels'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">500+</div>
                    <div className="text-stripe-gray">{isZh ? '渠道伙伴' : 'Channel Partners'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">10K+</div>
                    <div className="text-stripe-gray">{isZh ? '接入点' : 'Access Points'}</div>
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
