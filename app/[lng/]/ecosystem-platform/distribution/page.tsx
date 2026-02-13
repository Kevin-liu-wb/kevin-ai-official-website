import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Globe, Building2, Landmark, Users, Store, Plane } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function DistributionPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const channels = [
    {
      icon: Building2,
      title: isZh ? '银行渠道' : 'Banking Channel',
      description: isZh ? '与泰国本地银行合作，提供嵌入式保险服务' : 'Partner with Thai banks for embedded insurance services'
    },
    {
      icon: Store,
      title: isZh ? '汽车经销商' : 'Auto Dealers',
      description: isZh ? '为汽车经销商提供车险产品和管理工具' : 'Provide auto insurance products and management tools for dealers'
    },
    {
      icon: Users,
      title: isZh ? '保险代理' : 'Insurance Agents',
      description: isZh ? '支持独立代理人和代理公司展业' : 'Support independent agents and agencies'
    },
    {
      icon: Plane,
      title: isZh ? '旅游渠道' : 'Travel Channel',
      description: isZh ? '与旅行社、OTA合作销售旅行保险' : 'Partner with travel agencies and OTAs for travel insurance'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-pink/10 via-stripe-purple/10 to-stripe-blue/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1528181304800-259b08848558?w=1200&q=80" 
            alt="Thailand"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '泰国保险分销云' : 'Thailand Distribution Cloud'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '专为泰国市场设计的保险分销平台，支持多渠道保险产品管理和分发，助力保险业务在泰国市场的快速发展'
                : 'Insurance distribution platform specifically designed for Thailand market, supporting multi-channel insurance product management'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '了解详情' : 'Learn More'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '联系销售' : 'Contact Sales'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '平台能力' : 'Platform Capabilities'}
            </h2>
            <p className="text-stripe-gray max-w-2xl mx-auto">
              {isZh 
                ? '全面的保险分销解决方案，覆盖泰国市场主流渠道'
                : 'Comprehensive insurance distribution solution covering major channels in Thailand'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6 p-6 bg-stripe-light rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-pink to-stripe-purple rounded-xl flex items-center justify-center flex-shrink-0">
                    <channel.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stripe-dark mb-2">{channel.title}</h3>
                    <p className="text-stripe-gray">{channel.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Localization */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '本地化支持' : 'Local Support'}
              </h2>
              <p className="text-stripe-gray mb-6">
                {isZh
                  ? '深入了解泰国保险市场，提供符合当地监管要求的产品和服务，支持泰语、英语双语界面。'
                  : 'Deep understanding of Thailand insurance market with products and services meeting local regulatory requirements.'}
              </p>
              <ul className="space-y-4">
                {[
                  isZh ? '符合泰国保险监管要求' : 'Compliant with Thai insurance regulations',
                  isZh ? '支持泰语和英语双语' : 'Support Thai and English languages',
                  isZh ? '本地化支付和结算' : 'Localized payment and settlement',
                  isZh ? '本地客服支持团队' : 'Local customer support team'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-stripe-gray">
                    <div className="w-2 h-2 bg-stripe-pink rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553603227-2358aabe821e?w=800&q=80" 
                alt="Thailand Market"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
