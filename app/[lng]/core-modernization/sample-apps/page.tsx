import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Code, FileText, Database, Server, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function SampleAppsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.modernization.sampleApps;

  const features = [
    {
      icon: Code,
      title: isZh ? '源代码开放' : 'Open Source Code',
      description: isZh ? '提供完整的源代码供参考和学习' : 'Complete source code available for reference and learning'
    },
    {
      icon: FileText,
      title: isZh ? '详细文档' : 'Detailed Documentation',
      description: isZh ? '完善的技术文档和API说明' : 'Comprehensive technical documentation and API specifications'
    },
    {
      icon: Database,
      title: isZh ? '数据模型' : 'Data Models',
      description: isZh ? '标准化的数据模型设计' : 'Standardized data model design'
    },
    {
      icon: Server,
      title: isZh ? '参考架构' : 'Reference Architecture',
      description: isZh ? '可扩展的系统架构参考' : 'Scalable system architecture reference'
    }
  ];

  const benefits = isZh ? [
    '快速上手开发',
    '减少重复工作',
    '最佳实践参考',
    '灵活的定制能力',
    '持续更新支持'
  ] : [
    'Quick start development',
    'Reduce redundant work',
    'Best practice reference',
    'Flexible customization',
    'Continuous update support'
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
                {isZh ? '帮助保险公司快速实现核心系统现代化' : 'Help Insurers Rapidly Modernize Core Systems'}
              </h2>
              <p className="text-lg text-stripe-gray mb-6">
                {isZh 
                  ? '样例应用和源代码库为保险公司提供完整的参考实现，帮助开发团队快速理解和掌握核心系统的开发方法。'
                  : 'Sample apps and source code library provide complete reference implementations to help development teams quickly understand and master core system development methods.'}
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
                    <div className="text-4xl font-bold text-stripe-purple mb-2">50+</div>
                    <div className="text-stripe-gray">{isZh ? '样例应用' : 'Sample Apps'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-blue mb-2">100K+</div>
                    <div className="text-stripe-gray">{isZh ? '代码行数' : 'Lines of Code'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-stripe-pink mb-2">200+</div>
                    <div className="text-stripe-gray">{isZh ? 'API接口' : 'API Endpoints'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                    <div className="text-stripe-gray">{isZh ? '开源' : 'Open Source'}</div>
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
              ? '联系我们，了解更多关于样例应用的详细信息'
              : 'Contact us to learn more about sample applications'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '联系我们' : 'Contact Us'}
          </Button>
        </div>
      </section>
    </div>
  );
}
