import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building2, Globe2, TrendingUp, Award, Users2, Landmark } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function InsurersPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const categories = [
    {
      icon: Building2,
      title: isZh ? '寿险公司' : 'Life Insurers',
      description: isZh ? '支持传统寿险、健康险、养老险等多种业务' : 'Support traditional life, health, and pension insurance'
    },
    {
      icon: Landmark,
      title: isZh ? '财产险公司' : 'Property Insurers',
      description: isZh ? '车险、企财险、责任险等全方位解决方案' : 'Comprehensive solutions for auto, commercial, and liability insurance'
    },
    {
      icon: Users2,
      title: isZh ? '中小保险公司' : 'Small & Medium Insurers',
      description: isZh ? '敏捷灵活的解决方案，助力快速成长' : 'Agile and flexible solutions for rapid growth'
    }
  ];

  const clients = [
    { name: 'YF Life', region: isZh ? '香港' : 'Hong Kong' },
    { name: 'Chubb', region: isZh ? '全球' : 'Global' },
    { name: 'AXA', region: isZh ? '全球' : 'Global' },
    { name: 'Generali', region: isZh ? '欧洲' : 'Europe' },
    { name: 'Manulife', region: isZh ? '亚太' : 'Asia Pacific' },
    { name: 'Prudential', region: isZh ? '全球' : 'Global' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80" 
            alt="Insurance Companies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '保险公司' : 'Insurance Companies'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '服务全球300多家保险公司，从灵活的初创企业到保费收入400多亿的保险公司，易保云中台已有300多个全球成功案例'
                : 'Serving 300+ insurance companies globally, from agile startups to insurers with 40B+ premium'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '查看案例' : 'View Cases'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '联系我们' : 'Contact Us'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '300+', label: isZh ? '保险公司' : 'Insurers' },
              { value: '40B+', label: isZh ? '处理保费' : 'Premium Processed' },
              { value: '30+', label: isZh ? '国家地区' : 'Countries' },
              { value: '99.9%', label: isZh ? '系统可用性' : 'Uptime' }
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-stripe-purple mb-2">{stat.value}</div>
                  <div className="text-stripe-gray">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '服务范围' : 'Service Coverage'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{category.title}</h3>
                  <p className="text-stripe-gray">{category.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '部分客户' : 'Selected Clients'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <div className="text-lg font-bold text-stripe-dark mb-1">{client.name}</div>
                  <div className="text-sm text-stripe-gray">{client.region}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
