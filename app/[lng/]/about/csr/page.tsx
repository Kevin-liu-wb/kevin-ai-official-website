import { FadeIn } from '@/components/motion/fade-in';
import { Heart, Globe, Users, BookOpen } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function CsrPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const initiatives = [
    {
      icon: Heart,
      title: isZh ? '公益慈善' : 'Charitable Giving',
      description: isZh 
        ? '积极参与社会公益活动，支持教育、医疗和扶贫项目'
        : 'Actively participate in social welfare activities, supporting education, healthcare, and poverty alleviation projects'
    },
    {
      icon: Globe,
      title: isZh ? '环境保护' : 'Environmental Protection',
      description: isZh 
        ? '致力于绿色办公和可持续发展，减少碳足迹'
        : 'Committed to green office practices and sustainable development, reducing carbon footprint'
    },
    {
      icon: Users,
      title: isZh ? '员工关怀' : 'Employee Care',
      description: isZh 
        ? '关注员工身心健康，提供良好的工作环境和发展机会'
        : 'Focus on employee physical and mental health, providing good working environment and development opportunities'
    },
    {
      icon: BookOpen,
      title: isZh ? '知识分享' : 'Knowledge Sharing',
      description: isZh 
        ? '推动行业知识分享，培养保险科技人才'
        : 'Promote industry knowledge sharing and cultivate insurtech talent'
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 via-stripe-blue/5 to-stripe-pink/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '企业社会责任' : 'Corporate Social Responsibility'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '秉承"让保险变得容易"的使命，我们积极履行企业社会责任，为社会创造更大价值'
                : 'With the mission of "Making Insurance Easy", we actively fulfill corporate social responsibility and create greater value for society'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '我们的行动' : 'Our Initiatives'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple to-stripe-pink rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{item.title}</h3>
                  <p className="text-stripe-gray">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
