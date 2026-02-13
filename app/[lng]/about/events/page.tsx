import { FadeIn } from '@/components/motion/fade-in';
import { Calendar, MapPin, ArrowRight, Video } from 'lucide-react';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = { 'zh-CN': zhCN, en };

export default function EventsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';
  const data = t.about.events;

  const events = [
    {
      title: isZh ? '保险科技创新峰会' : 'Insurtech Innovation Summit',
      date: isZh ? '2026年3月15日' : 'March 15, 2026',
      location: isZh ? '上海' : 'Shanghai',
      type: isZh ? '线下活动' : 'In-Person',
      description: isZh ? '探讨保险科技最新发展趋势' : 'Exploring the latest trends in insurtech'
    },
    {
      title: isZh ? '数字化转型研讨会' : 'Digital Transformation Workshop',
      date: isZh ? '2026年4月20日' : 'April 20, 2026',
      location: isZh ? '线上' : 'Online',
      type: isZh ? '网络研讨会' : 'Webinar',
      description: isZh ? '分享保险数字化转型最佳实践' : 'Sharing best practices for insurance digital transformation'
    },
    {
      title: isZh ? '亚洲保险科技大会' : 'Asia Insurtech Conference',
      date: isZh ? '2026年5月' : 'May 2026',
      location: isZh ? '新加坡' : 'Singapore',
      type: isZh ? '线下活动' : 'In-Person',
      description: isZh ? '汇聚亚洲保险科技精英' : 'Gathering Asia insurtech elites'
    }
  ];

  const pastEvents = isZh ? [
    '2025年度保险科技论坛',
    '易保云产品发布会',
    '保险数字化转型巡回研讨会'
  ] : [
    '2025 Insurtech Forum',
    'eBaoCloud Product Launch',
    'Insurance Digital Transformation Tour'
  ];

  return (
    <div className="pt-20">
      <section className="py-24 bg-gradient-to-br from-stripe-purple/5 to-stripe-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-stripe-dark mb-6">
              {data.title}
            </h1>
            <p className="text-xl text-stripe-gray mb-8">
              {data.subtitle}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stripe-dark mb-4">
              {isZh ? '即将举办' : 'Upcoming Events'}
            </h2>
          </div>
          <div className="space-y-6">
            {events.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-stripe-light rounded-2xl p-8 flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-stripe-purple to-stripe-blue rounded-xl flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className="px-3 py-1 bg-stripe-purple/10 text-stripe-purple text-xs font-medium rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-stripe-dark mb-2">{event.title}</h3>
                    <p className="text-stripe-gray mb-4">{event.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-stripe-gray">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <button className="px-4 py-2 bg-stripe-purple text-white font-medium rounded-lg hover:bg-stripe-purple/90">
                      {isZh ? '报名' : 'Register'}
                    </button>
                  </div>
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
              {isZh ? '往期活动' : 'Past Events'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6">
                  <h3 className="font-bold text-stripe-dark mb-2">{event}</h3>
                  <a href="#" className="text-stripe-purple text-sm font-medium flex items-center">
                    {isZh ? '查看详情' : 'View Details'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stripe-dark mb-6">
            {isZh ? '订阅我们的活动' : 'Subscribe to Our Events'}
          </h2>
          <p className="text-lg text-stripe-gray mb-8 max-w-2xl mx-auto">
            {isZh 
              ? '获取最新活动信息和邀请'
              : 'Get the latest event information and invitations'}
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
