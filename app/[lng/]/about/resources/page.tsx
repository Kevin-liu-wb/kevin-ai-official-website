import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { FileText, Download, BookOpen, Video } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function ResourcesPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const resources = [
    {
      icon: FileText,
      title: isZh ? '产品宣传册' : 'Product Brochures',
      description: isZh ? '易保云中台产品详细介绍' : 'Detailed introduction to eBaoCloud platform',
      items: [
        isZh ? '易保云中台产品手册' : 'eBaoCloud Platform Handbook',
        isZh ? '核心系统现代化方案' : 'Core System Modernization',
        isZh ? '保险生态平台介绍' : 'Insurance Ecosystem Platform'
      ]
    },
    {
      icon: BookOpen,
      title: isZh ? '技术白皮书' : 'Technical Whitepapers',
      description: isZh ? '深度技术解析和架构设计' : 'In-depth technical analysis and architecture',
      items: [
        isZh ? '微服务架构设计指南' : 'Microservices Architecture Guide',
        isZh ? 'API设计最佳实践' : 'API Design Best Practices',
        isZh ? '云原生转型之路' : 'Cloud-Native Transformation'
      ]
    },
    {
      icon: FileText,
      title: isZh ? '行业报告' : 'Industry Reports',
      description: isZh ? '保险科技行业洞察和趋势分析' : 'Insurtech industry insights and trends',
      items: [
        isZh ? '2024保险科技趋势报告' : '2024 Insurtech Trends Report',
        isZh ? '数字化核心系统指南' : 'Digital Core System Guide',
        isZh ? '开放保险生态白皮书' : 'Open Insurance Ecosystem'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '资源中心' : 'Resources'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '获取最新的产品资料和行业洞察，下载产品宣传册、技术白皮书、行业报告等资源'
                : 'Get the latest product materials and industry insights, download brochures, whitepapers, and reports'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Resources */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 h-full">
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mb-6">
                    <resource.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{resource.title}</h3>
                  <p className="text-stripe-gray mb-6">{resource.description}</p>
                  <ul className="space-y-3 mb-6">
                    {resource.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-stripe-gray text-sm">
                        <div className="w-1.5 h-1.5 bg-stripe-purple rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    {isZh ? '下载全部' : 'Download All'}
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '订阅资讯' : 'Subscribe'}
            </h2>
            <p className="text-stripe-gray mb-8">
              {isZh ? '订阅我们的资讯，获取最新的产品动态和行业洞察' : 'Subscribe to our newsletter for latest product updates and industry insights'}
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder={isZh ? '输入您的邮箱' : 'Enter your email'}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-stripe-purple"
              />
              <Button>{isZh ? '订阅' : 'Subscribe'}</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
