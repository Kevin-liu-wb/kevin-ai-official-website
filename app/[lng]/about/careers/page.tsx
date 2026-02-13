import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function CareersPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.about.careers;

  const benefits = isZh ? [
    '有竞争力的薪酬',
    '完善的福利体系',
    '广阔的发展空间',
    '创新的工作环境',
    '海外工作机会'
  ] : [
    'Competitive salary',
    'Comprehensive benefits',
    'Broad development opportunities',
    'Innovative work environment',
    'Overseas work opportunities'
  ];

  const jobs = isZh ? [
    { title: '高级软件工程师', department: '技术', location: '上海' },
    { title: '产品经理', department: '产品', location: '上海/北京' },
    { title: '解决方案架构师', department: '技术', location: '上海' },
    { title: '客户成功经理', department: '销售', location: '北京' }
  ] : [
    { title: 'Senior Software Engineer', department: 'Engineering', location: 'Shanghai' },
    { title: 'Product Manager', department: 'Product', location: 'Shanghai/Beijing' },
    { title: 'Solution Architect', department: 'Engineering', location: 'Shanghai' },
    { title: 'Customer Success Manager', department: 'Sales', location: 'Beijing' }
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-8 h-8 text-white" />
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '为什么加入我们' : 'Why Join Us'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-3 p-4">
                  <CheckCircle className="w-6 h-6 text-stripe-purple flex-shrink-0" />
                  <span className="text-stripe-dark font-medium">{benefit}</span>
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
              {isZh ? '热招职位' : 'Open Positions'}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div>
                    <h3 className="text-lg font-bold text-stripe-dark">{job.title}</h3>
                    <p className="text-stripe-gray">{job.department} · {job.location}</p>
                  </div>
                  <button className="text-stripe-purple font-medium flex items-center">
                    {isZh ? '申请' : 'Apply'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '准备好加入我们了吗？' : 'Ready to Join Us?'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '发送简历至 hr@ebaocloud.com'
              : 'Send your resume to hr@ebaocloud.com'}
          </p>
          <Button className="bg-stripe-purple hover:bg-stripe-purple/90">
            {isZh ? '查看更多职位' : 'View More Positions'}
          </Button>
        </div>
      </section>
    </div>
  );
}
