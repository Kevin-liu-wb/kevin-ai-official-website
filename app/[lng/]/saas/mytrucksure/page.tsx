import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Truck, Shield, BarChart3, MapPin } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function MytrucksurePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: Truck,
      title: isZh ? '车队管理' : 'Fleet Management',
      description: isZh ? '全面的商用车队信息管理' : 'Comprehensive commercial vehicle fleet information management'
    },
    {
      icon: Shield,
      title: isZh ? '保险管理' : 'Insurance Management',
      description: isZh ? '车险产品配置和保单管理' : 'Auto insurance product configuration and policy management'
    },
    {
      icon: BarChart3,
      title: isZh ? '数据分析' : 'Data Analytics',
      description: isZh ? '驾驶行为分析和风险评估' : 'Driving behavior analysis and risk assessment'
    },
    {
      icon: MapPin,
      title: isZh ? '实时追踪' : 'Real-time Tracking',
      description: isZh ? '车辆位置实时监控' : 'Real-time vehicle location monitoring'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-blue/5 to-stripe-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              MyTruckSure SaaS
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '商用车保险管理SaaS平台，为物流企业和车队提供一站式保险解决方案'
                : 'Commercial vehicle insurance management SaaS platform providing one-stop insurance solutions for logistics companies and fleets'}
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
