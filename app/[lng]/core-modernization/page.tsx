import { FadeIn } from '@/components/motion/fade-in';
import { Code, Database, Layers } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ModernizationPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const resources = [
    {
      icon: Code,
      title: isZh ? '样例应用和源代码库' : 'Sample Apps & Source Code',
      description: isZh
        ? '提供丰富的样例应用和源代码，帮助快速启动项目'
        : 'Rich sample applications and source code to kickstart your project'
    },
    {
      icon: Layers,
      title: isZh ? '开放框架' : 'Open Frameworks',
      description: isZh
        ? '基于最佳实践的开放框架，支持寿险和产险业务'
        : 'Best-practice frameworks for life and general insurance'
    },
    {
      icon: Database,
      title: isZh ? 'API 文档' : 'API Documentation',
      description: isZh
        ? '完整的API文档和开发者指南'
        : 'Complete API documentation and developer guides'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-pink/5 to-stripe-purple/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '核心系统现代化' : 'Core Modernization'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh
                ? '易保提供了一些样例应用、源代码库和框架，帮助保险公司快速实现核心系统的现代化升级。'
                : 'eBao provides sample applications, source code libraries, and frameworks to help insurers modernize their core systems.'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{resource.title}</h3>
                  <p className="text-stripe-gray">{resource.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
