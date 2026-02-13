import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Smartphone, FileText, Users, TrendingUp, Award, MessageSquare } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function MobileAdvisorPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: FileText,
      title: isZh ? '智能计划书' : 'Smart Proposals',
      description: isZh 
        ? '一键生成专业保险计划书，支持多种产品组合方案'
        : 'One-click generation of professional insurance proposals with multiple product combinations'
    },
    {
      icon: Users,
      title: isZh ? '客户管理' : 'Customer Management',
      description: isZh
        ? '全方位客户信息管理，支持客户分级和标签管理'
        : 'Comprehensive customer information management with grading and tagging'
    },
    {
      icon: TrendingUp,
      title: isZh ? '业绩追踪' : 'Performance Tracking',
      description: isZh
        ? '实时业绩数据，目标管理，激励机制一目了然'
        : 'Real-time performance data, goal management, and incentive tracking'
    },
    {
      icon: Award,
      title: isZh ? '在线培训' : 'Online Training',
      description: isZh
        ? '丰富的产品知识和销售技巧培训课程'
        : 'Rich courses on product knowledge and sales skills'
    },
    {
      icon: MessageSquare,
      title: isZh ? '即时沟通' : 'Instant Communication',
      description: isZh
        ? '内置IM系统，支持团队协作和客户沟通'
        : 'Built-in IM system supporting team collaboration and customer communication'
    },
    {
      icon: Smartphone,
      title: isZh ? '移动展业' : 'Mobile Sales',
      description: isZh
        ? '随时随地开展业务，支持离线模式'
        : 'Do business anytime, anywhere with offline mode support'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-blue/10 via-stripe-purple/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80" 
            alt="Mobile Advisor"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '移动顾问' : 'Mobile Advisor'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '代理人移动展业工具，支持全流程线上化，为代理人业务拓展提供丰富的移动展业工具'
                : 'Mobile sales tool for insurance agents supporting full digital process with rich mobile sales tools'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '立即下载' : 'Download Now'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '查看演示' : 'View Demo'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* App Preview */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stripe-dark mb-6">
                {isZh ? '随时随地，展业无忧' : 'Sales Anytime, Anywhere'}
              </h2>
              <p className="text-stripe-gray mb-6">
                {isZh
                  ? '移动顾问为保险代理人提供全方位的移动展业支持，从产品展示、计划书生成到在线投保，一站式解决代理人的所有业务需求。'
                  : 'Mobile Advisor provides comprehensive mobile sales support for insurance agents, from product presentation to online policy issuance.'}
              </p>
              <ul className="space-y-4">
                {[
                  isZh ? '支持iOS和Android双平台' : 'Support for iOS and Android',
                  isZh ? '离线模式，无网络也能展业' : 'Offline mode for sales without network',
                  isZh ? '数据实时同步，多端协同' : 'Real-time data sync across devices',
                  isZh ? '安全可靠，数据加密存储' : 'Secure and reliable with encrypted storage'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-stripe-gray">
                    <div className="w-2 h-2 bg-stripe-purple rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80" 
                alt="App Interface"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '功能亮点' : 'Key Features'}
            </h2>
            <p className="text-stripe-gray max-w-2xl mx-auto">
              {isZh 
                ? '强大的移动展业工具，助力代理人高效展业'
                : 'Powerful mobile sales tools to help agents work efficiently'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-blue to-stripe-purple rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
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
