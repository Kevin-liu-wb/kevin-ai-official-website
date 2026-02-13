import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building2, Car, Plane, Wifi, ShoppingBag, HeartPulse } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ChannelsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const channels = [
    {
      icon: Building2,
      title: isZh ? '银行与金融' : 'Banking & Finance',
      description: isZh 
        ? '为银行、支付平台提供嵌入式保险解决方案'
        : 'Embedded insurance solutions for banks and payment platforms',
      examples: isZh ? '零售银行、信用卡、数字钱包' : 'Retail banking, credit cards, digital wallets'
    },
    {
      icon: Car,
      title: isZh ? '汽车出行' : 'Auto & Mobility',
      description: isZh
        ? '汽车经销商、出行平台的保险生态建设'
        : 'Insurance ecosystem for auto dealers and mobility platforms',
      examples: isZh ? '4S店、二手车平台、网约车' : 'Dealerships, used car platforms, ride-hailing'
    },
    {
      icon: Plane,
      title: isZh ? '旅游酒店' : 'Travel & Hospitality',
      description: isZh
        ? 'OTA、旅行社、酒店集团的旅行保险服务'
        : 'Travel insurance services for OTAs, agencies, hotel groups',
      examples: isZh ? '在线旅游、商务旅行、酒店预订' : 'Online travel, corporate travel, hotel booking'
    },
    {
      icon: Wifi,
      title: isZh ? '电信科技' : 'Telecom & Tech',
      description: isZh
        ? '电信运营商、互联网平台的保险赋能'
        : 'Insurance enablement for telecom operators and internet platforms',
      examples: isZh ? '移动通信、宽带服务、云服务' : 'Mobile services, broadband, cloud services'
    },
    {
      icon: ShoppingBag,
      title: isZh ? '电商零售' : 'E-commerce & Retail',
      description: isZh
        ? '电商平台、零售商的保险产品嵌入'
        : 'Embedded insurance products for e-commerce and retail',
      examples: isZh ? '综合电商、垂直电商、新零售' : 'Marketplaces, vertical e-commerce, new retail'
    },
    {
      icon: HeartPulse,
      title: isZh ? '医疗健康' : 'Health & Wellness',
      description: isZh
        ? '医疗机构、健康管理平台的保险对接'
        : 'Insurance integration for healthcare and wellness platforms',
      examples: isZh ? '互联网医疗、健康管理、宠物医疗' : 'Telemedicine, wellness, pet healthcare'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-blue/10 via-stripe-purple/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80" 
            alt="Channels"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '渠道及金融创新公司' : 'Channels & FinTech'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '为银行、支付、移动出行、经纪人和代理人、电信、旅行/酒店业等垂直行业提供保险技术支持，构建保险科技生态'
                : 'Insurance technology support for banking, payments, mobility, telecom, travel and other vertical industries'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '探索合作' : 'Explore Partnership'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '联系我们' : 'Contact Us'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Channels Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '垂直行业覆盖' : 'Vertical Industry Coverage'}
            </h2>
            <p className="text-stripe-gray max-w-2xl mx-auto">
              {isZh 
                ? '赋能9大垂直行业，构建开放保险生态'
                : 'Empowering 9 vertical industries to build open insurance ecosystems'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-blue to-stripe-purple rounded-xl flex items-center justify-center mb-6">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{channel.title}</h3>
                  <p className="text-stripe-gray mb-4">{channel.description}</p>
                  <div className="text-sm text-stripe-purple">
                    {isZh ? '包括：' : 'Includes: '} {channel.examples}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '渠道赋能价值' : 'Channel Enablement Value'}
              </h2>
              <ul className="space-y-4">
                {[
                  isZh ? '快速产品接入，周级上线' : 'Rapid product integration, weekly deployment',
                  isZh ? '统一API接口，降低集成成本' : 'Unified API interfaces, lower integration costs',
                  isZh ? '产品组合灵活配置' : 'Flexible product combination configuration',
                  isZh ? '实时数据同步与监控' : 'Real-time data sync and monitoring',
                  isZh ? '完善的渠道管理工具' : 'Comprehensive channel management tools'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-stripe-gray">
                    <div className="w-2 h-2 bg-stripe-purple rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                alt="Technology"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
