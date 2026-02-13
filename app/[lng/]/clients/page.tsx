import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building2, Users, Handshake, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ClientsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const sections = [
    {
      icon: Building2,
      title: isZh ? '保险公司' : 'Insurance Companies',
      description: isZh 
        ? '服务全球300多家保险公司，从灵活的初创企业到保费收入400多亿的保险公司'
        : 'Serving 300+ insurance companies globally',
      href: `/${lng}/clients/insurers`,
      stats: '300+'
    },
    {
      icon: Users,
      title: isZh ? '渠道及金融创新公司' : 'Channels & FinTech',
      description: isZh 
        ? '为银行、支付、移动出行等垂直行业提供保险技术支持'
        : 'Insurance technology support for banking, payments, mobility and other verticals',
      href: `/${lng}/clients/channels`,
      stats: '9+'
    },
    {
      icon: Handshake,
      title: isZh ? '合作伙伴' : 'Partners',
      description: isZh 
        ? '与全球领先的技术公司、咨询公司、系统集成商建立战略合作关系'
        : 'Strategic partnerships with leading technology companies worldwide',
      href: `/${lng}/clients/partners`,
      stats: '50+'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '客户及合作伙伴' : 'Clients & Partners'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '易保服务于300多家保险公司及众多保险代理、经纪公司及其它生态伙伴'
                : 'Serving 300+ insurance companies and numerous ecosystem partners'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sections */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link href={section.href}>
                  <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mb-6">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-stripe-purple mb-2">{section.stats}</div>
                    <h3 className="text-xl font-bold text-stripe-dark mb-3">{section.title}</h3>
                    <p className="text-stripe-gray mb-6">{section.description}</p>
                    <div className="flex items-center text-stripe-purple font-medium">
                      {isZh ? '了解更多' : 'Learn More'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-stripe-dark to-stripe-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              {isZh ? '成为我们的合作伙伴' : 'Become Our Partner'}
            </h2>
            <p className="text-white/80 mb-8">
              {isZh 
                ? '与易保合作，共建保险科技生态'
                : 'Partner with eBao to build the insurtech ecosystem together'}
            </p>
            <Button size="lg" className="bg-white text-stripe-purple hover:bg-white/90">
              {isZh ? '联系我们' : 'Contact Us'}
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
