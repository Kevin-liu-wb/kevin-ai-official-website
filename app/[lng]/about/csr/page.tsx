import { FadeIn } from '@/components/motion/fade-in';
import { Heart, Globe, BookOpen, Users, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function CsrPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const initiatives = isZh ? [
    { title: '绿色环保', description: '采用绿色技术，减少碳排放', icon: Globe },
    { title: '教育支持', description: '支持保险科技人才培养', icon: BookOpen },
    { title: '社区服务', description: '积极参与社区公益活动', icon: Users },
    { title: '保险普惠', description: '推动保险服务普惠化', icon: Heart }
  ] : [
    { title: 'Green Environment', description: 'Adopting green technology to reduce carbon emissions', icon: Globe },
    { title: 'Education Support', description: 'Supporting insurance technology talent development', icon: BookOpen },
    { title: 'Community Service', description: 'Actively participating in community welfare activities', icon: Users },
    { title: 'Insurance Inclusion', description: 'Promoting inclusive insurance services', icon: Heart }
  ];

  const stats = isZh ? [
    { value: '5000+', label: '植树数量' },
    { value: '100+', label: '支持学生' },
    { value: '50+', label: '公益活动' },
    { value: '1M+', label: '受益人群' }
  ] : [
    { value: '5000+', label: 'Trees Planted' },
    { value: '100+', label: 'Students Supported' },
    { value: '50+', label: 'Charity Activities' },
    { value: '1M+', label: 'People Benefited' }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '企业社会责任' : 'Corporate Social Responsibility'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '易保积极履行企业社会责任，致力于创造更美好的社会'
                : 'eBao actively fulfills corporate social responsibility, committed to creating a better society'}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-stripe-purple/20 to-stripe-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <initiative.icon className="w-7 h-7 text-stripe-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-stripe-dark mb-2">{initiative.title}</h3>
                  <p className="text-stripe-gray text-sm">{initiative.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '我们的贡献' : 'Our Contributions'}
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl font-bold text-stripe-purple mb-2">{stat.value}</div>
                  <div className="text-stripe-gray">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
