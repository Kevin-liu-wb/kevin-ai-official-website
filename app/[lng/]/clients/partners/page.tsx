import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Handshake, Cloud, Code2, GraduationCap, Briefcase } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function PartnersPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const partnerTypes = [
    {
      icon: Cloud,
      title: isZh ? '云服务合作伙伴' : 'Cloud Partners',
      description: isZh 
        ? '与全球领先的云服务商合作，提供稳定可靠的云端部署方案'
        : 'Partner with leading cloud providers for stable and reliable deployment',
      partners: ['AWS', 'Azure', '阿里云', '华为云']
    },
    {
      icon: Code2,
      title: isZh ? '技术合作伙伴' : 'Technology Partners',
      description: isZh
        ? '与技术公司深度合作，整合前沿技术能力'
        : 'Deep collaboration with tech companies integrating cutting-edge capabilities',
      partners: ['Oracle', 'Microsoft', 'MongoDB', 'Redis']
    },
    {
      icon: GraduationCap,
      title: isZh ? '咨询合作伙伴' : 'Consulting Partners',
      description: isZh
        ? '与顶级咨询公司合作，为客户提供专业咨询服务'
        : 'Partner with top consulting firms to provide professional advisory services',
      partners: ['McKinsey', 'BCG', 'Deloitte', 'PwC']
    },
    {
      icon: Briefcase,
      title: isZh ? '系统集成商' : 'System Integrators',
      description: isZh
        ? '与系统集成商合作，确保项目成功交付'
        : 'Collaborate with system integrators to ensure successful project delivery',
      partners: ['IBM', 'Accenture', 'Infosys', 'TCS']
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" 
            alt="Partners"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '合作伙伴' : 'Partners'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '与全球领先的技术公司、咨询公司、系统集成商建立战略合作关系，共建保险科技生态'
                : 'Strategic partnerships with leading technology companies, consulting firms, and system integrators worldwide'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '成为合作伙伴' : 'Become a Partner'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '联系我们' : 'Contact Us'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '合作伙伴生态' : 'Partner Ecosystem'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((type, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center">
                      <type.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-stripe-dark">{type.title}</h3>
                  </div>
                  <p className="text-stripe-gray mb-6">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.partners.map((partner, i) => (
                      <span key={i} className="px-3 py-1 bg-white rounded-full text-sm text-stripe-gray">
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '合作优势' : 'Partnership Benefits'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isZh ? '技术支持' : 'Technical Support',
                description: isZh ? '专业的技术培训和支持服务' : 'Professional technical training and support'
              },
              {
                title: isZh ? '市场资源' : 'Marketing Resources',
                description: isZh ? '联合营销活动和市场推广支持' : 'Joint marketing activities and promotion support'
              },
              {
                title: isZh ? '商业机会' : 'Business Opportunities',
                description: isZh ? '共享客户资源和商业机会' : 'Shared customer resources and business opportunities'
              }
            ].map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{benefit.title}</h3>
                  <p className="text-stripe-gray">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
