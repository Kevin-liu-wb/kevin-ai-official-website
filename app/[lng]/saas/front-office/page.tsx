import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Users, FileText, CreditCard, MessageSquare, CheckCircle, Smartphone } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function FrontOfficePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas.frontOffice;

  const features = [
    {
      icon: FileText,
      title: isZh ? '在线投保' : 'Online Policy Purchase',
      description: isZh ? '快速便捷的在线投保流程' : 'Quick and easy online policy purchase'
    },
    {
      icon: CreditCard,
      title: isZh ? '在线支付' : 'Online Payment',
      description: isZh ? '多种支付方式支持' : 'Multiple payment methods support'
    },
    {
      icon: MessageSquare,
      title: isZh ? '客户服务' : 'Customer Service',
      description: isZh ? '7×24小时在线客服' : '7×24 customer service'
    },
    {
      icon: Smartphone,
      title: isZh ? '移动端支持' : 'Mobile Support',
      description: isZh ? 'iOS和Android原生应用' : 'iOS and Android native apps'
    }
  ];

  const benefits = isZh ? [
    '友好的用户界面',
    '快速响应体验',
    '安全保障',
    '个性化推荐',
    '全流程线上化'
  ] : [
    'User-friendly interface',
    'Fast response experience',
    'Security guarantee',
    'Personalized recommendations',
    'Full-process digitization'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '面向客户的保险服务平台' : 'Customer-Focused Insurance Service Platform'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '前台用户应用为保险客户提供在线投保、保单查询、理赔申请等自助服务，让客户享受便捷的保险服务体验。'
                  : 'Front Office application provides customers with self-service functions such as online policy purchase, policy inquiry, and claims application for a convenient insurance experience.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">5min</div>
                    <div className="text-stripe-gray">{isZh ? '快速投保' : 'Quick Buy'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">100%</div>
                    <div className="text-stripe-gray">{isZh ? '线上化' : 'Online'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">7×24</div>
                    <div className="text-stripe-gray">{isZh ? '服务' : 'Service'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">0</div>
                    <div className="text-stripe-gray">{isZh ? '等待时间' : 'Wait Time'}</div>
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
              ? '联系我们，了解更多关于前台用户应用的详细信息'
              : 'Contact us to learn more about Front Office application'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
