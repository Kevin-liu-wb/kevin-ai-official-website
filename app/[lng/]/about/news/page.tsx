import { FadeIn } from '@/components/motion/fade-in';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import zhCN from '@/i18n/locales/zh-CN.json';
import en from '@/i18n/locales/en.json';

const translations = {
  'zh-CN': zhCN,
  'en': en
};

export default function NewsPage({ params: { lng } }: { params: { lng: string } }) {
  const t = translations[lng as keyof typeof translations] || zhCN;
  const isZh = lng === 'zh-CN';

  const newsItems = [
    {
      date: '2024-07-06',
      category: isZh ? '产品发布' : 'Product Release',
      title: isZh ? '易保云中台人工智能解决方案亮相 2024 世界人工智能大会 WAIC 2024' : 'eBaoCloud AI Solutions Debut at WAIC 2024',
      excerpt: isZh 
        ? '易保网络携最新人工智能解决方案参加2024世界人工智能大会，展示AI在保险行业的创新应用。'
        : 'eBaoTech showcased latest AI solutions at WAIC 2024, demonstrating innovative AI applications in insurance.'
    },
    {
      date: '2023-08-31',
      category: isZh ? '市场活动' : 'Event',
      title: isZh ? '"汇聚香江之畔，共话银保业务的未来"—— 易保网络保险 CXO 系列午餐会首站在香港举办' : 'eBao Insurance CXO Lunch Series Launched in Hong Kong',
      excerpt: isZh 
        ? '易保网络在香港举办首场CXO午餐会，与行业领袖共同探讨银保业务的未来发展趋势。'
        : 'eBaoTech hosted the first CXO lunch meeting in Hong Kong to discuss future trends in bancassurance.'
    },
    {
      date: '2023-08-22',
      category: isZh ? '战略合作' : 'Partnership',
      title: isZh ? '易保云中台和懂保汇达成战略合作，为各保险机构及终端用户提供更全面、更智能化的工具' : 'eBaoCloud Partners with Dongbaohui for Comprehensive Solutions',
      excerpt: isZh 
        ? '易保云中台与懂保汇达成战略合作，共同为保险机构提供更全面的智能化解决方案。'
        : 'eBaoCloud and Dongbaohui announced strategic partnership to provide comprehensive intelligent solutions.'
    },
    {
      date: '2023-06-15',
      category: isZh ? '行业洞察' : 'Industry Insight',
      title: isZh ? '保险科技发展趋势：数字化转型成为必然选择' : 'Insurance Tech Trends: Digital Transformation Becomes Essential',
      excerpt: isZh 
        ? '随着客户需求的变化和技术的进步，保险行业的数字化转型已成为不可逆转的趋势。'
        : 'As customer needs evolve and technology advances, digital transformation in insurance has become irreversible.'
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
              {isZh ? '新闻动态' : 'News'}
            </h1>
            <p className="text-xl text-stripe-gray">
              {isZh 
                ? '了解易保最新动态，获取公司新闻、产品发布、行业活动等信息'
                : 'Stay updated with eBao news, product releases, and industry events'}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* News List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((news, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <article className="bg-stripe-light rounded-2xl p-8 hover:shadow-lg transition-shadow">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="px-3 py-1 bg-stripe-purple/10 text-stripe-purple rounded-full text-sm font-medium">
                      {news.category}
                    </span>
                    <span className="flex items-center gap-1 text-stripe-gray text-sm">
                      <Calendar className="w-4 h-4" />
                      {news.date}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-stripe-dark mb-3">
                    {news.title}
                  </h2>
                  <p className="text-stripe-gray mb-6">
                    {news.excerpt}
                  </p>
                  <Link 
                    href={`/${lng}/about/news/${news.date}`}
                    className="inline-flex items-center text-stripe-purple hover:text-stripe-dark font-medium transition-colors"
                  >
                    {isZh ? '阅读更多' : 'Read More'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Load More */}
          <FadeIn className="text-center mt-12">
            <Button variant="outline" size="lg">
              {isZh ? '加载更多' : 'Load More'}
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
