import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Building, Globe, Award, Users, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function CompanyPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.about.company;

  const timeline = isZh ? [
    { year: '2000', title: '公司成立', description: '易保网络技术成立' },
    { year: '2005', title: '进入国际市场', description: '开始为海外保险公司提供解决方案' },
    { year: '2015', title: '云平台发布', description: '推出易保云中台平台' },
    { year: '2020', title: '全球扩张', description: '服务覆盖30多个国家和地区' },
    { year: '2025', title: 'AI 赋能', description: '引入人工智能技术' }
  ] : [
    { year: '2000', title: 'Company Founded', description: 'eBaoTech Network Technology established' },
    { year: '2005', title: 'Enter International Market', description: 'Started providing solutions to overseas insurers' },
    { year: '2015', title: 'Cloud Platform Launch', description: 'Launched eBaoCloud middleware platform' },
    { year: '2020', title: 'Global Expansion', description: 'Coverage across 30+ countries and regions' },
    { year: '2025', title: 'AI Empowerment', description: 'Introduced artificial intelligence technology' }
  ];

  const values = isZh ? [
    { title: '创新', description: '持续创新，引领行业发展' },
    { title: '专业', description: '深耕保险行业，提供专业解决方案' },
    { title: '合作', description: '与客户和伙伴共同成长' }
  ] : [
    { title: 'Innovation', description: 'Continuous innovation, leading industry development' },
    { title: 'Professionalism', description: 'Deep expertise in insurance, providing professional solutions' },
    { title: 'Collaboration', description: 'Growing together with customers and partners' }
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-8">
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{value.title}</h3>
                  <p className="text-stripe-gray">{value.description}</p>
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
              {isZh ? '发展历程' : 'Our Journey'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex gap-6 pb-8">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-xl font-bold text-stripe-purple">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-4 h-4 bg-stripe-purple rounded-full mt-1.5"></div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-stripe-dark">{item.title}</h3>
                    <p className="text-stripe-gray">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8 text-center">
                <Globe className="w-12 h-12 text-stripe-purple mx-auto mb-4" />
                <div className="text-3xl font-bold text-stripe-dark mb-2">30+</div>
                <div className="text-stripe-gray">{isZh ? '国家和地区' : 'Countries & Regions'}</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8 text-center">
                <Users className="w-12 h-12 text-stripe-blue mx-auto mb-4" />
                <div className="text-3xl font-bold text-stripe-dark mb-2">1000+</div>
                <div className="text-stripe-gray">{isZh ? '员工' : 'Employees'}</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-stripe-purple/10 to-stripe-blue/10 rounded-2xl p-8 text-center">
                <Award className="w-12 h-12 text-stripe-pink mx-auto mb-4" />
                <div className="text-3xl font-bold text-stripe-dark mb-2">100+</div>
                <div className="text-stripe-gray">{isZh ? '奖项' : 'Awards'}</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
