import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Car, Users, BarChart3, Shield, Zap, Clock } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function AutoshopPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const features = [
    {
      icon: Car,
      title: isZh ? '车辆管理' : 'Vehicle Management',
      description: isZh 
        ? '全面的车辆信息管理，支持多品牌、多车型统一管理'
        : 'Comprehensive vehicle information management supporting multiple brands and models'
    },
    {
      icon: Users,
      title: isZh ? '客户运营' : 'Customer Operations',
      description: isZh
        ? '客户画像分析，精准营销，提升客户转化率和满意度'
        : 'Customer profiling and precise marketing to improve conversion and satisfaction'
    },
    {
      icon: BarChart3,
      title: isZh ? '数据分析' : 'Data Analytics',
      description: isZh
        ? '实时数据看板，经营状况一目了然'
        : 'Real-time dashboard for clear business insights'
    },
    {
      icon: Shield,
      title: isZh ? '风险控制' : 'Risk Control',
      description: isZh
        ? '智能风控系统，降低业务风险'
        : 'Intelligent risk control system to reduce business risks'
    },
    {
      icon: Zap,
      title: isZh ? '快速出单' : 'Quick Policy Issuance',
      description: isZh
        ? '分钟级出单，提升客户体验'
        : 'Minute-level policy issuance for better customer experience'
    },
    {
      icon: Clock,
      title: isZh ? '全天候服务' : '24/7 Service',
      description: isZh
        ? '7×24小时系统支持，保障业务连续性'
        : '24/7 system support ensuring business continuity'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stripe-purple/10 via-stripe-blue/10 to-stripe-pink/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80" 
            alt="Auto Dealer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {isZh ? '车商云' : 'Auto Dealer Cloud'}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {isZh 
                ? '为汽车经销商集团提供的保险业务管理平台，帮助车商实现保险业务的数字化转型升级'
                : 'Insurance business management platform for auto dealer groups, helping dealers achieve digital transformation'}
            </p>
            <div className="flex gap-4">
              <Button size="lg">
                {isZh ? '申请演示' : 'Request Demo'}
              </Button>
              <Button variant="outline" size="lg">
                {isZh ? '了解更多' : 'Learn More'}
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '90+', label: isZh ? '服务店面' : 'Stores Served' },
              { value: '400+', label: isZh ? '培训员工' : 'Staff Trained' },
              { value: '3', label: isZh ? '个月上线' : 'Months to Launch' },
              { value: '50%', label: isZh ? '效率提升' : 'Efficiency Gain' }
            ].map((stat, index) => (
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

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '核心功能' : 'Core Features'}
            </h2>
            <p className="text-stripe-gray max-w-2xl mx-auto">
              {isZh 
                ? '全方位的车商保险业务管理解决方案'
                : 'Comprehensive insurance business management solution for auto dealers'}
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-3">{feature.title}</h3>
                  <p className="text-stripe-gray">{feature.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gradient-to-br from-stripe-dark to-stripe-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <p className="text-2xl text-white/90 mb-8 italic">
              {isZh 
                ? '"易保车商云团队通过3个月时间、近20场远程培训，为大昌行近90家店面、逾400名一线员工提供了详尽的操作培训和指导...其服务态度和质量深得一线人员好评。"'
                : '"The eBao Auto Dealer Cloud team provided detailed training and guidance for nearly 90 stores and over 400 frontline employees through 3 months and nearly 20 remote training sessions..."'}
            </p>
            <div className="text-white">
              <div className="font-semibold">{isZh ? '赵迎春' : 'Zhao Yingchun'}</div>
              <div className="text-white/70">{isZh ? '大昌行集团大昌保代总经理' : 'General Manager, Dah Chong Hong Insurance Agency'}</div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
