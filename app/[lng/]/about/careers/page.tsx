import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Clock, ArrowRight, Heart, Coffee, GraduationCap } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function CareersPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const jobs = [
    {
      title: isZh ? '高级Java开发工程师' : 'Senior Java Developer',
      department: isZh ? '研发部' : 'R&D',
      location: isZh ? '上海/无锡' : 'Shanghai/Wuxi',
      type: isZh ? '全职' : 'Full-time'
    },
    {
      title: isZh ? '产品经理' : 'Product Manager',
      department: isZh ? '产品部' : 'Product',
      location: isZh ? '上海' : 'Shanghai',
      type: isZh ? '全职' : 'Full-time'
    },
    {
      title: isZh ? '解决方案架构师' : 'Solution Architect',
      department: isZh ? '售前部' : 'Pre-sales',
      location: isZh ? '上海/香港' : 'Shanghai/Hong Kong',
      type: isZh ? '全职' : 'Full-time'
    },
    {
      title: isZh ? '客户成功经理' : 'Customer Success Manager',
      department: isZh ? '客户成功部' : 'Customer Success',
      location: isZh ? '上海' : 'Shanghai',
      type: isZh ? '全职' : 'Full-time'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: isZh ? '健康福利' : 'Health Benefits',
      description: isZh ? '完善的医疗保险和健康体检' : 'Comprehensive medical insurance and health checkups'
    },
    {
      icon: Coffee,
      title: isZh ? '工作生活平衡' : 'Work-Life Balance',
      description: isZh ? '弹性工作时间，充足的带薪年假' : 'Flexible working hours and generous paid leave'
    },
    {
      icon: GraduationCap,
      title: isZh ? '学习发展' : 'Learning & Development',
      description: isZh ? '丰富的培训机会和职业发展路径' : 'Rich training opportunities and career development paths'
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
              {isZh ? '工作机会' : 'Careers'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '加入易保，共创未来。我们正在寻找优秀的人才，一起改变保险行业'
                : 'Join eBao and shape the future. We are looking for talented people to change the insurance industry together'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '员工福利' : 'Benefits'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{benefit.title}</h3>
                  <p className="text-stripe-gray">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-stripe-dark mb-8">
              {isZh ? '开放职位' : 'Open Positions'}
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-stripe-dark mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-stripe-gray text-sm">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <Button>
                      {isZh ? '申请职位' : 'Apply'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
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
              {isZh ? '没有找到合适的职位？' : 'Don\'t see the right position?'}
            </h2>
            <p className="text-white/80 mb-8">
              {isZh ? '发送您的简历给我们，我们会妥善保管并在有合适职位时联系您' : 'Send us your resume and we will keep it on file and contact you when suitable positions arise'}
            </p>
            <Button size="lg" className="bg-white text-stripe-purple hover:bg-white/90">
              {isZh ? '发送简历' : 'Send Resume'}
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
