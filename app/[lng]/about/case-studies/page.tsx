import { FadeIn } from '@/components/motion/fade-in';
import { ArrowRight, Building, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function CaseStudiesPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.about.caseStudies;

  const cases = isZh ? [
    {
      client: '大昌行',
      industry: '一般保险',
      challenge: '传统保险系统无法满足业务快速增长需求',
      solution: '采用易保云中台，实现数字化转型',
      result: '业务处理效率提升50%'
    },
    {
      client: '万通保险',
      industry: '人寿保险',
      challenge: '多渠道保险产品管理困难',
      solution: '建立统一的保险产品管理平台',
      result: '产品上线时间缩短70%'
    },
    {
      client: '某泰国保险公司',
      industry: '综合保险',
      challenge: '需要符合当地监管要求',
      solution: '部署本地化合规管理系统',
      result: '顺利通过监管检查'
    }
  ] : [
    {
      client: 'DCH',
      industry: 'General Insurance',
      challenge: 'Traditional insurance systems could not meet rapid business growth needs',
      solution: 'Adopted eBaoCloud for digital transformation',
      result: 'Business processing efficiency improved by 50%'
    },
    {
      client: 'WTW Insurance',
      industry: 'Life Insurance',
      challenge: 'Difficulties in multi-channel insurance product management',
      solution: 'Established unified insurance product management platform',
      result: 'Product launch time reduced by 70%'
    },
    {
      client: 'Thailand Insurer',
      industry: 'Composite Insurance',
      challenge: 'Need to comply with local regulatory requirements',
      solution: 'Deployed localized compliance management system',
      result: 'Successfully passed regulatory inspections'
    }
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
          <div className="space-y-8">
            {cases.map((caseStudy, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stripe-dark">{caseStudy.client}</h3>
                      <span className="text-stripe-purple text-sm">{caseStudy.industry}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-stripe-dark mb-2">{isZh ? '挑战' : 'Challenge'}</h4>
                      <p className="text-stripe-gray text-sm">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-stripe-dark mb-2">{isZh ? '解决方案' : 'Solution'}</h4>
                      <p className="text-stripe-gray text-sm">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-stripe-dark mb-2">{isZh ? '成果' : 'Result'}</h4>
                      <p className="text-stripe-purple font-medium text-sm">{caseStudy.result}</p>
                    </div>
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
            {isZh ? '了解更多成功案例' : 'Learn More Case Studies'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '探索更多易保如何帮助客户实现数字化转型'
              : 'Explore how eBao helps customers achieve digital transformation'}
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
