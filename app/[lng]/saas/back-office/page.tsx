import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building, FileText, Users, Settings, CheckCircle, BarChart3 } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function BackOfficePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.saas.backOffice;

  const features = [
    {
      icon: FileText,
      title: isZh ? '保单管理' : 'Policy Management',
      description: isZh ? '完整的保单生命周期管理' : 'Complete policy lifecycle management'
    },
    {
      icon: Users,
      title: isZh ? '客户管理' : 'Customer Management',
      description: isZh ? '统一的客户信息管理' : 'Unified customer information management'
    },
    {
      icon: BarChart3,
      title: isZh ? '数据分析' : 'Data Analytics',
      description: isZh ? '实时业务数据报表' : 'Real-time business data reports'
    },
    {
      icon: Settings,
      title: isZh ? '系统设置' : 'System Settings',
      description: isZh ? '灵活的系统配置' : 'Flexible system configuration'
    }
  ];

  const benefits = isZh ? [
    '完整的业务流程支持',
    '灵活的权限管理',
    '可定制的审批流程',
    '多险种支持',
    '集成外部系统'
  ] : [
    'Complete business process support',
    'Flexible permission management',
    'Customizable approval workflows',
    'Multi-product support',
    'External system integration'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-white" />
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
                {isZh ? '专业的保险业务管理后台' : 'Professional Insurance Business Management Backend'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '后台用户应用为保险公司后台管理人员提供完整的保单管理、承保管理、理赔管理等业务功能，帮助企业提升运营效率。'
                  : 'Back Office application provides insurers with complete policy management, underwriting, claims management and other business functions to help improve operational efficiency.'}
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
                    <div className="text-stripe-gray">{isZh ? '数字化' : 'Digital'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">7×24</div>
                    <div className="text-stripe-gray">{isZh ? '可用性' : 'Available'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">99.9%</div>
                    <div className="text-stripe-gray">{isZh ? '准确性' : 'Accuracy'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">API</div>
                    <div className="text-stripe-gray">{isZh ? '集成' : 'Integration'}</div>
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
              ? '联系我们，了解更多关于后台用户应用的详细信息'
              : 'Contact us to learn more about Back Office application'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
