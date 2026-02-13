import { FadeIn } from '@/components/motion/fade-in';
import { FileText, Download, Book, Video, ArrowRight } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function ResourcesPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.about.resources;

  const resources = isZh ? [
    { 
      title: '产品宣传册', 
      description: '了解易保云完整产品线',
      icon: FileText,
      category: '宣传册'
    },
    { 
      title: '技术白皮书', 
      description: '深入了解技术架构和解决方案',
      icon: Book,
      category: '技术文档'
    },
    { 
      title: '案例研究', 
      description: '成功客户案例分析',
      icon: FileText,
      category: '案例'
    },
    { 
      title: '视频演示', 
      description: '产品功能演示视频',
      icon: Video,
      category: '媒体'
    }
  ] : [
    { 
      title: 'Product Brochures', 
      description: 'Learn about the complete eBaoCloud product line',
      icon: FileText,
      category: 'Brochures'
    },
    { 
      title: 'White Papers', 
      description: 'In-depth technical architecture and solutions',
      icon: Book,
      category: 'Technical'
    },
    { 
      title: 'Case Studies', 
      description: 'Successful customer case analyses',
      icon: FileText,
      category: 'Cases'
    },
    { 
      title: 'Video Demos', 
      description: 'Product feature demonstration videos',
      icon: Video,
      category: 'Media'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 flex gap-6 hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center">
                      <resource.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <span className="inline-block px-3 py-1 bg-stripe-purple/10 text-stripe-purple text-xs font-medium rounded-full mb-2">
                      {resource.category}
                    </span>
                    <h3 className="text-xl font-bold text-stripe-dark mb-2">{resource.title}</h3>
                    <p className="text-stripe-gray mb-4">{resource.description}</p>
                    <button className="flex items-center text-stripe-purple font-medium hover:underline">
                      {isZh ? '下载' : 'Download'}
                      <Download className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '需要更多帮助？' : 'Need More Help?'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '联系我们的团队，获取更多资源和技术支持'
              : 'Contact our team for more resources and technical support'}
          </p>
          <a 
            href={`/${lng}/contact/`}
            className="inline-flex items-center px-6 py-3 bg-stripe-purple text-white font-medium rounded-lg hover:bg-stripe-purple/90"
          >
            {isZh ? '联系我们' : 'Contact Us'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
