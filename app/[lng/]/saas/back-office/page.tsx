import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Users, FileText, BarChart3, Settings } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function BackOfficePage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: Users,
      title: isZh ? '用户管理' : 'User Management',
      description: isZh ? '完整的用户权限管理体系' : 'Complete user permission management'
    },
    {
      icon: FileText,
      title: isZh ? '保单管理' : 'Policy Management',
      description: isZh ? '全流程保单生命周期管理' : 'Full lifecycle policy management'
    },
    {
      icon: BarChart3,
      title: isZh ? '数据报表' : 'Reporting',
      description: isZh ? '多维度数据分析和报表' : 'Multi-dimensional data analysis and reporting'
    },
    {
      icon: Settings,
      title: isZh ? '系统配置' : 'System Configuration',
      description: isZh ? '灵活的系统参数配置' : 'Flexible system parameter configuration'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '后台用户应用' : 'Back-office Applications'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '为保险公司后台运营人员提供的综合管理应用'
                : 'Comprehensive management applications for insurance company back-office staff'}
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
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mb-6">
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
