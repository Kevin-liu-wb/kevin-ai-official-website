import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Quote, ArrowRight } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function CaseStudiesPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const cases = [
    {
      company: isZh ? '大昌行集团' : 'Dah Chong Hong',
      industry: isZh ? '汽车经销商' : 'Auto Dealer',
      title: isZh ? '全面启用易保车商云平台' : 'Full Deployment of eBao Auto Dealer Cloud',
      quote: isZh 
        ? '易保车商云团队通过3个月时间、近20场远程培训，为大昌行近90家店面、逾400名一线员工提供了详尽的操作培训和指导；通过认真细致的数据整理，实现了数十万基盘客户的有效转换。'
        : 'The eBao Auto Dealer Cloud team provided detailed training for nearly 90 stores and over 400 frontline employees through 3 months and nearly 20 remote training sessions.',
      author: isZh ? '赵迎春' : 'Zhao Yingchun',
      position: isZh ? '大昌行集团大昌保代总经理' : 'General Manager, DCH Insurance Agency',
      results: [
        isZh ? '90家门店全面数字化' : '90 stores fully digitalized',
        isZh ? '400+员工培训完成' : '400+ staff trained',
        isZh ? '数十万客户数据迁移' : 'Hundreds of thousands of customer data migrated'
      ]
    },
    {
      company: isZh ? '万通保险' : 'YF Life Insurance',
      industry: isZh ? '人寿保险' : 'Life Insurance',
      title: isZh ? '正式启用易保寿险核心系统' : 'Official Launch of eBao Life Core System',
      quote: isZh 
        ? '新系统高效接入保险生态圈，整合线上及线下渠道，为未来提供丰富、灵活、创新的保险产品及服务，奠定稳固的基础。此次核心系统替换，除了大大提高核心系统运营效率以外，将为万通保险与外部技术和生态集成，为保单持有人和代理人提供更好的体验及坚实的技术支撑。'
        : 'The new system efficiently connects to the insurance ecosystem, integrating online and offline channels, laying a solid foundation for future rich, flexible, and innovative insurance products and services.',
      author: isZh ? '郑达钊 Daryl' : 'Daryl Cheng',
      position: isZh ? '万通保险资讯系统部高级副总裁' : 'SVP, IT Department, YF Life Insurance',
      results: [
        isZh ? '核心系统全面现代化' : 'Core system fully modernized',
        isZh ? '线上线下渠道整合' : 'Online and offline channel integration',
        isZh ? '运营效率大幅提升' : 'Significant improvement in operational efficiency'
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
              {isZh ? '成功案例' : 'Case Studies'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '了解我们如何帮助客户成功，探索易保如何帮助保险公司、经纪公司和渠道伙伴实现数字化转型'
                : 'Learn how we help clients succeed and explore how eBao enables digital transformation'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 md:p-12">
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-stripe-purple/10 text-stripe-purple rounded-full text-sm font-medium">
                      {caseItem.company}
                    </span>
                    <span className="px-3 py-1 bg-stripe-blue/10 text-stripe-blue rounded-full text-sm font-medium">
                      {caseItem.industry}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-stripe-dark mb-8">
                    {caseItem.title}
                  </h2>

                  <div className="relative pl-8 border-l-4 border-stripe-purple mb-8">
                    <Quote className="absolute -left-6 top-0 w-12 h-12 text-stripe-purple/20" />
                    <p className="text-lg text-stripe-gray italic mb-4">
                      "{caseItem.quote}"
                    </p>
                    <div className="text-stripe-dark font-semibold">{caseItem.author}</div>
                    <div className="text-stripe-gray text-sm">{caseItem.position}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {caseItem.results.map((result, i) => (
                      <div key={i} className="flex items-center gap-2 text-stripe-gray">
                        <div className="w-2 h-2 bg-stripe-purple rounded-full" />
                        {result}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline">
                    {isZh ? '阅读完整案例' : 'Read Full Case Study'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-stripe-dark to-stripe-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              {isZh ? '准备好开始您的数字化之旅了吗？' : 'Ready to Start Your Digital Journey?'}
            </h2>
            <p className="text-white/80 mb-8">
              {isZh ? '联系我们的专家团队，获取定制化解决方案' : 'Contact our expert team for customized solutions'}
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-white text-stripe-purple hover:bg-white/90">
                {isZh ? '联系我们' : 'Contact Us'}
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                {isZh ? '查看全部案例' : 'View All Cases'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
