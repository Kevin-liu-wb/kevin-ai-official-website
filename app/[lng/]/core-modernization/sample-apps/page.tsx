import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Code2, BookOpen, Package, Layers, Terminal, GitBranch } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function SampleAppsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const resources = [
    {
      icon: Code2,
      title: isZh ? '源代码库' : 'Source Code Library',
      description: isZh 
        ? '开放的核心系统源代码，支持定制化开发'
        : 'Open core system source code supporting customization',
      count: '100+',
      unit: isZh ? '代码仓库' : 'Repositories'
    },
    {
      icon: Package,
      title: isZh ? '样例应用' : 'Sample Applications',
      description: isZh
        ? '完整的业务应用示例，快速理解系统架构'
        : 'Complete business application examples for quick understanding',
      count: '50+',
      unit: isZh ? '应用示例' : 'Examples'
    },
    {
      icon: BookOpen,
      title: isZh ? '技术文档' : 'Technical Documentation',
      description: isZh
        ? '详细的API文档和开发指南'
        : 'Detailed API documentation and development guides',
      count: '200+',
      unit: isZh ? '文档页面' : 'Pages'
    }
  ];

  const frameworks = [
    {
      icon: Layers,
      title: isZh ? '微服务架构' : 'Microservices Architecture',
      description: isZh ? '基于容器的微服务架构，支持弹性扩展' : 'Container-based microservices with elastic scaling'
    },
    {
      icon: Terminal,
      title: isZh ? 'API优先设计' : 'API-First Design',
      description: isZh ? 'RESTful API设计，支持多种集成方式' : 'RESTful API design supporting multiple integration methods'
    },
    {
      icon: GitBranch,
      title: isZh ? 'DevOps支持' : 'DevOps Support',
      description: isZh ? '完整的CI/CD流程，自动化部署' : 'Complete CI/CD pipeline with automated deployment'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80" 
            alt="Code"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '样例应用和源代码库' : 'Sample Apps & Source Code'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '提供样例应用、源代码库和框架，帮助保险公司快速实现核心系统的现代化升级'
                : 'Sample applications, source code libraries and frameworks to help insurers modernize core systems'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '浏览代码库' : 'Browse Repository'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '查看文档' : 'View Docs'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resources Stats */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '丰富的开发资源' : 'Rich Development Resources'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-stripe-purple mb-2">{resource.count}</div>
                  <div className="text-stripe-gray mb-4">{resource.unit}</div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-2">{resource.title}</h3>
                  <p className="text-stripe-gray text-sm">{resource.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '技术框架' : 'Technical Frameworks'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {frameworks.map((framework, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-blue to-stripe-purple rounded-xl flex items-center justify-center mb-6">
                    <framework.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{framework.title}</h3>
                  <p className="text-stripe-gray">{framework.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
