import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Shield, Truck, Users, CheckCircle, BarChart3, Settings } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function MyTruckSurePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas.mytrucksure;

  const features = [
    {
      icon: Truck,
      title: isZh ? '车队管理' : 'Fleet Management',
      description: isZh ? '管理车队车辆信息' : 'Manage fleet vehicle information'
    },
    {
      icon: Users,
      title: isZh ? '司机管理' : 'Driver Management',
      description: isZh ? '管理司机档案和资质' : 'Manage driver profiles and qualifications'
    },
    {
      icon: BarChart3,
      title: isZh ? '风险分析' : 'Risk Analytics',
      description: isZh ? '智能风险评估' : 'Intelligent risk assessment'
    },
    {
      icon: Settings,
      title: isZh ? '灵活配置' : 'Flexible Configuration',
      description: isZh ? '根据业务需求定制' : 'Customizable based on business needs'
    }
  ];

  const benefits = isZh ? [
    '专为商用车队设计',
    '支持多种车型',
    '灵活的保险方案',
    '实时数据分析',
    '成本优化建议'
  ] : [
    'Designed for commercial fleets',
    'Support for multiple vehicle types',
    'Flexible insurance plans',
    'Real-time data analytics',
    'Cost optimization suggestions'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-white" />
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
                {isZh ? '商用车保险解决方案' : 'Commercial Vehicle Insurance Solution'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? 'MyTruckSure是专为商用车队设计的保险管理平台，支持车队保险、司机管理等功能，帮助物流企业和运输公司有效管理保险风险。'
                  : 'MyTruckSure is an insurance management platform designed specifically for commercial vehicle fleets, supporting fleet insurance, driver management and other functions to help logistics companies effectively manage insurance risks.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">500+</div>
                    <div className="text-stripe-gray">{isZh ? '车队客户' : 'Fleet Customers'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">10K+</div>
                    <div className="text-stripe-gray">{isZh ? '在保车辆' : 'Insured Vehicles'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">30%</div>
                    <div className="text-stripe-gray">{isZh ? '成本降低' : 'Cost Reduction'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">99%</div>
                    <div className="text-stripe-gray">{isZh ? '客户满意度' : 'Satisfaction'}</div>
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
              ? '联系我们，了解更多关于MyTruckSure的详细信息'
              : 'Contact us to learn more about MyTruckSure'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
