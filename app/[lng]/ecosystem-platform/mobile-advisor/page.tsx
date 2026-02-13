import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Smartphone, Zap, Shield, Users, CheckCircle, MessageSquare } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function MobileAdvisorPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.ecosystem.mobileAdvisor;

  const features = [
    {
      icon: Smartphone,
      title: isZh ? '移动优先' : 'Mobile-First',
      description: isZh ? '随时随地进行业务操作，支持iOS和Android' : 'Operate anytime, anywhere with iOS and Android support'
    },
    {
      icon: Zap,
      title: isZh ? '快速出单' : 'Quick Policy Issuance',
      description: isZh ? '分钟级出单，提升展业效率' : 'Minute-level policy issuance for improved efficiency'
    },
    {
      icon: MessageSquare,
      title: isZh ? '客户沟通' : 'Customer Communication',
      description: isZh ? '内置即时通讯，方便与客户沟通' : 'Built-in instant messaging for easy client communication'
    },
    {
      icon: Users,
      title: isZh ? '团队管理' : 'Team Management',
      description: isZh ? '完善的代理人团队管理功能' : 'Complete agent team management features'
    }
  ];

  const benefits = isZh ? [
    '全流程线上化',
    '丰富的展业工具',
    '客户管理一体化',
    '业绩实时追踪',
    '离线支持'
  ] : [
    'Full-process digitization',
    'Rich business tools',
    'Integrated customer management',
    'Real-time performance tracking',
    'Offline support'
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
                {isZh ? '代理人移动展业利器' : 'Agent Mobile Business Tool'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '移动顾问是专为保险代理人设计的移动展业工具，支持全流程线上化，为代理人业务拓展提供丰富的移动展业工具。'
                  : 'Mobile Advisor is a mobile business tool designed specifically for insurance agents, supporting full-process digitization and providing rich mobile tools for business development.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">100%</div>
                    <div className="text-stripe-gray">{isZh ? '移动化' : 'Mobile'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">7×24</div>
                    <div className="text-stripe-gray">{isZh ? '随时可用' : 'Available'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">90%</div>
                    <div className="text-stripe-gray">{isZh ? '效率提升' : 'Efficiency'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">0</div>
                    <div className="text-stripe-gray">{isZh ? '地点限制' : 'Location Limits'}</div>
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
              ? '联系我们，了解更多关于移动顾问的详细信息'
              : 'Contact us to learn more about Mobile Advisor'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
