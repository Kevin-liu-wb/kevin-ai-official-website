import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Target, Eye, Award, Globe, Users, Zap } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function CompanyPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const values = [
    {
      icon: Target,
      title: isZh ? '使命' : 'Mission',
      content: isZh ? '让保险变得容易' : 'Making Insurance Easy'
    },
    {
      icon: Eye,
      title: isZh ? '愿景' : 'Vision',
      content: isZh ? '成为全球保险行业数字化转型的首选技术伙伴' : 'Become the preferred technology partner for insurance digital transformation globally'
    }
  ];

  const milestones = [
    { year: '2000', event: isZh ? '易保网络成立' : 'eBaoTech Founded' },
    { year: '2005', event: isZh ? '推出核心系统解决方案' : 'Launched Core System Solutions' },
    { year: '2010', event: isZh ? '进入东南亚市场' : 'Entered Southeast Asia Market' },
    { year: '2015', event: isZh ? '发布易保云中台' : 'Launched eBaoCloud Middleware' },
    { year: '2020', event: isZh ? '服务超过300家保险公司' : 'Served 300+ Insurance Companies' },
    { year: '2024', event: isZh ? '推出AI解决方案' : 'Launched AI Solutions' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '公司简介' : 'Company Overview'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '秉承"让保险变得容易"的公司使命，易保为保险行业提供数字化解决方案，从核心系统到前端应用，全面赋能保险数字化转型'
                : 'With the mission of "Making Insurance Easy", eBao provides digital solutions for the insurance industry'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{value.title}</h3>
                  <p className="text-stripe-gray text-lg">{value.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '发展历程' : 'Our Journey'}
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-stripe-purple/20" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 text-right">
                      {index % 2 === 0 && (
                        <>
                          <div className="text-3xl font-bold text-stripe-purple mb-1">{milestone.year}</div>
                          <div className="text-stripe-gray">{milestone.event}</div>
                        </>
                      )}
                    </div>
                    <div className="w-4 h-4 bg-stripe-purple rounded-full relative z-10" />
                    <div className="w-1/2 pl-8">
                      {index % 2 !== 0 && (
                        <>
                          <div className="text-3xl font-bold text-stripe-purple mb-1">{milestone.year}</div>
                          <div className="text-stripe-gray">{milestone.event}</div>
                        </>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '全球办公室' : 'Global Offices'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-stripe-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-stripe-dark mb-4">{isZh ? '上海总部' : 'Shanghai HQ'}</h3>
                <p className="text-stripe-gray">
                  {isZh ? '上海市淞沪路270号创智天地广场3号楼' : 'Building 3, Chuangzhi Tiandi Plaza, 270 Songhu Road, Shanghai'}
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="bg-stripe-light rounded-2xl p-8">
                <h3 className="text-xl font-bold text-stripe-dark mb-4">{isZh ? '无锡研发中心' : 'Wuxi R&D Center'}</h3>
                <p className="text-stripe-gray">
                  {isZh ? '无锡市滨湖区绣溪路50号K-Park商务中心1号楼' : 'Building 1, K-Park Business Center, 50 Xiuxi Road, Wuxi'}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
