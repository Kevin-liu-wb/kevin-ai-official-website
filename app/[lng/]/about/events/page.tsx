import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function EventsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const upcomingEvents = [
    {
      date: '2024-10-25',
      title: isZh ? '亚马逊云科技金融峰会' : 'AWS Financial Services Summit',
      location: isZh ? '中国深圳' : 'Shenzhen, China',
      type: isZh ? '即将举行' : 'Upcoming',
      description: isZh 
        ? '与行业专家共同探讨云计算在金融保险行业的应用' 
        : 'Explore cloud computing applications in financial services with industry experts'
    },
    {
      date: '2024-11-15',
      title: isZh ? '保险科技创新论坛' : 'InsurTech Innovation Forum',
      location: isZh ? '中国上海' : 'Shanghai, China',
      type: isZh ? '即将举行' : 'Upcoming',
      description: isZh 
        ? '聚焦保险科技创新，分享最佳实践' 
        : 'Focus on insurtech innovation and share best practices'
    }
  ];

  const pastEvents = [
    {
      date: '2024-03-20',
      title: 'Insurance Analytics & AI Innovation Asia Pacific 2024',
      location: isZh ? '中国香港' : 'Hong Kong, China',
      type: isZh ? '已结束' : 'Past',
      description: isZh 
        ? '探讨保险分析和人工智能在亚太地区的应用' 
        : 'Discuss insurance analytics and AI applications in Asia Pacific'
    },
    {
      date: '2023-11-10',
      title: isZh ? '易保网络年度客户大会' : 'eBao Annual Customer Conference',
      location: isZh ? '中国无锡' : 'Wuxi, China',
      type: isZh ? '已结束' : 'Past',
      description: isZh 
        ? '与全球客户分享产品路线图和技术创新' 
        : 'Share product roadmap and technology innovations with global customers'
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
              {isZh ? '市场活动' : 'Events'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '参与我们的活动，参加行业会议、网络研讨会、产品发布会等活动'
                : 'Join our events, industry conferences, webinars, and product launches'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-stripe-dark mb-8">
              {isZh ? '即将举行的活动' : 'Upcoming Events'}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-stripe-dark mb-4">{event.title}</h3>
                  <div className="space-y-2 text-stripe-gray mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-stripe-gray mb-6">{event.description}</p>
                  <Button>
                    {isZh ? '立即报名' : 'Register Now'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-24 bg-stripe-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl font-bold text-stripe-dark mb-8">
              {isZh ? '往期活动' : 'Past Events'}
            </h2>
          </FadeIn>

          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                          {event.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-stripe-dark mb-2">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-stripe-gray text-sm mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                      <p className="text-stripe-gray">{event.description}</p>
                    </div>
                    <Button variant="outline">
                      {isZh ? '查看回顾' : 'View Recap'}
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
