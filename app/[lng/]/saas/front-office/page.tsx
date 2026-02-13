import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Smartphone, MessageSquare, Calendar, TrendingUp } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function FrontOfficePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: Smartphone,
      title: isZh ? '移动展业' : 'Mobile Sales',
      description: isZh ? '随时随地开展保险业务' : 'Conduct insurance business anytime, anywhere'
    },
    {
      icon: MessageSquare,
      title: isZh ? '客户沟通' : 'Customer Communication',
      description: isZh ? '多渠道客户互动管理' : 'Multi-channel customer interaction management'
    },
    {
      icon: Calendar,
      title: isZh ? '任务管理' : 'Task Management',
      description: isZh ? '智能任务提醒和跟进' : 'Smart task reminders and follow-ups'
    },
    {
      icon: TrendingUp,
      title: isZh ? '业绩追踪' : 'Performance Tracking',
      description: isZh ? '实时业绩数据和分析' : 'Real-time performance data and analytics'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-blue/5 to-stripe-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '前端用户应用' : 'Front-office Applications'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '为保险代理人和销售人员提供的移动展业工具'
                : 'Mobile sales tools for insurance agents and sales staff'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8">
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
